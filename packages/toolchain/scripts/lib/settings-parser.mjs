/**
 * Parse documented `var NAME = literal` declarations from emsdk's
 * `src/settings.js`. Supported literals are booleans, decimal or hexadecimal
 * numbers, integer products, strings, and arrays of strings. Unknown syntax is
 * rejected instead of inferred.
 */

const LITERAL_ARRAY_ITEM = /^(['"])(.*?)\1$/;

/**
 * Parse one right-hand side into `{ kind, value }`.
 *
 * @param name - Setting name, for error messages.
 * @param raw - Text between `=` and the terminating `;`.
 * @returns The default's kind (`boolean` | `number` | `string` | `list`) and value.
 * @throws Error naming the setting and the unparsed text.
 */
export const parseDefault = (name, raw) => {
  const text = raw.trim();
  if (text === 'true' || text === 'false') return { kind: 'boolean', value: text === 'true' };
  if (/^-?0x[0-9a-fA-F]+$/.test(text)) return { kind: 'number', value: Number(text) };
  if (/^-?\d+(\.\d+)?$/.test(text)) return { kind: 'number', value: Number(text) };
  if (/^\d+(\s*\*\s*\d+)+$/.test(text)) {
    return {
      kind: 'number',
      value: text.split('*').reduce((product, factor) => product * Number(factor.trim()), 1),
    };
  }
  const asString = LITERAL_ARRAY_ITEM.exec(text);
  if (asString) return { kind: 'string', value: asString[2] };
  if (text.startsWith('[') && text.endsWith(']')) {
    const inner = text.slice(1, -1).trim();
    if (inner === '') return { kind: 'list', value: [] };
    const items = inner
      .split(',')
      .map((item) => item.trim())
      .filter((item) => item !== '');
    const parsed = items.map((item) => {
      const match = LITERAL_ARRAY_ITEM.exec(item);
      if (!match) {
        throw new Error(
          `settings.js: cannot parse array element ${JSON.stringify(item)} of \`var ${name}\`. ` +
            'The generator only understands arrays of quoted strings; teach it the new form ' +
            'deliberately rather than letting an unmodelled setting fall back to a bare type.',
        );
      }
      return match[2];
    });
    return { kind: 'list', value: parsed };
  }
  throw new Error(
    `settings.js: cannot parse the default of \`var ${name} = ${text};\`. ` +
      'The generator understands booleans, integers (incl. hex and integer products), floats, ' +
      'quoted strings, and arrays of quoted strings. Extend the parser for the new grammar — ' +
      'never guess a type.',
  );
};

/**
 * Parse every user-facing setting out of `settings.js`.
 *
 * @param source - Full `settings.js` text.
 * @returns One entry per setting: `{ name, doc, kind, value }`, in file order.
 * @throws Error when a `var` declaration does not match the supported grammar.
 */
export const parseSettingsJs = (source) => {
  const lines = source.split('\n');
  const settings = [];
  /** @type {string[]} */
  let comment = [];

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    if (line.startsWith('//')) {
      comment.push(line.slice(2).replace(/^ /, '').trimEnd());
      continue;
    }
    const declaration = /^var ([A-Za-z_][A-Za-z0-9_]*) = (.*)$/.exec(line);
    if (!declaration) {
      // Only blank lines separate settings; anything else in this file is a
      // grammar the generator has not been taught.
      if (line.trim() !== '') {
        throw new Error(
          `settings.js:${index + 1}: unexpected line ${JSON.stringify(line)}. The generator ` +
            'expects only `//` comments, blank lines, and `var NAME = <literal>;` declarations.',
        );
      }
      comment = [];
      continue;
    }
    let raw = declaration[2];
    while (!raw.trimEnd().endsWith(';')) {
      index += 1;
      if (index >= lines.length) {
        throw new Error(`settings.js: unterminated declaration for \`var ${declaration[1]}\`.`);
      }
      raw += ` ${lines[index].trim()}`;
    }
    settings.push({
      name: declaration[1],
      doc: comment,
      ...parseDefault(declaration[1], raw.trimEnd().slice(0, -1)),
    });
    comment = [];
  }

  return settings;
};

/**
 * The environments `-sENVIRONMENT` accepts, read from its own doc comment.
 *
 * The comment enumerates them as `- 'web' - the normal web environment.`
 * bullets; the parsed set must be a superset of the declared default or the
 * grammar changed and the generator must not guess.
 *
 * @param setting - The parsed `ENVIRONMENT` entry.
 * @returns Sorted environment names.
 * @throws Error when the bullets no longer parse or omit a default value.
 */
export const parseEnvironments = (setting) => {
  const found = new Set();
  for (const line of setting.doc) {
    const bullet = /^- '([a-z]+)'/.exec(line.trim());
    if (bullet) found.add(bullet[1]);
  }
  const missing = setting.value.filter((environment) => !found.has(environment));
  if (found.size === 0 || missing.length > 0) {
    throw new Error(
      'settings.js: could not read the ENVIRONMENT value list from its doc comment ' +
        `(parsed ${JSON.stringify([...found])}, default ${JSON.stringify(setting.value)}). ` +
        'Update the bullet grammar deliberately — typing ENVIRONMENT as `string` would lose the ' +
        'exact guarantee the blueprint asks for.',
    );
  }
  return [...found].sort();
};
