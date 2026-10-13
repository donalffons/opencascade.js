// Fixture: proves the walk descends into subdirectories, that a `//` inside a
// string literal does not blank the rest of the line, and that string contents
// are scanned (which is what makes `oc['gp_Pnt']` visible).
// `Draft` is a real catalog symbol but has no underscore, so a bare identifier
// spelled that way must NOT seed the scan.
const Draft = { label: 'not a binding' };

export const makeBox = (oc) => {
  const docs = 'https://example.com/docs'; const box = new oc.BRepPrimAPI_MakeBox(1, 1, 1);
  return { box, docs, Draft, origin: new oc['gp_Pnt'](0, 0, 0) };
};
