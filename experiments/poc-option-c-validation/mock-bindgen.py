#!/usr/bin/env python3
"""mock-bindgen.py — minimal sketch of the bindgen translation rule.

Demonstrates Hypothesis H4 from the experiment design: the change from the
current arity-fan-out emission (Corpus A shape) to std::optional<T> emission
(Corpus B shape) is *mechanical* — a single branch inside the per-overload
emitter — not a heuristic-driven rewrite.

Usage:
    cat mock-occt-decl.txt | python3 mock-bindgen.py --variant {a,b}

DSL grammar (one method per line):
    CLASS<NAME> METHOD<NAME> ARG<TYPE> ARG<TYPE> [DEFAULT<expr>] ...

Example input:
    StrTool Set arg const_char_ptr arg OpenMode default ReadOnly
    CurveTool GetCurve arg const Edge_ref arg double default 0.99

(The real bindgen reads from libclang AST; this sketch reads a tiny DSL to
keep the demonstration self-contained.)
"""
import sys
from collections import defaultdict

def parse_line(line):
    toks = line.strip().split()
    if not toks:
        return None
    cls, method, toks = toks[0], toks[1], toks[2:]
    args = []
    i = 0
    while i < len(toks):
        assert toks[i] == 'arg', f'expected `arg`, got {toks[i]!r}'
        typ = toks[i + 1]
        default = None
        if i + 2 < len(toks) and toks[i + 2] == 'default':
            default = toks[i + 3]
            i += 4
        else:
            i += 2
        args.append((typ, default))
    return cls, method, args

def emit_corpus_a(cls, method, args):
    # Current bindgen: full-arity registration only when any gate trips
    # (cstring, RBV return, multi-overload, output param). This sketch
    # always emits the full-arity binding without truncation — accurate
    # for the catalog-defect cases this PoC targets.
    decl = ', '.join(f'{t} a{i}' for i, (t, _) in enumerate(args))
    call = f'self.{method}({", ".join(f"a{i}" for i in range(len(args)))})'
    return f'.function("{method}", optional_override([]({cls}& self, {decl}) {{ {call}; }}))'

def emit_corpus_b(cls, method, args):
    # Post-R5 bindgen: every trailing-default arg becomes std::optional<T>.
    # value_or(default) inside the lambda body composes naturally with any
    # other wrapping (cstring, RBV envelope, multi-overload dispatch).
    decl_parts, call_parts, optionals = [], [], set()
    for i, (typ, d) in enumerate(args):
        if d is not None:
            decl_parts.append(f'std::optional<{typ}> a{i}')
            call_parts.append(f'a{i}.value_or({d})')
            optionals.add(typ)
        else:
            decl_parts.append(f'{typ} a{i}')
            call_parts.append(f'a{i}')
    decl = ', '.join(decl_parts)
    call = f'self.{method}({", ".join(call_parts)})'
    return optionals, f'.function("{method}", optional_override([]({cls}& self, {decl}) {{ {call}; }}))'

def main():
    variant = 'a'
    for i, a in enumerate(sys.argv):
        if a == '--variant' and i + 1 < len(sys.argv):
            variant = sys.argv[i + 1]
    by_class = defaultdict(list)
    all_optionals = set()
    for line in sys.stdin:
        parsed = parse_line(line)
        if not parsed:
            continue
        cls, method, args = parsed
        if variant == 'a':
            by_class[cls].append(emit_corpus_a(cls, method, args))
        else:
            opts, frag = emit_corpus_b(cls, method, args)
            all_optionals |= opts
            by_class[cls].append(frag)
    # Emit
    if variant == 'b':
        for t in sorted(all_optionals):
            print(f'register_optional<{t}>();')
    for cls, frags in by_class.items():
        body = '\n  '.join(frags)
        print(f'class_<{cls}>("{cls}")\n  {body};')

if __name__ == '__main__':
    main()
