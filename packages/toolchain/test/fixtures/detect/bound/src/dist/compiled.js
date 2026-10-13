// Fixture: a build artifact. `dist/` is never descended into — scanning it
// double-counts the source it was compiled from and reports build output as the
// provenance of a symbol. `ChFi2d_FilletAPI` here is bound by nothing, so a
// broken skip list fails the bound fixture's `check`.
export const compiled = (oc) => new oc.ChFi2d_FilletAPI();
