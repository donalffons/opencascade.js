/**
 * Require disposable expressions to be bound by `using` or `await using`,
 * returned, thrown, or passed to `DisposableStack.use`. The rule fixes simple
 * `const` declarations to `using`; reassignment, destructuring, and inline
 * temporaries require manual ownership. Standard-library iterator disposables
 * are exempt. Return-flow analysis is intra-procedural and does not follow
 * closure captures or outer aliases.
 *
 * @typedef {import('eslint').Rule.RuleModule} RuleModule
 * @typedef {import('eslint').Rule.RuleContext} RuleContext
 * @typedef {import('eslint').Rule.RuleFixer} RuleFixer
 * @typedef {import('eslint').Rule.Node} EslintRuleNode
 * @typedef {import('estree').Node} EstreeNode
 * @typedef {import('estree').CallExpression} CallExpression
 * @typedef {import('estree').NewExpression} NewExpression
 * @typedef {import('estree').VariableDeclaration} VariableDeclaration
 * @typedef {import('estree').VariableDeclarator} VariableDeclarator
 */

const DISPOSABLE_STACK_SINKS = new Set(['use', 'adopt', 'defer']);

const STANDARD_LIB_DECLARATION_FILE = /[/\\]lib\.[^/\\]+\.d\.ts$/;

const NODE_WALK_SKIP_KEYS = new Set(['parent', 'range', 'loc', 'start', 'end']);

/**
 * Returns true iff the property's declaration originates from a TypeScript
 * standard `lib.*.d.ts` file. Built-in `[Symbol.dispose]` implementations
 * (e.g. `IterableIterator` since TS 5.2) are exempt — flagging them
 * generates noise without catching real leaks.
 *
 * @param {import('typescript').Symbol} property
 * @returns {boolean}
 */
function propertyIsFromStandardLib(property) {
  const declarations = property.getDeclarations?.() ?? property.declarations;
  if (!declarations || declarations.length === 0) {
    return false;
  }
  return declarations.every((declaration) => {
    const fileName = declaration.getSourceFile()?.fileName ?? '';
    if (!fileName) {
      return false;
    }
    return STANDARD_LIB_DECLARATION_FILE.test(fileName);
  });
}

/**
 * @param {import('typescript').TypeChecker} checker
 * @param {import('typescript').Type} type
 * @returns {boolean}
 */
function typeHasSymbolDispose(checker, type) {
  if (!type) {
    return false;
  }
  if (type.isUnionOrIntersection?.()) {
    for (const member of type.types) {
      if (typeHasSymbolDispose(checker, member)) {
        return true;
      }
    }
    return false;
  }
  const properties = checker.getPropertiesOfType(type);
  for (const property of properties) {
    const name = String(property.escapedName);
    const isDispose =
      name.startsWith('__@dispose@') ||
      name === '[Symbol.dispose]' ||
      name.startsWith('__@asyncDispose@') ||
      name === '[Symbol.asyncDispose]';
    if (!isDispose) {
      continue;
    }
    if (propertyIsFromStandardLib(property)) {
      continue;
    }
    return true;
  }
  return false;
}

/**
 * Walk past "transparent" wrapper expressions that don't capture
 * ownership. Returns the outermost expression node still owning the
 * disposable value.
 *
 * @param {EstreeNode} node
 * @returns {EstreeNode}
 */
function unwrapOwnership(node) {
  let current = /** @type {EstreeNode & { parent?: EstreeNode }} */ (node);
  while (current.parent) {
    const { parent } =
      /** @type {{ parent: EstreeNode & { type: string; expression?: EstreeNode; argument?: EstreeNode } }} */ (
        /** @type {unknown} */ (current)
      );
    if (parent.type === 'AwaitExpression' && parent.argument === current) {
      current = parent;
      continue;
    }
    if (
      (parent.type === 'TSAsExpression' ||
        parent.type === 'TSTypeAssertion' ||
        parent.type === 'TSSatisfiesExpression' ||
        parent.type === 'TSNonNullExpression') &&
      parent.expression === current
    ) {
      current = parent;
      continue;
    }
    if (parent.type === 'ChainExpression') {
      current = parent;
      continue;
    }
    break;
  }
  return current;
}

/**
 * @param {EstreeNode | null | undefined} root
 * @param {EstreeNode} target
 * @returns {boolean}
 */
function containsExpressionNode(root, target) {
  if (root === target) {
    return true;
  }
  if (!root || typeof root !== 'object') {
    return false;
  }
  for (const key of Object.keys(root)) {
    if (NODE_WALK_SKIP_KEYS.has(key)) {
      continue;
    }
    const value = /** @type {Record<string, unknown>} */ (/** @type {unknown} */ (root))[key];
    if (Array.isArray(value)) {
      for (const item of value) {
        if (item && typeof item === 'object' && containsExpressionNode(/** @type {EstreeNode} */ (item), target)) {
          return true;
        }
      }
      continue;
    }
    if (
      value &&
      typeof value === 'object' &&
      'type' in value &&
      containsExpressionNode(/** @type {EstreeNode} */ (value), target)
    ) {
      return true;
    }
  }
  return false;
}

/**
 * True when this identifier is read inside some `return` statement’s argument
 * (e.g. `return x`, `return { x }`, `return foo(x)`).
 *
 * @param {import('estree').Identifier} identifier
 * @returns {boolean}
 */
function referenceEscapesViaReturn(identifier) {
  let node = /** @type {EstreeNode & { parent?: EstreeNode }} */ (identifier);
  while (node.parent) {
    const { parent } = node;
    if (parent.type === 'ReturnStatement' && parent.argument && containsExpressionNode(parent.argument, identifier)) {
      return true;
    }
    node = parent;
  }
  return false;
}

/**
 * Ownership absorbed by a `using` / `await using` binding, or by a `const`
 * binding whose value escapes via `return`.
 *
 * @param {{ type: string; init?: EstreeNode; id?: EstreeNode & { type?: string; name?: string } }} parent
 * @param {EstreeNode} outer
 * @param {RuleContext | undefined} context
 * @returns {boolean}
 */
function isOwnedByDeclarator(parent, outer, context) {
  if (parent.type !== 'VariableDeclarator' || parent.init !== outer) {
    return false;
  }
  const declList = /** @type {{ parent?: { type: string; kind: string } }} */ (/** @type {unknown} */ (parent)).parent;
  if (!declList || declList.type !== 'VariableDeclaration') {
    return false;
  }
  const { kind } = declList;
  if (kind === 'using' || kind === 'await using') {
    return true;
  }
  if (kind !== 'const' || !context || parent.id?.type !== 'Identifier') {
    return false;
  }
  const scope = context.sourceCode.getScope(/** @type {EslintRuleNode} */ (/** @type {unknown} */ (parent)));
  const variable = scope.variables.find((v) => v.name === parent.id?.name);
  if (!variable) {
    return false;
  }
  return variable.references.some((ref) => referenceEscapesViaReturn(ref.identifier));
}

/**
 * Ownership forwarded via `return expr`, `throw expr`, `yield expr`, or an
 * arrow expression body.
 *
 * @param {{ type: string; argument?: EstreeNode; body?: unknown }} parent
 * @param {EstreeNode} outer
 * @returns {boolean}
 */
function isOwnedByControlFlowExpression(parent, outer) {
  if (parent.type === 'ReturnStatement' && parent.argument === outer) {
    return true;
  }
  if (parent.type === 'ThrowStatement' && parent.argument === outer) {
    return true;
  }
  if (parent.type === 'YieldExpression' && parent.argument === outer) {
    return true;
  }
  if (parent.type === 'ArrowFunctionExpression' && parent.body === outer) {
    return true;
  }
  return false;
}

/**
 * Ownership absorbed by `stack.use(expr)` / `stack.adopt(expr, _)` /
 * `stack.defer(...)` — `DisposableStack` sinks adopt the disposable.
 *
 * @param {{ type: string; callee?: EstreeNode & { type?: string }; arguments?: EstreeNode[] }} parent
 * @param {EstreeNode} outer
 * @returns {boolean}
 */
function isOwnedByDisposableStackSink(parent, outer) {
  if (parent.type !== 'CallExpression' || !parent.callee || parent.callee.type !== 'MemberExpression') {
    return false;
  }
  const { property } = /** @type {{ property: EstreeNode & { type?: string; name?: string } }} */ (
    /** @type {unknown} */ (parent.callee)
  );
  return (
    property?.type === 'Identifier' &&
    DISPOSABLE_STACK_SINKS.has(property.name ?? '') &&
    parent.arguments?.[0] === outer
  );
}

/**
 * Determine whether `node`'s syntactic context absorbs the dispose
 * obligation. If yes, no diagnostic is produced.
 *
 * @param {EstreeNode} node
 * @param {RuleContext | undefined} context
 * @returns {boolean}
 */
function isOwnedByContext(node, context) {
  const outer = unwrapOwnership(node);
  const { parent } = /** @type {{ parent?: EstreeNode & {
    type: string;
    init?: EstreeNode;
    argument?: EstreeNode;
    expression?: EstreeNode;
    body?: unknown;
    arguments?: EstreeNode[];
    callee?: EstreeNode & { type?: string };
    id?: EstreeNode & { type?: string; name?: string };
  } }} */ (/** @type {unknown} */ (outer));
  if (!parent) {
    return false;
  }
  if (isOwnedByDeclarator(parent, outer, context)) {
    return true;
  }
  if (isOwnedByControlFlowExpression(parent, outer)) {
    return true;
  }
  return isOwnedByDisposableStackSink(parent, outer);
}

/**
 * @param {VariableDeclaration & { kind: 'const' | 'let' | 'var' | 'using' | 'await using' }} declNode
 * @returns {{ start: number; length: number } | null}
 *   Source-text range of the declaration keyword (`const` / `let`) or null
 *   if it can't be located.
 */
function findKeywordRange(declNode) {
  const { range } = /** @type {{ range?: readonly [number, number] }} */ (/** @type {unknown} */ (declNode));
  if (!range) {
    return null;
  }
  const { kind } = declNode;
  // `range[0]` points at the start of the declaration text. The keyword is
  // the first whitespace-trimmed identifier.
  return { start: range[0], length: kind.length };
}

/**
 * Report a `const x = <disposable>` violation, with the auto-fix that
 * rewrites the keyword `const` → `using`.
 *
 * @param {RuleContext} context
 * @param {{ esNode: EstreeNode; declNode: VariableDeclaration & { kind: string }; typeText: string }} report
 */
function reportConstDeclaration(context, report) {
  const { esNode, declNode, typeText } = report;
  const keywordRange = findKeywordRange(/** @type {VariableDeclaration & { kind: 'const' }} */ (declNode));
  context.report({
    node: /** @type {EslintRuleNode} */ (/** @type {unknown} */ (esNode)),
    messageId: 'missingUsing',
    data: { typeText },
    fix: keywordRange
      ? (fixer) => fixer.replaceTextRange([keywordRange.start, keywordRange.start + keywordRange.length], 'using')
      : undefined,
  });
}

/** @type {RuleModule} */
export const requireUsingOnDisposableRule = {
  meta: {
    type: 'problem',
    fixable: 'code',
    docs: {
      description:
        'Require `using` / `await using` declarations for expressions whose inferred ' +
        'type has `[Symbol.dispose]: () => void`. Prevents resource leaks where the ' +
        'caller forgot to invoke `.delete()` / `[Symbol.dispose]()` at scope exit. ' +
        'Auto-fixes only `const x = …` → `using x = …`. Destructuring and ' +
        'inline disposable expressions must be fixed manually.',
    },
    messages: {
      missingUsing:
        'Disposable expression (type `{{typeText}}`) is not bound to `using` / `await using`. ' +
        'Replace `const x = ...` / `let x = ...` with `using x = ...` so ' +
        '`[Symbol.dispose]()` runs at scope exit, or forward via `return` / `stack.use(...)`.',
      missingUsingInline:
        'Disposable expression (type `{{typeText}}`) is created inline without `using`. ' +
        'Add a preceding line `using <name> = <expr>;` with a descriptive name, then pass `<name>` where the expression was.',
      missingUsingDestructure:
        'Disposable expression (type `{{typeText}}`) is destructured directly. ' +
        '`using` cannot bind to destructuring patterns — capture the container in a ' +
        '`using` variable first, then read its fields.',
    },
    schema: [],
  },
  create(context) {
    // `parserServices` is set up by typescript-eslint when
    // `parserOptions.project` is configured. Fall back to a no-op if the
    // consumer hasn't enabled type-aware linting.
    const services =
      /** @type {{ sourceCode?: { parserServices?: unknown }; parserServices?: unknown }} */ (
        /** @type {unknown} */ (context)
      ).sourceCode?.parserServices ??
      /** @type {{ parserServices?: unknown }} */ (/** @type {unknown} */ (context)).parserServices;
    const { program, esTreeNodeToTSNodeMap } =
      /** @type {{ program?: import('typescript').Program; esTreeNodeToTSNodeMap?: Map<unknown, import('typescript').Node> }} */ (
        services ?? {}
      );
    if (!program || !esTreeNodeToTSNodeMap) {
      return {};
    }
    const checker = program.getTypeChecker();

    /**
     * @param {NewExpression | CallExpression} esNode
     */
    const checkExpression = (esNode) => {
      const tsNode = esTreeNodeToTSNodeMap.get(esNode);
      if (!tsNode) {
        return;
      }
      const type = checker.getTypeAtLocation(tsNode);
      if (!typeHasSymbolDispose(checker, type)) {
        return;
      }
      if (isOwnedByContext(/** @type {EstreeNode} */ (esNode), context)) {
        return;
      }

      const outer = unwrapOwnership(/** @type {EstreeNode} */ (esNode));
      const { parent } = /** @type {{ parent?: EstreeNode & {
        type: string;
        init?: EstreeNode;
        id?: EstreeNode & { type?: string };
        parent?: EstreeNode & { type?: string };
      } }} */ (/** @type {unknown} */ (outer));
      const typeText = checker.typeToString(type);

      // Case A: `const x = expr;` → auto-fix by replacing the keyword
      // with `using`. `let x = expr;` is reported but NOT auto-fixed —
      // `using` is `const`-equivalent so any downstream `x = …` would
      // become a compile error.
      if (
        parent?.type === 'VariableDeclarator' &&
        parent.init === outer &&
        parent.id?.type === 'Identifier' &&
        parent.parent?.type === 'VariableDeclaration'
      ) {
        const declNode = /** @type {VariableDeclaration & { kind: string }} */ (/** @type {unknown} */ (parent.parent));
        if (declNode.kind === 'const') {
          reportConstDeclaration(context, { esNode: /** @type {EstreeNode} */ (esNode), declNode, typeText });
          return;
        }
        if (declNode.kind === 'let') {
          context.report({
            node: /** @type {EslintRuleNode} */ (/** @type {unknown} */ (esNode)),
            messageId: 'missingUsing',
            data: { typeText },
          });
          return;
        }
      }

      // Case B: destructured (`const { A } = expr` / `const [a] = expr`) — no
      // auto-fix: choose a meaningful `using` name and split into two lines.
      if (
        parent?.type === 'VariableDeclarator' &&
        parent.init === outer &&
        (parent.id?.type === 'ObjectPattern' || parent.id?.type === 'ArrayPattern')
      ) {
        context.report({
          node: /** @type {EslintRuleNode} */ (/** @type {unknown} */ (esNode)),
          messageId: 'missingUsingDestructure',
          data: { typeText },
        });
        return;
      }

      // Case C: inline disposable — no auto-fix: hoist `using <name> = …` manually.
      context.report({
        node: /** @type {EslintRuleNode} */ (/** @type {unknown} */ (esNode)),
        messageId: 'missingUsingInline',
        data: { typeText },
      });
    };

    return {
      NewExpression: checkExpression,
      CallExpression: checkExpression,
    };
  },
};

/**
 * Default export — registry-friendly shape for plugin authors who want
 * to reference the rule by camelCase or by file basename.
 */
export default requireUsingOnDisposableRule;
