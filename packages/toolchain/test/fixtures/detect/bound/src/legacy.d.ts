/**
 * Fixture: a generated-style declaration file. The scanner must skip `.d.ts`
 * entirely — an OCCT d.ts declares every bound symbol, so scanning it makes the
 * seed set vacuously equal to the current bindings.
 *
 * `ChFi2d_FilletAPI` is deliberately declared here and bound by nothing: if the
 * exclusion ever breaks, `check` fails on the bound fixture.
 */
export declare class ChFi2d_FilletAPI {
  Init(): void;
}
export declare class TopoDS_Shape {
  IsNull(): boolean;
}
