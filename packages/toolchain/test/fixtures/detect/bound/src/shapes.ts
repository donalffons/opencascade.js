/**
 * Fixture: every symbol referenced here is bound by `test/fixture/libcascade.config.ts`.
 *
 * Excluded from both tsconfig projects on purpose — it is scanner input, not
 * code that has to compile.
 *
 * The comment below names `oc.ChFi2d_FilletAPI`, which the config does NOT
 * bind: the scanner must blank comments before matching, or `check` fails on a
 * symbol whose only mention is the note explaining its absence.
 */
import { gp_Pnt } from 'demo-occt';

declare const oc: any;

export const build = (): unknown => {
  const origin: gp_Pnt = new oc.gp_Pnt(0, 0, 0);
  // Overload suffix: the d.ts names this `_2`, the binding is the base class.
  const box = new oc.BRepPrimAPI_MakeBox_2(origin, 1, 1, 1);
  // Custom binding — declared by customBindings, not an OCCT catalog symbol.
  const hash = oc.DemoWrapper.hash(box);
  // Emscripten runtime member, not a symbol at all.
  oc.FS.writeFile('/out.txt', String(hash));
  return box;
};
