import {
  MAX_PROSE_WORDS,
  INTERNAL_REFERENCES,
  TEMPORAL_CLAIMS,
  SLOP,
  firstMatch,
  countWords,
} from './prose-rules.js';

const stripLeadingType = (value) => {
  const source = value.trimStart();
  if (!source.startsWith('{')) return source;

  let depth = 0;
  for (let index = 0; index < source.length; index += 1) {
    if (source[index] === '{') depth += 1;
    if (source[index] === '}') depth -= 1;
    if (depth === 0) return source.slice(index + 1).trimStart();
  }
  return source;
};

const stripParameterName = (value) => {
  const source = value.trimStart();
  if (source.startsWith('[')) {
    const end = source.indexOf(']');
    return end === -1 ? source : source.slice(end + 1).trimStart();
  }
  return source.replace(/^\S+\s*/u, '');
};

const proseFromLine = (line) => {
  const match = line.trim().match(/^@([A-Za-z][\w-]*)\b(.*)$/u);
  if (!match) return line;

  const tag = match[1]?.toLowerCase();
  let prose = stripLeadingType(match[2] ?? '');
  if (tag === 'param' || tag === 'arg' || tag === 'argument' || tag === 'property') {
    prose = stripParameterName(prose);
  }
  return prose.replace(/^\s*-\s*/u, '');
};

const extractProse = (comment) => {
  const lines = comment.value
    .replace(/^\*/u, '')
    .split(/\r?\n/u)
    .map((line) => line.replace(/^\s*\* ?/u, ''));
  const prose = [];
  let inFence = false;

  for (const line of lines) {
    if (/^\s*```/u.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (!inFence) prose.push(proseFromLine(line));
  }

  return prose.join('\n').replace(/\{@[A-Za-z][\w-]*/gu, ' ');
};

export const jsdocQualityRule = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Require concise, current, self-contained JSDoc.',
    },
    schema: [],
    messages: {
      internalReference:
        'Describe the implemented contract without internal planning reference "{{term}}".',
      temporalClaim: 'Replace time-relative or speculative JSDoc phrase "{{term}}" with a stable contract.',
      slop: 'Replace low-information JSDoc phrase "{{term}}" with a concrete capability or behavior.',
      tooLong: 'JSDoc contains {{count}} prose words; keep it at or below {{max}} words.',
    },
  },
  create(context) {
    return {
      'Program:exit'() {
        for (const comment of context.sourceCode.getAllComments()) {
          if (comment.type !== 'Block' || !comment.value.startsWith('*')) continue;

          const prose = extractProse(comment);
          const directReference = firstMatch(INTERNAL_REFERENCES.slice(0, 4), prose);
          const withoutUrls = prose.replace(/https?:\/\/\S+/gu, ' ');
          const planningReference = firstMatch(INTERNAL_REFERENCES.slice(4), withoutUrls);
          const internalReference = directReference ?? planningReference;
          const temporalClaim = firstMatch(TEMPORAL_CLAIMS, withoutUrls);
          const slop = firstMatch(SLOP, withoutUrls);
          const wordCount = countWords(prose);

          if (internalReference) {
            context.report({ loc: comment.loc, messageId: 'internalReference', data: { term: internalReference } });
          }
          if (temporalClaim) {
            context.report({ loc: comment.loc, messageId: 'temporalClaim', data: { term: temporalClaim } });
          }
          if (slop) context.report({ loc: comment.loc, messageId: 'slop', data: { term: slop } });
          if (wordCount > MAX_PROSE_WORDS) {
            context.report({
              loc: comment.loc,
              messageId: 'tooLong',
              data: { count: wordCount, max: MAX_PROSE_WORDS },
            });
          }
        }
      },
    };
  },
};
