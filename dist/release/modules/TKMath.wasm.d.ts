declare const libName = "./modules/TKMath.wasm.d.ts";
export default libName;

type Standard_Boolean = boolean;
type Standard_Byte = number;
type Standard_Character = string;
type Standard_CString = string;
type Standard_Integer = number;
type Standard_Real = number;
type Standard_ShortReal = number;
type Standard_Size = number;

export declare class gp_XYZ {
  SetCoord_1(X: Quantity_AbsorbedDose, Y: Quantity_Acceleration, Z: Quantity_AcousticIntensity): void;
  SetCoord_2(Index: XCAFPrs_DocumentExplorerFlags, Xi: V3d_Coordinate): void;
  SetX(X: V3d_Parameter): void;
  SetY(Y: Standard_Real): void;
  SetZ(Z: Standard_Real): void;
  Coord_1(Index: Standard_Integer): Standard_Real;
  ChangeCoord(theIndex: Standard_Integer): Standard_Real;
  Coord_2(X: Standard_Real, Y: Standard_Real, Z: Standard_Real): void;
  GetData(): Standard_Real;
  ChangeData(): Standard_Real;
  X(): Standard_Real;
  Y(): Standard_Real;
  Z(): Standard_Real;
  Modulus(): Standard_Real;
  SquareModulus(): Standard_Real;
  IsEqual(Other: gp_XYZ, Tolerance: Standard_Real): Standard_Boolean;
  Add(Other: gp_XYZ): void;
  Added(Other: gp_XYZ): gp_XYZ;
  Cross(Right: gp_XYZ): void;
  Crossed(Right: gp_XYZ): gp_XYZ;
  CrossMagnitude(Right: gp_XYZ): Standard_Real;
  CrossSquareMagnitude(Right: gp_XYZ): Standard_Real;
  CrossCross(Coord1: gp_XYZ, Coord2: gp_XYZ): void;
  CrossCrossed(Coord1: gp_XYZ, Coord2: gp_XYZ): gp_XYZ;
  Divide(Scalar: Standard_Real): void;
  Divided(Scalar: Standard_Real): gp_XYZ;
  Dot(Other: gp_XYZ): Standard_Real;
  DotCross(Coord1: gp_XYZ, Coord2: gp_XYZ): Standard_Real;
  Multiply_1(Scalar: Standard_Real): void;
  Multiply_2(Other: gp_XYZ): void;
  Multiply_3(Matrix: gp_Mat): void;
  Multiplied_1(Scalar: Standard_Real): gp_XYZ;
  Multiplied_2(Other: gp_XYZ): gp_XYZ;
  Multiplied_3(Matrix: gp_Mat): gp_XYZ;
  Normalize(): void;
  Normalized(): gp_XYZ;
  Reverse(): void;
  Reversed(): gp_XYZ;
  Subtract(Right: gp_XYZ): void;
  Subtracted(Right: gp_XYZ): gp_XYZ;
  SetLinearForm_1(A1: Standard_Real, XYZ1: gp_XYZ, A2: Standard_Real, XYZ2: gp_XYZ, A3: Standard_Real, XYZ3: gp_XYZ, XYZ4: gp_XYZ): void;
  SetLinearForm_2(A1: Standard_Real, XYZ1: gp_XYZ, A2: Standard_Real, XYZ2: gp_XYZ, A3: Standard_Real, XYZ3: gp_XYZ): void;
  SetLinearForm_3(A1: Standard_Real, XYZ1: gp_XYZ, A2: Standard_Real, XYZ2: gp_XYZ, XYZ3: gp_XYZ): void;
  SetLinearForm_4(A1: Standard_Real, XYZ1: gp_XYZ, A2: Standard_Real, XYZ2: gp_XYZ): void;
  SetLinearForm_5(A1: Standard_Real, XYZ1: gp_XYZ, XYZ2: gp_XYZ): void;
  SetLinearForm_6(XYZ1: gp_XYZ, XYZ2: gp_XYZ): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  InitFromJson(theSStream: Standard_SStream, theStreamPos: Standard_Integer): Standard_Boolean;
}

  export declare class gp_XYZ_1 extends gp_XYZ {
    constructor();
  }

  export declare class gp_XYZ_2 extends gp_XYZ {
    constructor(X: Standard_Real, Y: Standard_Real, Z: Standard_Real);
  }

export declare class gp {
  constructor();
  Resolution(): Standard_Real;
  Origin(): gp_Pnt;
  DX(): gp_Dir;
  DY(): gp_Dir;
  DZ(): gp_Dir;
  OX(): gp_Ax1;
  OY(): gp_Ax1;
  OZ(): gp_Ax1;
  XOY(): gp_Ax2;
  ZOX(): gp_Ax2;
  YOZ(): gp_Ax2;
  Origin2d(): gp_Pnt2d;
  DX2d(): gp_Dir2d;
  DY2d(): gp_Dir2d;
  OX2d(): gp_Ax2d;
  OY2d(): gp_Ax2d;
}

export declare class gp_Mat {
  SetCol(Col: Standard_Integer, Value: gp_XYZ): void;
  SetCols(Col1: gp_XYZ, Col2: gp_XYZ, Col3: gp_XYZ): void;
  SetCross(Ref: gp_XYZ): void;
  SetDiagonal(X1: Standard_Real, X2: Standard_Real, X3: Standard_Real): void;
  SetDot(Ref: gp_XYZ): void;
  SetIdentity(): void;
  SetRotation(Axis: gp_XYZ, Ang: Standard_Real): void;
  SetRow(Row: Standard_Integer, Value: gp_XYZ): void;
  SetRows(Row1: gp_XYZ, Row2: gp_XYZ, Row3: gp_XYZ): void;
  SetScale(S: Standard_Real): void;
  SetValue(Row: Standard_Integer, Col: Standard_Integer, Value: Standard_Real): void;
  Column(Col: Standard_Integer): gp_XYZ;
  Determinant(): Standard_Real;
  Diagonal(): gp_XYZ;
  Row(Row: Standard_Integer): gp_XYZ;
  Value(Row: Standard_Integer, Col: Standard_Integer): Standard_Real;
  ChangeValue(Row: Standard_Integer, Col: Standard_Integer): Standard_Real;
  IsSingular(): Standard_Boolean;
  Add(Other: gp_Mat): void;
  Added(Other: gp_Mat): gp_Mat;
  Divide(Scalar: Standard_Real): void;
  Divided(Scalar: Standard_Real): gp_Mat;
  Invert(): void;
  Inverted(): gp_Mat;
  Multiplied_1(Other: gp_Mat): gp_Mat;
  Multiply_1(Other: gp_Mat): void;
  PreMultiply(Other: gp_Mat): void;
  Multiplied_2(Scalar: Standard_Real): gp_Mat;
  Multiply_2(Scalar: Standard_Real): void;
  Power(N: Standard_Integer): void;
  Powered(N: Standard_Integer): gp_Mat;
  Subtract(Other: gp_Mat): void;
  Subtracted(Other: gp_Mat): gp_Mat;
  Transpose(): void;
  Transposed(): gp_Mat;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

  export declare class gp_Mat_1 extends gp_Mat {
    constructor();
  }

  export declare class gp_Mat_2 extends gp_Mat {
    constructor(a11: Standard_Real, a12: Standard_Real, a13: Standard_Real, a21: Standard_Real, a22: Standard_Real, a23: Standard_Real, a31: Standard_Real, a32: Standard_Real, a33: Standard_Real);
  }

  export declare class gp_Mat_3 extends gp_Mat {
    constructor(Col1: gp_XYZ, Col2: gp_XYZ, Col3: gp_XYZ);
  }

export declare class gp_Pnt {
  SetCoord_1(Index: Standard_Integer, Xi: Standard_Real): void;
  SetCoord_2(Xp: Standard_Real, Yp: Standard_Real, Zp: Standard_Real): void;
  SetX(X: Standard_Real): void;
  SetY(Y: Standard_Real): void;
  SetZ(Z: Standard_Real): void;
  SetXYZ(Coord: gp_XYZ): void;
  Coord_1(Index: Standard_Integer): Standard_Real;
  Coord_2(Xp: Standard_Real, Yp: Standard_Real, Zp: Standard_Real): void;
  X(): Standard_Real;
  Y(): Standard_Real;
  Z(): Standard_Real;
  XYZ(): gp_XYZ;
  Coord_3(): gp_XYZ;
  ChangeCoord(): gp_XYZ;
  BaryCenter(Alpha: Standard_Real, P: gp_Pnt, Beta: Standard_Real): void;
  IsEqual(Other: gp_Pnt, LinearTolerance: Standard_Real): Standard_Boolean;
  Distance(Other: gp_Pnt): Standard_Real;
  SquareDistance(Other: gp_Pnt): Standard_Real;
  Mirror_1(P: gp_Pnt): void;
  Mirrored_1(P: gp_Pnt): gp_Pnt;
  Mirror_2(A1: gp_Ax1): void;
  Mirrored_2(A1: gp_Ax1): gp_Pnt;
  Mirror_3(A2: gp_Ax2): void;
  Mirrored_3(A2: gp_Ax2): gp_Pnt;
  Rotate(A1: gp_Ax1, Ang: Standard_Real): void;
  Rotated(A1: gp_Ax1, Ang: Standard_Real): gp_Pnt;
  Scale(P: gp_Pnt, S: Standard_Real): void;
  Scaled(P: gp_Pnt, S: Standard_Real): gp_Pnt;
  Transform(T: gp_Trsf): void;
  Transformed(T: gp_Trsf): gp_Pnt;
  Translate_1(V: gp_Vec): void;
  Translated_1(V: gp_Vec): gp_Pnt;
  Translate_2(P1: gp_Pnt, P2: gp_Pnt): void;
  Translated_2(P1: gp_Pnt, P2: gp_Pnt): gp_Pnt;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  InitFromJson(theSStream: Standard_SStream, theStreamPos: Standard_Integer): Standard_Boolean;
}

  export declare class gp_Pnt_1 extends gp_Pnt {
    constructor();
  }

  export declare class gp_Pnt_2 extends gp_Pnt {
    constructor(Coord: gp_XYZ);
  }

  export declare class gp_Pnt_3 extends gp_Pnt {
    constructor(Xp: Standard_Real, Yp: Standard_Real, Zp: Standard_Real);
  }

export declare class gp_Trsf {
  SetMirror_1(P: gp_Pnt): void;
  SetMirror_2(A1: gp_Ax1): void;
  SetMirror_3(A2: gp_Ax2): void;
  SetRotation_1(A1: gp_Ax1, Ang: Standard_Real): void;
  SetRotation_2(R: gp_Quaternion): void;
  SetRotationPart(R: gp_Quaternion): void;
  SetScale(P: gp_Pnt, S: Standard_Real): void;
  SetDisplacement(FromSystem1: gp_Ax3, ToSystem2: gp_Ax3): void;
  SetTransformation_1(FromSystem1: gp_Ax3, ToSystem2: gp_Ax3): void;
  SetTransformation_2(ToSystem: gp_Ax3): void;
  SetTransformation_3(R: gp_Quaternion, T: gp_Vec): void;
  SetTranslation_1(V: gp_Vec): void;
  SetTranslation_2(P1: gp_Pnt, P2: gp_Pnt): void;
  SetTranslationPart(V: gp_Vec): void;
  SetScaleFactor(S: Standard_Real): void;
  SetForm(P: gp_TrsfForm): void;
  SetValues(a11: Standard_Real, a12: Standard_Real, a13: Standard_Real, a14: Standard_Real, a21: Standard_Real, a22: Standard_Real, a23: Standard_Real, a24: Standard_Real, a31: Standard_Real, a32: Standard_Real, a33: Standard_Real, a34: Standard_Real): void;
  IsNegative(): Standard_Boolean;
  Form(): gp_TrsfForm;
  ScaleFactor(): Standard_Real;
  TranslationPart(): gp_XYZ;
  GetRotation_1(theAxis: gp_XYZ, theAngle: Standard_Real): Standard_Boolean;
  GetRotation_2(): gp_Quaternion;
  VectorialPart(): gp_Mat;
  HVectorialPart(): gp_Mat;
  Value(Row: Standard_Integer, Col: Standard_Integer): Standard_Real;
  Invert(): void;
  Inverted(): gp_Trsf;
  Multiplied(T: gp_Trsf): gp_Trsf;
  Multiply(T: gp_Trsf): void;
  PreMultiply(T: gp_Trsf): void;
  Power(N: Standard_Integer): void;
  Powered(N: Standard_Integer): gp_Trsf;
  Transforms_1(X: Standard_Real, Y: Standard_Real, Z: Standard_Real): void;
  Transforms_2(Coord: gp_XYZ): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  InitFromJson(theSStream: Standard_SStream, theStreamPos: Standard_Integer): Standard_Boolean;
}

  export declare class gp_Trsf_1 extends gp_Trsf {
    constructor();
  }

  export declare class gp_Trsf_2 extends gp_Trsf {
    constructor(T: gp_Trsf2d);
  }

export declare class gp_Mat2d {
  SetCol(Col: Standard_Integer, Value: gp_XY): void;
  SetCols(Col1: gp_XY, Col2: gp_XY): void;
  SetDiagonal(X1: Standard_Real, X2: Standard_Real): void;
  SetIdentity(): void;
  SetRotation(Ang: Standard_Real): void;
  SetRow(Row: Standard_Integer, Value: gp_XY): void;
  SetRows(Row1: gp_XY, Row2: gp_XY): void;
  SetScale(S: Standard_Real): void;
  SetValue(Row: Standard_Integer, Col: Standard_Integer, Value: Standard_Real): void;
  Column(Col: Standard_Integer): gp_XY;
  Determinant(): Standard_Real;
  Diagonal(): gp_XY;
  Row(Row: Standard_Integer): gp_XY;
  Value(Row: Standard_Integer, Col: Standard_Integer): Standard_Real;
  ChangeValue(Row: Standard_Integer, Col: Standard_Integer): Standard_Real;
  IsSingular(): Standard_Boolean;
  Add(Other: gp_Mat2d): void;
  Added(Other: gp_Mat2d): gp_Mat2d;
  Divide(Scalar: Standard_Real): void;
  Divided(Scalar: Standard_Real): gp_Mat2d;
  Invert(): void;
  Inverted(): gp_Mat2d;
  Multiplied_1(Other: gp_Mat2d): gp_Mat2d;
  Multiply_1(Other: gp_Mat2d): void;
  PreMultiply(Other: gp_Mat2d): void;
  Multiplied_2(Scalar: Standard_Real): gp_Mat2d;
  Multiply_2(Scalar: Standard_Real): void;
  Power(N: Standard_Integer): void;
  Powered(N: Standard_Integer): gp_Mat2d;
  Subtract(Other: gp_Mat2d): void;
  Subtracted(Other: gp_Mat2d): gp_Mat2d;
  Transpose(): void;
  Transposed(): gp_Mat2d;
}

  export declare class gp_Mat2d_1 extends gp_Mat2d {
    constructor();
  }

  export declare class gp_Mat2d_2 extends gp_Mat2d {
    constructor(Col1: gp_XY, Col2: gp_XY);
  }

export declare class gp_XY {
  SetCoord_1(Index: Standard_Integer, Xi: Standard_Real): void;
  SetCoord_2(X: Standard_Real, Y: Standard_Real): void;
  SetX(X: Standard_Real): void;
  SetY(Y: Standard_Real): void;
  Coord_1(Index: Standard_Integer): Standard_Real;
  ChangeCoord(theIndex: Standard_Integer): Standard_Real;
  Coord_2(X: Standard_Real, Y: Standard_Real): void;
  X(): Standard_Real;
  Y(): Standard_Real;
  Modulus(): Standard_Real;
  SquareModulus(): Standard_Real;
  IsEqual(Other: gp_XY, Tolerance: Standard_Real): Standard_Boolean;
  Add(Other: gp_XY): void;
  Added(Other: gp_XY): gp_XY;
  Crossed(Right: gp_XY): Standard_Real;
  CrossMagnitude(Right: gp_XY): Standard_Real;
  CrossSquareMagnitude(Right: gp_XY): Standard_Real;
  Divide(Scalar: Standard_Real): void;
  Divided(Scalar: Standard_Real): gp_XY;
  Dot(Other: gp_XY): Standard_Real;
  Multiply_1(Scalar: Standard_Real): void;
  Multiply_2(Other: gp_XY): void;
  Multiply_3(Matrix: gp_Mat2d): void;
  Multiplied_1(Scalar: Standard_Real): gp_XY;
  Multiplied_2(Other: gp_XY): gp_XY;
  Multiplied_3(Matrix: gp_Mat2d): gp_XY;
  Normalize(): void;
  Normalized(): gp_XY;
  Reverse(): void;
  Reversed(): gp_XY;
  SetLinearForm_1(A1: Standard_Real, XY1: gp_XY, A2: Standard_Real, XY2: gp_XY): void;
  SetLinearForm_2(A1: Standard_Real, XY1: gp_XY, A2: Standard_Real, XY2: gp_XY, XY3: gp_XY): void;
  SetLinearForm_3(A1: Standard_Real, XY1: gp_XY, XY2: gp_XY): void;
  SetLinearForm_4(XY1: gp_XY, XY2: gp_XY): void;
  Subtract(Right: gp_XY): void;
  Subtracted(Right: gp_XY): gp_XY;
}

  export declare class gp_XY_1 extends gp_XY {
    constructor();
  }

  export declare class gp_XY_2 extends gp_XY {
    constructor(X: Standard_Real, Y: Standard_Real);
  }

export declare class gp_Trsf2d {
  SetMirror_1(P: gp_Pnt2d): void;
  SetMirror_2(A: gp_Ax2d): void;
  SetRotation(P: gp_Pnt2d, Ang: Standard_Real): void;
  SetScale(P: gp_Pnt2d, S: Standard_Real): void;
  SetTransformation_1(FromSystem1: gp_Ax2d, ToSystem2: gp_Ax2d): void;
  SetTransformation_2(ToSystem: gp_Ax2d): void;
  SetTranslation_1(V: gp_Vec2d): void;
  SetTranslation_2(P1: gp_Pnt2d, P2: gp_Pnt2d): void;
  SetTranslationPart(V: gp_Vec2d): void;
  SetScaleFactor(S: Standard_Real): void;
  IsNegative(): Standard_Boolean;
  Form(): gp_TrsfForm;
  ScaleFactor(): Standard_Real;
  TranslationPart(): gp_XY;
  VectorialPart(): gp_Mat2d;
  HVectorialPart(): gp_Mat2d;
  RotationPart(): Standard_Real;
  Value(Row: Standard_Integer, Col: Standard_Integer): Standard_Real;
  Invert(): void;
  Inverted(): gp_Trsf2d;
  Multiplied(T: gp_Trsf2d): gp_Trsf2d;
  Multiply(T: gp_Trsf2d): void;
  PreMultiply(T: gp_Trsf2d): void;
  Power(N: Standard_Integer): void;
  Powered(N: Standard_Integer): gp_Trsf2d;
  Transforms_1(X: Standard_Real, Y: Standard_Real): void;
  Transforms_2(Coord: gp_XY): void;
  SetValues(a11: Standard_Real, a12: Standard_Real, a13: Standard_Real, a21: Standard_Real, a22: Standard_Real, a23: Standard_Real): void;
}

  export declare class gp_Trsf2d_1 extends gp_Trsf2d {
    constructor();
  }

  export declare class gp_Trsf2d_2 extends gp_Trsf2d {
    constructor(T: gp_Trsf);
  }

export declare class gp_Pnt2d {
  SetCoord_1(Index: Standard_Integer, Xi: Standard_Real): void;
  SetCoord_2(Xp: Standard_Real, Yp: Standard_Real): void;
  SetX(X: Standard_Real): void;
  SetY(Y: Standard_Real): void;
  SetXY(Coord: gp_XY): void;
  Coord_1(Index: Standard_Integer): Standard_Real;
  Coord_2(Xp: Standard_Real, Yp: Standard_Real): void;
  X(): Standard_Real;
  Y(): Standard_Real;
  XY(): gp_XY;
  Coord_3(): gp_XY;
  ChangeCoord(): gp_XY;
  IsEqual(Other: gp_Pnt2d, LinearTolerance: Standard_Real): Standard_Boolean;
  Distance(Other: gp_Pnt2d): Standard_Real;
  SquareDistance(Other: gp_Pnt2d): Standard_Real;
  Mirror_1(P: gp_Pnt2d): void;
  Mirrored_1(P: gp_Pnt2d): gp_Pnt2d;
  Mirror_2(A: gp_Ax2d): void;
  Mirrored_2(A: gp_Ax2d): gp_Pnt2d;
  Rotate(P: gp_Pnt2d, Ang: Standard_Real): void;
  Rotated(P: gp_Pnt2d, Ang: Standard_Real): gp_Pnt2d;
  Scale(P: gp_Pnt2d, S: Standard_Real): void;
  Scaled(P: gp_Pnt2d, S: Standard_Real): gp_Pnt2d;
  Transform(T: gp_Trsf2d): void;
  Transformed(T: gp_Trsf2d): gp_Pnt2d;
  Translate_1(V: gp_Vec2d): void;
  Translated_1(V: gp_Vec2d): gp_Pnt2d;
  Translate_2(P1: gp_Pnt2d, P2: gp_Pnt2d): void;
  Translated_2(P1: gp_Pnt2d, P2: gp_Pnt2d): gp_Pnt2d;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

  export declare class gp_Pnt2d_1 extends gp_Pnt2d {
    constructor();
  }

  export declare class gp_Pnt2d_2 extends gp_Pnt2d {
    constructor(Coord: gp_XY);
  }

  export declare class gp_Pnt2d_3 extends gp_Pnt2d {
    constructor(Xp: Standard_Real, Yp: Standard_Real);
  }

export declare class gp_Vec2d {
  SetCoord_1(Index: Standard_Integer, Xi: Standard_Real): void;
  SetCoord_2(Xv: Standard_Real, Yv: Standard_Real): void;
  SetX(X: Standard_Real): void;
  SetY(Y: Standard_Real): void;
  SetXY(Coord: gp_XY): void;
  Coord_1(Index: Standard_Integer): Standard_Real;
  Coord_2(Xv: Standard_Real, Yv: Standard_Real): void;
  X(): Standard_Real;
  Y(): Standard_Real;
  XY(): gp_XY;
  IsEqual(Other: gp_Vec2d, LinearTolerance: Standard_Real, AngularTolerance: Standard_Real): Standard_Boolean;
  IsNormal(Other: gp_Vec2d, AngularTolerance: Standard_Real): Standard_Boolean;
  IsOpposite(Other: gp_Vec2d, AngularTolerance: Standard_Real): Standard_Boolean;
  IsParallel(Other: gp_Vec2d, AngularTolerance: Standard_Real): Standard_Boolean;
  Angle(Other: gp_Vec2d): Standard_Real;
  Magnitude(): Standard_Real;
  SquareMagnitude(): Standard_Real;
  Add(Other: gp_Vec2d): void;
  Added(Other: gp_Vec2d): gp_Vec2d;
  Crossed(Right: gp_Vec2d): Standard_Real;
  CrossMagnitude(Right: gp_Vec2d): Standard_Real;
  CrossSquareMagnitude(Right: gp_Vec2d): Standard_Real;
  Divide(Scalar: Standard_Real): void;
  Divided(Scalar: Standard_Real): gp_Vec2d;
  Dot(Other: gp_Vec2d): Standard_Real;
  GetNormal(): gp_Vec2d;
  Multiply(Scalar: Standard_Real): void;
  Multiplied(Scalar: Standard_Real): gp_Vec2d;
  Normalize(): void;
  Normalized(): gp_Vec2d;
  Reverse(): void;
  Reversed(): gp_Vec2d;
  Subtract(Right: gp_Vec2d): void;
  Subtracted(Right: gp_Vec2d): gp_Vec2d;
  SetLinearForm_1(A1: Standard_Real, V1: gp_Vec2d, A2: Standard_Real, V2: gp_Vec2d, V3: gp_Vec2d): void;
  SetLinearForm_2(A1: Standard_Real, V1: gp_Vec2d, A2: Standard_Real, V2: gp_Vec2d): void;
  SetLinearForm_3(A1: Standard_Real, V1: gp_Vec2d, V2: gp_Vec2d): void;
  SetLinearForm_4(Left: gp_Vec2d, Right: gp_Vec2d): void;
  Mirror_1(V: gp_Vec2d): void;
  Mirrored_1(V: gp_Vec2d): gp_Vec2d;
  Mirror_2(A1: gp_Ax2d): void;
  Mirrored_2(A1: gp_Ax2d): gp_Vec2d;
  Rotate(Ang: Standard_Real): void;
  Rotated(Ang: Standard_Real): gp_Vec2d;
  Scale(S: Standard_Real): void;
  Scaled(S: Standard_Real): gp_Vec2d;
  Transform(T: gp_Trsf2d): void;
  Transformed(T: gp_Trsf2d): gp_Vec2d;
}

  export declare class gp_Vec2d_1 extends gp_Vec2d {
    constructor();
  }

  export declare class gp_Vec2d_2 extends gp_Vec2d {
    constructor(V: gp_Dir2d);
  }

  export declare class gp_Vec2d_3 extends gp_Vec2d {
    constructor(Coord: gp_XY);
  }

  export declare class gp_Vec2d_4 extends gp_Vec2d {
    constructor(Xv: Standard_Real, Yv: Standard_Real);
  }

  export declare class gp_Vec2d_5 extends gp_Vec2d {
    constructor(P1: gp_Pnt2d, P2: gp_Pnt2d);
  }

export declare class gp_Dir2d {
  SetCoord_1(Index: Standard_Integer, Xi: Standard_Real): void;
  SetCoord_2(Xv: Standard_Real, Yv: Standard_Real): void;
  SetX(X: Standard_Real): void;
  SetY(Y: Standard_Real): void;
  SetXY(Coord: gp_XY): void;
  Coord_1(Index: Standard_Integer): Standard_Real;
  Coord_2(Xv: Standard_Real, Yv: Standard_Real): void;
  X(): Standard_Real;
  Y(): Standard_Real;
  XY(): gp_XY;
  IsEqual(Other: gp_Dir2d, AngularTolerance: Standard_Real): Standard_Boolean;
  IsNormal(Other: gp_Dir2d, AngularTolerance: Standard_Real): Standard_Boolean;
  IsOpposite(Other: gp_Dir2d, AngularTolerance: Standard_Real): Standard_Boolean;
  IsParallel(Other: gp_Dir2d, AngularTolerance: Standard_Real): Standard_Boolean;
  Angle(Other: gp_Dir2d): Standard_Real;
  Crossed(Right: gp_Dir2d): Standard_Real;
  Dot(Other: gp_Dir2d): Standard_Real;
  Reverse(): void;
  Reversed(): gp_Dir2d;
  Mirror_1(V: gp_Dir2d): void;
  Mirrored_1(V: gp_Dir2d): gp_Dir2d;
  Mirror_2(A: gp_Ax2d): void;
  Mirrored_2(A: gp_Ax2d): gp_Dir2d;
  Rotate(Ang: Standard_Real): void;
  Rotated(Ang: Standard_Real): gp_Dir2d;
  Transform(T: gp_Trsf2d): void;
  Transformed(T: gp_Trsf2d): gp_Dir2d;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

  export declare class gp_Dir2d_1 extends gp_Dir2d {
    constructor();
  }

  export declare class gp_Dir2d_2 extends gp_Dir2d {
    constructor(V: gp_Vec2d);
  }

  export declare class gp_Dir2d_3 extends gp_Dir2d {
    constructor(Coord: gp_XY);
  }

  export declare class gp_Dir2d_4 extends gp_Dir2d {
    constructor(Xv: Standard_Real, Yv: Standard_Real);
  }

export declare class gp_Ax2d {
  SetLocation(Locat: gp_Pnt2d): void;
  SetDirection(V: gp_Dir2d): void;
  Location(): gp_Pnt2d;
  Direction(): gp_Dir2d;
  IsCoaxial(Other: gp_Ax2d, AngularTolerance: Standard_Real, LinearTolerance: Standard_Real): Standard_Boolean;
  IsNormal(Other: gp_Ax2d, AngularTolerance: Standard_Real): Standard_Boolean;
  IsOpposite(Other: gp_Ax2d, AngularTolerance: Standard_Real): Standard_Boolean;
  IsParallel(Other: gp_Ax2d, AngularTolerance: Standard_Real): Standard_Boolean;
  Angle(Other: gp_Ax2d): Standard_Real;
  Reverse(): void;
  Reversed(): gp_Ax2d;
  Mirror_1(P: gp_Pnt2d): void;
  Mirrored_1(P: gp_Pnt2d): gp_Ax2d;
  Mirror_2(A: gp_Ax2d): void;
  Mirrored_2(A: gp_Ax2d): gp_Ax2d;
  Rotate(P: gp_Pnt2d, Ang: Standard_Real): void;
  Rotated(P: gp_Pnt2d, Ang: Standard_Real): gp_Ax2d;
  Scale(P: gp_Pnt2d, S: Standard_Real): void;
  Scaled(P: gp_Pnt2d, S: Standard_Real): gp_Ax2d;
  Transform(T: gp_Trsf2d): void;
  Transformed(T: gp_Trsf2d): gp_Ax2d;
  Translate_1(V: gp_Vec2d): void;
  Translated_1(V: gp_Vec2d): gp_Ax2d;
  Translate_2(P1: gp_Pnt2d, P2: gp_Pnt2d): void;
  Translated_2(P1: gp_Pnt2d, P2: gp_Pnt2d): gp_Ax2d;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

  export declare class gp_Ax2d_1 extends gp_Ax2d {
    constructor();
  }

  export declare class gp_Ax2d_2 extends gp_Ax2d {
    constructor(P: gp_Pnt2d, V: gp_Dir2d);
  }

export declare class gp_Vec {
  SetCoord_1(Index: Standard_Integer, Xi: Standard_Real): void;
  SetCoord_2(Xv: Standard_Real, Yv: Standard_Real, Zv: Standard_Real): void;
  SetX(X: Standard_Real): void;
  SetY(Y: Standard_Real): void;
  SetZ(Z: Standard_Real): void;
  SetXYZ(Coord: gp_XYZ): void;
  Coord_1(Index: Standard_Integer): Standard_Real;
  Coord_2(Xv: Standard_Real, Yv: Standard_Real, Zv: Standard_Real): void;
  X(): Standard_Real;
  Y(): Standard_Real;
  Z(): Standard_Real;
  XYZ(): gp_XYZ;
  IsEqual(Other: gp_Vec, LinearTolerance: Standard_Real, AngularTolerance: Standard_Real): Standard_Boolean;
  IsNormal(Other: gp_Vec, AngularTolerance: Standard_Real): Standard_Boolean;
  IsOpposite(Other: gp_Vec, AngularTolerance: Standard_Real): Standard_Boolean;
  IsParallel(Other: gp_Vec, AngularTolerance: Standard_Real): Standard_Boolean;
  Angle(Other: gp_Vec): Standard_Real;
  AngleWithRef(Other: gp_Vec, VRef: gp_Vec): Standard_Real;
  Magnitude(): Standard_Real;
  SquareMagnitude(): Standard_Real;
  Add(Other: gp_Vec): void;
  Added(Other: gp_Vec): gp_Vec;
  Subtract(Right: gp_Vec): void;
  Subtracted(Right: gp_Vec): gp_Vec;
  Multiply(Scalar: Standard_Real): void;
  Multiplied(Scalar: Standard_Real): gp_Vec;
  Divide(Scalar: Standard_Real): void;
  Divided(Scalar: Standard_Real): gp_Vec;
  Cross(Right: gp_Vec): void;
  Crossed(Right: gp_Vec): gp_Vec;
  CrossMagnitude(Right: gp_Vec): Standard_Real;
  CrossSquareMagnitude(Right: gp_Vec): Standard_Real;
  CrossCross(V1: gp_Vec, V2: gp_Vec): void;
  CrossCrossed(V1: gp_Vec, V2: gp_Vec): gp_Vec;
  Dot(Other: gp_Vec): Standard_Real;
  DotCross(V1: gp_Vec, V2: gp_Vec): Standard_Real;
  Normalize(): void;
  Normalized(): gp_Vec;
  Reverse(): void;
  Reversed(): gp_Vec;
  SetLinearForm_1(A1: Standard_Real, V1: gp_Vec, A2: Standard_Real, V2: gp_Vec, A3: Standard_Real, V3: gp_Vec, V4: gp_Vec): void;
  SetLinearForm_2(A1: Standard_Real, V1: gp_Vec, A2: Standard_Real, V2: gp_Vec, A3: Standard_Real, V3: gp_Vec): void;
  SetLinearForm_3(A1: Standard_Real, V1: gp_Vec, A2: Standard_Real, V2: gp_Vec, V3: gp_Vec): void;
  SetLinearForm_4(A1: Standard_Real, V1: gp_Vec, A2: Standard_Real, V2: gp_Vec): void;
  SetLinearForm_5(A1: Standard_Real, V1: gp_Vec, V2: gp_Vec): void;
  SetLinearForm_6(V1: gp_Vec, V2: gp_Vec): void;
  Mirror_1(V: gp_Vec): void;
  Mirrored_1(V: gp_Vec): gp_Vec;
  Mirror_2(A1: gp_Ax1): void;
  Mirrored_2(A1: gp_Ax1): gp_Vec;
  Mirror_3(A2: gp_Ax2): void;
  Mirrored_3(A2: gp_Ax2): gp_Vec;
  Rotate(A1: gp_Ax1, Ang: Standard_Real): void;
  Rotated(A1: gp_Ax1, Ang: Standard_Real): gp_Vec;
  Scale(S: Standard_Real): void;
  Scaled(S: Standard_Real): gp_Vec;
  Transform(T: gp_Trsf): void;
  Transformed(T: gp_Trsf): gp_Vec;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

  export declare class gp_Vec_1 extends gp_Vec {
    constructor();
  }

  export declare class gp_Vec_2 extends gp_Vec {
    constructor(V: gp_Dir);
  }

  export declare class gp_Vec_3 extends gp_Vec {
    constructor(Coord: gp_XYZ);
  }

  export declare class gp_Vec_4 extends gp_Vec {
    constructor(Xv: Standard_Real, Yv: Standard_Real, Zv: Standard_Real);
  }

  export declare class gp_Vec_5 extends gp_Vec {
    constructor(P1: gp_Pnt, P2: gp_Pnt);
  }

export declare class gp_Dir {
  SetCoord_1(Index: Standard_Integer, Xi: Standard_Real): void;
  SetCoord_2(Xv: Standard_Real, Yv: Standard_Real, Zv: Standard_Real): void;
  SetX(X: Standard_Real): void;
  SetY(Y: Standard_Real): void;
  SetZ(Z: Standard_Real): void;
  SetXYZ(Coord: gp_XYZ): void;
  Coord_1(Index: Standard_Integer): Standard_Real;
  Coord_2(Xv: Standard_Real, Yv: Standard_Real, Zv: Standard_Real): void;
  X(): Standard_Real;
  Y(): Standard_Real;
  Z(): Standard_Real;
  XYZ(): gp_XYZ;
  IsEqual(Other: gp_Dir, AngularTolerance: Standard_Real): Standard_Boolean;
  IsNormal(Other: gp_Dir, AngularTolerance: Standard_Real): Standard_Boolean;
  IsOpposite(Other: gp_Dir, AngularTolerance: Standard_Real): Standard_Boolean;
  IsParallel(Other: gp_Dir, AngularTolerance: Standard_Real): Standard_Boolean;
  Angle(Other: gp_Dir): Standard_Real;
  AngleWithRef(Other: gp_Dir, VRef: gp_Dir): Standard_Real;
  Cross(Right: gp_Dir): void;
  Crossed(Right: gp_Dir): gp_Dir;
  CrossCross(V1: gp_Dir, V2: gp_Dir): void;
  CrossCrossed(V1: gp_Dir, V2: gp_Dir): gp_Dir;
  Dot(Other: gp_Dir): Standard_Real;
  DotCross(V1: gp_Dir, V2: gp_Dir): Standard_Real;
  Reverse(): void;
  Reversed(): gp_Dir;
  Mirror_1(V: gp_Dir): void;
  Mirrored_1(V: gp_Dir): gp_Dir;
  Mirror_2(A1: gp_Ax1): void;
  Mirrored_2(A1: gp_Ax1): gp_Dir;
  Mirror_3(A2: gp_Ax2): void;
  Mirrored_3(A2: gp_Ax2): gp_Dir;
  Rotate(A1: gp_Ax1, Ang: Standard_Real): void;
  Rotated(A1: gp_Ax1, Ang: Standard_Real): gp_Dir;
  Transform(T: gp_Trsf): void;
  Transformed(T: gp_Trsf): gp_Dir;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  InitFromJson(theSStream: Standard_SStream, theStreamPos: Standard_Integer): Standard_Boolean;
}

  export declare class gp_Dir_1 extends gp_Dir {
    constructor();
  }

  export declare class gp_Dir_2 extends gp_Dir {
    constructor(V: gp_Vec);
  }

  export declare class gp_Dir_3 extends gp_Dir {
    constructor(Coord: gp_XYZ);
  }

  export declare class gp_Dir_4 extends gp_Dir {
    constructor(Xv: Standard_Real, Yv: Standard_Real, Zv: Standard_Real);
  }

export declare class Bnd_Box {
  SetWhole(): void;
  SetVoid(): void;
  Set_1(P: gp_Pnt): void;
  Set_2(P: gp_Pnt, D: gp_Dir): void;
  Update_1(aXmin: Standard_Real, aYmin: Standard_Real, aZmin: Standard_Real, aXmax: Standard_Real, aYmax: Standard_Real, aZmax: Standard_Real): void;
  Update_2(X: Standard_Real, Y: Standard_Real, Z: Standard_Real): void;
  GetGap(): Standard_Real;
  SetGap(Tol: Standard_Real): void;
  Enlarge(Tol: Standard_Real): void;
  Get(theXmin: Standard_Real, theYmin: Standard_Real, theZmin: Standard_Real, theXmax: Standard_Real, theYmax: Standard_Real, theZmax: Standard_Real): void;
  CornerMin(): gp_Pnt;
  CornerMax(): gp_Pnt;
  OpenXmin(): void;
  OpenXmax(): void;
  OpenYmin(): void;
  OpenYmax(): void;
  OpenZmin(): void;
  OpenZmax(): void;
  IsOpen(): Standard_Boolean;
  IsOpenXmin(): Standard_Boolean;
  IsOpenXmax(): Standard_Boolean;
  IsOpenYmin(): Standard_Boolean;
  IsOpenYmax(): Standard_Boolean;
  IsOpenZmin(): Standard_Boolean;
  IsOpenZmax(): Standard_Boolean;
  IsWhole(): Standard_Boolean;
  IsVoid(): Standard_Boolean;
  IsXThin(tol: Standard_Real): Standard_Boolean;
  IsYThin(tol: Standard_Real): Standard_Boolean;
  IsZThin(tol: Standard_Real): Standard_Boolean;
  IsThin(tol: Standard_Real): Standard_Boolean;
  Transformed(T: gp_Trsf): Bnd_Box;
  Add_1(Other: Bnd_Box): void;
  Add_2(P: gp_Pnt): void;
  Add_3(P: gp_Pnt, D: gp_Dir): void;
  Add_4(D: gp_Dir): void;
  IsOut_1(P: gp_Pnt): Standard_Boolean;
  IsOut_2(L: gp_Lin): Standard_Boolean;
  IsOut_3(P: gp_Pln): Standard_Boolean;
  IsOut_4(Other: Bnd_Box): Standard_Boolean;
  IsOut_5(Other: Bnd_Box, T: gp_Trsf): Standard_Boolean;
  IsOut_6(T1: gp_Trsf, Other: Bnd_Box, T2: gp_Trsf): Standard_Boolean;
  IsOut_7(P1: gp_Pnt, P2: gp_Pnt, D: gp_Dir): Standard_Boolean;
  Distance(Other: Bnd_Box): Standard_Real;
  Dump(): void;
  SquareExtent(): Standard_Real;
  FinitePart(): Bnd_Box;
  HasFinitePart(): Standard_Boolean;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  InitFromJson(theSStream: Standard_SStream, theStreamPos: Standard_Integer): Standard_Boolean;
}

  export declare class Bnd_Box_1 extends Bnd_Box {
    constructor();
  }

  export declare class Bnd_Box_2 extends Bnd_Box {
    constructor(theMin: gp_Pnt, theMax: gp_Pnt);
  }

export declare class gp_Ax1 {
  SetDirection(V: gp_Dir): void;
  SetLocation(P: gp_Pnt): void;
  Direction(): gp_Dir;
  Location(): gp_Pnt;
  IsCoaxial(Other: gp_Ax1, AngularTolerance: Standard_Real, LinearTolerance: Standard_Real): Standard_Boolean;
  IsNormal(Other: gp_Ax1, AngularTolerance: Standard_Real): Standard_Boolean;
  IsOpposite(Other: gp_Ax1, AngularTolerance: Standard_Real): Standard_Boolean;
  IsParallel(Other: gp_Ax1, AngularTolerance: Standard_Real): Standard_Boolean;
  Angle(Other: gp_Ax1): Standard_Real;
  Reverse(): void;
  Reversed(): gp_Ax1;
  Mirror_1(P: gp_Pnt): void;
  Mirrored_1(P: gp_Pnt): gp_Ax1;
  Mirror_2(A1: gp_Ax1): void;
  Mirrored_2(A1: gp_Ax1): gp_Ax1;
  Mirror_3(A2: gp_Ax2): void;
  Mirrored_3(A2: gp_Ax2): gp_Ax1;
  Rotate(A1: gp_Ax1, Ang: Standard_Real): void;
  Rotated(A1: gp_Ax1, Ang: Standard_Real): gp_Ax1;
  Scale(P: gp_Pnt, S: Standard_Real): void;
  Scaled(P: gp_Pnt, S: Standard_Real): gp_Ax1;
  Transform(T: gp_Trsf): void;
  Transformed(T: gp_Trsf): gp_Ax1;
  Translate_1(V: gp_Vec): void;
  Translated_1(V: gp_Vec): gp_Ax1;
  Translate_2(P1: gp_Pnt, P2: gp_Pnt): void;
  Translated_2(P1: gp_Pnt, P2: gp_Pnt): gp_Ax1;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  InitFromJson(theSStream: Standard_SStream, theStreamPos: Standard_Integer): Standard_Boolean;
}

  export declare class gp_Ax1_1 extends gp_Ax1 {
    constructor();
  }

  export declare class gp_Ax1_2 extends gp_Ax1 {
    constructor(P: gp_Pnt, V: gp_Dir);
  }

export declare class gp_Ax2 {
  SetAxis(A1: gp_Ax1): void;
  SetDirection(V: gp_Dir): void;
  SetLocation(P: gp_Pnt): void;
  SetXDirection(Vx: gp_Dir): void;
  SetYDirection(Vy: gp_Dir): void;
  Angle(Other: gp_Ax2): Standard_Real;
  Axis(): gp_Ax1;
  Direction(): gp_Dir;
  Location(): gp_Pnt;
  XDirection(): gp_Dir;
  YDirection(): gp_Dir;
  IsCoplanar_1(Other: gp_Ax2, LinearTolerance: Standard_Real, AngularTolerance: Standard_Real): Standard_Boolean;
  IsCoplanar_2(A1: gp_Ax1, LinearTolerance: Standard_Real, AngularTolerance: Standard_Real): Standard_Boolean;
  Mirror_1(P: gp_Pnt): void;
  Mirrored_1(P: gp_Pnt): gp_Ax2;
  Mirror_2(A1: gp_Ax1): void;
  Mirrored_2(A1: gp_Ax1): gp_Ax2;
  Mirror_3(A2: gp_Ax2): void;
  Mirrored_3(A2: gp_Ax2): gp_Ax2;
  Rotate(A1: gp_Ax1, Ang: Standard_Real): void;
  Rotated(A1: gp_Ax1, Ang: Standard_Real): gp_Ax2;
  Scale(P: gp_Pnt, S: Standard_Real): void;
  Scaled(P: gp_Pnt, S: Standard_Real): gp_Ax2;
  Transform(T: gp_Trsf): void;
  Transformed(T: gp_Trsf): gp_Ax2;
  Translate_1(V: gp_Vec): void;
  Translated_1(V: gp_Vec): gp_Ax2;
  Translate_2(P1: gp_Pnt, P2: gp_Pnt): void;
  Translated_2(P1: gp_Pnt, P2: gp_Pnt): gp_Ax2;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  InitFromJson(theSStream: Standard_SStream, theStreamPos: Standard_Integer): Standard_Boolean;
}

  export declare class gp_Ax2_1 extends gp_Ax2 {
    constructor();
  }

  export declare class gp_Ax2_2 extends gp_Ax2 {
    constructor(P: gp_Pnt, N: gp_Dir, Vx: gp_Dir);
  }

  export declare class gp_Ax2_3 extends gp_Ax2 {
    constructor(P: gp_Pnt, V: gp_Dir);
  }

export declare class Precision {
  constructor();
  Angular(): Standard_Real;
  Confusion(): Standard_Real;
  SquareConfusion(): Standard_Real;
  Intersection(): Standard_Real;
  Approximation(): Standard_Real;
  Parametric_1(P: Standard_Real, T: Standard_Real): Standard_Real;
  PConfusion_1(T: Standard_Real): Standard_Real;
  SquarePConfusion(): Standard_Real;
  PIntersection_1(T: Standard_Real): Standard_Real;
  PApproximation_1(T: Standard_Real): Standard_Real;
  Parametric_2(P: Standard_Real): Standard_Real;
  PConfusion_2(): Standard_Real;
  PIntersection_2(): Standard_Real;
  PApproximation_2(): Standard_Real;
  IsInfinite(R: Standard_Real): Standard_Boolean;
  IsPositiveInfinite(R: Standard_Real): Standard_Boolean;
  IsNegativeInfinite(R: Standard_Real): Standard_Boolean;
  Infinite(): Standard_Real;
}

export declare class gp_Ax3 {
  XReverse(): void;
  YReverse(): void;
  ZReverse(): void;
  SetAxis(A1: gp_Ax1): void;
  SetDirection(V: gp_Dir): void;
  SetLocation(P: gp_Pnt): void;
  SetXDirection(Vx: gp_Dir): void;
  SetYDirection(Vy: gp_Dir): void;
  Angle(Other: gp_Ax3): Standard_Real;
  Axis(): gp_Ax1;
  Ax2(): gp_Ax2;
  Direction(): gp_Dir;
  Location(): gp_Pnt;
  XDirection(): gp_Dir;
  YDirection(): gp_Dir;
  Direct(): Standard_Boolean;
  IsCoplanar_1(Other: gp_Ax3, LinearTolerance: Standard_Real, AngularTolerance: Standard_Real): Standard_Boolean;
  IsCoplanar_2(A1: gp_Ax1, LinearTolerance: Standard_Real, AngularTolerance: Standard_Real): Standard_Boolean;
  Mirror_1(P: gp_Pnt): void;
  Mirrored_1(P: gp_Pnt): gp_Ax3;
  Mirror_2(A1: gp_Ax1): void;
  Mirrored_2(A1: gp_Ax1): gp_Ax3;
  Mirror_3(A2: gp_Ax2): void;
  Mirrored_3(A2: gp_Ax2): gp_Ax3;
  Rotate(A1: gp_Ax1, Ang: Standard_Real): void;
  Rotated(A1: gp_Ax1, Ang: Standard_Real): gp_Ax3;
  Scale(P: gp_Pnt, S: Standard_Real): void;
  Scaled(P: gp_Pnt, S: Standard_Real): gp_Ax3;
  Transform(T: gp_Trsf): void;
  Transformed(T: gp_Trsf): gp_Ax3;
  Translate_1(V: gp_Vec): void;
  Translated_1(V: gp_Vec): gp_Ax3;
  Translate_2(P1: gp_Pnt, P2: gp_Pnt): void;
  Translated_2(P1: gp_Pnt, P2: gp_Pnt): gp_Ax3;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  InitFromJson(theSStream: Standard_SStream, theStreamPos: Standard_Integer): Standard_Boolean;
}

  export declare class gp_Ax3_1 extends gp_Ax3 {
    constructor();
  }

  export declare class gp_Ax3_2 extends gp_Ax3 {
    constructor(A: gp_Ax2);
  }

  export declare class gp_Ax3_3 extends gp_Ax3 {
    constructor(P: gp_Pnt, N: gp_Dir, Vx: gp_Dir);
  }

  export declare class gp_Ax3_4 extends gp_Ax3 {
    constructor(P: gp_Pnt, V: gp_Dir);
  }

export declare class gp_Pln {
  Coefficients(A: Standard_Real, B: Standard_Real, C: Standard_Real, D: Standard_Real): void;
  SetAxis(A1: gp_Ax1): void;
  SetLocation(Loc: gp_Pnt): void;
  SetPosition(A3: gp_Ax3): void;
  UReverse(): void;
  VReverse(): void;
  Direct(): Standard_Boolean;
  Axis(): gp_Ax1;
  Location(): gp_Pnt;
  Position(): gp_Ax3;
  Distance_1(P: gp_Pnt): Standard_Real;
  Distance_2(L: gp_Lin): Standard_Real;
  Distance_3(Other: gp_Pln): Standard_Real;
  SquareDistance_1(P: gp_Pnt): Standard_Real;
  SquareDistance_2(L: gp_Lin): Standard_Real;
  SquareDistance_3(Other: gp_Pln): Standard_Real;
  XAxis(): gp_Ax1;
  YAxis(): gp_Ax1;
  Contains_1(P: gp_Pnt, LinearTolerance: Standard_Real): Standard_Boolean;
  Contains_2(L: gp_Lin, LinearTolerance: Standard_Real, AngularTolerance: Standard_Real): Standard_Boolean;
  Mirror_1(P: gp_Pnt): void;
  Mirrored_1(P: gp_Pnt): gp_Pln;
  Mirror_2(A1: gp_Ax1): void;
  Mirrored_2(A1: gp_Ax1): gp_Pln;
  Mirror_3(A2: gp_Ax2): void;
  Mirrored_3(A2: gp_Ax2): gp_Pln;
  Rotate(A1: gp_Ax1, Ang: Standard_Real): void;
  Rotated(A1: gp_Ax1, Ang: Standard_Real): gp_Pln;
  Scale(P: gp_Pnt, S: Standard_Real): void;
  Scaled(P: gp_Pnt, S: Standard_Real): gp_Pln;
  Transform(T: gp_Trsf): void;
  Transformed(T: gp_Trsf): gp_Pln;
  Translate_1(V: gp_Vec): void;
  Translated_1(V: gp_Vec): gp_Pln;
  Translate_2(P1: gp_Pnt, P2: gp_Pnt): void;
  Translated_2(P1: gp_Pnt, P2: gp_Pnt): gp_Pln;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

  export declare class gp_Pln_1 extends gp_Pln {
    constructor();
  }

  export declare class gp_Pln_2 extends gp_Pln {
    constructor(A3: gp_Ax3);
  }

  export declare class gp_Pln_3 extends gp_Pln {
    constructor(P: gp_Pnt, V: gp_Dir);
  }

  export declare class gp_Pln_4 extends gp_Pln {
    constructor(A: Standard_Real, B: Standard_Real, C: Standard_Real, D: Standard_Real);
  }

export declare class gp_Lin {
  Reverse(): void;
  Reversed(): gp_Lin;
  SetDirection(V: gp_Dir): void;
  SetLocation(P: gp_Pnt): void;
  SetPosition(A1: gp_Ax1): void;
  Direction(): gp_Dir;
  Location(): gp_Pnt;
  Position(): gp_Ax1;
  Angle(Other: gp_Lin): Standard_Real;
  Contains(P: gp_Pnt, LinearTolerance: Standard_Real): Standard_Boolean;
  Distance_1(P: gp_Pnt): Standard_Real;
  Distance_2(Other: gp_Lin): Standard_Real;
  SquareDistance_1(P: gp_Pnt): Standard_Real;
  SquareDistance_2(Other: gp_Lin): Standard_Real;
  Normal(P: gp_Pnt): gp_Lin;
  Mirror_1(P: gp_Pnt): void;
  Mirrored_1(P: gp_Pnt): gp_Lin;
  Mirror_2(A1: gp_Ax1): void;
  Mirrored_2(A1: gp_Ax1): gp_Lin;
  Mirror_3(A2: gp_Ax2): void;
  Mirrored_3(A2: gp_Ax2): gp_Lin;
  Rotate(A1: gp_Ax1, Ang: Standard_Real): void;
  Rotated(A1: gp_Ax1, Ang: Standard_Real): gp_Lin;
  Scale(P: gp_Pnt, S: Standard_Real): void;
  Scaled(P: gp_Pnt, S: Standard_Real): gp_Lin;
  Transform(T: gp_Trsf): void;
  Transformed(T: gp_Trsf): gp_Lin;
  Translate_1(V: gp_Vec): void;
  Translated_1(V: gp_Vec): gp_Lin;
  Translate_2(P1: gp_Pnt, P2: gp_Pnt): void;
  Translated_2(P1: gp_Pnt, P2: gp_Pnt): gp_Lin;
}

  export declare class gp_Lin_1 extends gp_Lin {
    constructor();
  }

  export declare class gp_Lin_2 extends gp_Lin {
    constructor(A1: gp_Ax1);
  }

  export declare class gp_Lin_3 extends gp_Lin {
    constructor(P: gp_Pnt, V: gp_Dir);
  }

export declare class TopLoc_Datum3D extends Standard_Transient {
  Transformation(): gp_Trsf;
  Trsf(): gp_Trsf;
  Form(): gp_TrsfForm;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  ShallowDump(S: Standard_OStream): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class TopLoc_Datum3D_1 extends TopLoc_Datum3D {
    constructor();
  }

  export declare class TopLoc_Datum3D_2 extends TopLoc_Datum3D {
    constructor(T: gp_Trsf);
  }

export declare class gp_GTrsf {
  SetAffinity_1(A1: gp_Ax1, Ratio: Standard_Real): void;
  SetAffinity_2(A2: gp_Ax2, Ratio: Standard_Real): void;
  SetValue(Row: Standard_Integer, Col: Standard_Integer, Value: Standard_Real): void;
  SetVectorialPart(Matrix: gp_Mat): void;
  SetTranslationPart(Coord: gp_XYZ): void;
  SetTrsf(T: gp_Trsf): void;
  IsNegative(): Standard_Boolean;
  IsSingular(): Standard_Boolean;
  Form(): gp_TrsfForm;
  SetForm(): void;
  TranslationPart(): gp_XYZ;
  VectorialPart(): gp_Mat;
  Value(Row: Standard_Integer, Col: Standard_Integer): Standard_Real;
  Invert(): void;
  Inverted(): gp_GTrsf;
  Multiplied(T: gp_GTrsf): gp_GTrsf;
  Multiply(T: gp_GTrsf): void;
  PreMultiply(T: gp_GTrsf): void;
  Power(N: Standard_Integer): void;
  Powered(N: Standard_Integer): gp_GTrsf;
  Transforms_1(Coord: gp_XYZ): void;
  Transforms_2(X: Standard_Real, Y: Standard_Real, Z: Standard_Real): void;
  Trsf(): gp_Trsf;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

  export declare class gp_GTrsf_1 extends gp_GTrsf {
    constructor();
  }

  export declare class gp_GTrsf_2 extends gp_GTrsf {
    constructor(T: gp_Trsf);
  }

  export declare class gp_GTrsf_3 extends gp_GTrsf {
    constructor(M: gp_Mat, V: gp_XYZ);
  }

export declare class Bnd_Range {
  Common(theOther: Bnd_Range): void;
  Union(theOther: Bnd_Range): Standard_Boolean;
  Split(theVal: Standard_Real, theList: NCollection_List<Bnd_Range>, thePeriod: Standard_Real): void;
  IsIntersected(theVal: Standard_Real, thePeriod: Standard_Real): Standard_Integer;
  Add_1(theParameter: Standard_Real): void;
  Add_2(theRange: Bnd_Range): void;
  GetMin(thePar: Standard_Real): Standard_Boolean;
  GetMax(thePar: Standard_Real): Standard_Boolean;
  GetBounds(theFirstPar: Standard_Real, theLastPar: Standard_Real): Standard_Boolean;
  GetIntermediatePoint(theLambda: Standard_Real, theParameter: Standard_Real): Standard_Boolean;
  Delta(): Standard_Real;
  IsVoid(): Standard_Boolean;
  SetVoid(): void;
  Enlarge(theDelta: Standard_Real): void;
  Shifted(theVal: Standard_Real): Bnd_Range;
  Shift(theVal: Standard_Real): void;
  TrimFrom(theValLower: Standard_Real): void;
  TrimTo(theValUpper: Standard_Real): void;
  IsOut_1(theValue: Standard_Real): Standard_Boolean;
  IsOut_2(theRange: Bnd_Range): Standard_Boolean;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

  export declare class Bnd_Range_1 extends Bnd_Range {
    constructor();
  }

  export declare class Bnd_Range_2 extends Bnd_Range {
    constructor(theMin: Standard_Real, theMax: Standard_Real);
  }

export declare class Poly_Triangle {
  Set_1(theN1: Standard_Integer, theN2: Standard_Integer, theN3: Standard_Integer): void;
  Set_2(theIndex: Standard_Integer, theNode: Standard_Integer): void;
  Get(theN1: Standard_Integer, theN2: Standard_Integer, theN3: Standard_Integer): void;
  Value(theIndex: Standard_Integer): Standard_Integer;
  ChangeValue(theIndex: Standard_Integer): Standard_Integer;
}

  export declare class Poly_Triangle_1 extends Poly_Triangle {
    constructor();
  }

  export declare class Poly_Triangle_2 extends Poly_Triangle {
    constructor(theN1: Standard_Integer, theN2: Standard_Integer, theN3: Standard_Integer);
  }

export declare class TopLoc_SListOfItemLocation {
  Assign(Other: TopLoc_SListOfItemLocation): TopLoc_SListOfItemLocation;
  IsEmpty(): Standard_Boolean;
  Clear(): void;
  Value(): TopLoc_ItemLocation;
  Tail(): TopLoc_SListOfItemLocation;
  Construct(anItem: TopLoc_ItemLocation): void;
  ToTail(): void;
  More(): Standard_Boolean;
  Next(): void;
}

  export declare class TopLoc_SListOfItemLocation_1 extends TopLoc_SListOfItemLocation {
    constructor();
  }

  export declare class TopLoc_SListOfItemLocation_2 extends TopLoc_SListOfItemLocation {
    constructor(anItem: TopLoc_ItemLocation, aTail: TopLoc_SListOfItemLocation);
  }

  export declare class TopLoc_SListOfItemLocation_3 extends TopLoc_SListOfItemLocation {
    constructor(Other: TopLoc_SListOfItemLocation);
  }

  export declare class TopLoc_SListOfItemLocation_4 extends TopLoc_SListOfItemLocation {
    constructor(theOther: TopLoc_SListOfItemLocation);
  }

export declare class TopLoc_Location {
  IsIdentity(): Standard_Boolean;
  Identity(): void;
  FirstDatum(): any;
  FirstPower(): Standard_Integer;
  NextLocation(): TopLoc_Location;
  Transformation(): gp_Trsf;
  Inverted(): TopLoc_Location;
  Multiplied(Other: TopLoc_Location): TopLoc_Location;
  Divided(Other: TopLoc_Location): TopLoc_Location;
  Predivided(Other: TopLoc_Location): TopLoc_Location;
  Powered(pwr: Standard_Integer): TopLoc_Location;
  HashCode(theUpperBound: Standard_Integer): Standard_Integer;
  IsEqual(Other: TopLoc_Location): Standard_Boolean;
  IsDifferent(Other: TopLoc_Location): Standard_Boolean;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  ShallowDump(S: Standard_OStream): void;
}

  export declare class TopLoc_Location_1 extends TopLoc_Location {
    constructor();
  }

  export declare class TopLoc_Location_2 extends TopLoc_Location {
    constructor(T: gp_Trsf);
  }

  export declare class TopLoc_Location_3 extends TopLoc_Location {
    constructor(D: any);
  }

export declare class TopLoc_ItemLocation {
  constructor(D: any, P: Standard_Integer)
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class BVH_TreeBaseTransient extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BVH_BuilderTransient extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  MaxTreeDepth(): Standard_Integer;
  LeafNodeSize(): Standard_Integer;
  IsParallel(): Standard_Boolean;
  SetParallel(isParallel: Standard_Boolean): void;
}

export declare class gp_Quaternion {
  IsEqual(theOther: gp_Quaternion): Standard_Boolean;
  SetRotation_1(theVecFrom: gp_Vec, theVecTo: gp_Vec): void;
  SetRotation_2(theVecFrom: gp_Vec, theVecTo: gp_Vec, theHelpCrossVec: gp_Vec): void;
  SetVectorAndAngle(theAxis: gp_Vec, theAngle: Standard_Real): void;
  GetVectorAndAngle(theAxis: gp_Vec, theAngle: Standard_Real): void;
  SetMatrix(theMat: gp_Mat): void;
  GetMatrix(): gp_Mat;
  SetEulerAngles(theOrder: gp_EulerSequence, theAlpha: Standard_Real, theBeta: Standard_Real, theGamma: Standard_Real): void;
  GetEulerAngles(theOrder: gp_EulerSequence, theAlpha: Standard_Real, theBeta: Standard_Real, theGamma: Standard_Real): void;
  Set_1(x: Standard_Real, y: Standard_Real, z: Standard_Real, w: Standard_Real): void;
  Set_2(theQuaternion: gp_Quaternion): void;
  X(): Standard_Real;
  Y(): Standard_Real;
  Z(): Standard_Real;
  W(): Standard_Real;
  SetIdent(): void;
  Reverse(): void;
  Reversed(): gp_Quaternion;
  Invert(): void;
  Inverted(): gp_Quaternion;
  SquareNorm(): Standard_Real;
  Norm(): Standard_Real;
  Scale(theScale: Standard_Real): void;
  Scaled(theScale: Standard_Real): gp_Quaternion;
  StabilizeLength(): void;
  Normalize(): void;
  Normalized(): gp_Quaternion;
  Negated(): gp_Quaternion;
  Added(theOther: gp_Quaternion): gp_Quaternion;
  Subtracted(theOther: gp_Quaternion): gp_Quaternion;
  Multiplied(theOther: gp_Quaternion): gp_Quaternion;
  Add(theOther: gp_Quaternion): void;
  Subtract(theOther: gp_Quaternion): void;
  Multiply_1(theOther: gp_Quaternion): void;
  Dot(theOther: gp_Quaternion): Standard_Real;
  GetRotationAngle(): Standard_Real;
  Multiply_2(theVec: gp_Vec): gp_Vec;
}

  export declare class gp_Quaternion_1 extends gp_Quaternion {
    constructor();
  }

  export declare class gp_Quaternion_2 extends gp_Quaternion {
    constructor(x: Standard_Real, y: Standard_Real, z: Standard_Real, w: Standard_Real);
  }

  export declare class gp_Quaternion_3 extends gp_Quaternion {
    constructor(theVecFrom: gp_Vec, theVecTo: gp_Vec);
  }

  export declare class gp_Quaternion_4 extends gp_Quaternion {
    constructor(theVecFrom: gp_Vec, theVecTo: gp_Vec, theHelpCrossVec: gp_Vec);
  }

  export declare class gp_Quaternion_5 extends gp_Quaternion {
    constructor(theAxis: gp_Vec, theAngle: Standard_Real);
  }

  export declare class gp_Quaternion_6 extends gp_Quaternion {
    constructor(theMat: gp_Mat);
  }

export declare class gp_QuaternionNLerp {
  Interpolate_1(theQStart: gp_Quaternion, theQEnd: gp_Quaternion, theT: Standard_Real): gp_Quaternion;
  Init(theQStart: gp_Quaternion, theQEnd: gp_Quaternion): void;
  InitFromUnit(theQStart: gp_Quaternion, theQEnd: gp_Quaternion): void;
  Interpolate_2(theT: Standard_Real, theResultQ: gp_Quaternion): void;
}

  export declare class gp_QuaternionNLerp_1 extends gp_QuaternionNLerp {
    constructor();
  }

  export declare class gp_QuaternionNLerp_2 extends gp_QuaternionNLerp {
    constructor(theQStart: gp_Quaternion, theQEnd: gp_Quaternion);
  }

export declare class gp_Circ {
  SetAxis(A1: gp_Ax1): void;
  SetLocation(P: gp_Pnt): void;
  SetPosition(A2: gp_Ax2): void;
  SetRadius(Radius: Standard_Real): void;
  Area(): Standard_Real;
  Axis(): gp_Ax1;
  Length(): Standard_Real;
  Location(): gp_Pnt;
  Position(): gp_Ax2;
  Radius(): Standard_Real;
  XAxis(): gp_Ax1;
  YAxis(): gp_Ax1;
  Distance(P: gp_Pnt): Standard_Real;
  SquareDistance(P: gp_Pnt): Standard_Real;
  Contains(P: gp_Pnt, LinearTolerance: Standard_Real): Standard_Boolean;
  Mirror_1(P: gp_Pnt): void;
  Mirrored_1(P: gp_Pnt): gp_Circ;
  Mirror_2(A1: gp_Ax1): void;
  Mirrored_2(A1: gp_Ax1): gp_Circ;
  Mirror_3(A2: gp_Ax2): void;
  Mirrored_3(A2: gp_Ax2): gp_Circ;
  Rotate(A1: gp_Ax1, Ang: Standard_Real): void;
  Rotated(A1: gp_Ax1, Ang: Standard_Real): gp_Circ;
  Scale(P: gp_Pnt, S: Standard_Real): void;
  Scaled(P: gp_Pnt, S: Standard_Real): gp_Circ;
  Transform(T: gp_Trsf): void;
  Transformed(T: gp_Trsf): gp_Circ;
  Translate_1(V: gp_Vec): void;
  Translated_1(V: gp_Vec): gp_Circ;
  Translate_2(P1: gp_Pnt, P2: gp_Pnt): void;
  Translated_2(P1: gp_Pnt, P2: gp_Pnt): gp_Circ;
}

  export declare class gp_Circ_1 extends gp_Circ {
    constructor();
  }

  export declare class gp_Circ_2 extends gp_Circ {
    constructor(A2: gp_Ax2, Radius: Standard_Real);
  }

export declare class gp_Elips {
  SetAxis(A1: gp_Ax1): void;
  SetLocation(P: gp_Pnt): void;
  SetMajorRadius(MajorRadius: Standard_Real): void;
  SetMinorRadius(MinorRadius: Standard_Real): void;
  SetPosition(A2: gp_Ax2): void;
  Area(): Standard_Real;
  Axis(): gp_Ax1;
  Directrix1(): gp_Ax1;
  Directrix2(): gp_Ax1;
  Eccentricity(): Standard_Real;
  Focal(): Standard_Real;
  Focus1(): gp_Pnt;
  Focus2(): gp_Pnt;
  Location(): gp_Pnt;
  MajorRadius(): Standard_Real;
  MinorRadius(): Standard_Real;
  Parameter(): Standard_Real;
  Position(): gp_Ax2;
  XAxis(): gp_Ax1;
  YAxis(): gp_Ax1;
  Mirror_1(P: gp_Pnt): void;
  Mirrored_1(P: gp_Pnt): gp_Elips;
  Mirror_2(A1: gp_Ax1): void;
  Mirrored_2(A1: gp_Ax1): gp_Elips;
  Mirror_3(A2: gp_Ax2): void;
  Mirrored_3(A2: gp_Ax2): gp_Elips;
  Rotate(A1: gp_Ax1, Ang: Standard_Real): void;
  Rotated(A1: gp_Ax1, Ang: Standard_Real): gp_Elips;
  Scale(P: gp_Pnt, S: Standard_Real): void;
  Scaled(P: gp_Pnt, S: Standard_Real): gp_Elips;
  Transform(T: gp_Trsf): void;
  Transformed(T: gp_Trsf): gp_Elips;
  Translate_1(V: gp_Vec): void;
  Translated_1(V: gp_Vec): gp_Elips;
  Translate_2(P1: gp_Pnt, P2: gp_Pnt): void;
  Translated_2(P1: gp_Pnt, P2: gp_Pnt): gp_Elips;
}

  export declare class gp_Elips_1 extends gp_Elips {
    constructor();
  }

  export declare class gp_Elips_2 extends gp_Elips {
    constructor(A2: gp_Ax2, MajorRadius: Standard_Real, MinorRadius: Standard_Real);
  }

export declare class Poly_Triangulation extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Copy(): any;
  Deflection_1(): Standard_Real;
  Deflection_2(theDeflection: Standard_Real): void;
  RemoveUVNodes(): void;
  NbNodes(): Standard_Integer;
  NbTriangles(): Standard_Integer;
  HasUVNodes(): Standard_Boolean;
  Nodes(): TColgp_Array1OfPnt;
  ChangeNodes(): TColgp_Array1OfPnt;
  Node(theIndex: Standard_Integer): gp_Pnt;
  ChangeNode(theIndex: Standard_Integer): gp_Pnt;
  UVNodes(): TColgp_Array1OfPnt2d;
  ChangeUVNodes(): TColgp_Array1OfPnt2d;
  UVNode(theIndex: Standard_Integer): gp_Pnt2d;
  ChangeUVNode(theIndex: Standard_Integer): gp_Pnt2d;
  Triangles(): Poly_Array1OfTriangle;
  ChangeTriangles(): Poly_Array1OfTriangle;
  Triangle(theIndex: Standard_Integer): Poly_Triangle;
  ChangeTriangle(theIndex: Standard_Integer): Poly_Triangle;
  SetNormals(theNormals: any): void;
  Normals(): TShort_Array1OfShortReal;
  ChangeNormals(): TShort_Array1OfShortReal;
  HasNormals(): Standard_Boolean;
  Normal(theIndex: Standard_Integer): gp_Dir;
  SetNormal(theIndex: Standard_Integer, theNormal: gp_Dir): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

  export declare class Poly_Triangulation_1 extends Poly_Triangulation {
    constructor(nbNodes: Standard_Integer, nbTriangles: Standard_Integer, UVNodes: Standard_Boolean);
  }

  export declare class Poly_Triangulation_2 extends Poly_Triangulation {
    constructor(Nodes: TColgp_Array1OfPnt, Triangles: Poly_Array1OfTriangle);
  }

  export declare class Poly_Triangulation_3 extends Poly_Triangulation {
    constructor(Nodes: TColgp_Array1OfPnt, UVNodes: TColgp_Array1OfPnt2d, Triangles: Poly_Array1OfTriangle);
  }

  export declare class Poly_Triangulation_4 extends Poly_Triangulation {
    constructor(theTriangulation: any);
  }

export declare class gp_Lin2d {
  Reverse(): void;
  Reversed(): gp_Lin2d;
  SetDirection(V: gp_Dir2d): void;
  SetLocation(P: gp_Pnt2d): void;
  SetPosition(A: gp_Ax2d): void;
  Coefficients(A: Standard_Real, B: Standard_Real, C: Standard_Real): void;
  Direction(): gp_Dir2d;
  Location(): gp_Pnt2d;
  Position(): gp_Ax2d;
  Angle(Other: gp_Lin2d): Standard_Real;
  Contains(P: gp_Pnt2d, LinearTolerance: Standard_Real): Standard_Boolean;
  Distance_1(P: gp_Pnt2d): Standard_Real;
  Distance_2(Other: gp_Lin2d): Standard_Real;
  SquareDistance_1(P: gp_Pnt2d): Standard_Real;
  SquareDistance_2(Other: gp_Lin2d): Standard_Real;
  Normal(P: gp_Pnt2d): gp_Lin2d;
  Mirror_1(P: gp_Pnt2d): void;
  Mirrored_1(P: gp_Pnt2d): gp_Lin2d;
  Mirror_2(A: gp_Ax2d): void;
  Mirrored_2(A: gp_Ax2d): gp_Lin2d;
  Rotate(P: gp_Pnt2d, Ang: Standard_Real): void;
  Rotated(P: gp_Pnt2d, Ang: Standard_Real): gp_Lin2d;
  Scale(P: gp_Pnt2d, S: Standard_Real): void;
  Scaled(P: gp_Pnt2d, S: Standard_Real): gp_Lin2d;
  Transform(T: gp_Trsf2d): void;
  Transformed(T: gp_Trsf2d): gp_Lin2d;
  Translate_1(V: gp_Vec2d): void;
  Translated_1(V: gp_Vec2d): gp_Lin2d;
  Translate_2(P1: gp_Pnt2d, P2: gp_Pnt2d): void;
  Translated_2(P1: gp_Pnt2d, P2: gp_Pnt2d): gp_Lin2d;
}

  export declare class gp_Lin2d_1 extends gp_Lin2d {
    constructor();
  }

  export declare class gp_Lin2d_2 extends gp_Lin2d {
    constructor(A: gp_Ax2d);
  }

  export declare class gp_Lin2d_3 extends gp_Lin2d {
    constructor(P: gp_Pnt2d, V: gp_Dir2d);
  }

  export declare class gp_Lin2d_4 extends gp_Lin2d {
    constructor(A: Standard_Real, B: Standard_Real, C: Standard_Real);
  }

export declare class gp_Ax22d {
  SetAxis(A1: gp_Ax22d): void;
  SetXAxis(A1: gp_Ax2d): void;
  SetYAxis(A1: gp_Ax2d): void;
  SetLocation(P: gp_Pnt2d): void;
  SetXDirection(Vx: gp_Dir2d): void;
  SetYDirection(Vy: gp_Dir2d): void;
  XAxis(): gp_Ax2d;
  YAxis(): gp_Ax2d;
  Location(): gp_Pnt2d;
  XDirection(): gp_Dir2d;
  YDirection(): gp_Dir2d;
  Mirror_1(P: gp_Pnt2d): void;
  Mirrored_1(P: gp_Pnt2d): gp_Ax22d;
  Mirror_2(A: gp_Ax2d): void;
  Mirrored_2(A: gp_Ax2d): gp_Ax22d;
  Rotate(P: gp_Pnt2d, Ang: Standard_Real): void;
  Rotated(P: gp_Pnt2d, Ang: Standard_Real): gp_Ax22d;
  Scale(P: gp_Pnt2d, S: Standard_Real): void;
  Scaled(P: gp_Pnt2d, S: Standard_Real): gp_Ax22d;
  Transform(T: gp_Trsf2d): void;
  Transformed(T: gp_Trsf2d): gp_Ax22d;
  Translate_1(V: gp_Vec2d): void;
  Translated_1(V: gp_Vec2d): gp_Ax22d;
  Translate_2(P1: gp_Pnt2d, P2: gp_Pnt2d): void;
  Translated_2(P1: gp_Pnt2d, P2: gp_Pnt2d): gp_Ax22d;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

  export declare class gp_Ax22d_1 extends gp_Ax22d {
    constructor();
  }

  export declare class gp_Ax22d_2 extends gp_Ax22d {
    constructor(P: gp_Pnt2d, Vx: gp_Dir2d, Vy: gp_Dir2d);
  }

  export declare class gp_Ax22d_3 extends gp_Ax22d {
    constructor(P: gp_Pnt2d, V: gp_Dir2d, Sense: Standard_Boolean);
  }

  export declare class gp_Ax22d_4 extends gp_Ax22d {
    constructor(A: gp_Ax2d, Sense: Standard_Boolean);
  }

export declare class gp_Circ2d {
  SetLocation(P: gp_Pnt2d): void;
  SetXAxis(A: gp_Ax2d): void;
  SetAxis(A: gp_Ax22d): void;
  SetYAxis(A: gp_Ax2d): void;
  SetRadius(Radius: Standard_Real): void;
  Area(): Standard_Real;
  Coefficients(A: Standard_Real, B: Standard_Real, C: Standard_Real, D: Standard_Real, E: Standard_Real, F: Standard_Real): void;
  Contains(P: gp_Pnt2d, LinearTolerance: Standard_Real): Standard_Boolean;
  Distance(P: gp_Pnt2d): Standard_Real;
  SquareDistance(P: gp_Pnt2d): Standard_Real;
  Length(): Standard_Real;
  Location(): gp_Pnt2d;
  Radius(): Standard_Real;
  Axis(): gp_Ax22d;
  Position(): gp_Ax22d;
  XAxis(): gp_Ax2d;
  YAxis(): gp_Ax2d;
  Reverse(): void;
  Reversed(): gp_Circ2d;
  IsDirect(): Standard_Boolean;
  Mirror_1(P: gp_Pnt2d): void;
  Mirrored_1(P: gp_Pnt2d): gp_Circ2d;
  Mirror_2(A: gp_Ax2d): void;
  Mirrored_2(A: gp_Ax2d): gp_Circ2d;
  Rotate(P: gp_Pnt2d, Ang: Standard_Real): void;
  Rotated(P: gp_Pnt2d, Ang: Standard_Real): gp_Circ2d;
  Scale(P: gp_Pnt2d, S: Standard_Real): void;
  Scaled(P: gp_Pnt2d, S: Standard_Real): gp_Circ2d;
  Transform(T: gp_Trsf2d): void;
  Transformed(T: gp_Trsf2d): gp_Circ2d;
  Translate_1(V: gp_Vec2d): void;
  Translated_1(V: gp_Vec2d): gp_Circ2d;
  Translate_2(P1: gp_Pnt2d, P2: gp_Pnt2d): void;
  Translated_2(P1: gp_Pnt2d, P2: gp_Pnt2d): gp_Circ2d;
}

  export declare class gp_Circ2d_1 extends gp_Circ2d {
    constructor();
  }

  export declare class gp_Circ2d_2 extends gp_Circ2d {
    constructor(XAxis: gp_Ax2d, Radius: Standard_Real, Sense: Standard_Boolean);
  }

  export declare class gp_Circ2d_3 extends gp_Circ2d {
    constructor(Axis: gp_Ax22d, Radius: Standard_Real);
  }

export declare class gp_Elips2d {
  SetLocation(P: gp_Pnt2d): void;
  SetMajorRadius(MajorRadius: Standard_Real): void;
  SetMinorRadius(MinorRadius: Standard_Real): void;
  SetAxis(A: gp_Ax22d): void;
  SetXAxis(A: gp_Ax2d): void;
  SetYAxis(A: gp_Ax2d): void;
  Area(): Standard_Real;
  Coefficients(A: Standard_Real, B: Standard_Real, C: Standard_Real, D: Standard_Real, E: Standard_Real, F: Standard_Real): void;
  Directrix1(): gp_Ax2d;
  Directrix2(): gp_Ax2d;
  Eccentricity(): Standard_Real;
  Focal(): Standard_Real;
  Focus1(): gp_Pnt2d;
  Focus2(): gp_Pnt2d;
  Location(): gp_Pnt2d;
  MajorRadius(): Standard_Real;
  MinorRadius(): Standard_Real;
  Parameter(): Standard_Real;
  Axis(): gp_Ax22d;
  XAxis(): gp_Ax2d;
  YAxis(): gp_Ax2d;
  Reverse(): void;
  Reversed(): gp_Elips2d;
  IsDirect(): Standard_Boolean;
  Mirror_1(P: gp_Pnt2d): void;
  Mirrored_1(P: gp_Pnt2d): gp_Elips2d;
  Mirror_2(A: gp_Ax2d): void;
  Mirrored_2(A: gp_Ax2d): gp_Elips2d;
  Rotate(P: gp_Pnt2d, Ang: Standard_Real): void;
  Rotated(P: gp_Pnt2d, Ang: Standard_Real): gp_Elips2d;
  Scale(P: gp_Pnt2d, S: Standard_Real): void;
  Scaled(P: gp_Pnt2d, S: Standard_Real): gp_Elips2d;
  Transform(T: gp_Trsf2d): void;
  Transformed(T: gp_Trsf2d): gp_Elips2d;
  Translate_1(V: gp_Vec2d): void;
  Translated_1(V: gp_Vec2d): gp_Elips2d;
  Translate_2(P1: gp_Pnt2d, P2: gp_Pnt2d): void;
  Translated_2(P1: gp_Pnt2d, P2: gp_Pnt2d): gp_Elips2d;
}

  export declare class gp_Elips2d_1 extends gp_Elips2d {
    constructor();
  }

  export declare class gp_Elips2d_2 extends gp_Elips2d {
    constructor(MajorAxis: gp_Ax2d, MajorRadius: Standard_Real, MinorRadius: Standard_Real, Sense: Standard_Boolean);
  }

  export declare class gp_Elips2d_3 extends gp_Elips2d {
    constructor(A: gp_Ax22d, MajorRadius: Standard_Real, MinorRadius: Standard_Real);
  }

export declare class gp_Hypr2d {
  SetLocation(P: gp_Pnt2d): void;
  SetMajorRadius(MajorRadius: Standard_Real): void;
  SetMinorRadius(MinorRadius: Standard_Real): void;
  SetAxis(A: gp_Ax22d): void;
  SetXAxis(A: gp_Ax2d): void;
  SetYAxis(A: gp_Ax2d): void;
  Asymptote1(): gp_Ax2d;
  Asymptote2(): gp_Ax2d;
  Coefficients(A: Standard_Real, B: Standard_Real, C: Standard_Real, D: Standard_Real, E: Standard_Real, F: Standard_Real): void;
  ConjugateBranch1(): gp_Hypr2d;
  ConjugateBranch2(): gp_Hypr2d;
  Directrix1(): gp_Ax2d;
  Directrix2(): gp_Ax2d;
  Eccentricity(): Standard_Real;
  Focal(): Standard_Real;
  Focus1(): gp_Pnt2d;
  Focus2(): gp_Pnt2d;
  Location(): gp_Pnt2d;
  MajorRadius(): Standard_Real;
  MinorRadius(): Standard_Real;
  OtherBranch(): gp_Hypr2d;
  Parameter(): Standard_Real;
  Axis(): gp_Ax22d;
  XAxis(): gp_Ax2d;
  YAxis(): gp_Ax2d;
  Reverse(): void;
  Reversed(): gp_Hypr2d;
  IsDirect(): Standard_Boolean;
  Mirror_1(P: gp_Pnt2d): void;
  Mirrored_1(P: gp_Pnt2d): gp_Hypr2d;
  Mirror_2(A: gp_Ax2d): void;
  Mirrored_2(A: gp_Ax2d): gp_Hypr2d;
  Rotate(P: gp_Pnt2d, Ang: Standard_Real): void;
  Rotated(P: gp_Pnt2d, Ang: Standard_Real): gp_Hypr2d;
  Scale(P: gp_Pnt2d, S: Standard_Real): void;
  Scaled(P: gp_Pnt2d, S: Standard_Real): gp_Hypr2d;
  Transform(T: gp_Trsf2d): void;
  Transformed(T: gp_Trsf2d): gp_Hypr2d;
  Translate_1(V: gp_Vec2d): void;
  Translated_1(V: gp_Vec2d): gp_Hypr2d;
  Translate_2(P1: gp_Pnt2d, P2: gp_Pnt2d): void;
  Translated_2(P1: gp_Pnt2d, P2: gp_Pnt2d): gp_Hypr2d;
}

  export declare class gp_Hypr2d_1 extends gp_Hypr2d {
    constructor();
  }

  export declare class gp_Hypr2d_2 extends gp_Hypr2d {
    constructor(MajorAxis: gp_Ax2d, MajorRadius: Standard_Real, MinorRadius: Standard_Real, Sense: Standard_Boolean);
  }

  export declare class gp_Hypr2d_3 extends gp_Hypr2d {
    constructor(A: gp_Ax22d, MajorRadius: Standard_Real, MinorRadius: Standard_Real);
  }

export declare class gp_Parab2d {
  SetFocal(Focal: Standard_Real): void;
  SetLocation(P: gp_Pnt2d): void;
  SetMirrorAxis(A: gp_Ax2d): void;
  SetAxis(A: gp_Ax22d): void;
  Coefficients(A: Standard_Real, B: Standard_Real, C: Standard_Real, D: Standard_Real, E: Standard_Real, F: Standard_Real): void;
  Directrix(): gp_Ax2d;
  Focal(): Standard_Real;
  Focus(): gp_Pnt2d;
  Location(): gp_Pnt2d;
  MirrorAxis(): gp_Ax2d;
  Axis(): gp_Ax22d;
  Parameter(): Standard_Real;
  Reverse(): void;
  Reversed(): gp_Parab2d;
  IsDirect(): Standard_Boolean;
  Mirror_1(P: gp_Pnt2d): void;
  Mirrored_1(P: gp_Pnt2d): gp_Parab2d;
  Mirror_2(A: gp_Ax2d): void;
  Mirrored_2(A: gp_Ax2d): gp_Parab2d;
  Rotate(P: gp_Pnt2d, Ang: Standard_Real): void;
  Rotated(P: gp_Pnt2d, Ang: Standard_Real): gp_Parab2d;
  Scale(P: gp_Pnt2d, S: Standard_Real): void;
  Scaled(P: gp_Pnt2d, S: Standard_Real): gp_Parab2d;
  Transform(T: gp_Trsf2d): void;
  Transformed(T: gp_Trsf2d): gp_Parab2d;
  Translate_1(V: gp_Vec2d): void;
  Translated_1(V: gp_Vec2d): gp_Parab2d;
  Translate_2(P1: gp_Pnt2d, P2: gp_Pnt2d): void;
  Translated_2(P1: gp_Pnt2d, P2: gp_Pnt2d): gp_Parab2d;
}

  export declare class gp_Parab2d_1 extends gp_Parab2d {
    constructor();
  }

  export declare class gp_Parab2d_2 extends gp_Parab2d {
    constructor(theMirrorAxis: gp_Ax2d, theFocalLength: Standard_Real, theSense: Standard_Boolean);
  }

  export declare class gp_Parab2d_3 extends gp_Parab2d {
    constructor(theAxes: gp_Ax22d, theFocalLength: Standard_Real);
  }

  export declare class gp_Parab2d_4 extends gp_Parab2d {
    constructor(theDirectrix: gp_Ax2d, theFocus: gp_Pnt2d, theSense: Standard_Boolean);
  }

export declare class BSplCLib_EvaluatorFunction {
  Evaluate(theDerivativeRequest: Standard_Integer, theStartEnd: Standard_Real, theParameter: Standard_Real, theResult: Standard_Real, theErrorCode: Standard_Integer): void;
}

export declare class PLib {
  constructor();
  NoWeights(): TColStd_Array1OfReal;
  NoWeights2(): TColStd_Array2OfReal;
  SetPoles_1(Poles: TColgp_Array1OfPnt, FP: TColStd_Array1OfReal): void;
  SetPoles_2(Poles: TColgp_Array1OfPnt, Weights: TColStd_Array1OfReal, FP: TColStd_Array1OfReal): void;
  GetPoles_1(FP: TColStd_Array1OfReal, Poles: TColgp_Array1OfPnt): void;
  GetPoles_2(FP: TColStd_Array1OfReal, Poles: TColgp_Array1OfPnt, Weights: TColStd_Array1OfReal): void;
  SetPoles_3(Poles: TColgp_Array1OfPnt2d, FP: TColStd_Array1OfReal): void;
  SetPoles_4(Poles: TColgp_Array1OfPnt2d, Weights: TColStd_Array1OfReal, FP: TColStd_Array1OfReal): void;
  GetPoles_3(FP: TColStd_Array1OfReal, Poles: TColgp_Array1OfPnt2d): void;
  GetPoles_4(FP: TColStd_Array1OfReal, Poles: TColgp_Array1OfPnt2d, Weights: TColStd_Array1OfReal): void;
  Bin(N: Standard_Integer, P: Standard_Integer): Standard_Real;
  RationalDerivative(Degree: Standard_Integer, N: Standard_Integer, Dimension: Standard_Integer, Ders: Standard_Real, RDers: Standard_Real, All: Standard_Boolean): void;
  RationalDerivatives(DerivativesRequest: Standard_Integer, Dimension: Standard_Integer, PolesDerivatives: Standard_Real, WeightsDerivatives: Standard_Real, RationalDerivates: Standard_Real): void;
  EvalPolynomial(U: Standard_Real, DerivativeOrder: Standard_Integer, Degree: Standard_Integer, Dimension: Standard_Integer, PolynomialCoeff: Standard_Real, Results: Standard_Real): void;
  NoDerivativeEvalPolynomial(U: Standard_Real, Degree: Standard_Integer, Dimension: Standard_Integer, DegreeDimension: Standard_Integer, PolynomialCoeff: Standard_Real, Results: Standard_Real): void;
  EvalPoly2Var(U: Standard_Real, V: Standard_Real, UDerivativeOrder: Standard_Integer, VDerivativeOrder: Standard_Integer, UDegree: Standard_Integer, VDegree: Standard_Integer, Dimension: Standard_Integer, PolynomialCoeff: Standard_Real, Results: Standard_Real): void;
  EvalLagrange(U: Standard_Real, DerivativeOrder: Standard_Integer, Degree: Standard_Integer, Dimension: Standard_Integer, ValueArray: Standard_Real, ParameterArray: Standard_Real, Results: Standard_Real): Standard_Integer;
  EvalCubicHermite(U: Standard_Real, DerivativeOrder: Standard_Integer, Dimension: Standard_Integer, ValueArray: Standard_Real, DerivativeArray: Standard_Real, ParameterArray: Standard_Real, Results: Standard_Real): Standard_Integer;
  HermiteCoefficients(FirstParameter: Standard_Real, LastParameter: Standard_Real, FirstOrder: Standard_Integer, LastOrder: Standard_Integer, MatrixCoefs: math_Matrix): Standard_Boolean;
  CoefficientsPoles_1(Coefs: TColgp_Array1OfPnt, WCoefs: TColStd_Array1OfReal, Poles: TColgp_Array1OfPnt, WPoles: TColStd_Array1OfReal): void;
  CoefficientsPoles_2(Coefs: TColgp_Array1OfPnt2d, WCoefs: TColStd_Array1OfReal, Poles: TColgp_Array1OfPnt2d, WPoles: TColStd_Array1OfReal): void;
  CoefficientsPoles_3(Coefs: TColStd_Array1OfReal, WCoefs: TColStd_Array1OfReal, Poles: TColStd_Array1OfReal, WPoles: TColStd_Array1OfReal): void;
  CoefficientsPoles_4(dim: Standard_Integer, Coefs: TColStd_Array1OfReal, WCoefs: TColStd_Array1OfReal, Poles: TColStd_Array1OfReal, WPoles: TColStd_Array1OfReal): void;
  Trimming_1(U1: Standard_Real, U2: Standard_Real, Coeffs: TColgp_Array1OfPnt, WCoeffs: TColStd_Array1OfReal): void;
  Trimming_2(U1: Standard_Real, U2: Standard_Real, Coeffs: TColgp_Array1OfPnt2d, WCoeffs: TColStd_Array1OfReal): void;
  Trimming_3(U1: Standard_Real, U2: Standard_Real, Coeffs: TColStd_Array1OfReal, WCoeffs: TColStd_Array1OfReal): void;
  Trimming_4(U1: Standard_Real, U2: Standard_Real, dim: Standard_Integer, Coeffs: TColStd_Array1OfReal, WCoeffs: TColStd_Array1OfReal): void;
  CoefficientsPoles_5(Coefs: TColgp_Array2OfPnt, WCoefs: TColStd_Array2OfReal, Poles: TColgp_Array2OfPnt, WPoles: TColStd_Array2OfReal): void;
  UTrimming(U1: Standard_Real, U2: Standard_Real, Coeffs: TColgp_Array2OfPnt, WCoeffs: TColStd_Array2OfReal): void;
  VTrimming(V1: Standard_Real, V2: Standard_Real, Coeffs: TColgp_Array2OfPnt, WCoeffs: TColStd_Array2OfReal): void;
  HermiteInterpolate(Dimension: Standard_Integer, FirstParameter: Standard_Real, LastParameter: Standard_Real, FirstOrder: Standard_Integer, LastOrder: Standard_Integer, FirstConstr: TColStd_Array2OfReal, LastConstr: TColStd_Array2OfReal, Coefficients: TColStd_Array1OfReal): Standard_Boolean;
  JacobiParameters(ConstraintOrder: GeomAbs_Shape, MaxDegree: Standard_Integer, Code: Standard_Integer, NbGaussPoints: Standard_Integer, WorkDegree: Standard_Integer): void;
  NivConstr(ConstraintOrder: GeomAbs_Shape): Standard_Integer;
  ConstraintOrder(NivConstr: Standard_Integer): GeomAbs_Shape;
  EvalLength_1(Degree: Standard_Integer, Dimension: Standard_Integer, PolynomialCoeff: Standard_Real, U1: Standard_Real, U2: Standard_Real, Length: Standard_Real): void;
  EvalLength_2(Degree: Standard_Integer, Dimension: Standard_Integer, PolynomialCoeff: Standard_Real, U1: Standard_Real, U2: Standard_Real, Tol: Standard_Real, Length: Standard_Real, Error: Standard_Real): void;
}

export declare class gp_Hypr {
  SetAxis(A1: gp_Ax1): void;
  SetLocation(P: gp_Pnt): void;
  SetMajorRadius(MajorRadius: Standard_Real): void;
  SetMinorRadius(MinorRadius: Standard_Real): void;
  SetPosition(A2: gp_Ax2): void;
  Asymptote1(): gp_Ax1;
  Asymptote2(): gp_Ax1;
  Axis(): gp_Ax1;
  ConjugateBranch1(): gp_Hypr;
  ConjugateBranch2(): gp_Hypr;
  Directrix1(): gp_Ax1;
  Directrix2(): gp_Ax1;
  Eccentricity(): Standard_Real;
  Focal(): Standard_Real;
  Focus1(): gp_Pnt;
  Focus2(): gp_Pnt;
  Location(): gp_Pnt;
  MajorRadius(): Standard_Real;
  MinorRadius(): Standard_Real;
  OtherBranch(): gp_Hypr;
  Parameter(): Standard_Real;
  Position(): gp_Ax2;
  XAxis(): gp_Ax1;
  YAxis(): gp_Ax1;
  Mirror_1(P: gp_Pnt): void;
  Mirrored_1(P: gp_Pnt): gp_Hypr;
  Mirror_2(A1: gp_Ax1): void;
  Mirrored_2(A1: gp_Ax1): gp_Hypr;
  Mirror_3(A2: gp_Ax2): void;
  Mirrored_3(A2: gp_Ax2): gp_Hypr;
  Rotate(A1: gp_Ax1, Ang: Standard_Real): void;
  Rotated(A1: gp_Ax1, Ang: Standard_Real): gp_Hypr;
  Scale(P: gp_Pnt, S: Standard_Real): void;
  Scaled(P: gp_Pnt, S: Standard_Real): gp_Hypr;
  Transform(T: gp_Trsf): void;
  Transformed(T: gp_Trsf): gp_Hypr;
  Translate_1(V: gp_Vec): void;
  Translated_1(V: gp_Vec): gp_Hypr;
  Translate_2(P1: gp_Pnt, P2: gp_Pnt): void;
  Translated_2(P1: gp_Pnt, P2: gp_Pnt): gp_Hypr;
}

  export declare class gp_Hypr_1 extends gp_Hypr {
    constructor();
  }

  export declare class gp_Hypr_2 extends gp_Hypr {
    constructor(A2: gp_Ax2, MajorRadius: Standard_Real, MinorRadius: Standard_Real);
  }

export declare class gp_Parab {
  SetAxis(A1: gp_Ax1): void;
  SetFocal(Focal: Standard_Real): void;
  SetLocation(P: gp_Pnt): void;
  SetPosition(A2: gp_Ax2): void;
  Axis(): gp_Ax1;
  Directrix(): gp_Ax1;
  Focal(): Standard_Real;
  Focus(): gp_Pnt;
  Location(): gp_Pnt;
  Parameter(): Standard_Real;
  Position(): gp_Ax2;
  XAxis(): gp_Ax1;
  YAxis(): gp_Ax1;
  Mirror_1(P: gp_Pnt): void;
  Mirrored_1(P: gp_Pnt): gp_Parab;
  Mirror_2(A1: gp_Ax1): void;
  Mirrored_2(A1: gp_Ax1): gp_Parab;
  Mirror_3(A2: gp_Ax2): void;
  Mirrored_3(A2: gp_Ax2): gp_Parab;
  Rotate(A1: gp_Ax1, Ang: Standard_Real): void;
  Rotated(A1: gp_Ax1, Ang: Standard_Real): gp_Parab;
  Scale(P: gp_Pnt, S: Standard_Real): void;
  Scaled(P: gp_Pnt, S: Standard_Real): gp_Parab;
  Transform(T: gp_Trsf): void;
  Transformed(T: gp_Trsf): gp_Parab;
  Translate_1(V: gp_Vec): void;
  Translated_1(V: gp_Vec): gp_Parab;
  Translate_2(P1: gp_Pnt, P2: gp_Pnt): void;
  Translated_2(P1: gp_Pnt, P2: gp_Pnt): gp_Parab;
}

  export declare class gp_Parab_1 extends gp_Parab {
    constructor();
  }

  export declare class gp_Parab_2 extends gp_Parab {
    constructor(A2: gp_Ax2, Focal: Standard_Real);
  }

  export declare class gp_Parab_3 extends gp_Parab {
    constructor(D: gp_Ax1, F: gp_Pnt);
  }

export declare class gp_Cylinder {
  SetAxis(A1: gp_Ax1): void;
  SetLocation(Loc: gp_Pnt): void;
  SetPosition(A3: gp_Ax3): void;
  SetRadius(R: Standard_Real): void;
  UReverse(): void;
  VReverse(): void;
  Direct(): Standard_Boolean;
  Axis(): gp_Ax1;
  Coefficients(A1: Standard_Real, A2: Standard_Real, A3: Standard_Real, B1: Standard_Real, B2: Standard_Real, B3: Standard_Real, C1: Standard_Real, C2: Standard_Real, C3: Standard_Real, D: Standard_Real): void;
  Location(): gp_Pnt;
  Position(): gp_Ax3;
  Radius(): Standard_Real;
  XAxis(): gp_Ax1;
  YAxis(): gp_Ax1;
  Mirror_1(P: gp_Pnt): void;
  Mirrored_1(P: gp_Pnt): gp_Cylinder;
  Mirror_2(A1: gp_Ax1): void;
  Mirrored_2(A1: gp_Ax1): gp_Cylinder;
  Mirror_3(A2: gp_Ax2): void;
  Mirrored_3(A2: gp_Ax2): gp_Cylinder;
  Rotate(A1: gp_Ax1, Ang: Standard_Real): void;
  Rotated(A1: gp_Ax1, Ang: Standard_Real): gp_Cylinder;
  Scale(P: gp_Pnt, S: Standard_Real): void;
  Scaled(P: gp_Pnt, S: Standard_Real): gp_Cylinder;
  Transform(T: gp_Trsf): void;
  Transformed(T: gp_Trsf): gp_Cylinder;
  Translate_1(V: gp_Vec): void;
  Translated_1(V: gp_Vec): gp_Cylinder;
  Translate_2(P1: gp_Pnt, P2: gp_Pnt): void;
  Translated_2(P1: gp_Pnt, P2: gp_Pnt): gp_Cylinder;
}

  export declare class gp_Cylinder_1 extends gp_Cylinder {
    constructor();
  }

  export declare class gp_Cylinder_2 extends gp_Cylinder {
    constructor(A3: gp_Ax3, Radius: Standard_Real);
  }

export declare class gp_Cone {
  SetAxis(A1: gp_Ax1): void;
  SetLocation(Loc: gp_Pnt): void;
  SetPosition(A3: gp_Ax3): void;
  SetRadius(R: Standard_Real): void;
  SetSemiAngle(Ang: Standard_Real): void;
  Apex(): gp_Pnt;
  UReverse(): void;
  VReverse(): void;
  Direct(): Standard_Boolean;
  Axis(): gp_Ax1;
  Coefficients(A1: Standard_Real, A2: Standard_Real, A3: Standard_Real, B1: Standard_Real, B2: Standard_Real, B3: Standard_Real, C1: Standard_Real, C2: Standard_Real, C3: Standard_Real, D: Standard_Real): void;
  Location(): gp_Pnt;
  Position(): gp_Ax3;
  RefRadius(): Standard_Real;
  SemiAngle(): Standard_Real;
  XAxis(): gp_Ax1;
  YAxis(): gp_Ax1;
  Mirror_1(P: gp_Pnt): void;
  Mirrored_1(P: gp_Pnt): gp_Cone;
  Mirror_2(A1: gp_Ax1): void;
  Mirrored_2(A1: gp_Ax1): gp_Cone;
  Mirror_3(A2: gp_Ax2): void;
  Mirrored_3(A2: gp_Ax2): gp_Cone;
  Rotate(A1: gp_Ax1, Ang: Standard_Real): void;
  Rotated(A1: gp_Ax1, Ang: Standard_Real): gp_Cone;
  Scale(P: gp_Pnt, S: Standard_Real): void;
  Scaled(P: gp_Pnt, S: Standard_Real): gp_Cone;
  Transform(T: gp_Trsf): void;
  Transformed(T: gp_Trsf): gp_Cone;
  Translate_1(V: gp_Vec): void;
  Translated_1(V: gp_Vec): gp_Cone;
  Translate_2(P1: gp_Pnt, P2: gp_Pnt): void;
  Translated_2(P1: gp_Pnt, P2: gp_Pnt): gp_Cone;
}

  export declare class gp_Cone_1 extends gp_Cone {
    constructor();
  }

  export declare class gp_Cone_2 extends gp_Cone {
    constructor(A3: gp_Ax3, Ang: Standard_Real, Radius: Standard_Real);
  }

export declare class gp_Sphere {
  SetLocation(Loc: gp_Pnt): void;
  SetPosition(A3: gp_Ax3): void;
  SetRadius(R: Standard_Real): void;
  Area(): Standard_Real;
  Coefficients(A1: Standard_Real, A2: Standard_Real, A3: Standard_Real, B1: Standard_Real, B2: Standard_Real, B3: Standard_Real, C1: Standard_Real, C2: Standard_Real, C3: Standard_Real, D: Standard_Real): void;
  UReverse(): void;
  VReverse(): void;
  Direct(): Standard_Boolean;
  Location(): gp_Pnt;
  Position(): gp_Ax3;
  Radius(): Standard_Real;
  Volume(): Standard_Real;
  XAxis(): gp_Ax1;
  YAxis(): gp_Ax1;
  Mirror_1(P: gp_Pnt): void;
  Mirrored_1(P: gp_Pnt): gp_Sphere;
  Mirror_2(A1: gp_Ax1): void;
  Mirrored_2(A1: gp_Ax1): gp_Sphere;
  Mirror_3(A2: gp_Ax2): void;
  Mirrored_3(A2: gp_Ax2): gp_Sphere;
  Rotate(A1: gp_Ax1, Ang: Standard_Real): void;
  Rotated(A1: gp_Ax1, Ang: Standard_Real): gp_Sphere;
  Scale(P: gp_Pnt, S: Standard_Real): void;
  Scaled(P: gp_Pnt, S: Standard_Real): gp_Sphere;
  Transform(T: gp_Trsf): void;
  Transformed(T: gp_Trsf): gp_Sphere;
  Translate_1(V: gp_Vec): void;
  Translated_1(V: gp_Vec): gp_Sphere;
  Translate_2(P1: gp_Pnt, P2: gp_Pnt): void;
  Translated_2(P1: gp_Pnt, P2: gp_Pnt): gp_Sphere;
}

  export declare class gp_Sphere_1 extends gp_Sphere {
    constructor();
  }

  export declare class gp_Sphere_2 extends gp_Sphere {
    constructor(A3: gp_Ax3, Radius: Standard_Real);
  }

export declare class gp_Torus {
  SetAxis(A1: gp_Ax1): void;
  SetLocation(Loc: gp_Pnt): void;
  SetMajorRadius(MajorRadius: Standard_Real): void;
  SetMinorRadius(MinorRadius: Standard_Real): void;
  SetPosition(A3: gp_Ax3): void;
  Area(): Standard_Real;
  UReverse(): void;
  VReverse(): void;
  Direct(): Standard_Boolean;
  Axis(): gp_Ax1;
  Coefficients(Coef: TColStd_Array1OfReal): void;
  Location(): gp_Pnt;
  Position(): gp_Ax3;
  MajorRadius(): Standard_Real;
  MinorRadius(): Standard_Real;
  Volume(): Standard_Real;
  XAxis(): gp_Ax1;
  YAxis(): gp_Ax1;
  Mirror_1(P: gp_Pnt): void;
  Mirrored_1(P: gp_Pnt): gp_Torus;
  Mirror_2(A1: gp_Ax1): void;
  Mirrored_2(A1: gp_Ax1): gp_Torus;
  Mirror_3(A2: gp_Ax2): void;
  Mirrored_3(A2: gp_Ax2): gp_Torus;
  Rotate(A1: gp_Ax1, Ang: Standard_Real): void;
  Rotated(A1: gp_Ax1, Ang: Standard_Real): gp_Torus;
  Scale(P: gp_Pnt, S: Standard_Real): void;
  Scaled(P: gp_Pnt, S: Standard_Real): gp_Torus;
  Transform(T: gp_Trsf): void;
  Transformed(T: gp_Trsf): gp_Torus;
  Translate_1(V: gp_Vec): void;
  Translated_1(V: gp_Vec): gp_Torus;
  Translate_2(P1: gp_Pnt, P2: gp_Pnt): void;
  Translated_2(P1: gp_Pnt, P2: gp_Pnt): gp_Torus;
}

  export declare class gp_Torus_1 extends gp_Torus {
    constructor();
  }

  export declare class gp_Torus_2 extends gp_Torus {
    constructor(A3: gp_Ax3, MajorRadius: Standard_Real, MinorRadius: Standard_Real);
  }

export declare class BSplSLib_EvaluatorFunction {
  Evaluate(theDerivativeRequest: Standard_Integer, theUParameter: Standard_Real, theVParameter: Standard_Real, theResult: Standard_Real, theErrorCode: Standard_Integer): void;
}

export declare class BSplSLib {
  constructor();
  RationalDerivative(UDeg: Standard_Integer, VDeg: Standard_Integer, N: Standard_Integer, M: Standard_Integer, Ders: Standard_Real, RDers: Standard_Real, All: Standard_Boolean): void;
  D0(U: Standard_Real, V: Standard_Real, UIndex: Standard_Integer, VIndex: Standard_Integer, Poles: TColgp_Array2OfPnt, Weights: TColStd_Array2OfReal, UKnots: TColStd_Array1OfReal, VKnots: TColStd_Array1OfReal, UMults: TColStd_Array1OfInteger, VMults: TColStd_Array1OfInteger, UDegree: Standard_Integer, VDegree: Standard_Integer, URat: Standard_Boolean, VRat: Standard_Boolean, UPer: Standard_Boolean, VPer: Standard_Boolean, P: gp_Pnt): void;
  D1(U: Standard_Real, V: Standard_Real, UIndex: Standard_Integer, VIndex: Standard_Integer, Poles: TColgp_Array2OfPnt, Weights: TColStd_Array2OfReal, UKnots: TColStd_Array1OfReal, VKnots: TColStd_Array1OfReal, UMults: TColStd_Array1OfInteger, VMults: TColStd_Array1OfInteger, Degree: Standard_Integer, VDegree: Standard_Integer, URat: Standard_Boolean, VRat: Standard_Boolean, UPer: Standard_Boolean, VPer: Standard_Boolean, P: gp_Pnt, Vu: gp_Vec, Vv: gp_Vec): void;
  D2(U: Standard_Real, V: Standard_Real, UIndex: Standard_Integer, VIndex: Standard_Integer, Poles: TColgp_Array2OfPnt, Weights: TColStd_Array2OfReal, UKnots: TColStd_Array1OfReal, VKnots: TColStd_Array1OfReal, UMults: TColStd_Array1OfInteger, VMults: TColStd_Array1OfInteger, UDegree: Standard_Integer, VDegree: Standard_Integer, URat: Standard_Boolean, VRat: Standard_Boolean, UPer: Standard_Boolean, VPer: Standard_Boolean, P: gp_Pnt, Vu: gp_Vec, Vv: gp_Vec, Vuu: gp_Vec, Vvv: gp_Vec, Vuv: gp_Vec): void;
  D3(U: Standard_Real, V: Standard_Real, UIndex: Standard_Integer, VIndex: Standard_Integer, Poles: TColgp_Array2OfPnt, Weights: TColStd_Array2OfReal, UKnots: TColStd_Array1OfReal, VKnots: TColStd_Array1OfReal, UMults: TColStd_Array1OfInteger, VMults: TColStd_Array1OfInteger, UDegree: Standard_Integer, VDegree: Standard_Integer, URat: Standard_Boolean, VRat: Standard_Boolean, UPer: Standard_Boolean, VPer: Standard_Boolean, P: gp_Pnt, Vu: gp_Vec, Vv: gp_Vec, Vuu: gp_Vec, Vvv: gp_Vec, Vuv: gp_Vec, Vuuu: gp_Vec, Vvvv: gp_Vec, Vuuv: gp_Vec, Vuvv: gp_Vec): void;
  DN(U: Standard_Real, V: Standard_Real, Nu: Standard_Integer, Nv: Standard_Integer, UIndex: Standard_Integer, VIndex: Standard_Integer, Poles: TColgp_Array2OfPnt, Weights: TColStd_Array2OfReal, UKnots: TColStd_Array1OfReal, VKnots: TColStd_Array1OfReal, UMults: TColStd_Array1OfInteger, VMults: TColStd_Array1OfInteger, UDegree: Standard_Integer, VDegree: Standard_Integer, URat: Standard_Boolean, VRat: Standard_Boolean, UPer: Standard_Boolean, VPer: Standard_Boolean, Vn: gp_Vec): void;
  Iso(Param: Standard_Real, IsU: Standard_Boolean, Poles: TColgp_Array2OfPnt, Weights: TColStd_Array2OfReal, Knots: TColStd_Array1OfReal, Mults: TColStd_Array1OfInteger, Degree: Standard_Integer, Periodic: Standard_Boolean, CPoles: TColgp_Array1OfPnt, CWeights: TColStd_Array1OfReal): void;
  Reverse_1(Poles: TColgp_Array2OfPnt, Last: Standard_Integer, UDirection: Standard_Boolean): void;
  HomogeneousD0(U: Standard_Real, V: Standard_Real, UIndex: Standard_Integer, VIndex: Standard_Integer, Poles: TColgp_Array2OfPnt, Weights: TColStd_Array2OfReal, UKnots: TColStd_Array1OfReal, VKnots: TColStd_Array1OfReal, UMults: TColStd_Array1OfInteger, VMults: TColStd_Array1OfInteger, UDegree: Standard_Integer, VDegree: Standard_Integer, URat: Standard_Boolean, VRat: Standard_Boolean, UPer: Standard_Boolean, VPer: Standard_Boolean, W: Standard_Real, P: gp_Pnt): void;
  HomogeneousD1(U: Standard_Real, V: Standard_Real, UIndex: Standard_Integer, VIndex: Standard_Integer, Poles: TColgp_Array2OfPnt, Weights: TColStd_Array2OfReal, UKnots: TColStd_Array1OfReal, VKnots: TColStd_Array1OfReal, UMults: TColStd_Array1OfInteger, VMults: TColStd_Array1OfInteger, UDegree: Standard_Integer, VDegree: Standard_Integer, URat: Standard_Boolean, VRat: Standard_Boolean, UPer: Standard_Boolean, VPer: Standard_Boolean, N: gp_Pnt, Nu: gp_Vec, Nv: gp_Vec, D: Standard_Real, Du: Standard_Real, Dv: Standard_Real): void;
  Reverse_2(Weights: TColStd_Array2OfReal, Last: Standard_Integer, UDirection: Standard_Boolean): void;
  IsRational(Weights: TColStd_Array2OfReal, I1: Standard_Integer, I2: Standard_Integer, J1: Standard_Integer, J2: Standard_Integer, Epsilon: Standard_Real): Standard_Boolean;
  SetPoles_1(Poles: TColgp_Array2OfPnt, FP: TColStd_Array1OfReal, UDirection: Standard_Boolean): void;
  SetPoles_2(Poles: TColgp_Array2OfPnt, Weights: TColStd_Array2OfReal, FP: TColStd_Array1OfReal, UDirection: Standard_Boolean): void;
  GetPoles_1(FP: TColStd_Array1OfReal, Poles: TColgp_Array2OfPnt, UDirection: Standard_Boolean): void;
  GetPoles_2(FP: TColStd_Array1OfReal, Poles: TColgp_Array2OfPnt, Weights: TColStd_Array2OfReal, UDirection: Standard_Boolean): void;
  MovePoint(U: Standard_Real, V: Standard_Real, Displ: gp_Vec, UIndex1: Standard_Integer, UIndex2: Standard_Integer, VIndex1: Standard_Integer, VIndex2: Standard_Integer, UDegree: Standard_Integer, VDegree: Standard_Integer, Rational: Standard_Boolean, Poles: TColgp_Array2OfPnt, Weights: TColStd_Array2OfReal, UFlatKnots: TColStd_Array1OfReal, VFlatKnots: TColStd_Array1OfReal, UFirstIndex: Standard_Integer, ULastIndex: Standard_Integer, VFirstIndex: Standard_Integer, VLastIndex: Standard_Integer, NewPoles: TColgp_Array2OfPnt): void;
  InsertKnots(UDirection: Standard_Boolean, Degree: Standard_Integer, Periodic: Standard_Boolean, Poles: TColgp_Array2OfPnt, Weights: TColStd_Array2OfReal, Knots: TColStd_Array1OfReal, Mults: TColStd_Array1OfInteger, AddKnots: TColStd_Array1OfReal, AddMults: TColStd_Array1OfInteger, NewPoles: TColgp_Array2OfPnt, NewWeights: TColStd_Array2OfReal, NewKnots: TColStd_Array1OfReal, NewMults: TColStd_Array1OfInteger, Epsilon: Standard_Real, Add: Standard_Boolean): void;
  RemoveKnot(UDirection: Standard_Boolean, Index: Standard_Integer, Mult: Standard_Integer, Degree: Standard_Integer, Periodic: Standard_Boolean, Poles: TColgp_Array2OfPnt, Weights: TColStd_Array2OfReal, Knots: TColStd_Array1OfReal, Mults: TColStd_Array1OfInteger, NewPoles: TColgp_Array2OfPnt, NewWeights: TColStd_Array2OfReal, NewKnots: TColStd_Array1OfReal, NewMults: TColStd_Array1OfInteger, Tolerance: Standard_Real): Standard_Boolean;
  IncreaseDegree(UDirection: Standard_Boolean, Degree: Standard_Integer, NewDegree: Standard_Integer, Periodic: Standard_Boolean, Poles: TColgp_Array2OfPnt, Weights: TColStd_Array2OfReal, Knots: TColStd_Array1OfReal, Mults: TColStd_Array1OfInteger, NewPoles: TColgp_Array2OfPnt, NewWeights: TColStd_Array2OfReal, NewKnots: TColStd_Array1OfReal, NewMults: TColStd_Array1OfInteger): void;
  Unperiodize(UDirection: Standard_Boolean, Degree: Standard_Integer, Mults: TColStd_Array1OfInteger, Knots: TColStd_Array1OfReal, Poles: TColgp_Array2OfPnt, Weights: TColStd_Array2OfReal, NewMults: TColStd_Array1OfInteger, NewKnots: TColStd_Array1OfReal, NewPoles: TColgp_Array2OfPnt, NewWeights: TColStd_Array2OfReal): void;
  NoWeights(): TColStd_Array2OfReal;
  BuildCache_1(U: Standard_Real, V: Standard_Real, USpanDomain: Standard_Real, VSpanDomain: Standard_Real, UPeriodicFlag: Standard_Boolean, VPeriodicFlag: Standard_Boolean, UDegree: Standard_Integer, VDegree: Standard_Integer, UIndex: Standard_Integer, VIndex: Standard_Integer, UFlatKnots: TColStd_Array1OfReal, VFlatKnots: TColStd_Array1OfReal, Poles: TColgp_Array2OfPnt, Weights: TColStd_Array2OfReal, CachePoles: TColgp_Array2OfPnt, CacheWeights: TColStd_Array2OfReal): void;
  BuildCache_2(theU: Standard_Real, theV: Standard_Real, theUSpanDomain: Standard_Real, theVSpanDomain: Standard_Real, theUPeriodic: Standard_Boolean, theVPeriodic: Standard_Boolean, theUDegree: Standard_Integer, theVDegree: Standard_Integer, theUIndex: Standard_Integer, theVIndex: Standard_Integer, theUFlatKnots: TColStd_Array1OfReal, theVFlatKnots: TColStd_Array1OfReal, thePoles: TColgp_Array2OfPnt, theWeights: TColStd_Array2OfReal, theCacheArray: TColStd_Array2OfReal): void;
  CacheD0(U: Standard_Real, V: Standard_Real, UDegree: Standard_Integer, VDegree: Standard_Integer, UCacheParameter: Standard_Real, VCacheParameter: Standard_Real, USpanLenght: Standard_Real, VSpanLength: Standard_Real, Poles: TColgp_Array2OfPnt, Weights: TColStd_Array2OfReal, Point: gp_Pnt): void;
  CoefsD0(U: Standard_Real, V: Standard_Real, Poles: TColgp_Array2OfPnt, Weights: TColStd_Array2OfReal, Point: gp_Pnt): void;
  CacheD1(U: Standard_Real, V: Standard_Real, UDegree: Standard_Integer, VDegree: Standard_Integer, UCacheParameter: Standard_Real, VCacheParameter: Standard_Real, USpanLenght: Standard_Real, VSpanLength: Standard_Real, Poles: TColgp_Array2OfPnt, Weights: TColStd_Array2OfReal, Point: gp_Pnt, VecU: gp_Vec, VecV: gp_Vec): void;
  CoefsD1(U: Standard_Real, V: Standard_Real, Poles: TColgp_Array2OfPnt, Weights: TColStd_Array2OfReal, Point: gp_Pnt, VecU: gp_Vec, VecV: gp_Vec): void;
  CacheD2(U: Standard_Real, V: Standard_Real, UDegree: Standard_Integer, VDegree: Standard_Integer, UCacheParameter: Standard_Real, VCacheParameter: Standard_Real, USpanLenght: Standard_Real, VSpanLength: Standard_Real, Poles: TColgp_Array2OfPnt, Weights: TColStd_Array2OfReal, Point: gp_Pnt, VecU: gp_Vec, VecV: gp_Vec, VecUU: gp_Vec, VecUV: gp_Vec, VecVV: gp_Vec): void;
  CoefsD2(U: Standard_Real, V: Standard_Real, Poles: TColgp_Array2OfPnt, Weights: TColStd_Array2OfReal, Point: gp_Pnt, VecU: gp_Vec, VecV: gp_Vec, VecUU: gp_Vec, VecUV: gp_Vec, VecVV: gp_Vec): void;
  PolesCoefficients_1(Poles: TColgp_Array2OfPnt, CachePoles: TColgp_Array2OfPnt): void;
  PolesCoefficients_2(Poles: TColgp_Array2OfPnt, Weights: TColStd_Array2OfReal, CachePoles: TColgp_Array2OfPnt, CacheWeights: TColStd_Array2OfReal): void;
  Resolution(Poles: TColgp_Array2OfPnt, Weights: TColStd_Array2OfReal, UKnots: TColStd_Array1OfReal, VKnots: TColStd_Array1OfReal, UMults: TColStd_Array1OfInteger, VMults: TColStd_Array1OfInteger, UDegree: Standard_Integer, VDegree: Standard_Integer, URat: Standard_Boolean, VRat: Standard_Boolean, UPer: Standard_Boolean, VPer: Standard_Boolean, Tolerance3D: Standard_Real, UTolerance: Standard_Real, VTolerance: Standard_Real): void;
  Interpolate_1(UDegree: Standard_Integer, VDegree: Standard_Integer, UFlatKnots: TColStd_Array1OfReal, VFlatKnots: TColStd_Array1OfReal, UParameters: TColStd_Array1OfReal, VParameters: TColStd_Array1OfReal, Poles: TColgp_Array2OfPnt, Weights: TColStd_Array2OfReal, InversionProblem: Standard_Integer): void;
  Interpolate_2(UDegree: Standard_Integer, VDegree: Standard_Integer, UFlatKnots: TColStd_Array1OfReal, VFlatKnots: TColStd_Array1OfReal, UParameters: TColStd_Array1OfReal, VParameters: TColStd_Array1OfReal, Poles: TColgp_Array2OfPnt, InversionProblem: Standard_Integer): void;
  FunctionMultiply(Function: BSplSLib_EvaluatorFunction, UBSplineDegree: Standard_Integer, VBSplineDegree: Standard_Integer, UBSplineKnots: TColStd_Array1OfReal, VBSplineKnots: TColStd_Array1OfReal, UMults: TColStd_Array1OfInteger, VMults: TColStd_Array1OfInteger, Poles: TColgp_Array2OfPnt, Weights: TColStd_Array2OfReal, UFlatKnots: TColStd_Array1OfReal, VFlatKnots: TColStd_Array1OfReal, UNewDegree: Standard_Integer, VNewDegree: Standard_Integer, NewNumerator: TColgp_Array2OfPnt, NewDenominator: TColStd_Array2OfReal, theStatus: Standard_Integer): void;
}

export declare class math_Function {
  Value(X: Standard_Real, F: Standard_Real): Standard_Boolean;
  GetStateNumber(): Standard_Integer;
}

export declare class math_FunctionWithDerivative extends math_Function {
  Value(X: Standard_Real, F: Standard_Real): Standard_Boolean;
  Derivative(X: Standard_Real, D: Standard_Real): Standard_Boolean;
  Values(X: Standard_Real, F: Standard_Real, D: Standard_Real): Standard_Boolean;
}

export declare class math_DoubleTab {
  Init(InitValue: Standard_Real): void;
  Copy(Other: math_DoubleTab): void;
  SetLowerRow(LowerRow: Standard_Integer): void;
  SetLowerCol(LowerCol: Standard_Integer): void;
  Value(RowIndex: Standard_Integer, ColIndex: Standard_Integer): Standard_Real;
  Free(): void;
}

  export declare class math_DoubleTab_1 extends math_DoubleTab {
    constructor(LowerRow: Standard_Integer, UpperRow: Standard_Integer, LowerCol: Standard_Integer, UpperCol: Standard_Integer);
  }

  export declare class math_DoubleTab_2 extends math_DoubleTab {
    constructor(Tab: Standard_Address, LowerRow: Standard_Integer, UpperRow: Standard_Integer, LowerCol: Standard_Integer, UpperCol: Standard_Integer);
  }

  export declare class math_DoubleTab_3 extends math_DoubleTab {
    constructor(Other: math_DoubleTab);
  }

export declare class math_BFGS {
  constructor(NbVariables: Standard_Integer, Tolerance: Standard_Real, NbIterations: Standard_Integer, ZEPS: Standard_Real)
  SetBoundary(theLeftBorder: math_Vector, theRightBorder: math_Vector): void;
  Perform(F: math_MultipleVarFunctionWithGradient, StartingPoint: math_Vector): void;
  IsSolutionReached(F: math_MultipleVarFunctionWithGradient): Standard_Boolean;
  IsDone(): Standard_Boolean;
  Location_1(): math_Vector;
  Location_2(Loc: math_Vector): void;
  Minimum(): Standard_Real;
  Gradient_1(): math_Vector;
  Gradient_2(Grad: math_Vector): void;
  NbIterations(): Standard_Integer;
  Dump(o: Standard_OStream): void;
}

export declare class math_MultipleVarFunction {
  NbVariables(): Standard_Integer;
  Value(X: math_Vector, F: Standard_Real): Standard_Boolean;
  GetStateNumber(): Standard_Integer;
}

export declare class math_MultipleVarFunctionWithGradient extends math_MultipleVarFunction {
  NbVariables(): Standard_Integer;
  Value(X: math_Vector, F: Standard_Real): Standard_Boolean;
  Gradient(X: math_Vector, G: math_Vector): Standard_Boolean;
  Values(X: math_Vector, F: Standard_Real, G: math_Vector): Standard_Boolean;
}

export declare class gp_GTrsf2d {
  SetAffinity(A: gp_Ax2d, Ratio: Standard_Real): void;
  SetValue(Row: Standard_Integer, Col: Standard_Integer, Value: Standard_Real): void;
  SetTranslationPart(Coord: gp_XY): void;
  SetTrsf2d(T: gp_Trsf2d): void;
  SetVectorialPart(Matrix: gp_Mat2d): void;
  IsNegative(): Standard_Boolean;
  IsSingular(): Standard_Boolean;
  Form(): gp_TrsfForm;
  TranslationPart(): gp_XY;
  VectorialPart(): gp_Mat2d;
  Value(Row: Standard_Integer, Col: Standard_Integer): Standard_Real;
  Invert(): void;
  Inverted(): gp_GTrsf2d;
  Multiplied(T: gp_GTrsf2d): gp_GTrsf2d;
  Multiply(T: gp_GTrsf2d): void;
  PreMultiply(T: gp_GTrsf2d): void;
  Power(N: Standard_Integer): void;
  Powered(N: Standard_Integer): gp_GTrsf2d;
  Transforms_1(Coord: gp_XY): void;
  Transformed(Coord: gp_XY): gp_XY;
  Transforms_2(X: Standard_Real, Y: Standard_Real): void;
  Trsf2d(): gp_Trsf2d;
}

  export declare class gp_GTrsf2d_1 extends gp_GTrsf2d {
    constructor();
  }

  export declare class gp_GTrsf2d_2 extends gp_GTrsf2d {
    constructor(T: gp_Trsf2d);
  }

  export declare class gp_GTrsf2d_3 extends gp_GTrsf2d {
    constructor(M: gp_Mat2d, V: gp_XY);
  }

export declare class BVH_Properties extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BVH_ObjectTransient extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Properties(): any;
  SetProperties(theProperties: any): void;
  IsDirty(): Standard_Boolean;
  MarkDirty(): void;
}

export declare class BVH_BuildQueue {
  constructor()
  Size(): Standard_Integer;
  Enqueue(theNode: Standard_Integer): void;
  Fetch(wasBusy: Standard_Boolean): Standard_Integer;
  HasBusyThreads(): Standard_Boolean;
}

export declare class BVH_BuildThread extends Standard_Transient {
  constructor(theBuildTool: BVH_BuildTool, theBuildQueue: BVH_BuildQueue)
  Run(): void;
  Wait(): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class BSplSLib_Cache extends Standard_Transient {
  constructor(theDegreeU: Standard_Integer, thePeriodicU: Standard_Boolean, theFlatKnotsU: TColStd_Array1OfReal, theDegreeV: Standard_Integer, thePeriodicV: Standard_Boolean, theFlatKnotsV: TColStd_Array1OfReal, theWeights: TColStd_Array2OfReal)
  IsCacheValid(theParameterU: Standard_Real, theParameterV: Standard_Real): Standard_Boolean;
  BuildCache(theParameterU: Standard_Real, theParameterV: Standard_Real, theFlatKnotsU: TColStd_Array1OfReal, theFlatKnotsV: TColStd_Array1OfReal, thePoles: TColgp_Array2OfPnt, theWeights: TColStd_Array2OfReal): void;
  D0(theU: Standard_Real, theV: Standard_Real, thePoint: gp_Pnt): void;
  D1(theU: Standard_Real, theV: Standard_Real, thePoint: gp_Pnt, theTangentU: gp_Vec, theTangentV: gp_Vec): void;
  D2(theU: Standard_Real, theV: Standard_Real, thePoint: gp_Pnt, theTangentU: gp_Vec, theTangentV: gp_Vec, theCurvatureU: gp_Vec, theCurvatureV: gp_Vec, theCurvatureUV: gp_Vec): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Poly_Polygon3D extends Standard_Transient {
  Copy(): any;
  Deflection_1(): Standard_Real;
  Deflection_2(theDefl: Standard_Real): void;
  NbNodes(): Standard_Integer;
  Nodes(): TColgp_Array1OfPnt;
  ChangeNodes(): TColgp_Array1OfPnt;
  HasParameters(): Standard_Boolean;
  Parameters(): TColStd_Array1OfReal;
  ChangeParameters(): TColStd_Array1OfReal;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Poly_Polygon3D_1 extends Poly_Polygon3D {
    constructor(theNbNodes: Standard_Integer, theHasParams: Standard_Boolean);
  }

  export declare class Poly_Polygon3D_2 extends Poly_Polygon3D {
    constructor(Nodes: TColgp_Array1OfPnt);
  }

  export declare class Poly_Polygon3D_3 extends Poly_Polygon3D {
    constructor(Nodes: TColgp_Array1OfPnt, Parameters: TColStd_Array1OfReal);
  }

export declare class Poly_PolygonOnTriangulation extends Standard_Transient {
  Copy(): any;
  Deflection_1(): Standard_Real;
  Deflection_2(theDefl: Standard_Real): void;
  NbNodes(): Standard_Integer;
  Nodes(): TColStd_Array1OfInteger;
  ChangeNodes(): TColStd_Array1OfInteger;
  HasParameters(): Standard_Boolean;
  Parameters(): any;
  ChangeParameters(): TColStd_Array1OfReal;
  SetParameters(theParameters: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Poly_PolygonOnTriangulation_1 extends Poly_PolygonOnTriangulation {
    constructor(theNbNodes: Standard_Integer, theHasParams: Standard_Boolean);
  }

  export declare class Poly_PolygonOnTriangulation_2 extends Poly_PolygonOnTriangulation {
    constructor(Nodes: TColStd_Array1OfInteger);
  }

  export declare class Poly_PolygonOnTriangulation_3 extends Poly_PolygonOnTriangulation {
    constructor(Nodes: TColStd_Array1OfInteger, Parameters: TColStd_Array1OfReal);
  }

export declare class Poly_Polygon2D extends Standard_Transient {
  Deflection_1(): Standard_Real;
  Deflection_2(theDefl: Standard_Real): void;
  NbNodes(): Standard_Integer;
  Nodes(): TColgp_Array1OfPnt2d;
  ChangeNodes(): TColgp_Array1OfPnt2d;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Poly_Polygon2D_1 extends Poly_Polygon2D {
    constructor(theNbNodes: Standard_Integer);
  }

  export declare class Poly_Polygon2D_2 extends Poly_Polygon2D {
    constructor(Nodes: TColgp_Array1OfPnt2d);
  }

export declare class BSplCLib_Cache extends Standard_Transient {
  IsCacheValid(theParameter: Standard_Real): Standard_Boolean;
  BuildCache_1(theParameter: Standard_Real, theFlatKnots: TColStd_Array1OfReal, thePoles2d: TColgp_Array1OfPnt2d, theWeights: TColStd_Array1OfReal): void;
  BuildCache_2(theParameter: Standard_Real, theFlatKnots: TColStd_Array1OfReal, thePoles: TColgp_Array1OfPnt, theWeights: TColStd_Array1OfReal): void;
  D0_1(theParameter: Standard_Real, thePoint: gp_Pnt2d): void;
  D0_2(theParameter: Standard_Real, thePoint: gp_Pnt): void;
  D1_1(theParameter: Standard_Real, thePoint: gp_Pnt2d, theTangent: gp_Vec2d): void;
  D1_2(theParameter: Standard_Real, thePoint: gp_Pnt, theTangent: gp_Vec): void;
  D2_1(theParameter: Standard_Real, thePoint: gp_Pnt2d, theTangent: gp_Vec2d, theCurvature: gp_Vec2d): void;
  D2_2(theParameter: Standard_Real, thePoint: gp_Pnt, theTangent: gp_Vec, theCurvature: gp_Vec): void;
  D3_1(theParameter: Standard_Real, thePoint: gp_Pnt2d, theTangent: gp_Vec2d, theCurvature: gp_Vec2d, theTorsion: gp_Vec2d): void;
  D3_2(theParameter: Standard_Real, thePoint: gp_Pnt, theTangent: gp_Vec, theCurvature: gp_Vec, theTorsion: gp_Vec): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class BSplCLib_Cache_1 extends BSplCLib_Cache {
    constructor(theDegree: Standard_Integer, thePeriodic: Standard_Boolean, theFlatKnots: TColStd_Array1OfReal, thePoles2d: TColgp_Array1OfPnt2d, theWeights: TColStd_Array1OfReal);
  }

  export declare class BSplCLib_Cache_2 extends BSplCLib_Cache {
    constructor(theDegree: Standard_Integer, thePeriodic: Standard_Boolean, theFlatKnots: TColStd_Array1OfReal, thePoles: TColgp_Array1OfPnt, theWeights: TColStd_Array1OfReal);
  }

export declare class math_FunctionSet {
  NbVariables(): Standard_Integer;
  NbEquations(): Standard_Integer;
  Value(X: math_Vector, F: math_Vector): Standard_Boolean;
  GetStateNumber(): Standard_Integer;
}

export declare class math_FunctionSetWithDerivatives extends math_FunctionSet {
  NbVariables(): Standard_Integer;
  NbEquations(): Standard_Integer;
  Value(X: math_Vector, F: math_Vector): Standard_Boolean;
  Derivatives(X: math_Vector, D: math_Matrix): Standard_Boolean;
  Values(X: math_Vector, F: math_Vector, D: math_Matrix): Standard_Boolean;
}

export declare class Bnd_Sphere {
  U(): Standard_Integer;
  V(): Standard_Integer;
  IsValid(): Standard_Boolean;
  SetValid(isValid: Standard_Boolean): void;
  Center(): gp_XYZ;
  Radius(): Standard_Real;
  Distances(theXYZ: gp_XYZ, theMin: Standard_Real, theMax: Standard_Real): void;
  SquareDistances(theXYZ: gp_XYZ, theMin: Standard_Real, theMax: Standard_Real): void;
  Project(theNode: gp_XYZ, theProjNode: gp_XYZ, theDist: Standard_Real, theInside: Standard_Boolean): Standard_Boolean;
  Distance(theNode: gp_XYZ): Standard_Real;
  SquareDistance(theNode: gp_XYZ): Standard_Real;
  Add(theOther: Bnd_Sphere): void;
  IsOut_1(theOther: Bnd_Sphere): Standard_Boolean;
  IsOut_2(thePnt: gp_XYZ, theMaxDist: Standard_Real): Standard_Boolean;
  SquareExtent(): Standard_Real;
}

  export declare class Bnd_Sphere_1 extends Bnd_Sphere {
    constructor();
  }

  export declare class Bnd_Sphere_2 extends Bnd_Sphere {
    constructor(theCntr: gp_XYZ, theRad: Standard_Real, theU: Standard_Integer, theV: Standard_Integer);
  }

export declare class Bnd_Box2d {
  constructor()
  SetWhole(): void;
  SetVoid(): void;
  Set_1(thePnt: gp_Pnt2d): void;
  Set_2(thePnt: gp_Pnt2d, theDir: gp_Dir2d): void;
  Update_1(aXmin: Standard_Real, aYmin: Standard_Real, aXmax: Standard_Real, aYmax: Standard_Real): void;
  Update_2(X: Standard_Real, Y: Standard_Real): void;
  GetGap(): Standard_Real;
  SetGap(Tol: Standard_Real): void;
  Enlarge(theTol: Standard_Real): void;
  Get(aXmin: Standard_Real, aYmin: Standard_Real, aXmax: Standard_Real, aYmax: Standard_Real): void;
  OpenXmin(): void;
  OpenXmax(): void;
  OpenYmin(): void;
  OpenYmax(): void;
  IsOpenXmin(): Standard_Boolean;
  IsOpenXmax(): Standard_Boolean;
  IsOpenYmin(): Standard_Boolean;
  IsOpenYmax(): Standard_Boolean;
  IsWhole(): Standard_Boolean;
  IsVoid(): Standard_Boolean;
  Transformed(T: gp_Trsf2d): Bnd_Box2d;
  Add_1(Other: Bnd_Box2d): void;
  Add_2(thePnt: gp_Pnt2d): void;
  Add_3(thePnt: gp_Pnt2d, theDir: gp_Dir2d): void;
  Add_4(D: gp_Dir2d): void;
  IsOut_1(P: gp_Pnt2d): Standard_Boolean;
  IsOut_2(Other: Bnd_Box2d): Standard_Boolean;
  IsOut_3(theOther: Bnd_Box2d, theTrsf: gp_Trsf2d): Standard_Boolean;
  IsOut_4(T1: gp_Trsf2d, Other: Bnd_Box2d, T2: gp_Trsf2d): Standard_Boolean;
  Dump(): void;
  SquareExtent(): Standard_Real;
}

export declare class Bnd_B2d {
  IsVoid(): Standard_Boolean;
  Clear(): void;
  Add_1(thePnt: gp_XY): void;
  Add_2(thePnt: gp_Pnt2d): void;
  Add_3(theBox: Bnd_B2d): void;
  CornerMin(): gp_XY;
  CornerMax(): gp_XY;
  SquareExtent(): Standard_Real;
  Enlarge(theDiff: Standard_Real): void;
  Limit(theOtherBox: Bnd_B2d): Standard_Boolean;
  Transformed(theTrsf: gp_Trsf2d): Bnd_B2d;
  IsOut_1(thePnt: gp_XY): Standard_Boolean;
  IsOut_2(theCenter: gp_XY, theRadius: Standard_Real, isCircleHollow: Standard_Boolean): Standard_Boolean;
  IsOut_3(theOtherBox: Bnd_B2d): Standard_Boolean;
  IsOut_4(theOtherBox: Bnd_B2d, theTrsf: gp_Trsf2d): Standard_Boolean;
  IsOut_5(theLine: gp_Ax2d): Standard_Boolean;
  IsOut_6(theP0: gp_XY, theP1: gp_XY): Standard_Boolean;
  IsIn_1(theBox: Bnd_B2d): Standard_Boolean;
  IsIn_2(theBox: Bnd_B2d, theTrsf: gp_Trsf2d): Standard_Boolean;
  SetCenter(theCenter: gp_XY): void;
  SetHSize(theHSize: gp_XY): void;
}

  export declare class Bnd_B2d_1 extends Bnd_B2d {
    constructor();
  }

  export declare class Bnd_B2d_2 extends Bnd_B2d {
    constructor(theCenter: gp_XY, theHSize: gp_XY);
  }

export declare class Bnd_B2f {
  IsVoid(): Standard_Boolean;
  Clear(): void;
  Add_1(thePnt: gp_XY): void;
  Add_2(thePnt: gp_Pnt2d): void;
  Add_3(theBox: Bnd_B2f): void;
  CornerMin(): gp_XY;
  CornerMax(): gp_XY;
  SquareExtent(): Standard_Real;
  Enlarge(theDiff: Standard_Real): void;
  Limit(theOtherBox: Bnd_B2f): Standard_Boolean;
  Transformed(theTrsf: gp_Trsf2d): Bnd_B2f;
  IsOut_1(thePnt: gp_XY): Standard_Boolean;
  IsOut_2(theCenter: gp_XY, theRadius: Standard_Real, isCircleHollow: Standard_Boolean): Standard_Boolean;
  IsOut_3(theOtherBox: Bnd_B2f): Standard_Boolean;
  IsOut_4(theOtherBox: Bnd_B2f, theTrsf: gp_Trsf2d): Standard_Boolean;
  IsOut_5(theLine: gp_Ax2d): Standard_Boolean;
  IsOut_6(theP0: gp_XY, theP1: gp_XY): Standard_Boolean;
  IsIn_1(theBox: Bnd_B2f): Standard_Boolean;
  IsIn_2(theBox: Bnd_B2f, theTrsf: gp_Trsf2d): Standard_Boolean;
  SetCenter(theCenter: gp_XY): void;
  SetHSize(theHSize: gp_XY): void;
}

  export declare class Bnd_B2f_1 extends Bnd_B2f {
    constructor();
  }

  export declare class Bnd_B2f_2 extends Bnd_B2f {
    constructor(theCenter: gp_XY, theHSize: gp_XY);
  }

export declare class Bnd_B3d {
  IsVoid(): Standard_Boolean;
  Clear(): void;
  Add_1(thePnt: gp_XYZ): void;
  Add_2(thePnt: gp_Pnt): void;
  Add_3(theBox: Bnd_B3d): void;
  CornerMin(): gp_XYZ;
  CornerMax(): gp_XYZ;
  SquareExtent(): Standard_Real;
  Enlarge(theDiff: Standard_Real): void;
  Limit(theOtherBox: Bnd_B3d): Standard_Boolean;
  Transformed(theTrsf: gp_Trsf): Bnd_B3d;
  IsOut_1(thePnt: gp_XYZ): Standard_Boolean;
  IsOut_2(theCenter: gp_XYZ, theRadius: Standard_Real, isSphereHollow: Standard_Boolean): Standard_Boolean;
  IsOut_3(theOtherBox: Bnd_B3d): Standard_Boolean;
  IsOut_4(theOtherBox: Bnd_B3d, theTrsf: gp_Trsf): Standard_Boolean;
  IsOut_5(theLine: gp_Ax1, isRay: Standard_Boolean, theOverthickness: Standard_Real): Standard_Boolean;
  IsOut_6(thePlane: gp_Ax3): Standard_Boolean;
  IsIn_1(theBox: Bnd_B3d): Standard_Boolean;
  IsIn_2(theBox: Bnd_B3d, theTrsf: gp_Trsf): Standard_Boolean;
  SetCenter(theCenter: gp_XYZ): void;
  SetHSize(theHSize: gp_XYZ): void;
}

  export declare class Bnd_B3d_1 extends Bnd_B3d {
    constructor();
  }

  export declare class Bnd_B3d_2 extends Bnd_B3d {
    constructor(theCenter: gp_XYZ, theHSize: gp_XYZ);
  }

export declare class Bnd_B3f {
  IsVoid(): Standard_Boolean;
  Clear(): void;
  Add_1(thePnt: gp_XYZ): void;
  Add_2(thePnt: gp_Pnt): void;
  Add_3(theBox: Bnd_B3f): void;
  CornerMin(): gp_XYZ;
  CornerMax(): gp_XYZ;
  SquareExtent(): Standard_Real;
  Enlarge(theDiff: Standard_Real): void;
  Limit(theOtherBox: Bnd_B3f): Standard_Boolean;
  Transformed(theTrsf: gp_Trsf): Bnd_B3f;
  IsOut_1(thePnt: gp_XYZ): Standard_Boolean;
  IsOut_2(theCenter: gp_XYZ, theRadius: Standard_Real, isSphereHollow: Standard_Boolean): Standard_Boolean;
  IsOut_3(theOtherBox: Bnd_B3f): Standard_Boolean;
  IsOut_4(theOtherBox: Bnd_B3f, theTrsf: gp_Trsf): Standard_Boolean;
  IsOut_5(theLine: gp_Ax1, isRay: Standard_Boolean, theOverthickness: Standard_Real): Standard_Boolean;
  IsOut_6(thePlane: gp_Ax3): Standard_Boolean;
  IsIn_1(theBox: Bnd_B3f): Standard_Boolean;
  IsIn_2(theBox: Bnd_B3f, theTrsf: gp_Trsf): Standard_Boolean;
  SetCenter(theCenter: gp_XYZ): void;
  SetHSize(theHSize: gp_XYZ): void;
}

  export declare class Bnd_B3f_1 extends Bnd_B3f {
    constructor();
  }

  export declare class Bnd_B3f_2 extends Bnd_B3f {
    constructor(theCenter: gp_XYZ, theHSize: gp_XYZ);
  }

export declare class Bnd_BoundSortBox {
  constructor()
  Initialize_1(CompleteBox: Bnd_Box, SetOfBox: any): void;
  Initialize_2(SetOfBox: any): void;
  Initialize_3(CompleteBox: Bnd_Box, nbComponents: Standard_Integer): void;
  Add(theBox: Bnd_Box, boxIndex: Standard_Integer): void;
  Compare_1(theBox: Bnd_Box): TColStd_ListOfInteger;
  Compare_2(P: gp_Pln): TColStd_ListOfInteger;
  Dump(): void;
  Destroy(): void;
}

export declare class Bnd_BoundSortBox2d {
  constructor()
  Initialize_1(CompleteBox: Bnd_Box2d, SetOfBox: any): void;
  Initialize_2(SetOfBox: any): void;
  Initialize_3(CompleteBox: Bnd_Box2d, nbComponents: Standard_Integer): void;
  Add(theBox: Bnd_Box2d, boxIndex: Standard_Integer): void;
  Compare(theBox: Bnd_Box2d): TColStd_ListOfInteger;
  Dump(): void;
}

export declare class Bnd_OBB {
  ReBuild(theListOfPoints: TColgp_Array1OfPnt, theListOfTolerances: TColStd_Array1OfReal, theIsOptimal: Standard_Boolean): void;
  SetCenter(theCenter: gp_Pnt): void;
  SetXComponent(theXDirection: gp_Dir, theHXSize: Standard_Real): void;
  SetYComponent(theYDirection: gp_Dir, theHYSize: Standard_Real): void;
  SetZComponent(theZDirection: gp_Dir, theHZSize: Standard_Real): void;
  Position(): gp_Ax3;
  Center(): gp_XYZ;
  XDirection(): gp_XYZ;
  YDirection(): gp_XYZ;
  ZDirection(): gp_XYZ;
  XHSize(): Standard_Real;
  YHSize(): Standard_Real;
  ZHSize(): Standard_Real;
  IsVoid(): Standard_Boolean;
  SetVoid(): void;
  SetAABox(theFlag: Standard_Boolean): void;
  IsAABox(): Standard_Boolean;
  Enlarge(theGapAdd: Standard_Real): void;
  GetVertex(theP: gp_Pnt [8]): Standard_Boolean;
  SquareExtent(): Standard_Real;
  IsOut_1(theOther: Bnd_OBB): Standard_Boolean;
  IsOut_2(theP: gp_Pnt): Standard_Boolean;
  IsCompletelyInside(theOther: Bnd_OBB): Standard_Boolean;
  Add_1(theOther: Bnd_OBB): void;
  Add_2(theP: gp_Pnt): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

  export declare class Bnd_OBB_1 extends Bnd_OBB {
    constructor();
  }

  export declare class Bnd_OBB_2 extends Bnd_OBB {
    constructor(theCenter: gp_Pnt, theXDirection: gp_Dir, theYDirection: gp_Dir, theZDirection: gp_Dir, theHXSize: Standard_Real, theHYSize: Standard_Real, theHZSize: Standard_Real);
  }

  export declare class Bnd_OBB_3 extends Bnd_OBB {
    constructor(theBox: Bnd_Box);
  }

export declare class Bnd_Tools {
  constructor();
  Bnd2BVH_1(theBox: Bnd_Box2d): BVH_Box<Standard_Real, 2>;
  Bnd2BVH_2(theBox: Bnd_Box): BVH_Box<Standard_Real, 3>;
}

export declare class CSLib {
  constructor();
  Normal_1(D1U: gp_Vec, D1V: gp_Vec, SinTol: Standard_Real, theStatus: CSLib_DerivativeStatus, Normal: gp_Dir): void;
  Normal_2(D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec, SinTol: Standard_Real, Done: Standard_Boolean, theStatus: CSLib_NormalStatus, Normal: gp_Dir): void;
  Normal_3(D1U: gp_Vec, D1V: gp_Vec, MagTol: Standard_Real, theStatus: CSLib_NormalStatus, Normal: gp_Dir): void;
  Normal_4(MaxOrder: Standard_Integer, DerNUV: TColgp_Array2OfVec, MagTol: Standard_Real, U: Standard_Real, V: Standard_Real, Umin: Standard_Real, Umax: Standard_Real, Vmin: Standard_Real, Vmax: Standard_Real, theStatus: CSLib_NormalStatus, Normal: gp_Dir, OrderU: Standard_Integer, OrderV: Standard_Integer): void;
  DNNUV_1(Nu: Standard_Integer, Nv: Standard_Integer, DerSurf: TColgp_Array2OfVec): gp_Vec;
  DNNUV_2(Nu: Standard_Integer, Nv: Standard_Integer, DerSurf1: TColgp_Array2OfVec, DerSurf2: TColgp_Array2OfVec): gp_Vec;
  DNNormal(Nu: Standard_Integer, Nv: Standard_Integer, DerNUV: TColgp_Array2OfVec, Iduref: Standard_Integer, Idvref: Standard_Integer): gp_Vec;
}

export declare class CSLib_Class2d {
  SiDans(P: gp_Pnt2d): Standard_Integer;
  SiDans_OnMode(P: gp_Pnt2d, Tol: Standard_Real): Standard_Integer;
  InternalSiDans(X: Standard_Real, Y: Standard_Real): Standard_Integer;
  InternalSiDansOuOn(X: Standard_Real, Y: Standard_Real): Standard_Integer;
}

  export declare class CSLib_Class2d_1 extends CSLib_Class2d {
    constructor(thePnts2d: TColgp_Array1OfPnt2d, theTolU: Standard_Real, theTolV: Standard_Real, theUMin: Standard_Real, theVMin: Standard_Real, theUMax: Standard_Real, theVMax: Standard_Real);
  }

  export declare class CSLib_Class2d_2 extends CSLib_Class2d {
    constructor(thePnts2d: TColgp_SequenceOfPnt2d, theTolU: Standard_Real, theTolV: Standard_Real, theUMin: Standard_Real, theVMin: Standard_Real, theUMax: Standard_Real, theVMax: Standard_Real);
  }

export declare class CSLib_NormalPolyDef extends math_FunctionWithDerivative {
  constructor(k0: Standard_Integer, li: TColStd_Array1OfReal)
  Value(X: Standard_Real, F: Standard_Real): Standard_Boolean;
  Derivative(X: Standard_Real, D: Standard_Real): Standard_Boolean;
  Values(X: Standard_Real, F: Standard_Real, D: Standard_Real): Standard_Boolean;
}

export declare class Convert_ConicToBSplineCurve {
  Degree(): Standard_Integer;
  NbPoles(): Standard_Integer;
  NbKnots(): Standard_Integer;
  IsPeriodic(): Standard_Boolean;
  Pole(Index: Standard_Integer): gp_Pnt2d;
  Weight(Index: Standard_Integer): Standard_Real;
  Knot(Index: Standard_Integer): Standard_Real;
  Multiplicity(Index: Standard_Integer): Standard_Integer;
  BuildCosAndSin_1(Parametrisation: Convert_ParameterisationType, CosNumerator: any, SinNumerator: any, Denominator: any, Degree: Standard_Integer, Knots: any, Mults: any): void;
  BuildCosAndSin_2(Parametrisation: Convert_ParameterisationType, UFirst: Standard_Real, ULast: Standard_Real, CosNumerator: any, SinNumerator: any, Denominator: any, Degree: Standard_Integer, Knots: any, Mults: any): void;
}

export declare class Convert_CircleToBSplineCurve extends Convert_ConicToBSplineCurve {
}

  export declare class Convert_CircleToBSplineCurve_1 extends Convert_CircleToBSplineCurve {
    constructor(C: gp_Circ2d, Parameterisation: Convert_ParameterisationType);
  }

  export declare class Convert_CircleToBSplineCurve_2 extends Convert_CircleToBSplineCurve {
    constructor(C: gp_Circ2d, U1: Standard_Real, U2: Standard_Real, Parameterisation: Convert_ParameterisationType);
  }

export declare class Convert_CompBezierCurves2dToBSplineCurve2d {
  constructor(AngularTolerance: Standard_Real)
  AddCurve(Poles: TColgp_Array1OfPnt2d): void;
  Perform(): void;
  Degree(): Standard_Integer;
  NbPoles(): Standard_Integer;
  Poles(Poles: TColgp_Array1OfPnt2d): void;
  NbKnots(): Standard_Integer;
  KnotsAndMults(Knots: TColStd_Array1OfReal, Mults: TColStd_Array1OfInteger): void;
}

export declare class Convert_CompBezierCurvesToBSplineCurve {
  constructor(AngularTolerance: Standard_Real)
  AddCurve(Poles: TColgp_Array1OfPnt): void;
  Perform(): void;
  Degree(): Standard_Integer;
  NbPoles(): Standard_Integer;
  Poles(Poles: TColgp_Array1OfPnt): void;
  NbKnots(): Standard_Integer;
  KnotsAndMults(Knots: TColStd_Array1OfReal, Mults: TColStd_Array1OfInteger): void;
}

export declare class Convert_CompPolynomialToPoles {
  NbPoles(): Standard_Integer;
  Poles(Poles: any): void;
  Degree(): Standard_Integer;
  NbKnots(): Standard_Integer;
  Knots(K: any): void;
  Multiplicities(M: any): void;
  IsDone(): Standard_Boolean;
}

  export declare class Convert_CompPolynomialToPoles_1 extends Convert_CompPolynomialToPoles {
    constructor(NumCurves: Standard_Integer, Continuity: Standard_Integer, Dimension: Standard_Integer, MaxDegree: Standard_Integer, NumCoeffPerCurve: any, Coefficients: any, PolynomialIntervals: any, TrueIntervals: any);
  }

  export declare class Convert_CompPolynomialToPoles_2 extends Convert_CompPolynomialToPoles {
    constructor(NumCurves: Standard_Integer, Dimension: Standard_Integer, MaxDegree: Standard_Integer, Continuity: TColStd_Array1OfInteger, NumCoeffPerCurve: TColStd_Array1OfInteger, Coefficients: TColStd_Array1OfReal, PolynomialIntervals: TColStd_Array2OfReal, TrueIntervals: TColStd_Array1OfReal);
  }

  export declare class Convert_CompPolynomialToPoles_3 extends Convert_CompPolynomialToPoles {
    constructor(Dimension: Standard_Integer, MaxDegree: Standard_Integer, Degree: Standard_Integer, Coefficients: TColStd_Array1OfReal, PolynomialIntervals: TColStd_Array1OfReal, TrueIntervals: TColStd_Array1OfReal);
  }

export declare class Convert_ElementarySurfaceToBSplineSurface {
  UDegree(): Standard_Integer;
  VDegree(): Standard_Integer;
  NbUPoles(): Standard_Integer;
  NbVPoles(): Standard_Integer;
  NbUKnots(): Standard_Integer;
  NbVKnots(): Standard_Integer;
  IsUPeriodic(): Standard_Boolean;
  IsVPeriodic(): Standard_Boolean;
  Pole(UIndex: Standard_Integer, VIndex: Standard_Integer): gp_Pnt;
  Weight(UIndex: Standard_Integer, VIndex: Standard_Integer): Standard_Real;
  UKnot(UIndex: Standard_Integer): Standard_Real;
  VKnot(UIndex: Standard_Integer): Standard_Real;
  UMultiplicity(UIndex: Standard_Integer): Standard_Integer;
  VMultiplicity(VIndex: Standard_Integer): Standard_Integer;
}

export declare class Convert_ConeToBSplineSurface extends Convert_ElementarySurfaceToBSplineSurface {
}

  export declare class Convert_ConeToBSplineSurface_1 extends Convert_ConeToBSplineSurface {
    constructor(C: gp_Cone, U1: Standard_Real, U2: Standard_Real, V1: Standard_Real, V2: Standard_Real);
  }

  export declare class Convert_ConeToBSplineSurface_2 extends Convert_ConeToBSplineSurface {
    constructor(C: gp_Cone, V1: Standard_Real, V2: Standard_Real);
  }

export declare class Convert_CylinderToBSplineSurface extends Convert_ElementarySurfaceToBSplineSurface {
}

  export declare class Convert_CylinderToBSplineSurface_1 extends Convert_CylinderToBSplineSurface {
    constructor(Cyl: gp_Cylinder, U1: Standard_Real, U2: Standard_Real, V1: Standard_Real, V2: Standard_Real);
  }

  export declare class Convert_CylinderToBSplineSurface_2 extends Convert_CylinderToBSplineSurface {
    constructor(Cyl: gp_Cylinder, V1: Standard_Real, V2: Standard_Real);
  }

export declare class Convert_EllipseToBSplineCurve extends Convert_ConicToBSplineCurve {
}

  export declare class Convert_EllipseToBSplineCurve_1 extends Convert_EllipseToBSplineCurve {
    constructor(E: gp_Elips2d, Parameterisation: Convert_ParameterisationType);
  }

  export declare class Convert_EllipseToBSplineCurve_2 extends Convert_EllipseToBSplineCurve {
    constructor(E: gp_Elips2d, U1: Standard_Real, U2: Standard_Real, Parameterisation: Convert_ParameterisationType);
  }

export declare class Convert_GridPolynomialToPoles {
  Perform(UContinuity: Standard_Integer, VContinuity: Standard_Integer, MaxUDegree: Standard_Integer, MaxVDegree: Standard_Integer, NumCoeffPerSurface: any, Coefficients: any, PolynomialUIntervals: any, PolynomialVIntervals: any, TrueUIntervals: any, TrueVIntervals: any): void;
  NbUPoles(): Standard_Integer;
  NbVPoles(): Standard_Integer;
  Poles(): any;
  UDegree(): Standard_Integer;
  VDegree(): Standard_Integer;
  NbUKnots(): Standard_Integer;
  NbVKnots(): Standard_Integer;
  UKnots(): any;
  VKnots(): any;
  UMultiplicities(): any;
  VMultiplicities(): any;
  IsDone(): Standard_Boolean;
}

  export declare class Convert_GridPolynomialToPoles_1 extends Convert_GridPolynomialToPoles {
    constructor(MaxUDegree: Standard_Integer, MaxVDegree: Standard_Integer, NumCoeff: any, Coefficients: any, PolynomialUIntervals: any, PolynomialVIntervals: any);
  }

  export declare class Convert_GridPolynomialToPoles_2 extends Convert_GridPolynomialToPoles {
    constructor(NbUSurfaces: Standard_Integer, NBVSurfaces: Standard_Integer, UContinuity: Standard_Integer, VContinuity: Standard_Integer, MaxUDegree: Standard_Integer, MaxVDegree: Standard_Integer, NumCoeffPerSurface: any, Coefficients: any, PolynomialUIntervals: any, PolynomialVIntervals: any, TrueUIntervals: any, TrueVIntervals: any);
  }

export declare class Convert_HyperbolaToBSplineCurve extends Convert_ConicToBSplineCurve {
  constructor(H: gp_Hypr2d, U1: Standard_Real, U2: Standard_Real)
}

export declare class Convert_ParabolaToBSplineCurve extends Convert_ConicToBSplineCurve {
  constructor(Prb: gp_Parab2d, U1: Standard_Real, U2: Standard_Real)
}

export declare class Convert_SphereToBSplineSurface extends Convert_ElementarySurfaceToBSplineSurface {
}

  export declare class Convert_SphereToBSplineSurface_1 extends Convert_SphereToBSplineSurface {
    constructor(Sph: gp_Sphere, U1: Standard_Real, U2: Standard_Real, V1: Standard_Real, V2: Standard_Real);
  }

  export declare class Convert_SphereToBSplineSurface_2 extends Convert_SphereToBSplineSurface {
    constructor(Sph: gp_Sphere, Param1: Standard_Real, Param2: Standard_Real, UTrim: Standard_Boolean);
  }

  export declare class Convert_SphereToBSplineSurface_3 extends Convert_SphereToBSplineSurface {
    constructor(Sph: gp_Sphere);
  }

export declare class Convert_TorusToBSplineSurface extends Convert_ElementarySurfaceToBSplineSurface {
}

  export declare class Convert_TorusToBSplineSurface_1 extends Convert_TorusToBSplineSurface {
    constructor(T: gp_Torus, U1: Standard_Real, U2: Standard_Real, V1: Standard_Real, V2: Standard_Real);
  }

  export declare class Convert_TorusToBSplineSurface_2 extends Convert_TorusToBSplineSurface {
    constructor(T: gp_Torus, Param1: Standard_Real, Param2: Standard_Real, UTrim: Standard_Boolean);
  }

  export declare class Convert_TorusToBSplineSurface_3 extends Convert_TorusToBSplineSurface {
    constructor(T: gp_Torus);
  }

export declare class ElCLib {
  constructor();
  InPeriod(U: Standard_Real, UFirst: Standard_Real, ULast: Standard_Real): Standard_Real;
  AdjustPeriodic(UFirst: Standard_Real, ULast: Standard_Real, Precision: Standard_Real, U1: Standard_Real, U2: Standard_Real): void;
  Value_1(U: Standard_Real, L: gp_Lin): gp_Pnt;
  Value_2(U: Standard_Real, C: gp_Circ): gp_Pnt;
  Value_3(U: Standard_Real, E: gp_Elips): gp_Pnt;
  Value_4(U: Standard_Real, H: gp_Hypr): gp_Pnt;
  Value_5(U: Standard_Real, Prb: gp_Parab): gp_Pnt;
  D1_1(U: Standard_Real, L: gp_Lin, P: gp_Pnt, V1: gp_Vec): void;
  D1_2(U: Standard_Real, C: gp_Circ, P: gp_Pnt, V1: gp_Vec): void;
  D1_3(U: Standard_Real, E: gp_Elips, P: gp_Pnt, V1: gp_Vec): void;
  D1_4(U: Standard_Real, H: gp_Hypr, P: gp_Pnt, V1: gp_Vec): void;
  D1_5(U: Standard_Real, Prb: gp_Parab, P: gp_Pnt, V1: gp_Vec): void;
  D2_1(U: Standard_Real, C: gp_Circ, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
  D2_2(U: Standard_Real, E: gp_Elips, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
  D2_3(U: Standard_Real, H: gp_Hypr, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
  D2_4(U: Standard_Real, Prb: gp_Parab, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
  D3_1(U: Standard_Real, C: gp_Circ, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec, V3: gp_Vec): void;
  D3_2(U: Standard_Real, E: gp_Elips, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec, V3: gp_Vec): void;
  D3_3(U: Standard_Real, H: gp_Hypr, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec, V3: gp_Vec): void;
  DN_1(U: Standard_Real, L: gp_Lin, N: Standard_Integer): gp_Vec;
  DN_2(U: Standard_Real, C: gp_Circ, N: Standard_Integer): gp_Vec;
  DN_3(U: Standard_Real, E: gp_Elips, N: Standard_Integer): gp_Vec;
  DN_4(U: Standard_Real, H: gp_Hypr, N: Standard_Integer): gp_Vec;
  DN_5(U: Standard_Real, Prb: gp_Parab, N: Standard_Integer): gp_Vec;
  Value_6(U: Standard_Real, L: gp_Lin2d): gp_Pnt2d;
  Value_7(U: Standard_Real, C: gp_Circ2d): gp_Pnt2d;
  Value_8(U: Standard_Real, E: gp_Elips2d): gp_Pnt2d;
  Value_9(U: Standard_Real, H: gp_Hypr2d): gp_Pnt2d;
  Value_10(U: Standard_Real, Prb: gp_Parab2d): gp_Pnt2d;
  D1_6(U: Standard_Real, L: gp_Lin2d, P: gp_Pnt2d, V1: gp_Vec2d): void;
  D1_7(U: Standard_Real, C: gp_Circ2d, P: gp_Pnt2d, V1: gp_Vec2d): void;
  D1_8(U: Standard_Real, E: gp_Elips2d, P: gp_Pnt2d, V1: gp_Vec2d): void;
  D1_9(U: Standard_Real, H: gp_Hypr2d, P: gp_Pnt2d, V1: gp_Vec2d): void;
  D1_10(U: Standard_Real, Prb: gp_Parab2d, P: gp_Pnt2d, V1: gp_Vec2d): void;
  D2_5(U: Standard_Real, C: gp_Circ2d, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d): void;
  D2_6(U: Standard_Real, E: gp_Elips2d, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d): void;
  D2_7(U: Standard_Real, H: gp_Hypr2d, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d): void;
  D2_8(U: Standard_Real, Prb: gp_Parab2d, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d): void;
  D3_4(U: Standard_Real, C: gp_Circ2d, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d, V3: gp_Vec2d): void;
  D3_5(U: Standard_Real, E: gp_Elips2d, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d, V3: gp_Vec2d): void;
  D3_6(U: Standard_Real, H: gp_Hypr2d, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d, V3: gp_Vec2d): void;
  DN_6(U: Standard_Real, L: gp_Lin2d, N: Standard_Integer): gp_Vec2d;
  DN_7(U: Standard_Real, C: gp_Circ2d, N: Standard_Integer): gp_Vec2d;
  DN_8(U: Standard_Real, E: gp_Elips2d, N: Standard_Integer): gp_Vec2d;
  DN_9(U: Standard_Real, H: gp_Hypr2d, N: Standard_Integer): gp_Vec2d;
  DN_10(U: Standard_Real, Prb: gp_Parab2d, N: Standard_Integer): gp_Vec2d;
  LineValue_1(U: Standard_Real, Pos: gp_Ax1): gp_Pnt;
  CircleValue_1(U: Standard_Real, Pos: gp_Ax2, Radius: Standard_Real): gp_Pnt;
  EllipseValue_1(U: Standard_Real, Pos: gp_Ax2, MajorRadius: Standard_Real, MinorRadius: Standard_Real): gp_Pnt;
  HyperbolaValue_1(U: Standard_Real, Pos: gp_Ax2, MajorRadius: Standard_Real, MinorRadius: Standard_Real): gp_Pnt;
  ParabolaValue_1(U: Standard_Real, Pos: gp_Ax2, Focal: Standard_Real): gp_Pnt;
  LineD1_1(U: Standard_Real, Pos: gp_Ax1, P: gp_Pnt, V1: gp_Vec): void;
  CircleD1_1(U: Standard_Real, Pos: gp_Ax2, Radius: Standard_Real, P: gp_Pnt, V1: gp_Vec): void;
  EllipseD1_1(U: Standard_Real, Pos: gp_Ax2, MajorRadius: Standard_Real, MinorRadius: Standard_Real, P: gp_Pnt, V1: gp_Vec): void;
  HyperbolaD1_1(U: Standard_Real, Pos: gp_Ax2, MajorRadius: Standard_Real, MinorRadius: Standard_Real, P: gp_Pnt, V1: gp_Vec): void;
  ParabolaD1_1(U: Standard_Real, Pos: gp_Ax2, Focal: Standard_Real, P: gp_Pnt, V1: gp_Vec): void;
  CircleD2_1(U: Standard_Real, Pos: gp_Ax2, Radius: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
  EllipseD2_1(U: Standard_Real, Pos: gp_Ax2, MajorRadius: Standard_Real, MinorRadius: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
  HyperbolaD2_1(U: Standard_Real, Pos: gp_Ax2, MajorRadius: Standard_Real, MinorRadius: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
  ParabolaD2_1(U: Standard_Real, Pos: gp_Ax2, Focal: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
  CircleD3_1(U: Standard_Real, Pos: gp_Ax2, Radius: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec, V3: gp_Vec): void;
  EllipseD3_1(U: Standard_Real, Pos: gp_Ax2, MajorRadius: Standard_Real, MinorRadius: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec, V3: gp_Vec): void;
  HyperbolaD3_1(U: Standard_Real, Pos: gp_Ax2, MajorRadius: Standard_Real, MinorRadius: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec, V3: gp_Vec): void;
  LineDN_1(U: Standard_Real, Pos: gp_Ax1, N: Standard_Integer): gp_Vec;
  CircleDN_1(U: Standard_Real, Pos: gp_Ax2, Radius: Standard_Real, N: Standard_Integer): gp_Vec;
  EllipseDN_1(U: Standard_Real, Pos: gp_Ax2, MajorRadius: Standard_Real, MinorRadius: Standard_Real, N: Standard_Integer): gp_Vec;
  HyperbolaDN_1(U: Standard_Real, Pos: gp_Ax2, MajorRadius: Standard_Real, MinorRadius: Standard_Real, N: Standard_Integer): gp_Vec;
  ParabolaDN_1(U: Standard_Real, Pos: gp_Ax2, Focal: Standard_Real, N: Standard_Integer): gp_Vec;
  LineValue_2(U: Standard_Real, Pos: gp_Ax2d): gp_Pnt2d;
  CircleValue_2(U: Standard_Real, Pos: gp_Ax22d, Radius: Standard_Real): gp_Pnt2d;
  EllipseValue_2(U: Standard_Real, Pos: gp_Ax22d, MajorRadius: Standard_Real, MinorRadius: Standard_Real): gp_Pnt2d;
  HyperbolaValue_2(U: Standard_Real, Pos: gp_Ax22d, MajorRadius: Standard_Real, MinorRadius: Standard_Real): gp_Pnt2d;
  ParabolaValue_2(U: Standard_Real, Pos: gp_Ax22d, Focal: Standard_Real): gp_Pnt2d;
  LineD1_2(U: Standard_Real, Pos: gp_Ax2d, P: gp_Pnt2d, V1: gp_Vec2d): void;
  CircleD1_2(U: Standard_Real, Pos: gp_Ax22d, Radius: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d): void;
  EllipseD1_2(U: Standard_Real, Pos: gp_Ax22d, MajorRadius: Standard_Real, MinorRadius: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d): void;
  HyperbolaD1_2(U: Standard_Real, Pos: gp_Ax22d, MajorRadius: Standard_Real, MinorRadius: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d): void;
  ParabolaD1_2(U: Standard_Real, Pos: gp_Ax22d, Focal: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d): void;
  CircleD2_2(U: Standard_Real, Pos: gp_Ax22d, Radius: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d): void;
  EllipseD2_2(U: Standard_Real, Pos: gp_Ax22d, MajorRadius: Standard_Real, MinorRadius: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d): void;
  HyperbolaD2_2(U: Standard_Real, Pos: gp_Ax22d, MajorRadius: Standard_Real, MinorRadius: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d): void;
  ParabolaD2_2(U: Standard_Real, Pos: gp_Ax22d, Focal: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d): void;
  CircleD3_2(U: Standard_Real, Pos: gp_Ax22d, Radius: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d, V3: gp_Vec2d): void;
  EllipseD3_2(U: Standard_Real, Pos: gp_Ax22d, MajorRadius: Standard_Real, MinorRadius: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d, V3: gp_Vec2d): void;
  HyperbolaD3_2(U: Standard_Real, Pos: gp_Ax22d, MajorRadius: Standard_Real, MinorRadius: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d, V3: gp_Vec2d): void;
  LineDN_2(U: Standard_Real, Pos: gp_Ax2d, N: Standard_Integer): gp_Vec2d;
  CircleDN_2(U: Standard_Real, Pos: gp_Ax22d, Radius: Standard_Real, N: Standard_Integer): gp_Vec2d;
  EllipseDN_2(U: Standard_Real, Pos: gp_Ax22d, MajorRadius: Standard_Real, MinorRadius: Standard_Real, N: Standard_Integer): gp_Vec2d;
  HyperbolaDN_2(U: Standard_Real, Pos: gp_Ax22d, MajorRadius: Standard_Real, MinorRadius: Standard_Real, N: Standard_Integer): gp_Vec2d;
  ParabolaDN_2(U: Standard_Real, Pos: gp_Ax22d, Focal: Standard_Real, N: Standard_Integer): gp_Vec2d;
  Parameter_1(L: gp_Lin, P: gp_Pnt): Standard_Real;
  Parameter_2(L: gp_Lin2d, P: gp_Pnt2d): Standard_Real;
  Parameter_3(C: gp_Circ, P: gp_Pnt): Standard_Real;
  Parameter_4(C: gp_Circ2d, P: gp_Pnt2d): Standard_Real;
  Parameter_5(E: gp_Elips, P: gp_Pnt): Standard_Real;
  Parameter_6(E: gp_Elips2d, P: gp_Pnt2d): Standard_Real;
  Parameter_7(H: gp_Hypr, P: gp_Pnt): Standard_Real;
  Parameter_8(H: gp_Hypr2d, P: gp_Pnt2d): Standard_Real;
  Parameter_9(Prb: gp_Parab, P: gp_Pnt): Standard_Real;
  Parameter_10(Prb: gp_Parab2d, P: gp_Pnt2d): Standard_Real;
  LineParameter_1(Pos: gp_Ax1, P: gp_Pnt): Standard_Real;
  LineParameter_2(Pos: gp_Ax2d, P: gp_Pnt2d): Standard_Real;
  CircleParameter_1(Pos: gp_Ax2, P: gp_Pnt): Standard_Real;
  CircleParameter_2(Pos: gp_Ax22d, P: gp_Pnt2d): Standard_Real;
  EllipseParameter_1(Pos: gp_Ax2, MajorRadius: Standard_Real, MinorRadius: Standard_Real, P: gp_Pnt): Standard_Real;
  EllipseParameter_2(Pos: gp_Ax22d, MajorRadius: Standard_Real, MinorRadius: Standard_Real, P: gp_Pnt2d): Standard_Real;
  HyperbolaParameter_1(Pos: gp_Ax2, MajorRadius: Standard_Real, MinorRadius: Standard_Real, P: gp_Pnt): Standard_Real;
  HyperbolaParameter_2(Pos: gp_Ax22d, MajorRadius: Standard_Real, MinorRadius: Standard_Real, P: gp_Pnt2d): Standard_Real;
  ParabolaParameter_1(Pos: gp_Ax2, P: gp_Pnt): Standard_Real;
  ParabolaParameter_2(Pos: gp_Ax22d, P: gp_Pnt2d): Standard_Real;
  To3d_1(Pos: gp_Ax2, P: gp_Pnt2d): gp_Pnt;
  To3d_2(Pos: gp_Ax2, V: gp_Vec2d): gp_Vec;
  To3d_3(Pos: gp_Ax2, V: gp_Dir2d): gp_Dir;
  To3d_4(Pos: gp_Ax2, A: gp_Ax2d): gp_Ax1;
  To3d_5(Pos: gp_Ax2, A: gp_Ax22d): gp_Ax2;
  To3d_6(Pos: gp_Ax2, L: gp_Lin2d): gp_Lin;
  To3d_7(Pos: gp_Ax2, C: gp_Circ2d): gp_Circ;
  To3d_8(Pos: gp_Ax2, E: gp_Elips2d): gp_Elips;
  To3d_9(Pos: gp_Ax2, H: gp_Hypr2d): gp_Hypr;
  To3d_10(Pos: gp_Ax2, Prb: gp_Parab2d): gp_Parab;
}

export declare class ElSLib {
  constructor();
  Value_1(U: Standard_Real, V: Standard_Real, Pl: gp_Pln): gp_Pnt;
  Value_2(U: Standard_Real, V: Standard_Real, C: gp_Cone): gp_Pnt;
  Value_3(U: Standard_Real, V: Standard_Real, C: gp_Cylinder): gp_Pnt;
  Value_4(U: Standard_Real, V: Standard_Real, S: gp_Sphere): gp_Pnt;
  Value_5(U: Standard_Real, V: Standard_Real, T: gp_Torus): gp_Pnt;
  DN_1(U: Standard_Real, V: Standard_Real, Pl: gp_Pln, Nu: Standard_Integer, Nv: Standard_Integer): gp_Vec;
  DN_2(U: Standard_Real, V: Standard_Real, C: gp_Cone, Nu: Standard_Integer, Nv: Standard_Integer): gp_Vec;
  DN_3(U: Standard_Real, V: Standard_Real, C: gp_Cylinder, Nu: Standard_Integer, Nv: Standard_Integer): gp_Vec;
  DN_4(U: Standard_Real, V: Standard_Real, S: gp_Sphere, Nu: Standard_Integer, Nv: Standard_Integer): gp_Vec;
  DN_5(U: Standard_Real, V: Standard_Real, T: gp_Torus, Nu: Standard_Integer, Nv: Standard_Integer): gp_Vec;
  D0_1(U: Standard_Real, V: Standard_Real, Pl: gp_Pln, P: gp_Pnt): void;
  D0_2(U: Standard_Real, V: Standard_Real, C: gp_Cone, P: gp_Pnt): void;
  D0_3(U: Standard_Real, V: Standard_Real, C: gp_Cylinder, P: gp_Pnt): void;
  D0_4(U: Standard_Real, V: Standard_Real, S: gp_Sphere, P: gp_Pnt): void;
  D0_5(U: Standard_Real, V: Standard_Real, T: gp_Torus, P: gp_Pnt): void;
  D1_1(U: Standard_Real, V: Standard_Real, Pl: gp_Pln, P: gp_Pnt, Vu: gp_Vec, Vv: gp_Vec): void;
  D1_2(U: Standard_Real, V: Standard_Real, C: gp_Cone, P: gp_Pnt, Vu: gp_Vec, Vv: gp_Vec): void;
  D1_3(U: Standard_Real, V: Standard_Real, C: gp_Cylinder, P: gp_Pnt, Vu: gp_Vec, Vv: gp_Vec): void;
  D1_4(U: Standard_Real, V: Standard_Real, S: gp_Sphere, P: gp_Pnt, Vu: gp_Vec, Vv: gp_Vec): void;
  D1_5(U: Standard_Real, V: Standard_Real, T: gp_Torus, P: gp_Pnt, Vu: gp_Vec, Vv: gp_Vec): void;
  D2_1(U: Standard_Real, V: Standard_Real, C: gp_Cone, P: gp_Pnt, Vu: gp_Vec, Vv: gp_Vec, Vuu: gp_Vec, Vvv: gp_Vec, Vuv: gp_Vec): void;
  D2_2(U: Standard_Real, V: Standard_Real, C: gp_Cylinder, P: gp_Pnt, Vu: gp_Vec, Vv: gp_Vec, Vuu: gp_Vec, Vvv: gp_Vec, Vuv: gp_Vec): void;
  D2_3(U: Standard_Real, V: Standard_Real, S: gp_Sphere, P: gp_Pnt, Vu: gp_Vec, Vv: gp_Vec, Vuu: gp_Vec, Vvv: gp_Vec, Vuv: gp_Vec): void;
  D2_4(U: Standard_Real, V: Standard_Real, T: gp_Torus, P: gp_Pnt, Vu: gp_Vec, Vv: gp_Vec, Vuu: gp_Vec, Vvv: gp_Vec, Vuv: gp_Vec): void;
  D3_1(U: Standard_Real, V: Standard_Real, C: gp_Cone, P: gp_Pnt, Vu: gp_Vec, Vv: gp_Vec, Vuu: gp_Vec, Vvv: gp_Vec, Vuv: gp_Vec, Vuuu: gp_Vec, Vvvv: gp_Vec, Vuuv: gp_Vec, Vuvv: gp_Vec): void;
  D3_2(U: Standard_Real, V: Standard_Real, C: gp_Cylinder, P: gp_Pnt, Vu: gp_Vec, Vv: gp_Vec, Vuu: gp_Vec, Vvv: gp_Vec, Vuv: gp_Vec, Vuuu: gp_Vec, Vvvv: gp_Vec, Vuuv: gp_Vec, Vuvv: gp_Vec): void;
  D3_3(U: Standard_Real, V: Standard_Real, S: gp_Sphere, P: gp_Pnt, Vu: gp_Vec, Vv: gp_Vec, Vuu: gp_Vec, Vvv: gp_Vec, Vuv: gp_Vec, Vuuu: gp_Vec, Vvvv: gp_Vec, Vuuv: gp_Vec, Vuvv: gp_Vec): void;
  D3_4(U: Standard_Real, V: Standard_Real, T: gp_Torus, P: gp_Pnt, Vu: gp_Vec, Vv: gp_Vec, Vuu: gp_Vec, Vvv: gp_Vec, Vuv: gp_Vec, Vuuu: gp_Vec, Vvvv: gp_Vec, Vuuv: gp_Vec, Vuvv: gp_Vec): void;
  PlaneValue(U: Standard_Real, V: Standard_Real, Pos: gp_Ax3): gp_Pnt;
  CylinderValue(U: Standard_Real, V: Standard_Real, Pos: gp_Ax3, Radius: Standard_Real): gp_Pnt;
  ConeValue(U: Standard_Real, V: Standard_Real, Pos: gp_Ax3, Radius: Standard_Real, SAngle: Standard_Real): gp_Pnt;
  SphereValue(U: Standard_Real, V: Standard_Real, Pos: gp_Ax3, Radius: Standard_Real): gp_Pnt;
  TorusValue(U: Standard_Real, V: Standard_Real, Pos: gp_Ax3, MajorRadius: Standard_Real, MinorRadius: Standard_Real): gp_Pnt;
  PlaneDN(U: Standard_Real, V: Standard_Real, Pos: gp_Ax3, Nu: Standard_Integer, Nv: Standard_Integer): gp_Vec;
  CylinderDN(U: Standard_Real, V: Standard_Real, Pos: gp_Ax3, Radius: Standard_Real, Nu: Standard_Integer, Nv: Standard_Integer): gp_Vec;
  ConeDN(U: Standard_Real, V: Standard_Real, Pos: gp_Ax3, Radius: Standard_Real, SAngle: Standard_Real, Nu: Standard_Integer, Nv: Standard_Integer): gp_Vec;
  SphereDN(U: Standard_Real, V: Standard_Real, Pos: gp_Ax3, Radius: Standard_Real, Nu: Standard_Integer, Nv: Standard_Integer): gp_Vec;
  TorusDN(U: Standard_Real, V: Standard_Real, Pos: gp_Ax3, MajorRadius: Standard_Real, MinorRadius: Standard_Real, Nu: Standard_Integer, Nv: Standard_Integer): gp_Vec;
  PlaneD0(U: Standard_Real, V: Standard_Real, Pos: gp_Ax3, P: gp_Pnt): void;
  ConeD0(U: Standard_Real, V: Standard_Real, Pos: gp_Ax3, Radius: Standard_Real, SAngle: Standard_Real, P: gp_Pnt): void;
  CylinderD0(U: Standard_Real, V: Standard_Real, Pos: gp_Ax3, Radius: Standard_Real, P: gp_Pnt): void;
  SphereD0(U: Standard_Real, V: Standard_Real, Pos: gp_Ax3, Radius: Standard_Real, P: gp_Pnt): void;
  TorusD0(U: Standard_Real, V: Standard_Real, Pos: gp_Ax3, MajorRadius: Standard_Real, MinorRadius: Standard_Real, P: gp_Pnt): void;
  PlaneD1(U: Standard_Real, V: Standard_Real, Pos: gp_Ax3, P: gp_Pnt, Vu: gp_Vec, Vv: gp_Vec): void;
  ConeD1(U: Standard_Real, V: Standard_Real, Pos: gp_Ax3, Radius: Standard_Real, SAngle: Standard_Real, P: gp_Pnt, Vu: gp_Vec, Vv: gp_Vec): void;
  CylinderD1(U: Standard_Real, V: Standard_Real, Pos: gp_Ax3, Radius: Standard_Real, P: gp_Pnt, Vu: gp_Vec, Vv: gp_Vec): void;
  SphereD1(U: Standard_Real, V: Standard_Real, Pos: gp_Ax3, Radius: Standard_Real, P: gp_Pnt, Vu: gp_Vec, Vv: gp_Vec): void;
  TorusD1(U: Standard_Real, V: Standard_Real, Pos: gp_Ax3, MajorRadius: Standard_Real, MinorRadius: Standard_Real, P: gp_Pnt, Vu: gp_Vec, Vv: gp_Vec): void;
  ConeD2(U: Standard_Real, V: Standard_Real, Pos: gp_Ax3, Radius: Standard_Real, SAngle: Standard_Real, P: gp_Pnt, Vu: gp_Vec, Vv: gp_Vec, Vuu: gp_Vec, Vvv: gp_Vec, Vuv: gp_Vec): void;
  CylinderD2(U: Standard_Real, V: Standard_Real, Pos: gp_Ax3, Radius: Standard_Real, P: gp_Pnt, Vu: gp_Vec, Vv: gp_Vec, Vuu: gp_Vec, Vvv: gp_Vec, Vuv: gp_Vec): void;
  SphereD2(U: Standard_Real, V: Standard_Real, Pos: gp_Ax3, Radius: Standard_Real, P: gp_Pnt, Vu: gp_Vec, Vv: gp_Vec, Vuu: gp_Vec, Vvv: gp_Vec, Vuv: gp_Vec): void;
  TorusD2(U: Standard_Real, V: Standard_Real, Pos: gp_Ax3, MajorRadius: Standard_Real, MinorRadius: Standard_Real, P: gp_Pnt, Vu: gp_Vec, Vv: gp_Vec, Vuu: gp_Vec, Vvv: gp_Vec, Vuv: gp_Vec): void;
  ConeD3(U: Standard_Real, V: Standard_Real, Pos: gp_Ax3, Radius: Standard_Real, SAngle: Standard_Real, P: gp_Pnt, Vu: gp_Vec, Vv: gp_Vec, Vuu: gp_Vec, Vvv: gp_Vec, Vuv: gp_Vec, Vuuu: gp_Vec, Vvvv: gp_Vec, Vuuv: gp_Vec, Vuvv: gp_Vec): void;
  CylinderD3(U: Standard_Real, V: Standard_Real, Pos: gp_Ax3, Radius: Standard_Real, P: gp_Pnt, Vu: gp_Vec, Vv: gp_Vec, Vuu: gp_Vec, Vvv: gp_Vec, Vuv: gp_Vec, Vuuu: gp_Vec, Vvvv: gp_Vec, Vuuv: gp_Vec, Vuvv: gp_Vec): void;
  SphereD3(U: Standard_Real, V: Standard_Real, Pos: gp_Ax3, Radius: Standard_Real, P: gp_Pnt, Vu: gp_Vec, Vv: gp_Vec, Vuu: gp_Vec, Vvv: gp_Vec, Vuv: gp_Vec, Vuuu: gp_Vec, Vvvv: gp_Vec, Vuuv: gp_Vec, Vuvv: gp_Vec): void;
  TorusD3(U: Standard_Real, V: Standard_Real, Pos: gp_Ax3, MajorRadius: Standard_Real, MinorRadius: Standard_Real, P: gp_Pnt, Vu: gp_Vec, Vv: gp_Vec, Vuu: gp_Vec, Vvv: gp_Vec, Vuv: gp_Vec, Vuuu: gp_Vec, Vvvv: gp_Vec, Vuuv: gp_Vec, Vuvv: gp_Vec): void;
  Parameters_1(Pl: gp_Pln, P: gp_Pnt, U: Standard_Real, V: Standard_Real): void;
  Parameters_2(C: gp_Cylinder, P: gp_Pnt, U: Standard_Real, V: Standard_Real): void;
  Parameters_3(C: gp_Cone, P: gp_Pnt, U: Standard_Real, V: Standard_Real): void;
  Parameters_4(S: gp_Sphere, P: gp_Pnt, U: Standard_Real, V: Standard_Real): void;
  Parameters_5(T: gp_Torus, P: gp_Pnt, U: Standard_Real, V: Standard_Real): void;
  PlaneParameters(Pos: gp_Ax3, P: gp_Pnt, U: Standard_Real, V: Standard_Real): void;
  CylinderParameters(Pos: gp_Ax3, Radius: Standard_Real, P: gp_Pnt, U: Standard_Real, V: Standard_Real): void;
  ConeParameters(Pos: gp_Ax3, Radius: Standard_Real, SAngle: Standard_Real, P: gp_Pnt, U: Standard_Real, V: Standard_Real): void;
  SphereParameters(Pos: gp_Ax3, Radius: Standard_Real, P: gp_Pnt, U: Standard_Real, V: Standard_Real): void;
  TorusParameters(Pos: gp_Ax3, MajorRadius: Standard_Real, MinorRadius: Standard_Real, P: gp_Pnt, U: Standard_Real, V: Standard_Real): void;
  PlaneUIso(Pos: gp_Ax3, U: Standard_Real): gp_Lin;
  CylinderUIso(Pos: gp_Ax3, Radius: Standard_Real, U: Standard_Real): gp_Lin;
  ConeUIso(Pos: gp_Ax3, Radius: Standard_Real, SAngle: Standard_Real, U: Standard_Real): gp_Lin;
  SphereUIso(Pos: gp_Ax3, Radius: Standard_Real, U: Standard_Real): gp_Circ;
  TorusUIso(Pos: gp_Ax3, MajorRadius: Standard_Real, MinorRadius: Standard_Real, U: Standard_Real): gp_Circ;
  PlaneVIso(Pos: gp_Ax3, V: Standard_Real): gp_Lin;
  CylinderVIso(Pos: gp_Ax3, Radius: Standard_Real, V: Standard_Real): gp_Circ;
  ConeVIso(Pos: gp_Ax3, Radius: Standard_Real, SAngle: Standard_Real, V: Standard_Real): gp_Circ;
  SphereVIso(Pos: gp_Ax3, Radius: Standard_Real, V: Standard_Real): gp_Circ;
  TorusVIso(Pos: gp_Ax3, MajorRadius: Standard_Real, MinorRadius: Standard_Real, V: Standard_Real): gp_Circ;
}

export declare class Expr {
  constructor();
  CopyShare(exp: any): any;
  NbOfFreeVariables_1(exp: any): Standard_Integer;
  NbOfFreeVariables_2(exp: any): Standard_Integer;
  Sign(val: Standard_Real): Standard_Real;
}

export declare class Expr_GeneralExpression extends Standard_Transient {
  NbSubExpressions(): Standard_Integer;
  SubExpression(I: Standard_Integer): any;
  Simplified(): any;
  ShallowSimplified(): any;
  Copy(): any;
  ContainsUnknowns(): Standard_Boolean;
  Contains(exp: any): Standard_Boolean;
  IsLinear(): Standard_Boolean;
  IsShareable(): Standard_Boolean;
  IsIdentical(Other: any): Standard_Boolean;
  Derivative(X: any): any;
  NDerivative(X: any, N: Standard_Integer): any;
  Replace(var_: any, with_: any): void;
  Evaluate(vars: Expr_Array1OfNamedUnknown, vals: TColStd_Array1OfReal): Standard_Real;
  EvaluateNumeric(): Standard_Real;
  String(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Expr_UnaryExpression extends Expr_GeneralExpression {
  Operand(): any;
  SetOperand(exp: any): void;
  NbSubExpressions(): Standard_Integer;
  SubExpression(I: Standard_Integer): any;
  ContainsUnknowns(): Standard_Boolean;
  Contains(exp: any): Standard_Boolean;
  Replace(var_: any, with_: any): void;
  Simplified(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Expr_Absolute extends Expr_UnaryExpression {
  constructor(exp: any)
  ShallowSimplified(): any;
  Copy(): any;
  IsIdentical(Other: any): Standard_Boolean;
  IsLinear(): Standard_Boolean;
  Derivative(X: any): any;
  Evaluate(vars: Expr_Array1OfNamedUnknown, vals: TColStd_Array1OfReal): Standard_Real;
  String(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Expr_ArcCosine extends Expr_UnaryExpression {
  constructor(exp: any)
  ShallowSimplified(): any;
  Copy(): any;
  IsIdentical(Other: any): Standard_Boolean;
  IsLinear(): Standard_Boolean;
  Derivative(X: any): any;
  Evaluate(vars: Expr_Array1OfNamedUnknown, vals: TColStd_Array1OfReal): Standard_Real;
  String(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Expr_ArcSine extends Expr_UnaryExpression {
  constructor(exp: any)
  ShallowSimplified(): any;
  Copy(): any;
  IsIdentical(Other: any): Standard_Boolean;
  IsLinear(): Standard_Boolean;
  Derivative(X: any): any;
  Evaluate(vars: Expr_Array1OfNamedUnknown, vals: TColStd_Array1OfReal): Standard_Real;
  String(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Expr_ArcTangent extends Expr_UnaryExpression {
  constructor(exp: any)
  ShallowSimplified(): any;
  Copy(): any;
  IsIdentical(Other: any): Standard_Boolean;
  IsLinear(): Standard_Boolean;
  Derivative(X: any): any;
  Evaluate(vars: Expr_Array1OfNamedUnknown, vals: TColStd_Array1OfReal): Standard_Real;
  String(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Expr_ArgCosh extends Expr_UnaryExpression {
  constructor(exp: any)
  ShallowSimplified(): any;
  Copy(): any;
  IsIdentical(Other: any): Standard_Boolean;
  IsLinear(): Standard_Boolean;
  Derivative(X: any): any;
  Evaluate(vars: Expr_Array1OfNamedUnknown, vals: TColStd_Array1OfReal): Standard_Real;
  String(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Expr_ArgSinh extends Expr_UnaryExpression {
  constructor(exp: any)
  ShallowSimplified(): any;
  Copy(): any;
  IsIdentical(Other: any): Standard_Boolean;
  IsLinear(): Standard_Boolean;
  Derivative(X: any): any;
  Evaluate(vars: Expr_Array1OfNamedUnknown, vals: TColStd_Array1OfReal): Standard_Real;
  String(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Expr_ArgTanh extends Expr_UnaryExpression {
  constructor(exp: any)
  ShallowSimplified(): any;
  Copy(): any;
  IsIdentical(Other: any): Standard_Boolean;
  IsLinear(): Standard_Boolean;
  Derivative(X: any): any;
  Evaluate(vars: Expr_Array1OfNamedUnknown, vals: TColStd_Array1OfReal): Standard_Real;
  String(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Expr_GeneralRelation extends Standard_Transient {
  IsSatisfied(): Standard_Boolean;
  IsLinear(): Standard_Boolean;
  Simplified(): any;
  Simplify(): void;
  Copy(): any;
  NbOfSubRelations(): Standard_Integer;
  NbOfSingleRelations(): Standard_Integer;
  SubRelation(index: Standard_Integer): any;
  Contains(exp: any): Standard_Boolean;
  Replace(var_: any, with_: any): void;
  String(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Expr_SingleRelation extends Expr_GeneralRelation {
  SetFirstMember(exp: any): void;
  SetSecondMember(exp: any): void;
  FirstMember(): any;
  SecondMember(): any;
  IsLinear(): Standard_Boolean;
  NbOfSubRelations(): Standard_Integer;
  NbOfSingleRelations(): Standard_Integer;
  SubRelation(index: Standard_Integer): any;
  Contains(exp: any): Standard_Boolean;
  Replace(var_: any, with_: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Expr_BinaryExpression extends Expr_GeneralExpression {
  FirstOperand(): any;
  SecondOperand(): any;
  SetFirstOperand(exp: any): void;
  SetSecondOperand(exp: any): void;
  NbSubExpressions(): Standard_Integer;
  SubExpression(I: Standard_Integer): any;
  ContainsUnknowns(): Standard_Boolean;
  Contains(exp: any): Standard_Boolean;
  Replace(var_: any, with_: any): void;
  Simplified(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Expr_BinaryFunction extends Expr_BinaryExpression {
  constructor(func: any, exp1: any, exp2: any)
  Function(): any;
  ShallowSimplified(): any;
  Copy(): any;
  IsIdentical(Other: any): Standard_Boolean;
  IsLinear(): Standard_Boolean;
  Derivative(X: any): any;
  Evaluate(vars: Expr_Array1OfNamedUnknown, vals: TColStd_Array1OfReal): Standard_Real;
  String(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Expr_Cosh extends Expr_UnaryExpression {
  constructor(exp: any)
  ShallowSimplified(): any;
  Copy(): any;
  IsIdentical(Other: any): Standard_Boolean;
  IsLinear(): Standard_Boolean;
  Derivative(X: any): any;
  Evaluate(vars: Expr_Array1OfNamedUnknown, vals: TColStd_Array1OfReal): Standard_Real;
  String(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Expr_Cosine extends Expr_UnaryExpression {
  constructor(Exp: any)
  ShallowSimplified(): any;
  Copy(): any;
  IsIdentical(Other: any): Standard_Boolean;
  IsLinear(): Standard_Boolean;
  Derivative(X: any): any;
  Evaluate(vars: Expr_Array1OfNamedUnknown, vals: TColStd_Array1OfReal): Standard_Real;
  String(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Expr_Difference extends Expr_BinaryExpression {
  constructor(exp1: any, exp2: any)
  ShallowSimplified(): any;
  Copy(): any;
  IsIdentical(Other: any): Standard_Boolean;
  IsLinear(): Standard_Boolean;
  Derivative(X: any): any;
  NDerivative(X: any, N: Standard_Integer): any;
  Evaluate(vars: Expr_Array1OfNamedUnknown, vals: TColStd_Array1OfReal): Standard_Real;
  String(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Expr_Different extends Expr_SingleRelation {
  constructor(exp1: any, exp2: any)
  IsSatisfied(): Standard_Boolean;
  Simplified(): any;
  Simplify(): void;
  Copy(): any;
  String(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Expr_Division extends Expr_BinaryExpression {
  constructor(exp1: any, exp2: any)
  ShallowSimplified(): any;
  Copy(): any;
  IsIdentical(Other: any): Standard_Boolean;
  IsLinear(): Standard_Boolean;
  Derivative(X: any): any;
  Evaluate(vars: Expr_Array1OfNamedUnknown, vals: TColStd_Array1OfReal): Standard_Real;
  String(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Expr_Equal extends Expr_SingleRelation {
  constructor(exp1: any, exp2: any)
  IsSatisfied(): Standard_Boolean;
  Simplified(): any;
  Simplify(): void;
  Copy(): any;
  String(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Expr_Exponential extends Expr_UnaryExpression {
  constructor(exp: any)
  ShallowSimplified(): any;
  Copy(): any;
  IsIdentical(Other: any): Standard_Boolean;
  IsLinear(): Standard_Boolean;
  Derivative(X: any): any;
  Evaluate(vars: Expr_Array1OfNamedUnknown, vals: TColStd_Array1OfReal): Standard_Real;
  String(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Expr_Exponentiate extends Expr_BinaryExpression {
  constructor(exp1: any, exp2: any)
  ShallowSimplified(): any;
  Copy(): any;
  IsIdentical(Other: any): Standard_Boolean;
  IsLinear(): Standard_Boolean;
  Derivative(X: any): any;
  Evaluate(vars: Expr_Array1OfNamedUnknown, vals: TColStd_Array1OfReal): Standard_Real;
  String(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Expr_ExprFailure extends Standard_Failure {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Expr_ExprFailure_1 extends Expr_ExprFailure {
    constructor();
  }

  export declare class Expr_ExprFailure_2 extends Expr_ExprFailure {
    constructor(theMessage: Standard_CString);
  }

export declare class Expr_GeneralFunction extends Standard_Transient {
  NbOfVariables(): Standard_Integer;
  Variable(index: Standard_Integer): any;
  Copy(): any;
  Derivative_1(var_: any): any;
  Derivative_2(var_: any, deg: Standard_Integer): any;
  Evaluate(vars: Expr_Array1OfNamedUnknown, vals: TColStd_Array1OfReal): Standard_Real;
  IsIdentical(func: any): Standard_Boolean;
  IsLinearOnVariable(index: Standard_Integer): Standard_Boolean;
  GetStringName(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Expr_FunctionDerivative extends Expr_GeneralFunction {
  constructor(func: any, withX: any, deg: Standard_Integer)
  NbOfVariables(): Standard_Integer;
  Variable(index: Standard_Integer): any;
  Evaluate(vars: Expr_Array1OfNamedUnknown, values: TColStd_Array1OfReal): Standard_Real;
  Copy(): any;
  Derivative_1(var_: any): any;
  Derivative_2(var_: any, deg: Standard_Integer): any;
  IsIdentical(func: any): Standard_Boolean;
  IsLinearOnVariable(index: Standard_Integer): Standard_Boolean;
  Function(): any;
  Degree(): Standard_Integer;
  DerivVariable(): any;
  GetStringName(): TCollection_AsciiString;
  Expression(): any;
  UpdateExpression(): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Expr_GreaterThan extends Expr_SingleRelation {
  constructor(exp1: any, exp2: any)
  IsSatisfied(): Standard_Boolean;
  Simplified(): any;
  Simplify(): void;
  Copy(): any;
  String(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Expr_GreaterThanOrEqual extends Expr_SingleRelation {
  constructor(exp1: any, exp2: any)
  IsSatisfied(): Standard_Boolean;
  Simplified(): any;
  Simplify(): void;
  Copy(): any;
  String(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Expr_InvalidAssignment extends Expr_ExprFailure {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Expr_InvalidAssignment_1 extends Expr_InvalidAssignment {
    constructor();
  }

  export declare class Expr_InvalidAssignment_2 extends Expr_InvalidAssignment {
    constructor(theMessage: Standard_CString);
  }

export declare class Expr_InvalidFunction extends Expr_ExprFailure {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Expr_InvalidFunction_1 extends Expr_InvalidFunction {
    constructor();
  }

  export declare class Expr_InvalidFunction_2 extends Expr_InvalidFunction {
    constructor(theMessage: Standard_CString);
  }

export declare class Expr_InvalidOperand extends Expr_ExprFailure {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Expr_InvalidOperand_1 extends Expr_InvalidOperand {
    constructor();
  }

  export declare class Expr_InvalidOperand_2 extends Expr_InvalidOperand {
    constructor(theMessage: Standard_CString);
  }

export declare class Expr_LessThan extends Expr_SingleRelation {
  constructor(exp1: any, exp2: any)
  IsSatisfied(): Standard_Boolean;
  Simplified(): any;
  Simplify(): void;
  Copy(): any;
  String(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Expr_LessThanOrEqual extends Expr_SingleRelation {
  constructor(exp1: any, exp2: any)
  IsSatisfied(): Standard_Boolean;
  Simplified(): any;
  Simplify(): void;
  Copy(): any;
  String(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Expr_LogOf10 extends Expr_UnaryExpression {
  constructor(exp: any)
  ShallowSimplified(): any;
  Copy(): any;
  IsIdentical(Other: any): Standard_Boolean;
  IsLinear(): Standard_Boolean;
  Derivative(X: any): any;
  Evaluate(vars: Expr_Array1OfNamedUnknown, vals: TColStd_Array1OfReal): Standard_Real;
  String(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Expr_LogOfe extends Expr_UnaryExpression {
  constructor(exp: any)
  ShallowSimplified(): any;
  Copy(): any;
  IsIdentical(Other: any): Standard_Boolean;
  IsLinear(): Standard_Boolean;
  Derivative(X: any): any;
  Evaluate(vars: Expr_Array1OfNamedUnknown, vals: TColStd_Array1OfReal): Standard_Real;
  String(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Expr_NamedExpression extends Expr_GeneralExpression {
  GetName(): TCollection_AsciiString;
  SetName(name: TCollection_AsciiString): void;
  IsShareable(): Standard_Boolean;
  IsIdentical(Other: any): Standard_Boolean;
  String(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Expr_NamedUnknown extends Expr_NamedExpression {
  constructor(name: TCollection_AsciiString)
  IsAssigned(): Standard_Boolean;
  AssignedExpression(): any;
  Assign(exp: any): void;
  Deassign(): void;
  NbSubExpressions(): Standard_Integer;
  SubExpression(I: Standard_Integer): any;
  Simplified(): any;
  ShallowSimplified(): any;
  Copy(): any;
  ContainsUnknowns(): Standard_Boolean;
  Contains(exp: any): Standard_Boolean;
  IsLinear(): Standard_Boolean;
  Derivative(X: any): any;
  Replace(var_: any, with_: any): void;
  Evaluate(vars: Expr_Array1OfNamedUnknown, vals: TColStd_Array1OfReal): Standard_Real;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Expr_NamedConstant extends Expr_NamedExpression {
  constructor(name: TCollection_AsciiString, value: Standard_Real)
  GetValue(): Standard_Real;
  NbSubExpressions(): Standard_Integer;
  SubExpression(I: Standard_Integer): any;
  Simplified(): any;
  ShallowSimplified(): any;
  Copy(): any;
  ContainsUnknowns(): Standard_Boolean;
  Contains(exp: any): Standard_Boolean;
  IsLinear(): Standard_Boolean;
  Derivative(X: any): any;
  NDerivative(X: any, N: Standard_Integer): any;
  Replace(var_: any, with_: any): void;
  Evaluate(vars: Expr_Array1OfNamedUnknown, vals: TColStd_Array1OfReal): Standard_Real;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Expr_NamedFunction extends Expr_GeneralFunction {
  constructor(name: TCollection_AsciiString, exp: any, vars: Expr_Array1OfNamedUnknown)
  SetName(newname: TCollection_AsciiString): void;
  GetName(): TCollection_AsciiString;
  NbOfVariables(): Standard_Integer;
  Variable(index: Standard_Integer): any;
  Evaluate(vars: Expr_Array1OfNamedUnknown, values: TColStd_Array1OfReal): Standard_Real;
  Copy(): any;
  Derivative_1(var_: any): any;
  Derivative_2(var_: any, deg: Standard_Integer): any;
  IsIdentical(func: any): Standard_Boolean;
  IsLinearOnVariable(index: Standard_Integer): Standard_Boolean;
  GetStringName(): TCollection_AsciiString;
  Expression(): any;
  SetExpression(exp: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Expr_NotAssigned extends Expr_ExprFailure {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Expr_NotAssigned_1 extends Expr_NotAssigned {
    constructor();
  }

  export declare class Expr_NotAssigned_2 extends Expr_NotAssigned {
    constructor(theMessage: Standard_CString);
  }

export declare class Expr_NotEvaluable extends Expr_ExprFailure {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Expr_NotEvaluable_1 extends Expr_NotEvaluable {
    constructor();
  }

  export declare class Expr_NotEvaluable_2 extends Expr_NotEvaluable {
    constructor(theMessage: Standard_CString);
  }

export declare class Expr_NumericValue extends Expr_GeneralExpression {
  constructor(val: Standard_Real)
  GetValue(): Standard_Real;
  SetValue(val: Standard_Real): void;
  NbSubExpressions(): Standard_Integer;
  SubExpression(I: Standard_Integer): any;
  Simplified(): any;
  ShallowSimplified(): any;
  Copy(): any;
  ContainsUnknowns(): Standard_Boolean;
  Contains(exp: any): Standard_Boolean;
  IsIdentical(Other: any): Standard_Boolean;
  IsLinear(): Standard_Boolean;
  Derivative(X: any): any;
  NDerivative(X: any, N: Standard_Integer): any;
  Replace(var_: any, with_: any): void;
  Evaluate(vars: Expr_Array1OfNamedUnknown, vals: TColStd_Array1OfReal): Standard_Real;
  String(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Expr_PolyExpression extends Expr_GeneralExpression {
  NbOperands(): Standard_Integer;
  Operand(index: Standard_Integer): any;
  SetOperand(exp: any, index: Standard_Integer): void;
  NbSubExpressions(): Standard_Integer;
  SubExpression(I: Standard_Integer): any;
  ContainsUnknowns(): Standard_Boolean;
  Contains(exp: any): Standard_Boolean;
  Replace(var_: any, with_: any): void;
  Simplified(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Expr_Sum extends Expr_PolyExpression {
  ShallowSimplified(): any;
  Copy(): any;
  IsIdentical(Other: any): Standard_Boolean;
  IsLinear(): Standard_Boolean;
  Derivative(X: any): any;
  NDerivative(X: any, N: Standard_Integer): any;
  Evaluate(vars: Expr_Array1OfNamedUnknown, vals: TColStd_Array1OfReal): Standard_Real;
  String(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Expr_Sum_1 extends Expr_Sum {
    constructor(exps: Expr_SequenceOfGeneralExpression);
  }

  export declare class Expr_Sum_2 extends Expr_Sum {
    constructor(exp1: any, exp2: any);
  }

export declare class Expr_UnaryMinus extends Expr_UnaryExpression {
  constructor(exp: any)
  ShallowSimplified(): any;
  Copy(): any;
  IsIdentical(Other: any): Standard_Boolean;
  IsLinear(): Standard_Boolean;
  Derivative(X: any): any;
  NDerivative(X: any, N: Standard_Integer): any;
  Evaluate(vars: Expr_Array1OfNamedUnknown, vals: TColStd_Array1OfReal): Standard_Real;
  String(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Expr_Product extends Expr_PolyExpression {
  ShallowSimplified(): any;
  Copy(): any;
  IsIdentical(Other: any): Standard_Boolean;
  IsLinear(): Standard_Boolean;
  Derivative(X: any): any;
  Evaluate(vars: Expr_Array1OfNamedUnknown, vals: TColStd_Array1OfReal): Standard_Real;
  String(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Expr_Product_1 extends Expr_Product {
    constructor(exps: Expr_SequenceOfGeneralExpression);
  }

  export declare class Expr_Product_2 extends Expr_Product {
    constructor(exp1: any, exp2: any);
  }

export declare class Expr_PolyFunction extends Expr_PolyExpression {
  constructor(func: any, exps: Expr_Array1OfGeneralExpression)
  Function(): any;
  ShallowSimplified(): any;
  Copy(): any;
  IsIdentical(Other: any): Standard_Boolean;
  IsLinear(): Standard_Boolean;
  Derivative(X: any): any;
  Evaluate(vars: Expr_Array1OfNamedUnknown, vals: TColStd_Array1OfReal): Standard_Real;
  String(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Expr_RUIterator {
  constructor(rel: any)
  More(): Standard_Boolean;
  Next(): void;
  Value(): any;
}

export declare class Expr_RelationIterator {
  constructor(rel: any)
  More(): Standard_Boolean;
  Next(): void;
  Value(): any;
}

export declare class Expr_Sign extends Expr_UnaryExpression {
  constructor(exp: any)
  ShallowSimplified(): any;
  Copy(): any;
  IsIdentical(Other: any): Standard_Boolean;
  IsLinear(): Standard_Boolean;
  Derivative(X: any): any;
  Evaluate(vars: Expr_Array1OfNamedUnknown, vals: TColStd_Array1OfReal): Standard_Real;
  String(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Expr_Sine extends Expr_UnaryExpression {
  constructor(exp: any)
  ShallowSimplified(): any;
  Copy(): any;
  IsIdentical(Other: any): Standard_Boolean;
  IsLinear(): Standard_Boolean;
  Derivative(X: any): any;
  Evaluate(vars: Expr_Array1OfNamedUnknown, vals: TColStd_Array1OfReal): Standard_Real;
  String(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Expr_Sinh extends Expr_UnaryExpression {
  constructor(exp: any)
  ShallowSimplified(): any;
  Copy(): any;
  IsIdentical(Other: any): Standard_Boolean;
  IsLinear(): Standard_Boolean;
  Derivative(X: any): any;
  Evaluate(vars: Expr_Array1OfNamedUnknown, vals: TColStd_Array1OfReal): Standard_Real;
  String(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Expr_Square extends Expr_UnaryExpression {
  constructor(exp: any)
  ShallowSimplified(): any;
  Copy(): any;
  IsIdentical(Other: any): Standard_Boolean;
  IsLinear(): Standard_Boolean;
  Derivative(X: any): any;
  Evaluate(vars: Expr_Array1OfNamedUnknown, vals: TColStd_Array1OfReal): Standard_Real;
  String(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Expr_SquareRoot extends Expr_UnaryExpression {
  constructor(exp: any)
  ShallowSimplified(): any;
  Copy(): any;
  IsIdentical(Other: any): Standard_Boolean;
  IsLinear(): Standard_Boolean;
  Derivative(X: any): any;
  Evaluate(vars: Expr_Array1OfNamedUnknown, vals: TColStd_Array1OfReal): Standard_Real;
  String(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Expr_SystemRelation extends Expr_GeneralRelation {
  constructor(relation: any)
  Add(relation: any): void;
  Remove(relation: any): void;
  IsLinear(): Standard_Boolean;
  NbOfSubRelations(): Standard_Integer;
  NbOfSingleRelations(): Standard_Integer;
  SubRelation(index: Standard_Integer): any;
  IsSatisfied(): Standard_Boolean;
  Simplified(): any;
  Simplify(): void;
  Copy(): any;
  Contains(exp: any): Standard_Boolean;
  Replace(var_: any, with_: any): void;
  String(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Expr_Tangent extends Expr_UnaryExpression {
  constructor(exp: any)
  ShallowSimplified(): any;
  Copy(): any;
  IsIdentical(Other: any): Standard_Boolean;
  IsLinear(): Standard_Boolean;
  Derivative(X: any): any;
  Evaluate(vars: Expr_Array1OfNamedUnknown, vals: TColStd_Array1OfReal): Standard_Real;
  String(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Expr_Tanh extends Expr_UnaryExpression {
  constructor(exp: any)
  ShallowSimplified(): any;
  Copy(): any;
  IsIdentical(Other: any): Standard_Boolean;
  IsLinear(): Standard_Boolean;
  Derivative(X: any): any;
  Evaluate(vars: Expr_Array1OfNamedUnknown, vals: TColStd_Array1OfReal): Standard_Real;
  String(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Expr_UnaryFunction extends Expr_UnaryExpression {
  constructor(func: any, exp: any)
  Function(): any;
  ShallowSimplified(): any;
  Copy(): any;
  IsIdentical(Other: any): Standard_Boolean;
  IsLinear(): Standard_Boolean;
  Derivative(X: any): any;
  Evaluate(vars: Expr_Array1OfNamedUnknown, vals: TColStd_Array1OfReal): Standard_Real;
  String(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Expr_UnknownIterator {
  constructor(exp: any)
  More(): Standard_Boolean;
  Next(): void;
  Value(): any;
}

export declare class ExprIntrp {
  constructor();
}

export declare class ExprIntrp_Analysis {
  constructor()
  SetMaster(agen: any): void;
  Push(exp: any): void;
  PushRelation(rel: any): void;
  PushName(name: TCollection_AsciiString): void;
  PushValue(degree: Standard_Integer): void;
  PushFunction(func: any): void;
  Pop(): any;
  PopRelation(): any;
  PopName(): TCollection_AsciiString;
  PopValue(): Standard_Integer;
  PopFunction(): any;
  IsExpStackEmpty(): Standard_Boolean;
  IsRelStackEmpty(): Standard_Boolean;
  ResetAll(): void;
  Use_1(func: any): void;
  Use_2(named: any): void;
  GetNamed(name: TCollection_AsciiString): any;
  GetFunction(name: TCollection_AsciiString): any;
}

export declare class ExprIntrp_Generator extends Standard_Transient {
  Use_1(func: any): void;
  Use_2(named: any): void;
  GetNamed_1(): ExprIntrp_SequenceOfNamedExpression;
  GetFunctions(): ExprIntrp_SequenceOfNamedFunction;
  GetNamed_2(name: TCollection_AsciiString): any;
  GetFunction(name: TCollection_AsciiString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class ExprIntrp_GenExp extends ExprIntrp_Generator {
  Create(): any;
  Process(str: TCollection_AsciiString): void;
  IsDone(): Standard_Boolean;
  Expression(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class ExprIntrp_GenFct extends ExprIntrp_Generator {
  Create(): any;
  Process(str: TCollection_AsciiString): void;
  IsDone(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class ExprIntrp_GenRel extends ExprIntrp_Generator {
  Create(): any;
  Process(str: TCollection_AsciiString): void;
  IsDone(): Standard_Boolean;
  Relation(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class ExprIntrp_SyntaxError extends Standard_Failure {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class ExprIntrp_SyntaxError_1 extends ExprIntrp_SyntaxError {
    constructor();
  }

  export declare class ExprIntrp_SyntaxError_2 extends ExprIntrp_SyntaxError {
    constructor(theMessage: Standard_CString);
  }

export declare class math_MultipleVarFunctionWithHessian extends math_MultipleVarFunctionWithGradient {
  NbVariables(): Standard_Integer;
  Value(X: math_Vector, F: Standard_Real): Standard_Boolean;
  Gradient(X: math_Vector, G: math_Vector): Standard_Boolean;
  Values_1(X: math_Vector, F: Standard_Real, G: math_Vector): Standard_Boolean;
  Values_2(X: math_Vector, F: Standard_Real, G: math_Vector, H: math_Matrix): Standard_Boolean;
}

export declare class math_FunctionSample {
  constructor(A: Standard_Real, B: Standard_Real, N: Standard_Integer)
  Bounds(A: Standard_Real, B: Standard_Real): void;
  NbPoints(): Standard_Integer;
  GetParameter(Index: Standard_Integer): Standard_Real;
}

export declare class math_DirectPolynomialRoots {
  IsDone(): Standard_Boolean;
  InfiniteRoots(): Standard_Boolean;
  NbSolutions(): Standard_Integer;
  Value(Nieme: Standard_Integer): Standard_Real;
  Dump(o: Standard_OStream): void;
}

  export declare class math_DirectPolynomialRoots_1 extends math_DirectPolynomialRoots {
    constructor(A: Standard_Real, B: Standard_Real, C: Standard_Real, D: Standard_Real, E: Standard_Real);
  }

  export declare class math_DirectPolynomialRoots_2 extends math_DirectPolynomialRoots {
    constructor(A: Standard_Real, B: Standard_Real, C: Standard_Real, D: Standard_Real);
  }

  export declare class math_DirectPolynomialRoots_3 extends math_DirectPolynomialRoots {
    constructor(A: Standard_Real, B: Standard_Real, C: Standard_Real);
  }

  export declare class math_DirectPolynomialRoots_4 extends math_DirectPolynomialRoots {
    constructor(A: Standard_Real, B: Standard_Real);
  }

export declare class math_TrigonometricFunctionRoots {
  IsDone(): Standard_Boolean;
  InfiniteRoots(): Standard_Boolean;
  Value(Index: Standard_Integer): Standard_Real;
  NbSolutions(): Standard_Integer;
  Dump(o: Standard_OStream): void;
}

  export declare class math_TrigonometricFunctionRoots_1 extends math_TrigonometricFunctionRoots {
    constructor(A: Standard_Real, B: Standard_Real, C: Standard_Real, D: Standard_Real, E: Standard_Real, InfBound: Standard_Real, SupBound: Standard_Real);
  }

  export declare class math_TrigonometricFunctionRoots_2 extends math_TrigonometricFunctionRoots {
    constructor(D: Standard_Real, E: Standard_Real, InfBound: Standard_Real, SupBound: Standard_Real);
  }

  export declare class math_TrigonometricFunctionRoots_3 extends math_TrigonometricFunctionRoots {
    constructor(C: Standard_Real, D: Standard_Real, E: Standard_Real, InfBound: Standard_Real, SupBound: Standard_Real);
  }

export declare class PLib_Base extends Standard_Transient {
  ToCoefficients(Dimension: Standard_Integer, Degree: Standard_Integer, CoeffinBase: TColStd_Array1OfReal, Coefficients: TColStd_Array1OfReal): void;
  D0(U: Standard_Real, BasisValue: TColStd_Array1OfReal): void;
  D1(U: Standard_Real, BasisValue: TColStd_Array1OfReal, BasisD1: TColStd_Array1OfReal): void;
  D2(U: Standard_Real, BasisValue: TColStd_Array1OfReal, BasisD1: TColStd_Array1OfReal, BasisD2: TColStd_Array1OfReal): void;
  D3(U: Standard_Real, BasisValue: TColStd_Array1OfReal, BasisD1: TColStd_Array1OfReal, BasisD2: TColStd_Array1OfReal, BasisD3: TColStd_Array1OfReal): void;
  WorkDegree(): Standard_Integer;
  ReduceDegree(Dimension: Standard_Integer, MaxDegree: Standard_Integer, Tol: Standard_Real, BaseCoeff: Standard_Real, NewDegree: Standard_Integer, MaxError: Standard_Real): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class PLib_DoubleJacobiPolynomial {
  MaxErrorU(Dimension: Standard_Integer, DegreeU: Standard_Integer, DegreeV: Standard_Integer, dJacCoeff: Standard_Integer, JacCoeff: TColStd_Array1OfReal): Standard_Real;
  MaxErrorV(Dimension: Standard_Integer, DegreeU: Standard_Integer, DegreeV: Standard_Integer, dJacCoeff: Standard_Integer, JacCoeff: TColStd_Array1OfReal): Standard_Real;
  MaxError(Dimension: Standard_Integer, MinDegreeU: Standard_Integer, MaxDegreeU: Standard_Integer, MinDegreeV: Standard_Integer, MaxDegreeV: Standard_Integer, dJacCoeff: Standard_Integer, JacCoeff: TColStd_Array1OfReal, Error: Standard_Real): Standard_Real;
  ReduceDegree(Dimension: Standard_Integer, MinDegreeU: Standard_Integer, MaxDegreeU: Standard_Integer, MinDegreeV: Standard_Integer, MaxDegreeV: Standard_Integer, dJacCoeff: Standard_Integer, JacCoeff: TColStd_Array1OfReal, EpmsCut: Standard_Real, MaxError: Standard_Real, NewDegreeU: Standard_Integer, NewDegreeV: Standard_Integer): void;
  AverageError(Dimension: Standard_Integer, DegreeU: Standard_Integer, DegreeV: Standard_Integer, dJacCoeff: Standard_Integer, JacCoeff: TColStd_Array1OfReal): Standard_Real;
  WDoubleJacobiToCoefficients(Dimension: Standard_Integer, DegreeU: Standard_Integer, DegreeV: Standard_Integer, JacCoeff: TColStd_Array1OfReal, Coefficients: TColStd_Array1OfReal): void;
  U(): any;
  V(): any;
  TabMaxU(): any;
  TabMaxV(): any;
}

  export declare class PLib_DoubleJacobiPolynomial_1 extends PLib_DoubleJacobiPolynomial {
    constructor();
  }

  export declare class PLib_DoubleJacobiPolynomial_2 extends PLib_DoubleJacobiPolynomial {
    constructor(JacPolU: any, JacPolV: any);
  }

export declare class PLib_HermitJacobi extends PLib_Base {
  constructor(WorkDegree: Standard_Integer, ConstraintOrder: GeomAbs_Shape)
  MaxError(Dimension: Standard_Integer, HermJacCoeff: Standard_Real, NewDegree: Standard_Integer): Standard_Real;
  ReduceDegree(Dimension: Standard_Integer, MaxDegree: Standard_Integer, Tol: Standard_Real, HermJacCoeff: Standard_Real, NewDegree: Standard_Integer, MaxError: Standard_Real): void;
  AverageError(Dimension: Standard_Integer, HermJacCoeff: Standard_Real, NewDegree: Standard_Integer): Standard_Real;
  ToCoefficients(Dimension: Standard_Integer, Degree: Standard_Integer, HermJacCoeff: TColStd_Array1OfReal, Coefficients: TColStd_Array1OfReal): void;
  D0(U: Standard_Real, BasisValue: TColStd_Array1OfReal): void;
  D1(U: Standard_Real, BasisValue: TColStd_Array1OfReal, BasisD1: TColStd_Array1OfReal): void;
  D2(U: Standard_Real, BasisValue: TColStd_Array1OfReal, BasisD1: TColStd_Array1OfReal, BasisD2: TColStd_Array1OfReal): void;
  D3(U: Standard_Real, BasisValue: TColStd_Array1OfReal, BasisD1: TColStd_Array1OfReal, BasisD2: TColStd_Array1OfReal, BasisD3: TColStd_Array1OfReal): void;
  WorkDegree(): Standard_Integer;
  NivConstr(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class PLib_JacobiPolynomial extends PLib_Base {
  constructor(WorkDegree: Standard_Integer, ConstraintOrder: GeomAbs_Shape)
  Points(NbGaussPoints: Standard_Integer, TabPoints: TColStd_Array1OfReal): void;
  Weights(NbGaussPoints: Standard_Integer, TabWeights: TColStd_Array2OfReal): void;
  MaxValue(TabMax: TColStd_Array1OfReal): void;
  MaxError(Dimension: Standard_Integer, JacCoeff: Standard_Real, NewDegree: Standard_Integer): Standard_Real;
  ReduceDegree(Dimension: Standard_Integer, MaxDegree: Standard_Integer, Tol: Standard_Real, JacCoeff: Standard_Real, NewDegree: Standard_Integer, MaxError: Standard_Real): void;
  AverageError(Dimension: Standard_Integer, JacCoeff: Standard_Real, NewDegree: Standard_Integer): Standard_Real;
  ToCoefficients(Dimension: Standard_Integer, Degree: Standard_Integer, JacCoeff: TColStd_Array1OfReal, Coefficients: TColStd_Array1OfReal): void;
  D0(U: Standard_Real, BasisValue: TColStd_Array1OfReal): void;
  D1(U: Standard_Real, BasisValue: TColStd_Array1OfReal, BasisD1: TColStd_Array1OfReal): void;
  D2(U: Standard_Real, BasisValue: TColStd_Array1OfReal, BasisD1: TColStd_Array1OfReal, BasisD2: TColStd_Array1OfReal): void;
  D3(U: Standard_Real, BasisValue: TColStd_Array1OfReal, BasisD1: TColStd_Array1OfReal, BasisD2: TColStd_Array1OfReal, BasisD3: TColStd_Array1OfReal): void;
  WorkDegree(): Standard_Integer;
  NivConstr(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Poly {
  constructor();
  Catenate(lstTri: Poly_ListOfTriangulation): any;
  Write_1(T: any, OS: Standard_OStream, Compact: Standard_Boolean): void;
  Write_2(P: any, OS: Standard_OStream, Compact: Standard_Boolean): void;
  Write_3(P: any, OS: Standard_OStream, Compact: Standard_Boolean): void;
  Dump_1(T: any, OS: Standard_OStream): void;
  Dump_2(P: any, OS: Standard_OStream): void;
  Dump_3(P: any, OS: Standard_OStream): void;
  ReadTriangulation(IS: Standard_IStream): any;
  ReadPolygon3D(IS: Standard_IStream): any;
  ReadPolygon2D(IS: Standard_IStream): any;
  ComputeNormals(Tri: any): void;
  PointOnTriangle(P1: gp_XY, P2: gp_XY, P3: gp_XY, P: gp_XY, UV: gp_XY): Standard_Real;
}

export declare class Poly_CoherentLink {
  Node(ind: Standard_Integer): Standard_Integer;
  OppositeNode(ind: Standard_Integer): Standard_Integer;
  GetAttribute(): Standard_Address;
  SetAttribute(theAtt: Standard_Address): void;
  IsEmpty(): Standard_Boolean;
  Nullify(): void;
}

  export declare class Poly_CoherentLink_1 extends Poly_CoherentLink {
    constructor();
  }

  export declare class Poly_CoherentLink_2 extends Poly_CoherentLink {
    constructor(iNode0: Standard_Integer, iNode1: Standard_Integer);
  }

  export declare class Poly_CoherentLink_3 extends Poly_CoherentLink {
    constructor(theTri: Poly_CoherentTriangle, iSide: Standard_Integer);
  }

export declare class Poly_CoherentNode extends gp_XYZ {
  SetUV(theU: Standard_Real, theV: Standard_Real): void;
  GetU(): Standard_Real;
  GetV(): Standard_Real;
  SetNormal(theVector: gp_XYZ): void;
  HasNormal(): Standard_Boolean;
  GetNormal(): gp_XYZ;
  SetIndex(theIndex: Standard_Integer): void;
  GetIndex(): Standard_Integer;
  IsFreeNode(): Standard_Boolean;
  Clear(a0: any): void;
  AddTriangle(theTri: Poly_CoherentTriangle, theA: any): void;
  RemoveTriangle(theTri: Poly_CoherentTriangle, theA: any): Standard_Boolean;
  TriangleIterator(): any;
  Dump(theStream: Standard_OStream): void;
}

  export declare class Poly_CoherentNode_1 extends Poly_CoherentNode {
    constructor();
  }

  export declare class Poly_CoherentNode_2 extends Poly_CoherentNode {
    constructor(thePnt: gp_XYZ);
  }

export declare class Poly_CoherentTriangle {
  Node(ind: Standard_Integer): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  SetConnection_1(iConn: Standard_Integer, theTr: Poly_CoherentTriangle): Standard_Boolean;
  SetConnection_2(theTri: Poly_CoherentTriangle): Standard_Boolean;
  RemoveConnection_1(iConn: Standard_Integer): void;
  RemoveConnection_2(theTri: Poly_CoherentTriangle): Standard_Boolean;
  NConnections(): Standard_Integer;
  GetConnectedNode(iConn: Standard_Integer): Standard_Integer;
  GetConnectedTri(iConn: Standard_Integer): Poly_CoherentTriangle;
  GetLink(iLink: Standard_Integer): Poly_CoherentLink;
  FindConnection(a0: Poly_CoherentTriangle): Standard_Integer;
}

  export declare class Poly_CoherentTriangle_1 extends Poly_CoherentTriangle {
    constructor();
  }

  export declare class Poly_CoherentTriangle_2 extends Poly_CoherentTriangle {
    constructor(iNode0: Standard_Integer, iNode1: Standard_Integer, iNode2: Standard_Integer);
  }

export declare class Poly_CoherentTriangulation extends Standard_Transient {
  GetTriangulation(): any;
  RemoveDegenerated(theTol: Standard_Real, pLstRemovedNode: any): Standard_Boolean;
  GetFreeNodes(lstNodes: NCollection_List<Standard_Integer>): Standard_Boolean;
  MaxNode(): Standard_Integer;
  MaxTriangle(): Standard_Integer;
  SetDeflection(theDefl: Standard_Real): void;
  Deflection(): Standard_Real;
  SetNode(thePnt: gp_XYZ, iN: Standard_Integer): Standard_Integer;
  Node(i: Standard_Integer): Poly_CoherentNode;
  ChangeNode(i: Standard_Integer): Poly_CoherentNode;
  NNodes(): Standard_Integer;
  Triangle(i: Standard_Integer): Poly_CoherentTriangle;
  NTriangles(): Standard_Integer;
  NLinks(): Standard_Integer;
  RemoveTriangle(theTr: Poly_CoherentTriangle): Standard_Boolean;
  RemoveLink(theLink: Poly_CoherentLink): void;
  AddTriangle(iNode0: Standard_Integer, iNode1: Standard_Integer, iNode2: Standard_Integer): Poly_CoherentTriangle;
  ReplaceNodes(theTriangle: Poly_CoherentTriangle, iNode0: Standard_Integer, iNode1: Standard_Integer, iNode2: Standard_Integer): Standard_Boolean;
  AddLink(theTri: Poly_CoherentTriangle, theConn: Standard_Integer): Poly_CoherentLink;
  FindTriangle(theLink: Poly_CoherentLink, pTri: Poly_CoherentTriangle [2]): Standard_Boolean;
  ComputeLinks(): Standard_Integer;
  ClearLinks(): void;
  Allocator(): any;
  Clone(theAlloc: any): any;
  Dump(a0: Standard_OStream): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Poly_CoherentTriangulation_1 extends Poly_CoherentTriangulation {
    constructor(theAlloc: any);
  }

  export declare class Poly_CoherentTriangulation_2 extends Poly_CoherentTriangulation {
    constructor(theTriangulation: any, theAlloc: any);
  }

export declare class Poly_Connect {
  Load(theTriangulation: any): void;
  Triangulation(): any;
  Triangle(N: Standard_Integer): Standard_Integer;
  Triangles(T: Standard_Integer, t1: Standard_Integer, t2: Standard_Integer, t3: Standard_Integer): void;
  Nodes(T: Standard_Integer, n1: Standard_Integer, n2: Standard_Integer, n3: Standard_Integer): void;
  Initialize(N: Standard_Integer): void;
  More(): Standard_Boolean;
  Next(): void;
  Value(): Standard_Integer;
}

  export declare class Poly_Connect_1 extends Poly_Connect {
    constructor();
  }

  export declare class Poly_Connect_2 extends Poly_Connect {
    constructor(theTriangulation: any);
  }

export declare class Poly_MakeLoops {
  Reset(theHelper: any, theAlloc: any): void;
  AddLink(theLink: any): void;
  ReplaceLink(theLink: any, theNewLink: any): void;
  SetLinkOrientation(theLink: any, theOrient: any): any;
  FindLink(theLink: any): any;
  Perform(): Standard_Integer;
  GetNbLoops(): Standard_Integer;
  GetLoop(theIndex: Standard_Integer): any;
  GetNbHanging(): Standard_Integer;
  GetHangingLinks(theLinks: any): void;
}

export declare class Poly_MakeLoops3D extends Poly_MakeLoops {
  constructor(theHelper: any, theAlloc: any)
}

export declare class Poly_MakeLoops2D extends Poly_MakeLoops {
  constructor(theLeftWay: Standard_Boolean, theHelper: any, theAlloc: any)
}

export declare class math_BullardGenerator {
  constructor(theSeed: number)
  SetSeed(theSeed: number): void;
  NextInt(): number;
  NextReal(): Standard_Real;
}

export declare class TopLoc_SListNodeOfItemLocation extends Standard_Transient {
  constructor(I: TopLoc_ItemLocation, aTail: TopLoc_SListOfItemLocation)
  Tail(): TopLoc_SListOfItemLocation;
  Value(): TopLoc_ItemLocation;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class gp_QuaternionSLerp {
  Interpolate_1(theQStart: gp_Quaternion, theQEnd: gp_Quaternion, theT: Standard_Real): gp_Quaternion;
  Init(theQStart: gp_Quaternion, theQEnd: gp_Quaternion): void;
  InitFromUnit(theQStart: gp_Quaternion, theQEnd: gp_Quaternion): void;
  Interpolate_2(theT: Standard_Real, theResultQ: gp_Quaternion): void;
}

  export declare class gp_QuaternionSLerp_1 extends gp_QuaternionSLerp {
    constructor();
  }

  export declare class gp_QuaternionSLerp_2 extends gp_QuaternionSLerp {
    constructor(theQStart: gp_Quaternion, theQEnd: gp_Quaternion);
  }

export declare class math {
  constructor();
  GaussPointsMax(): Standard_Integer;
  GaussPoints(Index: Standard_Integer, Points: math_Vector): void;
  GaussWeights(Index: Standard_Integer, Weights: math_Vector): void;
  KronrodPointsMax(): Standard_Integer;
  OrderedGaussPointsAndWeights(Index: Standard_Integer, Points: math_Vector, Weights: math_Vector): Standard_Boolean;
  KronrodPointsAndWeights(Index: Standard_Integer, Points: math_Vector, Weights: math_Vector): Standard_Boolean;
}

export declare class math_ValueAndWeight {
  Value(): Standard_Real;
  Weight(): Standard_Real;
}

  export declare class math_ValueAndWeight_1 extends math_ValueAndWeight {
    constructor();
  }

  export declare class math_ValueAndWeight_2 extends math_ValueAndWeight {
    constructor(theValue: Standard_Real, theWeight: Standard_Real);
  }

export declare class math_BissecNewton {
  constructor(theXTolerance: Standard_Real)
  Perform(F: math_FunctionWithDerivative, Bound1: Standard_Real, Bound2: Standard_Real, NbIterations: Standard_Integer): void;
  IsSolutionReached(theFunction: math_FunctionWithDerivative): Standard_Boolean;
  IsDone(): Standard_Boolean;
  Root(): Standard_Real;
  Derivative(): Standard_Real;
  Value(): Standard_Real;
  Dump(o: Standard_OStream): void;
}

export declare class math_BracketMinimum {
  SetLimits(theLeft: Standard_Real, theRight: Standard_Real): void;
  SetFA(theValue: Standard_Real): void;
  SetFB(theValue: Standard_Real): void;
  Perform(F: math_Function): void;
  IsDone(): Standard_Boolean;
  Values(A: Standard_Real, B: Standard_Real, C: Standard_Real): void;
  FunctionValues(FA: Standard_Real, FB: Standard_Real, FC: Standard_Real): void;
  Dump(o: Standard_OStream): void;
}

  export declare class math_BracketMinimum_1 extends math_BracketMinimum {
    constructor(A: Standard_Real, B: Standard_Real);
  }

  export declare class math_BracketMinimum_2 extends math_BracketMinimum {
    constructor(F: math_Function, A: Standard_Real, B: Standard_Real);
  }

  export declare class math_BracketMinimum_3 extends math_BracketMinimum {
    constructor(F: math_Function, A: Standard_Real, B: Standard_Real, FA: Standard_Real);
  }

  export declare class math_BracketMinimum_4 extends math_BracketMinimum {
    constructor(F: math_Function, A: Standard_Real, B: Standard_Real, FA: Standard_Real, FB: Standard_Real);
  }

export declare class math_BracketedRoot {
  constructor(F: math_Function, Bound1: Standard_Real, Bound2: Standard_Real, Tolerance: Standard_Real, NbIterations: Standard_Integer, ZEPS: Standard_Real)
  IsDone(): Standard_Boolean;
  Root(): Standard_Real;
  Value(): Standard_Real;
  NbIterations(): Standard_Integer;
  Dump(o: Standard_OStream): void;
}

export declare class math_BrentMinimum {
  Perform(F: math_Function, Ax: Standard_Real, Bx: Standard_Real, Cx: Standard_Real): void;
  IsSolutionReached(theFunction: math_Function): Standard_Boolean;
  IsDone(): Standard_Boolean;
  Location(): Standard_Real;
  Minimum(): Standard_Real;
  NbIterations(): Standard_Integer;
  Dump(o: Standard_OStream): void;
}

  export declare class math_BrentMinimum_1 extends math_BrentMinimum {
    constructor(TolX: Standard_Real, NbIterations: Standard_Integer, ZEPS: Standard_Real);
  }

  export declare class math_BrentMinimum_2 extends math_BrentMinimum {
    constructor(TolX: Standard_Real, Fbx: Standard_Real, NbIterations: Standard_Integer, ZEPS: Standard_Real);
  }

export declare class math_ComputeGaussPointsAndWeights {
  constructor(Number: Standard_Integer)
  IsDone(): Standard_Boolean;
  Points(): math_Vector;
  Weights(): math_Vector;
}

export declare class math_ComputeKronrodPointsAndWeights {
  constructor(Number: Standard_Integer)
  IsDone(): Standard_Boolean;
  Points(): math_Vector;
  Weights(): math_Vector;
}

export declare class math_Crout {
  constructor(A: math_Matrix, MinPivot: Standard_Real)
  IsDone(): Standard_Boolean;
  Solve(B: math_Vector, X: math_Vector): void;
  Inverse(): math_Matrix;
  Invert(Inv: math_Matrix): void;
  Determinant(): Standard_Real;
  Dump(o: Standard_OStream): void;
}

export declare class math_EigenValuesSearcher {
  constructor(Diagonal: TColStd_Array1OfReal, Subdiagonal: TColStd_Array1OfReal)
  IsDone(): Standard_Boolean;
  Dimension(): Standard_Integer;
  EigenValue(Index: Standard_Integer): Standard_Real;
  EigenVector(Index: Standard_Integer): math_Vector;
}

export declare class math_FRPR {
  constructor(theFunction: math_MultipleVarFunctionWithGradient, theTolerance: Standard_Real, theNbIterations: Standard_Integer, theZEPS: Standard_Real)
  Perform(theFunction: math_MultipleVarFunctionWithGradient, theStartingPoint: math_Vector): void;
  IsSolutionReached(theFunction: math_MultipleVarFunctionWithGradient): Standard_Boolean;
  IsDone(): Standard_Boolean;
  Location_1(): math_Vector;
  Location_2(Loc: math_Vector): void;
  Minimum(): Standard_Real;
  Gradient_1(): math_Vector;
  Gradient_2(Grad: math_Vector): void;
  NbIterations(): Standard_Integer;
  Dump(o: Standard_OStream): void;
}

export declare class math_FunctionAllRoots {
  constructor(F: math_FunctionWithDerivative, S: math_FunctionSample, EpsX: Standard_Real, EpsF: Standard_Real, EpsNul: Standard_Real)
  IsDone(): Standard_Boolean;
  NbIntervals(): Standard_Integer;
  GetInterval(Index: Standard_Integer, A: Standard_Real, B: Standard_Real): void;
  GetIntervalState(Index: Standard_Integer, IFirst: Standard_Integer, ILast: Standard_Integer): void;
  NbPoints(): Standard_Integer;
  GetPoint(Index: Standard_Integer): Standard_Real;
  GetPointState(Index: Standard_Integer): Standard_Integer;
  Dump(o: Standard_OStream): void;
}

export declare class math_FunctionRoot {
  IsDone(): Standard_Boolean;
  Root(): Standard_Real;
  Derivative(): Standard_Real;
  Value(): Standard_Real;
  NbIterations(): Standard_Integer;
  Dump(o: Standard_OStream): void;
}

  export declare class math_FunctionRoot_1 extends math_FunctionRoot {
    constructor(F: math_FunctionWithDerivative, Guess: Standard_Real, Tolerance: Standard_Real, NbIterations: Standard_Integer);
  }

  export declare class math_FunctionRoot_2 extends math_FunctionRoot {
    constructor(F: math_FunctionWithDerivative, Guess: Standard_Real, Tolerance: Standard_Real, A: Standard_Real, B: Standard_Real, NbIterations: Standard_Integer);
  }

export declare class math_FunctionRoots {
  constructor(F: math_FunctionWithDerivative, A: Standard_Real, B: Standard_Real, NbSample: Standard_Integer, EpsX: Standard_Real, EpsF: Standard_Real, EpsNull: Standard_Real, K: Standard_Real)
  IsDone(): Standard_Boolean;
  IsAllNull(): Standard_Boolean;
  NbSolutions(): Standard_Integer;
  Value(Nieme: Standard_Integer): Standard_Real;
  StateNumber(Nieme: Standard_Integer): Standard_Integer;
  Dump(o: Standard_OStream): void;
}

export declare class math_FunctionSetRoot {
  SetTolerance(Tolerance: math_Vector): void;
  IsSolutionReached(F: math_FunctionSetWithDerivatives): Standard_Boolean;
  Perform_1(theFunction: math_FunctionSetWithDerivatives, theStartingPoint: math_Vector, theStopOnDivergent: Standard_Boolean): void;
  Perform_2(theFunction: math_FunctionSetWithDerivatives, theStartingPoint: math_Vector, theInfBound: math_Vector, theSupBound: math_Vector, theStopOnDivergent: Standard_Boolean): void;
  IsDone(): Standard_Boolean;
  NbIterations(): Standard_Integer;
  StateNumber(): Standard_Integer;
  Root_1(): math_Vector;
  Root_2(Root: math_Vector): void;
  Derivative_1(): math_Matrix;
  Derivative_2(Der: math_Matrix): void;
  FunctionSetErrors_1(): math_Vector;
  FunctionSetErrors_2(Err: math_Vector): void;
  Dump(o: Standard_OStream): void;
  IsDivergent(): Standard_Boolean;
}

  export declare class math_FunctionSetRoot_1 extends math_FunctionSetRoot {
    constructor(F: math_FunctionSetWithDerivatives, Tolerance: math_Vector, NbIterations: Standard_Integer);
  }

  export declare class math_FunctionSetRoot_2 extends math_FunctionSetRoot {
    constructor(F: math_FunctionSetWithDerivatives, NbIterations: Standard_Integer);
  }

export declare class math_Gauss {
  constructor(A: math_Matrix, MinPivot: Standard_Real, theProgress: Message_ProgressRange)
  IsDone(): Standard_Boolean;
  Solve_1(B: math_Vector, X: math_Vector): void;
  Solve_2(B: math_Vector): void;
  Determinant(): Standard_Real;
  Invert(Inv: math_Matrix): void;
  Dump(o: Standard_OStream): void;
}

export declare class math_GaussLeastSquare {
  constructor(A: math_Matrix, MinPivot: Standard_Real)
  IsDone(): Standard_Boolean;
  Solve(B: math_Vector, X: math_Vector): void;
  Dump(o: Standard_OStream): void;
}

export declare class math_GaussMultipleIntegration {
  constructor(F: math_MultipleVarFunction, Lower: math_Vector, Upper: math_Vector, Order: math_IntegerVector)
  IsDone(): Standard_Boolean;
  Value(): Standard_Real;
  Dump(o: Standard_OStream): void;
}

export declare class math_GaussSetIntegration {
  constructor(F: math_FunctionSet, Lower: math_Vector, Upper: math_Vector, Order: math_IntegerVector)
  IsDone(): Standard_Boolean;
  Value(): math_Vector;
  Dump(o: Standard_OStream): void;
}

export declare class math_GaussSingleIntegration {
  IsDone(): Standard_Boolean;
  Value(): Standard_Real;
  Dump(o: Standard_OStream): void;
}

  export declare class math_GaussSingleIntegration_1 extends math_GaussSingleIntegration {
    constructor();
  }

  export declare class math_GaussSingleIntegration_2 extends math_GaussSingleIntegration {
    constructor(F: math_Function, Lower: Standard_Real, Upper: Standard_Real, Order: Standard_Integer);
  }

  export declare class math_GaussSingleIntegration_3 extends math_GaussSingleIntegration {
    constructor(F: math_Function, Lower: Standard_Real, Upper: Standard_Real, Order: Standard_Integer, Tol: Standard_Real);
  }

export declare class math_GlobOptMin {
  constructor(theFunc: math_MultipleVarFunction, theLowerBorder: math_Vector, theUpperBorder: math_Vector, theC: Standard_Real, theDiscretizationTol: Standard_Real, theSameTol: Standard_Real)
  SetGlobalParams(theFunc: math_MultipleVarFunction, theLowerBorder: math_Vector, theUpperBorder: math_Vector, theC: Standard_Real, theDiscretizationTol: Standard_Real, theSameTol: Standard_Real): void;
  SetLocalParams(theLocalA: math_Vector, theLocalB: math_Vector): void;
  SetTol(theDiscretizationTol: Standard_Real, theSameTol: Standard_Real): void;
  GetTol(theDiscretizationTol: Standard_Real, theSameTol: Standard_Real): void;
  Perform(isFindSingleSolution: Standard_Boolean): void;
  Points(theIndex: Standard_Integer, theSol: math_Vector): void;
  SetContinuity(theCont: Standard_Integer): void;
  GetContinuity(): Standard_Integer;
  SetFunctionalMinimalValue(theMinimalValue: Standard_Real): void;
  GetFunctionalMinimalValue(): Standard_Real;
  SetLipConstState(theFlag: Standard_Boolean): void;
  GetLipConstState(): Standard_Boolean;
  isDone(): Standard_Boolean;
  GetF(): Standard_Real;
  NbExtrema(): Standard_Integer;
}

export declare class math_Jacobi {
  constructor(A: math_Matrix)
  IsDone(): Standard_Boolean;
  Values(): math_Vector;
  Value(Num: Standard_Integer): Standard_Real;
  Vectors(): math_Matrix;
  Vector(Num: Standard_Integer, V: math_Vector): void;
  Dump(o: Standard_OStream): void;
}

export declare class math_KronrodSingleIntegration {
  Perform_1(theFunction: math_Function, theLower: Standard_Real, theUpper: Standard_Real, theNbPnts: Standard_Integer): void;
  Perform_2(theFunction: math_Function, theLower: Standard_Real, theUpper: Standard_Real, theNbPnts: Standard_Integer, theTolerance: Standard_Real, theMaxNbIter: Standard_Integer): void;
  IsDone(): Standard_Boolean;
  Value(): Standard_Real;
  ErrorReached(): Standard_Real;
  AbsolutError(): Standard_Real;
  OrderReached(): Standard_Integer;
  NbIterReached(): Standard_Integer;
  GKRule(theFunction: math_Function, theLower: Standard_Real, theUpper: Standard_Real, theGaussP: math_Vector, theGaussW: math_Vector, theKronrodP: math_Vector, theKronrodW: math_Vector, theValue: Standard_Real, theError: Standard_Real): Standard_Boolean;
}

  export declare class math_KronrodSingleIntegration_1 extends math_KronrodSingleIntegration {
    constructor();
  }

  export declare class math_KronrodSingleIntegration_2 extends math_KronrodSingleIntegration {
    constructor(theFunction: math_Function, theLower: Standard_Real, theUpper: Standard_Real, theNbPnts: Standard_Integer);
  }

  export declare class math_KronrodSingleIntegration_3 extends math_KronrodSingleIntegration {
    constructor(theFunction: math_Function, theLower: Standard_Real, theUpper: Standard_Real, theNbPnts: Standard_Integer, theTolerance: Standard_Real, theMaxNbIter: Standard_Integer);
  }

export declare class math_NewtonFunctionRoot {
  Perform(F: math_FunctionWithDerivative, Guess: Standard_Real): void;
  IsDone(): Standard_Boolean;
  Root(): Standard_Real;
  Derivative(): Standard_Real;
  Value(): Standard_Real;
  NbIterations(): Standard_Integer;
  Dump(o: Standard_OStream): void;
}

  export declare class math_NewtonFunctionRoot_1 extends math_NewtonFunctionRoot {
    constructor(F: math_FunctionWithDerivative, Guess: Standard_Real, EpsX: Standard_Real, EpsF: Standard_Real, NbIterations: Standard_Integer);
  }

  export declare class math_NewtonFunctionRoot_2 extends math_NewtonFunctionRoot {
    constructor(F: math_FunctionWithDerivative, Guess: Standard_Real, EpsX: Standard_Real, EpsF: Standard_Real, A: Standard_Real, B: Standard_Real, NbIterations: Standard_Integer);
  }

  export declare class math_NewtonFunctionRoot_3 extends math_NewtonFunctionRoot {
    constructor(A: Standard_Real, B: Standard_Real, EpsX: Standard_Real, EpsF: Standard_Real, NbIterations: Standard_Integer);
  }

export declare class math_NotSquare extends Standard_DimensionError {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class math_NotSquare_1 extends math_NotSquare {
    constructor();
  }

  export declare class math_NotSquare_2 extends math_NotSquare {
    constructor(theMessage: Standard_CString);
  }

export declare class math_PSO {
  constructor(theFunc: math_MultipleVarFunction, theLowBorder: math_Vector, theUppBorder: math_Vector, theSteps: math_Vector, theNbParticles: Standard_Integer, theNbIter: Standard_Integer)
  Perform_1(theSteps: math_Vector, theValue: Standard_Real, theOutPnt: math_Vector, theNbIter: Standard_Integer): void;
  Perform_2(theParticles: math_PSOParticlesPool, theNbParticles: Standard_Integer, theValue: Standard_Real, theOutPnt: math_Vector, theNbIter: Standard_Integer): void;
}

export declare class math_PSOParticlesPool {
  constructor(theParticlesCount: Standard_Integer, theDimensionCount: Standard_Integer)
  GetParticle(theIdx: Standard_Integer): PSO_Particle;
  GetBestParticle(): PSO_Particle;
  GetWorstParticle(): PSO_Particle;
}

export declare class math_Powell {
  constructor(theFunction: math_MultipleVarFunction, theTolerance: Standard_Real, theNbIterations: Standard_Integer, theZEPS: Standard_Real)
  Perform(theFunction: math_MultipleVarFunction, theStartingPoint: math_Vector, theStartingDirections: math_Matrix): void;
  IsSolutionReached(theFunction: math_MultipleVarFunction): Standard_Boolean;
  IsDone(): Standard_Boolean;
  Location_1(): math_Vector;
  Location_2(Loc: math_Vector): void;
  Minimum(): Standard_Real;
  NbIterations(): Standard_Integer;
  Dump(o: Standard_OStream): void;
}

export declare class math_SVD {
  constructor(A: math_Matrix)
  IsDone(): Standard_Boolean;
  Solve(B: math_Vector, X: math_Vector, Eps: Standard_Real): void;
  PseudoInverse(Inv: math_Matrix, Eps: Standard_Real): void;
  Dump(o: Standard_OStream): void;
}

export declare class math_SingularMatrix extends Standard_Failure {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class math_SingularMatrix_1 extends math_SingularMatrix {
    constructor();
  }

  export declare class math_SingularMatrix_2 extends math_SingularMatrix {
    constructor(theMessage: Standard_CString);
  }

export declare class math_TrigonometricEquationFunction extends math_FunctionWithDerivative {
  constructor(A: Standard_Real, B: Standard_Real, C: Standard_Real, D: Standard_Real, E: Standard_Real)
  Value(X: Standard_Real, F: Standard_Real): Standard_Boolean;
  Derivative(X: Standard_Real, D: Standard_Real): Standard_Boolean;
  Values(X: Standard_Real, F: Standard_Real, D: Standard_Real): Standard_Boolean;
}

export declare class math_Uzawa {
  IsDone(): Standard_Boolean;
  Value(): math_Vector;
  InitialError(): math_Vector;
  Duale(V: math_Vector): void;
  Error(): math_Vector;
  NbIterations(): Standard_Integer;
  InverseCont(): math_Matrix;
  Dump(o: Standard_OStream): void;
}

  export declare class math_Uzawa_1 extends math_Uzawa {
    constructor(Cont: math_Matrix, Secont: math_Vector, StartingPoint: math_Vector, EpsLix: Standard_Real, EpsLic: Standard_Real, NbIterations: Standard_Integer);
  }

  export declare class math_Uzawa_2 extends math_Uzawa {
    constructor(Cont: math_Matrix, Secont: math_Vector, StartingPoint: math_Vector, Nci: Standard_Integer, Nce: Standard_Integer, EpsLix: Standard_Real, EpsLic: Standard_Real, NbIterations: Standard_Integer);
  }

export declare class Handle_gp_VectorWithNullMagnitude {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: gp_VectorWithNullMagnitude): void;
  get(): gp_VectorWithNullMagnitude;
}

  export declare class Handle_gp_VectorWithNullMagnitude_1 extends Handle_gp_VectorWithNullMagnitude {
    constructor();
  }

  export declare class Handle_gp_VectorWithNullMagnitude_2 extends Handle_gp_VectorWithNullMagnitude {
    constructor(thePtr: gp_VectorWithNullMagnitude);
  }

  export declare class Handle_gp_VectorWithNullMagnitude_3 extends Handle_gp_VectorWithNullMagnitude {
    constructor(theHandle: Handle_gp_VectorWithNullMagnitude);
  }

  export declare class Handle_gp_VectorWithNullMagnitude_4 extends Handle_gp_VectorWithNullMagnitude {
    constructor(theHandle: Handle_gp_VectorWithNullMagnitude);
  }

export declare class Handle_TopLoc_Datum3D {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TopLoc_Datum3D): void;
  get(): TopLoc_Datum3D;
}

  export declare class Handle_TopLoc_Datum3D_1 extends Handle_TopLoc_Datum3D {
    constructor();
  }

  export declare class Handle_TopLoc_Datum3D_2 extends Handle_TopLoc_Datum3D {
    constructor(thePtr: TopLoc_Datum3D);
  }

  export declare class Handle_TopLoc_Datum3D_3 extends Handle_TopLoc_Datum3D {
    constructor(theHandle: Handle_TopLoc_Datum3D);
  }

  export declare class Handle_TopLoc_Datum3D_4 extends Handle_TopLoc_Datum3D {
    constructor(theHandle: Handle_TopLoc_Datum3D);
  }

export declare class TColgp_Array1OfPnt {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: gp_Pnt): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: TColgp_Array1OfPnt): TColgp_Array1OfPnt;
  Move(theOther: TColgp_Array1OfPnt): TColgp_Array1OfPnt;
  First(): gp_Pnt;
  ChangeFirst(): gp_Pnt;
  Last(): gp_Pnt;
  ChangeLast(): gp_Pnt;
  Value(theIndex: Standard_Integer): gp_Pnt;
  ChangeValue(theIndex: Standard_Integer): gp_Pnt;
  SetValue(theIndex: Standard_Integer, theItem: gp_Pnt): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class TColgp_Array1OfPnt_1 extends TColgp_Array1OfPnt {
    constructor();
  }

  export declare class TColgp_Array1OfPnt_2 extends TColgp_Array1OfPnt {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class TColgp_Array1OfPnt_3 extends TColgp_Array1OfPnt {
    constructor(theOther: TColgp_Array1OfPnt);
  }

  export declare class TColgp_Array1OfPnt_4 extends TColgp_Array1OfPnt {
    constructor(theOther: TColgp_Array1OfPnt);
  }

  export declare class TColgp_Array1OfPnt_5 extends TColgp_Array1OfPnt {
    constructor(theBegin: gp_Pnt, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_TColgp_HArray1OfPnt {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColgp_HArray1OfPnt): void;
  get(): TColgp_HArray1OfPnt;
}

  export declare class Handle_TColgp_HArray1OfPnt_1 extends Handle_TColgp_HArray1OfPnt {
    constructor();
  }

  export declare class Handle_TColgp_HArray1OfPnt_2 extends Handle_TColgp_HArray1OfPnt {
    constructor(thePtr: TColgp_HArray1OfPnt);
  }

  export declare class Handle_TColgp_HArray1OfPnt_3 extends Handle_TColgp_HArray1OfPnt {
    constructor(theHandle: Handle_TColgp_HArray1OfPnt);
  }

  export declare class Handle_TColgp_HArray1OfPnt_4 extends Handle_TColgp_HArray1OfPnt {
    constructor(theHandle: Handle_TColgp_HArray1OfPnt);
  }

export declare class TColgp_Array1OfPnt2d {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: gp_Pnt2d): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: TColgp_Array1OfPnt2d): TColgp_Array1OfPnt2d;
  Move(theOther: TColgp_Array1OfPnt2d): TColgp_Array1OfPnt2d;
  First(): gp_Pnt2d;
  ChangeFirst(): gp_Pnt2d;
  Last(): gp_Pnt2d;
  ChangeLast(): gp_Pnt2d;
  Value(theIndex: Standard_Integer): gp_Pnt2d;
  ChangeValue(theIndex: Standard_Integer): gp_Pnt2d;
  SetValue(theIndex: Standard_Integer, theItem: gp_Pnt2d): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class TColgp_Array1OfPnt2d_1 extends TColgp_Array1OfPnt2d {
    constructor();
  }

  export declare class TColgp_Array1OfPnt2d_2 extends TColgp_Array1OfPnt2d {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class TColgp_Array1OfPnt2d_3 extends TColgp_Array1OfPnt2d {
    constructor(theOther: TColgp_Array1OfPnt2d);
  }

  export declare class TColgp_Array1OfPnt2d_4 extends TColgp_Array1OfPnt2d {
    constructor(theOther: TColgp_Array1OfPnt2d);
  }

  export declare class TColgp_Array1OfPnt2d_5 extends TColgp_Array1OfPnt2d {
    constructor(theBegin: gp_Pnt2d, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Poly_Array1OfTriangle {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: Poly_Triangle): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: Poly_Array1OfTriangle): Poly_Array1OfTriangle;
  Move(theOther: Poly_Array1OfTriangle): Poly_Array1OfTriangle;
  First(): Poly_Triangle;
  ChangeFirst(): Poly_Triangle;
  Last(): Poly_Triangle;
  ChangeLast(): Poly_Triangle;
  Value(theIndex: Standard_Integer): Poly_Triangle;
  ChangeValue(theIndex: Standard_Integer): Poly_Triangle;
  SetValue(theIndex: Standard_Integer, theItem: Poly_Triangle): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class Poly_Array1OfTriangle_1 extends Poly_Array1OfTriangle {
    constructor();
  }

  export declare class Poly_Array1OfTriangle_2 extends Poly_Array1OfTriangle {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class Poly_Array1OfTriangle_3 extends Poly_Array1OfTriangle {
    constructor(theOther: Poly_Array1OfTriangle);
  }

  export declare class Poly_Array1OfTriangle_4 extends Poly_Array1OfTriangle {
    constructor(theOther: Poly_Array1OfTriangle);
  }

  export declare class Poly_Array1OfTriangle_5 extends Poly_Array1OfTriangle {
    constructor(theBegin: Poly_Triangle, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class TColgp_SequenceOfPnt extends NCollection_BaseSequence {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Reverse(): void;
  Exchange(I: Standard_Integer, J: Standard_Integer): void;
  delNode(theNode: NCollection_SeqNode, theAl: any): void;
  Clear(theAllocator: any): void;
  Assign(theOther: TColgp_SequenceOfPnt): TColgp_SequenceOfPnt;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: gp_Pnt): void;
  Append_2(theSeq: TColgp_SequenceOfPnt): void;
  Prepend_1(theItem: gp_Pnt): void;
  Prepend_2(theSeq: TColgp_SequenceOfPnt): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: gp_Pnt): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: TColgp_SequenceOfPnt): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: TColgp_SequenceOfPnt): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: gp_Pnt): void;
  Split(theIndex: Standard_Integer, theSeq: TColgp_SequenceOfPnt): void;
  First(): gp_Pnt;
  ChangeFirst(): gp_Pnt;
  Last(): gp_Pnt;
  ChangeLast(): gp_Pnt;
  Value(theIndex: Standard_Integer): gp_Pnt;
  ChangeValue(theIndex: Standard_Integer): gp_Pnt;
  SetValue(theIndex: Standard_Integer, theItem: gp_Pnt): void;
}

  export declare class TColgp_SequenceOfPnt_1 extends TColgp_SequenceOfPnt {
    constructor();
  }

  export declare class TColgp_SequenceOfPnt_2 extends TColgp_SequenceOfPnt {
    constructor(theAllocator: any);
  }

  export declare class TColgp_SequenceOfPnt_3 extends TColgp_SequenceOfPnt {
    constructor(theOther: TColgp_SequenceOfPnt);
  }

export declare class Handle_TColgp_HSequenceOfPnt {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColgp_HSequenceOfPnt): void;
  get(): TColgp_HSequenceOfPnt;
}

  export declare class Handle_TColgp_HSequenceOfPnt_1 extends Handle_TColgp_HSequenceOfPnt {
    constructor();
  }

  export declare class Handle_TColgp_HSequenceOfPnt_2 extends Handle_TColgp_HSequenceOfPnt {
    constructor(thePtr: TColgp_HSequenceOfPnt);
  }

  export declare class Handle_TColgp_HSequenceOfPnt_3 extends Handle_TColgp_HSequenceOfPnt {
    constructor(theHandle: Handle_TColgp_HSequenceOfPnt);
  }

  export declare class Handle_TColgp_HSequenceOfPnt_4 extends Handle_TColgp_HSequenceOfPnt {
    constructor(theHandle: Handle_TColgp_HSequenceOfPnt);
  }

export declare class gp_TrsfNLerp {
  Init(theStart: gp_Trsf, theEnd: gp_Trsf): void;
  Interpolate_2(theT: number, theResult: gp_Trsf): void;
}

  export declare class gp_TrsfNLerp_1 extends gp_TrsfNLerp {
    constructor();
  }

  export declare class gp_TrsfNLerp_2 extends gp_TrsfNLerp {
    constructor(theStart: gp_Trsf, theEnd: gp_Trsf);
  }

export declare class Handle_TColgp_HArray1OfPnt2d {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColgp_HArray1OfPnt2d): void;
  get(): TColgp_HArray1OfPnt2d;
}

  export declare class Handle_TColgp_HArray1OfPnt2d_1 extends Handle_TColgp_HArray1OfPnt2d {
    constructor();
  }

  export declare class Handle_TColgp_HArray1OfPnt2d_2 extends Handle_TColgp_HArray1OfPnt2d {
    constructor(thePtr: TColgp_HArray1OfPnt2d);
  }

  export declare class Handle_TColgp_HArray1OfPnt2d_3 extends Handle_TColgp_HArray1OfPnt2d {
    constructor(theHandle: Handle_TColgp_HArray1OfPnt2d);
  }

  export declare class Handle_TColgp_HArray1OfPnt2d_4 extends Handle_TColgp_HArray1OfPnt2d {
    constructor(theHandle: Handle_TColgp_HArray1OfPnt2d);
  }

export declare class Handle_Poly_Triangulation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Poly_Triangulation): void;
  get(): Poly_Triangulation;
}

  export declare class Handle_Poly_Triangulation_1 extends Handle_Poly_Triangulation {
    constructor();
  }

  export declare class Handle_Poly_Triangulation_2 extends Handle_Poly_Triangulation {
    constructor(thePtr: Poly_Triangulation);
  }

  export declare class Handle_Poly_Triangulation_3 extends Handle_Poly_Triangulation {
    constructor(theHandle: Handle_Poly_Triangulation);
  }

  export declare class Handle_Poly_Triangulation_4 extends Handle_Poly_Triangulation {
    constructor(theHandle: Handle_Poly_Triangulation);
  }

export declare class TColgp_Array1OfDir {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: gp_Dir): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: TColgp_Array1OfDir): TColgp_Array1OfDir;
  Move(theOther: TColgp_Array1OfDir): TColgp_Array1OfDir;
  First(): gp_Dir;
  ChangeFirst(): gp_Dir;
  Last(): gp_Dir;
  ChangeLast(): gp_Dir;
  Value(theIndex: Standard_Integer): gp_Dir;
  ChangeValue(theIndex: Standard_Integer): gp_Dir;
  SetValue(theIndex: Standard_Integer, theItem: gp_Dir): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class TColgp_Array1OfDir_1 extends TColgp_Array1OfDir {
    constructor();
  }

  export declare class TColgp_Array1OfDir_2 extends TColgp_Array1OfDir {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class TColgp_Array1OfDir_3 extends TColgp_Array1OfDir {
    constructor(theOther: TColgp_Array1OfDir);
  }

  export declare class TColgp_Array1OfDir_4 extends TColgp_Array1OfDir {
    constructor(theOther: TColgp_Array1OfDir);
  }

  export declare class TColgp_Array1OfDir_5 extends TColgp_Array1OfDir {
    constructor(theBegin: gp_Dir, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_TColgp_HArray1OfDir {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColgp_HArray1OfDir): void;
  get(): TColgp_HArray1OfDir;
}

  export declare class Handle_TColgp_HArray1OfDir_1 extends Handle_TColgp_HArray1OfDir {
    constructor();
  }

  export declare class Handle_TColgp_HArray1OfDir_2 extends Handle_TColgp_HArray1OfDir {
    constructor(thePtr: TColgp_HArray1OfDir);
  }

  export declare class Handle_TColgp_HArray1OfDir_3 extends Handle_TColgp_HArray1OfDir {
    constructor(theHandle: Handle_TColgp_HArray1OfDir);
  }

  export declare class Handle_TColgp_HArray1OfDir_4 extends Handle_TColgp_HArray1OfDir {
    constructor(theHandle: Handle_TColgp_HArray1OfDir);
  }

export declare class TColgp_Array2OfPnt {
  Init(theValue: gp_Pnt): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  NbRows(): Standard_Integer;
  NbColumns(): Standard_Integer;
  RowLength(): Standard_Integer;
  ColLength(): Standard_Integer;
  LowerRow(): Standard_Integer;
  UpperRow(): Standard_Integer;
  LowerCol(): Standard_Integer;
  UpperCol(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  Assign(theOther: TColgp_Array2OfPnt): TColgp_Array2OfPnt;
  Move(theOther: TColgp_Array2OfPnt): TColgp_Array2OfPnt;
  Value(theRow: Standard_Integer, theCol: Standard_Integer): gp_Pnt;
  ChangeValue(theRow: Standard_Integer, theCol: Standard_Integer): gp_Pnt;
  SetValue(theRow: Standard_Integer, theCol: Standard_Integer, theItem: gp_Pnt): void;
  Resize(theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class TColgp_Array2OfPnt_1 extends TColgp_Array2OfPnt {
    constructor();
  }

  export declare class TColgp_Array2OfPnt_2 extends TColgp_Array2OfPnt {
    constructor(theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer);
  }

  export declare class TColgp_Array2OfPnt_3 extends TColgp_Array2OfPnt {
    constructor(theOther: TColgp_Array2OfPnt);
  }

  export declare class TColgp_Array2OfPnt_4 extends TColgp_Array2OfPnt {
    constructor(theOther: TColgp_Array2OfPnt);
  }

  export declare class TColgp_Array2OfPnt_5 extends TColgp_Array2OfPnt {
    constructor(theBegin: gp_Pnt, theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer);
  }

export declare class Handle_TColgp_HArray2OfPnt {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColgp_HArray2OfPnt): void;
  get(): TColgp_HArray2OfPnt;
}

  export declare class Handle_TColgp_HArray2OfPnt_1 extends Handle_TColgp_HArray2OfPnt {
    constructor();
  }

  export declare class Handle_TColgp_HArray2OfPnt_2 extends Handle_TColgp_HArray2OfPnt {
    constructor(thePtr: TColgp_HArray2OfPnt);
  }

  export declare class Handle_TColgp_HArray2OfPnt_3 extends Handle_TColgp_HArray2OfPnt {
    constructor(theHandle: Handle_TColgp_HArray2OfPnt);
  }

  export declare class Handle_TColgp_HArray2OfPnt_4 extends Handle_TColgp_HArray2OfPnt {
    constructor(theHandle: Handle_TColgp_HArray2OfPnt);
  }

export declare class TColgp_Array2OfPnt2d {
  Init(theValue: gp_Pnt2d): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  NbRows(): Standard_Integer;
  NbColumns(): Standard_Integer;
  RowLength(): Standard_Integer;
  ColLength(): Standard_Integer;
  LowerRow(): Standard_Integer;
  UpperRow(): Standard_Integer;
  LowerCol(): Standard_Integer;
  UpperCol(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  Assign(theOther: TColgp_Array2OfPnt2d): TColgp_Array2OfPnt2d;
  Move(theOther: TColgp_Array2OfPnt2d): TColgp_Array2OfPnt2d;
  Value(theRow: Standard_Integer, theCol: Standard_Integer): gp_Pnt2d;
  ChangeValue(theRow: Standard_Integer, theCol: Standard_Integer): gp_Pnt2d;
  SetValue(theRow: Standard_Integer, theCol: Standard_Integer, theItem: gp_Pnt2d): void;
  Resize(theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class TColgp_Array2OfPnt2d_1 extends TColgp_Array2OfPnt2d {
    constructor();
  }

  export declare class TColgp_Array2OfPnt2d_2 extends TColgp_Array2OfPnt2d {
    constructor(theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer);
  }

  export declare class TColgp_Array2OfPnt2d_3 extends TColgp_Array2OfPnt2d {
    constructor(theOther: TColgp_Array2OfPnt2d);
  }

  export declare class TColgp_Array2OfPnt2d_4 extends TColgp_Array2OfPnt2d {
    constructor(theOther: TColgp_Array2OfPnt2d);
  }

  export declare class TColgp_Array2OfPnt2d_5 extends TColgp_Array2OfPnt2d {
    constructor(theBegin: gp_Pnt2d, theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer);
  }

export declare class Handle_TColgp_HArray2OfPnt2d {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColgp_HArray2OfPnt2d): void;
  get(): TColgp_HArray2OfPnt2d;
}

  export declare class Handle_TColgp_HArray2OfPnt2d_1 extends Handle_TColgp_HArray2OfPnt2d {
    constructor();
  }

  export declare class Handle_TColgp_HArray2OfPnt2d_2 extends Handle_TColgp_HArray2OfPnt2d {
    constructor(thePtr: TColgp_HArray2OfPnt2d);
  }

  export declare class Handle_TColgp_HArray2OfPnt2d_3 extends Handle_TColgp_HArray2OfPnt2d {
    constructor(theHandle: Handle_TColgp_HArray2OfPnt2d);
  }

  export declare class Handle_TColgp_HArray2OfPnt2d_4 extends Handle_TColgp_HArray2OfPnt2d {
    constructor(theHandle: Handle_TColgp_HArray2OfPnt2d);
  }

export declare class TColgp_Array1OfVec {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: gp_Vec): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: TColgp_Array1OfVec): TColgp_Array1OfVec;
  Move(theOther: TColgp_Array1OfVec): TColgp_Array1OfVec;
  First(): gp_Vec;
  ChangeFirst(): gp_Vec;
  Last(): gp_Vec;
  ChangeLast(): gp_Vec;
  Value(theIndex: Standard_Integer): gp_Vec;
  ChangeValue(theIndex: Standard_Integer): gp_Vec;
  SetValue(theIndex: Standard_Integer, theItem: gp_Vec): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class TColgp_Array1OfVec_1 extends TColgp_Array1OfVec {
    constructor();
  }

  export declare class TColgp_Array1OfVec_2 extends TColgp_Array1OfVec {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class TColgp_Array1OfVec_3 extends TColgp_Array1OfVec {
    constructor(theOther: TColgp_Array1OfVec);
  }

  export declare class TColgp_Array1OfVec_4 extends TColgp_Array1OfVec {
    constructor(theOther: TColgp_Array1OfVec);
  }

  export declare class TColgp_Array1OfVec_5 extends TColgp_Array1OfVec {
    constructor(theBegin: gp_Vec, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_TColgp_HArray1OfVec {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColgp_HArray1OfVec): void;
  get(): TColgp_HArray1OfVec;
}

  export declare class Handle_TColgp_HArray1OfVec_1 extends Handle_TColgp_HArray1OfVec {
    constructor();
  }

  export declare class Handle_TColgp_HArray1OfVec_2 extends Handle_TColgp_HArray1OfVec {
    constructor(thePtr: TColgp_HArray1OfVec);
  }

  export declare class Handle_TColgp_HArray1OfVec_3 extends Handle_TColgp_HArray1OfVec {
    constructor(theHandle: Handle_TColgp_HArray1OfVec);
  }

  export declare class Handle_TColgp_HArray1OfVec_4 extends Handle_TColgp_HArray1OfVec {
    constructor(theHandle: Handle_TColgp_HArray1OfVec);
  }

export declare class TColgp_Array1OfVec2d {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: gp_Vec2d): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: TColgp_Array1OfVec2d): TColgp_Array1OfVec2d;
  Move(theOther: TColgp_Array1OfVec2d): TColgp_Array1OfVec2d;
  First(): gp_Vec2d;
  ChangeFirst(): gp_Vec2d;
  Last(): gp_Vec2d;
  ChangeLast(): gp_Vec2d;
  Value(theIndex: Standard_Integer): gp_Vec2d;
  ChangeValue(theIndex: Standard_Integer): gp_Vec2d;
  SetValue(theIndex: Standard_Integer, theItem: gp_Vec2d): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class TColgp_Array1OfVec2d_1 extends TColgp_Array1OfVec2d {
    constructor();
  }

  export declare class TColgp_Array1OfVec2d_2 extends TColgp_Array1OfVec2d {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class TColgp_Array1OfVec2d_3 extends TColgp_Array1OfVec2d {
    constructor(theOther: TColgp_Array1OfVec2d);
  }

  export declare class TColgp_Array1OfVec2d_4 extends TColgp_Array1OfVec2d {
    constructor(theOther: TColgp_Array1OfVec2d);
  }

  export declare class TColgp_Array1OfVec2d_5 extends TColgp_Array1OfVec2d {
    constructor(theBegin: gp_Vec2d, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_TColgp_HArray1OfVec2d {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColgp_HArray1OfVec2d): void;
  get(): TColgp_HArray1OfVec2d;
}

  export declare class Handle_TColgp_HArray1OfVec2d_1 extends Handle_TColgp_HArray1OfVec2d {
    constructor();
  }

  export declare class Handle_TColgp_HArray1OfVec2d_2 extends Handle_TColgp_HArray1OfVec2d {
    constructor(thePtr: TColgp_HArray1OfVec2d);
  }

  export declare class Handle_TColgp_HArray1OfVec2d_3 extends Handle_TColgp_HArray1OfVec2d {
    constructor(theHandle: Handle_TColgp_HArray1OfVec2d);
  }

  export declare class Handle_TColgp_HArray1OfVec2d_4 extends Handle_TColgp_HArray1OfVec2d {
    constructor(theHandle: Handle_TColgp_HArray1OfVec2d);
  }

export declare class Handle_BVH_BuildThread {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BVH_BuildThread): void;
  get(): BVH_BuildThread;
}

  export declare class Handle_BVH_BuildThread_1 extends Handle_BVH_BuildThread {
    constructor();
  }

  export declare class Handle_BVH_BuildThread_2 extends Handle_BVH_BuildThread {
    constructor(thePtr: BVH_BuildThread);
  }

  export declare class Handle_BVH_BuildThread_3 extends Handle_BVH_BuildThread {
    constructor(theHandle: Handle_BVH_BuildThread);
  }

  export declare class Handle_BVH_BuildThread_4 extends Handle_BVH_BuildThread {
    constructor(theHandle: Handle_BVH_BuildThread);
  }

export declare class Handle_BSplSLib_Cache {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BSplSLib_Cache): void;
  get(): BSplSLib_Cache;
}

  export declare class Handle_BSplSLib_Cache_1 extends Handle_BSplSLib_Cache {
    constructor();
  }

  export declare class Handle_BSplSLib_Cache_2 extends Handle_BSplSLib_Cache {
    constructor(thePtr: BSplSLib_Cache);
  }

  export declare class Handle_BSplSLib_Cache_3 extends Handle_BSplSLib_Cache {
    constructor(theHandle: Handle_BSplSLib_Cache);
  }

  export declare class Handle_BSplSLib_Cache_4 extends Handle_BSplSLib_Cache {
    constructor(theHandle: Handle_BSplSLib_Cache);
  }

export declare class Handle_Poly_Polygon3D {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Poly_Polygon3D): void;
  get(): Poly_Polygon3D;
}

  export declare class Handle_Poly_Polygon3D_1 extends Handle_Poly_Polygon3D {
    constructor();
  }

  export declare class Handle_Poly_Polygon3D_2 extends Handle_Poly_Polygon3D {
    constructor(thePtr: Poly_Polygon3D);
  }

  export declare class Handle_Poly_Polygon3D_3 extends Handle_Poly_Polygon3D {
    constructor(theHandle: Handle_Poly_Polygon3D);
  }

  export declare class Handle_Poly_Polygon3D_4 extends Handle_Poly_Polygon3D {
    constructor(theHandle: Handle_Poly_Polygon3D);
  }

export declare class Handle_Poly_PolygonOnTriangulation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Poly_PolygonOnTriangulation): void;
  get(): Poly_PolygonOnTriangulation;
}

  export declare class Handle_Poly_PolygonOnTriangulation_1 extends Handle_Poly_PolygonOnTriangulation {
    constructor();
  }

  export declare class Handle_Poly_PolygonOnTriangulation_2 extends Handle_Poly_PolygonOnTriangulation {
    constructor(thePtr: Poly_PolygonOnTriangulation);
  }

  export declare class Handle_Poly_PolygonOnTriangulation_3 extends Handle_Poly_PolygonOnTriangulation {
    constructor(theHandle: Handle_Poly_PolygonOnTriangulation);
  }

  export declare class Handle_Poly_PolygonOnTriangulation_4 extends Handle_Poly_PolygonOnTriangulation {
    constructor(theHandle: Handle_Poly_PolygonOnTriangulation);
  }

export declare class Handle_Poly_Polygon2D {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Poly_Polygon2D): void;
  get(): Poly_Polygon2D;
}

  export declare class Handle_Poly_Polygon2D_1 extends Handle_Poly_Polygon2D {
    constructor();
  }

  export declare class Handle_Poly_Polygon2D_2 extends Handle_Poly_Polygon2D {
    constructor(thePtr: Poly_Polygon2D);
  }

  export declare class Handle_Poly_Polygon2D_3 extends Handle_Poly_Polygon2D {
    constructor(theHandle: Handle_Poly_Polygon2D);
  }

  export declare class Handle_Poly_Polygon2D_4 extends Handle_Poly_Polygon2D {
    constructor(theHandle: Handle_Poly_Polygon2D);
  }

export declare class Handle_BSplCLib_Cache {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BSplCLib_Cache): void;
  get(): BSplCLib_Cache;
}

  export declare class Handle_BSplCLib_Cache_1 extends Handle_BSplCLib_Cache {
    constructor();
  }

  export declare class Handle_BSplCLib_Cache_2 extends Handle_BSplCLib_Cache {
    constructor(thePtr: BSplCLib_Cache);
  }

  export declare class Handle_BSplCLib_Cache_3 extends Handle_BSplCLib_Cache {
    constructor(theHandle: Handle_BSplCLib_Cache);
  }

  export declare class Handle_BSplCLib_Cache_4 extends Handle_BSplCLib_Cache {
    constructor(theHandle: Handle_BSplCLib_Cache);
  }

export declare class Bnd_SeqOfBox extends NCollection_BaseSequence {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Reverse(): void;
  Exchange(I: Standard_Integer, J: Standard_Integer): void;
  delNode(theNode: NCollection_SeqNode, theAl: any): void;
  Clear(theAllocator: any): void;
  Assign(theOther: Bnd_SeqOfBox): Bnd_SeqOfBox;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: Bnd_Box): void;
  Append_2(theSeq: Bnd_SeqOfBox): void;
  Prepend_1(theItem: Bnd_Box): void;
  Prepend_2(theSeq: Bnd_SeqOfBox): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: Bnd_Box): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: Bnd_SeqOfBox): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: Bnd_SeqOfBox): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: Bnd_Box): void;
  Split(theIndex: Standard_Integer, theSeq: Bnd_SeqOfBox): void;
  First(): Bnd_Box;
  ChangeFirst(): Bnd_Box;
  Last(): Bnd_Box;
  ChangeLast(): Bnd_Box;
  Value(theIndex: Standard_Integer): Bnd_Box;
  ChangeValue(theIndex: Standard_Integer): Bnd_Box;
  SetValue(theIndex: Standard_Integer, theItem: Bnd_Box): void;
}

  export declare class Bnd_SeqOfBox_1 extends Bnd_SeqOfBox {
    constructor();
  }

  export declare class Bnd_SeqOfBox_2 extends Bnd_SeqOfBox {
    constructor(theAllocator: any);
  }

  export declare class Bnd_SeqOfBox_3 extends Bnd_SeqOfBox {
    constructor(theOther: Bnd_SeqOfBox);
  }

export declare class Bnd_Array1OfSphere {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: Bnd_Sphere): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: Bnd_Array1OfSphere): Bnd_Array1OfSphere;
  Move(theOther: Bnd_Array1OfSphere): Bnd_Array1OfSphere;
  First(): Bnd_Sphere;
  ChangeFirst(): Bnd_Sphere;
  Last(): Bnd_Sphere;
  ChangeLast(): Bnd_Sphere;
  Value(theIndex: Standard_Integer): Bnd_Sphere;
  ChangeValue(theIndex: Standard_Integer): Bnd_Sphere;
  SetValue(theIndex: Standard_Integer, theItem: Bnd_Sphere): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class Bnd_Array1OfSphere_1 extends Bnd_Array1OfSphere {
    constructor();
  }

  export declare class Bnd_Array1OfSphere_2 extends Bnd_Array1OfSphere {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class Bnd_Array1OfSphere_3 extends Bnd_Array1OfSphere {
    constructor(theOther: Bnd_Array1OfSphere);
  }

  export declare class Bnd_Array1OfSphere_4 extends Bnd_Array1OfSphere {
    constructor(theOther: Bnd_Array1OfSphere);
  }

  export declare class Bnd_Array1OfSphere_5 extends Bnd_Array1OfSphere {
    constructor(theBegin: Bnd_Sphere, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_Bnd_HArray1OfSphere {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Bnd_HArray1OfSphere): void;
  get(): Bnd_HArray1OfSphere;
}

  export declare class Handle_Bnd_HArray1OfSphere_1 extends Handle_Bnd_HArray1OfSphere {
    constructor();
  }

  export declare class Handle_Bnd_HArray1OfSphere_2 extends Handle_Bnd_HArray1OfSphere {
    constructor(thePtr: Bnd_HArray1OfSphere);
  }

  export declare class Handle_Bnd_HArray1OfSphere_3 extends Handle_Bnd_HArray1OfSphere {
    constructor(theHandle: Handle_Bnd_HArray1OfSphere);
  }

  export declare class Handle_Bnd_HArray1OfSphere_4 extends Handle_Bnd_HArray1OfSphere {
    constructor(theHandle: Handle_Bnd_HArray1OfSphere);
  }

export declare class TColgp_Array2OfXYZ {
  Init(theValue: gp_XYZ): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  NbRows(): Standard_Integer;
  NbColumns(): Standard_Integer;
  RowLength(): Standard_Integer;
  ColLength(): Standard_Integer;
  LowerRow(): Standard_Integer;
  UpperRow(): Standard_Integer;
  LowerCol(): Standard_Integer;
  UpperCol(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  Assign(theOther: TColgp_Array2OfXYZ): TColgp_Array2OfXYZ;
  Move(theOther: TColgp_Array2OfXYZ): TColgp_Array2OfXYZ;
  Value(theRow: Standard_Integer, theCol: Standard_Integer): gp_XYZ;
  ChangeValue(theRow: Standard_Integer, theCol: Standard_Integer): gp_XYZ;
  SetValue(theRow: Standard_Integer, theCol: Standard_Integer, theItem: gp_XYZ): void;
  Resize(theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class TColgp_Array2OfXYZ_1 extends TColgp_Array2OfXYZ {
    constructor();
  }

  export declare class TColgp_Array2OfXYZ_2 extends TColgp_Array2OfXYZ {
    constructor(theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer);
  }

  export declare class TColgp_Array2OfXYZ_3 extends TColgp_Array2OfXYZ {
    constructor(theOther: TColgp_Array2OfXYZ);
  }

  export declare class TColgp_Array2OfXYZ_4 extends TColgp_Array2OfXYZ {
    constructor(theOther: TColgp_Array2OfXYZ);
  }

  export declare class TColgp_Array2OfXYZ_5 extends TColgp_Array2OfXYZ {
    constructor(theBegin: gp_XYZ, theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer);
  }

export declare class Handle_TColgp_HArray2OfXYZ {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColgp_HArray2OfXYZ): void;
  get(): TColgp_HArray2OfXYZ;
}

  export declare class Handle_TColgp_HArray2OfXYZ_1 extends Handle_TColgp_HArray2OfXYZ {
    constructor();
  }

  export declare class Handle_TColgp_HArray2OfXYZ_2 extends Handle_TColgp_HArray2OfXYZ {
    constructor(thePtr: TColgp_HArray2OfXYZ);
  }

  export declare class Handle_TColgp_HArray2OfXYZ_3 extends Handle_TColgp_HArray2OfXYZ {
    constructor(theHandle: Handle_TColgp_HArray2OfXYZ);
  }

  export declare class Handle_TColgp_HArray2OfXYZ_4 extends Handle_TColgp_HArray2OfXYZ {
    constructor(theHandle: Handle_TColgp_HArray2OfXYZ);
  }

export declare class TColgp_Array1OfXYZ {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: gp_XYZ): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: TColgp_Array1OfXYZ): TColgp_Array1OfXYZ;
  Move(theOther: TColgp_Array1OfXYZ): TColgp_Array1OfXYZ;
  First(): gp_XYZ;
  ChangeFirst(): gp_XYZ;
  Last(): gp_XYZ;
  ChangeLast(): gp_XYZ;
  Value(theIndex: Standard_Integer): gp_XYZ;
  ChangeValue(theIndex: Standard_Integer): gp_XYZ;
  SetValue(theIndex: Standard_Integer, theItem: gp_XYZ): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class TColgp_Array1OfXYZ_1 extends TColgp_Array1OfXYZ {
    constructor();
  }

  export declare class TColgp_Array1OfXYZ_2 extends TColgp_Array1OfXYZ {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class TColgp_Array1OfXYZ_3 extends TColgp_Array1OfXYZ {
    constructor(theOther: TColgp_Array1OfXYZ);
  }

  export declare class TColgp_Array1OfXYZ_4 extends TColgp_Array1OfXYZ {
    constructor(theOther: TColgp_Array1OfXYZ);
  }

  export declare class TColgp_Array1OfXYZ_5 extends TColgp_Array1OfXYZ {
    constructor(theBegin: gp_XYZ, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class TColgp_SequenceOfXY extends NCollection_BaseSequence {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Reverse(): void;
  Exchange(I: Standard_Integer, J: Standard_Integer): void;
  delNode(theNode: NCollection_SeqNode, theAl: any): void;
  Clear(theAllocator: any): void;
  Assign(theOther: TColgp_SequenceOfXY): TColgp_SequenceOfXY;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: gp_XY): void;
  Append_2(theSeq: TColgp_SequenceOfXY): void;
  Prepend_1(theItem: gp_XY): void;
  Prepend_2(theSeq: TColgp_SequenceOfXY): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: gp_XY): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: TColgp_SequenceOfXY): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: TColgp_SequenceOfXY): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: gp_XY): void;
  Split(theIndex: Standard_Integer, theSeq: TColgp_SequenceOfXY): void;
  First(): gp_XY;
  ChangeFirst(): gp_XY;
  Last(): gp_XY;
  ChangeLast(): gp_XY;
  Value(theIndex: Standard_Integer): gp_XY;
  ChangeValue(theIndex: Standard_Integer): gp_XY;
  SetValue(theIndex: Standard_Integer, theItem: gp_XY): void;
}

  export declare class TColgp_SequenceOfXY_1 extends TColgp_SequenceOfXY {
    constructor();
  }

  export declare class TColgp_SequenceOfXY_2 extends TColgp_SequenceOfXY {
    constructor(theAllocator: any);
  }

  export declare class TColgp_SequenceOfXY_3 extends TColgp_SequenceOfXY {
    constructor(theOther: TColgp_SequenceOfXY);
  }

export declare class TColgp_SequenceOfXYZ extends NCollection_BaseSequence {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Reverse(): void;
  Exchange(I: Standard_Integer, J: Standard_Integer): void;
  delNode(theNode: NCollection_SeqNode, theAl: any): void;
  Clear(theAllocator: any): void;
  Assign(theOther: TColgp_SequenceOfXYZ): TColgp_SequenceOfXYZ;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: gp_XYZ): void;
  Append_2(theSeq: TColgp_SequenceOfXYZ): void;
  Prepend_1(theItem: gp_XYZ): void;
  Prepend_2(theSeq: TColgp_SequenceOfXYZ): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: gp_XYZ): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: TColgp_SequenceOfXYZ): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: TColgp_SequenceOfXYZ): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: gp_XYZ): void;
  Split(theIndex: Standard_Integer, theSeq: TColgp_SequenceOfXYZ): void;
  First(): gp_XYZ;
  ChangeFirst(): gp_XYZ;
  Last(): gp_XYZ;
  ChangeLast(): gp_XYZ;
  Value(theIndex: Standard_Integer): gp_XYZ;
  ChangeValue(theIndex: Standard_Integer): gp_XYZ;
  SetValue(theIndex: Standard_Integer, theItem: gp_XYZ): void;
}

  export declare class TColgp_SequenceOfXYZ_1 extends TColgp_SequenceOfXYZ {
    constructor();
  }

  export declare class TColgp_SequenceOfXYZ_2 extends TColgp_SequenceOfXYZ {
    constructor(theAllocator: any);
  }

  export declare class TColgp_SequenceOfXYZ_3 extends TColgp_SequenceOfXYZ {
    constructor(theOther: TColgp_SequenceOfXYZ);
  }

export declare class Bnd_Array1OfBox {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: Bnd_Box): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: Bnd_Array1OfBox): Bnd_Array1OfBox;
  Move(theOther: Bnd_Array1OfBox): Bnd_Array1OfBox;
  First(): Bnd_Box;
  ChangeFirst(): Bnd_Box;
  Last(): Bnd_Box;
  ChangeLast(): Bnd_Box;
  Value(theIndex: Standard_Integer): Bnd_Box;
  ChangeValue(theIndex: Standard_Integer): Bnd_Box;
  SetValue(theIndex: Standard_Integer, theItem: Bnd_Box): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class Bnd_Array1OfBox_1 extends Bnd_Array1OfBox {
    constructor();
  }

  export declare class Bnd_Array1OfBox_2 extends Bnd_Array1OfBox {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class Bnd_Array1OfBox_3 extends Bnd_Array1OfBox {
    constructor(theOther: Bnd_Array1OfBox);
  }

  export declare class Bnd_Array1OfBox_4 extends Bnd_Array1OfBox {
    constructor(theOther: Bnd_Array1OfBox);
  }

  export declare class Bnd_Array1OfBox_5 extends Bnd_Array1OfBox {
    constructor(theBegin: Bnd_Box, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_Bnd_HArray1OfBox {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Bnd_HArray1OfBox): void;
  get(): Bnd_HArray1OfBox;
}

  export declare class Handle_Bnd_HArray1OfBox_1 extends Handle_Bnd_HArray1OfBox {
    constructor();
  }

  export declare class Handle_Bnd_HArray1OfBox_2 extends Handle_Bnd_HArray1OfBox {
    constructor(thePtr: Bnd_HArray1OfBox);
  }

  export declare class Handle_Bnd_HArray1OfBox_3 extends Handle_Bnd_HArray1OfBox {
    constructor(theHandle: Handle_Bnd_HArray1OfBox);
  }

  export declare class Handle_Bnd_HArray1OfBox_4 extends Handle_Bnd_HArray1OfBox {
    constructor(theHandle: Handle_Bnd_HArray1OfBox);
  }

export declare class TColgp_SequenceOfPnt2d extends NCollection_BaseSequence {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Reverse(): void;
  Exchange(I: Standard_Integer, J: Standard_Integer): void;
  delNode(theNode: NCollection_SeqNode, theAl: any): void;
  Clear(theAllocator: any): void;
  Assign(theOther: TColgp_SequenceOfPnt2d): TColgp_SequenceOfPnt2d;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: gp_Pnt2d): void;
  Append_2(theSeq: TColgp_SequenceOfPnt2d): void;
  Prepend_1(theItem: gp_Pnt2d): void;
  Prepend_2(theSeq: TColgp_SequenceOfPnt2d): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: gp_Pnt2d): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: TColgp_SequenceOfPnt2d): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: TColgp_SequenceOfPnt2d): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: gp_Pnt2d): void;
  Split(theIndex: Standard_Integer, theSeq: TColgp_SequenceOfPnt2d): void;
  First(): gp_Pnt2d;
  ChangeFirst(): gp_Pnt2d;
  Last(): gp_Pnt2d;
  ChangeLast(): gp_Pnt2d;
  Value(theIndex: Standard_Integer): gp_Pnt2d;
  ChangeValue(theIndex: Standard_Integer): gp_Pnt2d;
  SetValue(theIndex: Standard_Integer, theItem: gp_Pnt2d): void;
}

  export declare class TColgp_SequenceOfPnt2d_1 extends TColgp_SequenceOfPnt2d {
    constructor();
  }

  export declare class TColgp_SequenceOfPnt2d_2 extends TColgp_SequenceOfPnt2d {
    constructor(theAllocator: any);
  }

  export declare class TColgp_SequenceOfPnt2d_3 extends TColgp_SequenceOfPnt2d {
    constructor(theOther: TColgp_SequenceOfPnt2d);
  }

export declare class TopLoc_MapLocationHasher {
  constructor();
  HashCode(theKey: TopLoc_Location, theUpperBound: Standard_Integer): Standard_Integer;
  IsEqual(theKey1: TopLoc_Location, theKey2: TopLoc_Location): Standard_Boolean;
}

export declare class TopLoc_IndexedMapOfLocation extends NCollection_BaseMap {
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TopLoc_IndexedMapOfLocation): void;
  Assign(theOther: TopLoc_IndexedMapOfLocation): TopLoc_IndexedMapOfLocation;
  ReSize(theExtent: Standard_Integer): void;
  Add(theKey1: TopLoc_Location): Standard_Integer;
  Contains(theKey1: TopLoc_Location): Standard_Boolean;
  Substitute(theIndex: Standard_Integer, theKey1: TopLoc_Location): void;
  Swap(theIndex1: Standard_Integer, theIndex2: Standard_Integer): void;
  RemoveLast(): void;
  RemoveFromIndex(theIndex: Standard_Integer): void;
  RemoveKey(theKey1: TopLoc_Location): Standard_Boolean;
  FindKey(theIndex: Standard_Integer): TopLoc_Location;
  FindIndex(theKey1: TopLoc_Location): Standard_Integer;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class TopLoc_IndexedMapOfLocation_1 extends TopLoc_IndexedMapOfLocation {
    constructor();
  }

  export declare class TopLoc_IndexedMapOfLocation_2 extends TopLoc_IndexedMapOfLocation {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class TopLoc_IndexedMapOfLocation_3 extends TopLoc_IndexedMapOfLocation {
    constructor(theOther: TopLoc_IndexedMapOfLocation);
  }

export declare class Bnd_Array1OfBox2d {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: Bnd_Box2d): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: Bnd_Array1OfBox2d): Bnd_Array1OfBox2d;
  Move(theOther: Bnd_Array1OfBox2d): Bnd_Array1OfBox2d;
  First(): Bnd_Box2d;
  ChangeFirst(): Bnd_Box2d;
  Last(): Bnd_Box2d;
  ChangeLast(): Bnd_Box2d;
  Value(theIndex: Standard_Integer): Bnd_Box2d;
  ChangeValue(theIndex: Standard_Integer): Bnd_Box2d;
  SetValue(theIndex: Standard_Integer, theItem: Bnd_Box2d): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class Bnd_Array1OfBox2d_1 extends Bnd_Array1OfBox2d {
    constructor();
  }

  export declare class Bnd_Array1OfBox2d_2 extends Bnd_Array1OfBox2d {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class Bnd_Array1OfBox2d_3 extends Bnd_Array1OfBox2d {
    constructor(theOther: Bnd_Array1OfBox2d);
  }

  export declare class Bnd_Array1OfBox2d_4 extends Bnd_Array1OfBox2d {
    constructor(theOther: Bnd_Array1OfBox2d);
  }

  export declare class Bnd_Array1OfBox2d_5 extends Bnd_Array1OfBox2d {
    constructor(theBegin: Bnd_Box2d, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_Bnd_HArray1OfBox2d {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Bnd_HArray1OfBox2d): void;
  get(): Bnd_HArray1OfBox2d;
}

  export declare class Handle_Bnd_HArray1OfBox2d_1 extends Handle_Bnd_HArray1OfBox2d {
    constructor();
  }

  export declare class Handle_Bnd_HArray1OfBox2d_2 extends Handle_Bnd_HArray1OfBox2d {
    constructor(thePtr: Bnd_HArray1OfBox2d);
  }

  export declare class Handle_Bnd_HArray1OfBox2d_3 extends Handle_Bnd_HArray1OfBox2d {
    constructor(theHandle: Handle_Bnd_HArray1OfBox2d);
  }

  export declare class Handle_Bnd_HArray1OfBox2d_4 extends Handle_Bnd_HArray1OfBox2d {
    constructor(theHandle: Handle_Bnd_HArray1OfBox2d);
  }

export declare class TColgp_Array2OfVec {
  Init(theValue: gp_Vec): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  NbRows(): Standard_Integer;
  NbColumns(): Standard_Integer;
  RowLength(): Standard_Integer;
  ColLength(): Standard_Integer;
  LowerRow(): Standard_Integer;
  UpperRow(): Standard_Integer;
  LowerCol(): Standard_Integer;
  UpperCol(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  Assign(theOther: TColgp_Array2OfVec): TColgp_Array2OfVec;
  Move(theOther: TColgp_Array2OfVec): TColgp_Array2OfVec;
  Value(theRow: Standard_Integer, theCol: Standard_Integer): gp_Vec;
  ChangeValue(theRow: Standard_Integer, theCol: Standard_Integer): gp_Vec;
  SetValue(theRow: Standard_Integer, theCol: Standard_Integer, theItem: gp_Vec): void;
  Resize(theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class TColgp_Array2OfVec_1 extends TColgp_Array2OfVec {
    constructor();
  }

  export declare class TColgp_Array2OfVec_2 extends TColgp_Array2OfVec {
    constructor(theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer);
  }

  export declare class TColgp_Array2OfVec_3 extends TColgp_Array2OfVec {
    constructor(theOther: TColgp_Array2OfVec);
  }

  export declare class TColgp_Array2OfVec_4 extends TColgp_Array2OfVec {
    constructor(theOther: TColgp_Array2OfVec);
  }

  export declare class TColgp_Array2OfVec_5 extends TColgp_Array2OfVec {
    constructor(theBegin: gp_Vec, theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer);
  }

export declare class TColgp_SequenceOfAx1 extends NCollection_BaseSequence {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Reverse(): void;
  Exchange(I: Standard_Integer, J: Standard_Integer): void;
  delNode(theNode: NCollection_SeqNode, theAl: any): void;
  Clear(theAllocator: any): void;
  Assign(theOther: TColgp_SequenceOfAx1): TColgp_SequenceOfAx1;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: gp_Ax1): void;
  Append_2(theSeq: TColgp_SequenceOfAx1): void;
  Prepend_1(theItem: gp_Ax1): void;
  Prepend_2(theSeq: TColgp_SequenceOfAx1): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: gp_Ax1): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: TColgp_SequenceOfAx1): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: TColgp_SequenceOfAx1): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: gp_Ax1): void;
  Split(theIndex: Standard_Integer, theSeq: TColgp_SequenceOfAx1): void;
  First(): gp_Ax1;
  ChangeFirst(): gp_Ax1;
  Last(): gp_Ax1;
  ChangeLast(): gp_Ax1;
  Value(theIndex: Standard_Integer): gp_Ax1;
  ChangeValue(theIndex: Standard_Integer): gp_Ax1;
  SetValue(theIndex: Standard_Integer, theItem: gp_Ax1): void;
}

  export declare class TColgp_SequenceOfAx1_1 extends TColgp_SequenceOfAx1 {
    constructor();
  }

  export declare class TColgp_SequenceOfAx1_2 extends TColgp_SequenceOfAx1 {
    constructor(theAllocator: any);
  }

  export declare class TColgp_SequenceOfAx1_3 extends TColgp_SequenceOfAx1 {
    constructor(theOther: TColgp_SequenceOfAx1);
  }

export declare class Handle_TColgp_HSequenceOfXY {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColgp_HSequenceOfXY): void;
  get(): TColgp_HSequenceOfXY;
}

  export declare class Handle_TColgp_HSequenceOfXY_1 extends Handle_TColgp_HSequenceOfXY {
    constructor();
  }

  export declare class Handle_TColgp_HSequenceOfXY_2 extends Handle_TColgp_HSequenceOfXY {
    constructor(thePtr: TColgp_HSequenceOfXY);
  }

  export declare class Handle_TColgp_HSequenceOfXY_3 extends Handle_TColgp_HSequenceOfXY {
    constructor(theHandle: Handle_TColgp_HSequenceOfXY);
  }

  export declare class Handle_TColgp_HSequenceOfXY_4 extends Handle_TColgp_HSequenceOfXY {
    constructor(theHandle: Handle_TColgp_HSequenceOfXY);
  }

export declare class Handle_Expr_GeneralExpression {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_GeneralExpression): void;
  get(): Expr_GeneralExpression;
}

  export declare class Handle_Expr_GeneralExpression_1 extends Handle_Expr_GeneralExpression {
    constructor();
  }

  export declare class Handle_Expr_GeneralExpression_2 extends Handle_Expr_GeneralExpression {
    constructor(thePtr: Expr_GeneralExpression);
  }

  export declare class Handle_Expr_GeneralExpression_3 extends Handle_Expr_GeneralExpression {
    constructor(theHandle: Handle_Expr_GeneralExpression);
  }

  export declare class Handle_Expr_GeneralExpression_4 extends Handle_Expr_GeneralExpression {
    constructor(theHandle: Handle_Expr_GeneralExpression);
  }

export declare class Handle_Expr_UnaryExpression {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_UnaryExpression): void;
  get(): Expr_UnaryExpression;
}

  export declare class Handle_Expr_UnaryExpression_1 extends Handle_Expr_UnaryExpression {
    constructor();
  }

  export declare class Handle_Expr_UnaryExpression_2 extends Handle_Expr_UnaryExpression {
    constructor(thePtr: Expr_UnaryExpression);
  }

  export declare class Handle_Expr_UnaryExpression_3 extends Handle_Expr_UnaryExpression {
    constructor(theHandle: Handle_Expr_UnaryExpression);
  }

  export declare class Handle_Expr_UnaryExpression_4 extends Handle_Expr_UnaryExpression {
    constructor(theHandle: Handle_Expr_UnaryExpression);
  }

export declare class Handle_Expr_Absolute {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_Absolute): void;
  get(): Expr_Absolute;
}

  export declare class Handle_Expr_Absolute_1 extends Handle_Expr_Absolute {
    constructor();
  }

  export declare class Handle_Expr_Absolute_2 extends Handle_Expr_Absolute {
    constructor(thePtr: Expr_Absolute);
  }

  export declare class Handle_Expr_Absolute_3 extends Handle_Expr_Absolute {
    constructor(theHandle: Handle_Expr_Absolute);
  }

  export declare class Handle_Expr_Absolute_4 extends Handle_Expr_Absolute {
    constructor(theHandle: Handle_Expr_Absolute);
  }

export declare class Handle_Expr_ArcCosine {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_ArcCosine): void;
  get(): Expr_ArcCosine;
}

  export declare class Handle_Expr_ArcCosine_1 extends Handle_Expr_ArcCosine {
    constructor();
  }

  export declare class Handle_Expr_ArcCosine_2 extends Handle_Expr_ArcCosine {
    constructor(thePtr: Expr_ArcCosine);
  }

  export declare class Handle_Expr_ArcCosine_3 extends Handle_Expr_ArcCosine {
    constructor(theHandle: Handle_Expr_ArcCosine);
  }

  export declare class Handle_Expr_ArcCosine_4 extends Handle_Expr_ArcCosine {
    constructor(theHandle: Handle_Expr_ArcCosine);
  }

export declare class Handle_Expr_ArcSine {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_ArcSine): void;
  get(): Expr_ArcSine;
}

  export declare class Handle_Expr_ArcSine_1 extends Handle_Expr_ArcSine {
    constructor();
  }

  export declare class Handle_Expr_ArcSine_2 extends Handle_Expr_ArcSine {
    constructor(thePtr: Expr_ArcSine);
  }

  export declare class Handle_Expr_ArcSine_3 extends Handle_Expr_ArcSine {
    constructor(theHandle: Handle_Expr_ArcSine);
  }

  export declare class Handle_Expr_ArcSine_4 extends Handle_Expr_ArcSine {
    constructor(theHandle: Handle_Expr_ArcSine);
  }

export declare class Handle_Expr_ArcTangent {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_ArcTangent): void;
  get(): Expr_ArcTangent;
}

  export declare class Handle_Expr_ArcTangent_1 extends Handle_Expr_ArcTangent {
    constructor();
  }

  export declare class Handle_Expr_ArcTangent_2 extends Handle_Expr_ArcTangent {
    constructor(thePtr: Expr_ArcTangent);
  }

  export declare class Handle_Expr_ArcTangent_3 extends Handle_Expr_ArcTangent {
    constructor(theHandle: Handle_Expr_ArcTangent);
  }

  export declare class Handle_Expr_ArcTangent_4 extends Handle_Expr_ArcTangent {
    constructor(theHandle: Handle_Expr_ArcTangent);
  }

export declare class Handle_Expr_ArgCosh {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_ArgCosh): void;
  get(): Expr_ArgCosh;
}

  export declare class Handle_Expr_ArgCosh_1 extends Handle_Expr_ArgCosh {
    constructor();
  }

  export declare class Handle_Expr_ArgCosh_2 extends Handle_Expr_ArgCosh {
    constructor(thePtr: Expr_ArgCosh);
  }

  export declare class Handle_Expr_ArgCosh_3 extends Handle_Expr_ArgCosh {
    constructor(theHandle: Handle_Expr_ArgCosh);
  }

  export declare class Handle_Expr_ArgCosh_4 extends Handle_Expr_ArgCosh {
    constructor(theHandle: Handle_Expr_ArgCosh);
  }

export declare class Handle_Expr_ArgSinh {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_ArgSinh): void;
  get(): Expr_ArgSinh;
}

  export declare class Handle_Expr_ArgSinh_1 extends Handle_Expr_ArgSinh {
    constructor();
  }

  export declare class Handle_Expr_ArgSinh_2 extends Handle_Expr_ArgSinh {
    constructor(thePtr: Expr_ArgSinh);
  }

  export declare class Handle_Expr_ArgSinh_3 extends Handle_Expr_ArgSinh {
    constructor(theHandle: Handle_Expr_ArgSinh);
  }

  export declare class Handle_Expr_ArgSinh_4 extends Handle_Expr_ArgSinh {
    constructor(theHandle: Handle_Expr_ArgSinh);
  }

export declare class Handle_Expr_ArgTanh {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_ArgTanh): void;
  get(): Expr_ArgTanh;
}

  export declare class Handle_Expr_ArgTanh_1 extends Handle_Expr_ArgTanh {
    constructor();
  }

  export declare class Handle_Expr_ArgTanh_2 extends Handle_Expr_ArgTanh {
    constructor(thePtr: Expr_ArgTanh);
  }

  export declare class Handle_Expr_ArgTanh_3 extends Handle_Expr_ArgTanh {
    constructor(theHandle: Handle_Expr_ArgTanh);
  }

  export declare class Handle_Expr_ArgTanh_4 extends Handle_Expr_ArgTanh {
    constructor(theHandle: Handle_Expr_ArgTanh);
  }

export declare class Handle_Expr_GeneralRelation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_GeneralRelation): void;
  get(): Expr_GeneralRelation;
}

  export declare class Handle_Expr_GeneralRelation_1 extends Handle_Expr_GeneralRelation {
    constructor();
  }

  export declare class Handle_Expr_GeneralRelation_2 extends Handle_Expr_GeneralRelation {
    constructor(thePtr: Expr_GeneralRelation);
  }

  export declare class Handle_Expr_GeneralRelation_3 extends Handle_Expr_GeneralRelation {
    constructor(theHandle: Handle_Expr_GeneralRelation);
  }

  export declare class Handle_Expr_GeneralRelation_4 extends Handle_Expr_GeneralRelation {
    constructor(theHandle: Handle_Expr_GeneralRelation);
  }

export declare class Handle_Expr_SingleRelation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_SingleRelation): void;
  get(): Expr_SingleRelation;
}

  export declare class Handle_Expr_SingleRelation_1 extends Handle_Expr_SingleRelation {
    constructor();
  }

  export declare class Handle_Expr_SingleRelation_2 extends Handle_Expr_SingleRelation {
    constructor(thePtr: Expr_SingleRelation);
  }

  export declare class Handle_Expr_SingleRelation_3 extends Handle_Expr_SingleRelation {
    constructor(theHandle: Handle_Expr_SingleRelation);
  }

  export declare class Handle_Expr_SingleRelation_4 extends Handle_Expr_SingleRelation {
    constructor(theHandle: Handle_Expr_SingleRelation);
  }

export declare class Handle_Expr_BinaryExpression {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_BinaryExpression): void;
  get(): Expr_BinaryExpression;
}

  export declare class Handle_Expr_BinaryExpression_1 extends Handle_Expr_BinaryExpression {
    constructor();
  }

  export declare class Handle_Expr_BinaryExpression_2 extends Handle_Expr_BinaryExpression {
    constructor(thePtr: Expr_BinaryExpression);
  }

  export declare class Handle_Expr_BinaryExpression_3 extends Handle_Expr_BinaryExpression {
    constructor(theHandle: Handle_Expr_BinaryExpression);
  }

  export declare class Handle_Expr_BinaryExpression_4 extends Handle_Expr_BinaryExpression {
    constructor(theHandle: Handle_Expr_BinaryExpression);
  }

export declare class Handle_Expr_BinaryFunction {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_BinaryFunction): void;
  get(): Expr_BinaryFunction;
}

  export declare class Handle_Expr_BinaryFunction_1 extends Handle_Expr_BinaryFunction {
    constructor();
  }

  export declare class Handle_Expr_BinaryFunction_2 extends Handle_Expr_BinaryFunction {
    constructor(thePtr: Expr_BinaryFunction);
  }

  export declare class Handle_Expr_BinaryFunction_3 extends Handle_Expr_BinaryFunction {
    constructor(theHandle: Handle_Expr_BinaryFunction);
  }

  export declare class Handle_Expr_BinaryFunction_4 extends Handle_Expr_BinaryFunction {
    constructor(theHandle: Handle_Expr_BinaryFunction);
  }

export declare class Handle_Expr_Cosh {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_Cosh): void;
  get(): Expr_Cosh;
}

  export declare class Handle_Expr_Cosh_1 extends Handle_Expr_Cosh {
    constructor();
  }

  export declare class Handle_Expr_Cosh_2 extends Handle_Expr_Cosh {
    constructor(thePtr: Expr_Cosh);
  }

  export declare class Handle_Expr_Cosh_3 extends Handle_Expr_Cosh {
    constructor(theHandle: Handle_Expr_Cosh);
  }

  export declare class Handle_Expr_Cosh_4 extends Handle_Expr_Cosh {
    constructor(theHandle: Handle_Expr_Cosh);
  }

export declare class Handle_Expr_Cosine {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_Cosine): void;
  get(): Expr_Cosine;
}

  export declare class Handle_Expr_Cosine_1 extends Handle_Expr_Cosine {
    constructor();
  }

  export declare class Handle_Expr_Cosine_2 extends Handle_Expr_Cosine {
    constructor(thePtr: Expr_Cosine);
  }

  export declare class Handle_Expr_Cosine_3 extends Handle_Expr_Cosine {
    constructor(theHandle: Handle_Expr_Cosine);
  }

  export declare class Handle_Expr_Cosine_4 extends Handle_Expr_Cosine {
    constructor(theHandle: Handle_Expr_Cosine);
  }

export declare class Handle_Expr_Difference {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_Difference): void;
  get(): Expr_Difference;
}

  export declare class Handle_Expr_Difference_1 extends Handle_Expr_Difference {
    constructor();
  }

  export declare class Handle_Expr_Difference_2 extends Handle_Expr_Difference {
    constructor(thePtr: Expr_Difference);
  }

  export declare class Handle_Expr_Difference_3 extends Handle_Expr_Difference {
    constructor(theHandle: Handle_Expr_Difference);
  }

  export declare class Handle_Expr_Difference_4 extends Handle_Expr_Difference {
    constructor(theHandle: Handle_Expr_Difference);
  }

export declare class Handle_Expr_Different {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_Different): void;
  get(): Expr_Different;
}

  export declare class Handle_Expr_Different_1 extends Handle_Expr_Different {
    constructor();
  }

  export declare class Handle_Expr_Different_2 extends Handle_Expr_Different {
    constructor(thePtr: Expr_Different);
  }

  export declare class Handle_Expr_Different_3 extends Handle_Expr_Different {
    constructor(theHandle: Handle_Expr_Different);
  }

  export declare class Handle_Expr_Different_4 extends Handle_Expr_Different {
    constructor(theHandle: Handle_Expr_Different);
  }

export declare class Handle_Expr_Division {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_Division): void;
  get(): Expr_Division;
}

  export declare class Handle_Expr_Division_1 extends Handle_Expr_Division {
    constructor();
  }

  export declare class Handle_Expr_Division_2 extends Handle_Expr_Division {
    constructor(thePtr: Expr_Division);
  }

  export declare class Handle_Expr_Division_3 extends Handle_Expr_Division {
    constructor(theHandle: Handle_Expr_Division);
  }

  export declare class Handle_Expr_Division_4 extends Handle_Expr_Division {
    constructor(theHandle: Handle_Expr_Division);
  }

export declare class Handle_Expr_Equal {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_Equal): void;
  get(): Expr_Equal;
}

  export declare class Handle_Expr_Equal_1 extends Handle_Expr_Equal {
    constructor();
  }

  export declare class Handle_Expr_Equal_2 extends Handle_Expr_Equal {
    constructor(thePtr: Expr_Equal);
  }

  export declare class Handle_Expr_Equal_3 extends Handle_Expr_Equal {
    constructor(theHandle: Handle_Expr_Equal);
  }

  export declare class Handle_Expr_Equal_4 extends Handle_Expr_Equal {
    constructor(theHandle: Handle_Expr_Equal);
  }

export declare class Handle_Expr_Exponential {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_Exponential): void;
  get(): Expr_Exponential;
}

  export declare class Handle_Expr_Exponential_1 extends Handle_Expr_Exponential {
    constructor();
  }

  export declare class Handle_Expr_Exponential_2 extends Handle_Expr_Exponential {
    constructor(thePtr: Expr_Exponential);
  }

  export declare class Handle_Expr_Exponential_3 extends Handle_Expr_Exponential {
    constructor(theHandle: Handle_Expr_Exponential);
  }

  export declare class Handle_Expr_Exponential_4 extends Handle_Expr_Exponential {
    constructor(theHandle: Handle_Expr_Exponential);
  }

export declare class Handle_Expr_Exponentiate {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_Exponentiate): void;
  get(): Expr_Exponentiate;
}

  export declare class Handle_Expr_Exponentiate_1 extends Handle_Expr_Exponentiate {
    constructor();
  }

  export declare class Handle_Expr_Exponentiate_2 extends Handle_Expr_Exponentiate {
    constructor(thePtr: Expr_Exponentiate);
  }

  export declare class Handle_Expr_Exponentiate_3 extends Handle_Expr_Exponentiate {
    constructor(theHandle: Handle_Expr_Exponentiate);
  }

  export declare class Handle_Expr_Exponentiate_4 extends Handle_Expr_Exponentiate {
    constructor(theHandle: Handle_Expr_Exponentiate);
  }

export declare class Handle_Expr_ExprFailure {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_ExprFailure): void;
  get(): Expr_ExprFailure;
}

  export declare class Handle_Expr_ExprFailure_1 extends Handle_Expr_ExprFailure {
    constructor();
  }

  export declare class Handle_Expr_ExprFailure_2 extends Handle_Expr_ExprFailure {
    constructor(thePtr: Expr_ExprFailure);
  }

  export declare class Handle_Expr_ExprFailure_3 extends Handle_Expr_ExprFailure {
    constructor(theHandle: Handle_Expr_ExprFailure);
  }

  export declare class Handle_Expr_ExprFailure_4 extends Handle_Expr_ExprFailure {
    constructor(theHandle: Handle_Expr_ExprFailure);
  }

export declare class Handle_Expr_GeneralFunction {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_GeneralFunction): void;
  get(): Expr_GeneralFunction;
}

  export declare class Handle_Expr_GeneralFunction_1 extends Handle_Expr_GeneralFunction {
    constructor();
  }

  export declare class Handle_Expr_GeneralFunction_2 extends Handle_Expr_GeneralFunction {
    constructor(thePtr: Expr_GeneralFunction);
  }

  export declare class Handle_Expr_GeneralFunction_3 extends Handle_Expr_GeneralFunction {
    constructor(theHandle: Handle_Expr_GeneralFunction);
  }

  export declare class Handle_Expr_GeneralFunction_4 extends Handle_Expr_GeneralFunction {
    constructor(theHandle: Handle_Expr_GeneralFunction);
  }

export declare class Handle_Expr_FunctionDerivative {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_FunctionDerivative): void;
  get(): Expr_FunctionDerivative;
}

  export declare class Handle_Expr_FunctionDerivative_1 extends Handle_Expr_FunctionDerivative {
    constructor();
  }

  export declare class Handle_Expr_FunctionDerivative_2 extends Handle_Expr_FunctionDerivative {
    constructor(thePtr: Expr_FunctionDerivative);
  }

  export declare class Handle_Expr_FunctionDerivative_3 extends Handle_Expr_FunctionDerivative {
    constructor(theHandle: Handle_Expr_FunctionDerivative);
  }

  export declare class Handle_Expr_FunctionDerivative_4 extends Handle_Expr_FunctionDerivative {
    constructor(theHandle: Handle_Expr_FunctionDerivative);
  }

export declare class Handle_Expr_GreaterThan {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_GreaterThan): void;
  get(): Expr_GreaterThan;
}

  export declare class Handle_Expr_GreaterThan_1 extends Handle_Expr_GreaterThan {
    constructor();
  }

  export declare class Handle_Expr_GreaterThan_2 extends Handle_Expr_GreaterThan {
    constructor(thePtr: Expr_GreaterThan);
  }

  export declare class Handle_Expr_GreaterThan_3 extends Handle_Expr_GreaterThan {
    constructor(theHandle: Handle_Expr_GreaterThan);
  }

  export declare class Handle_Expr_GreaterThan_4 extends Handle_Expr_GreaterThan {
    constructor(theHandle: Handle_Expr_GreaterThan);
  }

export declare class Handle_Expr_GreaterThanOrEqual {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_GreaterThanOrEqual): void;
  get(): Expr_GreaterThanOrEqual;
}

  export declare class Handle_Expr_GreaterThanOrEqual_1 extends Handle_Expr_GreaterThanOrEqual {
    constructor();
  }

  export declare class Handle_Expr_GreaterThanOrEqual_2 extends Handle_Expr_GreaterThanOrEqual {
    constructor(thePtr: Expr_GreaterThanOrEqual);
  }

  export declare class Handle_Expr_GreaterThanOrEqual_3 extends Handle_Expr_GreaterThanOrEqual {
    constructor(theHandle: Handle_Expr_GreaterThanOrEqual);
  }

  export declare class Handle_Expr_GreaterThanOrEqual_4 extends Handle_Expr_GreaterThanOrEqual {
    constructor(theHandle: Handle_Expr_GreaterThanOrEqual);
  }

export declare class Handle_Expr_InvalidAssignment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_InvalidAssignment): void;
  get(): Expr_InvalidAssignment;
}

  export declare class Handle_Expr_InvalidAssignment_1 extends Handle_Expr_InvalidAssignment {
    constructor();
  }

  export declare class Handle_Expr_InvalidAssignment_2 extends Handle_Expr_InvalidAssignment {
    constructor(thePtr: Expr_InvalidAssignment);
  }

  export declare class Handle_Expr_InvalidAssignment_3 extends Handle_Expr_InvalidAssignment {
    constructor(theHandle: Handle_Expr_InvalidAssignment);
  }

  export declare class Handle_Expr_InvalidAssignment_4 extends Handle_Expr_InvalidAssignment {
    constructor(theHandle: Handle_Expr_InvalidAssignment);
  }

export declare class Handle_Expr_InvalidFunction {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_InvalidFunction): void;
  get(): Expr_InvalidFunction;
}

  export declare class Handle_Expr_InvalidFunction_1 extends Handle_Expr_InvalidFunction {
    constructor();
  }

  export declare class Handle_Expr_InvalidFunction_2 extends Handle_Expr_InvalidFunction {
    constructor(thePtr: Expr_InvalidFunction);
  }

  export declare class Handle_Expr_InvalidFunction_3 extends Handle_Expr_InvalidFunction {
    constructor(theHandle: Handle_Expr_InvalidFunction);
  }

  export declare class Handle_Expr_InvalidFunction_4 extends Handle_Expr_InvalidFunction {
    constructor(theHandle: Handle_Expr_InvalidFunction);
  }

export declare class Handle_Expr_InvalidOperand {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_InvalidOperand): void;
  get(): Expr_InvalidOperand;
}

  export declare class Handle_Expr_InvalidOperand_1 extends Handle_Expr_InvalidOperand {
    constructor();
  }

  export declare class Handle_Expr_InvalidOperand_2 extends Handle_Expr_InvalidOperand {
    constructor(thePtr: Expr_InvalidOperand);
  }

  export declare class Handle_Expr_InvalidOperand_3 extends Handle_Expr_InvalidOperand {
    constructor(theHandle: Handle_Expr_InvalidOperand);
  }

  export declare class Handle_Expr_InvalidOperand_4 extends Handle_Expr_InvalidOperand {
    constructor(theHandle: Handle_Expr_InvalidOperand);
  }

export declare class Handle_Expr_LessThan {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_LessThan): void;
  get(): Expr_LessThan;
}

  export declare class Handle_Expr_LessThan_1 extends Handle_Expr_LessThan {
    constructor();
  }

  export declare class Handle_Expr_LessThan_2 extends Handle_Expr_LessThan {
    constructor(thePtr: Expr_LessThan);
  }

  export declare class Handle_Expr_LessThan_3 extends Handle_Expr_LessThan {
    constructor(theHandle: Handle_Expr_LessThan);
  }

  export declare class Handle_Expr_LessThan_4 extends Handle_Expr_LessThan {
    constructor(theHandle: Handle_Expr_LessThan);
  }

export declare class Handle_Expr_LessThanOrEqual {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_LessThanOrEqual): void;
  get(): Expr_LessThanOrEqual;
}

  export declare class Handle_Expr_LessThanOrEqual_1 extends Handle_Expr_LessThanOrEqual {
    constructor();
  }

  export declare class Handle_Expr_LessThanOrEqual_2 extends Handle_Expr_LessThanOrEqual {
    constructor(thePtr: Expr_LessThanOrEqual);
  }

  export declare class Handle_Expr_LessThanOrEqual_3 extends Handle_Expr_LessThanOrEqual {
    constructor(theHandle: Handle_Expr_LessThanOrEqual);
  }

  export declare class Handle_Expr_LessThanOrEqual_4 extends Handle_Expr_LessThanOrEqual {
    constructor(theHandle: Handle_Expr_LessThanOrEqual);
  }

export declare class Handle_Expr_LogOf10 {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_LogOf10): void;
  get(): Expr_LogOf10;
}

  export declare class Handle_Expr_LogOf10_1 extends Handle_Expr_LogOf10 {
    constructor();
  }

  export declare class Handle_Expr_LogOf10_2 extends Handle_Expr_LogOf10 {
    constructor(thePtr: Expr_LogOf10);
  }

  export declare class Handle_Expr_LogOf10_3 extends Handle_Expr_LogOf10 {
    constructor(theHandle: Handle_Expr_LogOf10);
  }

  export declare class Handle_Expr_LogOf10_4 extends Handle_Expr_LogOf10 {
    constructor(theHandle: Handle_Expr_LogOf10);
  }

export declare class Handle_Expr_LogOfe {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_LogOfe): void;
  get(): Expr_LogOfe;
}

  export declare class Handle_Expr_LogOfe_1 extends Handle_Expr_LogOfe {
    constructor();
  }

  export declare class Handle_Expr_LogOfe_2 extends Handle_Expr_LogOfe {
    constructor(thePtr: Expr_LogOfe);
  }

  export declare class Handle_Expr_LogOfe_3 extends Handle_Expr_LogOfe {
    constructor(theHandle: Handle_Expr_LogOfe);
  }

  export declare class Handle_Expr_LogOfe_4 extends Handle_Expr_LogOfe {
    constructor(theHandle: Handle_Expr_LogOfe);
  }

export declare class Handle_Expr_NamedExpression {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_NamedExpression): void;
  get(): Expr_NamedExpression;
}

  export declare class Handle_Expr_NamedExpression_1 extends Handle_Expr_NamedExpression {
    constructor();
  }

  export declare class Handle_Expr_NamedExpression_2 extends Handle_Expr_NamedExpression {
    constructor(thePtr: Expr_NamedExpression);
  }

  export declare class Handle_Expr_NamedExpression_3 extends Handle_Expr_NamedExpression {
    constructor(theHandle: Handle_Expr_NamedExpression);
  }

  export declare class Handle_Expr_NamedExpression_4 extends Handle_Expr_NamedExpression {
    constructor(theHandle: Handle_Expr_NamedExpression);
  }

export declare class Handle_Expr_NamedUnknown {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_NamedUnknown): void;
  get(): Expr_NamedUnknown;
}

  export declare class Handle_Expr_NamedUnknown_1 extends Handle_Expr_NamedUnknown {
    constructor();
  }

  export declare class Handle_Expr_NamedUnknown_2 extends Handle_Expr_NamedUnknown {
    constructor(thePtr: Expr_NamedUnknown);
  }

  export declare class Handle_Expr_NamedUnknown_3 extends Handle_Expr_NamedUnknown {
    constructor(theHandle: Handle_Expr_NamedUnknown);
  }

  export declare class Handle_Expr_NamedUnknown_4 extends Handle_Expr_NamedUnknown {
    constructor(theHandle: Handle_Expr_NamedUnknown);
  }

export declare class Handle_Expr_NamedConstant {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_NamedConstant): void;
  get(): Expr_NamedConstant;
}

  export declare class Handle_Expr_NamedConstant_1 extends Handle_Expr_NamedConstant {
    constructor();
  }

  export declare class Handle_Expr_NamedConstant_2 extends Handle_Expr_NamedConstant {
    constructor(thePtr: Expr_NamedConstant);
  }

  export declare class Handle_Expr_NamedConstant_3 extends Handle_Expr_NamedConstant {
    constructor(theHandle: Handle_Expr_NamedConstant);
  }

  export declare class Handle_Expr_NamedConstant_4 extends Handle_Expr_NamedConstant {
    constructor(theHandle: Handle_Expr_NamedConstant);
  }

export declare class Handle_Expr_NamedFunction {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_NamedFunction): void;
  get(): Expr_NamedFunction;
}

  export declare class Handle_Expr_NamedFunction_1 extends Handle_Expr_NamedFunction {
    constructor();
  }

  export declare class Handle_Expr_NamedFunction_2 extends Handle_Expr_NamedFunction {
    constructor(thePtr: Expr_NamedFunction);
  }

  export declare class Handle_Expr_NamedFunction_3 extends Handle_Expr_NamedFunction {
    constructor(theHandle: Handle_Expr_NamedFunction);
  }

  export declare class Handle_Expr_NamedFunction_4 extends Handle_Expr_NamedFunction {
    constructor(theHandle: Handle_Expr_NamedFunction);
  }

export declare class Handle_Expr_NotAssigned {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_NotAssigned): void;
  get(): Expr_NotAssigned;
}

  export declare class Handle_Expr_NotAssigned_1 extends Handle_Expr_NotAssigned {
    constructor();
  }

  export declare class Handle_Expr_NotAssigned_2 extends Handle_Expr_NotAssigned {
    constructor(thePtr: Expr_NotAssigned);
  }

  export declare class Handle_Expr_NotAssigned_3 extends Handle_Expr_NotAssigned {
    constructor(theHandle: Handle_Expr_NotAssigned);
  }

  export declare class Handle_Expr_NotAssigned_4 extends Handle_Expr_NotAssigned {
    constructor(theHandle: Handle_Expr_NotAssigned);
  }

export declare class Handle_Expr_NotEvaluable {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_NotEvaluable): void;
  get(): Expr_NotEvaluable;
}

  export declare class Handle_Expr_NotEvaluable_1 extends Handle_Expr_NotEvaluable {
    constructor();
  }

  export declare class Handle_Expr_NotEvaluable_2 extends Handle_Expr_NotEvaluable {
    constructor(thePtr: Expr_NotEvaluable);
  }

  export declare class Handle_Expr_NotEvaluable_3 extends Handle_Expr_NotEvaluable {
    constructor(theHandle: Handle_Expr_NotEvaluable);
  }

  export declare class Handle_Expr_NotEvaluable_4 extends Handle_Expr_NotEvaluable {
    constructor(theHandle: Handle_Expr_NotEvaluable);
  }

export declare class Handle_Expr_NumericValue {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_NumericValue): void;
  get(): Expr_NumericValue;
}

  export declare class Handle_Expr_NumericValue_1 extends Handle_Expr_NumericValue {
    constructor();
  }

  export declare class Handle_Expr_NumericValue_2 extends Handle_Expr_NumericValue {
    constructor(thePtr: Expr_NumericValue);
  }

  export declare class Handle_Expr_NumericValue_3 extends Handle_Expr_NumericValue {
    constructor(theHandle: Handle_Expr_NumericValue);
  }

  export declare class Handle_Expr_NumericValue_4 extends Handle_Expr_NumericValue {
    constructor(theHandle: Handle_Expr_NumericValue);
  }

export declare class Handle_Expr_PolyExpression {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_PolyExpression): void;
  get(): Expr_PolyExpression;
}

  export declare class Handle_Expr_PolyExpression_1 extends Handle_Expr_PolyExpression {
    constructor();
  }

  export declare class Handle_Expr_PolyExpression_2 extends Handle_Expr_PolyExpression {
    constructor(thePtr: Expr_PolyExpression);
  }

  export declare class Handle_Expr_PolyExpression_3 extends Handle_Expr_PolyExpression {
    constructor(theHandle: Handle_Expr_PolyExpression);
  }

  export declare class Handle_Expr_PolyExpression_4 extends Handle_Expr_PolyExpression {
    constructor(theHandle: Handle_Expr_PolyExpression);
  }

export declare class Handle_Expr_Sum {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_Sum): void;
  get(): Expr_Sum;
}

  export declare class Handle_Expr_Sum_1 extends Handle_Expr_Sum {
    constructor();
  }

  export declare class Handle_Expr_Sum_2 extends Handle_Expr_Sum {
    constructor(thePtr: Expr_Sum);
  }

  export declare class Handle_Expr_Sum_3 extends Handle_Expr_Sum {
    constructor(theHandle: Handle_Expr_Sum);
  }

  export declare class Handle_Expr_Sum_4 extends Handle_Expr_Sum {
    constructor(theHandle: Handle_Expr_Sum);
  }

export declare class Handle_Expr_UnaryMinus {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_UnaryMinus): void;
  get(): Expr_UnaryMinus;
}

  export declare class Handle_Expr_UnaryMinus_1 extends Handle_Expr_UnaryMinus {
    constructor();
  }

  export declare class Handle_Expr_UnaryMinus_2 extends Handle_Expr_UnaryMinus {
    constructor(thePtr: Expr_UnaryMinus);
  }

  export declare class Handle_Expr_UnaryMinus_3 extends Handle_Expr_UnaryMinus {
    constructor(theHandle: Handle_Expr_UnaryMinus);
  }

  export declare class Handle_Expr_UnaryMinus_4 extends Handle_Expr_UnaryMinus {
    constructor(theHandle: Handle_Expr_UnaryMinus);
  }

export declare class Handle_Expr_Product {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_Product): void;
  get(): Expr_Product;
}

  export declare class Handle_Expr_Product_1 extends Handle_Expr_Product {
    constructor();
  }

  export declare class Handle_Expr_Product_2 extends Handle_Expr_Product {
    constructor(thePtr: Expr_Product);
  }

  export declare class Handle_Expr_Product_3 extends Handle_Expr_Product {
    constructor(theHandle: Handle_Expr_Product);
  }

  export declare class Handle_Expr_Product_4 extends Handle_Expr_Product {
    constructor(theHandle: Handle_Expr_Product);
  }

export declare class Handle_Expr_PolyFunction {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_PolyFunction): void;
  get(): Expr_PolyFunction;
}

  export declare class Handle_Expr_PolyFunction_1 extends Handle_Expr_PolyFunction {
    constructor();
  }

  export declare class Handle_Expr_PolyFunction_2 extends Handle_Expr_PolyFunction {
    constructor(thePtr: Expr_PolyFunction);
  }

  export declare class Handle_Expr_PolyFunction_3 extends Handle_Expr_PolyFunction {
    constructor(theHandle: Handle_Expr_PolyFunction);
  }

  export declare class Handle_Expr_PolyFunction_4 extends Handle_Expr_PolyFunction {
    constructor(theHandle: Handle_Expr_PolyFunction);
  }

export declare class Handle_Expr_Sign {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_Sign): void;
  get(): Expr_Sign;
}

  export declare class Handle_Expr_Sign_1 extends Handle_Expr_Sign {
    constructor();
  }

  export declare class Handle_Expr_Sign_2 extends Handle_Expr_Sign {
    constructor(thePtr: Expr_Sign);
  }

  export declare class Handle_Expr_Sign_3 extends Handle_Expr_Sign {
    constructor(theHandle: Handle_Expr_Sign);
  }

  export declare class Handle_Expr_Sign_4 extends Handle_Expr_Sign {
    constructor(theHandle: Handle_Expr_Sign);
  }

export declare class Handle_Expr_Sine {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_Sine): void;
  get(): Expr_Sine;
}

  export declare class Handle_Expr_Sine_1 extends Handle_Expr_Sine {
    constructor();
  }

  export declare class Handle_Expr_Sine_2 extends Handle_Expr_Sine {
    constructor(thePtr: Expr_Sine);
  }

  export declare class Handle_Expr_Sine_3 extends Handle_Expr_Sine {
    constructor(theHandle: Handle_Expr_Sine);
  }

  export declare class Handle_Expr_Sine_4 extends Handle_Expr_Sine {
    constructor(theHandle: Handle_Expr_Sine);
  }

export declare class Handle_Expr_Sinh {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_Sinh): void;
  get(): Expr_Sinh;
}

  export declare class Handle_Expr_Sinh_1 extends Handle_Expr_Sinh {
    constructor();
  }

  export declare class Handle_Expr_Sinh_2 extends Handle_Expr_Sinh {
    constructor(thePtr: Expr_Sinh);
  }

  export declare class Handle_Expr_Sinh_3 extends Handle_Expr_Sinh {
    constructor(theHandle: Handle_Expr_Sinh);
  }

  export declare class Handle_Expr_Sinh_4 extends Handle_Expr_Sinh {
    constructor(theHandle: Handle_Expr_Sinh);
  }

export declare class Handle_Expr_Square {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_Square): void;
  get(): Expr_Square;
}

  export declare class Handle_Expr_Square_1 extends Handle_Expr_Square {
    constructor();
  }

  export declare class Handle_Expr_Square_2 extends Handle_Expr_Square {
    constructor(thePtr: Expr_Square);
  }

  export declare class Handle_Expr_Square_3 extends Handle_Expr_Square {
    constructor(theHandle: Handle_Expr_Square);
  }

  export declare class Handle_Expr_Square_4 extends Handle_Expr_Square {
    constructor(theHandle: Handle_Expr_Square);
  }

export declare class Handle_Expr_SquareRoot {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_SquareRoot): void;
  get(): Expr_SquareRoot;
}

  export declare class Handle_Expr_SquareRoot_1 extends Handle_Expr_SquareRoot {
    constructor();
  }

  export declare class Handle_Expr_SquareRoot_2 extends Handle_Expr_SquareRoot {
    constructor(thePtr: Expr_SquareRoot);
  }

  export declare class Handle_Expr_SquareRoot_3 extends Handle_Expr_SquareRoot {
    constructor(theHandle: Handle_Expr_SquareRoot);
  }

  export declare class Handle_Expr_SquareRoot_4 extends Handle_Expr_SquareRoot {
    constructor(theHandle: Handle_Expr_SquareRoot);
  }

export declare class Handle_Expr_SystemRelation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_SystemRelation): void;
  get(): Expr_SystemRelation;
}

  export declare class Handle_Expr_SystemRelation_1 extends Handle_Expr_SystemRelation {
    constructor();
  }

  export declare class Handle_Expr_SystemRelation_2 extends Handle_Expr_SystemRelation {
    constructor(thePtr: Expr_SystemRelation);
  }

  export declare class Handle_Expr_SystemRelation_3 extends Handle_Expr_SystemRelation {
    constructor(theHandle: Handle_Expr_SystemRelation);
  }

  export declare class Handle_Expr_SystemRelation_4 extends Handle_Expr_SystemRelation {
    constructor(theHandle: Handle_Expr_SystemRelation);
  }

export declare class Handle_Expr_Tangent {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_Tangent): void;
  get(): Expr_Tangent;
}

  export declare class Handle_Expr_Tangent_1 extends Handle_Expr_Tangent {
    constructor();
  }

  export declare class Handle_Expr_Tangent_2 extends Handle_Expr_Tangent {
    constructor(thePtr: Expr_Tangent);
  }

  export declare class Handle_Expr_Tangent_3 extends Handle_Expr_Tangent {
    constructor(theHandle: Handle_Expr_Tangent);
  }

  export declare class Handle_Expr_Tangent_4 extends Handle_Expr_Tangent {
    constructor(theHandle: Handle_Expr_Tangent);
  }

export declare class Handle_Expr_Tanh {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_Tanh): void;
  get(): Expr_Tanh;
}

  export declare class Handle_Expr_Tanh_1 extends Handle_Expr_Tanh {
    constructor();
  }

  export declare class Handle_Expr_Tanh_2 extends Handle_Expr_Tanh {
    constructor(thePtr: Expr_Tanh);
  }

  export declare class Handle_Expr_Tanh_3 extends Handle_Expr_Tanh {
    constructor(theHandle: Handle_Expr_Tanh);
  }

  export declare class Handle_Expr_Tanh_4 extends Handle_Expr_Tanh {
    constructor(theHandle: Handle_Expr_Tanh);
  }

export declare class Handle_Expr_UnaryFunction {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Expr_UnaryFunction): void;
  get(): Expr_UnaryFunction;
}

  export declare class Handle_Expr_UnaryFunction_1 extends Handle_Expr_UnaryFunction {
    constructor();
  }

  export declare class Handle_Expr_UnaryFunction_2 extends Handle_Expr_UnaryFunction {
    constructor(thePtr: Expr_UnaryFunction);
  }

  export declare class Handle_Expr_UnaryFunction_3 extends Handle_Expr_UnaryFunction {
    constructor(theHandle: Handle_Expr_UnaryFunction);
  }

  export declare class Handle_Expr_UnaryFunction_4 extends Handle_Expr_UnaryFunction {
    constructor(theHandle: Handle_Expr_UnaryFunction);
  }

export declare class Handle_ExprIntrp_Generator {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ExprIntrp_Generator): void;
  get(): ExprIntrp_Generator;
}

  export declare class Handle_ExprIntrp_Generator_1 extends Handle_ExprIntrp_Generator {
    constructor();
  }

  export declare class Handle_ExprIntrp_Generator_2 extends Handle_ExprIntrp_Generator {
    constructor(thePtr: ExprIntrp_Generator);
  }

  export declare class Handle_ExprIntrp_Generator_3 extends Handle_ExprIntrp_Generator {
    constructor(theHandle: Handle_ExprIntrp_Generator);
  }

  export declare class Handle_ExprIntrp_Generator_4 extends Handle_ExprIntrp_Generator {
    constructor(theHandle: Handle_ExprIntrp_Generator);
  }

export declare class Handle_ExprIntrp_GenExp {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ExprIntrp_GenExp): void;
  get(): ExprIntrp_GenExp;
}

  export declare class Handle_ExprIntrp_GenExp_1 extends Handle_ExprIntrp_GenExp {
    constructor();
  }

  export declare class Handle_ExprIntrp_GenExp_2 extends Handle_ExprIntrp_GenExp {
    constructor(thePtr: ExprIntrp_GenExp);
  }

  export declare class Handle_ExprIntrp_GenExp_3 extends Handle_ExprIntrp_GenExp {
    constructor(theHandle: Handle_ExprIntrp_GenExp);
  }

  export declare class Handle_ExprIntrp_GenExp_4 extends Handle_ExprIntrp_GenExp {
    constructor(theHandle: Handle_ExprIntrp_GenExp);
  }

export declare class Handle_ExprIntrp_GenFct {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ExprIntrp_GenFct): void;
  get(): ExprIntrp_GenFct;
}

  export declare class Handle_ExprIntrp_GenFct_1 extends Handle_ExprIntrp_GenFct {
    constructor();
  }

  export declare class Handle_ExprIntrp_GenFct_2 extends Handle_ExprIntrp_GenFct {
    constructor(thePtr: ExprIntrp_GenFct);
  }

  export declare class Handle_ExprIntrp_GenFct_3 extends Handle_ExprIntrp_GenFct {
    constructor(theHandle: Handle_ExprIntrp_GenFct);
  }

  export declare class Handle_ExprIntrp_GenFct_4 extends Handle_ExprIntrp_GenFct {
    constructor(theHandle: Handle_ExprIntrp_GenFct);
  }

export declare class Handle_ExprIntrp_GenRel {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ExprIntrp_GenRel): void;
  get(): ExprIntrp_GenRel;
}

  export declare class Handle_ExprIntrp_GenRel_1 extends Handle_ExprIntrp_GenRel {
    constructor();
  }

  export declare class Handle_ExprIntrp_GenRel_2 extends Handle_ExprIntrp_GenRel {
    constructor(thePtr: ExprIntrp_GenRel);
  }

  export declare class Handle_ExprIntrp_GenRel_3 extends Handle_ExprIntrp_GenRel {
    constructor(theHandle: Handle_ExprIntrp_GenRel);
  }

  export declare class Handle_ExprIntrp_GenRel_4 extends Handle_ExprIntrp_GenRel {
    constructor(theHandle: Handle_ExprIntrp_GenRel);
  }

export declare class Handle_ExprIntrp_SyntaxError {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ExprIntrp_SyntaxError): void;
  get(): ExprIntrp_SyntaxError;
}

  export declare class Handle_ExprIntrp_SyntaxError_1 extends Handle_ExprIntrp_SyntaxError {
    constructor();
  }

  export declare class Handle_ExprIntrp_SyntaxError_2 extends Handle_ExprIntrp_SyntaxError {
    constructor(thePtr: ExprIntrp_SyntaxError);
  }

  export declare class Handle_ExprIntrp_SyntaxError_3 extends Handle_ExprIntrp_SyntaxError {
    constructor(theHandle: Handle_ExprIntrp_SyntaxError);
  }

  export declare class Handle_ExprIntrp_SyntaxError_4 extends Handle_ExprIntrp_SyntaxError {
    constructor(theHandle: Handle_ExprIntrp_SyntaxError);
  }

export declare class TColgp_Array1OfXY {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: gp_XY): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: TColgp_Array1OfXY): TColgp_Array1OfXY;
  Move(theOther: TColgp_Array1OfXY): TColgp_Array1OfXY;
  First(): gp_XY;
  ChangeFirst(): gp_XY;
  Last(): gp_XY;
  ChangeLast(): gp_XY;
  Value(theIndex: Standard_Integer): gp_XY;
  ChangeValue(theIndex: Standard_Integer): gp_XY;
  SetValue(theIndex: Standard_Integer, theItem: gp_XY): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class TColgp_Array1OfXY_1 extends TColgp_Array1OfXY {
    constructor();
  }

  export declare class TColgp_Array1OfXY_2 extends TColgp_Array1OfXY {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class TColgp_Array1OfXY_3 extends TColgp_Array1OfXY {
    constructor(theOther: TColgp_Array1OfXY);
  }

  export declare class TColgp_Array1OfXY_4 extends TColgp_Array1OfXY {
    constructor(theOther: TColgp_Array1OfXY);
  }

  export declare class TColgp_Array1OfXY_5 extends TColgp_Array1OfXY {
    constructor(theBegin: gp_XY, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class TColgp_Array1OfCirc2d {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: gp_Circ2d): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: TColgp_Array1OfCirc2d): TColgp_Array1OfCirc2d;
  Move(theOther: TColgp_Array1OfCirc2d): TColgp_Array1OfCirc2d;
  First(): gp_Circ2d;
  ChangeFirst(): gp_Circ2d;
  Last(): gp_Circ2d;
  ChangeLast(): gp_Circ2d;
  Value(theIndex: Standard_Integer): gp_Circ2d;
  ChangeValue(theIndex: Standard_Integer): gp_Circ2d;
  SetValue(theIndex: Standard_Integer, theItem: gp_Circ2d): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class TColgp_Array1OfCirc2d_1 extends TColgp_Array1OfCirc2d {
    constructor();
  }

  export declare class TColgp_Array1OfCirc2d_2 extends TColgp_Array1OfCirc2d {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class TColgp_Array1OfCirc2d_3 extends TColgp_Array1OfCirc2d {
    constructor(theOther: TColgp_Array1OfCirc2d);
  }

  export declare class TColgp_Array1OfCirc2d_4 extends TColgp_Array1OfCirc2d {
    constructor(theOther: TColgp_Array1OfCirc2d);
  }

  export declare class TColgp_Array1OfCirc2d_5 extends TColgp_Array1OfCirc2d {
    constructor(theBegin: gp_Circ2d, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class TColgp_Array1OfLin2d {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: gp_Lin2d): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: TColgp_Array1OfLin2d): TColgp_Array1OfLin2d;
  Move(theOther: TColgp_Array1OfLin2d): TColgp_Array1OfLin2d;
  First(): gp_Lin2d;
  ChangeFirst(): gp_Lin2d;
  Last(): gp_Lin2d;
  ChangeLast(): gp_Lin2d;
  Value(theIndex: Standard_Integer): gp_Lin2d;
  ChangeValue(theIndex: Standard_Integer): gp_Lin2d;
  SetValue(theIndex: Standard_Integer, theItem: gp_Lin2d): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class TColgp_Array1OfLin2d_1 extends TColgp_Array1OfLin2d {
    constructor();
  }

  export declare class TColgp_Array1OfLin2d_2 extends TColgp_Array1OfLin2d {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class TColgp_Array1OfLin2d_3 extends TColgp_Array1OfLin2d {
    constructor(theOther: TColgp_Array1OfLin2d);
  }

  export declare class TColgp_Array1OfLin2d_4 extends TColgp_Array1OfLin2d {
    constructor(theOther: TColgp_Array1OfLin2d);
  }

  export declare class TColgp_Array1OfLin2d_5 extends TColgp_Array1OfLin2d {
    constructor(theBegin: gp_Lin2d, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class TColgp_SequenceOfVec extends NCollection_BaseSequence {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Reverse(): void;
  Exchange(I: Standard_Integer, J: Standard_Integer): void;
  delNode(theNode: NCollection_SeqNode, theAl: any): void;
  Clear(theAllocator: any): void;
  Assign(theOther: TColgp_SequenceOfVec): TColgp_SequenceOfVec;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: gp_Vec): void;
  Append_2(theSeq: TColgp_SequenceOfVec): void;
  Prepend_1(theItem: gp_Vec): void;
  Prepend_2(theSeq: TColgp_SequenceOfVec): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: gp_Vec): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: TColgp_SequenceOfVec): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: TColgp_SequenceOfVec): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: gp_Vec): void;
  Split(theIndex: Standard_Integer, theSeq: TColgp_SequenceOfVec): void;
  First(): gp_Vec;
  ChangeFirst(): gp_Vec;
  Last(): gp_Vec;
  ChangeLast(): gp_Vec;
  Value(theIndex: Standard_Integer): gp_Vec;
  ChangeValue(theIndex: Standard_Integer): gp_Vec;
  SetValue(theIndex: Standard_Integer, theItem: gp_Vec): void;
}

  export declare class TColgp_SequenceOfVec_1 extends TColgp_SequenceOfVec {
    constructor();
  }

  export declare class TColgp_SequenceOfVec_2 extends TColgp_SequenceOfVec {
    constructor(theAllocator: any);
  }

  export declare class TColgp_SequenceOfVec_3 extends TColgp_SequenceOfVec {
    constructor(theOther: TColgp_SequenceOfVec);
  }

export declare class Handle_TColgp_HArray1OfXYZ {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColgp_HArray1OfXYZ): void;
  get(): TColgp_HArray1OfXYZ;
}

  export declare class Handle_TColgp_HArray1OfXYZ_1 extends Handle_TColgp_HArray1OfXYZ {
    constructor();
  }

  export declare class Handle_TColgp_HArray1OfXYZ_2 extends Handle_TColgp_HArray1OfXYZ {
    constructor(thePtr: TColgp_HArray1OfXYZ);
  }

  export declare class Handle_TColgp_HArray1OfXYZ_3 extends Handle_TColgp_HArray1OfXYZ {
    constructor(theHandle: Handle_TColgp_HArray1OfXYZ);
  }

  export declare class Handle_TColgp_HArray1OfXYZ_4 extends Handle_TColgp_HArray1OfXYZ {
    constructor(theHandle: Handle_TColgp_HArray1OfXYZ);
  }

export declare class Handle_TColgp_HArray1OfXY {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColgp_HArray1OfXY): void;
  get(): TColgp_HArray1OfXY;
}

  export declare class Handle_TColgp_HArray1OfXY_1 extends Handle_TColgp_HArray1OfXY {
    constructor();
  }

  export declare class Handle_TColgp_HArray1OfXY_2 extends Handle_TColgp_HArray1OfXY {
    constructor(thePtr: TColgp_HArray1OfXY);
  }

  export declare class Handle_TColgp_HArray1OfXY_3 extends Handle_TColgp_HArray1OfXY {
    constructor(theHandle: Handle_TColgp_HArray1OfXY);
  }

  export declare class Handle_TColgp_HArray1OfXY_4 extends Handle_TColgp_HArray1OfXY {
    constructor(theHandle: Handle_TColgp_HArray1OfXY);
  }

export declare class Handle_TColgp_HSequenceOfXYZ {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColgp_HSequenceOfXYZ): void;
  get(): TColgp_HSequenceOfXYZ;
}

  export declare class Handle_TColgp_HSequenceOfXYZ_1 extends Handle_TColgp_HSequenceOfXYZ {
    constructor();
  }

  export declare class Handle_TColgp_HSequenceOfXYZ_2 extends Handle_TColgp_HSequenceOfXYZ {
    constructor(thePtr: TColgp_HSequenceOfXYZ);
  }

  export declare class Handle_TColgp_HSequenceOfXYZ_3 extends Handle_TColgp_HSequenceOfXYZ {
    constructor(theHandle: Handle_TColgp_HSequenceOfXYZ);
  }

  export declare class Handle_TColgp_HSequenceOfXYZ_4 extends Handle_TColgp_HSequenceOfXYZ {
    constructor(theHandle: Handle_TColgp_HSequenceOfXYZ);
  }

export declare class Handle_PLib_Base {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: PLib_Base): void;
  get(): PLib_Base;
}

  export declare class Handle_PLib_Base_1 extends Handle_PLib_Base {
    constructor();
  }

  export declare class Handle_PLib_Base_2 extends Handle_PLib_Base {
    constructor(thePtr: PLib_Base);
  }

  export declare class Handle_PLib_Base_3 extends Handle_PLib_Base {
    constructor(theHandle: Handle_PLib_Base);
  }

  export declare class Handle_PLib_Base_4 extends Handle_PLib_Base {
    constructor(theHandle: Handle_PLib_Base);
  }

export declare class Handle_PLib_HermitJacobi {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: PLib_HermitJacobi): void;
  get(): PLib_HermitJacobi;
}

  export declare class Handle_PLib_HermitJacobi_1 extends Handle_PLib_HermitJacobi {
    constructor();
  }

  export declare class Handle_PLib_HermitJacobi_2 extends Handle_PLib_HermitJacobi {
    constructor(thePtr: PLib_HermitJacobi);
  }

  export declare class Handle_PLib_HermitJacobi_3 extends Handle_PLib_HermitJacobi {
    constructor(theHandle: Handle_PLib_HermitJacobi);
  }

  export declare class Handle_PLib_HermitJacobi_4 extends Handle_PLib_HermitJacobi {
    constructor(theHandle: Handle_PLib_HermitJacobi);
  }

export declare class Handle_PLib_JacobiPolynomial {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: PLib_JacobiPolynomial): void;
  get(): PLib_JacobiPolynomial;
}

  export declare class Handle_PLib_JacobiPolynomial_1 extends Handle_PLib_JacobiPolynomial {
    constructor();
  }

  export declare class Handle_PLib_JacobiPolynomial_2 extends Handle_PLib_JacobiPolynomial {
    constructor(thePtr: PLib_JacobiPolynomial);
  }

  export declare class Handle_PLib_JacobiPolynomial_3 extends Handle_PLib_JacobiPolynomial {
    constructor(theHandle: Handle_PLib_JacobiPolynomial);
  }

  export declare class Handle_PLib_JacobiPolynomial_4 extends Handle_PLib_JacobiPolynomial {
    constructor(theHandle: Handle_PLib_JacobiPolynomial);
  }

export declare class Handle_Poly_CoherentTriangulation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Poly_CoherentTriangulation): void;
  get(): Poly_CoherentTriangulation;
}

  export declare class Handle_Poly_CoherentTriangulation_1 extends Handle_Poly_CoherentTriangulation {
    constructor();
  }

  export declare class Handle_Poly_CoherentTriangulation_2 extends Handle_Poly_CoherentTriangulation {
    constructor(thePtr: Poly_CoherentTriangulation);
  }

  export declare class Handle_Poly_CoherentTriangulation_3 extends Handle_Poly_CoherentTriangulation {
    constructor(theHandle: Handle_Poly_CoherentTriangulation);
  }

  export declare class Handle_Poly_CoherentTriangulation_4 extends Handle_Poly_CoherentTriangulation {
    constructor(theHandle: Handle_Poly_CoherentTriangulation);
  }

export declare class Handle_Poly_HArray1OfTriangle {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Poly_HArray1OfTriangle): void;
  get(): Poly_HArray1OfTriangle;
}

  export declare class Handle_Poly_HArray1OfTriangle_1 extends Handle_Poly_HArray1OfTriangle {
    constructor();
  }

  export declare class Handle_Poly_HArray1OfTriangle_2 extends Handle_Poly_HArray1OfTriangle {
    constructor(thePtr: Poly_HArray1OfTriangle);
  }

  export declare class Handle_Poly_HArray1OfTriangle_3 extends Handle_Poly_HArray1OfTriangle {
    constructor(theHandle: Handle_Poly_HArray1OfTriangle);
  }

  export declare class Handle_Poly_HArray1OfTriangle_4 extends Handle_Poly_HArray1OfTriangle {
    constructor(theHandle: Handle_Poly_HArray1OfTriangle);
  }

export declare class TColgp_Array1OfDir2d {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: gp_Dir2d): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: TColgp_Array1OfDir2d): TColgp_Array1OfDir2d;
  Move(theOther: TColgp_Array1OfDir2d): TColgp_Array1OfDir2d;
  First(): gp_Dir2d;
  ChangeFirst(): gp_Dir2d;
  Last(): gp_Dir2d;
  ChangeLast(): gp_Dir2d;
  Value(theIndex: Standard_Integer): gp_Dir2d;
  ChangeValue(theIndex: Standard_Integer): gp_Dir2d;
  SetValue(theIndex: Standard_Integer, theItem: gp_Dir2d): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class TColgp_Array1OfDir2d_1 extends TColgp_Array1OfDir2d {
    constructor();
  }

  export declare class TColgp_Array1OfDir2d_2 extends TColgp_Array1OfDir2d {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class TColgp_Array1OfDir2d_3 extends TColgp_Array1OfDir2d {
    constructor(theOther: TColgp_Array1OfDir2d);
  }

  export declare class TColgp_Array1OfDir2d_4 extends TColgp_Array1OfDir2d {
    constructor(theOther: TColgp_Array1OfDir2d);
  }

  export declare class TColgp_Array1OfDir2d_5 extends TColgp_Array1OfDir2d {
    constructor(theBegin: gp_Dir2d, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_TColgp_HArray1OfDir2d {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColgp_HArray1OfDir2d): void;
  get(): TColgp_HArray1OfDir2d;
}

  export declare class Handle_TColgp_HArray1OfDir2d_1 extends Handle_TColgp_HArray1OfDir2d {
    constructor();
  }

  export declare class Handle_TColgp_HArray1OfDir2d_2 extends Handle_TColgp_HArray1OfDir2d {
    constructor(thePtr: TColgp_HArray1OfDir2d);
  }

  export declare class Handle_TColgp_HArray1OfDir2d_3 extends Handle_TColgp_HArray1OfDir2d {
    constructor(theHandle: Handle_TColgp_HArray1OfDir2d);
  }

  export declare class Handle_TColgp_HArray1OfDir2d_4 extends Handle_TColgp_HArray1OfDir2d {
    constructor(theHandle: Handle_TColgp_HArray1OfDir2d);
  }

export declare class Handle_TColgp_HArray1OfLin2d {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColgp_HArray1OfLin2d): void;
  get(): TColgp_HArray1OfLin2d;
}

  export declare class Handle_TColgp_HArray1OfLin2d_1 extends Handle_TColgp_HArray1OfLin2d {
    constructor();
  }

  export declare class Handle_TColgp_HArray1OfLin2d_2 extends Handle_TColgp_HArray1OfLin2d {
    constructor(thePtr: TColgp_HArray1OfLin2d);
  }

  export declare class Handle_TColgp_HArray1OfLin2d_3 extends Handle_TColgp_HArray1OfLin2d {
    constructor(theHandle: Handle_TColgp_HArray1OfLin2d);
  }

  export declare class Handle_TColgp_HArray1OfLin2d_4 extends Handle_TColgp_HArray1OfLin2d {
    constructor(theHandle: Handle_TColgp_HArray1OfLin2d);
  }

export declare class Handle_TColgp_HArray1OfCirc2d {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColgp_HArray1OfCirc2d): void;
  get(): TColgp_HArray1OfCirc2d;
}

  export declare class Handle_TColgp_HArray1OfCirc2d_1 extends Handle_TColgp_HArray1OfCirc2d {
    constructor();
  }

  export declare class Handle_TColgp_HArray1OfCirc2d_2 extends Handle_TColgp_HArray1OfCirc2d {
    constructor(thePtr: TColgp_HArray1OfCirc2d);
  }

  export declare class Handle_TColgp_HArray1OfCirc2d_3 extends Handle_TColgp_HArray1OfCirc2d {
    constructor(theHandle: Handle_TColgp_HArray1OfCirc2d);
  }

  export declare class Handle_TColgp_HArray1OfCirc2d_4 extends Handle_TColgp_HArray1OfCirc2d {
    constructor(theHandle: Handle_TColgp_HArray1OfCirc2d);
  }

export declare class TColgp_Array2OfDir {
  Init(theValue: gp_Dir): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  NbRows(): Standard_Integer;
  NbColumns(): Standard_Integer;
  RowLength(): Standard_Integer;
  ColLength(): Standard_Integer;
  LowerRow(): Standard_Integer;
  UpperRow(): Standard_Integer;
  LowerCol(): Standard_Integer;
  UpperCol(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  Assign(theOther: TColgp_Array2OfDir): TColgp_Array2OfDir;
  Move(theOther: TColgp_Array2OfDir): TColgp_Array2OfDir;
  Value(theRow: Standard_Integer, theCol: Standard_Integer): gp_Dir;
  ChangeValue(theRow: Standard_Integer, theCol: Standard_Integer): gp_Dir;
  SetValue(theRow: Standard_Integer, theCol: Standard_Integer, theItem: gp_Dir): void;
  Resize(theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class TColgp_Array2OfDir_1 extends TColgp_Array2OfDir {
    constructor();
  }

  export declare class TColgp_Array2OfDir_2 extends TColgp_Array2OfDir {
    constructor(theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer);
  }

  export declare class TColgp_Array2OfDir_3 extends TColgp_Array2OfDir {
    constructor(theOther: TColgp_Array2OfDir);
  }

  export declare class TColgp_Array2OfDir_4 extends TColgp_Array2OfDir {
    constructor(theOther: TColgp_Array2OfDir);
  }

  export declare class TColgp_Array2OfDir_5 extends TColgp_Array2OfDir {
    constructor(theBegin: gp_Dir, theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer);
  }

export declare class Handle_TColgp_HArray2OfDir {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColgp_HArray2OfDir): void;
  get(): TColgp_HArray2OfDir;
}

  export declare class Handle_TColgp_HArray2OfDir_1 extends Handle_TColgp_HArray2OfDir {
    constructor();
  }

  export declare class Handle_TColgp_HArray2OfDir_2 extends Handle_TColgp_HArray2OfDir {
    constructor(thePtr: TColgp_HArray2OfDir);
  }

  export declare class Handle_TColgp_HArray2OfDir_3 extends Handle_TColgp_HArray2OfDir {
    constructor(theHandle: Handle_TColgp_HArray2OfDir);
  }

  export declare class Handle_TColgp_HArray2OfDir_4 extends Handle_TColgp_HArray2OfDir {
    constructor(theHandle: Handle_TColgp_HArray2OfDir);
  }

export declare class Handle_TColgp_HArray2OfVec {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColgp_HArray2OfVec): void;
  get(): TColgp_HArray2OfVec;
}

  export declare class Handle_TColgp_HArray2OfVec_1 extends Handle_TColgp_HArray2OfVec {
    constructor();
  }

  export declare class Handle_TColgp_HArray2OfVec_2 extends Handle_TColgp_HArray2OfVec {
    constructor(thePtr: TColgp_HArray2OfVec);
  }

  export declare class Handle_TColgp_HArray2OfVec_3 extends Handle_TColgp_HArray2OfVec {
    constructor(theHandle: Handle_TColgp_HArray2OfVec);
  }

  export declare class Handle_TColgp_HArray2OfVec_4 extends Handle_TColgp_HArray2OfVec {
    constructor(theHandle: Handle_TColgp_HArray2OfVec);
  }

export declare class TColgp_Array2OfXY {
  Init(theValue: gp_XY): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  NbRows(): Standard_Integer;
  NbColumns(): Standard_Integer;
  RowLength(): Standard_Integer;
  ColLength(): Standard_Integer;
  LowerRow(): Standard_Integer;
  UpperRow(): Standard_Integer;
  LowerCol(): Standard_Integer;
  UpperCol(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  Assign(theOther: TColgp_Array2OfXY): TColgp_Array2OfXY;
  Move(theOther: TColgp_Array2OfXY): TColgp_Array2OfXY;
  Value(theRow: Standard_Integer, theCol: Standard_Integer): gp_XY;
  ChangeValue(theRow: Standard_Integer, theCol: Standard_Integer): gp_XY;
  SetValue(theRow: Standard_Integer, theCol: Standard_Integer, theItem: gp_XY): void;
  Resize(theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class TColgp_Array2OfXY_1 extends TColgp_Array2OfXY {
    constructor();
  }

  export declare class TColgp_Array2OfXY_2 extends TColgp_Array2OfXY {
    constructor(theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer);
  }

  export declare class TColgp_Array2OfXY_3 extends TColgp_Array2OfXY {
    constructor(theOther: TColgp_Array2OfXY);
  }

  export declare class TColgp_Array2OfXY_4 extends TColgp_Array2OfXY {
    constructor(theOther: TColgp_Array2OfXY);
  }

  export declare class TColgp_Array2OfXY_5 extends TColgp_Array2OfXY {
    constructor(theBegin: gp_XY, theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer);
  }

export declare class Handle_TColgp_HArray2OfXY {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColgp_HArray2OfXY): void;
  get(): TColgp_HArray2OfXY;
}

  export declare class Handle_TColgp_HArray2OfXY_1 extends Handle_TColgp_HArray2OfXY {
    constructor();
  }

  export declare class Handle_TColgp_HArray2OfXY_2 extends Handle_TColgp_HArray2OfXY {
    constructor(thePtr: TColgp_HArray2OfXY);
  }

  export declare class Handle_TColgp_HArray2OfXY_3 extends Handle_TColgp_HArray2OfXY {
    constructor(theHandle: Handle_TColgp_HArray2OfXY);
  }

  export declare class Handle_TColgp_HArray2OfXY_4 extends Handle_TColgp_HArray2OfXY {
    constructor(theHandle: Handle_TColgp_HArray2OfXY);
  }

export declare class TColgp_Array2OfDir2d {
  Init(theValue: gp_Dir2d): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  NbRows(): Standard_Integer;
  NbColumns(): Standard_Integer;
  RowLength(): Standard_Integer;
  ColLength(): Standard_Integer;
  LowerRow(): Standard_Integer;
  UpperRow(): Standard_Integer;
  LowerCol(): Standard_Integer;
  UpperCol(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  Assign(theOther: TColgp_Array2OfDir2d): TColgp_Array2OfDir2d;
  Move(theOther: TColgp_Array2OfDir2d): TColgp_Array2OfDir2d;
  Value(theRow: Standard_Integer, theCol: Standard_Integer): gp_Dir2d;
  ChangeValue(theRow: Standard_Integer, theCol: Standard_Integer): gp_Dir2d;
  SetValue(theRow: Standard_Integer, theCol: Standard_Integer, theItem: gp_Dir2d): void;
  Resize(theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class TColgp_Array2OfDir2d_1 extends TColgp_Array2OfDir2d {
    constructor();
  }

  export declare class TColgp_Array2OfDir2d_2 extends TColgp_Array2OfDir2d {
    constructor(theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer);
  }

  export declare class TColgp_Array2OfDir2d_3 extends TColgp_Array2OfDir2d {
    constructor(theOther: TColgp_Array2OfDir2d);
  }

  export declare class TColgp_Array2OfDir2d_4 extends TColgp_Array2OfDir2d {
    constructor(theOther: TColgp_Array2OfDir2d);
  }

  export declare class TColgp_Array2OfDir2d_5 extends TColgp_Array2OfDir2d {
    constructor(theBegin: gp_Dir2d, theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer);
  }

export declare class Handle_TColgp_HArray2OfDir2d {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColgp_HArray2OfDir2d): void;
  get(): TColgp_HArray2OfDir2d;
}

  export declare class Handle_TColgp_HArray2OfDir2d_1 extends Handle_TColgp_HArray2OfDir2d {
    constructor();
  }

  export declare class Handle_TColgp_HArray2OfDir2d_2 extends Handle_TColgp_HArray2OfDir2d {
    constructor(thePtr: TColgp_HArray2OfDir2d);
  }

  export declare class Handle_TColgp_HArray2OfDir2d_3 extends Handle_TColgp_HArray2OfDir2d {
    constructor(theHandle: Handle_TColgp_HArray2OfDir2d);
  }

  export declare class Handle_TColgp_HArray2OfDir2d_4 extends Handle_TColgp_HArray2OfDir2d {
    constructor(theHandle: Handle_TColgp_HArray2OfDir2d);
  }

export declare class TColgp_Array2OfVec2d {
  Init(theValue: gp_Vec2d): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  NbRows(): Standard_Integer;
  NbColumns(): Standard_Integer;
  RowLength(): Standard_Integer;
  ColLength(): Standard_Integer;
  LowerRow(): Standard_Integer;
  UpperRow(): Standard_Integer;
  LowerCol(): Standard_Integer;
  UpperCol(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  Assign(theOther: TColgp_Array2OfVec2d): TColgp_Array2OfVec2d;
  Move(theOther: TColgp_Array2OfVec2d): TColgp_Array2OfVec2d;
  Value(theRow: Standard_Integer, theCol: Standard_Integer): gp_Vec2d;
  ChangeValue(theRow: Standard_Integer, theCol: Standard_Integer): gp_Vec2d;
  SetValue(theRow: Standard_Integer, theCol: Standard_Integer, theItem: gp_Vec2d): void;
  Resize(theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class TColgp_Array2OfVec2d_1 extends TColgp_Array2OfVec2d {
    constructor();
  }

  export declare class TColgp_Array2OfVec2d_2 extends TColgp_Array2OfVec2d {
    constructor(theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer);
  }

  export declare class TColgp_Array2OfVec2d_3 extends TColgp_Array2OfVec2d {
    constructor(theOther: TColgp_Array2OfVec2d);
  }

  export declare class TColgp_Array2OfVec2d_4 extends TColgp_Array2OfVec2d {
    constructor(theOther: TColgp_Array2OfVec2d);
  }

  export declare class TColgp_Array2OfVec2d_5 extends TColgp_Array2OfVec2d {
    constructor(theBegin: gp_Vec2d, theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer);
  }

export declare class Handle_TColgp_HArray2OfVec2d {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColgp_HArray2OfVec2d): void;
  get(): TColgp_HArray2OfVec2d;
}

  export declare class Handle_TColgp_HArray2OfVec2d_1 extends Handle_TColgp_HArray2OfVec2d {
    constructor();
  }

  export declare class Handle_TColgp_HArray2OfVec2d_2 extends Handle_TColgp_HArray2OfVec2d {
    constructor(thePtr: TColgp_HArray2OfVec2d);
  }

  export declare class Handle_TColgp_HArray2OfVec2d_3 extends Handle_TColgp_HArray2OfVec2d {
    constructor(theHandle: Handle_TColgp_HArray2OfVec2d);
  }

  export declare class Handle_TColgp_HArray2OfVec2d_4 extends Handle_TColgp_HArray2OfVec2d {
    constructor(theHandle: Handle_TColgp_HArray2OfVec2d);
  }

export declare class TColgp_Array2OfLin2d {
  Init(theValue: gp_Lin2d): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  NbRows(): Standard_Integer;
  NbColumns(): Standard_Integer;
  RowLength(): Standard_Integer;
  ColLength(): Standard_Integer;
  LowerRow(): Standard_Integer;
  UpperRow(): Standard_Integer;
  LowerCol(): Standard_Integer;
  UpperCol(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  Assign(theOther: TColgp_Array2OfLin2d): TColgp_Array2OfLin2d;
  Move(theOther: TColgp_Array2OfLin2d): TColgp_Array2OfLin2d;
  Value(theRow: Standard_Integer, theCol: Standard_Integer): gp_Lin2d;
  ChangeValue(theRow: Standard_Integer, theCol: Standard_Integer): gp_Lin2d;
  SetValue(theRow: Standard_Integer, theCol: Standard_Integer, theItem: gp_Lin2d): void;
  Resize(theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class TColgp_Array2OfLin2d_1 extends TColgp_Array2OfLin2d {
    constructor();
  }

  export declare class TColgp_Array2OfLin2d_2 extends TColgp_Array2OfLin2d {
    constructor(theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer);
  }

  export declare class TColgp_Array2OfLin2d_3 extends TColgp_Array2OfLin2d {
    constructor(theOther: TColgp_Array2OfLin2d);
  }

  export declare class TColgp_Array2OfLin2d_4 extends TColgp_Array2OfLin2d {
    constructor(theOther: TColgp_Array2OfLin2d);
  }

  export declare class TColgp_Array2OfLin2d_5 extends TColgp_Array2OfLin2d {
    constructor(theBegin: gp_Lin2d, theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer);
  }

export declare class Handle_TColgp_HArray2OfLin2d {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColgp_HArray2OfLin2d): void;
  get(): TColgp_HArray2OfLin2d;
}

  export declare class Handle_TColgp_HArray2OfLin2d_1 extends Handle_TColgp_HArray2OfLin2d {
    constructor();
  }

  export declare class Handle_TColgp_HArray2OfLin2d_2 extends Handle_TColgp_HArray2OfLin2d {
    constructor(thePtr: TColgp_HArray2OfLin2d);
  }

  export declare class Handle_TColgp_HArray2OfLin2d_3 extends Handle_TColgp_HArray2OfLin2d {
    constructor(theHandle: Handle_TColgp_HArray2OfLin2d);
  }

  export declare class Handle_TColgp_HArray2OfLin2d_4 extends Handle_TColgp_HArray2OfLin2d {
    constructor(theHandle: Handle_TColgp_HArray2OfLin2d);
  }

export declare class TColgp_Array2OfCirc2d {
  Init(theValue: gp_Circ2d): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  NbRows(): Standard_Integer;
  NbColumns(): Standard_Integer;
  RowLength(): Standard_Integer;
  ColLength(): Standard_Integer;
  LowerRow(): Standard_Integer;
  UpperRow(): Standard_Integer;
  LowerCol(): Standard_Integer;
  UpperCol(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  Assign(theOther: TColgp_Array2OfCirc2d): TColgp_Array2OfCirc2d;
  Move(theOther: TColgp_Array2OfCirc2d): TColgp_Array2OfCirc2d;
  Value(theRow: Standard_Integer, theCol: Standard_Integer): gp_Circ2d;
  ChangeValue(theRow: Standard_Integer, theCol: Standard_Integer): gp_Circ2d;
  SetValue(theRow: Standard_Integer, theCol: Standard_Integer, theItem: gp_Circ2d): void;
  Resize(theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class TColgp_Array2OfCirc2d_1 extends TColgp_Array2OfCirc2d {
    constructor();
  }

  export declare class TColgp_Array2OfCirc2d_2 extends TColgp_Array2OfCirc2d {
    constructor(theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer);
  }

  export declare class TColgp_Array2OfCirc2d_3 extends TColgp_Array2OfCirc2d {
    constructor(theOther: TColgp_Array2OfCirc2d);
  }

  export declare class TColgp_Array2OfCirc2d_4 extends TColgp_Array2OfCirc2d {
    constructor(theOther: TColgp_Array2OfCirc2d);
  }

  export declare class TColgp_Array2OfCirc2d_5 extends TColgp_Array2OfCirc2d {
    constructor(theBegin: gp_Circ2d, theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer);
  }

export declare class Handle_TColgp_HArray2OfCirc2d {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColgp_HArray2OfCirc2d): void;
  get(): TColgp_HArray2OfCirc2d;
}

  export declare class Handle_TColgp_HArray2OfCirc2d_1 extends Handle_TColgp_HArray2OfCirc2d {
    constructor();
  }

  export declare class Handle_TColgp_HArray2OfCirc2d_2 extends Handle_TColgp_HArray2OfCirc2d {
    constructor(thePtr: TColgp_HArray2OfCirc2d);
  }

  export declare class Handle_TColgp_HArray2OfCirc2d_3 extends Handle_TColgp_HArray2OfCirc2d {
    constructor(theHandle: Handle_TColgp_HArray2OfCirc2d);
  }

  export declare class Handle_TColgp_HArray2OfCirc2d_4 extends Handle_TColgp_HArray2OfCirc2d {
    constructor(theHandle: Handle_TColgp_HArray2OfCirc2d);
  }

export declare class TColgp_SequenceOfDir extends NCollection_BaseSequence {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Reverse(): void;
  Exchange(I: Standard_Integer, J: Standard_Integer): void;
  delNode(theNode: NCollection_SeqNode, theAl: any): void;
  Clear(theAllocator: any): void;
  Assign(theOther: TColgp_SequenceOfDir): TColgp_SequenceOfDir;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: gp_Dir): void;
  Append_2(theSeq: TColgp_SequenceOfDir): void;
  Prepend_1(theItem: gp_Dir): void;
  Prepend_2(theSeq: TColgp_SequenceOfDir): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: gp_Dir): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: TColgp_SequenceOfDir): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: TColgp_SequenceOfDir): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: gp_Dir): void;
  Split(theIndex: Standard_Integer, theSeq: TColgp_SequenceOfDir): void;
  First(): gp_Dir;
  ChangeFirst(): gp_Dir;
  Last(): gp_Dir;
  ChangeLast(): gp_Dir;
  Value(theIndex: Standard_Integer): gp_Dir;
  ChangeValue(theIndex: Standard_Integer): gp_Dir;
  SetValue(theIndex: Standard_Integer, theItem: gp_Dir): void;
}

  export declare class TColgp_SequenceOfDir_1 extends TColgp_SequenceOfDir {
    constructor();
  }

  export declare class TColgp_SequenceOfDir_2 extends TColgp_SequenceOfDir {
    constructor(theAllocator: any);
  }

  export declare class TColgp_SequenceOfDir_3 extends TColgp_SequenceOfDir {
    constructor(theOther: TColgp_SequenceOfDir);
  }

export declare class Handle_TColgp_HSequenceOfDir {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColgp_HSequenceOfDir): void;
  get(): TColgp_HSequenceOfDir;
}

  export declare class Handle_TColgp_HSequenceOfDir_1 extends Handle_TColgp_HSequenceOfDir {
    constructor();
  }

  export declare class Handle_TColgp_HSequenceOfDir_2 extends Handle_TColgp_HSequenceOfDir {
    constructor(thePtr: TColgp_HSequenceOfDir);
  }

  export declare class Handle_TColgp_HSequenceOfDir_3 extends Handle_TColgp_HSequenceOfDir {
    constructor(theHandle: Handle_TColgp_HSequenceOfDir);
  }

  export declare class Handle_TColgp_HSequenceOfDir_4 extends Handle_TColgp_HSequenceOfDir {
    constructor(theHandle: Handle_TColgp_HSequenceOfDir);
  }

export declare class Handle_TColgp_HSequenceOfVec {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColgp_HSequenceOfVec): void;
  get(): TColgp_HSequenceOfVec;
}

  export declare class Handle_TColgp_HSequenceOfVec_1 extends Handle_TColgp_HSequenceOfVec {
    constructor();
  }

  export declare class Handle_TColgp_HSequenceOfVec_2 extends Handle_TColgp_HSequenceOfVec {
    constructor(thePtr: TColgp_HSequenceOfVec);
  }

  export declare class Handle_TColgp_HSequenceOfVec_3 extends Handle_TColgp_HSequenceOfVec {
    constructor(theHandle: Handle_TColgp_HSequenceOfVec);
  }

  export declare class Handle_TColgp_HSequenceOfVec_4 extends Handle_TColgp_HSequenceOfVec {
    constructor(theHandle: Handle_TColgp_HSequenceOfVec);
  }

export declare class TColgp_SequenceOfDir2d extends NCollection_BaseSequence {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Reverse(): void;
  Exchange(I: Standard_Integer, J: Standard_Integer): void;
  delNode(theNode: NCollection_SeqNode, theAl: any): void;
  Clear(theAllocator: any): void;
  Assign(theOther: TColgp_SequenceOfDir2d): TColgp_SequenceOfDir2d;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: gp_Dir2d): void;
  Append_2(theSeq: TColgp_SequenceOfDir2d): void;
  Prepend_1(theItem: gp_Dir2d): void;
  Prepend_2(theSeq: TColgp_SequenceOfDir2d): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: gp_Dir2d): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: TColgp_SequenceOfDir2d): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: TColgp_SequenceOfDir2d): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: gp_Dir2d): void;
  Split(theIndex: Standard_Integer, theSeq: TColgp_SequenceOfDir2d): void;
  First(): gp_Dir2d;
  ChangeFirst(): gp_Dir2d;
  Last(): gp_Dir2d;
  ChangeLast(): gp_Dir2d;
  Value(theIndex: Standard_Integer): gp_Dir2d;
  ChangeValue(theIndex: Standard_Integer): gp_Dir2d;
  SetValue(theIndex: Standard_Integer, theItem: gp_Dir2d): void;
}

  export declare class TColgp_SequenceOfDir2d_1 extends TColgp_SequenceOfDir2d {
    constructor();
  }

  export declare class TColgp_SequenceOfDir2d_2 extends TColgp_SequenceOfDir2d {
    constructor(theAllocator: any);
  }

  export declare class TColgp_SequenceOfDir2d_3 extends TColgp_SequenceOfDir2d {
    constructor(theOther: TColgp_SequenceOfDir2d);
  }

export declare class Handle_TColgp_HSequenceOfDir2d {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColgp_HSequenceOfDir2d): void;
  get(): TColgp_HSequenceOfDir2d;
}

  export declare class Handle_TColgp_HSequenceOfDir2d_1 extends Handle_TColgp_HSequenceOfDir2d {
    constructor();
  }

  export declare class Handle_TColgp_HSequenceOfDir2d_2 extends Handle_TColgp_HSequenceOfDir2d {
    constructor(thePtr: TColgp_HSequenceOfDir2d);
  }

  export declare class Handle_TColgp_HSequenceOfDir2d_3 extends Handle_TColgp_HSequenceOfDir2d {
    constructor(theHandle: Handle_TColgp_HSequenceOfDir2d);
  }

  export declare class Handle_TColgp_HSequenceOfDir2d_4 extends Handle_TColgp_HSequenceOfDir2d {
    constructor(theHandle: Handle_TColgp_HSequenceOfDir2d);
  }

export declare class Handle_TColgp_HSequenceOfPnt2d {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColgp_HSequenceOfPnt2d): void;
  get(): TColgp_HSequenceOfPnt2d;
}

  export declare class Handle_TColgp_HSequenceOfPnt2d_1 extends Handle_TColgp_HSequenceOfPnt2d {
    constructor();
  }

  export declare class Handle_TColgp_HSequenceOfPnt2d_2 extends Handle_TColgp_HSequenceOfPnt2d {
    constructor(thePtr: TColgp_HSequenceOfPnt2d);
  }

  export declare class Handle_TColgp_HSequenceOfPnt2d_3 extends Handle_TColgp_HSequenceOfPnt2d {
    constructor(theHandle: Handle_TColgp_HSequenceOfPnt2d);
  }

  export declare class Handle_TColgp_HSequenceOfPnt2d_4 extends Handle_TColgp_HSequenceOfPnt2d {
    constructor(theHandle: Handle_TColgp_HSequenceOfPnt2d);
  }

export declare class TColgp_SequenceOfVec2d extends NCollection_BaseSequence {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Reverse(): void;
  Exchange(I: Standard_Integer, J: Standard_Integer): void;
  delNode(theNode: NCollection_SeqNode, theAl: any): void;
  Clear(theAllocator: any): void;
  Assign(theOther: TColgp_SequenceOfVec2d): TColgp_SequenceOfVec2d;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: gp_Vec2d): void;
  Append_2(theSeq: TColgp_SequenceOfVec2d): void;
  Prepend_1(theItem: gp_Vec2d): void;
  Prepend_2(theSeq: TColgp_SequenceOfVec2d): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: gp_Vec2d): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: TColgp_SequenceOfVec2d): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: TColgp_SequenceOfVec2d): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: gp_Vec2d): void;
  Split(theIndex: Standard_Integer, theSeq: TColgp_SequenceOfVec2d): void;
  First(): gp_Vec2d;
  ChangeFirst(): gp_Vec2d;
  Last(): gp_Vec2d;
  ChangeLast(): gp_Vec2d;
  Value(theIndex: Standard_Integer): gp_Vec2d;
  ChangeValue(theIndex: Standard_Integer): gp_Vec2d;
  SetValue(theIndex: Standard_Integer, theItem: gp_Vec2d): void;
}

  export declare class TColgp_SequenceOfVec2d_1 extends TColgp_SequenceOfVec2d {
    constructor();
  }

  export declare class TColgp_SequenceOfVec2d_2 extends TColgp_SequenceOfVec2d {
    constructor(theAllocator: any);
  }

  export declare class TColgp_SequenceOfVec2d_3 extends TColgp_SequenceOfVec2d {
    constructor(theOther: TColgp_SequenceOfVec2d);
  }

export declare class Handle_TColgp_HSequenceOfVec2d {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColgp_HSequenceOfVec2d): void;
  get(): TColgp_HSequenceOfVec2d;
}

  export declare class Handle_TColgp_HSequenceOfVec2d_1 extends Handle_TColgp_HSequenceOfVec2d {
    constructor();
  }

  export declare class Handle_TColgp_HSequenceOfVec2d_2 extends Handle_TColgp_HSequenceOfVec2d {
    constructor(thePtr: TColgp_HSequenceOfVec2d);
  }

  export declare class Handle_TColgp_HSequenceOfVec2d_3 extends Handle_TColgp_HSequenceOfVec2d {
    constructor(theHandle: Handle_TColgp_HSequenceOfVec2d);
  }

  export declare class Handle_TColgp_HSequenceOfVec2d_4 extends Handle_TColgp_HSequenceOfVec2d {
    constructor(theHandle: Handle_TColgp_HSequenceOfVec2d);
  }

export declare class TopLoc_MapOfLocation extends NCollection_BaseMap {
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TopLoc_MapOfLocation): void;
  Assign(theOther: TopLoc_MapOfLocation): TopLoc_MapOfLocation;
  ReSize(N: Standard_Integer): void;
  Add(K: TopLoc_Location): Standard_Boolean;
  Added(K: TopLoc_Location): TopLoc_Location;
  Contains_1(K: TopLoc_Location): Standard_Boolean;
  Remove(K: TopLoc_Location): Standard_Boolean;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
  IsEqual(theOther: TopLoc_MapOfLocation): Standard_Boolean;
  Contains_2(theOther: TopLoc_MapOfLocation): Standard_Boolean;
  Union(theLeft: TopLoc_MapOfLocation, theRight: TopLoc_MapOfLocation): void;
  Unite(theOther: TopLoc_MapOfLocation): Standard_Boolean;
  HasIntersection(theMap: TopLoc_MapOfLocation): Standard_Boolean;
  Intersection(theLeft: TopLoc_MapOfLocation, theRight: TopLoc_MapOfLocation): void;
  Intersect(theOther: TopLoc_MapOfLocation): Standard_Boolean;
  Subtraction(theLeft: TopLoc_MapOfLocation, theRight: TopLoc_MapOfLocation): void;
  Subtract(theOther: TopLoc_MapOfLocation): Standard_Boolean;
  Difference(theLeft: TopLoc_MapOfLocation, theRight: TopLoc_MapOfLocation): void;
  Differ(theOther: TopLoc_MapOfLocation): Standard_Boolean;
}

  export declare class TopLoc_MapOfLocation_1 extends TopLoc_MapOfLocation {
    constructor();
  }

  export declare class TopLoc_MapOfLocation_2 extends TopLoc_MapOfLocation {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class TopLoc_MapOfLocation_3 extends TopLoc_MapOfLocation {
    constructor(theOther: TopLoc_MapOfLocation);
  }

export declare class Handle_TopLoc_SListNodeOfItemLocation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TopLoc_SListNodeOfItemLocation): void;
  get(): TopLoc_SListNodeOfItemLocation;
}

  export declare class Handle_TopLoc_SListNodeOfItemLocation_1 extends Handle_TopLoc_SListNodeOfItemLocation {
    constructor();
  }

  export declare class Handle_TopLoc_SListNodeOfItemLocation_2 extends Handle_TopLoc_SListNodeOfItemLocation {
    constructor(thePtr: TopLoc_SListNodeOfItemLocation);
  }

  export declare class Handle_TopLoc_SListNodeOfItemLocation_3 extends Handle_TopLoc_SListNodeOfItemLocation {
    constructor(theHandle: Handle_TopLoc_SListNodeOfItemLocation);
  }

  export declare class Handle_TopLoc_SListNodeOfItemLocation_4 extends Handle_TopLoc_SListNodeOfItemLocation {
    constructor(theHandle: Handle_TopLoc_SListNodeOfItemLocation);
  }

export declare class math_Array1OfValueAndWeight {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: math_ValueAndWeight): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: math_Array1OfValueAndWeight): math_Array1OfValueAndWeight;
  Move(theOther: math_Array1OfValueAndWeight): math_Array1OfValueAndWeight;
  First(): math_ValueAndWeight;
  ChangeFirst(): math_ValueAndWeight;
  Last(): math_ValueAndWeight;
  ChangeLast(): math_ValueAndWeight;
  Value(theIndex: Standard_Integer): math_ValueAndWeight;
  ChangeValue(theIndex: Standard_Integer): math_ValueAndWeight;
  SetValue(theIndex: Standard_Integer, theItem: math_ValueAndWeight): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class math_Array1OfValueAndWeight_1 extends math_Array1OfValueAndWeight {
    constructor();
  }

  export declare class math_Array1OfValueAndWeight_2 extends math_Array1OfValueAndWeight {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class math_Array1OfValueAndWeight_3 extends math_Array1OfValueAndWeight {
    constructor(theOther: math_Array1OfValueAndWeight);
  }

  export declare class math_Array1OfValueAndWeight_4 extends math_Array1OfValueAndWeight {
    constructor(theOther: math_Array1OfValueAndWeight);
  }

  export declare class math_Array1OfValueAndWeight_5 extends math_Array1OfValueAndWeight {
    constructor(theBegin: math_ValueAndWeight, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_math_NotSquare {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: math_NotSquare): void;
  get(): math_NotSquare;
}

  export declare class Handle_math_NotSquare_1 extends Handle_math_NotSquare {
    constructor();
  }

  export declare class Handle_math_NotSquare_2 extends Handle_math_NotSquare {
    constructor(thePtr: math_NotSquare);
  }

  export declare class Handle_math_NotSquare_3 extends Handle_math_NotSquare {
    constructor(theHandle: Handle_math_NotSquare);
  }

  export declare class Handle_math_NotSquare_4 extends Handle_math_NotSquare {
    constructor(theHandle: Handle_math_NotSquare);
  }

export declare class Handle_math_SingularMatrix {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: math_SingularMatrix): void;
  get(): math_SingularMatrix;
}

  export declare class Handle_math_SingularMatrix_1 extends Handle_math_SingularMatrix {
    constructor();
  }

  export declare class Handle_math_SingularMatrix_2 extends Handle_math_SingularMatrix {
    constructor(thePtr: math_SingularMatrix);
  }

  export declare class Handle_math_SingularMatrix_3 extends Handle_math_SingularMatrix {
    constructor(theHandle: Handle_math_SingularMatrix);
  }

  export declare class Handle_math_SingularMatrix_4 extends Handle_math_SingularMatrix {
    constructor(theHandle: Handle_math_SingularMatrix);
  }

export declare type gp_TrsfForm = {
  gp_Identity: {};
  gp_Rotation: {};
  gp_Translation: {};
  gp_PntMirror: {};
  gp_Ax1Mirror: {};
  gp_Ax2Mirror: {};
  gp_Scale: {};
  gp_CompoundTrsf: {};
  gp_Other: {};
}

export declare type GeomAbs_Shape = {
  GeomAbs_C0: {};
  GeomAbs_G1: {};
  GeomAbs_C1: {};
  GeomAbs_G2: {};
  GeomAbs_C2: {};
  GeomAbs_C3: {};
  GeomAbs_CN: {};
}

export declare type gp_EulerSequence = {
  gp_EulerAngles: {};
  gp_YawPitchRoll: {};
  gp_Extrinsic_XYZ: {};
  gp_Extrinsic_XZY: {};
  gp_Extrinsic_YZX: {};
  gp_Extrinsic_YXZ: {};
  gp_Extrinsic_ZXY: {};
  gp_Extrinsic_ZYX: {};
  gp_Intrinsic_XYZ: {};
  gp_Intrinsic_XZY: {};
  gp_Intrinsic_YZX: {};
  gp_Intrinsic_YXZ: {};
  gp_Intrinsic_ZXY: {};
  gp_Intrinsic_ZYX: {};
  gp_Extrinsic_XYX: {};
  gp_Extrinsic_XZX: {};
  gp_Extrinsic_YZY: {};
  gp_Extrinsic_YXY: {};
  gp_Extrinsic_ZYZ: {};
  gp_Extrinsic_ZXZ: {};
  gp_Intrinsic_XYX: {};
  gp_Intrinsic_XZX: {};
  gp_Intrinsic_YZY: {};
  gp_Intrinsic_YXY: {};
  gp_Intrinsic_ZXZ: {};
  gp_Intrinsic_ZYZ: {};
}

export declare type GeomAbs_CurveType = {
  GeomAbs_Line: {};
  GeomAbs_Circle: {};
  GeomAbs_Ellipse: {};
  GeomAbs_Hyperbola: {};
  GeomAbs_Parabola: {};
  GeomAbs_BezierCurve: {};
  GeomAbs_BSplineCurve: {};
  GeomAbs_OffsetCurve: {};
  GeomAbs_OtherCurve: {};
}

export declare type BSplCLib_KnotDistribution = {
  BSplCLib_NonUniform: {};
  BSplCLib_Uniform: {};
}

export declare type BSplCLib_MultDistribution = {
  BSplCLib_NonConstant: {};
  BSplCLib_Constant: {};
  BSplCLib_QuasiConstant: {};
}

export declare type GeomAbs_BSplKnotDistribution = {
  GeomAbs_NonUniform: {};
  GeomAbs_Uniform: {};
  GeomAbs_QuasiUniform: {};
  GeomAbs_PiecewiseBezier: {};
}

export declare type GeomAbs_IsoType = {
  GeomAbs_IsoU: {};
  GeomAbs_IsoV: {};
  GeomAbs_NoneIso: {};
}

export declare type GeomAbs_SurfaceType = {
  GeomAbs_Plane: {};
  GeomAbs_Cylinder: {};
  GeomAbs_Cone: {};
  GeomAbs_Sphere: {};
  GeomAbs_Torus: {};
  GeomAbs_BezierSurface: {};
  GeomAbs_BSplineSurface: {};
  GeomAbs_SurfaceOfRevolution: {};
  GeomAbs_SurfaceOfExtrusion: {};
  GeomAbs_OffsetSurface: {};
  GeomAbs_OtherSurface: {};
}

export declare type math_Status = {
  math_OK: {};
  math_TooManyIterations: {};
  math_FunctionError: {};
  math_DirectionSearchError: {};
  math_NotBracketed: {};
}

export declare type Convert_ParameterisationType = {
  Convert_TgtThetaOver2: {};
  Convert_TgtThetaOver2_1: {};
  Convert_TgtThetaOver2_2: {};
  Convert_TgtThetaOver2_3: {};
  Convert_TgtThetaOver2_4: {};
  Convert_QuasiAngular: {};
  Convert_RationalC1: {};
  Convert_Polynomial: {};
}

export declare type GeomAbs_JoinType = {
  GeomAbs_Arc: {};
  GeomAbs_Tangent: {};
  GeomAbs_Intersection: {};
}

export declare type CSLib_DerivativeStatus = {
  CSLib_Done: {};
  CSLib_D1uIsNull: {};
  CSLib_D1vIsNull: {};
  CSLib_D1IsNull: {};
  CSLib_D1uD1vRatioIsNull: {};
  CSLib_D1vD1uRatioIsNull: {};
  CSLib_D1uIsParallelD1v: {};
}

export declare type CSLib_NormalStatus = {
  CSLib_Singular: {};
  CSLib_Defined: {};
  CSLib_InfinityOfSolutions: {};
  CSLib_D1NuIsNull: {};
  CSLib_D1NvIsNull: {};
  CSLib_D1NIsNull: {};
  CSLib_D1NuNvRatioIsNull: {};
  CSLib_D1NvNuRatioIsNull: {};
  CSLib_D1NuIsParallelD1Nv: {};
}

export declare type TKMathLib = {
  gp_XYZ_1: typeof gp_XYZ_1;
  gp_XYZ_2: typeof gp_XYZ_2;
  gp_Mat_1: typeof gp_Mat_1;
  gp_Mat_2: typeof gp_Mat_2;
  gp_Mat_3: typeof gp_Mat_3;
  gp_Pnt_1: typeof gp_Pnt_1;
  gp_Pnt_2: typeof gp_Pnt_2;
  gp_Pnt_3: typeof gp_Pnt_3;
  gp_Trsf_1: typeof gp_Trsf_1;
  gp_Trsf_2: typeof gp_Trsf_2;
  gp_Mat2d_1: typeof gp_Mat2d_1;
  gp_Mat2d_2: typeof gp_Mat2d_2;
  gp_XY_1: typeof gp_XY_1;
  gp_XY_2: typeof gp_XY_2;
  gp_Trsf2d_1: typeof gp_Trsf2d_1;
  gp_Trsf2d_2: typeof gp_Trsf2d_2;
  gp_Pnt2d_1: typeof gp_Pnt2d_1;
  gp_Pnt2d_2: typeof gp_Pnt2d_2;
  gp_Pnt2d_3: typeof gp_Pnt2d_3;
  gp_Vec2d_1: typeof gp_Vec2d_1;
  gp_Vec2d_2: typeof gp_Vec2d_2;
  gp_Vec2d_3: typeof gp_Vec2d_3;
  gp_Vec2d_4: typeof gp_Vec2d_4;
  gp_Vec2d_5: typeof gp_Vec2d_5;
  gp_Dir2d_1: typeof gp_Dir2d_1;
  gp_Dir2d_2: typeof gp_Dir2d_2;
  gp_Dir2d_3: typeof gp_Dir2d_3;
  gp_Dir2d_4: typeof gp_Dir2d_4;
  gp_Ax2d_1: typeof gp_Ax2d_1;
  gp_Ax2d_2: typeof gp_Ax2d_2;
  gp_Vec_1: typeof gp_Vec_1;
  gp_Vec_2: typeof gp_Vec_2;
  gp_Vec_3: typeof gp_Vec_3;
  gp_Vec_4: typeof gp_Vec_4;
  gp_Vec_5: typeof gp_Vec_5;
  gp_Dir_1: typeof gp_Dir_1;
  gp_Dir_2: typeof gp_Dir_2;
  gp_Dir_3: typeof gp_Dir_3;
  gp_Dir_4: typeof gp_Dir_4;
  Bnd_Box_1: typeof Bnd_Box_1;
  Bnd_Box_2: typeof Bnd_Box_2;
  gp_Ax1_1: typeof gp_Ax1_1;
  gp_Ax1_2: typeof gp_Ax1_2;
  gp_Ax2_1: typeof gp_Ax2_1;
  gp_Ax2_2: typeof gp_Ax2_2;
  gp_Ax2_3: typeof gp_Ax2_3;
  gp_Ax3_1: typeof gp_Ax3_1;
  gp_Ax3_2: typeof gp_Ax3_2;
  gp_Ax3_3: typeof gp_Ax3_3;
  gp_Ax3_4: typeof gp_Ax3_4;
  gp_Pln_1: typeof gp_Pln_1;
  gp_Pln_2: typeof gp_Pln_2;
  gp_Pln_3: typeof gp_Pln_3;
  gp_Pln_4: typeof gp_Pln_4;
  gp_Lin_1: typeof gp_Lin_1;
  gp_Lin_2: typeof gp_Lin_2;
  gp_Lin_3: typeof gp_Lin_3;
  TopLoc_Datum3D_1: typeof TopLoc_Datum3D_1;
  TopLoc_Datum3D_2: typeof TopLoc_Datum3D_2;
  gp_GTrsf_1: typeof gp_GTrsf_1;
  gp_GTrsf_2: typeof gp_GTrsf_2;
  gp_GTrsf_3: typeof gp_GTrsf_3;
  Bnd_Range_1: typeof Bnd_Range_1;
  Bnd_Range_2: typeof Bnd_Range_2;
  Poly_Triangle_1: typeof Poly_Triangle_1;
  Poly_Triangle_2: typeof Poly_Triangle_2;
  TopLoc_SListOfItemLocation_1: typeof TopLoc_SListOfItemLocation_1;
  TopLoc_SListOfItemLocation_2: typeof TopLoc_SListOfItemLocation_2;
  TopLoc_SListOfItemLocation_3: typeof TopLoc_SListOfItemLocation_3;
  TopLoc_SListOfItemLocation_4: typeof TopLoc_SListOfItemLocation_4;
  TopLoc_Location_1: typeof TopLoc_Location_1;
  TopLoc_Location_2: typeof TopLoc_Location_2;
  TopLoc_Location_3: typeof TopLoc_Location_3;
  TopLoc_ItemLocation: typeof TopLoc_ItemLocation;
  gp_Quaternion_1: typeof gp_Quaternion_1;
  gp_Quaternion_2: typeof gp_Quaternion_2;
  gp_Quaternion_3: typeof gp_Quaternion_3;
  gp_Quaternion_4: typeof gp_Quaternion_4;
  gp_Quaternion_5: typeof gp_Quaternion_5;
  gp_Quaternion_6: typeof gp_Quaternion_6;
  gp_QuaternionNLerp_1: typeof gp_QuaternionNLerp_1;
  gp_QuaternionNLerp_2: typeof gp_QuaternionNLerp_2;
  gp_Circ_1: typeof gp_Circ_1;
  gp_Circ_2: typeof gp_Circ_2;
  gp_Elips_1: typeof gp_Elips_1;
  gp_Elips_2: typeof gp_Elips_2;
  Poly_Triangulation_1: typeof Poly_Triangulation_1;
  Poly_Triangulation_2: typeof Poly_Triangulation_2;
  Poly_Triangulation_3: typeof Poly_Triangulation_3;
  Poly_Triangulation_4: typeof Poly_Triangulation_4;
  gp_Lin2d_1: typeof gp_Lin2d_1;
  gp_Lin2d_2: typeof gp_Lin2d_2;
  gp_Lin2d_3: typeof gp_Lin2d_3;
  gp_Lin2d_4: typeof gp_Lin2d_4;
  gp_Ax22d_1: typeof gp_Ax22d_1;
  gp_Ax22d_2: typeof gp_Ax22d_2;
  gp_Ax22d_3: typeof gp_Ax22d_3;
  gp_Ax22d_4: typeof gp_Ax22d_4;
  gp_Circ2d_1: typeof gp_Circ2d_1;
  gp_Circ2d_2: typeof gp_Circ2d_2;
  gp_Circ2d_3: typeof gp_Circ2d_3;
  gp_Elips2d_1: typeof gp_Elips2d_1;
  gp_Elips2d_2: typeof gp_Elips2d_2;
  gp_Elips2d_3: typeof gp_Elips2d_3;
  gp_Hypr2d_1: typeof gp_Hypr2d_1;
  gp_Hypr2d_2: typeof gp_Hypr2d_2;
  gp_Hypr2d_3: typeof gp_Hypr2d_3;
  gp_Parab2d_1: typeof gp_Parab2d_1;
  gp_Parab2d_2: typeof gp_Parab2d_2;
  gp_Parab2d_3: typeof gp_Parab2d_3;
  gp_Parab2d_4: typeof gp_Parab2d_4;
  gp_Hypr_1: typeof gp_Hypr_1;
  gp_Hypr_2: typeof gp_Hypr_2;
  gp_Parab_1: typeof gp_Parab_1;
  gp_Parab_2: typeof gp_Parab_2;
  gp_Parab_3: typeof gp_Parab_3;
  gp_Cylinder_1: typeof gp_Cylinder_1;
  gp_Cylinder_2: typeof gp_Cylinder_2;
  gp_Cone_1: typeof gp_Cone_1;
  gp_Cone_2: typeof gp_Cone_2;
  gp_Sphere_1: typeof gp_Sphere_1;
  gp_Sphere_2: typeof gp_Sphere_2;
  gp_Torus_1: typeof gp_Torus_1;
  gp_Torus_2: typeof gp_Torus_2;
  math_DoubleTab_1: typeof math_DoubleTab_1;
  math_DoubleTab_2: typeof math_DoubleTab_2;
  math_DoubleTab_3: typeof math_DoubleTab_3;
  math_BFGS: typeof math_BFGS;
  gp_GTrsf2d_1: typeof gp_GTrsf2d_1;
  gp_GTrsf2d_2: typeof gp_GTrsf2d_2;
  gp_GTrsf2d_3: typeof gp_GTrsf2d_3;
  BVH_BuildQueue: typeof BVH_BuildQueue;
  BVH_BuildThread: typeof BVH_BuildThread;
  BSplSLib_Cache: typeof BSplSLib_Cache;
  Poly_Polygon3D_1: typeof Poly_Polygon3D_1;
  Poly_Polygon3D_2: typeof Poly_Polygon3D_2;
  Poly_Polygon3D_3: typeof Poly_Polygon3D_3;
  Poly_PolygonOnTriangulation_1: typeof Poly_PolygonOnTriangulation_1;
  Poly_PolygonOnTriangulation_2: typeof Poly_PolygonOnTriangulation_2;
  Poly_PolygonOnTriangulation_3: typeof Poly_PolygonOnTriangulation_3;
  Poly_Polygon2D_1: typeof Poly_Polygon2D_1;
  Poly_Polygon2D_2: typeof Poly_Polygon2D_2;
  BSplCLib_Cache_1: typeof BSplCLib_Cache_1;
  BSplCLib_Cache_2: typeof BSplCLib_Cache_2;
  Bnd_Sphere_1: typeof Bnd_Sphere_1;
  Bnd_Sphere_2: typeof Bnd_Sphere_2;
  Bnd_Box2d: typeof Bnd_Box2d;
  Bnd_B2d_1: typeof Bnd_B2d_1;
  Bnd_B2d_2: typeof Bnd_B2d_2;
  Bnd_B2f_1: typeof Bnd_B2f_1;
  Bnd_B2f_2: typeof Bnd_B2f_2;
  Bnd_B3d_1: typeof Bnd_B3d_1;
  Bnd_B3d_2: typeof Bnd_B3d_2;
  Bnd_B3f_1: typeof Bnd_B3f_1;
  Bnd_B3f_2: typeof Bnd_B3f_2;
  Bnd_BoundSortBox: typeof Bnd_BoundSortBox;
  Bnd_BoundSortBox2d: typeof Bnd_BoundSortBox2d;
  Bnd_OBB_1: typeof Bnd_OBB_1;
  Bnd_OBB_2: typeof Bnd_OBB_2;
  Bnd_OBB_3: typeof Bnd_OBB_3;
  CSLib_Class2d_1: typeof CSLib_Class2d_1;
  CSLib_Class2d_2: typeof CSLib_Class2d_2;
  CSLib_NormalPolyDef: typeof CSLib_NormalPolyDef;
  Convert_CircleToBSplineCurve_1: typeof Convert_CircleToBSplineCurve_1;
  Convert_CircleToBSplineCurve_2: typeof Convert_CircleToBSplineCurve_2;
  Convert_CompBezierCurves2dToBSplineCurve2d: typeof Convert_CompBezierCurves2dToBSplineCurve2d;
  Convert_CompBezierCurvesToBSplineCurve: typeof Convert_CompBezierCurvesToBSplineCurve;
  Convert_CompPolynomialToPoles_1: typeof Convert_CompPolynomialToPoles_1;
  Convert_CompPolynomialToPoles_2: typeof Convert_CompPolynomialToPoles_2;
  Convert_CompPolynomialToPoles_3: typeof Convert_CompPolynomialToPoles_3;
  Convert_ConeToBSplineSurface_1: typeof Convert_ConeToBSplineSurface_1;
  Convert_ConeToBSplineSurface_2: typeof Convert_ConeToBSplineSurface_2;
  Convert_CylinderToBSplineSurface_1: typeof Convert_CylinderToBSplineSurface_1;
  Convert_CylinderToBSplineSurface_2: typeof Convert_CylinderToBSplineSurface_2;
  Convert_EllipseToBSplineCurve_1: typeof Convert_EllipseToBSplineCurve_1;
  Convert_EllipseToBSplineCurve_2: typeof Convert_EllipseToBSplineCurve_2;
  Convert_GridPolynomialToPoles_1: typeof Convert_GridPolynomialToPoles_1;
  Convert_GridPolynomialToPoles_2: typeof Convert_GridPolynomialToPoles_2;
  Convert_HyperbolaToBSplineCurve: typeof Convert_HyperbolaToBSplineCurve;
  Convert_ParabolaToBSplineCurve: typeof Convert_ParabolaToBSplineCurve;
  Convert_SphereToBSplineSurface_1: typeof Convert_SphereToBSplineSurface_1;
  Convert_SphereToBSplineSurface_2: typeof Convert_SphereToBSplineSurface_2;
  Convert_SphereToBSplineSurface_3: typeof Convert_SphereToBSplineSurface_3;
  Convert_TorusToBSplineSurface_1: typeof Convert_TorusToBSplineSurface_1;
  Convert_TorusToBSplineSurface_2: typeof Convert_TorusToBSplineSurface_2;
  Convert_TorusToBSplineSurface_3: typeof Convert_TorusToBSplineSurface_3;
  Expr_Absolute: typeof Expr_Absolute;
  Expr_ArcCosine: typeof Expr_ArcCosine;
  Expr_ArcSine: typeof Expr_ArcSine;
  Expr_ArcTangent: typeof Expr_ArcTangent;
  Expr_ArgCosh: typeof Expr_ArgCosh;
  Expr_ArgSinh: typeof Expr_ArgSinh;
  Expr_ArgTanh: typeof Expr_ArgTanh;
  Expr_BinaryFunction: typeof Expr_BinaryFunction;
  Expr_Cosh: typeof Expr_Cosh;
  Expr_Cosine: typeof Expr_Cosine;
  Expr_Difference: typeof Expr_Difference;
  Expr_Different: typeof Expr_Different;
  Expr_Division: typeof Expr_Division;
  Expr_Equal: typeof Expr_Equal;
  Expr_Exponential: typeof Expr_Exponential;
  Expr_Exponentiate: typeof Expr_Exponentiate;
  Expr_ExprFailure_1: typeof Expr_ExprFailure_1;
  Expr_ExprFailure_2: typeof Expr_ExprFailure_2;
  Expr_FunctionDerivative: typeof Expr_FunctionDerivative;
  Expr_GreaterThan: typeof Expr_GreaterThan;
  Expr_GreaterThanOrEqual: typeof Expr_GreaterThanOrEqual;
  Expr_InvalidAssignment_1: typeof Expr_InvalidAssignment_1;
  Expr_InvalidAssignment_2: typeof Expr_InvalidAssignment_2;
  Expr_InvalidFunction_1: typeof Expr_InvalidFunction_1;
  Expr_InvalidFunction_2: typeof Expr_InvalidFunction_2;
  Expr_InvalidOperand_1: typeof Expr_InvalidOperand_1;
  Expr_InvalidOperand_2: typeof Expr_InvalidOperand_2;
  Expr_LessThan: typeof Expr_LessThan;
  Expr_LessThanOrEqual: typeof Expr_LessThanOrEqual;
  Expr_LogOf10: typeof Expr_LogOf10;
  Expr_LogOfe: typeof Expr_LogOfe;
  Expr_NamedUnknown: typeof Expr_NamedUnknown;
  Expr_NamedConstant: typeof Expr_NamedConstant;
  Expr_NamedFunction: typeof Expr_NamedFunction;
  Expr_NotAssigned_1: typeof Expr_NotAssigned_1;
  Expr_NotAssigned_2: typeof Expr_NotAssigned_2;
  Expr_NotEvaluable_1: typeof Expr_NotEvaluable_1;
  Expr_NotEvaluable_2: typeof Expr_NotEvaluable_2;
  Expr_NumericValue: typeof Expr_NumericValue;
  Expr_Sum_1: typeof Expr_Sum_1;
  Expr_Sum_2: typeof Expr_Sum_2;
  Expr_UnaryMinus: typeof Expr_UnaryMinus;
  Expr_Product_1: typeof Expr_Product_1;
  Expr_Product_2: typeof Expr_Product_2;
  Expr_PolyFunction: typeof Expr_PolyFunction;
  Expr_RUIterator: typeof Expr_RUIterator;
  Expr_RelationIterator: typeof Expr_RelationIterator;
  Expr_Sign: typeof Expr_Sign;
  Expr_Sine: typeof Expr_Sine;
  Expr_Sinh: typeof Expr_Sinh;
  Expr_Square: typeof Expr_Square;
  Expr_SquareRoot: typeof Expr_SquareRoot;
  Expr_SystemRelation: typeof Expr_SystemRelation;
  Expr_Tangent: typeof Expr_Tangent;
  Expr_Tanh: typeof Expr_Tanh;
  Expr_UnaryFunction: typeof Expr_UnaryFunction;
  Expr_UnknownIterator: typeof Expr_UnknownIterator;
  ExprIntrp_Analysis: typeof ExprIntrp_Analysis;
  ExprIntrp_SyntaxError_1: typeof ExprIntrp_SyntaxError_1;
  ExprIntrp_SyntaxError_2: typeof ExprIntrp_SyntaxError_2;
  math_FunctionSample: typeof math_FunctionSample;
  math_DirectPolynomialRoots_1: typeof math_DirectPolynomialRoots_1;
  math_DirectPolynomialRoots_2: typeof math_DirectPolynomialRoots_2;
  math_DirectPolynomialRoots_3: typeof math_DirectPolynomialRoots_3;
  math_DirectPolynomialRoots_4: typeof math_DirectPolynomialRoots_4;
  math_TrigonometricFunctionRoots_1: typeof math_TrigonometricFunctionRoots_1;
  math_TrigonometricFunctionRoots_2: typeof math_TrigonometricFunctionRoots_2;
  math_TrigonometricFunctionRoots_3: typeof math_TrigonometricFunctionRoots_3;
  PLib_DoubleJacobiPolynomial_1: typeof PLib_DoubleJacobiPolynomial_1;
  PLib_DoubleJacobiPolynomial_2: typeof PLib_DoubleJacobiPolynomial_2;
  PLib_HermitJacobi: typeof PLib_HermitJacobi;
  PLib_JacobiPolynomial: typeof PLib_JacobiPolynomial;
  Poly_CoherentLink_1: typeof Poly_CoherentLink_1;
  Poly_CoherentLink_2: typeof Poly_CoherentLink_2;
  Poly_CoherentLink_3: typeof Poly_CoherentLink_3;
  Poly_CoherentNode_1: typeof Poly_CoherentNode_1;
  Poly_CoherentNode_2: typeof Poly_CoherentNode_2;
  Poly_CoherentTriangle_1: typeof Poly_CoherentTriangle_1;
  Poly_CoherentTriangle_2: typeof Poly_CoherentTriangle_2;
  Poly_CoherentTriangulation_1: typeof Poly_CoherentTriangulation_1;
  Poly_CoherentTriangulation_2: typeof Poly_CoherentTriangulation_2;
  Poly_Connect_1: typeof Poly_Connect_1;
  Poly_Connect_2: typeof Poly_Connect_2;
  Poly_MakeLoops3D: typeof Poly_MakeLoops3D;
  Poly_MakeLoops2D: typeof Poly_MakeLoops2D;
  math_BullardGenerator: typeof math_BullardGenerator;
  TopLoc_SListNodeOfItemLocation: typeof TopLoc_SListNodeOfItemLocation;
  gp_QuaternionSLerp_1: typeof gp_QuaternionSLerp_1;
  gp_QuaternionSLerp_2: typeof gp_QuaternionSLerp_2;
  math_ValueAndWeight_1: typeof math_ValueAndWeight_1;
  math_ValueAndWeight_2: typeof math_ValueAndWeight_2;
  math_BissecNewton: typeof math_BissecNewton;
  math_BracketMinimum_1: typeof math_BracketMinimum_1;
  math_BracketMinimum_2: typeof math_BracketMinimum_2;
  math_BracketMinimum_3: typeof math_BracketMinimum_3;
  math_BracketMinimum_4: typeof math_BracketMinimum_4;
  math_BracketedRoot: typeof math_BracketedRoot;
  math_BrentMinimum_1: typeof math_BrentMinimum_1;
  math_BrentMinimum_2: typeof math_BrentMinimum_2;
  math_ComputeGaussPointsAndWeights: typeof math_ComputeGaussPointsAndWeights;
  math_ComputeKronrodPointsAndWeights: typeof math_ComputeKronrodPointsAndWeights;
  math_Crout: typeof math_Crout;
  math_EigenValuesSearcher: typeof math_EigenValuesSearcher;
  math_FRPR: typeof math_FRPR;
  math_FunctionAllRoots: typeof math_FunctionAllRoots;
  math_FunctionRoot_1: typeof math_FunctionRoot_1;
  math_FunctionRoot_2: typeof math_FunctionRoot_2;
  math_FunctionRoots: typeof math_FunctionRoots;
  math_FunctionSetRoot_1: typeof math_FunctionSetRoot_1;
  math_FunctionSetRoot_2: typeof math_FunctionSetRoot_2;
  math_Gauss: typeof math_Gauss;
  math_GaussLeastSquare: typeof math_GaussLeastSquare;
  math_GaussMultipleIntegration: typeof math_GaussMultipleIntegration;
  math_GaussSetIntegration: typeof math_GaussSetIntegration;
  math_GaussSingleIntegration_1: typeof math_GaussSingleIntegration_1;
  math_GaussSingleIntegration_2: typeof math_GaussSingleIntegration_2;
  math_GaussSingleIntegration_3: typeof math_GaussSingleIntegration_3;
  math_GlobOptMin: typeof math_GlobOptMin;
  math_Jacobi: typeof math_Jacobi;
  math_KronrodSingleIntegration_1: typeof math_KronrodSingleIntegration_1;
  math_KronrodSingleIntegration_2: typeof math_KronrodSingleIntegration_2;
  math_KronrodSingleIntegration_3: typeof math_KronrodSingleIntegration_3;
  math_NewtonFunctionRoot_1: typeof math_NewtonFunctionRoot_1;
  math_NewtonFunctionRoot_2: typeof math_NewtonFunctionRoot_2;
  math_NewtonFunctionRoot_3: typeof math_NewtonFunctionRoot_3;
  math_NotSquare_1: typeof math_NotSquare_1;
  math_NotSquare_2: typeof math_NotSquare_2;
  math_PSO: typeof math_PSO;
  math_PSOParticlesPool: typeof math_PSOParticlesPool;
  math_Powell: typeof math_Powell;
  math_SVD: typeof math_SVD;
  math_SingularMatrix_1: typeof math_SingularMatrix_1;
  math_SingularMatrix_2: typeof math_SingularMatrix_2;
  math_TrigonometricEquationFunction: typeof math_TrigonometricEquationFunction;
  math_Uzawa_1: typeof math_Uzawa_1;
  math_Uzawa_2: typeof math_Uzawa_2;
  Handle_gp_VectorWithNullMagnitude_1: typeof Handle_gp_VectorWithNullMagnitude_1;
  Handle_gp_VectorWithNullMagnitude_2: typeof Handle_gp_VectorWithNullMagnitude_2;
  Handle_gp_VectorWithNullMagnitude_3: typeof Handle_gp_VectorWithNullMagnitude_3;
  Handle_gp_VectorWithNullMagnitude_4: typeof Handle_gp_VectorWithNullMagnitude_4;
  Handle_TopLoc_Datum3D_1: typeof Handle_TopLoc_Datum3D_1;
  Handle_TopLoc_Datum3D_2: typeof Handle_TopLoc_Datum3D_2;
  Handle_TopLoc_Datum3D_3: typeof Handle_TopLoc_Datum3D_3;
  Handle_TopLoc_Datum3D_4: typeof Handle_TopLoc_Datum3D_4;
  TColgp_Array1OfPnt_1: typeof TColgp_Array1OfPnt_1;
  TColgp_Array1OfPnt_2: typeof TColgp_Array1OfPnt_2;
  TColgp_Array1OfPnt_3: typeof TColgp_Array1OfPnt_3;
  TColgp_Array1OfPnt_4: typeof TColgp_Array1OfPnt_4;
  TColgp_Array1OfPnt_5: typeof TColgp_Array1OfPnt_5;
  Handle_TColgp_HArray1OfPnt_1: typeof Handle_TColgp_HArray1OfPnt_1;
  Handle_TColgp_HArray1OfPnt_2: typeof Handle_TColgp_HArray1OfPnt_2;
  Handle_TColgp_HArray1OfPnt_3: typeof Handle_TColgp_HArray1OfPnt_3;
  Handle_TColgp_HArray1OfPnt_4: typeof Handle_TColgp_HArray1OfPnt_4;
  TColgp_Array1OfPnt2d_1: typeof TColgp_Array1OfPnt2d_1;
  TColgp_Array1OfPnt2d_2: typeof TColgp_Array1OfPnt2d_2;
  TColgp_Array1OfPnt2d_3: typeof TColgp_Array1OfPnt2d_3;
  TColgp_Array1OfPnt2d_4: typeof TColgp_Array1OfPnt2d_4;
  TColgp_Array1OfPnt2d_5: typeof TColgp_Array1OfPnt2d_5;
  Poly_Array1OfTriangle_1: typeof Poly_Array1OfTriangle_1;
  Poly_Array1OfTriangle_2: typeof Poly_Array1OfTriangle_2;
  Poly_Array1OfTriangle_3: typeof Poly_Array1OfTriangle_3;
  Poly_Array1OfTriangle_4: typeof Poly_Array1OfTriangle_4;
  Poly_Array1OfTriangle_5: typeof Poly_Array1OfTriangle_5;
  TColgp_SequenceOfPnt_1: typeof TColgp_SequenceOfPnt_1;
  TColgp_SequenceOfPnt_2: typeof TColgp_SequenceOfPnt_2;
  TColgp_SequenceOfPnt_3: typeof TColgp_SequenceOfPnt_3;
  Handle_TColgp_HSequenceOfPnt_1: typeof Handle_TColgp_HSequenceOfPnt_1;
  Handle_TColgp_HSequenceOfPnt_2: typeof Handle_TColgp_HSequenceOfPnt_2;
  Handle_TColgp_HSequenceOfPnt_3: typeof Handle_TColgp_HSequenceOfPnt_3;
  Handle_TColgp_HSequenceOfPnt_4: typeof Handle_TColgp_HSequenceOfPnt_4;
  gp_TrsfNLerp_1: typeof gp_TrsfNLerp_1;
  gp_TrsfNLerp_2: typeof gp_TrsfNLerp_2;
  Handle_TColgp_HArray1OfPnt2d_1: typeof Handle_TColgp_HArray1OfPnt2d_1;
  Handle_TColgp_HArray1OfPnt2d_2: typeof Handle_TColgp_HArray1OfPnt2d_2;
  Handle_TColgp_HArray1OfPnt2d_3: typeof Handle_TColgp_HArray1OfPnt2d_3;
  Handle_TColgp_HArray1OfPnt2d_4: typeof Handle_TColgp_HArray1OfPnt2d_4;
  Handle_Poly_Triangulation_1: typeof Handle_Poly_Triangulation_1;
  Handle_Poly_Triangulation_2: typeof Handle_Poly_Triangulation_2;
  Handle_Poly_Triangulation_3: typeof Handle_Poly_Triangulation_3;
  Handle_Poly_Triangulation_4: typeof Handle_Poly_Triangulation_4;
  TColgp_Array1OfDir_1: typeof TColgp_Array1OfDir_1;
  TColgp_Array1OfDir_2: typeof TColgp_Array1OfDir_2;
  TColgp_Array1OfDir_3: typeof TColgp_Array1OfDir_3;
  TColgp_Array1OfDir_4: typeof TColgp_Array1OfDir_4;
  TColgp_Array1OfDir_5: typeof TColgp_Array1OfDir_5;
  Handle_TColgp_HArray1OfDir_1: typeof Handle_TColgp_HArray1OfDir_1;
  Handle_TColgp_HArray1OfDir_2: typeof Handle_TColgp_HArray1OfDir_2;
  Handle_TColgp_HArray1OfDir_3: typeof Handle_TColgp_HArray1OfDir_3;
  Handle_TColgp_HArray1OfDir_4: typeof Handle_TColgp_HArray1OfDir_4;
  TColgp_Array2OfPnt_1: typeof TColgp_Array2OfPnt_1;
  TColgp_Array2OfPnt_2: typeof TColgp_Array2OfPnt_2;
  TColgp_Array2OfPnt_3: typeof TColgp_Array2OfPnt_3;
  TColgp_Array2OfPnt_4: typeof TColgp_Array2OfPnt_4;
  TColgp_Array2OfPnt_5: typeof TColgp_Array2OfPnt_5;
  Handle_TColgp_HArray2OfPnt_1: typeof Handle_TColgp_HArray2OfPnt_1;
  Handle_TColgp_HArray2OfPnt_2: typeof Handle_TColgp_HArray2OfPnt_2;
  Handle_TColgp_HArray2OfPnt_3: typeof Handle_TColgp_HArray2OfPnt_3;
  Handle_TColgp_HArray2OfPnt_4: typeof Handle_TColgp_HArray2OfPnt_4;
  TColgp_Array2OfPnt2d_1: typeof TColgp_Array2OfPnt2d_1;
  TColgp_Array2OfPnt2d_2: typeof TColgp_Array2OfPnt2d_2;
  TColgp_Array2OfPnt2d_3: typeof TColgp_Array2OfPnt2d_3;
  TColgp_Array2OfPnt2d_4: typeof TColgp_Array2OfPnt2d_4;
  TColgp_Array2OfPnt2d_5: typeof TColgp_Array2OfPnt2d_5;
  Handle_TColgp_HArray2OfPnt2d_1: typeof Handle_TColgp_HArray2OfPnt2d_1;
  Handle_TColgp_HArray2OfPnt2d_2: typeof Handle_TColgp_HArray2OfPnt2d_2;
  Handle_TColgp_HArray2OfPnt2d_3: typeof Handle_TColgp_HArray2OfPnt2d_3;
  Handle_TColgp_HArray2OfPnt2d_4: typeof Handle_TColgp_HArray2OfPnt2d_4;
  TColgp_Array1OfVec_1: typeof TColgp_Array1OfVec_1;
  TColgp_Array1OfVec_2: typeof TColgp_Array1OfVec_2;
  TColgp_Array1OfVec_3: typeof TColgp_Array1OfVec_3;
  TColgp_Array1OfVec_4: typeof TColgp_Array1OfVec_4;
  TColgp_Array1OfVec_5: typeof TColgp_Array1OfVec_5;
  Handle_TColgp_HArray1OfVec_1: typeof Handle_TColgp_HArray1OfVec_1;
  Handle_TColgp_HArray1OfVec_2: typeof Handle_TColgp_HArray1OfVec_2;
  Handle_TColgp_HArray1OfVec_3: typeof Handle_TColgp_HArray1OfVec_3;
  Handle_TColgp_HArray1OfVec_4: typeof Handle_TColgp_HArray1OfVec_4;
  TColgp_Array1OfVec2d_1: typeof TColgp_Array1OfVec2d_1;
  TColgp_Array1OfVec2d_2: typeof TColgp_Array1OfVec2d_2;
  TColgp_Array1OfVec2d_3: typeof TColgp_Array1OfVec2d_3;
  TColgp_Array1OfVec2d_4: typeof TColgp_Array1OfVec2d_4;
  TColgp_Array1OfVec2d_5: typeof TColgp_Array1OfVec2d_5;
  Handle_TColgp_HArray1OfVec2d_1: typeof Handle_TColgp_HArray1OfVec2d_1;
  Handle_TColgp_HArray1OfVec2d_2: typeof Handle_TColgp_HArray1OfVec2d_2;
  Handle_TColgp_HArray1OfVec2d_3: typeof Handle_TColgp_HArray1OfVec2d_3;
  Handle_TColgp_HArray1OfVec2d_4: typeof Handle_TColgp_HArray1OfVec2d_4;
  Handle_BVH_BuildThread_1: typeof Handle_BVH_BuildThread_1;
  Handle_BVH_BuildThread_2: typeof Handle_BVH_BuildThread_2;
  Handle_BVH_BuildThread_3: typeof Handle_BVH_BuildThread_3;
  Handle_BVH_BuildThread_4: typeof Handle_BVH_BuildThread_4;
  Handle_BSplSLib_Cache_1: typeof Handle_BSplSLib_Cache_1;
  Handle_BSplSLib_Cache_2: typeof Handle_BSplSLib_Cache_2;
  Handle_BSplSLib_Cache_3: typeof Handle_BSplSLib_Cache_3;
  Handle_BSplSLib_Cache_4: typeof Handle_BSplSLib_Cache_4;
  Handle_Poly_Polygon3D_1: typeof Handle_Poly_Polygon3D_1;
  Handle_Poly_Polygon3D_2: typeof Handle_Poly_Polygon3D_2;
  Handle_Poly_Polygon3D_3: typeof Handle_Poly_Polygon3D_3;
  Handle_Poly_Polygon3D_4: typeof Handle_Poly_Polygon3D_4;
  Handle_Poly_PolygonOnTriangulation_1: typeof Handle_Poly_PolygonOnTriangulation_1;
  Handle_Poly_PolygonOnTriangulation_2: typeof Handle_Poly_PolygonOnTriangulation_2;
  Handle_Poly_PolygonOnTriangulation_3: typeof Handle_Poly_PolygonOnTriangulation_3;
  Handle_Poly_PolygonOnTriangulation_4: typeof Handle_Poly_PolygonOnTriangulation_4;
  Handle_Poly_Polygon2D_1: typeof Handle_Poly_Polygon2D_1;
  Handle_Poly_Polygon2D_2: typeof Handle_Poly_Polygon2D_2;
  Handle_Poly_Polygon2D_3: typeof Handle_Poly_Polygon2D_3;
  Handle_Poly_Polygon2D_4: typeof Handle_Poly_Polygon2D_4;
  Handle_BSplCLib_Cache_1: typeof Handle_BSplCLib_Cache_1;
  Handle_BSplCLib_Cache_2: typeof Handle_BSplCLib_Cache_2;
  Handle_BSplCLib_Cache_3: typeof Handle_BSplCLib_Cache_3;
  Handle_BSplCLib_Cache_4: typeof Handle_BSplCLib_Cache_4;
  Bnd_SeqOfBox_1: typeof Bnd_SeqOfBox_1;
  Bnd_SeqOfBox_2: typeof Bnd_SeqOfBox_2;
  Bnd_SeqOfBox_3: typeof Bnd_SeqOfBox_3;
  Bnd_Array1OfSphere_1: typeof Bnd_Array1OfSphere_1;
  Bnd_Array1OfSphere_2: typeof Bnd_Array1OfSphere_2;
  Bnd_Array1OfSphere_3: typeof Bnd_Array1OfSphere_3;
  Bnd_Array1OfSphere_4: typeof Bnd_Array1OfSphere_4;
  Bnd_Array1OfSphere_5: typeof Bnd_Array1OfSphere_5;
  Handle_Bnd_HArray1OfSphere_1: typeof Handle_Bnd_HArray1OfSphere_1;
  Handle_Bnd_HArray1OfSphere_2: typeof Handle_Bnd_HArray1OfSphere_2;
  Handle_Bnd_HArray1OfSphere_3: typeof Handle_Bnd_HArray1OfSphere_3;
  Handle_Bnd_HArray1OfSphere_4: typeof Handle_Bnd_HArray1OfSphere_4;
  TColgp_Array2OfXYZ_1: typeof TColgp_Array2OfXYZ_1;
  TColgp_Array2OfXYZ_2: typeof TColgp_Array2OfXYZ_2;
  TColgp_Array2OfXYZ_3: typeof TColgp_Array2OfXYZ_3;
  TColgp_Array2OfXYZ_4: typeof TColgp_Array2OfXYZ_4;
  TColgp_Array2OfXYZ_5: typeof TColgp_Array2OfXYZ_5;
  Handle_TColgp_HArray2OfXYZ_1: typeof Handle_TColgp_HArray2OfXYZ_1;
  Handle_TColgp_HArray2OfXYZ_2: typeof Handle_TColgp_HArray2OfXYZ_2;
  Handle_TColgp_HArray2OfXYZ_3: typeof Handle_TColgp_HArray2OfXYZ_3;
  Handle_TColgp_HArray2OfXYZ_4: typeof Handle_TColgp_HArray2OfXYZ_4;
  TColgp_Array1OfXYZ_1: typeof TColgp_Array1OfXYZ_1;
  TColgp_Array1OfXYZ_2: typeof TColgp_Array1OfXYZ_2;
  TColgp_Array1OfXYZ_3: typeof TColgp_Array1OfXYZ_3;
  TColgp_Array1OfXYZ_4: typeof TColgp_Array1OfXYZ_4;
  TColgp_Array1OfXYZ_5: typeof TColgp_Array1OfXYZ_5;
  TColgp_SequenceOfXY_1: typeof TColgp_SequenceOfXY_1;
  TColgp_SequenceOfXY_2: typeof TColgp_SequenceOfXY_2;
  TColgp_SequenceOfXY_3: typeof TColgp_SequenceOfXY_3;
  TColgp_SequenceOfXYZ_1: typeof TColgp_SequenceOfXYZ_1;
  TColgp_SequenceOfXYZ_2: typeof TColgp_SequenceOfXYZ_2;
  TColgp_SequenceOfXYZ_3: typeof TColgp_SequenceOfXYZ_3;
  Bnd_Array1OfBox_1: typeof Bnd_Array1OfBox_1;
  Bnd_Array1OfBox_2: typeof Bnd_Array1OfBox_2;
  Bnd_Array1OfBox_3: typeof Bnd_Array1OfBox_3;
  Bnd_Array1OfBox_4: typeof Bnd_Array1OfBox_4;
  Bnd_Array1OfBox_5: typeof Bnd_Array1OfBox_5;
  Handle_Bnd_HArray1OfBox_1: typeof Handle_Bnd_HArray1OfBox_1;
  Handle_Bnd_HArray1OfBox_2: typeof Handle_Bnd_HArray1OfBox_2;
  Handle_Bnd_HArray1OfBox_3: typeof Handle_Bnd_HArray1OfBox_3;
  Handle_Bnd_HArray1OfBox_4: typeof Handle_Bnd_HArray1OfBox_4;
  TColgp_SequenceOfPnt2d_1: typeof TColgp_SequenceOfPnt2d_1;
  TColgp_SequenceOfPnt2d_2: typeof TColgp_SequenceOfPnt2d_2;
  TColgp_SequenceOfPnt2d_3: typeof TColgp_SequenceOfPnt2d_3;
  TopLoc_IndexedMapOfLocation_1: typeof TopLoc_IndexedMapOfLocation_1;
  TopLoc_IndexedMapOfLocation_2: typeof TopLoc_IndexedMapOfLocation_2;
  TopLoc_IndexedMapOfLocation_3: typeof TopLoc_IndexedMapOfLocation_3;
  Bnd_Array1OfBox2d_1: typeof Bnd_Array1OfBox2d_1;
  Bnd_Array1OfBox2d_2: typeof Bnd_Array1OfBox2d_2;
  Bnd_Array1OfBox2d_3: typeof Bnd_Array1OfBox2d_3;
  Bnd_Array1OfBox2d_4: typeof Bnd_Array1OfBox2d_4;
  Bnd_Array1OfBox2d_5: typeof Bnd_Array1OfBox2d_5;
  Handle_Bnd_HArray1OfBox2d_1: typeof Handle_Bnd_HArray1OfBox2d_1;
  Handle_Bnd_HArray1OfBox2d_2: typeof Handle_Bnd_HArray1OfBox2d_2;
  Handle_Bnd_HArray1OfBox2d_3: typeof Handle_Bnd_HArray1OfBox2d_3;
  Handle_Bnd_HArray1OfBox2d_4: typeof Handle_Bnd_HArray1OfBox2d_4;
  TColgp_Array2OfVec_1: typeof TColgp_Array2OfVec_1;
  TColgp_Array2OfVec_2: typeof TColgp_Array2OfVec_2;
  TColgp_Array2OfVec_3: typeof TColgp_Array2OfVec_3;
  TColgp_Array2OfVec_4: typeof TColgp_Array2OfVec_4;
  TColgp_Array2OfVec_5: typeof TColgp_Array2OfVec_5;
  TColgp_SequenceOfAx1_1: typeof TColgp_SequenceOfAx1_1;
  TColgp_SequenceOfAx1_2: typeof TColgp_SequenceOfAx1_2;
  TColgp_SequenceOfAx1_3: typeof TColgp_SequenceOfAx1_3;
  Handle_TColgp_HSequenceOfXY_1: typeof Handle_TColgp_HSequenceOfXY_1;
  Handle_TColgp_HSequenceOfXY_2: typeof Handle_TColgp_HSequenceOfXY_2;
  Handle_TColgp_HSequenceOfXY_3: typeof Handle_TColgp_HSequenceOfXY_3;
  Handle_TColgp_HSequenceOfXY_4: typeof Handle_TColgp_HSequenceOfXY_4;
  Handle_Expr_GeneralExpression_1: typeof Handle_Expr_GeneralExpression_1;
  Handle_Expr_GeneralExpression_2: typeof Handle_Expr_GeneralExpression_2;
  Handle_Expr_GeneralExpression_3: typeof Handle_Expr_GeneralExpression_3;
  Handle_Expr_GeneralExpression_4: typeof Handle_Expr_GeneralExpression_4;
  Handle_Expr_UnaryExpression_1: typeof Handle_Expr_UnaryExpression_1;
  Handle_Expr_UnaryExpression_2: typeof Handle_Expr_UnaryExpression_2;
  Handle_Expr_UnaryExpression_3: typeof Handle_Expr_UnaryExpression_3;
  Handle_Expr_UnaryExpression_4: typeof Handle_Expr_UnaryExpression_4;
  Handle_Expr_Absolute_1: typeof Handle_Expr_Absolute_1;
  Handle_Expr_Absolute_2: typeof Handle_Expr_Absolute_2;
  Handle_Expr_Absolute_3: typeof Handle_Expr_Absolute_3;
  Handle_Expr_Absolute_4: typeof Handle_Expr_Absolute_4;
  Handle_Expr_ArcCosine_1: typeof Handle_Expr_ArcCosine_1;
  Handle_Expr_ArcCosine_2: typeof Handle_Expr_ArcCosine_2;
  Handle_Expr_ArcCosine_3: typeof Handle_Expr_ArcCosine_3;
  Handle_Expr_ArcCosine_4: typeof Handle_Expr_ArcCosine_4;
  Handle_Expr_ArcSine_1: typeof Handle_Expr_ArcSine_1;
  Handle_Expr_ArcSine_2: typeof Handle_Expr_ArcSine_2;
  Handle_Expr_ArcSine_3: typeof Handle_Expr_ArcSine_3;
  Handle_Expr_ArcSine_4: typeof Handle_Expr_ArcSine_4;
  Handle_Expr_ArcTangent_1: typeof Handle_Expr_ArcTangent_1;
  Handle_Expr_ArcTangent_2: typeof Handle_Expr_ArcTangent_2;
  Handle_Expr_ArcTangent_3: typeof Handle_Expr_ArcTangent_3;
  Handle_Expr_ArcTangent_4: typeof Handle_Expr_ArcTangent_4;
  Handle_Expr_ArgCosh_1: typeof Handle_Expr_ArgCosh_1;
  Handle_Expr_ArgCosh_2: typeof Handle_Expr_ArgCosh_2;
  Handle_Expr_ArgCosh_3: typeof Handle_Expr_ArgCosh_3;
  Handle_Expr_ArgCosh_4: typeof Handle_Expr_ArgCosh_4;
  Handle_Expr_ArgSinh_1: typeof Handle_Expr_ArgSinh_1;
  Handle_Expr_ArgSinh_2: typeof Handle_Expr_ArgSinh_2;
  Handle_Expr_ArgSinh_3: typeof Handle_Expr_ArgSinh_3;
  Handle_Expr_ArgSinh_4: typeof Handle_Expr_ArgSinh_4;
  Handle_Expr_ArgTanh_1: typeof Handle_Expr_ArgTanh_1;
  Handle_Expr_ArgTanh_2: typeof Handle_Expr_ArgTanh_2;
  Handle_Expr_ArgTanh_3: typeof Handle_Expr_ArgTanh_3;
  Handle_Expr_ArgTanh_4: typeof Handle_Expr_ArgTanh_4;
  Handle_Expr_GeneralRelation_1: typeof Handle_Expr_GeneralRelation_1;
  Handle_Expr_GeneralRelation_2: typeof Handle_Expr_GeneralRelation_2;
  Handle_Expr_GeneralRelation_3: typeof Handle_Expr_GeneralRelation_3;
  Handle_Expr_GeneralRelation_4: typeof Handle_Expr_GeneralRelation_4;
  Handle_Expr_SingleRelation_1: typeof Handle_Expr_SingleRelation_1;
  Handle_Expr_SingleRelation_2: typeof Handle_Expr_SingleRelation_2;
  Handle_Expr_SingleRelation_3: typeof Handle_Expr_SingleRelation_3;
  Handle_Expr_SingleRelation_4: typeof Handle_Expr_SingleRelation_4;
  Handle_Expr_BinaryExpression_1: typeof Handle_Expr_BinaryExpression_1;
  Handle_Expr_BinaryExpression_2: typeof Handle_Expr_BinaryExpression_2;
  Handle_Expr_BinaryExpression_3: typeof Handle_Expr_BinaryExpression_3;
  Handle_Expr_BinaryExpression_4: typeof Handle_Expr_BinaryExpression_4;
  Handle_Expr_BinaryFunction_1: typeof Handle_Expr_BinaryFunction_1;
  Handle_Expr_BinaryFunction_2: typeof Handle_Expr_BinaryFunction_2;
  Handle_Expr_BinaryFunction_3: typeof Handle_Expr_BinaryFunction_3;
  Handle_Expr_BinaryFunction_4: typeof Handle_Expr_BinaryFunction_4;
  Handle_Expr_Cosh_1: typeof Handle_Expr_Cosh_1;
  Handle_Expr_Cosh_2: typeof Handle_Expr_Cosh_2;
  Handle_Expr_Cosh_3: typeof Handle_Expr_Cosh_3;
  Handle_Expr_Cosh_4: typeof Handle_Expr_Cosh_4;
  Handle_Expr_Cosine_1: typeof Handle_Expr_Cosine_1;
  Handle_Expr_Cosine_2: typeof Handle_Expr_Cosine_2;
  Handle_Expr_Cosine_3: typeof Handle_Expr_Cosine_3;
  Handle_Expr_Cosine_4: typeof Handle_Expr_Cosine_4;
  Handle_Expr_Difference_1: typeof Handle_Expr_Difference_1;
  Handle_Expr_Difference_2: typeof Handle_Expr_Difference_2;
  Handle_Expr_Difference_3: typeof Handle_Expr_Difference_3;
  Handle_Expr_Difference_4: typeof Handle_Expr_Difference_4;
  Handle_Expr_Different_1: typeof Handle_Expr_Different_1;
  Handle_Expr_Different_2: typeof Handle_Expr_Different_2;
  Handle_Expr_Different_3: typeof Handle_Expr_Different_3;
  Handle_Expr_Different_4: typeof Handle_Expr_Different_4;
  Handle_Expr_Division_1: typeof Handle_Expr_Division_1;
  Handle_Expr_Division_2: typeof Handle_Expr_Division_2;
  Handle_Expr_Division_3: typeof Handle_Expr_Division_3;
  Handle_Expr_Division_4: typeof Handle_Expr_Division_4;
  Handle_Expr_Equal_1: typeof Handle_Expr_Equal_1;
  Handle_Expr_Equal_2: typeof Handle_Expr_Equal_2;
  Handle_Expr_Equal_3: typeof Handle_Expr_Equal_3;
  Handle_Expr_Equal_4: typeof Handle_Expr_Equal_4;
  Handle_Expr_Exponential_1: typeof Handle_Expr_Exponential_1;
  Handle_Expr_Exponential_2: typeof Handle_Expr_Exponential_2;
  Handle_Expr_Exponential_3: typeof Handle_Expr_Exponential_3;
  Handle_Expr_Exponential_4: typeof Handle_Expr_Exponential_4;
  Handle_Expr_Exponentiate_1: typeof Handle_Expr_Exponentiate_1;
  Handle_Expr_Exponentiate_2: typeof Handle_Expr_Exponentiate_2;
  Handle_Expr_Exponentiate_3: typeof Handle_Expr_Exponentiate_3;
  Handle_Expr_Exponentiate_4: typeof Handle_Expr_Exponentiate_4;
  Handle_Expr_ExprFailure_1: typeof Handle_Expr_ExprFailure_1;
  Handle_Expr_ExprFailure_2: typeof Handle_Expr_ExprFailure_2;
  Handle_Expr_ExprFailure_3: typeof Handle_Expr_ExprFailure_3;
  Handle_Expr_ExprFailure_4: typeof Handle_Expr_ExprFailure_4;
  Handle_Expr_GeneralFunction_1: typeof Handle_Expr_GeneralFunction_1;
  Handle_Expr_GeneralFunction_2: typeof Handle_Expr_GeneralFunction_2;
  Handle_Expr_GeneralFunction_3: typeof Handle_Expr_GeneralFunction_3;
  Handle_Expr_GeneralFunction_4: typeof Handle_Expr_GeneralFunction_4;
  Handle_Expr_FunctionDerivative_1: typeof Handle_Expr_FunctionDerivative_1;
  Handle_Expr_FunctionDerivative_2: typeof Handle_Expr_FunctionDerivative_2;
  Handle_Expr_FunctionDerivative_3: typeof Handle_Expr_FunctionDerivative_3;
  Handle_Expr_FunctionDerivative_4: typeof Handle_Expr_FunctionDerivative_4;
  Handle_Expr_GreaterThan_1: typeof Handle_Expr_GreaterThan_1;
  Handle_Expr_GreaterThan_2: typeof Handle_Expr_GreaterThan_2;
  Handle_Expr_GreaterThan_3: typeof Handle_Expr_GreaterThan_3;
  Handle_Expr_GreaterThan_4: typeof Handle_Expr_GreaterThan_4;
  Handle_Expr_GreaterThanOrEqual_1: typeof Handle_Expr_GreaterThanOrEqual_1;
  Handle_Expr_GreaterThanOrEqual_2: typeof Handle_Expr_GreaterThanOrEqual_2;
  Handle_Expr_GreaterThanOrEqual_3: typeof Handle_Expr_GreaterThanOrEqual_3;
  Handle_Expr_GreaterThanOrEqual_4: typeof Handle_Expr_GreaterThanOrEqual_4;
  Handle_Expr_InvalidAssignment_1: typeof Handle_Expr_InvalidAssignment_1;
  Handle_Expr_InvalidAssignment_2: typeof Handle_Expr_InvalidAssignment_2;
  Handle_Expr_InvalidAssignment_3: typeof Handle_Expr_InvalidAssignment_3;
  Handle_Expr_InvalidAssignment_4: typeof Handle_Expr_InvalidAssignment_4;
  Handle_Expr_InvalidFunction_1: typeof Handle_Expr_InvalidFunction_1;
  Handle_Expr_InvalidFunction_2: typeof Handle_Expr_InvalidFunction_2;
  Handle_Expr_InvalidFunction_3: typeof Handle_Expr_InvalidFunction_3;
  Handle_Expr_InvalidFunction_4: typeof Handle_Expr_InvalidFunction_4;
  Handle_Expr_InvalidOperand_1: typeof Handle_Expr_InvalidOperand_1;
  Handle_Expr_InvalidOperand_2: typeof Handle_Expr_InvalidOperand_2;
  Handle_Expr_InvalidOperand_3: typeof Handle_Expr_InvalidOperand_3;
  Handle_Expr_InvalidOperand_4: typeof Handle_Expr_InvalidOperand_4;
  Handle_Expr_LessThan_1: typeof Handle_Expr_LessThan_1;
  Handle_Expr_LessThan_2: typeof Handle_Expr_LessThan_2;
  Handle_Expr_LessThan_3: typeof Handle_Expr_LessThan_3;
  Handle_Expr_LessThan_4: typeof Handle_Expr_LessThan_4;
  Handle_Expr_LessThanOrEqual_1: typeof Handle_Expr_LessThanOrEqual_1;
  Handle_Expr_LessThanOrEqual_2: typeof Handle_Expr_LessThanOrEqual_2;
  Handle_Expr_LessThanOrEqual_3: typeof Handle_Expr_LessThanOrEqual_3;
  Handle_Expr_LessThanOrEqual_4: typeof Handle_Expr_LessThanOrEqual_4;
  Handle_Expr_LogOf10_1: typeof Handle_Expr_LogOf10_1;
  Handle_Expr_LogOf10_2: typeof Handle_Expr_LogOf10_2;
  Handle_Expr_LogOf10_3: typeof Handle_Expr_LogOf10_3;
  Handle_Expr_LogOf10_4: typeof Handle_Expr_LogOf10_4;
  Handle_Expr_LogOfe_1: typeof Handle_Expr_LogOfe_1;
  Handle_Expr_LogOfe_2: typeof Handle_Expr_LogOfe_2;
  Handle_Expr_LogOfe_3: typeof Handle_Expr_LogOfe_3;
  Handle_Expr_LogOfe_4: typeof Handle_Expr_LogOfe_4;
  Handle_Expr_NamedExpression_1: typeof Handle_Expr_NamedExpression_1;
  Handle_Expr_NamedExpression_2: typeof Handle_Expr_NamedExpression_2;
  Handle_Expr_NamedExpression_3: typeof Handle_Expr_NamedExpression_3;
  Handle_Expr_NamedExpression_4: typeof Handle_Expr_NamedExpression_4;
  Handle_Expr_NamedUnknown_1: typeof Handle_Expr_NamedUnknown_1;
  Handle_Expr_NamedUnknown_2: typeof Handle_Expr_NamedUnknown_2;
  Handle_Expr_NamedUnknown_3: typeof Handle_Expr_NamedUnknown_3;
  Handle_Expr_NamedUnknown_4: typeof Handle_Expr_NamedUnknown_4;
  Handle_Expr_NamedConstant_1: typeof Handle_Expr_NamedConstant_1;
  Handle_Expr_NamedConstant_2: typeof Handle_Expr_NamedConstant_2;
  Handle_Expr_NamedConstant_3: typeof Handle_Expr_NamedConstant_3;
  Handle_Expr_NamedConstant_4: typeof Handle_Expr_NamedConstant_4;
  Handle_Expr_NamedFunction_1: typeof Handle_Expr_NamedFunction_1;
  Handle_Expr_NamedFunction_2: typeof Handle_Expr_NamedFunction_2;
  Handle_Expr_NamedFunction_3: typeof Handle_Expr_NamedFunction_3;
  Handle_Expr_NamedFunction_4: typeof Handle_Expr_NamedFunction_4;
  Handle_Expr_NotAssigned_1: typeof Handle_Expr_NotAssigned_1;
  Handle_Expr_NotAssigned_2: typeof Handle_Expr_NotAssigned_2;
  Handle_Expr_NotAssigned_3: typeof Handle_Expr_NotAssigned_3;
  Handle_Expr_NotAssigned_4: typeof Handle_Expr_NotAssigned_4;
  Handle_Expr_NotEvaluable_1: typeof Handle_Expr_NotEvaluable_1;
  Handle_Expr_NotEvaluable_2: typeof Handle_Expr_NotEvaluable_2;
  Handle_Expr_NotEvaluable_3: typeof Handle_Expr_NotEvaluable_3;
  Handle_Expr_NotEvaluable_4: typeof Handle_Expr_NotEvaluable_4;
  Handle_Expr_NumericValue_1: typeof Handle_Expr_NumericValue_1;
  Handle_Expr_NumericValue_2: typeof Handle_Expr_NumericValue_2;
  Handle_Expr_NumericValue_3: typeof Handle_Expr_NumericValue_3;
  Handle_Expr_NumericValue_4: typeof Handle_Expr_NumericValue_4;
  Handle_Expr_PolyExpression_1: typeof Handle_Expr_PolyExpression_1;
  Handle_Expr_PolyExpression_2: typeof Handle_Expr_PolyExpression_2;
  Handle_Expr_PolyExpression_3: typeof Handle_Expr_PolyExpression_3;
  Handle_Expr_PolyExpression_4: typeof Handle_Expr_PolyExpression_4;
  Handle_Expr_Sum_1: typeof Handle_Expr_Sum_1;
  Handle_Expr_Sum_2: typeof Handle_Expr_Sum_2;
  Handle_Expr_Sum_3: typeof Handle_Expr_Sum_3;
  Handle_Expr_Sum_4: typeof Handle_Expr_Sum_4;
  Handle_Expr_UnaryMinus_1: typeof Handle_Expr_UnaryMinus_1;
  Handle_Expr_UnaryMinus_2: typeof Handle_Expr_UnaryMinus_2;
  Handle_Expr_UnaryMinus_3: typeof Handle_Expr_UnaryMinus_3;
  Handle_Expr_UnaryMinus_4: typeof Handle_Expr_UnaryMinus_4;
  Handle_Expr_Product_1: typeof Handle_Expr_Product_1;
  Handle_Expr_Product_2: typeof Handle_Expr_Product_2;
  Handle_Expr_Product_3: typeof Handle_Expr_Product_3;
  Handle_Expr_Product_4: typeof Handle_Expr_Product_4;
  Handle_Expr_PolyFunction_1: typeof Handle_Expr_PolyFunction_1;
  Handle_Expr_PolyFunction_2: typeof Handle_Expr_PolyFunction_2;
  Handle_Expr_PolyFunction_3: typeof Handle_Expr_PolyFunction_3;
  Handle_Expr_PolyFunction_4: typeof Handle_Expr_PolyFunction_4;
  Handle_Expr_Sign_1: typeof Handle_Expr_Sign_1;
  Handle_Expr_Sign_2: typeof Handle_Expr_Sign_2;
  Handle_Expr_Sign_3: typeof Handle_Expr_Sign_3;
  Handle_Expr_Sign_4: typeof Handle_Expr_Sign_4;
  Handle_Expr_Sine_1: typeof Handle_Expr_Sine_1;
  Handle_Expr_Sine_2: typeof Handle_Expr_Sine_2;
  Handle_Expr_Sine_3: typeof Handle_Expr_Sine_3;
  Handle_Expr_Sine_4: typeof Handle_Expr_Sine_4;
  Handle_Expr_Sinh_1: typeof Handle_Expr_Sinh_1;
  Handle_Expr_Sinh_2: typeof Handle_Expr_Sinh_2;
  Handle_Expr_Sinh_3: typeof Handle_Expr_Sinh_3;
  Handle_Expr_Sinh_4: typeof Handle_Expr_Sinh_4;
  Handle_Expr_Square_1: typeof Handle_Expr_Square_1;
  Handle_Expr_Square_2: typeof Handle_Expr_Square_2;
  Handle_Expr_Square_3: typeof Handle_Expr_Square_3;
  Handle_Expr_Square_4: typeof Handle_Expr_Square_4;
  Handle_Expr_SquareRoot_1: typeof Handle_Expr_SquareRoot_1;
  Handle_Expr_SquareRoot_2: typeof Handle_Expr_SquareRoot_2;
  Handle_Expr_SquareRoot_3: typeof Handle_Expr_SquareRoot_3;
  Handle_Expr_SquareRoot_4: typeof Handle_Expr_SquareRoot_4;
  Handle_Expr_SystemRelation_1: typeof Handle_Expr_SystemRelation_1;
  Handle_Expr_SystemRelation_2: typeof Handle_Expr_SystemRelation_2;
  Handle_Expr_SystemRelation_3: typeof Handle_Expr_SystemRelation_3;
  Handle_Expr_SystemRelation_4: typeof Handle_Expr_SystemRelation_4;
  Handle_Expr_Tangent_1: typeof Handle_Expr_Tangent_1;
  Handle_Expr_Tangent_2: typeof Handle_Expr_Tangent_2;
  Handle_Expr_Tangent_3: typeof Handle_Expr_Tangent_3;
  Handle_Expr_Tangent_4: typeof Handle_Expr_Tangent_4;
  Handle_Expr_Tanh_1: typeof Handle_Expr_Tanh_1;
  Handle_Expr_Tanh_2: typeof Handle_Expr_Tanh_2;
  Handle_Expr_Tanh_3: typeof Handle_Expr_Tanh_3;
  Handle_Expr_Tanh_4: typeof Handle_Expr_Tanh_4;
  Handle_Expr_UnaryFunction_1: typeof Handle_Expr_UnaryFunction_1;
  Handle_Expr_UnaryFunction_2: typeof Handle_Expr_UnaryFunction_2;
  Handle_Expr_UnaryFunction_3: typeof Handle_Expr_UnaryFunction_3;
  Handle_Expr_UnaryFunction_4: typeof Handle_Expr_UnaryFunction_4;
  Handle_ExprIntrp_Generator_1: typeof Handle_ExprIntrp_Generator_1;
  Handle_ExprIntrp_Generator_2: typeof Handle_ExprIntrp_Generator_2;
  Handle_ExprIntrp_Generator_3: typeof Handle_ExprIntrp_Generator_3;
  Handle_ExprIntrp_Generator_4: typeof Handle_ExprIntrp_Generator_4;
  Handle_ExprIntrp_GenExp_1: typeof Handle_ExprIntrp_GenExp_1;
  Handle_ExprIntrp_GenExp_2: typeof Handle_ExprIntrp_GenExp_2;
  Handle_ExprIntrp_GenExp_3: typeof Handle_ExprIntrp_GenExp_3;
  Handle_ExprIntrp_GenExp_4: typeof Handle_ExprIntrp_GenExp_4;
  Handle_ExprIntrp_GenFct_1: typeof Handle_ExprIntrp_GenFct_1;
  Handle_ExprIntrp_GenFct_2: typeof Handle_ExprIntrp_GenFct_2;
  Handle_ExprIntrp_GenFct_3: typeof Handle_ExprIntrp_GenFct_3;
  Handle_ExprIntrp_GenFct_4: typeof Handle_ExprIntrp_GenFct_4;
  Handle_ExprIntrp_GenRel_1: typeof Handle_ExprIntrp_GenRel_1;
  Handle_ExprIntrp_GenRel_2: typeof Handle_ExprIntrp_GenRel_2;
  Handle_ExprIntrp_GenRel_3: typeof Handle_ExprIntrp_GenRel_3;
  Handle_ExprIntrp_GenRel_4: typeof Handle_ExprIntrp_GenRel_4;
  Handle_ExprIntrp_SyntaxError_1: typeof Handle_ExprIntrp_SyntaxError_1;
  Handle_ExprIntrp_SyntaxError_2: typeof Handle_ExprIntrp_SyntaxError_2;
  Handle_ExprIntrp_SyntaxError_3: typeof Handle_ExprIntrp_SyntaxError_3;
  Handle_ExprIntrp_SyntaxError_4: typeof Handle_ExprIntrp_SyntaxError_4;
  TColgp_Array1OfXY_1: typeof TColgp_Array1OfXY_1;
  TColgp_Array1OfXY_2: typeof TColgp_Array1OfXY_2;
  TColgp_Array1OfXY_3: typeof TColgp_Array1OfXY_3;
  TColgp_Array1OfXY_4: typeof TColgp_Array1OfXY_4;
  TColgp_Array1OfXY_5: typeof TColgp_Array1OfXY_5;
  TColgp_Array1OfCirc2d_1: typeof TColgp_Array1OfCirc2d_1;
  TColgp_Array1OfCirc2d_2: typeof TColgp_Array1OfCirc2d_2;
  TColgp_Array1OfCirc2d_3: typeof TColgp_Array1OfCirc2d_3;
  TColgp_Array1OfCirc2d_4: typeof TColgp_Array1OfCirc2d_4;
  TColgp_Array1OfCirc2d_5: typeof TColgp_Array1OfCirc2d_5;
  TColgp_Array1OfLin2d_1: typeof TColgp_Array1OfLin2d_1;
  TColgp_Array1OfLin2d_2: typeof TColgp_Array1OfLin2d_2;
  TColgp_Array1OfLin2d_3: typeof TColgp_Array1OfLin2d_3;
  TColgp_Array1OfLin2d_4: typeof TColgp_Array1OfLin2d_4;
  TColgp_Array1OfLin2d_5: typeof TColgp_Array1OfLin2d_5;
  TColgp_SequenceOfVec_1: typeof TColgp_SequenceOfVec_1;
  TColgp_SequenceOfVec_2: typeof TColgp_SequenceOfVec_2;
  TColgp_SequenceOfVec_3: typeof TColgp_SequenceOfVec_3;
  Handle_TColgp_HArray1OfXYZ_1: typeof Handle_TColgp_HArray1OfXYZ_1;
  Handle_TColgp_HArray1OfXYZ_2: typeof Handle_TColgp_HArray1OfXYZ_2;
  Handle_TColgp_HArray1OfXYZ_3: typeof Handle_TColgp_HArray1OfXYZ_3;
  Handle_TColgp_HArray1OfXYZ_4: typeof Handle_TColgp_HArray1OfXYZ_4;
  Handle_TColgp_HArray1OfXY_1: typeof Handle_TColgp_HArray1OfXY_1;
  Handle_TColgp_HArray1OfXY_2: typeof Handle_TColgp_HArray1OfXY_2;
  Handle_TColgp_HArray1OfXY_3: typeof Handle_TColgp_HArray1OfXY_3;
  Handle_TColgp_HArray1OfXY_4: typeof Handle_TColgp_HArray1OfXY_4;
  Handle_TColgp_HSequenceOfXYZ_1: typeof Handle_TColgp_HSequenceOfXYZ_1;
  Handle_TColgp_HSequenceOfXYZ_2: typeof Handle_TColgp_HSequenceOfXYZ_2;
  Handle_TColgp_HSequenceOfXYZ_3: typeof Handle_TColgp_HSequenceOfXYZ_3;
  Handle_TColgp_HSequenceOfXYZ_4: typeof Handle_TColgp_HSequenceOfXYZ_4;
  Handle_PLib_Base_1: typeof Handle_PLib_Base_1;
  Handle_PLib_Base_2: typeof Handle_PLib_Base_2;
  Handle_PLib_Base_3: typeof Handle_PLib_Base_3;
  Handle_PLib_Base_4: typeof Handle_PLib_Base_4;
  Handle_PLib_HermitJacobi_1: typeof Handle_PLib_HermitJacobi_1;
  Handle_PLib_HermitJacobi_2: typeof Handle_PLib_HermitJacobi_2;
  Handle_PLib_HermitJacobi_3: typeof Handle_PLib_HermitJacobi_3;
  Handle_PLib_HermitJacobi_4: typeof Handle_PLib_HermitJacobi_4;
  Handle_PLib_JacobiPolynomial_1: typeof Handle_PLib_JacobiPolynomial_1;
  Handle_PLib_JacobiPolynomial_2: typeof Handle_PLib_JacobiPolynomial_2;
  Handle_PLib_JacobiPolynomial_3: typeof Handle_PLib_JacobiPolynomial_3;
  Handle_PLib_JacobiPolynomial_4: typeof Handle_PLib_JacobiPolynomial_4;
  Handle_Poly_CoherentTriangulation_1: typeof Handle_Poly_CoherentTriangulation_1;
  Handle_Poly_CoherentTriangulation_2: typeof Handle_Poly_CoherentTriangulation_2;
  Handle_Poly_CoherentTriangulation_3: typeof Handle_Poly_CoherentTriangulation_3;
  Handle_Poly_CoherentTriangulation_4: typeof Handle_Poly_CoherentTriangulation_4;
  Handle_Poly_HArray1OfTriangle_1: typeof Handle_Poly_HArray1OfTriangle_1;
  Handle_Poly_HArray1OfTriangle_2: typeof Handle_Poly_HArray1OfTriangle_2;
  Handle_Poly_HArray1OfTriangle_3: typeof Handle_Poly_HArray1OfTriangle_3;
  Handle_Poly_HArray1OfTriangle_4: typeof Handle_Poly_HArray1OfTriangle_4;
  TColgp_Array1OfDir2d_1: typeof TColgp_Array1OfDir2d_1;
  TColgp_Array1OfDir2d_2: typeof TColgp_Array1OfDir2d_2;
  TColgp_Array1OfDir2d_3: typeof TColgp_Array1OfDir2d_3;
  TColgp_Array1OfDir2d_4: typeof TColgp_Array1OfDir2d_4;
  TColgp_Array1OfDir2d_5: typeof TColgp_Array1OfDir2d_5;
  Handle_TColgp_HArray1OfDir2d_1: typeof Handle_TColgp_HArray1OfDir2d_1;
  Handle_TColgp_HArray1OfDir2d_2: typeof Handle_TColgp_HArray1OfDir2d_2;
  Handle_TColgp_HArray1OfDir2d_3: typeof Handle_TColgp_HArray1OfDir2d_3;
  Handle_TColgp_HArray1OfDir2d_4: typeof Handle_TColgp_HArray1OfDir2d_4;
  Handle_TColgp_HArray1OfLin2d_1: typeof Handle_TColgp_HArray1OfLin2d_1;
  Handle_TColgp_HArray1OfLin2d_2: typeof Handle_TColgp_HArray1OfLin2d_2;
  Handle_TColgp_HArray1OfLin2d_3: typeof Handle_TColgp_HArray1OfLin2d_3;
  Handle_TColgp_HArray1OfLin2d_4: typeof Handle_TColgp_HArray1OfLin2d_4;
  Handle_TColgp_HArray1OfCirc2d_1: typeof Handle_TColgp_HArray1OfCirc2d_1;
  Handle_TColgp_HArray1OfCirc2d_2: typeof Handle_TColgp_HArray1OfCirc2d_2;
  Handle_TColgp_HArray1OfCirc2d_3: typeof Handle_TColgp_HArray1OfCirc2d_3;
  Handle_TColgp_HArray1OfCirc2d_4: typeof Handle_TColgp_HArray1OfCirc2d_4;
  TColgp_Array2OfDir_1: typeof TColgp_Array2OfDir_1;
  TColgp_Array2OfDir_2: typeof TColgp_Array2OfDir_2;
  TColgp_Array2OfDir_3: typeof TColgp_Array2OfDir_3;
  TColgp_Array2OfDir_4: typeof TColgp_Array2OfDir_4;
  TColgp_Array2OfDir_5: typeof TColgp_Array2OfDir_5;
  Handle_TColgp_HArray2OfDir_1: typeof Handle_TColgp_HArray2OfDir_1;
  Handle_TColgp_HArray2OfDir_2: typeof Handle_TColgp_HArray2OfDir_2;
  Handle_TColgp_HArray2OfDir_3: typeof Handle_TColgp_HArray2OfDir_3;
  Handle_TColgp_HArray2OfDir_4: typeof Handle_TColgp_HArray2OfDir_4;
  Handle_TColgp_HArray2OfVec_1: typeof Handle_TColgp_HArray2OfVec_1;
  Handle_TColgp_HArray2OfVec_2: typeof Handle_TColgp_HArray2OfVec_2;
  Handle_TColgp_HArray2OfVec_3: typeof Handle_TColgp_HArray2OfVec_3;
  Handle_TColgp_HArray2OfVec_4: typeof Handle_TColgp_HArray2OfVec_4;
  TColgp_Array2OfXY_1: typeof TColgp_Array2OfXY_1;
  TColgp_Array2OfXY_2: typeof TColgp_Array2OfXY_2;
  TColgp_Array2OfXY_3: typeof TColgp_Array2OfXY_3;
  TColgp_Array2OfXY_4: typeof TColgp_Array2OfXY_4;
  TColgp_Array2OfXY_5: typeof TColgp_Array2OfXY_5;
  Handle_TColgp_HArray2OfXY_1: typeof Handle_TColgp_HArray2OfXY_1;
  Handle_TColgp_HArray2OfXY_2: typeof Handle_TColgp_HArray2OfXY_2;
  Handle_TColgp_HArray2OfXY_3: typeof Handle_TColgp_HArray2OfXY_3;
  Handle_TColgp_HArray2OfXY_4: typeof Handle_TColgp_HArray2OfXY_4;
  TColgp_Array2OfDir2d_1: typeof TColgp_Array2OfDir2d_1;
  TColgp_Array2OfDir2d_2: typeof TColgp_Array2OfDir2d_2;
  TColgp_Array2OfDir2d_3: typeof TColgp_Array2OfDir2d_3;
  TColgp_Array2OfDir2d_4: typeof TColgp_Array2OfDir2d_4;
  TColgp_Array2OfDir2d_5: typeof TColgp_Array2OfDir2d_5;
  Handle_TColgp_HArray2OfDir2d_1: typeof Handle_TColgp_HArray2OfDir2d_1;
  Handle_TColgp_HArray2OfDir2d_2: typeof Handle_TColgp_HArray2OfDir2d_2;
  Handle_TColgp_HArray2OfDir2d_3: typeof Handle_TColgp_HArray2OfDir2d_3;
  Handle_TColgp_HArray2OfDir2d_4: typeof Handle_TColgp_HArray2OfDir2d_4;
  TColgp_Array2OfVec2d_1: typeof TColgp_Array2OfVec2d_1;
  TColgp_Array2OfVec2d_2: typeof TColgp_Array2OfVec2d_2;
  TColgp_Array2OfVec2d_3: typeof TColgp_Array2OfVec2d_3;
  TColgp_Array2OfVec2d_4: typeof TColgp_Array2OfVec2d_4;
  TColgp_Array2OfVec2d_5: typeof TColgp_Array2OfVec2d_5;
  Handle_TColgp_HArray2OfVec2d_1: typeof Handle_TColgp_HArray2OfVec2d_1;
  Handle_TColgp_HArray2OfVec2d_2: typeof Handle_TColgp_HArray2OfVec2d_2;
  Handle_TColgp_HArray2OfVec2d_3: typeof Handle_TColgp_HArray2OfVec2d_3;
  Handle_TColgp_HArray2OfVec2d_4: typeof Handle_TColgp_HArray2OfVec2d_4;
  TColgp_Array2OfLin2d_1: typeof TColgp_Array2OfLin2d_1;
  TColgp_Array2OfLin2d_2: typeof TColgp_Array2OfLin2d_2;
  TColgp_Array2OfLin2d_3: typeof TColgp_Array2OfLin2d_3;
  TColgp_Array2OfLin2d_4: typeof TColgp_Array2OfLin2d_4;
  TColgp_Array2OfLin2d_5: typeof TColgp_Array2OfLin2d_5;
  Handle_TColgp_HArray2OfLin2d_1: typeof Handle_TColgp_HArray2OfLin2d_1;
  Handle_TColgp_HArray2OfLin2d_2: typeof Handle_TColgp_HArray2OfLin2d_2;
  Handle_TColgp_HArray2OfLin2d_3: typeof Handle_TColgp_HArray2OfLin2d_3;
  Handle_TColgp_HArray2OfLin2d_4: typeof Handle_TColgp_HArray2OfLin2d_4;
  TColgp_Array2OfCirc2d_1: typeof TColgp_Array2OfCirc2d_1;
  TColgp_Array2OfCirc2d_2: typeof TColgp_Array2OfCirc2d_2;
  TColgp_Array2OfCirc2d_3: typeof TColgp_Array2OfCirc2d_3;
  TColgp_Array2OfCirc2d_4: typeof TColgp_Array2OfCirc2d_4;
  TColgp_Array2OfCirc2d_5: typeof TColgp_Array2OfCirc2d_5;
  Handle_TColgp_HArray2OfCirc2d_1: typeof Handle_TColgp_HArray2OfCirc2d_1;
  Handle_TColgp_HArray2OfCirc2d_2: typeof Handle_TColgp_HArray2OfCirc2d_2;
  Handle_TColgp_HArray2OfCirc2d_3: typeof Handle_TColgp_HArray2OfCirc2d_3;
  Handle_TColgp_HArray2OfCirc2d_4: typeof Handle_TColgp_HArray2OfCirc2d_4;
  TColgp_SequenceOfDir_1: typeof TColgp_SequenceOfDir_1;
  TColgp_SequenceOfDir_2: typeof TColgp_SequenceOfDir_2;
  TColgp_SequenceOfDir_3: typeof TColgp_SequenceOfDir_3;
  Handle_TColgp_HSequenceOfDir_1: typeof Handle_TColgp_HSequenceOfDir_1;
  Handle_TColgp_HSequenceOfDir_2: typeof Handle_TColgp_HSequenceOfDir_2;
  Handle_TColgp_HSequenceOfDir_3: typeof Handle_TColgp_HSequenceOfDir_3;
  Handle_TColgp_HSequenceOfDir_4: typeof Handle_TColgp_HSequenceOfDir_4;
  Handle_TColgp_HSequenceOfVec_1: typeof Handle_TColgp_HSequenceOfVec_1;
  Handle_TColgp_HSequenceOfVec_2: typeof Handle_TColgp_HSequenceOfVec_2;
  Handle_TColgp_HSequenceOfVec_3: typeof Handle_TColgp_HSequenceOfVec_3;
  Handle_TColgp_HSequenceOfVec_4: typeof Handle_TColgp_HSequenceOfVec_4;
  TColgp_SequenceOfDir2d_1: typeof TColgp_SequenceOfDir2d_1;
  TColgp_SequenceOfDir2d_2: typeof TColgp_SequenceOfDir2d_2;
  TColgp_SequenceOfDir2d_3: typeof TColgp_SequenceOfDir2d_3;
  Handle_TColgp_HSequenceOfDir2d_1: typeof Handle_TColgp_HSequenceOfDir2d_1;
  Handle_TColgp_HSequenceOfDir2d_2: typeof Handle_TColgp_HSequenceOfDir2d_2;
  Handle_TColgp_HSequenceOfDir2d_3: typeof Handle_TColgp_HSequenceOfDir2d_3;
  Handle_TColgp_HSequenceOfDir2d_4: typeof Handle_TColgp_HSequenceOfDir2d_4;
  Handle_TColgp_HSequenceOfPnt2d_1: typeof Handle_TColgp_HSequenceOfPnt2d_1;
  Handle_TColgp_HSequenceOfPnt2d_2: typeof Handle_TColgp_HSequenceOfPnt2d_2;
  Handle_TColgp_HSequenceOfPnt2d_3: typeof Handle_TColgp_HSequenceOfPnt2d_3;
  Handle_TColgp_HSequenceOfPnt2d_4: typeof Handle_TColgp_HSequenceOfPnt2d_4;
  TColgp_SequenceOfVec2d_1: typeof TColgp_SequenceOfVec2d_1;
  TColgp_SequenceOfVec2d_2: typeof TColgp_SequenceOfVec2d_2;
  TColgp_SequenceOfVec2d_3: typeof TColgp_SequenceOfVec2d_3;
  Handle_TColgp_HSequenceOfVec2d_1: typeof Handle_TColgp_HSequenceOfVec2d_1;
  Handle_TColgp_HSequenceOfVec2d_2: typeof Handle_TColgp_HSequenceOfVec2d_2;
  Handle_TColgp_HSequenceOfVec2d_3: typeof Handle_TColgp_HSequenceOfVec2d_3;
  Handle_TColgp_HSequenceOfVec2d_4: typeof Handle_TColgp_HSequenceOfVec2d_4;
  TopLoc_MapOfLocation_1: typeof TopLoc_MapOfLocation_1;
  TopLoc_MapOfLocation_2: typeof TopLoc_MapOfLocation_2;
  TopLoc_MapOfLocation_3: typeof TopLoc_MapOfLocation_3;
  Handle_TopLoc_SListNodeOfItemLocation_1: typeof Handle_TopLoc_SListNodeOfItemLocation_1;
  Handle_TopLoc_SListNodeOfItemLocation_2: typeof Handle_TopLoc_SListNodeOfItemLocation_2;
  Handle_TopLoc_SListNodeOfItemLocation_3: typeof Handle_TopLoc_SListNodeOfItemLocation_3;
  Handle_TopLoc_SListNodeOfItemLocation_4: typeof Handle_TopLoc_SListNodeOfItemLocation_4;
  math_Array1OfValueAndWeight_1: typeof math_Array1OfValueAndWeight_1;
  math_Array1OfValueAndWeight_2: typeof math_Array1OfValueAndWeight_2;
  math_Array1OfValueAndWeight_3: typeof math_Array1OfValueAndWeight_3;
  math_Array1OfValueAndWeight_4: typeof math_Array1OfValueAndWeight_4;
  math_Array1OfValueAndWeight_5: typeof math_Array1OfValueAndWeight_5;
  Handle_math_NotSquare_1: typeof Handle_math_NotSquare_1;
  Handle_math_NotSquare_2: typeof Handle_math_NotSquare_2;
  Handle_math_NotSquare_3: typeof Handle_math_NotSquare_3;
  Handle_math_NotSquare_4: typeof Handle_math_NotSquare_4;
  Handle_math_SingularMatrix_1: typeof Handle_math_SingularMatrix_1;
  Handle_math_SingularMatrix_2: typeof Handle_math_SingularMatrix_2;
  Handle_math_SingularMatrix_3: typeof Handle_math_SingularMatrix_3;
  Handle_math_SingularMatrix_4: typeof Handle_math_SingularMatrix_4;
  gp_TrsfForm: typeof gp_TrsfForm;
  GeomAbs_Shape: typeof GeomAbs_Shape;
  gp_EulerSequence: typeof gp_EulerSequence;
  GeomAbs_CurveType: typeof GeomAbs_CurveType;
  BSplCLib_KnotDistribution: typeof BSplCLib_KnotDistribution;
  BSplCLib_MultDistribution: typeof BSplCLib_MultDistribution;
  GeomAbs_BSplKnotDistribution: typeof GeomAbs_BSplKnotDistribution;
  GeomAbs_IsoType: typeof GeomAbs_IsoType;
  GeomAbs_SurfaceType: typeof GeomAbs_SurfaceType;
  math_Status: typeof math_Status;
  Convert_ParameterisationType: typeof Convert_ParameterisationType;
  GeomAbs_JoinType: typeof GeomAbs_JoinType;
  CSLib_DerivativeStatus: typeof CSLib_DerivativeStatus;
  CSLib_NormalStatus: typeof CSLib_NormalStatus;
};
