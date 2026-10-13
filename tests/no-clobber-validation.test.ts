/**
 * Rejects duplicate generated bindings with the same class, method kind, name, arity, and
 * JavaScript-visible type signature. Same-arity overloads with distinct signatures remain valid
 * because the patched runtime dispatcher can distinguish them.
 */

import { describe, it, expect } from 'vitest';
import * as fs from 'node:fs';
import * as path from 'node:path';

const BINDINGS_ROOT = path.resolve(import.meta.dirname, '../build/bindings');

/**
 * Empty baseline. Any entry is a generator or dispatcher regression and must be fixed at source.
 */
const EXPECTED_PENDING_CLOBBERS: ReadonlySet<string> = new Set();

type FunctionRegistration = {
  name: string;
  /** Which embind dispatch slot the registration targets. `function` =
   *  instance method (`.function("X", ...)`), `class_function` = static
   *  method (`.class_function("X", ...)`). Each slot is independent in
   *  embind, so collisions are bucketed per kind. */
  kind: 'function' | 'class_function';
  /** Arity of the JS-callable signature; -1 means the registration form
   *  could not be parsed (treated as a unique slot to avoid false positives). */
  arity: number;
  /**
   * Comma-joined normalized JavaScript types for visible arguments. Identical kind, name, arity,
   * and signature tuples cannot be distinguished; an empty string marks an unparsed registration.
   */
  jsEffectiveSignature: string;
  cppLine: number;
};

type ClassBlock = {
  className: string;
  filePath: string;
  startLine: number;
  registrations: FunctionRegistration[];
};

function listCppFiles(dir: string): string[] {
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listCppFiles(full));
    else if (entry.isFile() && entry.name.endsWith('.cpp')) out.push(full);
  }
  return out;
}

const CLASS_RE = /class_<\s*([A-Za-z_][\w:<>,\s]*?)\s*(?:,[^>]*)?>\s*\(\s*"([^"]+)"/;
const FUNCTION_RE = /^\s*\.(class_)?function\(\s*"([^"]+)"\s*,/;
const SELECT_OVERLOAD_RE = /select_overload\s*<\s*[\w:&<>\s,*]+?\s*\(([^)]*)\)/;

/** Count commas at brace/paren depth 0 inside a string. Empty / whitespace-only
 *  input returns 0. */
function countCommasDepthZero(s: string): number {
  let depth = 0;
  let commas = 0;
  for (const c of s) {
    if (c === '<' || c === '(' || c === '[' || c === '{') depth++;
    else if (c === '>' || c === ')' || c === ']' || c === '}') depth--;
    else if (c === ',' && depth === 0) commas++;
  }
  return commas;
}

/** Read the parenthesised parameter list of a lambda `[](...)` starting at or
 *  after position `start` of `text`. Returns the body inside the lambda's `(` `)`
 *  (exclusive) or null if no lambda is found. */
function readLambdaParams(text: string, start: number): string | null {
  const bracketIdx = text.indexOf('[]', start);
  if (bracketIdx < 0) return null;
  const open = text.indexOf('(', bracketIdx);
  if (open < 0) return null;
  let depth = 1;
  for (let i = open + 1; i < text.length; i++) {
    const c = text[i];
    if (c === '(') depth++;
    else if (c === ')') {
      depth--;
      if (depth === 0) return text.slice(open + 1, i);
    }
  }
  return null;
}

/** Normalize a C++ type spelling into the runtime JS dispatcher's
 *  effective type identity. Mirrors the runtime patched embind's
 *  `cppTypeToJsType` plus the codegen's `_classify_js_type`:
 *    - `emscripten::val` → `val`
 *    - integral / floating types → `number`
 *    - `bool` → `boolean`
 *    - `std::string`/`std::wstring` → `string`
 *    - `Handle<X>`/`occ::handle<X>` → unwrap to inner class spelling
 *    - all other class types → keep their (de-namespaced) class name
 *  The runtime dispatcher's `getSignature()` distinguishes class types via
 *  `instanceof` against per-class typeIDs, so two distinct C++ classes are
 *  distinct JS-effective types. */
function normalizeJsType(rawType: string): string {
  let t = rawType
    .trim()
    .replace(/\bconst\b/g, '')
    .replace(/[*&]/g, '')
    .trim()
    .replace(/\s+/g, ' ');
  // Strip Handle<X> / occ::handle<X> wrappers.
  let prev: string;
  do {
    prev = t;
    t = t.replace(/^(?:occ::|opencascade::)?[Hh]andle<\s*(.+?)\s*>$/, '$1').trim();
  } while (t !== prev);
  if (t === 'emscripten::val' || t === '::emscripten::val') return 'val';
  if (
    t === 'int' ||
    t === 'unsigned int' ||
    t === 'short' ||
    t === 'unsigned short' ||
    t === 'long' ||
    t === 'unsigned long' ||
    t === 'long long' ||
    t === 'unsigned long long' ||
    t === 'char' ||
    t === 'signed char' ||
    t === 'unsigned char' ||
    t === 'float' ||
    t === 'double' ||
    t === 'int64_t' ||
    t === 'uint64_t' ||
    t === 'size_t' ||
    t === 'std::size_t' ||
    t === 'Standard_Integer' ||
    t === 'Standard_Real' ||
    t === 'Standard_ShortReal'
  ) {
    return 'number';
  }
  if (t === 'bool' || t === 'Standard_Boolean') return 'boolean';
  if (t === 'std::string' || t === 'std::wstring') return 'string';
  return t;
}

/** Split a parameter list at the top depth (commas not inside <>/()/[]/{}). */
function splitTopLevelParams(s: string): string[] {
  const out: string[] = [];
  let depth = 0;
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === '<' || c === '(' || c === '[' || c === '{') depth++;
    else if (c === '>' || c === ')' || c === ']' || c === '}') depth--;
    else if (c === ',' && depth === 0) {
      out.push(s.slice(start, i));
      start = i + 1;
    }
  }
  if (start < s.length) out.push(s.slice(start));
  return out.map((p) => p.trim()).filter((p) => p.length > 0);
}

/** Extract just the type portion of a lambda parameter (drops the param
 *  identifier). For `const TopoDS_Edge & E` → `const TopoDS_Edge &`. */
function paramType(param: string): string {
  // Remove a trailing identifier (last word) if present.
  const m = param.match(/^(.*?)([A-Za-z_]\w*)\s*$/);
  if (!m) return param.trim();
  const head = m[1]!.trim();
  // If `head` is empty or ends with a separator (`<`, `,`, `&`, `*`,
  // `space`), the trailing word IS the parameter name; otherwise it was
  // part of the type (e.g. just `int` with no name).
  if (head === '') return m[2]!;
  if (/[<,&*\s]$/.test(head)) return head;
  return param.trim();
}

/** Compute the JS-effective signature for a registration body. Returns
 *  comma-joined normalized JS types, or the empty string if unparseable. */
function computeJsEffectiveSig(registrationBody: string): string {
  const select = SELECT_OVERLOAD_RE.exec(registrationBody);
  if (select) {
    const args = select[1]!.trim();
    if (args === '' || args === 'void') return '';
    return splitTopLevelParams(args).map(normalizeJsType).join(', ');
  }
  const optionalIdx = registrationBody.indexOf('optional_override');
  if (optionalIdx >= 0) {
    const params = readLambdaParams(registrationBody, optionalIdx);
    if (params === null) return '';
    const trimmed = params.trim();
    if (trimmed === '') return '';
    let parts = splitTopLevelParams(trimmed);
    // Drop the leading `[const ]Class & self` binding if present.
    if (parts.length > 0 && /\b&\s*self\s*$/.test(parts[0]!)) parts = parts.slice(1);
    return parts.map(paramType).map(normalizeJsType).join(', ');
  }
  return '';
}

function computeArity(registrationBody: string): number {
  const select = SELECT_OVERLOAD_RE.exec(registrationBody);
  if (select) {
    const args = select[1]!.trim();
    if (args === '' || args === 'void') return 0;
    return countCommasDepthZero(args) + 1;
  }

  const optionalIdx = registrationBody.indexOf('optional_override');
  if (optionalIdx >= 0) {
    const params = readLambdaParams(registrationBody, optionalIdx);
    if (params === null) return -1;
    const trimmed = params.trim();
    if (trimmed === '') return 0;
    const paramCount = countCommasDepthZero(trimmed) + 1;
    // Lambdas wrap instance methods with a leading `[const ]Class& self`
    // and static methods with no `self`. Subtract one when an instance
    // self-binding is present so we report JS-visible arity.
    return /\b&\s*self\b/.test(trimmed) ? paramCount - 1 : paramCount;
  }

  // `.function("X", &Class::X, ...)` form — exactly one overload of `X`
  // is bound under this name. We give it arity = -1 so it shares no bucket
  // with other registrations; uniqueness on (name, -1) then degenerates to
  // "this name appears as a bare-pointer registration at most once", which
  // is structurally guaranteed by the codegen.
  return -1;
}

function parseClassBlocks(filePath: string): ClassBlock[] {
  const text = fs.readFileSync(filePath, 'utf8');
  const blocks: ClassBlock[] = [];
  let currentBlock: ClassBlock | null = null;

  const lines = text.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]!;
    const classMatch = CLASS_RE.exec(line);
    if (classMatch) {
      if (currentBlock) blocks.push(currentBlock);
      currentBlock = {
        className: classMatch[2]!,
        filePath,
        startLine: i + 1,
        registrations: [],
      };
      continue;
    }
    if (!currentBlock) continue;
    const fnMatch = FUNCTION_RE.exec(line);
    if (!fnMatch) continue;

    // Some `.function(...)` calls span multiple lines (long select_overload
    // signatures, multi-line optional_override lambdas). Gather lines until
    // the parenthesis depth at the start of `.function(` closes.
    let registrationBody = line;
    let openParens = 0;
    for (const c of line) {
      if (c === '(') openParens++;
      else if (c === ')') openParens--;
    }
    let j = i;
    while (openParens > 0 && j + 1 < lines.length) {
      j++;
      const next = lines[j]!;
      registrationBody += '\n' + next;
      for (const c of next) {
        if (c === '(') openParens++;
        else if (c === ')') openParens--;
      }
    }

    currentBlock.registrations.push({
      name: fnMatch[2]!,
      kind: fnMatch[1] ? 'class_function' : 'function',
      arity: computeArity(registrationBody),
      jsEffectiveSignature: computeJsEffectiveSig(registrationBody),
      cppLine: i + 1,
    });
  }
  if (currentBlock) blocks.push(currentBlock);
  return blocks;
}

describe('embind binding registrations', () => {
  it('no regressions on the FIX-A/B/C (name, arity) clobber surface', () => {
    expect(fs.existsSync(BINDINGS_ROOT)).toBe(true);
    const cppFiles = listCppFiles(BINDINGS_ROOT);
    expect(cppFiles.length).toBeGreaterThan(0);

    type Clobber = {
      key: string;
      className: string;
      methodName: string;
      kind: 'function' | 'class_function';
      arity: number;
      filePath: string;
      cppLines: number[];
    };
    const clobbers: Clobber[] = [];

    for (const file of cppFiles) {
      const blocks = parseClassBlocks(file);
      for (const block of blocks) {
        const buckets = new Map<string, FunctionRegistration[]>();
        for (const reg of block.registrations) {
          if (reg.arity < 0) continue; // unknown-arity registrations are never bucketed
          // Bucket per (dispatch slot, name, arity, JS-effective signature).
          // Embind's `.function` and `.class_function` slots are
          // independent. Within a slot, the runtime patched dispatcher
          // (`signaturesArray` lookup) correctly disambiguates same-arity
          // overloads when their JS-effective signatures differ — those
          // are NOT clobbers. Only registrations sharing an identical
          // JS-effective signature are true clobbers (R3 Path C target).
          // Registrations with empty `jsEffectiveSignature` (unparseable) are
          // bucketed by line number to remain unique.
          const sigKey = reg.jsEffectiveSignature === '' ? `__unparsed_${reg.cppLine}` : reg.jsEffectiveSignature;
          const key = `${reg.kind}|${reg.name}|${reg.arity}|${sigKey}`;
          let bucket = buckets.get(key);
          if (bucket === undefined) {
            bucket = [];
            buckets.set(key, bucket);
          }
          bucket.push(reg);
        }
        for (const [, bucket] of buckets) {
          if (bucket.length <= 1) continue;
          const head = bucket[0]!;
          clobbers.push({
            key: `${block.className}::${head.name}:${head.arity}`,
            className: block.className,
            methodName: head.name,
            kind: head.kind,
            arity: head.arity,
            filePath: path.relative(path.resolve(import.meta.dirname, '..'), file),
            cppLines: bucket.map((b) => b.cppLine),
          });
        }
      }
    }

    const seen = new Set(clobbers.map((c) => c.key));
    const newClobbers = clobbers.filter((c) => !EXPECTED_PENDING_CLOBBERS.has(c.key));
    const fixed = [...EXPECTED_PENDING_CLOBBERS].filter((k) => !seen.has(k));

    if (newClobbers.length > 0) {
      const detail = newClobbers
        .map(
          (c) =>
            `  ${c.className}::${c.methodName} (.${c.kind}, arity ${c.arity}) registered ${c.cppLines.length}× at ${c.filePath}:${c.cppLines.join(',')}`,
        )
        .join('\n');
      throw new Error(
        `New embind (kind, name, arity) clobber detected outside the documented RBV-output-param baseline — these duplicate .function()/.class_function() registrations silently overwrite each other at runtime:\n${detail}\n\nIf this is intentional, update EXPECTED_PENDING_CLOBBERS in this test with the corresponding follow-up note.`,
      );
    }
    expect(newClobbers).toEqual([]);

    if (fixed.length > 0) {
      throw new Error(
        `EXPECTED_PENDING_CLOBBERS contains entries that are no longer clobbering — remove them from the baseline:\n${fixed.map((k) => `  ${k}`).join('\n')}`,
      );
    }
  }, 30_000);
});
