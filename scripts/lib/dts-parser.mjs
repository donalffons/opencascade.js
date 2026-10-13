/**
 * Parse generated OCCT class declarations into the records used by API cards.
 * The parser targets the fixed `TypescriptBindings` output shape rather than
 * arbitrary TypeScript. Unclassified members remain as raw entries.
 */

const TOPLEVEL_CLASS_RE = /(?:export\s+)?declare\s+class\s+([A-Za-z_][\w$]*)(?:\s+extends\s+([^\{]+?))?\s*\{/;
const TOPLEVEL_CONST_ENUM_RE = /(?:export\s+)?declare\s+const\s+([A-Za-z_][\w$]*)\s*[:=]\s*\{([\s\S]*?)\}\s*;?\s*$/m;
const ALIAS_RE = /(?:export\s+)?(?:declare\s+)?type\s+([A-Za-z_][\w$]*)\s*=\s*([^;]+);/;

const NOISE_NAMES = new Set(['delete', '[Symbol.dispose]']);
const NOISE_COMMENT_RE = /Releases the C\+\+ object/i;

export function parseDeclaration({ text, kind, exports, ancestors }) {
  if (typeof text !== 'string' || !text.trim()) return null;

  // Try class first (~99% of OCJS-bound shapes).
  const classMatch = TOPLEVEL_CLASS_RE.exec(text);
  if (classMatch) {
    return parseClass({ text, classMatch, ancestors });
  }
  // Less common: const-object enum or type alias still surface as `kind: class`
  // in the manifest, but the text may begin with `export declare const ...`.
  const constMatch = TOPLEVEL_CONST_ENUM_RE.exec(text);
  if (constMatch) {
    return parseConstEnum({ text, constMatch, name: exports?.[0] });
  }
  const aliasMatch = ALIAS_RE.exec(text);
  if (aliasMatch) {
    return parseTypeAlias({ text, aliasMatch });
  }
  // Last-resort: surface raw text so it remains discoverable.
  return {
    name: exports?.[0] ?? 'unnamed',
    kind: kind ?? 'unknown',
    summary: extractLeadingComment(text),
    extends: [],
    constructors: [],
    staticMethods: [],
    instanceMethods: [],
    properties: [],
    raw: text,
  };
}

// ───────────────────────── class ─────────────────────────

function parseClass({ text, classMatch, ancestors }) {
  const name = classMatch[1];
  const extendsClause = classMatch[2] ? splitTopLevel(classMatch[2].trim(), ',').map((s) => s.trim()) : [];
  const ancestorChain = ancestors?.[name] ?? [];
  const summary = extractLeadingComment(text);
  const body = extractClassBody(text, classMatch.index + classMatch[0].length - 1);
  const members = parseClassBody(body, name);
  return {
    name,
    kind: 'class',
    summary,
    extends: extendsClause,
    ancestors: ancestorChain,
    constructors: members.constructors,
    staticMethods: members.staticMethods,
    instanceMethods: members.instanceMethods,
    properties: members.properties,
  };
}

function extractClassBody(text, openBraceIdx) {
  // openBraceIdx points at the `{` of `class X {`. Walk to its matching `}`
  // while respecting nested braces inside envelope return types.
  if (text[openBraceIdx] !== '{') return '';
  let depth = 0;
  let inString = false;
  let stringChar = '';
  for (let i = openBraceIdx; i < text.length; i++) {
    const ch = text[i];
    if (inString) {
      if (ch === '\\') {
        i++;
        continue;
      }
      if (ch === stringChar) inString = false;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === '`') {
      inString = true;
      stringChar = ch;
      continue;
    }
    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) {
        return text.slice(openBraceIdx + 1, i);
      }
    }
  }
  return text.slice(openBraceIdx + 1);
}

function parseClassBody(body, className) {
  const result = {
    constructors: [],
    staticMethods: [],
    instanceMethods: [],
    properties: [],
  };

  // Tokenise into top-level "items" separated by `;` (statements), preserving
  // brace-balanced envelope return types as a single token.
  const items = splitMembers(body);
  let pendingComment = '';

  for (const rawItem of items) {
    const item = rawItem.trim();
    if (!item) continue;

    if (item.startsWith('/**')) {
      pendingComment = stripJsdoc(item);
      continue;
    }
    if (item.startsWith('/*') || item.startsWith('//')) {
      continue;
    }

    const ctorMatch = /^constructor\s*\(([\s\S]*?)\)\s*$/.exec(item);
    if (ctorMatch) {
      result.constructors.push({
        name: 'constructor',
        signature: `(${ctorMatch[1].trim()})`,
        parameters: parseParams(ctorMatch[1]),
        returnType: className,
        comment: pendingComment,
      });
      pendingComment = '';
      continue;
    }

    const staticMatch = /^static\s+([A-Za-z_][\w$]*|\[Symbol\.[\w]+\])\s*\(([\s\S]*?)\)\s*:\s*([\s\S]+?)$/.exec(
      item,
    );
    if (staticMatch) {
      const [, memberName, params, ret] = staticMatch;
      if (!NOISE_NAMES.has(memberName)) {
        result.staticMethods.push({
          name: memberName,
          signature: `(${params.trim()}): ${ret.trim()}`,
          parameters: parseParams(params),
          returnType: ret.trim(),
          comment: pendingComment,
        });
      }
      pendingComment = '';
      continue;
    }

    const methodMatch = /^([A-Za-z_][\w$]*|\[Symbol\.[\w]+\])\s*\(([\s\S]*?)\)\s*:\s*([\s\S]+?)$/.exec(item);
    if (methodMatch) {
      const [, memberName, params, ret] = methodMatch;
      if (
        NOISE_NAMES.has(memberName) ||
        (NOISE_COMMENT_RE.test(pendingComment) && memberName === 'delete')
      ) {
        pendingComment = '';
        continue;
      }
      result.instanceMethods.push({
        name: memberName,
        signature: `(${params.trim()}): ${ret.trim()}`,
        parameters: parseParams(params),
        returnType: ret.trim(),
        comment: pendingComment,
      });
      pendingComment = '';
      continue;
    }

    const propMatch = /^(readonly\s+)?([A-Za-z_][\w$]*)\s*:\s*([\s\S]+?)$/.exec(item);
    if (propMatch) {
      const [, ro, memberName, propType] = propMatch;
      result.properties.push({
        name: memberName,
        type: propType.trim(),
        readonly: Boolean(ro),
        comment: pendingComment,
      });
      pendingComment = '';
      continue;
    }

    // Anything else — keep as a raw item so it's still visible.
    pendingComment = '';
  }

  // Overload pre-coalescing: methods with identical names appear as separate
  // entries (the viewer groups them visually). We preserve order so the
  // generator's RBV ordering survives.
  return result;
}

// ───────────────────────── helpers ─────────────────────────

function splitMembers(body) {
  // Split top-level statements / jsdoc blocks. JSDoc /** ... */ blocks are
  // emitted as their own items; everything else terminates at `;`.
  const items = [];
  let buf = '';
  let i = 0;
  let depthBrace = 0;
  let depthParen = 0;
  let depthAngle = 0;
  let inString = false;
  let stringChar = '';

  while (i < body.length) {
    const ch = body[i];
    const next2 = body.slice(i, i + 2);

    if (inString) {
      buf += ch;
      if (ch === '\\') {
        buf += body[i + 1] ?? '';
        i += 2;
        continue;
      }
      if (ch === stringChar) inString = false;
      i++;
      continue;
    }

    // JSDoc block — emit as its own item.
    if (
      next2 === '/*' &&
      depthBrace === 0 &&
      depthParen === 0 &&
      buf.trim() === ''
    ) {
      const close = body.indexOf('*/', i + 2);
      if (close === -1) {
        buf += body.slice(i);
        break;
      }
      const block = body.slice(i, close + 2);
      items.push(block);
      i = close + 2;
      buf = '';
      continue;
    }

    if (ch === '"' || ch === "'" || ch === '`') {
      inString = true;
      stringChar = ch;
      buf += ch;
      i++;
      continue;
    }
    if (ch === '{') depthBrace++;
    else if (ch === '}') depthBrace--;
    else if (ch === '(') depthParen++;
    else if (ch === ')') depthParen--;
    else if (ch === '<' && /[A-Za-z_]/.test(body[i + 1] ?? '')) depthAngle++;
    else if (ch === '>' && depthAngle > 0) depthAngle--;

    if (ch === ';' && depthBrace === 0 && depthParen === 0) {
      const tok = buf.trim();
      if (tok) items.push(tok);
      buf = '';
      i++;
      continue;
    }

    buf += ch;
    i++;
  }
  const tail = buf.trim();
  if (tail) items.push(tail);
  return items;
}

function parseParams(raw) {
  const trimmed = raw.trim();
  if (!trimmed) return [];
  const parts = splitTopLevel(trimmed, ',');
  return parts.map((p) => {
    const t = p.trim();
    // Match `name?: Type` or `name: Type` or `...name: Type` or `name: Type = default`.
    const m = /^(\.{3})?\s*([A-Za-z_][\w$]*)\s*(\?)?\s*:\s*([\s\S]+?)(?:\s*=\s*([\s\S]+))?$/.exec(t);
    if (!m) {
      return { name: '', type: t, optional: false, rest: false };
    }
    const [, rest, name, opt, type] = m;
    return {
      name,
      type: type.trim(),
      optional: Boolean(opt),
      rest: Boolean(rest),
    };
  });
}

function splitTopLevel(input, delim) {
  const out = [];
  let buf = '';
  let depthBrace = 0;
  let depthParen = 0;
  let depthAngle = 0;
  let depthBracket = 0;
  let inString = false;
  let stringChar = '';
  for (let i = 0; i < input.length; i++) {
    const ch = input[i];
    if (inString) {
      buf += ch;
      if (ch === '\\') {
        buf += input[i + 1] ?? '';
        i++;
        continue;
      }
      if (ch === stringChar) inString = false;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === '`') {
      inString = true;
      stringChar = ch;
      buf += ch;
      continue;
    }
    if (ch === '{') depthBrace++;
    else if (ch === '}') depthBrace--;
    else if (ch === '(') depthParen++;
    else if (ch === ')') depthParen--;
    else if (ch === '[') depthBracket++;
    else if (ch === ']') depthBracket--;
    else if (ch === '<' && /[A-Za-z_]/.test(input[i + 1] ?? '')) depthAngle++;
    else if (ch === '>' && depthAngle > 0) depthAngle--;

    if (
      ch === delim &&
      depthBrace === 0 &&
      depthParen === 0 &&
      depthAngle === 0 &&
      depthBracket === 0
    ) {
      out.push(buf);
      buf = '';
      continue;
    }
    buf += ch;
  }
  if (buf.length) out.push(buf);
  return out;
}

function stripJsdoc(block) {
  if (!block) return '';
  return block
    .replace(/^\/\*\*/, '')
    .replace(/\*\/\s*$/, '')
    .split('\n')
    .map((line) => line.replace(/^\s*\*\s?/, '').trim())
    .filter(Boolean)
    .join('\n')
    .trim();
}

function extractLeadingComment(text) {
  const m = /^\s*\/\*\*([\s\S]*?)\*\//.exec(text);
  if (!m) return '';
  return stripJsdoc(m[0]);
}

// ───────────────────────── const-enum / type alias ─────────────────────────

function parseConstEnum({ text, constMatch, name }) {
  const enumName = name ?? constMatch[1];
  const body = constMatch[2];
  const entries = [];
  const lineRe = /readonly\s+([A-Za-z_][\w$]*)\s*:\s*['"]([^'"]+)['"]/g;
  let m;
  while ((m = lineRe.exec(body))) {
    entries.push({ name: m[1], value: m[2] });
  }
  return {
    name: enumName,
    kind: 'enum',
    summary: extractLeadingComment(text),
    extends: [],
    constructors: [],
    staticMethods: [],
    instanceMethods: [],
    properties: entries.map((e) => ({
      name: e.name,
      type: `'${e.value}'`,
      readonly: true,
      comment: '',
    })),
  };
}

function parseTypeAlias({ text, aliasMatch }) {
  return {
    name: aliasMatch[1],
    kind: 'typeAlias',
    summary: extractLeadingComment(text),
    extends: [],
    constructors: [],
    staticMethods: [],
    instanceMethods: [],
    properties: [
      {
        name: '<alias>',
        type: aliasMatch[2].trim(),
        readonly: true,
        comment: '',
      },
    ],
  };
}
