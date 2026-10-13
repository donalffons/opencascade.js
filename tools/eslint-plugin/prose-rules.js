/**
 * Shared prose contract. The JSDoc rule and the Markdown check both read these
 * lists, so documentation and code comments are held to one standard and
 * neither can drift from the other.
 */

/** Longest a single prose block may run before it stops being scannable. */
export const MAX_PROSE_WORDS = 120;

/** Planning vocabulary that means nothing to a reader outside the project. */
export const INTERNAL_REFERENCES = [
  /docs\/research\//iu,
  /\/Users\/[\w./-]+/u,
  /\bblueprints?\b/iu,
  /\b(?:the|this)\s+audits?\b/iu,
  /\brecommendation\s+[A-Z]?\d+(?:\.\d+)?\b/iu,
  /\b(?:wave\s+)?W\d+(?:\.\d+)?\b(?!C)/iu,
  /\bR\d+(?:\.\d+)?\b/iu,
  /\bphase[-\s]+\d+(?:\.\d+)?\b/iu,
  /\bfinding[-\s]+\d+(?:\.\d+)?\b/iu,
  /\b(?:matrix[-\s]+)?row[-\s]+\d+(?:\.\d+)?\b/iu,
  /\brule[-\s#]+\d+(?:\.\d+)?\b/iu,
];

/** Claims that date the text and go wrong on their own. */
export const TEMPORAL_CLAIMS = [
  /\bcurrently\b/iu,
  /\btoday\b/iu,
  /\bat present\b/iu,
  /\bfor now\b/iu,
  /\bnot yet\b/iu,
  /\b(?:has|have) yet\b/iu,
  /\bfuture work\b/iu,
  /\bin the future\b/iu,
  /\bplanned\b/iu,
  /\bwill eventually\b/iu,
  /\bused to\b/iu,
  /\bpreviously\b/iu,
  /\broadmap\b/iu,
  /\bforward-looking placeholder\b/iu,
];

/** Phrases that take up space without telling the reader anything. */
export const SLOP = [
  /\bpowerful\b/iu,
  /\bflexible\b/iu,
  /\beasy[-\s]?to[-\s]?use\b/iu,
  /\bwelcome to\b/iu,
  /\bsimply\b/iu,
  /\bjust\b(?!\s+(?:in\s+time|now|the)\b)/iu,
  /\bas you can see\b/iu,
  /\bobviously\b/iu,
  /\bclearly\b/iu,
  /\bblazing[-\s]?fast\b/iu,
  /\blightning[-\s]?fast\b/iu,
  /\bstate[-\s]?of[-\s]?the[-\s]?art\b/iu,
  /\bworld[-\s]?class\b/iu,
  /\bcutting[-\s]?edge\b/iu,
  /\bbest[-\s]?in[-\s]?class\b/iu,
  /\bnext[-\s]?generation\b/iu,
  /\brevolutionary\b/iu,
  /\bgame[-\s]?changing\b/iu,
];

/** First pattern in `patterns` that `text` matches, if any. */
export const firstMatch = (patterns, text) => {
  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match) return match[0];
  }
  return undefined;
};

export const countWords = (prose) => prose.match(/[\p{L}\p{N}_]+/gu)?.length ?? 0;
