// error-clarity.mjs — score the BindingError message actionability per row.
//
// Score rubric (0–3, identical to the harness in-test scoring):
//   0 — bare "BindingError" or empty (no actionable info)
//   1 — non-empty message but lacks position/type detail
//   2 — names the position OR the expected/received type
//   3 — names position + expected type + received type (full actionable)
//
// Used by the bench runner to aggregate per-row error-clarity into the
// final scoring table. The actual capture happens inside harness.mjs's
// runShape() (so live tests have already populated each shape's
// errorClarity { score, namesPosition, namesExpectedType, namesReceivedType,
// namesSuggestion }). This module's job is to roll up per-row → per-axis.

export const aggregateErrorClarity = (perRowRecord) => {
  const errors = perRowRecord.shapes
    .map((s) => s.errorClarity)
    .filter((c) => c && typeof c.score === 'number');
  if (errors.length === 0) {
    return {
      rowId: perRowRecord.rowId,
      scaffold: perRowRecord.mode === 'scaffold',
      score: null,
      sampleMessages: [],
      breakdown: null,
    };
  }
  const max = Math.max(...errors.map((c) => c.score));
  const mean = Number((errors.reduce((a, c) => a + c.score, 0) / errors.length).toFixed(2));
  const sampleMessages = errors.slice(0, 3).map((c) => c.message);
  return {
    rowId: perRowRecord.rowId,
    scaffold: false,
    score: max,
    meanScore: mean,
    sampleMessages,
    breakdown: {
      anyNamesPosition: errors.some((c) => c.namesPosition),
      anyNamesExpectedType: errors.some((c) => c.namesExpectedType),
      anyNamesReceivedType: errors.some((c) => c.namesReceivedType),
      anyNamesSuggestion: errors.some((c) => c.namesSuggestion),
    },
  };
};

export const SCORE_DESCRIPTIONS = {
  0: 'bare BindingError or empty — no actionable info',
  1: 'non-empty message; lacks position/type detail',
  2: 'names position OR expected/received type',
  3: 'names position + expected + received type (full actionable)',
};
