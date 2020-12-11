declare const libName = "./modules/TKernel.wasm.d.ts";
export default libName;

type Standard_Boolean = boolean;
type Standard_Byte = number;
type Standard_Character = string;
type Standard_CString = string;
type Standard_Integer = number;
type Standard_Real = number;
type Standard_ShortReal = number;
type Standard_Size = number;

export declare class Standard {
  constructor();
  Allocate(aSize: Standard_ThreadId): Standard_Address;
  Free_1(thePtr: Standard_Address): void;
  Reallocate(aStorage: Standard_Address, aNewSize: Standard_Size): Standard_Address;
  AllocateAligned(theSize: Standard_Size, theAlign: Standard_Size): Standard_Address;
  FreeAligned_1(thePtrAligned: Standard_Address): void;
  Purge(): Standard_Integer;
}

export declare class Standard_Transient {
  Delete(): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  IsInstance_1(theType: any): Standard_Boolean;
  IsInstance_2(theTypeName: Standard_CString): Standard_Boolean;
  IsKind_1(theType: any): Standard_Boolean;
  IsKind_2(theTypeName: Standard_CString): Standard_Boolean;
  This(): Standard_Transient;
  GetRefCount(): Standard_Integer;
  IncrementRefCounter(): void;
  DecrementRefCounter(): Standard_Integer;
}

  export declare class Standard_Transient_1 extends Standard_Transient {
    constructor();
  }

  export declare class Standard_Transient_2 extends Standard_Transient {
    constructor(a: Standard_Transient);
  }

export declare class Standard_Type extends Standard_Transient {
  SystemName(): Standard_CString;
  Name(): Standard_CString;
  Size(): Standard_Size;
  Parent(): any;
  SubType_1(theOther: any): Standard_Boolean;
  SubType_2(theOther: Standard_CString): Standard_Boolean;
  Print(theStream: Standard_OStream): void;
  Register(theSystemName: string, theName: string, theSize: Standard_Size, theParent: any): Standard_Type;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Standard_Failure extends Standard_Transient {
  Print(theStream: Standard_OStream): void;
  GetMessageString(): Standard_CString;
  SetMessageString(aMessage: Standard_CString): void;
  Reraise_1(): void;
  Reraise_2(aMessage: Standard_CString): void;
  Reraise_3(aReason: Standard_SStream): void;
  Raise_1(aMessage: Standard_CString): void;
  Raise_2(aReason: Standard_SStream): void;
  NewInstance(aMessage: Standard_CString): any;
  Jump(): void;
  Caught(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Standard_Failure_1 extends Standard_Failure {
    constructor();
  }

  export declare class Standard_Failure_2 extends Standard_Failure {
    constructor(f: Standard_Failure);
  }

  export declare class Standard_Failure_3 extends Standard_Failure {
    constructor(aString: Standard_CString);
  }

export declare class Standard_DomainError extends Standard_Failure {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Standard_DomainError_1 extends Standard_DomainError {
    constructor();
  }

  export declare class Standard_DomainError_2 extends Standard_DomainError {
    constructor(theMessage: Standard_CString);
  }

export declare class Standard_RangeError extends Standard_DomainError {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Standard_RangeError_1 extends Standard_RangeError {
    constructor();
  }

  export declare class Standard_RangeError_2 extends Standard_RangeError {
    constructor(theMessage: Standard_CString);
  }

export declare class Standard_OutOfRange extends Standard_RangeError {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Standard_OutOfRange_1 extends Standard_OutOfRange {
    constructor();
  }

  export declare class Standard_OutOfRange_2 extends Standard_OutOfRange {
    constructor(theMessage: Standard_CString);
  }

export declare class Standard_ConstructionError extends Standard_DomainError {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Standard_ConstructionError_1 extends Standard_ConstructionError {
    constructor();
  }

  export declare class Standard_ConstructionError_2 extends Standard_ConstructionError {
    constructor(theMessage: Standard_CString);
  }

export declare class NCollection_BaseAllocator extends Standard_Transient {
}

export declare class NCollection_BaseMap {
  NbBuckets(): Standard_Integer;
  Extent(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Statistics(S: Standard_OStream): void;
  Allocator(): any;
}

export declare class Standard_TypeMismatch extends Standard_DomainError {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Standard_TypeMismatch_1 extends Standard_TypeMismatch {
    constructor();
  }

  export declare class Standard_TypeMismatch_2 extends Standard_TypeMismatch {
    constructor(theMessage: Standard_CString);
  }

export declare class Standard_NoSuchObject extends Standard_DomainError {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Standard_NoSuchObject_1 extends Standard_NoSuchObject {
    constructor();
  }

  export declare class Standard_NoSuchObject_2 extends Standard_NoSuchObject {
    constructor(theMessage: Standard_CString);
  }

export declare class Standard_ProgramError extends Standard_Failure {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Standard_ProgramError_1 extends Standard_ProgramError {
    constructor();
  }

  export declare class Standard_ProgramError_2 extends Standard_ProgramError {
    constructor(theMessage: Standard_CString);
  }

export declare class NCollection_BaseList {
  Extent(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Allocator(): any;
}

export declare class TCollection_AsciiString {
  AssignCat_1(other: Standard_Character): void;
  AssignCat_2(other: Standard_Integer): void;
  AssignCat_3(other: Standard_Real): void;
  AssignCat_4(other: Standard_CString): void;
  AssignCat_5(other: TCollection_AsciiString): void;
  Capitalize(): void;
  Cat_1(other: Standard_Character): TCollection_AsciiString;
  Cat_2(other: Standard_Integer): TCollection_AsciiString;
  Cat_3(other: Standard_Real): TCollection_AsciiString;
  Cat_4(other: Standard_CString): TCollection_AsciiString;
  Cat_5(other: TCollection_AsciiString): TCollection_AsciiString;
  Center(Width: Standard_Integer, Filler: Standard_Character): void;
  ChangeAll(aChar: Standard_Character, NewChar: Standard_Character, CaseSensitive: Standard_Boolean): void;
  Clear(): void;
  Copy_1(fromwhere: Standard_CString): void;
  Copy_2(fromwhere: TCollection_AsciiString): void;
  Swap(theOther: TCollection_AsciiString): void;
  FirstLocationInSet(Set: TCollection_AsciiString, FromIndex: Standard_Integer, ToIndex: Standard_Integer): Standard_Integer;
  FirstLocationNotInSet(Set: TCollection_AsciiString, FromIndex: Standard_Integer, ToIndex: Standard_Integer): Standard_Integer;
  Insert_1(where: Standard_Integer, what: Standard_Character): void;
  Insert_2(where: Standard_Integer, what: Standard_CString): void;
  Insert_3(where: Standard_Integer, what: TCollection_AsciiString): void;
  InsertAfter(Index: Standard_Integer, other: TCollection_AsciiString): void;
  InsertBefore(Index: Standard_Integer, other: TCollection_AsciiString): void;
  IsEmpty(): Standard_Boolean;
  IsEqual_1(other: Standard_CString): Standard_Boolean;
  IsEqual_2(other: TCollection_AsciiString): Standard_Boolean;
  IsDifferent_1(other: Standard_CString): Standard_Boolean;
  IsDifferent_2(other: TCollection_AsciiString): Standard_Boolean;
  IsLess_1(other: Standard_CString): Standard_Boolean;
  IsLess_2(other: TCollection_AsciiString): Standard_Boolean;
  IsGreater_1(other: Standard_CString): Standard_Boolean;
  IsGreater_2(other: TCollection_AsciiString): Standard_Boolean;
  StartsWith(theStartString: TCollection_AsciiString): Standard_Boolean;
  EndsWith(theEndString: TCollection_AsciiString): Standard_Boolean;
  IntegerValue(): Standard_Integer;
  IsIntegerValue(): Standard_Boolean;
  IsRealValue(): Standard_Boolean;
  IsAscii(): Standard_Boolean;
  LeftAdjust(): void;
  LeftJustify(Width: Standard_Integer, Filler: Standard_Character): void;
  Length(): Standard_Integer;
  Location_1(other: TCollection_AsciiString, FromIndex: Standard_Integer, ToIndex: Standard_Integer): Standard_Integer;
  Location_2(N: Standard_Integer, C: Standard_Character, FromIndex: Standard_Integer, ToIndex: Standard_Integer): Standard_Integer;
  LowerCase(): void;
  Prepend(other: TCollection_AsciiString): void;
  Print(astream: Standard_OStream): void;
  Read(astream: Standard_IStream): void;
  RealValue(): Standard_Real;
  RemoveAll_1(C: Standard_Character, CaseSensitive: Standard_Boolean): void;
  RemoveAll_2(what: Standard_Character): void;
  Remove(where: Standard_Integer, ahowmany: Standard_Integer): void;
  RightAdjust(): void;
  RightJustify(Width: Standard_Integer, Filler: Standard_Character): void;
  Search_1(what: Standard_CString): Standard_Integer;
  Search_2(what: TCollection_AsciiString): Standard_Integer;
  SearchFromEnd_1(what: Standard_CString): Standard_Integer;
  SearchFromEnd_2(what: TCollection_AsciiString): Standard_Integer;
  SetValue_1(where: Standard_Integer, what: Standard_Character): void;
  SetValue_2(where: Standard_Integer, what: Standard_CString): void;
  SetValue_3(where: Standard_Integer, what: TCollection_AsciiString): void;
  Split_1(where: Standard_Integer): TCollection_AsciiString;
  SubString_1(FromIndex: Standard_Integer, ToIndex: Standard_Integer): TCollection_AsciiString;
  ToCString(): Standard_CString;
  Token_1(separators: Standard_CString, whichone: Standard_Integer): TCollection_AsciiString;
  Trunc(ahowmany: Standard_Integer): void;
  UpperCase(): void;
  UsefullLength(): Standard_Integer;
  Value(where: Standard_Integer): Standard_Character;
  HashCode(theAsciiString: TCollection_AsciiString, theUpperBound: Standard_Integer): Standard_Integer;
  IsEqual_3(string1: TCollection_AsciiString, string2: TCollection_AsciiString): Standard_Boolean;
  IsEqual_4(string1: TCollection_AsciiString, string2: Standard_CString): Standard_Boolean;
  IsSameString(theString1: TCollection_AsciiString, theString2: TCollection_AsciiString, theIsCaseSensitive: Standard_Boolean): Standard_Boolean;
}

  export declare class TCollection_AsciiString_1 extends TCollection_AsciiString {
    constructor();
  }

  export declare class TCollection_AsciiString_2 extends TCollection_AsciiString {
    constructor(message: Standard_CString);
  }

  export declare class TCollection_AsciiString_3 extends TCollection_AsciiString {
    constructor(message: Standard_CString, aLen: Standard_Integer);
  }

  export declare class TCollection_AsciiString_4 extends TCollection_AsciiString {
    constructor(aChar: Standard_Character);
  }

  export declare class TCollection_AsciiString_5 extends TCollection_AsciiString {
    constructor(length: Standard_Integer, filler: Standard_Character);
  }

  export declare class TCollection_AsciiString_6 extends TCollection_AsciiString {
    constructor(value: Standard_Integer);
  }

  export declare class TCollection_AsciiString_7 extends TCollection_AsciiString {
    constructor(value: Standard_Real);
  }

  export declare class TCollection_AsciiString_8 extends TCollection_AsciiString {
    constructor(astring: TCollection_AsciiString);
  }

  export declare class TCollection_AsciiString_9 extends TCollection_AsciiString {
    constructor(theOther: TCollection_AsciiString);
  }

  export declare class TCollection_AsciiString_10 extends TCollection_AsciiString {
    constructor(astring: TCollection_AsciiString, message: Standard_Character);
  }

  export declare class TCollection_AsciiString_11 extends TCollection_AsciiString {
    constructor(astring: TCollection_AsciiString, message: Standard_CString);
  }

  export declare class TCollection_AsciiString_12 extends TCollection_AsciiString {
    constructor(astring: TCollection_AsciiString, message: TCollection_AsciiString);
  }

  export declare class TCollection_AsciiString_13 extends TCollection_AsciiString {
    constructor(astring: TCollection_ExtendedString, replaceNonAscii: Standard_Character);
  }

  export declare class TCollection_AsciiString_14 extends TCollection_AsciiString {
    constructor(theStringUtf: Standard_WideChar);
  }

export declare class NCollection_BaseVector {
  Clear(): void;
  SetIncrement(aIncrement: Standard_Integer): void;
  Allocator(): any;
}

export declare class Standard_DimensionError extends Standard_DomainError {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Standard_DimensionError_1 extends Standard_DimensionError {
    constructor();
  }

  export declare class Standard_DimensionError_2 extends Standard_DimensionError {
    constructor(theMessage: Standard_CString);
  }

export declare class Standard_DimensionMismatch extends Standard_DimensionError {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Standard_DimensionMismatch_1 extends Standard_DimensionMismatch {
    constructor();
  }

  export declare class Standard_DimensionMismatch_2 extends Standard_DimensionMismatch {
    constructor(theMessage: Standard_CString);
  }

export declare class Standard_OutOfMemory extends Standard_ProgramError {
  constructor(theMessage: Standard_CString)
  GetMessageString(): Standard_CString;
  SetMessageString(aMessage: Standard_CString): void;
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class NCollection_Buffer extends Standard_Transient {
  constructor(theAlloc: any, theSize: Standard_Size, theData: Standard_Byte)
  Data(): Standard_Byte;
  ChangeData(): Standard_Byte;
  IsEmpty(): boolean;
  Size(): Standard_Size;
  Allocator(): any;
  SetAllocator(theAlloc: any): void;
  Allocate(theSize: Standard_Size): boolean;
  Free(): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Quantity_Color {
  Name_1(): Quantity_NameOfColor;
  SetValues_1(theName: Quantity_NameOfColor): void;
  Rgb(): NCollection_Vec3<float>;
  Values(theC1: Standard_Real, theC2: Standard_Real, theC3: Standard_Real, theType: Quantity_TypeOfColor): void;
  SetValues_2(theC1: Standard_Real, theC2: Standard_Real, theC3: Standard_Real, theType: Quantity_TypeOfColor): void;
  Red(): Standard_Real;
  Green(): Standard_Real;
  Blue(): Standard_Real;
  Hue(): Standard_Real;
  Light(): Standard_Real;
  ChangeIntensity(theDelta: Standard_Real): void;
  Saturation(): Standard_Real;
  ChangeContrast(theDelta: Standard_Real): void;
  IsDifferent(theOther: Quantity_Color): Standard_Boolean;
  IsEqual(theOther: Quantity_Color): Standard_Boolean;
  Distance(theColor: Quantity_Color): Standard_Real;
  SquareDistance(theColor: Quantity_Color): Standard_Real;
  Delta(theColor: Quantity_Color, DC: Standard_Real, DI: Standard_Real): void;
  DeltaE2000(theOther: Quantity_Color): Standard_Real;
  Name_2(theR: Standard_Real, theG: Standard_Real, theB: Standard_Real): Quantity_NameOfColor;
  StringName(theColor: Quantity_NameOfColor): Standard_CString;
  ColorFromName_1(theName: Standard_CString, theColor: Quantity_NameOfColor): Standard_Boolean;
  ColorFromName_2(theColorNameString: Standard_CString, theColor: Quantity_Color): Standard_Boolean;
  ColorFromHex(theHexColorString: Standard_CString, theColor: Quantity_Color): boolean;
  ColorToHex(theColor: Quantity_Color, theToPrefixHash: boolean): TCollection_AsciiString;
  Convert_sRGB_To_HLS(theRgb: NCollection_Vec3<float>): NCollection_Vec3<float>;
  Convert_HLS_To_sRGB(theHls: NCollection_Vec3<float>): NCollection_Vec3<float>;
  Convert_LinearRGB_To_HLS(theRgb: NCollection_Vec3<float>): NCollection_Vec3<float>;
  Convert_HLS_To_LinearRGB(theHls: NCollection_Vec3<float>): NCollection_Vec3<float>;
  Convert_LinearRGB_To_Lab(theRgb: NCollection_Vec3<float>): NCollection_Vec3<float>;
  Convert_Lab_To_Lch(theLab: NCollection_Vec3<float>): NCollection_Vec3<float>;
  Convert_Lab_To_LinearRGB(theLab: NCollection_Vec3<float>): NCollection_Vec3<float>;
  Convert_Lch_To_Lab(theLch: NCollection_Vec3<float>): NCollection_Vec3<float>;
  Color2argb(theColor: Quantity_Color, theARGB: Standard_Integer): void;
  Argb2color(theARGB: Standard_Integer, theColor: Quantity_Color): void;
  Convert_LinearRGB_To_sRGB_1(theLinearValue: Standard_Real): Standard_Real;
  Convert_LinearRGB_To_sRGB_2(theLinearValue: number): number;
  Convert_sRGB_To_LinearRGB_1(thesRGBValue: Standard_Real): Standard_Real;
  Convert_sRGB_To_LinearRGB_2(thesRGBValue: number): number;
  Convert_LinearRGB_To_sRGB_approx22_1(theLinearValue: number): number;
  Convert_sRGB_To_LinearRGB_approx22_1(thesRGBValue: number): number;
  Convert_LinearRGB_To_sRGB_approx22_2(theRGB: NCollection_Vec3<float>): NCollection_Vec3<float>;
  Convert_sRGB_To_LinearRGB_approx22_2(theRGB: NCollection_Vec3<float>): NCollection_Vec3<float>;
  HlsRgb(theH: Standard_Real, theL: Standard_Real, theS: Standard_Real, theR: Standard_Real, theG: Standard_Real, theB: Standard_Real): void;
  RgbHls(theR: Standard_Real, theG: Standard_Real, theB: Standard_Real, theH: Standard_Real, theL: Standard_Real, theS: Standard_Real): void;
  Epsilon(): Standard_Real;
  SetEpsilon(theEpsilon: Standard_Real): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  InitFromJson(theSStream: Standard_SStream, theStreamPos: Standard_Integer): Standard_Boolean;
}

  export declare class Quantity_Color_1 extends Quantity_Color {
    constructor();
  }

  export declare class Quantity_Color_2 extends Quantity_Color {
    constructor(theName: Quantity_NameOfColor);
  }

  export declare class Quantity_Color_3 extends Quantity_Color {
    constructor(theC1: Standard_Real, theC2: Standard_Real, theC3: Standard_Real, theType: Quantity_TypeOfColor);
  }

  export declare class Quantity_Color_4 extends Quantity_Color {
    constructor(theRgb: NCollection_Vec3<float>);
  }

export declare class Quantity_ColorRGBA {
  SetValues(theRed: number, theGreen: number, theBlue: number, theAlpha: number): void;
  GetRGB(): Quantity_Color;
  ChangeRGB(): Quantity_Color;
  SetRGB(theRgb: Quantity_Color): void;
  Alpha(): Standard_ShortReal;
  SetAlpha(theAlpha: Standard_ShortReal): void;
  IsDifferent(theOther: Quantity_ColorRGBA): boolean;
  IsEqual(theOther: Quantity_ColorRGBA): boolean;
  ColorFromName(theColorNameString: Standard_CString, theColor: Quantity_ColorRGBA): Standard_Boolean;
  ColorFromHex(theHexColorString: string, theColor: Quantity_ColorRGBA, theAlphaComponentIsOff: boolean): boolean;
  ColorToHex(theColor: Quantity_ColorRGBA, theToPrefixHash: boolean): TCollection_AsciiString;
  Convert_LinearRGB_To_sRGB(theRGB: NCollection_Vec4<float>): NCollection_Vec4<float>;
  Convert_sRGB_To_LinearRGB(theRGB: NCollection_Vec4<float>): NCollection_Vec4<float>;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  InitFromJson(theSStream: Standard_SStream, theStreamPos: Standard_Integer): Standard_Boolean;
}

  export declare class Quantity_ColorRGBA_1 extends Quantity_ColorRGBA {
    constructor();
  }

  export declare class Quantity_ColorRGBA_2 extends Quantity_ColorRGBA {
    constructor(theRgb: Quantity_Color);
  }

  export declare class Quantity_ColorRGBA_3 extends Quantity_ColorRGBA {
    constructor(theRgb: Quantity_Color, theAlpha: number);
  }

  export declare class Quantity_ColorRGBA_4 extends Quantity_ColorRGBA {
    constructor(theRgba: NCollection_Vec4<float>);
  }

  export declare class Quantity_ColorRGBA_5 extends Quantity_ColorRGBA {
    constructor(theRed: number, theGreen: number, theBlue: number, theAlpha: number);
  }

export declare class NCollection_BaseSequence {
  IsEmpty(): Standard_Boolean;
  Length(): Standard_Integer;
  Allocator(): any;
}

export declare class TCollection_HAsciiString extends Standard_Transient {
  AssignCat_1(other: Standard_CString): void;
  AssignCat_2(other: any): void;
  Capitalize(): void;
  Cat_1(other: Standard_CString): any;
  Cat_2(other: any): any;
  Center(Width: Standard_Integer, Filler: Standard_Character): void;
  ChangeAll(aChar: Standard_Character, NewChar: Standard_Character, CaseSensitive: Standard_Boolean): void;
  Clear(): void;
  FirstLocationInSet(Set: any, FromIndex: Standard_Integer, ToIndex: Standard_Integer): Standard_Integer;
  FirstLocationNotInSet(Set: any, FromIndex: Standard_Integer, ToIndex: Standard_Integer): Standard_Integer;
  Insert_1(where: Standard_Integer, what: Standard_Character): void;
  Insert_2(where: Standard_Integer, what: Standard_CString): void;
  Insert_3(where: Standard_Integer, what: any): void;
  InsertAfter(Index: Standard_Integer, other: any): void;
  InsertBefore(Index: Standard_Integer, other: any): void;
  IsEmpty(): Standard_Boolean;
  IsLess(other: any): Standard_Boolean;
  IsGreater(other: any): Standard_Boolean;
  IntegerValue(): Standard_Integer;
  IsIntegerValue(): Standard_Boolean;
  IsRealValue(): Standard_Boolean;
  IsAscii(): Standard_Boolean;
  IsDifferent(S: any): Standard_Boolean;
  IsSameString_1(S: any): Standard_Boolean;
  IsSameString_2(S: any, CaseSensitive: Standard_Boolean): Standard_Boolean;
  LeftAdjust(): void;
  LeftJustify(Width: Standard_Integer, Filler: Standard_Character): void;
  Length(): Standard_Integer;
  Location_1(other: any, FromIndex: Standard_Integer, ToIndex: Standard_Integer): Standard_Integer;
  Location_2(N: Standard_Integer, C: Standard_Character, FromIndex: Standard_Integer, ToIndex: Standard_Integer): Standard_Integer;
  LowerCase(): void;
  Prepend(other: any): void;
  Print(astream: Standard_OStream): void;
  RealValue(): Standard_Real;
  RemoveAll_1(C: Standard_Character, CaseSensitive: Standard_Boolean): void;
  RemoveAll_2(what: Standard_Character): void;
  Remove(where: Standard_Integer, ahowmany: Standard_Integer): void;
  RightAdjust(): void;
  RightJustify(Width: Standard_Integer, Filler: Standard_Character): void;
  Search_1(what: Standard_CString): Standard_Integer;
  Search_2(what: any): Standard_Integer;
  SearchFromEnd_1(what: Standard_CString): Standard_Integer;
  SearchFromEnd_2(what: any): Standard_Integer;
  SetValue_1(where: Standard_Integer, what: Standard_Character): void;
  SetValue_2(where: Standard_Integer, what: Standard_CString): void;
  SetValue_3(where: Standard_Integer, what: any): void;
  Split(where: Standard_Integer): any;
  SubString(FromIndex: Standard_Integer, ToIndex: Standard_Integer): any;
  ToCString(): Standard_CString;
  Token(separators: Standard_CString, whichone: Standard_Integer): any;
  Trunc(ahowmany: Standard_Integer): void;
  UpperCase(): void;
  UsefullLength(): Standard_Integer;
  Value(where: Standard_Integer): Standard_Character;
  String(): TCollection_AsciiString;
  IsSameState(other: any): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class TCollection_HAsciiString_1 extends TCollection_HAsciiString {
    constructor();
  }

  export declare class TCollection_HAsciiString_2 extends TCollection_HAsciiString {
    constructor(message: Standard_CString);
  }

  export declare class TCollection_HAsciiString_3 extends TCollection_HAsciiString {
    constructor(aChar: Standard_Character);
  }

  export declare class TCollection_HAsciiString_4 extends TCollection_HAsciiString {
    constructor(length: Standard_Integer, filler: Standard_Character);
  }

  export declare class TCollection_HAsciiString_5 extends TCollection_HAsciiString {
    constructor(value: Standard_Integer);
  }

  export declare class TCollection_HAsciiString_6 extends TCollection_HAsciiString {
    constructor(value: Standard_Real);
  }

  export declare class TCollection_HAsciiString_7 extends TCollection_HAsciiString {
    constructor(aString: TCollection_AsciiString);
  }

  export declare class TCollection_HAsciiString_8 extends TCollection_HAsciiString {
    constructor(aString: any);
  }

  export declare class TCollection_HAsciiString_9 extends TCollection_HAsciiString {
    constructor(aString: any, replaceNonAscii: Standard_Character);
  }

export declare class Standard_NotImplemented extends Standard_ProgramError {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Standard_NotImplemented_1 extends Standard_NotImplemented {
    constructor();
  }

  export declare class Standard_NotImplemented_2 extends Standard_NotImplemented {
    constructor(theMessage: Standard_CString);
  }

export declare class TCollection_ExtendedString {
  AssignCat_1(other: TCollection_ExtendedString): void;
  AssignCat_2(theChar: Standard_Utf16Char): void;
  Cat(other: TCollection_ExtendedString): TCollection_ExtendedString;
  ChangeAll(aChar: Standard_ExtCharacter, NewChar: Standard_ExtCharacter): void;
  Clear(): void;
  Copy(fromwhere: TCollection_ExtendedString): void;
  Swap(theOther: TCollection_ExtendedString): void;
  Insert_1(where: Standard_Integer, what: Standard_ExtCharacter): void;
  Insert_2(where: Standard_Integer, what: TCollection_ExtendedString): void;
  IsEmpty(): Standard_Boolean;
  IsEqual_1(other: Standard_ExtString): Standard_Boolean;
  IsEqual_2(other: TCollection_ExtendedString): Standard_Boolean;
  IsDifferent_1(other: Standard_ExtString): Standard_Boolean;
  IsDifferent_2(other: TCollection_ExtendedString): Standard_Boolean;
  IsLess_1(other: Standard_ExtString): Standard_Boolean;
  IsLess_2(other: TCollection_ExtendedString): Standard_Boolean;
  IsGreater_1(other: Standard_ExtString): Standard_Boolean;
  IsGreater_2(other: TCollection_ExtendedString): Standard_Boolean;
  StartsWith(theStartString: TCollection_ExtendedString): Standard_Boolean;
  EndsWith(theEndString: TCollection_ExtendedString): Standard_Boolean;
  IsAscii(): Standard_Boolean;
  Length(): Standard_Integer;
  Print(astream: Standard_OStream): void;
  RemoveAll(what: Standard_ExtCharacter): void;
  Remove(where: Standard_Integer, ahowmany: Standard_Integer): void;
  Search(what: TCollection_ExtendedString): Standard_Integer;
  SearchFromEnd(what: TCollection_ExtendedString): Standard_Integer;
  SetValue_1(where: Standard_Integer, what: Standard_ExtCharacter): void;
  SetValue_2(where: Standard_Integer, what: TCollection_ExtendedString): void;
  Split(where: Standard_Integer): TCollection_ExtendedString;
  Token(separators: Standard_ExtString, whichone: Standard_Integer): TCollection_ExtendedString;
  ToExtString(): Standard_ExtString;
  Trunc(ahowmany: Standard_Integer): void;
  Value(where: Standard_Integer): Standard_ExtCharacter;
  HashCode(theString: TCollection_ExtendedString, theUpperBound: Standard_Integer): Standard_Integer;
  IsEqual_3(theString1: TCollection_ExtendedString, theString2: TCollection_ExtendedString): Standard_Boolean;
  ToUTF8CString(theCString: Standard_PCharacter): Standard_Integer;
  LengthOfCString(): Standard_Integer;
}

  export declare class TCollection_ExtendedString_1 extends TCollection_ExtendedString {
    constructor();
  }

  export declare class TCollection_ExtendedString_2 extends TCollection_ExtendedString {
    constructor(astring: Standard_CString, isMultiByte: Standard_Boolean);
  }

  export declare class TCollection_ExtendedString_3 extends TCollection_ExtendedString {
    constructor(astring: Standard_ExtString);
  }

  export declare class TCollection_ExtendedString_4 extends TCollection_ExtendedString {
    constructor(theStringUtf: Standard_WideChar);
  }

  export declare class TCollection_ExtendedString_5 extends TCollection_ExtendedString {
    constructor(aChar: Standard_Character);
  }

  export declare class TCollection_ExtendedString_6 extends TCollection_ExtendedString {
    constructor(aChar: Standard_ExtCharacter);
  }

  export declare class TCollection_ExtendedString_7 extends TCollection_ExtendedString {
    constructor(length: Standard_Integer, filler: Standard_ExtCharacter);
  }

  export declare class TCollection_ExtendedString_8 extends TCollection_ExtendedString {
    constructor(value: Standard_Integer);
  }

  export declare class TCollection_ExtendedString_9 extends TCollection_ExtendedString {
    constructor(value: Standard_Real);
  }

  export declare class TCollection_ExtendedString_10 extends TCollection_ExtendedString {
    constructor(astring: TCollection_ExtendedString);
  }

  export declare class TCollection_ExtendedString_11 extends TCollection_ExtendedString {
    constructor(theOther: TCollection_ExtendedString);
  }

  export declare class TCollection_ExtendedString_12 extends TCollection_ExtendedString {
    constructor(astring: TCollection_AsciiString, isMultiByte: Standard_Boolean);
  }

export declare class OSD_Chronometer {
  constructor(theThisThreadOnly: Standard_Boolean)
  IsStarted(): Standard_Boolean;
  Reset(): void;
  Restart(): void;
  Stop(): void;
  Start(): void;
  Show_1(): void;
  Show_2(theOStream: Standard_OStream): void;
  UserTimeCPU(): Standard_Real;
  SystemTimeCPU(): Standard_Real;
  Show_3(theUserSeconds: Standard_Real): void;
  Show_4(theUserSec: Standard_Real, theSystemSec: Standard_Real): void;
  GetProcessCPU(UserSeconds: Standard_Real, SystemSeconds: Standard_Real): void;
  GetThreadCPU(UserSeconds: Standard_Real, SystemSeconds: Standard_Real): void;
}

export declare class OSD_Timer extends OSD_Chronometer {
  constructor(theThisThreadOnly: Standard_Boolean)
  Reset_1(theTimeElapsedSec: Standard_Real): void;
  Reset_2(): void;
  Restart(): void;
  Show_1(): void;
  Show_2(os: Standard_OStream): void;
  Show_3(theSeconds: Standard_Real, theMinutes: Standard_Integer, theHours: Standard_Integer, theCPUtime: Standard_Real): void;
  Stop(): void;
  Start(): void;
  ElapsedTime(): Standard_Real;
}

export declare class OSD_Thread {
  Assign(other: OSD_Thread): void;
  SetPriority(thePriority: Standard_Integer): void;
  SetFunction(func: OSD_ThreadFunction): void;
  Run(data: Standard_Address, WNTStackSize: Standard_Integer): Standard_Boolean;
  Detach(): void;
  Wait_1(): Standard_Boolean;
  Wait_2(theResult: Standard_Address): Standard_Boolean;
  Wait_3(time: Standard_Integer, theResult: Standard_Address): Standard_Boolean;
  GetId(): Standard_ThreadId;
  Current(): Standard_ThreadId;
}

  export declare class OSD_Thread_1 extends OSD_Thread {
    constructor();
  }

  export declare class OSD_Thread_2 extends OSD_Thread {
    constructor(func: OSD_ThreadFunction);
  }

  export declare class OSD_Thread_3 extends OSD_Thread {
    constructor(other: OSD_Thread);
  }

export declare class Standard_Mutex {
  constructor()
  Lock(): void;
  TryLock(): Standard_Boolean;
  Unlock(): void;
}

export declare class Standard_Condition {
  constructor(theIsSet: boolean)
  Set(): void;
  Reset(): void;
  Wait_1(): void;
  Wait_2(theTimeMilliseconds: number): boolean;
  Check(): boolean;
  CheckReset(): boolean;
}

export declare class Message_Printer extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  GetTraceLevel(): Message_Gravity;
  SetTraceLevel(theTraceLevel: Message_Gravity): void;
  Send_1(theString: TCollection_ExtendedString, theGravity: Message_Gravity): void;
  Send_2(theString: Standard_CString, theGravity: Message_Gravity): void;
  Send_3(theString: TCollection_AsciiString, theGravity: Message_Gravity): void;
  SendStringStream(theStream: Standard_SStream, theGravity: Message_Gravity): void;
  SendObject(theObject: any, theGravity: Message_Gravity): void;
}

export declare class TCollection_HExtendedString extends Standard_Transient {
  AssignCat(other: any): void;
  Cat(other: any): any;
  ChangeAll(aChar: Standard_ExtCharacter, NewChar: Standard_ExtCharacter): void;
  Clear(): void;
  IsEmpty(): Standard_Boolean;
  Insert_1(where: Standard_Integer, what: Standard_ExtCharacter): void;
  Insert_2(where: Standard_Integer, what: any): void;
  IsLess(other: any): Standard_Boolean;
  IsGreater(other: any): Standard_Boolean;
  IsAscii(): Standard_Boolean;
  Length(): Standard_Integer;
  Remove(where: Standard_Integer, ahowmany: Standard_Integer): void;
  RemoveAll(what: Standard_ExtCharacter): void;
  SetValue_1(where: Standard_Integer, what: Standard_ExtCharacter): void;
  SetValue_2(where: Standard_Integer, what: any): void;
  Split(where: Standard_Integer): any;
  Search(what: any): Standard_Integer;
  SearchFromEnd(what: any): Standard_Integer;
  ToExtString(): Standard_ExtString;
  Token(separators: Standard_ExtString, whichone: Standard_Integer): any;
  Trunc(ahowmany: Standard_Integer): void;
  Value(where: Standard_Integer): Standard_ExtCharacter;
  String(): TCollection_ExtendedString;
  Print(astream: Standard_OStream): void;
  IsSameState(other: any): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class TCollection_HExtendedString_1 extends TCollection_HExtendedString {
    constructor();
  }

  export declare class TCollection_HExtendedString_2 extends TCollection_HExtendedString {
    constructor(message: Standard_CString);
  }

  export declare class TCollection_HExtendedString_3 extends TCollection_HExtendedString {
    constructor(message: Standard_ExtString);
  }

  export declare class TCollection_HExtendedString_4 extends TCollection_HExtendedString {
    constructor(aChar: Standard_ExtCharacter);
  }

  export declare class TCollection_HExtendedString_5 extends TCollection_HExtendedString {
    constructor(length: Standard_Integer, filler: Standard_ExtCharacter);
  }

  export declare class TCollection_HExtendedString_6 extends TCollection_HExtendedString {
    constructor(aString: TCollection_ExtendedString);
  }

  export declare class TCollection_HExtendedString_7 extends TCollection_HExtendedString {
    constructor(aString: any);
  }

  export declare class TCollection_HExtendedString_8 extends TCollection_HExtendedString {
    constructor(aString: any);
  }

export declare class Message_Messenger extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  AddPrinter(thePrinter: any): Standard_Boolean;
  RemovePrinter(thePrinter: any): Standard_Boolean;
  RemovePrinters(theType: any): Standard_Integer;
  Printers(): Message_SequenceOfPrinters;
  ChangePrinters(): Message_SequenceOfPrinters;
  Send_1(theString: Standard_CString, theGravity: Message_Gravity): void;
  Send_2(theStream: Standard_SStream, theGravity: Message_Gravity): void;
  Send_3(theString: TCollection_AsciiString, theGravity: Message_Gravity): void;
  Send_4(theString: TCollection_ExtendedString, theGravity: Message_Gravity): void;
  Send_5(theGravity: Message_Gravity): any;
  Send_6(theObject: any, theGravity: Message_Gravity): void;
  SendFail_1(): any;
  SendAlarm_1(): any;
  SendWarning_1(): any;
  SendInfo_1(): any;
  SendTrace_1(): any;
  SendFail_2(theMessage: TCollection_AsciiString): void;
  SendAlarm_2(theMessage: TCollection_AsciiString): void;
  SendWarning_2(theMessage: TCollection_AsciiString): void;
  SendInfo_2(theMessage: TCollection_AsciiString): void;
  SendTrace_2(theMessage: TCollection_AsciiString): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

  export declare class Message_Messenger_1 extends Message_Messenger {
    constructor();
  }

  export declare class Message_Messenger_2 extends Message_Messenger {
    constructor(thePrinter: any);
  }

export declare class StdFail_NotDone extends Standard_Failure {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class StdFail_NotDone_1 extends StdFail_NotDone {
    constructor();
  }

  export declare class StdFail_NotDone_2 extends StdFail_NotDone {
    constructor(theMessage: Standard_CString);
  }

export declare class Message_ProgressRange {
  UserBreak(): Standard_Boolean;
  More(): Standard_Boolean;
  IsActive(): Standard_Boolean;
  Close(): void;
}

  export declare class Message_ProgressRange_1 extends Message_ProgressRange {
    constructor();
  }

  export declare class Message_ProgressRange_2 extends Message_ProgressRange {
    constructor(theOther: Message_ProgressRange);
  }

export declare class Message_ProgressIndicator extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Start_1(): Message_ProgressRange;
  Start_2(theProgress: any): Message_ProgressRange;
  GetPosition(): Standard_Real;
}

export declare class Message_ProgressScope {
  SetName_1(theName: TCollection_AsciiString): void;
  UserBreak(): Standard_Boolean;
  More(): Standard_Boolean;
  Next(theStep: Standard_Real): Message_ProgressRange;
  Show(): void;
  IsActive(): Standard_Boolean;
  Name(): Standard_CString;
  Parent(): Message_ProgressScope;
  MaxValue(): Standard_Real;
  Value(): Standard_Real;
  IsInfinite(): Standard_Boolean;
  GetPortion(): Standard_Real;
  Close(): void;
}

  export declare class Message_ProgressScope_1 extends Message_ProgressScope {
    constructor();
  }

  export declare class Message_ProgressScope_2 extends Message_ProgressScope {
    constructor(theRange: Message_ProgressRange, theName: TCollection_AsciiString, theMax: Standard_Real, isInfinite: Standard_Boolean);
  }

  export declare class Message_ProgressScope_4 extends Message_ProgressScope {
    constructor(theRange: Message_ProgressRange, theName: any, theMax: Standard_Real, isInfinite: Standard_Boolean);
  }

export declare class Message_Alert extends Standard_Transient {
  constructor();
  GetMessageKey(): Standard_CString;
  SupportsMerge(): Standard_Boolean;
  Merge(theTarget: any): Standard_Boolean;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class OSD_MemInfo {
  constructor(theImmediateUpdate: Standard_Boolean)
  IsActive(theCounter: any): Standard_Boolean;
  SetActive_1(theActive: Standard_Boolean): void;
  SetActive_2(theCounter: any, theActive: Standard_Boolean): void;
  Clear(): void;
  Update(): void;
  ToString(): TCollection_AsciiString;
  Value(theCounter: any): Standard_Size;
  ValueMiB(theCounter: any): Standard_Size;
  ValuePreciseMiB(theCounter: any): Standard_Real;
  PrintInfo(): TCollection_AsciiString;
}

export declare class Message {
  constructor();
  DefaultMessenger(): any;
  Send_1(theGravity: Message_Gravity): any;
  Send_2(theMessage: TCollection_AsciiString, theGravity: Message_Gravity): void;
  SendFail_1(): any;
  SendAlarm_1(): any;
  SendWarning_1(): any;
  SendInfo_1(): any;
  SendTrace_1(): any;
  SendFail_2(theMessage: TCollection_AsciiString): void;
  SendAlarm_2(theMessage: TCollection_AsciiString): void;
  SendWarning_2(theMessage: TCollection_AsciiString): void;
  SendInfo_2(theMessage: TCollection_AsciiString): void;
  SendTrace_2(theMessage: TCollection_AsciiString): void;
  FillTime(Hour: Standard_Integer, Minute: Standard_Integer, Second: Standard_Real): TCollection_AsciiString;
  DefaultReport(theToCreate: Standard_Boolean): any;
  MetricFromString_1(theString: Standard_CString, theType: Message_MetricType): Standard_Boolean;
  MetricToString(theType: Message_MetricType): Standard_CString;
  MetricFromString_2(theString: Standard_CString): Message_MetricType;
  ToOSDMetric(theMetric: Message_MetricType, theMemInfo: any): Standard_Boolean;
  ToMessageMetric(theMemInfo: any, theMetric: Message_MetricType): Standard_Boolean;
}

export declare class Message_AlertExtended extends Message_Alert {
  constructor()
  AddAlert(theReport: any, theAttribute: any, theGravity: Message_Gravity): any;
  GetMessageKey(): Standard_CString;
  Attribute(): any;
  SetAttribute(theAttribute: any): void;
  CompositeAlerts(theToCreate: Standard_Boolean): any;
  SupportsMerge(): Standard_Boolean;
  Merge(theTarget: any): Standard_Boolean;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Message_Level {
  constructor(theName: TCollection_AsciiString)
  RootAlert(): any;
  SetRootAlert(theAlert: any, isRequiredToStart: Standard_Boolean): void;
  AddAlert(theGravity: Message_Gravity, theAlert: any): Standard_Boolean;
}

export declare class Message_Report extends Standard_Transient {
  constructor()
  AddAlert(theGravity: Message_Gravity, theAlert: any): void;
  GetAlerts(theGravity: Message_Gravity): Message_ListOfAlert;
  HasAlert_1(theType: any): Standard_Boolean;
  HasAlert_2(theType: any, theGravity: Message_Gravity): Standard_Boolean;
  IsActiveInMessenger(theMessenger: any): Standard_Boolean;
  ActivateInMessenger(toActivate: Standard_Boolean, theMessenger: any): void;
  UpdateActiveInMessenger(theMessenger: any): void;
  AddLevel(theLevel: Message_Level, theName: TCollection_AsciiString): void;
  RemoveLevel(theLevel: Message_Level): void;
  Clear_1(): void;
  Clear_2(theGravity: Message_Gravity): void;
  Clear_3(theType: any): void;
  ActiveMetrics(): NCollection_IndexedMap<Message_MetricType>;
  SetActiveMetric(theMetricType: Message_MetricType, theActivate: Standard_Boolean): void;
  ClearMetrics(): void;
  Limit(): Standard_Integer;
  SetLimit(theLimit: Standard_Integer): void;
  Dump_1(theOS: Standard_OStream): void;
  Dump_2(theOS: Standard_OStream, theGravity: Message_Gravity): void;
  SendMessages_1(theMessenger: any): void;
  SendMessages_2(theMessenger: any, theGravity: Message_Gravity): void;
  Merge_1(theOther: any): void;
  Merge_2(theOther: any, theGravity: Message_Gravity): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Standard_NullObject extends Standard_DomainError {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Standard_NullObject_1 extends Standard_NullObject {
    constructor();
  }

  export declare class Standard_NullObject_2 extends Standard_NullObject {
    constructor(theMessage: Standard_CString);
  }

export declare class StdFail_UndefinedDerivative extends Standard_DomainError {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class StdFail_UndefinedDerivative_1 extends StdFail_UndefinedDerivative {
    constructor();
  }

  export declare class StdFail_UndefinedDerivative_2 extends StdFail_UndefinedDerivative {
    constructor(theMessage: Standard_CString);
  }

export declare class NCollection_IncAllocator extends NCollection_BaseAllocator {
  constructor(theBlockSize: size_t)
  SetThreadSafe(theIsThreadSafe: boolean): void;
  Allocate(size: size_t): void;
  Free(anAddress: void): void;
  GetMemSize(): size_t;
  Reallocate(anAddress: void, oldSize: size_t, newSize: size_t): void;
  Reset(doReleaseMem: Standard_Boolean): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TCollection_BasicMap {
  NbBuckets(): Standard_Integer;
  Extent(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Statistics(S: Standard_OStream): void;
}

export declare class TCollection_BasicMapIterator {
  Reset(): void;
  More(): Standard_Boolean;
  Next(): void;
}

export declare class TColStd_PackedMapOfInteger {
  Assign(a0: TColStd_PackedMapOfInteger): TColStd_PackedMapOfInteger;
  ReSize(NbBuckets: Standard_Integer): void;
  Clear(): void;
  Add(aKey: Standard_Integer): Standard_Boolean;
  Contains(aKey: Standard_Integer): Standard_Boolean;
  Remove(aKey: Standard_Integer): Standard_Boolean;
  NbBuckets(): Standard_Integer;
  Extent(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Statistics(outStream: Standard_OStream): void;
  GetMinimalMapped(): Standard_Integer;
  GetMaximalMapped(): Standard_Integer;
  Union(a0: TColStd_PackedMapOfInteger, a1: TColStd_PackedMapOfInteger): void;
  Unite(a0: TColStd_PackedMapOfInteger): Standard_Boolean;
  Intersection(a0: TColStd_PackedMapOfInteger, a1: TColStd_PackedMapOfInteger): void;
  Intersect(a0: TColStd_PackedMapOfInteger): Standard_Boolean;
  Subtraction(a0: TColStd_PackedMapOfInteger, a1: TColStd_PackedMapOfInteger): void;
  Subtract(a0: TColStd_PackedMapOfInteger): Standard_Boolean;
  Difference(a0: TColStd_PackedMapOfInteger, a1: TColStd_PackedMapOfInteger): void;
  Differ(a0: TColStd_PackedMapOfInteger): Standard_Boolean;
  IsEqual(a0: TColStd_PackedMapOfInteger): Standard_Boolean;
  IsSubset(a0: TColStd_PackedMapOfInteger): Standard_Boolean;
  HasIntersection(a0: TColStd_PackedMapOfInteger): Standard_Boolean;
}

  export declare class TColStd_PackedMapOfInteger_1 extends TColStd_PackedMapOfInteger {
    constructor(NbBuckets: Standard_Integer);
  }

  export declare class TColStd_PackedMapOfInteger_2 extends TColStd_PackedMapOfInteger {
    constructor(theOther: TColStd_PackedMapOfInteger);
  }

export declare class Message_ExecStatus {
  Set(status: Message_Status): void;
  IsSet(status: Message_Status): Standard_Boolean;
  Clear_1(status: Message_Status): void;
  IsDone(): Standard_Boolean;
  IsFail(): Standard_Boolean;
  IsWarn(): Standard_Boolean;
  IsAlarm(): Standard_Boolean;
  SetAllDone(): void;
  SetAllWarn(): void;
  SetAllAlarm(): void;
  SetAllFail(): void;
  ClearAllDone(): void;
  ClearAllWarn(): void;
  ClearAllAlarm(): void;
  ClearAllFail(): void;
  Clear_2(): void;
  Add(theOther: Message_ExecStatus): void;
  And(theOther: Message_ExecStatus): void;
  StatusIndex(status: Message_Status): Standard_Integer;
  LocalStatusIndex(status: Message_Status): Standard_Integer;
  TypeOfStatus(status: Message_Status): Message_StatusType;
  StatusByIndex(theIndex: Standard_Integer): Message_Status;
}

  export declare class Message_ExecStatus_1 extends Message_ExecStatus {
    constructor();
  }

  export declare class Message_ExecStatus_2 extends Message_ExecStatus {
    constructor(status: Message_Status);
  }

export declare class Message_Msg {
  Set_1(theMsg: Standard_CString): void;
  Set_2(theMsg: TCollection_ExtendedString): void;
  Arg_1(theString: Standard_CString): Message_Msg;
  Arg_2(theString: TCollection_AsciiString): Message_Msg;
  Arg_3(theString: any): Message_Msg;
  Arg_4(theString: TCollection_ExtendedString): Message_Msg;
  Arg_5(theString: any): Message_Msg;
  Arg_6(theInt: Standard_Integer): Message_Msg;
  Arg_7(theReal: Standard_Real): Message_Msg;
  Original(): TCollection_ExtendedString;
  Value(): TCollection_ExtendedString;
  IsEdited(): Standard_Boolean;
  Get(): TCollection_ExtendedString;
}

  export declare class Message_Msg_1 extends Message_Msg {
    constructor();
  }

  export declare class Message_Msg_2 extends Message_Msg {
    constructor(theMsg: Message_Msg);
  }

  export declare class Message_Msg_3 extends Message_Msg {
    constructor(theKey: Standard_CString);
  }

  export declare class Message_Msg_4 extends Message_Msg {
    constructor(theKey: TCollection_ExtendedString);
  }

export declare class Message_Algorithm extends Standard_Transient {
  constructor()
  SetStatus_1(theStat: Message_Status): void;
  SetStatus_2(theStat: Message_Status, theInt: Standard_Integer): void;
  SetStatus_3(theStat: Message_Status, theStr: Standard_CString, noRepetitions: Standard_Boolean): void;
  SetStatus_4(theStat: Message_Status, theStr: TCollection_AsciiString, noRepetitions: Standard_Boolean): void;
  SetStatus_5(theStat: Message_Status, theStr: any, noRepetitions: Standard_Boolean): void;
  SetStatus_6(theStat: Message_Status, theStr: TCollection_ExtendedString, noRepetitions: Standard_Boolean): void;
  SetStatus_7(theStat: Message_Status, theStr: any, noRepetitions: Standard_Boolean): void;
  SetStatus_8(theStat: Message_Status, theMsg: Message_Msg): void;
  GetStatus(): Message_ExecStatus;
  ChangeStatus(): Message_ExecStatus;
  ClearStatus(): void;
  SetMessenger(theMsgr: any): void;
  GetMessenger(): any;
  SendStatusMessages(theFilter: Message_ExecStatus, theTraceLevel: Message_Gravity, theMaxCount: Standard_Integer): void;
  SendMessages(theTraceLevel: Message_Gravity, theMaxCount: Standard_Integer): void;
  AddStatus_1(theOther: any): void;
  AddStatus_2(theStatus: Message_ExecStatus, theOther: any): void;
  GetMessageNumbers(theStatus: Message_Status): any;
  GetMessageStrings(theStatus: Message_Status): any;
  PrepareReport_1(theError: any, theMaxCount: Standard_Integer): TCollection_ExtendedString;
  PrepareReport_2(theReportSeq: TColStd_SequenceOfHExtendedString, theMaxCount: Standard_Integer): TCollection_ExtendedString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Storage_HeaderData extends Standard_Transient {
  constructor()
  Read(theDriver: any): Standard_Boolean;
  CreationDate(): TCollection_AsciiString;
  StorageVersion(): TCollection_AsciiString;
  SchemaVersion(): TCollection_AsciiString;
  SchemaName(): TCollection_AsciiString;
  SetApplicationVersion(aVersion: TCollection_AsciiString): void;
  ApplicationVersion(): TCollection_AsciiString;
  SetApplicationName(aName: TCollection_ExtendedString): void;
  ApplicationName(): TCollection_ExtendedString;
  SetDataType(aType: TCollection_ExtendedString): void;
  DataType(): TCollection_ExtendedString;
  AddToUserInfo(theUserInfo: TCollection_AsciiString): void;
  UserInfo(): TColStd_SequenceOfAsciiString;
  AddToComments(aComment: TCollection_ExtendedString): void;
  Comments(): TColStd_SequenceOfExtendedString;
  NumberOfObjects(): Standard_Integer;
  ErrorStatus(): Storage_Error;
  ErrorStatusExtension(): TCollection_AsciiString;
  ClearErrorStatus(): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  SetNumberOfObjects(anObjectNumber: Standard_Integer): void;
  SetStorageVersion(aVersion: TCollection_AsciiString): void;
  SetCreationDate(aDate: TCollection_AsciiString): void;
  SetSchemaVersion(aVersion: TCollection_AsciiString): void;
  SetSchemaName(aName: TCollection_AsciiString): void;
}

export declare class Storage_Root extends Standard_Transient {
  SetName(theName: TCollection_AsciiString): void;
  Name(): TCollection_AsciiString;
  SetObject(anObject: any): void;
  Object(): any;
  Type(): TCollection_AsciiString;
  SetReference(aRef: Standard_Integer): void;
  Reference(): Standard_Integer;
  SetType(aType: TCollection_AsciiString): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Storage_Root_1 extends Storage_Root {
    constructor();
  }

  export declare class Storage_Root_2 extends Storage_Root {
    constructor(theName: TCollection_AsciiString, theObject: any);
  }

  export declare class Storage_Root_3 extends Storage_Root {
    constructor(theName: TCollection_AsciiString, theRef: Standard_Integer, theType: TCollection_AsciiString);
  }

export declare class Storage_Data extends Standard_Transient {
  constructor()
  ErrorStatus(): Storage_Error;
  ClearErrorStatus(): void;
  ErrorStatusExtension(): TCollection_AsciiString;
  CreationDate(): TCollection_AsciiString;
  StorageVersion(): TCollection_AsciiString;
  SchemaVersion(): TCollection_AsciiString;
  SchemaName(): TCollection_AsciiString;
  SetApplicationVersion(aVersion: TCollection_AsciiString): void;
  ApplicationVersion(): TCollection_AsciiString;
  SetApplicationName(aName: TCollection_ExtendedString): void;
  ApplicationName(): TCollection_ExtendedString;
  SetDataType(aType: TCollection_ExtendedString): void;
  DataType(): TCollection_ExtendedString;
  AddToUserInfo(anInfo: TCollection_AsciiString): void;
  UserInfo(): TColStd_SequenceOfAsciiString;
  AddToComments(aComment: TCollection_ExtendedString): void;
  Comments(): TColStd_SequenceOfExtendedString;
  NumberOfObjects(): Standard_Integer;
  NumberOfRoots(): Standard_Integer;
  AddRoot_1(anObject: any): void;
  AddRoot_2(aName: TCollection_AsciiString, anObject: any): void;
  RemoveRoot(aName: TCollection_AsciiString): void;
  Roots(): any;
  Find(aName: TCollection_AsciiString): any;
  IsRoot(aName: TCollection_AsciiString): Standard_Boolean;
  NumberOfTypes(): Standard_Integer;
  IsType(aName: TCollection_AsciiString): Standard_Boolean;
  Types(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  HeaderData(): any;
  RootData(): any;
  TypeData(): any;
  InternalData(): any;
  Clear(): void;
}

export declare class Standard_Persistent extends Standard_Transient {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  TypeNum(): Standard_Integer;
}

export declare class Standard_MultiplyDefined extends Standard_DomainError {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Standard_MultiplyDefined_1 extends Standard_MultiplyDefined {
    constructor();
  }

  export declare class Standard_MultiplyDefined_2 extends Standard_MultiplyDefined {
    constructor(theMessage: Standard_CString);
  }

export declare class Standard_ImmutableObject extends Standard_DomainError {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Standard_ImmutableObject_1 extends Standard_ImmutableObject {
    constructor();
  }

  export declare class Standard_ImmutableObject_2 extends Standard_ImmutableObject {
    constructor(theMessage: Standard_CString);
  }

export declare class Standard_GUID {
  ToUUID(): Standard_UUID;
  ToCString(aStrGuid: Standard_PCharacter): void;
  ToExtString(aStrGuid: Standard_PExtCharacter): void;
  IsSame(uid: Standard_GUID): Standard_Boolean;
  IsNotSame(uid: Standard_GUID): Standard_Boolean;
  Assign_1(uid: Standard_GUID): void;
  Assign_2(uid: Standard_UUID): void;
  ShallowDump(aStream: Standard_OStream): void;
  CheckGUIDFormat(aGuid: Standard_CString): Standard_Boolean;
  Hash(Upper: Standard_Integer): Standard_Integer;
  HashCode(theGUID: Standard_GUID, theUpperBound: Standard_Integer): Standard_Integer;
  IsEqual(string1: Standard_GUID, string2: Standard_GUID): Standard_Boolean;
}

  export declare class Standard_GUID_1 extends Standard_GUID {
    constructor();
  }

  export declare class Standard_GUID_2 extends Standard_GUID {
    constructor(aGuid: Standard_CString);
  }

  export declare class Standard_GUID_3 extends Standard_GUID {
    constructor(aGuid: Standard_ExtString);
  }

  export declare class Standard_GUID_4 extends Standard_GUID {
    constructor(a32b: Standard_Integer, a16b1: Standard_ExtCharacter, a16b2: Standard_ExtCharacter, a16b3: Standard_ExtCharacter, a8b1: Standard_Byte, a8b2: Standard_Byte, a8b3: Standard_Byte, a8b4: Standard_Byte, a8b5: Standard_Byte, a8b6: Standard_Byte);
  }

  export declare class Standard_GUID_5 extends Standard_GUID {
    constructor(aGuid: Standard_UUID);
  }

  export declare class Standard_GUID_6 extends Standard_GUID {
    constructor(aGuid: Standard_GUID);
  }

export declare class NCollection_SparseArrayBase {
  Clear(): void;
  Size(): Standard_Size;
  HasValue(theIndex: Standard_Size): Standard_Boolean;
  UnsetValue(theIndex: Standard_Size): Standard_Boolean;
}

export declare class FSD_Base64Decoder {
  constructor();
  Decode(theStr: Standard_Byte, theLen: Standard_Size): any;
}

export declare class FSD_CmpFile {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Open(aName: TCollection_AsciiString, aMode: Storage_OpenMode): Storage_Error;
  IsGoodFileType(aName: TCollection_AsciiString): Storage_Error;
  BeginWriteInfoSection(): Storage_Error;
  BeginReadInfoSection(): Storage_Error;
  WritePersistentObjectHeader(aRef: Standard_Integer, aType: Standard_Integer): void;
  BeginWritePersistentObjectData(): void;
  BeginWriteObjectData(): void;
  EndWriteObjectData(): void;
  EndWritePersistentObjectData(): void;
  ReadPersistentObjectHeader(aRef: Standard_Integer, aType: Standard_Integer): void;
  BeginReadPersistentObjectData(): void;
  BeginReadObjectData(): void;
  EndReadObjectData(): void;
  EndReadPersistentObjectData(): void;
  Destroy(): void;
  MagicNumber(): Standard_CString;
}

export declare class Standard_NegativeValue extends Standard_RangeError {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Standard_NegativeValue_1 extends Standard_NegativeValue {
    constructor();
  }

  export declare class Standard_NegativeValue_2 extends Standard_NegativeValue {
    constructor(theMessage: Standard_CString);
  }

export declare class TColStd_HPackedMapOfInteger extends Standard_Transient {
  Map(): TColStd_PackedMapOfInteger;
  ChangeMap(): TColStd_PackedMapOfInteger;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class TColStd_HPackedMapOfInteger_1 extends TColStd_HPackedMapOfInteger {
    constructor(NbBuckets: Standard_Integer);
  }

  export declare class TColStd_HPackedMapOfInteger_2 extends TColStd_HPackedMapOfInteger {
    constructor(theOther: TColStd_PackedMapOfInteger);
  }

export declare class StdFail_InfiniteSolutions extends Standard_Failure {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class StdFail_InfiniteSolutions_1 extends StdFail_InfiniteSolutions {
    constructor();
  }

  export declare class StdFail_InfiniteSolutions_2 extends StdFail_InfiniteSolutions {
    constructor(theMessage: Standard_CString);
  }

export declare class Message_Attribute extends Standard_Transient {
  constructor(theName: TCollection_AsciiString)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  GetMessageKey(): Standard_CString;
  GetName(): TCollection_AsciiString;
  SetName(theName: TCollection_AsciiString): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class Message_AttributeMeter extends Message_Attribute {
  constructor(theName: TCollection_AsciiString)
  UndefinedMetricValue(): Standard_Real;
  HasMetric(theMetric: Message_MetricType): Standard_Boolean;
  IsMetricValid(theMetric: Message_MetricType): Standard_Boolean;
  StartValue(theMetric: Message_MetricType): Standard_Real;
  SetStartValue(theMetric: Message_MetricType, theValue: Standard_Real): void;
  StopValue(theMetric: Message_MetricType): Standard_Real;
  SetStopValue(theMetric: Message_MetricType, theValue: Standard_Real): void;
  StartAlert(theAlert: any): void;
  StopAlert(theAlert: any): void;
  SetAlertMetrics(theAlert: any, theStartValue: Standard_Boolean): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Message_AttributeObject extends Message_Attribute {
  constructor(theObject: any, theName: TCollection_AsciiString)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Object(): any;
  SetObject(theObject: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class Message_CompositeAlerts extends Standard_Transient {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Alerts(theGravity: Message_Gravity): Message_ListOfAlert;
  AddAlert(theGravity: Message_Gravity, theAlert: any): Standard_Boolean;
  RemoveAlert(theGravity: Message_Gravity, theAlert: any): Standard_Boolean;
  HasAlert_1(theAlert: any): Standard_Boolean;
  HasAlert_2(theType: any, theGravity: Message_Gravity): Standard_Boolean;
  Clear_1(): void;
  Clear_2(theGravity: Message_Gravity): void;
  Clear_3(theType: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class Message_MsgFile {
  constructor();
  Load(theDirName: Standard_CString, theFileName: Standard_CString): Standard_Boolean;
  LoadFile(theFName: Standard_CString): Standard_Boolean;
  LoadFromEnv(theEnvName: Standard_CString, theFileName: Standard_CString, theLangExt: Standard_CString): Standard_Boolean;
  LoadFromString(theContent: Standard_CString, theLength: Standard_Integer): Standard_Boolean;
  AddMsg(key: TCollection_AsciiString, text: TCollection_ExtendedString): Standard_Boolean;
  HasMsg(key: TCollection_AsciiString): Standard_Boolean;
  Msg_1(key: Standard_CString): TCollection_ExtendedString;
  Msg_2(key: TCollection_AsciiString): TCollection_ExtendedString;
}

export declare class Message_PrinterOStream extends Message_Printer {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  SetConsoleTextColor(theOStream: Standard_OStream, theTextColor: Message_ConsoleColor, theIsIntenseText: boolean): void;
  Close(): void;
  ToColorize(): Standard_Boolean;
  SetToColorize(theToColorize: Standard_Boolean): void;
}

  export declare class Message_PrinterOStream_1 extends Message_PrinterOStream {
    constructor(theTraceLevel: Message_Gravity);
  }

  export declare class Message_PrinterOStream_2 extends Message_PrinterOStream {
    constructor(theFileName: Standard_CString, theDoAppend: Standard_Boolean, theTraceLevel: Message_Gravity);
  }

export declare class Message_PrinterSystemLog extends Message_Printer {
  constructor(theEventSourceName: TCollection_AsciiString, theTraceLevel: Message_Gravity)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Message_PrinterToReport extends Message_Printer {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Report(): any;
  SetReport(theReport: any): void;
  SendStringStream(theStream: Standard_SStream, theGravity: Message_Gravity): void;
  SendObject(theObject: any, theGravity: Message_Gravity): void;
}

export declare class Message_ProgressSentry extends Message_ProgressScope {
  constructor(theRange: Message_ProgressRange, theName: Standard_CString, theMin: Standard_Real, theMax: Standard_Real, theStep: Standard_Real, theIsInf: Standard_Boolean, theNewScopeSpan: Standard_Real)
  Relieve(): void;
}

export declare class NCollection_AccAllocator extends NCollection_BaseAllocator {
  constructor(theBlockSize: size_t)
  Allocate(theSize: size_t): void;
  Free(theAddress: void): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class NCollection_AlignedAllocator extends NCollection_BaseAllocator {
  constructor(theAlignment: size_t)
  Allocate(theSize: size_t): void;
  Free(thePtr: void): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class NCollection_HeapAllocator extends NCollection_BaseAllocator {
  Allocate(theSize: Standard_Size): void;
  Free(anAddress: void): void;
  GlobalHeapAllocator(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class NCollection_WinHeapAllocator extends NCollection_BaseAllocator {
  constructor(theInitSizeBytes: size_t)
  Allocate(theSize: Standard_Size): void;
  Free(theAddress: void): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class OSD {
  constructor();
  SetSignal_1(theSignalMode: OSD_SignalMode, theFloatingSignal: Standard_Boolean): void;
  SetSignal_2(theFloatingSignal: Standard_Boolean): void;
  SetThreadLocalSignal(theSignalMode: OSD_SignalMode, theFloatingSignal: Standard_Boolean): void;
  SetFloatingSignal(theFloatingSignal: Standard_Boolean): void;
  SignalMode(): OSD_SignalMode;
  ToCatchFloatingSignals(): Standard_Boolean;
  SecSleep(theSeconds: Standard_Integer): void;
  MilliSecSleep(theMilliseconds: Standard_Integer): void;
  RealToCString(aReal: Standard_Real, aString: Standard_PCharacter): Standard_Boolean;
  CStringToReal(aString: Standard_CString, aReal: Standard_Real): Standard_Boolean;
  ControlBreak(): void;
}

export declare class OSD_Error {
  constructor()
  Perror(): void;
  SetValue(Errcode: Standard_Integer, From: Standard_Integer, Message: TCollection_AsciiString): void;
  Error(): Standard_Integer;
  Failed(): Standard_Boolean;
  Reset(): void;
}

export declare class OSD_Directory {
  BuildTemporary(): OSD_Directory;
  Build(Protect: OSD_Protection): void;
}

  export declare class OSD_Directory_1 extends OSD_Directory {
    constructor();
  }

  export declare class OSD_Directory_2 extends OSD_Directory {
    constructor(theName: OSD_Path);
  }

export declare class OSD_DirectoryIterator {
  Destroy(): void;
  Initialize(where: OSD_Path, Mask: TCollection_AsciiString): void;
  More(): Standard_Boolean;
  Next(): void;
  Values(): OSD_Directory;
  Failed(): Standard_Boolean;
  Reset(): void;
  Perror(): void;
  Error(): Standard_Integer;
}

  export declare class OSD_DirectoryIterator_1 extends OSD_DirectoryIterator {
    constructor();
  }

  export declare class OSD_DirectoryIterator_2 extends OSD_DirectoryIterator {
    constructor(where: OSD_Path, Mask: TCollection_AsciiString);
  }

export declare class OSD_Disk {
  Name(): OSD_Path;
  SetName(Name: OSD_Path): void;
  DiskSize(): Standard_Integer;
  DiskFree(): Standard_Integer;
  Failed(): Standard_Boolean;
  Reset(): void;
  Perror(): void;
  Error(): Standard_Integer;
}

  export declare class OSD_Disk_1 extends OSD_Disk {
    constructor();
  }

  export declare class OSD_Disk_2 extends OSD_Disk {
    constructor(Name: OSD_Path);
  }

  export declare class OSD_Disk_3 extends OSD_Disk {
    constructor(PathName: Standard_CString);
  }

export declare class OSD_Environment {
  SetValue(Value: TCollection_AsciiString): void;
  Value(): TCollection_AsciiString;
  SetName(name: TCollection_AsciiString): void;
  Name(): TCollection_AsciiString;
  Build(): void;
  Remove(): void;
  Failed(): Standard_Boolean;
  Reset(): void;
  Perror(): void;
  Error(): Standard_Integer;
}

  export declare class OSD_Environment_1 extends OSD_Environment {
    constructor();
  }

  export declare class OSD_Environment_2 extends OSD_Environment {
    constructor(Name: TCollection_AsciiString);
  }

  export declare class OSD_Environment_3 extends OSD_Environment {
    constructor(Name: TCollection_AsciiString, Value: TCollection_AsciiString);
  }

export declare class OSD_Exception extends Standard_Failure {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class OSD_Exception_1 extends OSD_Exception {
    constructor();
  }

  export declare class OSD_Exception_2 extends OSD_Exception {
    constructor(theMessage: Standard_CString);
  }

export declare class OSD_Exception_ACCESS_VIOLATION extends OSD_Exception {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class OSD_Exception_ACCESS_VIOLATION_1 extends OSD_Exception_ACCESS_VIOLATION {
    constructor();
  }

  export declare class OSD_Exception_ACCESS_VIOLATION_2 extends OSD_Exception_ACCESS_VIOLATION {
    constructor(theMessage: Standard_CString);
  }

export declare class OSD_Exception_ARRAY_BOUNDS_EXCEEDED extends OSD_Exception {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class OSD_Exception_ARRAY_BOUNDS_EXCEEDED_1 extends OSD_Exception_ARRAY_BOUNDS_EXCEEDED {
    constructor();
  }

  export declare class OSD_Exception_ARRAY_BOUNDS_EXCEEDED_2 extends OSD_Exception_ARRAY_BOUNDS_EXCEEDED {
    constructor(theMessage: Standard_CString);
  }

export declare class OSD_Exception_CTRL_BREAK extends OSD_Exception {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class OSD_Exception_CTRL_BREAK_1 extends OSD_Exception_CTRL_BREAK {
    constructor();
  }

  export declare class OSD_Exception_CTRL_BREAK_2 extends OSD_Exception_CTRL_BREAK {
    constructor(theMessage: Standard_CString);
  }

export declare class OSD_Exception_FLT_DENORMAL_OPERAND extends OSD_Exception {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class OSD_Exception_FLT_DENORMAL_OPERAND_1 extends OSD_Exception_FLT_DENORMAL_OPERAND {
    constructor();
  }

  export declare class OSD_Exception_FLT_DENORMAL_OPERAND_2 extends OSD_Exception_FLT_DENORMAL_OPERAND {
    constructor(theMessage: Standard_CString);
  }

export declare class OSD_Exception_FLT_DIVIDE_BY_ZERO extends OSD_Exception {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class OSD_Exception_FLT_DIVIDE_BY_ZERO_1 extends OSD_Exception_FLT_DIVIDE_BY_ZERO {
    constructor();
  }

  export declare class OSD_Exception_FLT_DIVIDE_BY_ZERO_2 extends OSD_Exception_FLT_DIVIDE_BY_ZERO {
    constructor(theMessage: Standard_CString);
  }

export declare class OSD_Exception_FLT_INEXACT_RESULT extends OSD_Exception {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class OSD_Exception_FLT_INEXACT_RESULT_1 extends OSD_Exception_FLT_INEXACT_RESULT {
    constructor();
  }

  export declare class OSD_Exception_FLT_INEXACT_RESULT_2 extends OSD_Exception_FLT_INEXACT_RESULT {
    constructor(theMessage: Standard_CString);
  }

export declare class OSD_Exception_FLT_INVALID_OPERATION extends OSD_Exception {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class OSD_Exception_FLT_INVALID_OPERATION_1 extends OSD_Exception_FLT_INVALID_OPERATION {
    constructor();
  }

  export declare class OSD_Exception_FLT_INVALID_OPERATION_2 extends OSD_Exception_FLT_INVALID_OPERATION {
    constructor(theMessage: Standard_CString);
  }

export declare class OSD_Exception_FLT_OVERFLOW extends OSD_Exception {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class OSD_Exception_FLT_OVERFLOW_1 extends OSD_Exception_FLT_OVERFLOW {
    constructor();
  }

  export declare class OSD_Exception_FLT_OVERFLOW_2 extends OSD_Exception_FLT_OVERFLOW {
    constructor(theMessage: Standard_CString);
  }

export declare class OSD_Exception_FLT_STACK_CHECK extends OSD_Exception {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class OSD_Exception_FLT_STACK_CHECK_1 extends OSD_Exception_FLT_STACK_CHECK {
    constructor();
  }

  export declare class OSD_Exception_FLT_STACK_CHECK_2 extends OSD_Exception_FLT_STACK_CHECK {
    constructor(theMessage: Standard_CString);
  }

export declare class OSD_Exception_FLT_UNDERFLOW extends OSD_Exception {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class OSD_Exception_FLT_UNDERFLOW_1 extends OSD_Exception_FLT_UNDERFLOW {
    constructor();
  }

  export declare class OSD_Exception_FLT_UNDERFLOW_2 extends OSD_Exception_FLT_UNDERFLOW {
    constructor(theMessage: Standard_CString);
  }

export declare class OSD_Exception_ILLEGAL_INSTRUCTION extends OSD_Exception {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class OSD_Exception_ILLEGAL_INSTRUCTION_1 extends OSD_Exception_ILLEGAL_INSTRUCTION {
    constructor();
  }

  export declare class OSD_Exception_ILLEGAL_INSTRUCTION_2 extends OSD_Exception_ILLEGAL_INSTRUCTION {
    constructor(theMessage: Standard_CString);
  }

export declare class OSD_Exception_INT_DIVIDE_BY_ZERO extends OSD_Exception {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class OSD_Exception_INT_DIVIDE_BY_ZERO_1 extends OSD_Exception_INT_DIVIDE_BY_ZERO {
    constructor();
  }

  export declare class OSD_Exception_INT_DIVIDE_BY_ZERO_2 extends OSD_Exception_INT_DIVIDE_BY_ZERO {
    constructor(theMessage: Standard_CString);
  }

export declare class OSD_Exception_INT_OVERFLOW extends OSD_Exception {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class OSD_Exception_INT_OVERFLOW_1 extends OSD_Exception_INT_OVERFLOW {
    constructor();
  }

  export declare class OSD_Exception_INT_OVERFLOW_2 extends OSD_Exception_INT_OVERFLOW {
    constructor(theMessage: Standard_CString);
  }

export declare class OSD_Exception_INVALID_DISPOSITION extends OSD_Exception {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class OSD_Exception_INVALID_DISPOSITION_1 extends OSD_Exception_INVALID_DISPOSITION {
    constructor();
  }

  export declare class OSD_Exception_INVALID_DISPOSITION_2 extends OSD_Exception_INVALID_DISPOSITION {
    constructor(theMessage: Standard_CString);
  }

export declare class OSD_Exception_IN_PAGE_ERROR extends OSD_Exception {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class OSD_Exception_IN_PAGE_ERROR_1 extends OSD_Exception_IN_PAGE_ERROR {
    constructor();
  }

  export declare class OSD_Exception_IN_PAGE_ERROR_2 extends OSD_Exception_IN_PAGE_ERROR {
    constructor(theMessage: Standard_CString);
  }

export declare class OSD_Exception_NONCONTINUABLE_EXCEPTION extends OSD_Exception {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class OSD_Exception_NONCONTINUABLE_EXCEPTION_1 extends OSD_Exception_NONCONTINUABLE_EXCEPTION {
    constructor();
  }

  export declare class OSD_Exception_NONCONTINUABLE_EXCEPTION_2 extends OSD_Exception_NONCONTINUABLE_EXCEPTION {
    constructor(theMessage: Standard_CString);
  }

export declare class OSD_Exception_PRIV_INSTRUCTION extends OSD_Exception {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class OSD_Exception_PRIV_INSTRUCTION_1 extends OSD_Exception_PRIV_INSTRUCTION {
    constructor();
  }

  export declare class OSD_Exception_PRIV_INSTRUCTION_2 extends OSD_Exception_PRIV_INSTRUCTION {
    constructor(theMessage: Standard_CString);
  }

export declare class OSD_Exception_STACK_OVERFLOW extends OSD_Exception {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class OSD_Exception_STACK_OVERFLOW_1 extends OSD_Exception_STACK_OVERFLOW {
    constructor();
  }

  export declare class OSD_Exception_STACK_OVERFLOW_2 extends OSD_Exception_STACK_OVERFLOW {
    constructor(theMessage: Standard_CString);
  }

export declare class OSD_Exception_STATUS_NO_MEMORY extends OSD_Exception {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class OSD_Exception_STATUS_NO_MEMORY_1 extends OSD_Exception_STATUS_NO_MEMORY {
    constructor();
  }

  export declare class OSD_Exception_STATUS_NO_MEMORY_2 extends OSD_Exception_STATUS_NO_MEMORY {
    constructor(theMessage: Standard_CString);
  }

export declare class OSD_FileIterator {
  Destroy(): void;
  Initialize(where: OSD_Path, Mask: TCollection_AsciiString): void;
  More(): Standard_Boolean;
  Next(): void;
  Values(): OSD_File;
  Failed(): Standard_Boolean;
  Reset(): void;
  Perror(): void;
  Error(): Standard_Integer;
}

  export declare class OSD_FileIterator_1 extends OSD_FileIterator {
    constructor();
  }

  export declare class OSD_FileIterator_2 extends OSD_FileIterator {
    constructor(where: OSD_Path, Mask: TCollection_AsciiString);
  }

export declare class OSD_Host {
  constructor()
  SystemVersion(): TCollection_AsciiString;
  SystemId(): OSD_SysType;
  HostName(): TCollection_AsciiString;
  AvailableMemory(): Standard_Integer;
  InternetAddress(): TCollection_AsciiString;
  MachineType(): OSD_OEMType;
  Failed(): Standard_Boolean;
  Reset(): void;
  Perror(): void;
  Error(): Standard_Integer;
}

export declare class OSD_MAllocHook {
  constructor();
  SetCallback(theCB: any): void;
  GetCallback(): any;
  GetLogFileHandler(): any;
  GetCollectBySize(): any;
}

export declare class OSD_OSDError extends Standard_Failure {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class OSD_OSDError_1 extends OSD_OSDError {
    constructor();
  }

  export declare class OSD_OSDError_2 extends OSD_OSDError {
    constructor(theMessage: Standard_CString);
  }

export declare class OSD_PerfMeter {
  Init(theMeter: string): void;
  Start(): void;
  Stop(): void;
  Tick(): void;
  Flush(): void;
}

  export declare class OSD_PerfMeter_1 extends OSD_PerfMeter {
    constructor();
  }

  export declare class OSD_PerfMeter_2 extends OSD_PerfMeter {
    constructor(theMeter: string, theToAutoStart: boolean);
  }

export declare class OSD_Process {
  constructor()
  ExecutablePath(): TCollection_AsciiString;
  ExecutableFolder(): TCollection_AsciiString;
  TerminalType(Name: TCollection_AsciiString): void;
  SystemDate(): Quantity_Date;
  UserName(): TCollection_AsciiString;
  IsSuperUser(): Standard_Boolean;
  ProcessId(): Standard_Integer;
  CurrentDirectory(): OSD_Path;
  SetCurrentDirectory(where: OSD_Path): void;
  Failed(): Standard_Boolean;
  Reset(): void;
  Perror(): void;
  Error(): Standard_Integer;
}

export declare class OSD_Protection {
  Values(System: OSD_SingleProtection, User: OSD_SingleProtection, Group: OSD_SingleProtection, World: OSD_SingleProtection): void;
  SetValues(System: OSD_SingleProtection, User: OSD_SingleProtection, Group: OSD_SingleProtection, World: OSD_SingleProtection): void;
  SetSystem(priv: OSD_SingleProtection): void;
  SetUser(priv: OSD_SingleProtection): void;
  SetGroup(priv: OSD_SingleProtection): void;
  SetWorld(priv: OSD_SingleProtection): void;
  System(): OSD_SingleProtection;
  User(): OSD_SingleProtection;
  Group(): OSD_SingleProtection;
  World(): OSD_SingleProtection;
  Add(aProt: OSD_SingleProtection, aRight: OSD_SingleProtection): void;
  Sub(aProt: OSD_SingleProtection, aRight: OSD_SingleProtection): void;
}

  export declare class OSD_Protection_1 extends OSD_Protection {
    constructor();
  }

  export declare class OSD_Protection_2 extends OSD_Protection {
    constructor(System: OSD_SingleProtection, User: OSD_SingleProtection, Group: OSD_SingleProtection, World: OSD_SingleProtection);
  }

export declare class OSD_Signal extends Standard_Failure {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class OSD_Signal_1 extends OSD_Signal {
    constructor();
  }

  export declare class OSD_Signal_2 extends OSD_Signal {
    constructor(theMessage: Standard_CString);
  }

export declare class OSD_SIGBUS extends OSD_Signal {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class OSD_SIGBUS_1 extends OSD_SIGBUS {
    constructor();
  }

  export declare class OSD_SIGBUS_2 extends OSD_SIGBUS {
    constructor(theMessage: Standard_CString);
  }

export declare class OSD_SIGHUP extends OSD_Signal {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class OSD_SIGHUP_1 extends OSD_SIGHUP {
    constructor();
  }

  export declare class OSD_SIGHUP_2 extends OSD_SIGHUP {
    constructor(theMessage: Standard_CString);
  }

export declare class OSD_SIGILL extends OSD_Signal {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class OSD_SIGILL_1 extends OSD_SIGILL {
    constructor();
  }

  export declare class OSD_SIGILL_2 extends OSD_SIGILL {
    constructor(theMessage: Standard_CString);
  }

export declare class OSD_SIGINT extends OSD_Signal {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class OSD_SIGINT_1 extends OSD_SIGINT {
    constructor();
  }

  export declare class OSD_SIGINT_2 extends OSD_SIGINT {
    constructor(theMessage: Standard_CString);
  }

export declare class OSD_SIGKILL extends OSD_Signal {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class OSD_SIGKILL_1 extends OSD_SIGKILL {
    constructor();
  }

  export declare class OSD_SIGKILL_2 extends OSD_SIGKILL {
    constructor(theMessage: Standard_CString);
  }

export declare class OSD_SIGQUIT extends OSD_Signal {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class OSD_SIGQUIT_1 extends OSD_SIGQUIT {
    constructor();
  }

  export declare class OSD_SIGQUIT_2 extends OSD_SIGQUIT {
    constructor(theMessage: Standard_CString);
  }

export declare class OSD_SIGSEGV extends OSD_Signal {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class OSD_SIGSEGV_1 extends OSD_SIGSEGV {
    constructor();
  }

  export declare class OSD_SIGSEGV_2 extends OSD_SIGSEGV {
    constructor(theMessage: Standard_CString);
  }

export declare class OSD_SIGSYS extends OSD_Signal {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class OSD_SIGSYS_1 extends OSD_SIGSYS {
    constructor();
  }

  export declare class OSD_SIGSYS_2 extends OSD_SIGSYS {
    constructor(theMessage: Standard_CString);
  }

export declare class OSD_SharedLibrary {
  SetName(aName: Standard_CString): void;
  Name(): Standard_CString;
  DlOpen(Mode: OSD_LoadMode): Standard_Boolean;
  DlSymb(Name: Standard_CString): OSD_Function;
  DlClose(): void;
  DlError(): Standard_CString;
  Destroy(): void;
}

  export declare class OSD_SharedLibrary_1 extends OSD_SharedLibrary {
    constructor();
  }

  export declare class OSD_SharedLibrary_2 extends OSD_SharedLibrary {
    constructor(aFilename: Standard_CString);
  }

export declare class Quantity_Date {
  Values(mm: Standard_Integer, dd: Standard_Integer, yy: Standard_Integer, hh: Standard_Integer, mn: Standard_Integer, ss: Standard_Integer, mis: Standard_Integer, mics: Standard_Integer): void;
  SetValues(mm: Standard_Integer, dd: Standard_Integer, yy: Standard_Integer, hh: Standard_Integer, mn: Standard_Integer, ss: Standard_Integer, mis: Standard_Integer, mics: Standard_Integer): void;
  Difference(anOther: Quantity_Date): Quantity_Period;
  Subtract(aPeriod: Quantity_Period): Quantity_Date;
  Add(aPeriod: Quantity_Period): Quantity_Date;
  Year(): Standard_Integer;
  Month(): Standard_Integer;
  Day(): Standard_Integer;
  Hour(): Standard_Integer;
  Minute(): Standard_Integer;
  Second(): Standard_Integer;
  MilliSecond(): Standard_Integer;
  MicroSecond(): Standard_Integer;
  IsEqual(anOther: Quantity_Date): Standard_Boolean;
  IsEarlier(anOther: Quantity_Date): Standard_Boolean;
  IsLater(anOther: Quantity_Date): Standard_Boolean;
  IsValid(mm: Standard_Integer, dd: Standard_Integer, yy: Standard_Integer, hh: Standard_Integer, mn: Standard_Integer, ss: Standard_Integer, mis: Standard_Integer, mics: Standard_Integer): Standard_Boolean;
  IsLeap(yy: Standard_Integer): Standard_Boolean;
}

  export declare class Quantity_Date_1 extends Quantity_Date {
    constructor();
  }

  export declare class Quantity_Date_2 extends Quantity_Date {
    constructor(mm: Standard_Integer, dd: Standard_Integer, yyyy: Standard_Integer, hh: Standard_Integer, mn: Standard_Integer, ss: Standard_Integer, mis: Standard_Integer, mics: Standard_Integer);
  }

export declare class Plugin {
  constructor();
  Load(aGUID: Standard_GUID, theVerbose: Standard_Boolean): any;
}

export declare class Plugin_Failure extends Standard_Failure {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Plugin_Failure_1 extends Plugin_Failure {
    constructor();
  }

  export declare class Plugin_Failure_2 extends Plugin_Failure {
    constructor(theMessage: Standard_CString);
  }

export declare class Quantity_DateDefinitionError extends Standard_DomainError {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Quantity_DateDefinitionError_1 extends Quantity_DateDefinitionError {
    constructor();
  }

  export declare class Quantity_DateDefinitionError_2 extends Quantity_DateDefinitionError {
    constructor(theMessage: Standard_CString);
  }

export declare class Quantity_Period {
  Values_1(dd: Standard_Integer, hh: Standard_Integer, mn: Standard_Integer, ss: Standard_Integer, mis: Standard_Integer, mics: Standard_Integer): void;
  Values_2(ss: Standard_Integer, mics: Standard_Integer): void;
  SetValues_1(dd: Standard_Integer, hh: Standard_Integer, mn: Standard_Integer, ss: Standard_Integer, mis: Standard_Integer, mics: Standard_Integer): void;
  SetValues_2(ss: Standard_Integer, mics: Standard_Integer): void;
  Subtract(anOther: Quantity_Period): Quantity_Period;
  Add(anOther: Quantity_Period): Quantity_Period;
  IsEqual(anOther: Quantity_Period): Standard_Boolean;
  IsShorter(anOther: Quantity_Period): Standard_Boolean;
  IsLonger(anOther: Quantity_Period): Standard_Boolean;
  IsValid_1(dd: Standard_Integer, hh: Standard_Integer, mn: Standard_Integer, ss: Standard_Integer, mis: Standard_Integer, mics: Standard_Integer): Standard_Boolean;
  IsValid_2(ss: Standard_Integer, mics: Standard_Integer): Standard_Boolean;
}

  export declare class Quantity_Period_1 extends Quantity_Period {
    constructor(dd: Standard_Integer, hh: Standard_Integer, mn: Standard_Integer, ss: Standard_Integer, mis: Standard_Integer, mics: Standard_Integer);
  }

  export declare class Quantity_Period_2 extends Quantity_Period {
    constructor(ss: Standard_Integer, mics: Standard_Integer);
  }

export declare class Quantity_PeriodDefinitionError extends Standard_DomainError {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Quantity_PeriodDefinitionError_1 extends Quantity_PeriodDefinitionError {
    constructor();
  }

  export declare class Quantity_PeriodDefinitionError_2 extends Quantity_PeriodDefinitionError {
    constructor(theMessage: Standard_CString);
  }

export declare class Standard_ReadLineBuffer {
  constructor(theMaxBufferSizeBytes: size_t)
  Clear(): void;
  IsMultilineMode(): boolean;
  ToPutGapInMultiline(): boolean;
  SetMultilineMode(theMultilineMode: boolean, theToPutGap: boolean): void;
}

export declare class Resource_LexicalCompare {
  constructor()
  IsLower(Left: TCollection_AsciiString, Right: TCollection_AsciiString): Standard_Boolean;
}

export declare class Resource_Manager extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Save(): Standard_Boolean;
  Find_1(aResource: Standard_CString): Standard_Boolean;
  Find_2(theResource: TCollection_AsciiString, theValue: TCollection_AsciiString): Standard_Boolean;
  Integer(aResourceName: Standard_CString): Standard_Integer;
  Real(aResourceName: Standard_CString): Standard_Real;
  Value(aResourceName: Standard_CString): Standard_CString;
  ExtValue(aResourceName: Standard_CString): Standard_ExtString;
  SetResource_1(aResourceName: Standard_CString, aValue: Standard_Integer): void;
  SetResource_2(aResourceName: Standard_CString, aValue: Standard_Real): void;
  SetResource_3(aResourceName: Standard_CString, aValue: Standard_CString): void;
  SetResource_4(aResourceName: Standard_CString, aValue: Standard_ExtString): void;
  GetResourcePath(aPath: TCollection_AsciiString, aName: Standard_CString, isUserDefaults: Standard_Boolean): void;
}

  export declare class Resource_Manager_1 extends Resource_Manager {
    constructor(aName: Standard_CString, Verbose: Standard_Boolean);
  }

  export declare class Resource_Manager_2 extends Resource_Manager {
    constructor(theName: TCollection_AsciiString, theDefaultsDirectory: TCollection_AsciiString, theUserDefaultsDirectory: TCollection_AsciiString, theIsVerbose: Standard_Boolean);
  }

export declare class Resource_NoSuchResource extends Standard_NoSuchObject {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Resource_NoSuchResource_1 extends Resource_NoSuchResource {
    constructor();
  }

  export declare class Resource_NoSuchResource_2 extends Resource_NoSuchResource {
    constructor(theMessage: Standard_CString);
  }

export declare class Resource_Unicode {
  constructor();
  ConvertSJISToUnicode(fromstr: Standard_CString, tostr: TCollection_ExtendedString): void;
  ConvertEUCToUnicode(fromstr: Standard_CString, tostr: TCollection_ExtendedString): void;
  ConvertGBToUnicode(fromstr: Standard_CString, tostr: TCollection_ExtendedString): void;
  ConvertGBKToUnicode(fromstr: Standard_CString, tostr: TCollection_ExtendedString): Standard_Boolean;
  ConvertBig5ToUnicode(fromstr: Standard_CString, tostr: TCollection_ExtendedString): Standard_Boolean;
  ConvertUnicodeToSJIS(fromstr: TCollection_ExtendedString, tostr: Standard_PCharacter, maxsize: Standard_Integer): Standard_Boolean;
  ConvertUnicodeToEUC(fromstr: TCollection_ExtendedString, tostr: Standard_PCharacter, maxsize: Standard_Integer): Standard_Boolean;
  ConvertUnicodeToGB(fromstr: TCollection_ExtendedString, tostr: Standard_PCharacter, maxsize: Standard_Integer): Standard_Boolean;
  ConvertUnicodeToANSI(fromstr: TCollection_ExtendedString, tostr: Standard_PCharacter, maxsize: Standard_Integer): Standard_Boolean;
  SetFormat(typecode: Resource_FormatType): void;
  GetFormat(): Resource_FormatType;
  ReadFormat(): void;
  ConvertFormatToUnicode_1(theFromStr: Standard_CString, theToStr: TCollection_ExtendedString): void;
  ConvertFormatToUnicode_2(theFormat: Resource_FormatType, theFromStr: Standard_CString, theToStr: TCollection_ExtendedString): void;
  ConvertUnicodeToFormat_1(theFormat: Resource_FormatType, theFromStr: TCollection_ExtendedString, theToStr: Standard_PCharacter, theMaxSize: Standard_Integer): Standard_Boolean;
  ConvertUnicodeToFormat_2(theFromStr: TCollection_ExtendedString, theToStr: Standard_PCharacter, theMaxSize: Standard_Integer): Standard_Boolean;
}

export declare class Standard_NullValue extends Standard_RangeError {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Standard_NullValue_1 extends Standard_NullValue {
    constructor();
  }

  export declare class Standard_NullValue_2 extends Standard_NullValue {
    constructor(theMessage: Standard_CString);
  }

export declare class Standard_AbortiveTransaction extends Standard_Failure {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Standard_AbortiveTransaction_1 extends Standard_AbortiveTransaction {
    constructor();
  }

  export declare class Standard_AbortiveTransaction_2 extends Standard_AbortiveTransaction {
    constructor(theMessage: Standard_CString);
  }

export declare class Standard_ArrayStreamBuffer {
  constructor(theBegin: string, theSize: size_t)
  Init(theBegin: string, theSize: size_t): void;
  xsgetn(thePtr: string, theCount: any): any;
}

export declare class Standard_CLocaleSentry {
  constructor()
  GetCLocale(): any;
}

export declare class Standard_NumericError extends Standard_Failure {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Standard_NumericError_1 extends Standard_NumericError {
    constructor();
  }

  export declare class Standard_NumericError_2 extends Standard_NumericError {
    constructor(theMessage: Standard_CString);
  }

export declare class Standard_DivideByZero extends Standard_NumericError {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Standard_DivideByZero_1 extends Standard_DivideByZero {
    constructor();
  }

  export declare class Standard_DivideByZero_2 extends Standard_DivideByZero {
    constructor(theMessage: Standard_CString);
  }

export declare class Standard_LicenseError extends Standard_Failure {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Standard_LicenseError_1 extends Standard_LicenseError {
    constructor();
  }

  export declare class Standard_LicenseError_2 extends Standard_LicenseError {
    constructor(theMessage: Standard_CString);
  }

export declare class Standard_LicenseNotFound extends Standard_LicenseError {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Standard_LicenseNotFound_1 extends Standard_LicenseNotFound {
    constructor();
  }

  export declare class Standard_LicenseNotFound_2 extends Standard_LicenseNotFound {
    constructor(theMessage: Standard_CString);
  }

export declare class Standard_MMgrRoot {
  Allocate(theSize: Standard_Size): Standard_Address;
  Reallocate(thePtr: Standard_Address, theSize: Standard_Size): Standard_Address;
  Free(thePtr: Standard_Address): void;
  Purge(isDestroyed: Standard_Boolean): Standard_Integer;
}

export declare class Standard_MMgrOpt extends Standard_MMgrRoot {
  constructor(aClear: Standard_Boolean, aMMap: Standard_Boolean, aCellSize: Standard_Size, aNbPages: Standard_Integer, aThreshold: Standard_Size)
  Allocate(aSize: Standard_Size): Standard_Address;
  Reallocate(thePtr: Standard_Address, theSize: Standard_Size): Standard_Address;
  Free(thePtr: Standard_Address): void;
  Purge(isDestroyed: Standard_Boolean): Standard_Integer;
  SetCallBackFunction(pFunc: any): void;
}

export declare class Standard_MMgrRaw extends Standard_MMgrRoot {
  constructor(aClear: Standard_Boolean)
  Allocate(aSize: Standard_Size): Standard_Address;
  Reallocate(thePtr: Standard_Address, theSize: Standard_Size): Standard_Address;
  Free(thePtr: Standard_Address): void;
}

export declare class Standard_MMgrTBBalloc extends Standard_MMgrRoot {
  constructor(aClear: Standard_Boolean)
  Allocate(aSize: Standard_Size): Standard_Address;
  Reallocate(thePtr: Standard_Address, theSize: Standard_Size): Standard_Address;
  Free(thePtr: Standard_Address): void;
}

export declare class Standard_NoMoreObject extends Standard_DomainError {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Standard_NoMoreObject_1 extends Standard_NoMoreObject {
    constructor();
  }

  export declare class Standard_NoMoreObject_2 extends Standard_NoMoreObject {
    constructor(theMessage: Standard_CString);
  }

export declare class Standard_Overflow extends Standard_NumericError {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Standard_Overflow_1 extends Standard_Overflow {
    constructor();
  }

  export declare class Standard_Overflow_2 extends Standard_Overflow {
    constructor(theMessage: Standard_CString);
  }

export declare class Standard_ReadBuffer {
  constructor(theDataLen: int64_t, theChunkLen: size_t, theIsPartialPayload: boolean)
  Init(theDataLen: int64_t, theChunkLen: size_t, theIsPartialPayload: boolean): void;
  IsDone(): boolean;
}

export declare class Standard_TooManyUsers extends Standard_LicenseError {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Standard_TooManyUsers_1 extends Standard_TooManyUsers {
    constructor();
  }

  export declare class Standard_TooManyUsers_2 extends Standard_TooManyUsers {
    constructor(theMessage: Standard_CString);
  }

export declare class Standard_Underflow extends Standard_NumericError {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Standard_Underflow_1 extends Standard_Underflow {
    constructor();
  }

  export declare class Standard_Underflow_2 extends Standard_Underflow {
    constructor(theMessage: Standard_CString);
  }

export declare class StdFail_Undefined extends Standard_Failure {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class StdFail_Undefined_1 extends StdFail_Undefined {
    constructor();
  }

  export declare class StdFail_Undefined_2 extends StdFail_Undefined {
    constructor(theMessage: Standard_CString);
  }

export declare class StdFail_UndefinedValue extends Standard_DomainError {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class StdFail_UndefinedValue_1 extends StdFail_UndefinedValue {
    constructor();
  }

  export declare class StdFail_UndefinedValue_2 extends StdFail_UndefinedValue {
    constructor(theMessage: Standard_CString);
  }

export declare class Storage {
  constructor();
  Version(): TCollection_AsciiString;
}

export declare class Storage_CallBack extends Standard_Transient {
  New(): any;
  Add(aPers: any, aSchema: any): void;
  Write(aPers: any, aDriver: any, aSchema: any): void;
  Read(aPers: any, aDriver: any, aSchema: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Storage_Bucket {
  Clear(): void;
}

  export declare class Storage_Bucket_1 extends Storage_Bucket {
    constructor();
  }

  export declare class Storage_Bucket_2 extends Storage_Bucket {
    constructor(theSpaceSize: Standard_Integer);
  }

export declare class Storage_BucketOfPersistent {
  constructor(theBucketSize: Standard_Integer, theBucketNumber: Standard_Integer)
  Length(): Standard_Integer;
  Append(sp: any): void;
  Value(theIndex: Standard_Integer): Standard_Persistent;
  Clear(): void;
}

export declare class Storage_BucketIterator {
  constructor(a: Storage_BucketOfPersistent)
  Init(a0: Storage_BucketOfPersistent): void;
  Reset(): void;
  Value(): Standard_Persistent;
  More(): Standard_Boolean;
  Next(): void;
}

export declare class Storage_TypedCallBack extends Standard_Transient {
  SetType(aType: TCollection_AsciiString): void;
  Type(): TCollection_AsciiString;
  SetCallBack(aCallBack: any): void;
  CallBack(): any;
  SetIndex(anIndex: Standard_Integer): void;
  Index(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Storage_TypedCallBack_1 extends Storage_TypedCallBack {
    constructor();
  }

  export declare class Storage_TypedCallBack_2 extends Storage_TypedCallBack {
    constructor(aTypeName: TCollection_AsciiString, aCallBack: any);
  }

export declare class Storage_DefaultCallBack extends Storage_CallBack {
  constructor()
  New(): any;
  Add(thePers: any, theSchema: any): void;
  Write(thePers: any, theDriver: any, theSchema: any): void;
  Read(thePers: any, theDriver: any, theSchema: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Storage_InternalData extends Standard_Transient {
  constructor()
  ReadArray(): any;
  Clear(): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Storage_Schema extends Standard_Transient {
  constructor()
  SetVersion(aVersion: TCollection_AsciiString): void;
  Version(): TCollection_AsciiString;
  SetName(aSchemaName: TCollection_AsciiString): void;
  Name(): TCollection_AsciiString;
  Write(s: any, aData: any): void;
  ICreationDate(): TCollection_AsciiString;
  CheckTypeMigration(theTypeName: TCollection_AsciiString, theNewName: TCollection_AsciiString): Standard_Boolean;
  AddReadUnknownTypeCallBack(aTypeName: TCollection_AsciiString, aCallBack: any): void;
  RemoveReadUnknownTypeCallBack(aTypeName: TCollection_AsciiString): void;
  InstalledCallBackList(): any;
  ClearCallBackList(): void;
  UseDefaultCallBack(): void;
  DontUseDefaultCallBack(): void;
  IsUsingDefaultCallBack(): Standard_Boolean;
  SetDefaultCallBack(f: any): void;
  ResetDefaultCallBack(): void;
  DefaultCallBack(): any;
  WritePersistentObjectHeader(sp: any, theDriver: any): void;
  WritePersistentReference(sp: any, theDriver: any): void;
  AddPersistent(sp: any, tName: Standard_CString): Standard_Boolean;
  PersistentToAdd(sp: any): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Storage_RootData extends Standard_Transient {
  constructor()
  Read(theDriver: any): Standard_Boolean;
  NumberOfRoots(): Standard_Integer;
  AddRoot(aRoot: any): void;
  Roots(): any;
  Find(aName: TCollection_AsciiString): any;
  IsRoot(aName: TCollection_AsciiString): Standard_Boolean;
  RemoveRoot(aName: TCollection_AsciiString): void;
  ErrorStatus(): Storage_Error;
  ErrorStatusExtension(): TCollection_AsciiString;
  ClearErrorStatus(): void;
  UpdateRoot(aName: TCollection_AsciiString, aPers: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Storage_StreamReadError extends Standard_Failure {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Storage_StreamReadError_1 extends Storage_StreamReadError {
    constructor();
  }

  export declare class Storage_StreamReadError_2 extends Storage_StreamReadError {
    constructor(theMessage: Standard_CString);
  }

export declare class Storage_StreamExtCharParityError extends Storage_StreamReadError {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Storage_StreamExtCharParityError_1 extends Storage_StreamExtCharParityError {
    constructor();
  }

  export declare class Storage_StreamExtCharParityError_2 extends Storage_StreamExtCharParityError {
    constructor(theMessage: Standard_CString);
  }

export declare class Storage_StreamFormatError extends Standard_Failure {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Storage_StreamFormatError_1 extends Storage_StreamFormatError {
    constructor();
  }

  export declare class Storage_StreamFormatError_2 extends Storage_StreamFormatError {
    constructor(theMessage: Standard_CString);
  }

export declare class Storage_StreamModeError extends Standard_Failure {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Storage_StreamModeError_1 extends Storage_StreamModeError {
    constructor();
  }

  export declare class Storage_StreamModeError_2 extends Storage_StreamModeError {
    constructor(theMessage: Standard_CString);
  }

export declare class Storage_StreamTypeMismatchError extends Storage_StreamReadError {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Storage_StreamTypeMismatchError_1 extends Storage_StreamTypeMismatchError {
    constructor();
  }

  export declare class Storage_StreamTypeMismatchError_2 extends Storage_StreamTypeMismatchError {
    constructor(theMessage: Standard_CString);
  }

export declare class Storage_StreamUnknownTypeError extends Storage_StreamReadError {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Storage_StreamUnknownTypeError_1 extends Storage_StreamUnknownTypeError {
    constructor();
  }

  export declare class Storage_StreamUnknownTypeError_2 extends Storage_StreamUnknownTypeError {
    constructor(theMessage: Standard_CString);
  }

export declare class Storage_StreamWriteError extends Standard_Failure {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Storage_StreamWriteError_1 extends Storage_StreamWriteError {
    constructor();
  }

  export declare class Storage_StreamWriteError_2 extends Storage_StreamWriteError {
    constructor(theMessage: Standard_CString);
  }

export declare class Storage_TypeData extends Standard_Transient {
  constructor()
  Read(theDriver: any): Standard_Boolean;
  NumberOfTypes(): Standard_Integer;
  AddType(aName: TCollection_AsciiString, aTypeNum: Standard_Integer): void;
  Type_1(aTypeNum: Standard_Integer): TCollection_AsciiString;
  Type_2(aTypeName: TCollection_AsciiString): Standard_Integer;
  IsType(aName: TCollection_AsciiString): Standard_Boolean;
  Types(): any;
  ErrorStatus(): Storage_Error;
  ErrorStatusExtension(): TCollection_AsciiString;
  ClearErrorStatus(): void;
  Clear(): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TCollection {
  constructor();
  NextPrimeForMap(I: Standard_Integer): Standard_Integer;
}

export declare class TCollection_BaseSequence {
  IsEmpty(): Standard_Boolean;
  Length(): Standard_Integer;
  Reverse(): void;
  Exchange(I: Standard_Integer, J: Standard_Integer): void;
}

export declare class TCollection_MapNode extends Standard_Transient {
  constructor(n: TCollection_MapNodePtr)
  Next(): TCollection_MapNodePtr;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TCollection_SeqNode extends Standard_Transient {
  constructor(n: TCollection_SeqNodePtr, p: TCollection_SeqNodePtr)
  Next(): TCollection_SeqNodePtr;
  Previous(): TCollection_SeqNodePtr;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Units {
  constructor();
  UnitsFile(afile: Standard_CString): void;
  LexiconFile(afile: Standard_CString): void;
  DictionaryOfUnits(amode: Standard_Boolean): any;
  Quantity(aquantity: Standard_CString): any;
  FirstQuantity(aunit: Standard_CString): Standard_CString;
  LexiconUnits(amode: Standard_Boolean): any;
  LexiconFormula(): any;
  NullDimensions(): any;
  Convert(avalue: Standard_Real, afirstunit: Standard_CString, asecondunit: Standard_CString): Standard_Real;
  ToSI_1(aData: Standard_Real, aUnit: Standard_CString): Standard_Real;
  ToSI_2(aData: Standard_Real, aUnit: Standard_CString, aDim: any): Standard_Real;
  FromSI_1(aData: Standard_Real, aUnit: Standard_CString): Standard_Real;
  FromSI_2(aData: Standard_Real, aUnit: Standard_CString, aDim: any): Standard_Real;
  Dimensions(aType: Standard_CString): any;
}

export declare class Units_Dimensions extends Standard_Transient {
  constructor(amass: Standard_Real, alength: Standard_Real, atime: Standard_Real, anelectriccurrent: Standard_Real, athermodynamictemperature: Standard_Real, anamountofsubstance: Standard_Real, aluminousintensity: Standard_Real, aplaneangle: Standard_Real, asolidangle: Standard_Real)
  Mass(): Standard_Real;
  Length(): Standard_Real;
  Time(): Standard_Real;
  ElectricCurrent(): Standard_Real;
  ThermodynamicTemperature(): Standard_Real;
  AmountOfSubstance(): Standard_Real;
  LuminousIntensity(): Standard_Real;
  PlaneAngle(): Standard_Real;
  SolidAngle(): Standard_Real;
  Quantity(): Standard_CString;
  Multiply(adimensions: any): any;
  Divide(adimensions: any): any;
  Power(anexponent: Standard_Real): any;
  IsEqual(adimensions: any): Standard_Boolean;
  IsNotEqual(adimensions: any): Standard_Boolean;
  Dump(ashift: Standard_Integer): void;
  ALess(): any;
  AMass(): any;
  ALength(): any;
  ATime(): any;
  AElectricCurrent(): any;
  AThermodynamicTemperature(): any;
  AAmountOfSubstance(): any;
  ALuminousIntensity(): any;
  APlaneAngle(): any;
  ASolidAngle(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Units_Unit extends Standard_Transient {
  Name(): TCollection_AsciiString;
  Symbol(asymbol: Standard_CString): void;
  Value_1(): Standard_Real;
  Quantity_1(): any;
  SymbolsSequence(): any;
  Value_2(avalue: Standard_Real): void;
  Quantity_2(aquantity: any): void;
  Token(): any;
  IsEqual(astring: Standard_CString): Standard_Boolean;
  Dump(ashift: Standard_Integer, alevel: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Units_Unit_1 extends Units_Unit {
    constructor(aname: Standard_CString, asymbol: Standard_CString, avalue: Standard_Real, aquantity: any);
  }

  export declare class Units_Unit_2 extends Units_Unit {
    constructor(aname: Standard_CString, asymbol: Standard_CString);
  }

  export declare class Units_Unit_3 extends Units_Unit {
    constructor(aname: Standard_CString);
  }

export declare class Units_Quantity extends Standard_Transient {
  constructor(aname: Standard_CString, adimensions: any, aunitssequence: any)
  Name(): TCollection_AsciiString;
  Dimensions(): any;
  Sequence(): any;
  IsEqual(astring: Standard_CString): Standard_Boolean;
  Dump(ashift: Standard_Integer, alevel: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Units_Explorer {
  Init_1(aunitssystem: any): void;
  Init_2(aunitsdictionary: any): void;
  Init_3(aunitssystem: any, aquantity: Standard_CString): void;
  Init_4(aunitsdictionary: any, aquantity: Standard_CString): void;
  MoreQuantity(): Standard_Boolean;
  NextQuantity(): void;
  Quantity(): TCollection_AsciiString;
  MoreUnit(): Standard_Boolean;
  NextUnit(): void;
  Unit(): TCollection_AsciiString;
  IsActive(): Standard_Boolean;
}

  export declare class Units_Explorer_1 extends Units_Explorer {
    constructor();
  }

  export declare class Units_Explorer_2 extends Units_Explorer {
    constructor(aunitssystem: any);
  }

  export declare class Units_Explorer_3 extends Units_Explorer {
    constructor(aunitsdictionary: any);
  }

  export declare class Units_Explorer_4 extends Units_Explorer {
    constructor(aunitssystem: any, aquantity: Standard_CString);
  }

  export declare class Units_Explorer_5 extends Units_Explorer {
    constructor(aunitsdictionary: any, aquantity: Standard_CString);
  }

export declare class Units_Token extends Standard_Transient {
  Creates(): any;
  Length(): Standard_Integer;
  Word_1(): TCollection_AsciiString;
  Word_2(aword: Standard_CString): void;
  Mean_1(): TCollection_AsciiString;
  Mean_2(amean: Standard_CString): void;
  Value_1(): Standard_Real;
  Value_2(avalue: Standard_Real): void;
  Dimensions_1(): any;
  Dimensions_2(adimensions: any): void;
  Update(amean: Standard_CString): void;
  Add_1(aninteger: Standard_Integer): any;
  Add_2(atoken: any): any;
  Subtract(atoken: any): any;
  Multiply(atoken: any): any;
  Multiplied(avalue: Standard_Real): Standard_Real;
  Divide(atoken: any): any;
  Divided(avalue: Standard_Real): Standard_Real;
  Power_1(atoken: any): any;
  Power_2(anexponent: Standard_Real): any;
  IsEqual_1(astring: Standard_CString): Standard_Boolean;
  IsEqual_2(atoken: any): Standard_Boolean;
  IsNotEqual_1(astring: Standard_CString): Standard_Boolean;
  IsNotEqual_2(atoken: any): Standard_Boolean;
  IsLessOrEqual(astring: Standard_CString): Standard_Boolean;
  IsGreater_1(astring: Standard_CString): Standard_Boolean;
  IsGreater_2(atoken: any): Standard_Boolean;
  IsGreaterOrEqual(atoken: any): Standard_Boolean;
  Dump(ashift: Standard_Integer, alevel: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Units_Token_1 extends Units_Token {
    constructor();
  }

  export declare class Units_Token_2 extends Units_Token {
    constructor(aword: Standard_CString);
  }

  export declare class Units_Token_3 extends Units_Token {
    constructor(atoken: any);
  }

  export declare class Units_Token_4 extends Units_Token {
    constructor(aword: Standard_CString, amean: Standard_CString);
  }

  export declare class Units_Token_5 extends Units_Token {
    constructor(aword: Standard_CString, amean: Standard_CString, avalue: Standard_Real);
  }

  export declare class Units_Token_6 extends Units_Token {
    constructor(aword: Standard_CString, amean: Standard_CString, avalue: Standard_Real, adimension: any);
  }

export declare class Units_Lexicon extends Standard_Transient {
  constructor()
  Creates(): void;
  Sequence(): any;
  AddToken(aword: Standard_CString, amean: Standard_CString, avalue: Standard_Real): void;
  Dump(): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Units_Sentence {
  constructor(alexicon: any, astring: Standard_CString)
  SetConstants(): void;
  Sequence_1(): any;
  Sequence_2(asequenceoftokens: any): void;
  Evaluate(): any;
  IsDone(): Standard_Boolean;
  Dump(): void;
}

export declare class Units_MathSentence extends Units_Sentence {
  constructor(astring: Standard_CString)
}

export declare class Units_Measurement {
  Convert(aunit: Standard_CString): void;
  Integer(): Units_Measurement;
  Fractional(): Units_Measurement;
  Measurement(): Standard_Real;
  Token(): any;
  Add(ameasurement: Units_Measurement): Units_Measurement;
  Subtract(ameasurement: Units_Measurement): Units_Measurement;
  Multiply_1(ameasurement: Units_Measurement): Units_Measurement;
  Multiply_2(avalue: Standard_Real): Units_Measurement;
  Divide_1(ameasurement: Units_Measurement): Units_Measurement;
  Divide_2(avalue: Standard_Real): Units_Measurement;
  Power(anexponent: Standard_Real): Units_Measurement;
  HasToken(): Standard_Boolean;
  Dump(): void;
}

  export declare class Units_Measurement_1 extends Units_Measurement {
    constructor();
  }

  export declare class Units_Measurement_2 extends Units_Measurement {
    constructor(avalue: Standard_Real, atoken: any);
  }

  export declare class Units_Measurement_3 extends Units_Measurement {
    constructor(avalue: Standard_Real, aunit: Standard_CString);
  }

export declare class Units_NoSuchType extends Standard_NoSuchObject {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Units_NoSuchType_1 extends Units_NoSuchType {
    constructor();
  }

  export declare class Units_NoSuchType_2 extends Units_NoSuchType {
    constructor(theMessage: Standard_CString);
  }

export declare class Units_NoSuchUnit extends Standard_NoSuchObject {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Units_NoSuchUnit_1 extends Units_NoSuchUnit {
    constructor();
  }

  export declare class Units_NoSuchUnit_2 extends Units_NoSuchUnit {
    constructor(theMessage: Standard_CString);
  }

export declare class Units_ShiftedToken extends Units_Token {
  constructor(aword: Standard_CString, amean: Standard_CString, avalue: Standard_Real, amove: Standard_Real, adimensions: any)
  Creates(): any;
  Move(): Standard_Real;
  Multiplied(avalue: Standard_Real): Standard_Real;
  Divided(avalue: Standard_Real): Standard_Real;
  Dump(ashift: Standard_Integer, alevel: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Units_ShiftedUnit extends Units_Unit {
  Move_1(amove: Standard_Real): void;
  Move_2(): Standard_Real;
  Token(): any;
  Dump(ashift: Standard_Integer, alevel: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Units_ShiftedUnit_1 extends Units_ShiftedUnit {
    constructor(aname: Standard_CString, asymbol: Standard_CString, avalue: Standard_Real, amove: Standard_Real, aquantity: any);
  }

  export declare class Units_ShiftedUnit_2 extends Units_ShiftedUnit {
    constructor(aname: Standard_CString, asymbol: Standard_CString);
  }

  export declare class Units_ShiftedUnit_3 extends Units_ShiftedUnit {
    constructor(aname: Standard_CString);
  }

export declare class Units_UnitSentence extends Units_Sentence {
  Analyse(): void;
  SetUnits(aquantitiessequence: any): void;
}

  export declare class Units_UnitSentence_1 extends Units_UnitSentence {
    constructor(astring: Standard_CString);
  }

  export declare class Units_UnitSentence_2 extends Units_UnitSentence {
    constructor(astring: Standard_CString, aquantitiessequence: any);
  }

export declare class Units_UnitsDictionary extends Standard_Transient {
  constructor()
  Creates(): void;
  Sequence(): any;
  ActiveUnit(aquantity: Standard_CString): TCollection_AsciiString;
  Dump_1(alevel: Standard_Integer): void;
  Dump_2(adimensions: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Units_UnitsLexicon extends Units_Lexicon {
  constructor()
  Creates(amode: Standard_Boolean): void;
  Dump(): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Units_UnitsSystem extends Standard_Transient {
  QuantitiesSequence(): any;
  ActiveUnitsSequence(): any;
  Specify(aquantity: Standard_CString, aunit: Standard_CString): void;
  Remove(aquantity: Standard_CString, aunit: Standard_CString): void;
  Activate(aquantity: Standard_CString, aunit: Standard_CString): void;
  Activates(): void;
  ActiveUnit(aquantity: Standard_CString): TCollection_AsciiString;
  ConvertValueToUserSystem(aquantity: Standard_CString, avalue: Standard_Real, aunit: Standard_CString): Standard_Real;
  ConvertSIValueToUserSystem(aquantity: Standard_CString, avalue: Standard_Real): Standard_Real;
  ConvertUserSystemValueToSI(aquantity: Standard_CString, avalue: Standard_Real): Standard_Real;
  Dump(): void;
  IsEmpty(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Units_UnitsSystem_1 extends Units_UnitsSystem {
    constructor();
  }

  export declare class Units_UnitsSystem_2 extends Units_UnitsSystem {
    constructor(aName: Standard_CString, Verbose: Standard_Boolean);
  }

export declare class UnitsAPI {
  constructor();
  CurrentToLS(aData: Standard_Real, aQuantity: Standard_CString): Standard_Real;
  CurrentToSI(aData: Standard_Real, aQuantity: Standard_CString): Standard_Real;
  CurrentFromLS(aData: Standard_Real, aQuantity: Standard_CString): Standard_Real;
  CurrentFromSI(aData: Standard_Real, aQuantity: Standard_CString): Standard_Real;
  AnyToLS_1(aData: Standard_Real, aUnit: Standard_CString): Standard_Real;
  AnyToLS_2(aData: Standard_Real, aUnit: Standard_CString, aDim: any): Standard_Real;
  AnyToSI_1(aData: Standard_Real, aUnit: Standard_CString): Standard_Real;
  AnyToSI_2(aData: Standard_Real, aUnit: Standard_CString, aDim: any): Standard_Real;
  AnyFromLS(aData: Standard_Real, aUnit: Standard_CString): Standard_Real;
  AnyFromSI(aData: Standard_Real, aUnit: Standard_CString): Standard_Real;
  CurrentToAny(aData: Standard_Real, aQuantity: Standard_CString, aUnit: Standard_CString): Standard_Real;
  CurrentFromAny(aData: Standard_Real, aQuantity: Standard_CString, aUnit: Standard_CString): Standard_Real;
  AnyToAny(aData: Standard_Real, aUnit1: Standard_CString, aUnit2: Standard_CString): Standard_Real;
  LSToSI(aData: Standard_Real, aQuantity: Standard_CString): Standard_Real;
  SIToLS(aData: Standard_Real, aQuantity: Standard_CString): Standard_Real;
  SetLocalSystem(aSystemUnit: UnitsAPI_SystemUnits): void;
  LocalSystem(): UnitsAPI_SystemUnits;
  SetCurrentUnit(aQuantity: Standard_CString, aUnit: Standard_CString): void;
  CurrentUnit(aQuantity: Standard_CString): Standard_CString;
  Save(): void;
  Reload(): void;
  Dimensions(aQuantity: Standard_CString): any;
  DimensionLess(): any;
  DimensionMass(): any;
  DimensionLength(): any;
  DimensionTime(): any;
  DimensionElectricCurrent(): any;
  DimensionThermodynamicTemperature(): any;
  DimensionAmountOfSubstance(): any;
  DimensionLuminousIntensity(): any;
  DimensionPlaneAngle(): any;
  DimensionSolidAngle(): any;
  Check(aQuantity: Standard_CString, aUnit: Standard_CString): Standard_Boolean;
}

export declare class Handle_Standard_Transient {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Standard_Transient): void;
  get(): Standard_Transient;
}

  export declare class Handle_Standard_Transient_1 extends Handle_Standard_Transient {
    constructor();
  }

  export declare class Handle_Standard_Transient_2 extends Handle_Standard_Transient {
    constructor(thePtr: Standard_Transient);
  }

  export declare class Handle_Standard_Transient_3 extends Handle_Standard_Transient {
    constructor(theHandle: Handle_Standard_Transient);
  }

  export declare class Handle_Standard_Transient_4 extends Handle_Standard_Transient {
    constructor(theHandle: Handle_Standard_Transient);
  }

export declare class Handle_Standard_Type {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Standard_Type): void;
  get(): Standard_Type;
}

  export declare class Handle_Standard_Type_1 extends Handle_Standard_Type {
    constructor();
  }

  export declare class Handle_Standard_Type_2 extends Handle_Standard_Type {
    constructor(thePtr: Standard_Type);
  }

  export declare class Handle_Standard_Type_3 extends Handle_Standard_Type {
    constructor(theHandle: Handle_Standard_Type);
  }

  export declare class Handle_Standard_Type_4 extends Handle_Standard_Type {
    constructor(theHandle: Handle_Standard_Type);
  }

export declare class Handle_Standard_Failure {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Standard_Failure): void;
  get(): Standard_Failure;
}

  export declare class Handle_Standard_Failure_1 extends Handle_Standard_Failure {
    constructor();
  }

  export declare class Handle_Standard_Failure_2 extends Handle_Standard_Failure {
    constructor(thePtr: Standard_Failure);
  }

  export declare class Handle_Standard_Failure_3 extends Handle_Standard_Failure {
    constructor(theHandle: Handle_Standard_Failure);
  }

  export declare class Handle_Standard_Failure_4 extends Handle_Standard_Failure {
    constructor(theHandle: Handle_Standard_Failure);
  }

export declare class Handle_Standard_DomainError {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Standard_DomainError): void;
  get(): Standard_DomainError;
}

  export declare class Handle_Standard_DomainError_1 extends Handle_Standard_DomainError {
    constructor();
  }

  export declare class Handle_Standard_DomainError_2 extends Handle_Standard_DomainError {
    constructor(thePtr: Standard_DomainError);
  }

  export declare class Handle_Standard_DomainError_3 extends Handle_Standard_DomainError {
    constructor(theHandle: Handle_Standard_DomainError);
  }

  export declare class Handle_Standard_DomainError_4 extends Handle_Standard_DomainError {
    constructor(theHandle: Handle_Standard_DomainError);
  }

export declare class Handle_Standard_RangeError {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Standard_RangeError): void;
  get(): Standard_RangeError;
}

  export declare class Handle_Standard_RangeError_1 extends Handle_Standard_RangeError {
    constructor();
  }

  export declare class Handle_Standard_RangeError_2 extends Handle_Standard_RangeError {
    constructor(thePtr: Standard_RangeError);
  }

  export declare class Handle_Standard_RangeError_3 extends Handle_Standard_RangeError {
    constructor(theHandle: Handle_Standard_RangeError);
  }

  export declare class Handle_Standard_RangeError_4 extends Handle_Standard_RangeError {
    constructor(theHandle: Handle_Standard_RangeError);
  }

export declare class Handle_Standard_OutOfRange {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Standard_OutOfRange): void;
  get(): Standard_OutOfRange;
}

  export declare class Handle_Standard_OutOfRange_1 extends Handle_Standard_OutOfRange {
    constructor();
  }

  export declare class Handle_Standard_OutOfRange_2 extends Handle_Standard_OutOfRange {
    constructor(thePtr: Standard_OutOfRange);
  }

  export declare class Handle_Standard_OutOfRange_3 extends Handle_Standard_OutOfRange {
    constructor(theHandle: Handle_Standard_OutOfRange);
  }

  export declare class Handle_Standard_OutOfRange_4 extends Handle_Standard_OutOfRange {
    constructor(theHandle: Handle_Standard_OutOfRange);
  }

export declare class Handle_Standard_ConstructionError {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Standard_ConstructionError): void;
  get(): Standard_ConstructionError;
}

  export declare class Handle_Standard_ConstructionError_1 extends Handle_Standard_ConstructionError {
    constructor();
  }

  export declare class Handle_Standard_ConstructionError_2 extends Handle_Standard_ConstructionError {
    constructor(thePtr: Standard_ConstructionError);
  }

  export declare class Handle_Standard_ConstructionError_3 extends Handle_Standard_ConstructionError {
    constructor(theHandle: Handle_Standard_ConstructionError);
  }

  export declare class Handle_Standard_ConstructionError_4 extends Handle_Standard_ConstructionError {
    constructor(theHandle: Handle_Standard_ConstructionError);
  }

export declare class Handle_NCollection_BaseAllocator {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: NCollection_BaseAllocator): void;
  get(): NCollection_BaseAllocator;
}

  export declare class Handle_NCollection_BaseAllocator_1 extends Handle_NCollection_BaseAllocator {
    constructor();
  }

  export declare class Handle_NCollection_BaseAllocator_2 extends Handle_NCollection_BaseAllocator {
    constructor(thePtr: NCollection_BaseAllocator);
  }

  export declare class Handle_NCollection_BaseAllocator_3 extends Handle_NCollection_BaseAllocator {
    constructor(theHandle: Handle_NCollection_BaseAllocator);
  }

  export declare class Handle_NCollection_BaseAllocator_4 extends Handle_NCollection_BaseAllocator {
    constructor(theHandle: Handle_NCollection_BaseAllocator);
  }

export declare class Handle_Standard_TypeMismatch {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Standard_TypeMismatch): void;
  get(): Standard_TypeMismatch;
}

  export declare class Handle_Standard_TypeMismatch_1 extends Handle_Standard_TypeMismatch {
    constructor();
  }

  export declare class Handle_Standard_TypeMismatch_2 extends Handle_Standard_TypeMismatch {
    constructor(thePtr: Standard_TypeMismatch);
  }

  export declare class Handle_Standard_TypeMismatch_3 extends Handle_Standard_TypeMismatch {
    constructor(theHandle: Handle_Standard_TypeMismatch);
  }

  export declare class Handle_Standard_TypeMismatch_4 extends Handle_Standard_TypeMismatch {
    constructor(theHandle: Handle_Standard_TypeMismatch);
  }

export declare class Handle_Standard_NoSuchObject {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Standard_NoSuchObject): void;
  get(): Standard_NoSuchObject;
}

  export declare class Handle_Standard_NoSuchObject_1 extends Handle_Standard_NoSuchObject {
    constructor();
  }

  export declare class Handle_Standard_NoSuchObject_2 extends Handle_Standard_NoSuchObject {
    constructor(thePtr: Standard_NoSuchObject);
  }

  export declare class Handle_Standard_NoSuchObject_3 extends Handle_Standard_NoSuchObject {
    constructor(theHandle: Handle_Standard_NoSuchObject);
  }

  export declare class Handle_Standard_NoSuchObject_4 extends Handle_Standard_NoSuchObject {
    constructor(theHandle: Handle_Standard_NoSuchObject);
  }

export declare class Handle_Standard_ProgramError {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Standard_ProgramError): void;
  get(): Standard_ProgramError;
}

  export declare class Handle_Standard_ProgramError_1 extends Handle_Standard_ProgramError {
    constructor();
  }

  export declare class Handle_Standard_ProgramError_2 extends Handle_Standard_ProgramError {
    constructor(thePtr: Standard_ProgramError);
  }

  export declare class Handle_Standard_ProgramError_3 extends Handle_Standard_ProgramError {
    constructor(theHandle: Handle_Standard_ProgramError);
  }

  export declare class Handle_Standard_ProgramError_4 extends Handle_Standard_ProgramError {
    constructor(theHandle: Handle_Standard_ProgramError);
  }

export declare class Handle_Standard_DimensionError {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Standard_DimensionError): void;
  get(): Standard_DimensionError;
}

  export declare class Handle_Standard_DimensionError_1 extends Handle_Standard_DimensionError {
    constructor();
  }

  export declare class Handle_Standard_DimensionError_2 extends Handle_Standard_DimensionError {
    constructor(thePtr: Standard_DimensionError);
  }

  export declare class Handle_Standard_DimensionError_3 extends Handle_Standard_DimensionError {
    constructor(theHandle: Handle_Standard_DimensionError);
  }

  export declare class Handle_Standard_DimensionError_4 extends Handle_Standard_DimensionError {
    constructor(theHandle: Handle_Standard_DimensionError);
  }

export declare class Handle_Standard_DimensionMismatch {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Standard_DimensionMismatch): void;
  get(): Standard_DimensionMismatch;
}

  export declare class Handle_Standard_DimensionMismatch_1 extends Handle_Standard_DimensionMismatch {
    constructor();
  }

  export declare class Handle_Standard_DimensionMismatch_2 extends Handle_Standard_DimensionMismatch {
    constructor(thePtr: Standard_DimensionMismatch);
  }

  export declare class Handle_Standard_DimensionMismatch_3 extends Handle_Standard_DimensionMismatch {
    constructor(theHandle: Handle_Standard_DimensionMismatch);
  }

  export declare class Handle_Standard_DimensionMismatch_4 extends Handle_Standard_DimensionMismatch {
    constructor(theHandle: Handle_Standard_DimensionMismatch);
  }

export declare class Handle_Standard_OutOfMemory {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Standard_OutOfMemory): void;
  get(): Standard_OutOfMemory;
}

  export declare class Handle_Standard_OutOfMemory_1 extends Handle_Standard_OutOfMemory {
    constructor();
  }

  export declare class Handle_Standard_OutOfMemory_2 extends Handle_Standard_OutOfMemory {
    constructor(thePtr: Standard_OutOfMemory);
  }

  export declare class Handle_Standard_OutOfMemory_3 extends Handle_Standard_OutOfMemory {
    constructor(theHandle: Handle_Standard_OutOfMemory);
  }

  export declare class Handle_Standard_OutOfMemory_4 extends Handle_Standard_OutOfMemory {
    constructor(theHandle: Handle_Standard_OutOfMemory);
  }

export declare class TColStd_Array1OfByte {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: Standard_Byte): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: TColStd_Array1OfByte): TColStd_Array1OfByte;
  Move(theOther: TColStd_Array1OfByte): TColStd_Array1OfByte;
  First(): Standard_Byte;
  ChangeFirst(): Standard_Byte;
  Last(): Standard_Byte;
  ChangeLast(): Standard_Byte;
  Value(theIndex: Standard_Integer): Standard_Byte;
  ChangeValue(theIndex: Standard_Integer): Standard_Byte;
  SetValue(theIndex: Standard_Integer, theItem: Standard_Byte): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class TColStd_Array1OfByte_1 extends TColStd_Array1OfByte {
    constructor();
  }

  export declare class TColStd_Array1OfByte_2 extends TColStd_Array1OfByte {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class TColStd_Array1OfByte_3 extends TColStd_Array1OfByte {
    constructor(theOther: TColStd_Array1OfByte);
  }

  export declare class TColStd_Array1OfByte_4 extends TColStd_Array1OfByte {
    constructor(theOther: TColStd_Array1OfByte);
  }

  export declare class TColStd_Array1OfByte_5 extends TColStd_Array1OfByte {
    constructor(theBegin: Standard_Byte, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_TColStd_HArray1OfByte {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColStd_HArray1OfByte): void;
  get(): TColStd_HArray1OfByte;
}

  export declare class Handle_TColStd_HArray1OfByte_1 extends Handle_TColStd_HArray1OfByte {
    constructor();
  }

  export declare class Handle_TColStd_HArray1OfByte_2 extends Handle_TColStd_HArray1OfByte {
    constructor(thePtr: TColStd_HArray1OfByte);
  }

  export declare class Handle_TColStd_HArray1OfByte_3 extends Handle_TColStd_HArray1OfByte {
    constructor(theHandle: Handle_TColStd_HArray1OfByte);
  }

  export declare class Handle_TColStd_HArray1OfByte_4 extends Handle_TColStd_HArray1OfByte {
    constructor(theHandle: Handle_TColStd_HArray1OfByte);
  }

export declare class Handle_NCollection_Buffer {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: NCollection_Buffer): void;
  get(): NCollection_Buffer;
}

  export declare class Handle_NCollection_Buffer_1 extends Handle_NCollection_Buffer {
    constructor();
  }

  export declare class Handle_NCollection_Buffer_2 extends Handle_NCollection_Buffer {
    constructor(thePtr: NCollection_Buffer);
  }

  export declare class Handle_NCollection_Buffer_3 extends Handle_NCollection_Buffer {
    constructor(theHandle: Handle_NCollection_Buffer);
  }

  export declare class Handle_NCollection_Buffer_4 extends Handle_NCollection_Buffer {
    constructor(theHandle: Handle_NCollection_Buffer);
  }

export declare class Handle_TCollection_HAsciiString {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TCollection_HAsciiString): void;
  get(): TCollection_HAsciiString;
}

  export declare class Handle_TCollection_HAsciiString_1 extends Handle_TCollection_HAsciiString {
    constructor();
  }

  export declare class Handle_TCollection_HAsciiString_2 extends Handle_TCollection_HAsciiString {
    constructor(thePtr: TCollection_HAsciiString);
  }

  export declare class Handle_TCollection_HAsciiString_3 extends Handle_TCollection_HAsciiString {
    constructor(theHandle: Handle_TCollection_HAsciiString);
  }

  export declare class Handle_TCollection_HAsciiString_4 extends Handle_TCollection_HAsciiString {
    constructor(theHandle: Handle_TCollection_HAsciiString);
  }

export declare class Handle_Standard_NotImplemented {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Standard_NotImplemented): void;
  get(): Standard_NotImplemented;
}

  export declare class Handle_Standard_NotImplemented_1 extends Handle_Standard_NotImplemented {
    constructor();
  }

  export declare class Handle_Standard_NotImplemented_2 extends Handle_Standard_NotImplemented {
    constructor(thePtr: Standard_NotImplemented);
  }

  export declare class Handle_Standard_NotImplemented_3 extends Handle_Standard_NotImplemented {
    constructor(theHandle: Handle_Standard_NotImplemented);
  }

  export declare class Handle_Standard_NotImplemented_4 extends Handle_Standard_NotImplemented {
    constructor(theHandle: Handle_Standard_NotImplemented);
  }

export declare class TColStd_ListOfInteger extends NCollection_BaseList {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Assign(theOther: TColStd_ListOfInteger): TColStd_ListOfInteger;
  Clear(theAllocator: Handle_NCollection_BaseAllocator): void;
  First_1(): Standard_Integer;
  First_2(): Standard_Integer;
  Last_1(): Standard_Integer;
  Last_2(): Standard_Integer;
  Append_1(theItem: Standard_Integer): Standard_Integer;
  Append_3(theOther: TColStd_ListOfInteger): void;
  Prepend_1(theItem: Standard_Integer): Standard_Integer;
  Prepend_2(theOther: TColStd_ListOfInteger): void;
  RemoveFirst(): void;
  Reverse(): void;
}

  export declare class TColStd_ListOfInteger_1 extends TColStd_ListOfInteger {
    constructor();
  }

  export declare class TColStd_ListOfInteger_2 extends TColStd_ListOfInteger {
    constructor(theAllocator: Handle_NCollection_BaseAllocator);
  }

  export declare class TColStd_ListOfInteger_3 extends TColStd_ListOfInteger {
    constructor(theOther: TColStd_ListOfInteger);
  }

export declare class TColStd_IndexedDataMapOfStringString extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TColStd_IndexedDataMapOfStringString): void;
  Assign(theOther: TColStd_IndexedDataMapOfStringString): TColStd_IndexedDataMapOfStringString;
  ReSize(N: Standard_Integer): void;
  Add(theKey1: TCollection_AsciiString, theItem: TCollection_AsciiString): Standard_Integer;
  Contains(theKey1: TCollection_AsciiString): Standard_Boolean;
  Substitute(theIndex: Standard_Integer, theKey1: TCollection_AsciiString, theItem: TCollection_AsciiString): void;
  Swap(theIndex1: Standard_Integer, theIndex2: Standard_Integer): void;
  RemoveLast(): void;
  RemoveFromIndex(theIndex: Standard_Integer): void;
  RemoveKey(theKey1: TCollection_AsciiString): void;
  FindKey(theIndex: Standard_Integer): TCollection_AsciiString;
  FindFromIndex(theIndex: Standard_Integer): TCollection_AsciiString;
  ChangeFromIndex(theIndex: Standard_Integer): TCollection_AsciiString;
  FindIndex(theKey1: TCollection_AsciiString): Standard_Integer;
  FindFromKey_1(theKey1: TCollection_AsciiString): TCollection_AsciiString;
  ChangeFromKey(theKey1: TCollection_AsciiString): TCollection_AsciiString;
  Seek(theKey1: TCollection_AsciiString): TCollection_AsciiString;
  ChangeSeek(theKey1: TCollection_AsciiString): TCollection_AsciiString;
  FindFromKey_2(theKey1: TCollection_AsciiString, theValue: TCollection_AsciiString): Standard_Boolean;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: Handle_NCollection_BaseAllocator): void;
  Size(): Standard_Integer;
}

  export declare class TColStd_IndexedDataMapOfStringString_1 extends TColStd_IndexedDataMapOfStringString {
    constructor();
  }

  export declare class TColStd_IndexedDataMapOfStringString_2 extends TColStd_IndexedDataMapOfStringString {
    constructor(theNbBuckets: Standard_Integer, theAllocator: Handle_NCollection_BaseAllocator);
  }

  export declare class TColStd_IndexedDataMapOfStringString_3 extends TColStd_IndexedDataMapOfStringString {
    constructor(theOther: TColStd_IndexedDataMapOfStringString);
  }

export declare class TColStd_Array2OfReal {
  Init(theValue: Standard_Real): void;
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
  Assign(theOther: TColStd_Array2OfReal): TColStd_Array2OfReal;
  Move(theOther: TColStd_Array2OfReal): TColStd_Array2OfReal;
  Value(theRow: Standard_Integer, theCol: Standard_Integer): Standard_Real;
  ChangeValue(theRow: Standard_Integer, theCol: Standard_Integer): Standard_Real;
  SetValue(theRow: Standard_Integer, theCol: Standard_Integer, theItem: Standard_Real): void;
  Resize(theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class TColStd_Array2OfReal_1 extends TColStd_Array2OfReal {
    constructor();
  }

  export declare class TColStd_Array2OfReal_2 extends TColStd_Array2OfReal {
    constructor(theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer);
  }

  export declare class TColStd_Array2OfReal_3 extends TColStd_Array2OfReal {
    constructor(theOther: TColStd_Array2OfReal);
  }

  export declare class TColStd_Array2OfReal_4 extends TColStd_Array2OfReal {
    constructor(theOther: TColStd_Array2OfReal);
  }

  export declare class TColStd_Array2OfReal_5 extends TColStd_Array2OfReal {
    constructor(theBegin: Standard_Real, theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer);
  }

export declare class TColStd_SequenceOfInteger extends NCollection_BaseSequence {
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
  delNode(theNode: NCollection_SeqNode, theAl: Handle_NCollection_BaseAllocator): void;
  Clear(theAllocator: Handle_NCollection_BaseAllocator): void;
  Assign(theOther: TColStd_SequenceOfInteger): TColStd_SequenceOfInteger;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: Standard_Integer): void;
  Append_2(theSeq: TColStd_SequenceOfInteger): void;
  Prepend_1(theItem: Standard_Integer): void;
  Prepend_2(theSeq: TColStd_SequenceOfInteger): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: Standard_Integer): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: TColStd_SequenceOfInteger): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: TColStd_SequenceOfInteger): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: Standard_Integer): void;
  Split(theIndex: Standard_Integer, theSeq: TColStd_SequenceOfInteger): void;
  First(): Standard_Integer;
  ChangeFirst(): Standard_Integer;
  Last(): Standard_Integer;
  ChangeLast(): Standard_Integer;
  Value(theIndex: Standard_Integer): Standard_Integer;
  ChangeValue(theIndex: Standard_Integer): Standard_Integer;
  SetValue(theIndex: Standard_Integer, theItem: Standard_Integer): void;
}

  export declare class TColStd_SequenceOfInteger_1 extends TColStd_SequenceOfInteger {
    constructor();
  }

  export declare class TColStd_SequenceOfInteger_2 extends TColStd_SequenceOfInteger {
    constructor(theAllocator: Handle_NCollection_BaseAllocator);
  }

  export declare class TColStd_SequenceOfInteger_3 extends TColStd_SequenceOfInteger {
    constructor(theOther: TColStd_SequenceOfInteger);
  }

export declare class TColStd_Array1OfInteger {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: Standard_Integer): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: TColStd_Array1OfInteger): TColStd_Array1OfInteger;
  Move(theOther: TColStd_Array1OfInteger): TColStd_Array1OfInteger;
  First(): Standard_Integer;
  ChangeFirst(): Standard_Integer;
  Last(): Standard_Integer;
  ChangeLast(): Standard_Integer;
  Value(theIndex: Standard_Integer): Standard_Integer;
  ChangeValue(theIndex: Standard_Integer): Standard_Integer;
  SetValue(theIndex: Standard_Integer, theItem: Standard_Integer): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class TColStd_Array1OfInteger_1 extends TColStd_Array1OfInteger {
    constructor();
  }

  export declare class TColStd_Array1OfInteger_2 extends TColStd_Array1OfInteger {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class TColStd_Array1OfInteger_3 extends TColStd_Array1OfInteger {
    constructor(theOther: TColStd_Array1OfInteger);
  }

  export declare class TColStd_Array1OfInteger_4 extends TColStd_Array1OfInteger {
    constructor(theOther: TColStd_Array1OfInteger);
  }

  export declare class TColStd_Array1OfInteger_5 extends TColStd_Array1OfInteger {
    constructor(theBegin: Standard_Integer, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_TColStd_HArray1OfInteger {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColStd_HArray1OfInteger): void;
  get(): TColStd_HArray1OfInteger;
}

  export declare class Handle_TColStd_HArray1OfInteger_1 extends Handle_TColStd_HArray1OfInteger {
    constructor();
  }

  export declare class Handle_TColStd_HArray1OfInteger_2 extends Handle_TColStd_HArray1OfInteger {
    constructor(thePtr: TColStd_HArray1OfInteger);
  }

  export declare class Handle_TColStd_HArray1OfInteger_3 extends Handle_TColStd_HArray1OfInteger {
    constructor(theHandle: Handle_TColStd_HArray1OfInteger);
  }

  export declare class Handle_TColStd_HArray1OfInteger_4 extends Handle_TColStd_HArray1OfInteger {
    constructor(theHandle: Handle_TColStd_HArray1OfInteger);
  }

export declare class Handle_Message_Printer {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Message_Printer): void;
  get(): Message_Printer;
}

  export declare class Handle_Message_Printer_1 extends Handle_Message_Printer {
    constructor();
  }

  export declare class Handle_Message_Printer_2 extends Handle_Message_Printer {
    constructor(thePtr: Message_Printer);
  }

  export declare class Handle_Message_Printer_3 extends Handle_Message_Printer {
    constructor(theHandle: Handle_Message_Printer);
  }

  export declare class Handle_Message_Printer_4 extends Handle_Message_Printer {
    constructor(theHandle: Handle_Message_Printer);
  }

export declare class Handle_TCollection_HExtendedString {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TCollection_HExtendedString): void;
  get(): TCollection_HExtendedString;
}

  export declare class Handle_TCollection_HExtendedString_1 extends Handle_TCollection_HExtendedString {
    constructor();
  }

  export declare class Handle_TCollection_HExtendedString_2 extends Handle_TCollection_HExtendedString {
    constructor(thePtr: TCollection_HExtendedString);
  }

  export declare class Handle_TCollection_HExtendedString_3 extends Handle_TCollection_HExtendedString {
    constructor(theHandle: Handle_TCollection_HExtendedString);
  }

  export declare class Handle_TCollection_HExtendedString_4 extends Handle_TCollection_HExtendedString {
    constructor(theHandle: Handle_TCollection_HExtendedString);
  }

export declare class Handle_Message_Messenger {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Message_Messenger): void;
  get(): Message_Messenger;
}

  export declare class Handle_Message_Messenger_1 extends Handle_Message_Messenger {
    constructor();
  }

  export declare class Handle_Message_Messenger_2 extends Handle_Message_Messenger {
    constructor(thePtr: Message_Messenger);
  }

  export declare class Handle_Message_Messenger_3 extends Handle_Message_Messenger {
    constructor(theHandle: Handle_Message_Messenger);
  }

  export declare class Handle_Message_Messenger_4 extends Handle_Message_Messenger {
    constructor(theHandle: Handle_Message_Messenger);
  }

export declare class TColStd_MapIntegerHasher {
  constructor();
  HashCode(theKey: Standard_Integer, theUpperBound: Standard_Integer): Standard_Integer;
  IsEqual(theKey1: Standard_Integer, theKey2: Standard_Integer): Standard_Boolean;
}

export declare class TColStd_SequenceOfExtendedString extends NCollection_BaseSequence {
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
  delNode(theNode: NCollection_SeqNode, theAl: Handle_NCollection_BaseAllocator): void;
  Clear(theAllocator: Handle_NCollection_BaseAllocator): void;
  Assign(theOther: TColStd_SequenceOfExtendedString): TColStd_SequenceOfExtendedString;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: TCollection_ExtendedString): void;
  Append_2(theSeq: TColStd_SequenceOfExtendedString): void;
  Prepend_1(theItem: TCollection_ExtendedString): void;
  Prepend_2(theSeq: TColStd_SequenceOfExtendedString): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: TCollection_ExtendedString): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: TColStd_SequenceOfExtendedString): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: TColStd_SequenceOfExtendedString): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: TCollection_ExtendedString): void;
  Split(theIndex: Standard_Integer, theSeq: TColStd_SequenceOfExtendedString): void;
  First(): TCollection_ExtendedString;
  ChangeFirst(): TCollection_ExtendedString;
  Last(): TCollection_ExtendedString;
  ChangeLast(): TCollection_ExtendedString;
  Value(theIndex: Standard_Integer): TCollection_ExtendedString;
  ChangeValue(theIndex: Standard_Integer): TCollection_ExtendedString;
  SetValue(theIndex: Standard_Integer, theItem: TCollection_ExtendedString): void;
}

  export declare class TColStd_SequenceOfExtendedString_1 extends TColStd_SequenceOfExtendedString {
    constructor();
  }

  export declare class TColStd_SequenceOfExtendedString_2 extends TColStd_SequenceOfExtendedString {
    constructor(theAllocator: Handle_NCollection_BaseAllocator);
  }

  export declare class TColStd_SequenceOfExtendedString_3 extends TColStd_SequenceOfExtendedString {
    constructor(theOther: TColStd_SequenceOfExtendedString);
  }

export declare class TColStd_DataMapOfIntegerListOfInteger extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TColStd_DataMapOfIntegerListOfInteger): void;
  Assign(theOther: TColStd_DataMapOfIntegerListOfInteger): TColStd_DataMapOfIntegerListOfInteger;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: Standard_Integer, theItem: TColStd_ListOfInteger): Standard_Boolean;
  Bound(theKey: Standard_Integer, theItem: TColStd_ListOfInteger): TColStd_ListOfInteger;
  IsBound(theKey: Standard_Integer): Standard_Boolean;
  UnBind(theKey: Standard_Integer): Standard_Boolean;
  Seek(theKey: Standard_Integer): TColStd_ListOfInteger;
  Find_1(theKey: Standard_Integer): TColStd_ListOfInteger;
  Find_2(theKey: Standard_Integer, theValue: TColStd_ListOfInteger): Standard_Boolean;
  ChangeSeek(theKey: Standard_Integer): TColStd_ListOfInteger;
  ChangeFind(theKey: Standard_Integer): TColStd_ListOfInteger;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: Handle_NCollection_BaseAllocator): void;
  Size(): Standard_Integer;
}

  export declare class TColStd_DataMapOfIntegerListOfInteger_1 extends TColStd_DataMapOfIntegerListOfInteger {
    constructor();
  }

  export declare class TColStd_DataMapOfIntegerListOfInteger_2 extends TColStd_DataMapOfIntegerListOfInteger {
    constructor(theNbBuckets: Standard_Integer, theAllocator: Handle_NCollection_BaseAllocator);
  }

  export declare class TColStd_DataMapOfIntegerListOfInteger_3 extends TColStd_DataMapOfIntegerListOfInteger {
    constructor(theOther: TColStd_DataMapOfIntegerListOfInteger);
  }

export declare class TShort_Array1OfShortReal {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: Standard_ShortReal): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: TShort_Array1OfShortReal): TShort_Array1OfShortReal;
  Move(theOther: TShort_Array1OfShortReal): TShort_Array1OfShortReal;
  First(): Standard_ShortReal;
  ChangeFirst(): Standard_ShortReal;
  Last(): Standard_ShortReal;
  ChangeLast(): Standard_ShortReal;
  Value(theIndex: Standard_Integer): Standard_ShortReal;
  ChangeValue(theIndex: Standard_Integer): Standard_ShortReal;
  SetValue(theIndex: Standard_Integer, theItem: Standard_ShortReal): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class TShort_Array1OfShortReal_1 extends TShort_Array1OfShortReal {
    constructor();
  }

  export declare class TShort_Array1OfShortReal_2 extends TShort_Array1OfShortReal {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class TShort_Array1OfShortReal_3 extends TShort_Array1OfShortReal {
    constructor(theOther: TShort_Array1OfShortReal);
  }

  export declare class TShort_Array1OfShortReal_4 extends TShort_Array1OfShortReal {
    constructor(theOther: TShort_Array1OfShortReal);
  }

  export declare class TShort_Array1OfShortReal_5 extends TShort_Array1OfShortReal {
    constructor(theBegin: Standard_ShortReal, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_TShort_HArray1OfShortReal {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TShort_HArray1OfShortReal): void;
  get(): TShort_HArray1OfShortReal;
}

  export declare class Handle_TShort_HArray1OfShortReal_1 extends Handle_TShort_HArray1OfShortReal {
    constructor();
  }

  export declare class Handle_TShort_HArray1OfShortReal_2 extends Handle_TShort_HArray1OfShortReal {
    constructor(thePtr: TShort_HArray1OfShortReal);
  }

  export declare class Handle_TShort_HArray1OfShortReal_3 extends Handle_TShort_HArray1OfShortReal {
    constructor(theHandle: Handle_TShort_HArray1OfShortReal);
  }

  export declare class Handle_TShort_HArray1OfShortReal_4 extends Handle_TShort_HArray1OfShortReal {
    constructor(theHandle: Handle_TShort_HArray1OfShortReal);
  }

export declare class TColStd_MapOfInteger extends NCollection_BaseMap {
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TColStd_MapOfInteger): void;
  Assign(theOther: TColStd_MapOfInteger): TColStd_MapOfInteger;
  ReSize(N: Standard_Integer): void;
  Add(K: Standard_Integer): Standard_Boolean;
  Added(K: Standard_Integer): Standard_Integer;
  Contains_1(K: Standard_Integer): Standard_Boolean;
  Remove(K: Standard_Integer): Standard_Boolean;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: Handle_NCollection_BaseAllocator): void;
  Size(): Standard_Integer;
  IsEqual(theOther: TColStd_MapOfInteger): Standard_Boolean;
  Contains_2(theOther: TColStd_MapOfInteger): Standard_Boolean;
  Union(theLeft: TColStd_MapOfInteger, theRight: TColStd_MapOfInteger): void;
  Unite(theOther: TColStd_MapOfInteger): Standard_Boolean;
  HasIntersection(theMap: TColStd_MapOfInteger): Standard_Boolean;
  Intersection(theLeft: TColStd_MapOfInteger, theRight: TColStd_MapOfInteger): void;
  Intersect(theOther: TColStd_MapOfInteger): Standard_Boolean;
  Subtraction(theLeft: TColStd_MapOfInteger, theRight: TColStd_MapOfInteger): void;
  Subtract(theOther: TColStd_MapOfInteger): Standard_Boolean;
  Difference(theLeft: TColStd_MapOfInteger, theRight: TColStd_MapOfInteger): void;
  Differ(theOther: TColStd_MapOfInteger): Standard_Boolean;
}

  export declare class TColStd_MapOfInteger_1 extends TColStd_MapOfInteger {
    constructor();
  }

  export declare class TColStd_MapOfInteger_2 extends TColStd_MapOfInteger {
    constructor(theNbBuckets: Standard_Integer, theAllocator: Handle_NCollection_BaseAllocator);
  }

  export declare class TColStd_MapOfInteger_3 extends TColStd_MapOfInteger {
    constructor(theOther: TColStd_MapOfInteger);
  }

export declare class Quantity_Array1OfColor {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: Quantity_Color): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: Quantity_Array1OfColor): Quantity_Array1OfColor;
  Move(theOther: Quantity_Array1OfColor): Quantity_Array1OfColor;
  First(): Quantity_Color;
  ChangeFirst(): Quantity_Color;
  Last(): Quantity_Color;
  ChangeLast(): Quantity_Color;
  Value(theIndex: Standard_Integer): Quantity_Color;
  ChangeValue(theIndex: Standard_Integer): Quantity_Color;
  SetValue(theIndex: Standard_Integer, theItem: Quantity_Color): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class Quantity_Array1OfColor_1 extends Quantity_Array1OfColor {
    constructor();
  }

  export declare class Quantity_Array1OfColor_2 extends Quantity_Array1OfColor {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class Quantity_Array1OfColor_3 extends Quantity_Array1OfColor {
    constructor(theOther: Quantity_Array1OfColor);
  }

  export declare class Quantity_Array1OfColor_4 extends Quantity_Array1OfColor {
    constructor(theOther: Quantity_Array1OfColor);
  }

  export declare class Quantity_Array1OfColor_5 extends Quantity_Array1OfColor {
    constructor(theBegin: Quantity_Color, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_Quantity_HArray1OfColor {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Quantity_HArray1OfColor): void;
  get(): Quantity_HArray1OfColor;
}

  export declare class Handle_Quantity_HArray1OfColor_1 extends Handle_Quantity_HArray1OfColor {
    constructor();
  }

  export declare class Handle_Quantity_HArray1OfColor_2 extends Handle_Quantity_HArray1OfColor {
    constructor(thePtr: Quantity_HArray1OfColor);
  }

  export declare class Handle_Quantity_HArray1OfColor_3 extends Handle_Quantity_HArray1OfColor {
    constructor(theHandle: Handle_Quantity_HArray1OfColor);
  }

  export declare class Handle_Quantity_HArray1OfColor_4 extends Handle_Quantity_HArray1OfColor {
    constructor(theHandle: Handle_Quantity_HArray1OfColor);
  }

export declare class TColStd_Array1OfAsciiString {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: TCollection_AsciiString): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: TColStd_Array1OfAsciiString): TColStd_Array1OfAsciiString;
  Move(theOther: TColStd_Array1OfAsciiString): TColStd_Array1OfAsciiString;
  First(): TCollection_AsciiString;
  ChangeFirst(): TCollection_AsciiString;
  Last(): TCollection_AsciiString;
  ChangeLast(): TCollection_AsciiString;
  Value(theIndex: Standard_Integer): TCollection_AsciiString;
  ChangeValue(theIndex: Standard_Integer): TCollection_AsciiString;
  SetValue(theIndex: Standard_Integer, theItem: TCollection_AsciiString): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class TColStd_Array1OfAsciiString_1 extends TColStd_Array1OfAsciiString {
    constructor();
  }

  export declare class TColStd_Array1OfAsciiString_2 extends TColStd_Array1OfAsciiString {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class TColStd_Array1OfAsciiString_3 extends TColStd_Array1OfAsciiString {
    constructor(theOther: TColStd_Array1OfAsciiString);
  }

  export declare class TColStd_Array1OfAsciiString_4 extends TColStd_Array1OfAsciiString {
    constructor(theOther: TColStd_Array1OfAsciiString);
  }

  export declare class TColStd_Array1OfAsciiString_5 extends TColStd_Array1OfAsciiString {
    constructor(theBegin: TCollection_AsciiString, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_TColStd_HSequenceOfHAsciiString {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColStd_HSequenceOfHAsciiString): void;
  get(): TColStd_HSequenceOfHAsciiString;
}

  export declare class Handle_TColStd_HSequenceOfHAsciiString_1 extends Handle_TColStd_HSequenceOfHAsciiString {
    constructor();
  }

  export declare class Handle_TColStd_HSequenceOfHAsciiString_2 extends Handle_TColStd_HSequenceOfHAsciiString {
    constructor(thePtr: TColStd_HSequenceOfHAsciiString);
  }

  export declare class Handle_TColStd_HSequenceOfHAsciiString_3 extends Handle_TColStd_HSequenceOfHAsciiString {
    constructor(theHandle: Handle_TColStd_HSequenceOfHAsciiString);
  }

  export declare class Handle_TColStd_HSequenceOfHAsciiString_4 extends Handle_TColStd_HSequenceOfHAsciiString {
    constructor(theHandle: Handle_TColStd_HSequenceOfHAsciiString);
  }

export declare class TColStd_Array1OfReal {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: Standard_Real): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: TColStd_Array1OfReal): TColStd_Array1OfReal;
  Move(theOther: TColStd_Array1OfReal): TColStd_Array1OfReal;
  First(): Standard_Real;
  ChangeFirst(): Standard_Real;
  Last(): Standard_Real;
  ChangeLast(): Standard_Real;
  Value(theIndex: Standard_Integer): Standard_Real;
  ChangeValue(theIndex: Standard_Integer): Standard_Real;
  SetValue(theIndex: Standard_Integer, theItem: Standard_Real): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class TColStd_Array1OfReal_1 extends TColStd_Array1OfReal {
    constructor();
  }

  export declare class TColStd_Array1OfReal_2 extends TColStd_Array1OfReal {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class TColStd_Array1OfReal_3 extends TColStd_Array1OfReal {
    constructor(theOther: TColStd_Array1OfReal);
  }

  export declare class TColStd_Array1OfReal_4 extends TColStd_Array1OfReal {
    constructor(theOther: TColStd_Array1OfReal);
  }

  export declare class TColStd_Array1OfReal_5 extends TColStd_Array1OfReal {
    constructor(theBegin: Standard_Real, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_TColStd_HArray1OfReal {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColStd_HArray1OfReal): void;
  get(): TColStd_HArray1OfReal;
}

  export declare class Handle_TColStd_HArray1OfReal_1 extends Handle_TColStd_HArray1OfReal {
    constructor();
  }

  export declare class Handle_TColStd_HArray1OfReal_2 extends Handle_TColStd_HArray1OfReal {
    constructor(thePtr: TColStd_HArray1OfReal);
  }

  export declare class Handle_TColStd_HArray1OfReal_3 extends Handle_TColStd_HArray1OfReal {
    constructor(theHandle: Handle_TColStd_HArray1OfReal);
  }

  export declare class Handle_TColStd_HArray1OfReal_4 extends Handle_TColStd_HArray1OfReal {
    constructor(theHandle: Handle_TColStd_HArray1OfReal);
  }

export declare class TColStd_SequenceOfReal extends NCollection_BaseSequence {
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
  delNode(theNode: NCollection_SeqNode, theAl: Handle_NCollection_BaseAllocator): void;
  Clear(theAllocator: Handle_NCollection_BaseAllocator): void;
  Assign(theOther: TColStd_SequenceOfReal): TColStd_SequenceOfReal;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: Standard_Real): void;
  Append_2(theSeq: TColStd_SequenceOfReal): void;
  Prepend_1(theItem: Standard_Real): void;
  Prepend_2(theSeq: TColStd_SequenceOfReal): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: Standard_Real): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: TColStd_SequenceOfReal): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: TColStd_SequenceOfReal): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: Standard_Real): void;
  Split(theIndex: Standard_Integer, theSeq: TColStd_SequenceOfReal): void;
  First(): Standard_Real;
  ChangeFirst(): Standard_Real;
  Last(): Standard_Real;
  ChangeLast(): Standard_Real;
  Value(theIndex: Standard_Integer): Standard_Real;
  ChangeValue(theIndex: Standard_Integer): Standard_Real;
  SetValue(theIndex: Standard_Integer, theItem: Standard_Real): void;
}

  export declare class TColStd_SequenceOfReal_1 extends TColStd_SequenceOfReal {
    constructor();
  }

  export declare class TColStd_SequenceOfReal_2 extends TColStd_SequenceOfReal {
    constructor(theAllocator: Handle_NCollection_BaseAllocator);
  }

  export declare class TColStd_SequenceOfReal_3 extends TColStd_SequenceOfReal {
    constructor(theOther: TColStd_SequenceOfReal);
  }

export declare class Handle_TColStd_HSequenceOfReal {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColStd_HSequenceOfReal): void;
  get(): TColStd_HSequenceOfReal;
}

  export declare class Handle_TColStd_HSequenceOfReal_1 extends Handle_TColStd_HSequenceOfReal {
    constructor();
  }

  export declare class Handle_TColStd_HSequenceOfReal_2 extends Handle_TColStd_HSequenceOfReal {
    constructor(thePtr: TColStd_HSequenceOfReal);
  }

  export declare class Handle_TColStd_HSequenceOfReal_3 extends Handle_TColStd_HSequenceOfReal {
    constructor(theHandle: Handle_TColStd_HSequenceOfReal);
  }

  export declare class Handle_TColStd_HSequenceOfReal_4 extends Handle_TColStd_HSequenceOfReal {
    constructor(theHandle: Handle_TColStd_HSequenceOfReal);
  }

export declare class Handle_TColStd_HArray2OfReal {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColStd_HArray2OfReal): void;
  get(): TColStd_HArray2OfReal;
}

  export declare class Handle_TColStd_HArray2OfReal_1 extends Handle_TColStd_HArray2OfReal {
    constructor();
  }

  export declare class Handle_TColStd_HArray2OfReal_2 extends Handle_TColStd_HArray2OfReal {
    constructor(thePtr: TColStd_HArray2OfReal);
  }

  export declare class Handle_TColStd_HArray2OfReal_3 extends Handle_TColStd_HArray2OfReal {
    constructor(theHandle: Handle_TColStd_HArray2OfReal);
  }

  export declare class Handle_TColStd_HArray2OfReal_4 extends Handle_TColStd_HArray2OfReal {
    constructor(theHandle: Handle_TColStd_HArray2OfReal);
  }

export declare class Handle_StdFail_NotDone {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StdFail_NotDone): void;
  get(): StdFail_NotDone;
}

  export declare class Handle_StdFail_NotDone_1 extends Handle_StdFail_NotDone {
    constructor();
  }

  export declare class Handle_StdFail_NotDone_2 extends Handle_StdFail_NotDone {
    constructor(thePtr: StdFail_NotDone);
  }

  export declare class Handle_StdFail_NotDone_3 extends Handle_StdFail_NotDone {
    constructor(theHandle: Handle_StdFail_NotDone);
  }

  export declare class Handle_StdFail_NotDone_4 extends Handle_StdFail_NotDone {
    constructor(theHandle: Handle_StdFail_NotDone);
  }

export declare class TColStd_Array2OfInteger {
  Init(theValue: Standard_Integer): void;
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
  Assign(theOther: TColStd_Array2OfInteger): TColStd_Array2OfInteger;
  Move(theOther: TColStd_Array2OfInteger): TColStd_Array2OfInteger;
  Value(theRow: Standard_Integer, theCol: Standard_Integer): Standard_Integer;
  ChangeValue(theRow: Standard_Integer, theCol: Standard_Integer): Standard_Integer;
  SetValue(theRow: Standard_Integer, theCol: Standard_Integer, theItem: Standard_Integer): void;
  Resize(theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class TColStd_Array2OfInteger_1 extends TColStd_Array2OfInteger {
    constructor();
  }

  export declare class TColStd_Array2OfInteger_2 extends TColStd_Array2OfInteger {
    constructor(theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer);
  }

  export declare class TColStd_Array2OfInteger_3 extends TColStd_Array2OfInteger {
    constructor(theOther: TColStd_Array2OfInteger);
  }

  export declare class TColStd_Array2OfInteger_4 extends TColStd_Array2OfInteger {
    constructor(theOther: TColStd_Array2OfInteger);
  }

  export declare class TColStd_Array2OfInteger_5 extends TColStd_Array2OfInteger {
    constructor(theBegin: Standard_Integer, theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer);
  }

export declare class Handle_TColStd_HArray2OfInteger {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColStd_HArray2OfInteger): void;
  get(): TColStd_HArray2OfInteger;
}

  export declare class Handle_TColStd_HArray2OfInteger_1 extends Handle_TColStd_HArray2OfInteger {
    constructor();
  }

  export declare class Handle_TColStd_HArray2OfInteger_2 extends Handle_TColStd_HArray2OfInteger {
    constructor(thePtr: TColStd_HArray2OfInteger);
  }

  export declare class Handle_TColStd_HArray2OfInteger_3 extends Handle_TColStd_HArray2OfInteger {
    constructor(theHandle: Handle_TColStd_HArray2OfInteger);
  }

  export declare class Handle_TColStd_HArray2OfInteger_4 extends Handle_TColStd_HArray2OfInteger {
    constructor(theHandle: Handle_TColStd_HArray2OfInteger);
  }

export declare class Handle_Message_ProgressIndicator {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Message_ProgressIndicator): void;
  get(): Message_ProgressIndicator;
}

  export declare class Handle_Message_ProgressIndicator_1 extends Handle_Message_ProgressIndicator {
    constructor();
  }

  export declare class Handle_Message_ProgressIndicator_2 extends Handle_Message_ProgressIndicator {
    constructor(thePtr: Message_ProgressIndicator);
  }

  export declare class Handle_Message_ProgressIndicator_3 extends Handle_Message_ProgressIndicator {
    constructor(theHandle: Handle_Message_ProgressIndicator);
  }

  export declare class Handle_Message_ProgressIndicator_4 extends Handle_Message_ProgressIndicator {
    constructor(theHandle: Handle_Message_ProgressIndicator);
  }

export declare class TColStd_SequenceOfAsciiString extends NCollection_BaseSequence {
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
  delNode(theNode: NCollection_SeqNode, theAl: Handle_NCollection_BaseAllocator): void;
  Clear(theAllocator: Handle_NCollection_BaseAllocator): void;
  Assign(theOther: TColStd_SequenceOfAsciiString): TColStd_SequenceOfAsciiString;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: TCollection_AsciiString): void;
  Append_2(theSeq: TColStd_SequenceOfAsciiString): void;
  Prepend_1(theItem: TCollection_AsciiString): void;
  Prepend_2(theSeq: TColStd_SequenceOfAsciiString): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: TCollection_AsciiString): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: TColStd_SequenceOfAsciiString): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: TColStd_SequenceOfAsciiString): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: TCollection_AsciiString): void;
  Split(theIndex: Standard_Integer, theSeq: TColStd_SequenceOfAsciiString): void;
  First(): TCollection_AsciiString;
  ChangeFirst(): TCollection_AsciiString;
  Last(): TCollection_AsciiString;
  ChangeLast(): TCollection_AsciiString;
  Value(theIndex: Standard_Integer): TCollection_AsciiString;
  ChangeValue(theIndex: Standard_Integer): TCollection_AsciiString;
  SetValue(theIndex: Standard_Integer, theItem: TCollection_AsciiString): void;
}

  export declare class TColStd_SequenceOfAsciiString_1 extends TColStd_SequenceOfAsciiString {
    constructor();
  }

  export declare class TColStd_SequenceOfAsciiString_2 extends TColStd_SequenceOfAsciiString {
    constructor(theAllocator: Handle_NCollection_BaseAllocator);
  }

  export declare class TColStd_SequenceOfAsciiString_3 extends TColStd_SequenceOfAsciiString {
    constructor(theOther: TColStd_SequenceOfAsciiString);
  }

export declare class Handle_Message_Alert {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Message_Alert): void;
  get(): Message_Alert;
}

  export declare class Handle_Message_Alert_1 extends Handle_Message_Alert {
    constructor();
  }

  export declare class Handle_Message_Alert_2 extends Handle_Message_Alert {
    constructor(thePtr: Message_Alert);
  }

  export declare class Handle_Message_Alert_3 extends Handle_Message_Alert {
    constructor(theHandle: Handle_Message_Alert);
  }

  export declare class Handle_Message_Alert_4 extends Handle_Message_Alert {
    constructor(theHandle: Handle_Message_Alert);
  }

export declare class Handle_Message_AlertExtended {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Message_AlertExtended): void;
  get(): Message_AlertExtended;
}

  export declare class Handle_Message_AlertExtended_1 extends Handle_Message_AlertExtended {
    constructor();
  }

  export declare class Handle_Message_AlertExtended_2 extends Handle_Message_AlertExtended {
    constructor(thePtr: Message_AlertExtended);
  }

  export declare class Handle_Message_AlertExtended_3 extends Handle_Message_AlertExtended {
    constructor(theHandle: Handle_Message_AlertExtended);
  }

  export declare class Handle_Message_AlertExtended_4 extends Handle_Message_AlertExtended {
    constructor(theHandle: Handle_Message_AlertExtended);
  }

export declare class Handle_Message_Report {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Message_Report): void;
  get(): Message_Report;
}

  export declare class Handle_Message_Report_1 extends Handle_Message_Report {
    constructor();
  }

  export declare class Handle_Message_Report_2 extends Handle_Message_Report {
    constructor(thePtr: Message_Report);
  }

  export declare class Handle_Message_Report_3 extends Handle_Message_Report {
    constructor(theHandle: Handle_Message_Report);
  }

  export declare class Handle_Message_Report_4 extends Handle_Message_Report {
    constructor(theHandle: Handle_Message_Report);
  }

export declare class TColStd_DataMapOfIntegerInteger extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TColStd_DataMapOfIntegerInteger): void;
  Assign(theOther: TColStd_DataMapOfIntegerInteger): TColStd_DataMapOfIntegerInteger;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: Standard_Integer, theItem: Standard_Integer): Standard_Boolean;
  Bound(theKey: Standard_Integer, theItem: Standard_Integer): Standard_Integer;
  IsBound(theKey: Standard_Integer): Standard_Boolean;
  UnBind(theKey: Standard_Integer): Standard_Boolean;
  Seek(theKey: Standard_Integer): Standard_Integer;
  Find_1(theKey: Standard_Integer): Standard_Integer;
  Find_2(theKey: Standard_Integer, theValue: Standard_Integer): Standard_Boolean;
  ChangeSeek(theKey: Standard_Integer): Standard_Integer;
  ChangeFind(theKey: Standard_Integer): Standard_Integer;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: Handle_NCollection_BaseAllocator): void;
  Size(): Standard_Integer;
}

  export declare class TColStd_DataMapOfIntegerInteger_1 extends TColStd_DataMapOfIntegerInteger {
    constructor();
  }

  export declare class TColStd_DataMapOfIntegerInteger_2 extends TColStd_DataMapOfIntegerInteger {
    constructor(theNbBuckets: Standard_Integer, theAllocator: Handle_NCollection_BaseAllocator);
  }

  export declare class TColStd_DataMapOfIntegerInteger_3 extends TColStd_DataMapOfIntegerInteger {
    constructor(theOther: TColStd_DataMapOfIntegerInteger);
  }

export declare class TColStd_DataMapOfIntegerReal extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TColStd_DataMapOfIntegerReal): void;
  Assign(theOther: TColStd_DataMapOfIntegerReal): TColStd_DataMapOfIntegerReal;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: Standard_Integer, theItem: Standard_Real): Standard_Boolean;
  Bound(theKey: Standard_Integer, theItem: Standard_Real): Standard_Real;
  IsBound(theKey: Standard_Integer): Standard_Boolean;
  UnBind(theKey: Standard_Integer): Standard_Boolean;
  Seek(theKey: Standard_Integer): Standard_Real;
  Find_1(theKey: Standard_Integer): Standard_Real;
  Find_2(theKey: Standard_Integer, theValue: Standard_Real): Standard_Boolean;
  ChangeSeek(theKey: Standard_Integer): Standard_Real;
  ChangeFind(theKey: Standard_Integer): Standard_Real;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: Handle_NCollection_BaseAllocator): void;
  Size(): Standard_Integer;
}

  export declare class TColStd_DataMapOfIntegerReal_1 extends TColStd_DataMapOfIntegerReal {
    constructor();
  }

  export declare class TColStd_DataMapOfIntegerReal_2 extends TColStd_DataMapOfIntegerReal {
    constructor(theNbBuckets: Standard_Integer, theAllocator: Handle_NCollection_BaseAllocator);
  }

  export declare class TColStd_DataMapOfIntegerReal_3 extends TColStd_DataMapOfIntegerReal {
    constructor(theOther: TColStd_DataMapOfIntegerReal);
  }

export declare class Handle_Standard_NullObject {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Standard_NullObject): void;
  get(): Standard_NullObject;
}

  export declare class Handle_Standard_NullObject_1 extends Handle_Standard_NullObject {
    constructor();
  }

  export declare class Handle_Standard_NullObject_2 extends Handle_Standard_NullObject {
    constructor(thePtr: Standard_NullObject);
  }

  export declare class Handle_Standard_NullObject_3 extends Handle_Standard_NullObject {
    constructor(theHandle: Handle_Standard_NullObject);
  }

  export declare class Handle_Standard_NullObject_4 extends Handle_Standard_NullObject {
    constructor(theHandle: Handle_Standard_NullObject);
  }

export declare class Handle_StdFail_UndefinedDerivative {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StdFail_UndefinedDerivative): void;
  get(): StdFail_UndefinedDerivative;
}

  export declare class Handle_StdFail_UndefinedDerivative_1 extends Handle_StdFail_UndefinedDerivative {
    constructor();
  }

  export declare class Handle_StdFail_UndefinedDerivative_2 extends Handle_StdFail_UndefinedDerivative {
    constructor(thePtr: StdFail_UndefinedDerivative);
  }

  export declare class Handle_StdFail_UndefinedDerivative_3 extends Handle_StdFail_UndefinedDerivative {
    constructor(theHandle: Handle_StdFail_UndefinedDerivative);
  }

  export declare class Handle_StdFail_UndefinedDerivative_4 extends Handle_StdFail_UndefinedDerivative {
    constructor(theHandle: Handle_StdFail_UndefinedDerivative);
  }

export declare class Handle_NCollection_IncAllocator {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: NCollection_IncAllocator): void;
  get(): NCollection_IncAllocator;
}

  export declare class Handle_NCollection_IncAllocator_1 extends Handle_NCollection_IncAllocator {
    constructor();
  }

  export declare class Handle_NCollection_IncAllocator_2 extends Handle_NCollection_IncAllocator {
    constructor(thePtr: NCollection_IncAllocator);
  }

  export declare class Handle_NCollection_IncAllocator_3 extends Handle_NCollection_IncAllocator {
    constructor(theHandle: Handle_NCollection_IncAllocator);
  }

  export declare class Handle_NCollection_IncAllocator_4 extends Handle_NCollection_IncAllocator {
    constructor(theHandle: Handle_NCollection_IncAllocator);
  }

export declare class TColStd_IndexedMapOfInteger extends NCollection_BaseMap {
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TColStd_IndexedMapOfInteger): void;
  Assign(theOther: TColStd_IndexedMapOfInteger): TColStd_IndexedMapOfInteger;
  ReSize(theExtent: Standard_Integer): void;
  Add(theKey1: Standard_Integer): Standard_Integer;
  Contains(theKey1: Standard_Integer): Standard_Boolean;
  Substitute(theIndex: Standard_Integer, theKey1: Standard_Integer): void;
  Swap(theIndex1: Standard_Integer, theIndex2: Standard_Integer): void;
  RemoveLast(): void;
  RemoveFromIndex(theIndex: Standard_Integer): void;
  RemoveKey(theKey1: Standard_Integer): Standard_Boolean;
  FindKey(theIndex: Standard_Integer): Standard_Integer;
  FindIndex(theKey1: Standard_Integer): Standard_Integer;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: Handle_NCollection_BaseAllocator): void;
  Size(): Standard_Integer;
}

  export declare class TColStd_IndexedMapOfInteger_1 extends TColStd_IndexedMapOfInteger {
    constructor();
  }

  export declare class TColStd_IndexedMapOfInteger_2 extends TColStd_IndexedMapOfInteger {
    constructor(theNbBuckets: Standard_Integer, theAllocator: Handle_NCollection_BaseAllocator);
  }

  export declare class TColStd_IndexedMapOfInteger_3 extends TColStd_IndexedMapOfInteger {
    constructor(theOther: TColStd_IndexedMapOfInteger);
  }

export declare class TColStd_SequenceOfBoolean extends NCollection_BaseSequence {
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
  delNode(theNode: NCollection_SeqNode, theAl: Handle_NCollection_BaseAllocator): void;
  Clear(theAllocator: Handle_NCollection_BaseAllocator): void;
  Assign(theOther: TColStd_SequenceOfBoolean): TColStd_SequenceOfBoolean;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: Standard_Boolean): void;
  Append_2(theSeq: TColStd_SequenceOfBoolean): void;
  Prepend_1(theItem: Standard_Boolean): void;
  Prepend_2(theSeq: TColStd_SequenceOfBoolean): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: Standard_Boolean): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: TColStd_SequenceOfBoolean): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: TColStd_SequenceOfBoolean): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: Standard_Boolean): void;
  Split(theIndex: Standard_Integer, theSeq: TColStd_SequenceOfBoolean): void;
  First(): Standard_Boolean;
  ChangeFirst(): Standard_Boolean;
  Last(): Standard_Boolean;
  ChangeLast(): Standard_Boolean;
  Value(theIndex: Standard_Integer): Standard_Boolean;
  ChangeValue(theIndex: Standard_Integer): Standard_Boolean;
  SetValue(theIndex: Standard_Integer, theItem: Standard_Boolean): void;
}

  export declare class TColStd_SequenceOfBoolean_1 extends TColStd_SequenceOfBoolean {
    constructor();
  }

  export declare class TColStd_SequenceOfBoolean_2 extends TColStd_SequenceOfBoolean {
    constructor(theAllocator: Handle_NCollection_BaseAllocator);
  }

  export declare class TColStd_SequenceOfBoolean_3 extends TColStd_SequenceOfBoolean {
    constructor(theOther: TColStd_SequenceOfBoolean);
  }

export declare class TColStd_Array1OfBoolean {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: Standard_Boolean): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: TColStd_Array1OfBoolean): TColStd_Array1OfBoolean;
  Move(theOther: TColStd_Array1OfBoolean): TColStd_Array1OfBoolean;
  First(): Standard_Boolean;
  ChangeFirst(): Standard_Boolean;
  Last(): Standard_Boolean;
  ChangeLast(): Standard_Boolean;
  Value(theIndex: Standard_Integer): Standard_Boolean;
  ChangeValue(theIndex: Standard_Integer): Standard_Boolean;
  SetValue(theIndex: Standard_Integer, theItem: Standard_Boolean): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class TColStd_Array1OfBoolean_1 extends TColStd_Array1OfBoolean {
    constructor();
  }

  export declare class TColStd_Array1OfBoolean_2 extends TColStd_Array1OfBoolean {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class TColStd_Array1OfBoolean_3 extends TColStd_Array1OfBoolean {
    constructor(theOther: TColStd_Array1OfBoolean);
  }

  export declare class TColStd_Array1OfBoolean_4 extends TColStd_Array1OfBoolean {
    constructor(theOther: TColStd_Array1OfBoolean);
  }

  export declare class TColStd_Array1OfBoolean_5 extends TColStd_Array1OfBoolean {
    constructor(theBegin: Standard_Boolean, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_TColStd_HArray1OfTransient {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColStd_HArray1OfTransient): void;
  get(): TColStd_HArray1OfTransient;
}

  export declare class Handle_TColStd_HArray1OfTransient_1 extends Handle_TColStd_HArray1OfTransient {
    constructor();
  }

  export declare class Handle_TColStd_HArray1OfTransient_2 extends Handle_TColStd_HArray1OfTransient {
    constructor(thePtr: TColStd_HArray1OfTransient);
  }

  export declare class Handle_TColStd_HArray1OfTransient_3 extends Handle_TColStd_HArray1OfTransient {
    constructor(theHandle: Handle_TColStd_HArray1OfTransient);
  }

  export declare class Handle_TColStd_HArray1OfTransient_4 extends Handle_TColStd_HArray1OfTransient {
    constructor(theHandle: Handle_TColStd_HArray1OfTransient);
  }

export declare class Handle_TColStd_HSequenceOfHExtendedString {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColStd_HSequenceOfHExtendedString): void;
  get(): TColStd_HSequenceOfHExtendedString;
}

  export declare class Handle_TColStd_HSequenceOfHExtendedString_1 extends Handle_TColStd_HSequenceOfHExtendedString {
    constructor();
  }

  export declare class Handle_TColStd_HSequenceOfHExtendedString_2 extends Handle_TColStd_HSequenceOfHExtendedString {
    constructor(thePtr: TColStd_HSequenceOfHExtendedString);
  }

  export declare class Handle_TColStd_HSequenceOfHExtendedString_3 extends Handle_TColStd_HSequenceOfHExtendedString {
    constructor(theHandle: Handle_TColStd_HSequenceOfHExtendedString);
  }

  export declare class Handle_TColStd_HSequenceOfHExtendedString_4 extends Handle_TColStd_HSequenceOfHExtendedString {
    constructor(theHandle: Handle_TColStd_HSequenceOfHExtendedString);
  }

export declare class Message_HArrayOfMsg {
  get_1(): Message_ArrayOfMsg;
  get_2(): Message_ArrayOfMsg;
  DownCast(theOther: Handle_Standard_Transient): Message_HArrayOfMsg;
}

  export declare class Message_HArrayOfMsg_2 extends Message_HArrayOfMsg {
    constructor();
  }

  export declare class Message_HArrayOfMsg_3 extends Message_HArrayOfMsg {
    constructor(theObject: Message_ArrayOfMsg);
  }

export declare class Handle_Message_Algorithm {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Message_Algorithm): void;
  get(): Message_Algorithm;
}

  export declare class Handle_Message_Algorithm_1 extends Handle_Message_Algorithm {
    constructor();
  }

  export declare class Handle_Message_Algorithm_2 extends Handle_Message_Algorithm {
    constructor(thePtr: Message_Algorithm);
  }

  export declare class Handle_Message_Algorithm_3 extends Handle_Message_Algorithm {
    constructor(theHandle: Handle_Message_Algorithm);
  }

  export declare class Handle_Message_Algorithm_4 extends Handle_Message_Algorithm {
    constructor(theHandle: Handle_Message_Algorithm);
  }

export declare class TColStd_MapOfAsciiString extends NCollection_BaseMap {
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TColStd_MapOfAsciiString): void;
  Assign(theOther: TColStd_MapOfAsciiString): TColStd_MapOfAsciiString;
  ReSize(N: Standard_Integer): void;
  Add(K: TCollection_AsciiString): Standard_Boolean;
  Added(K: TCollection_AsciiString): TCollection_AsciiString;
  Contains_1(K: TCollection_AsciiString): Standard_Boolean;
  Remove(K: TCollection_AsciiString): Standard_Boolean;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: Handle_NCollection_BaseAllocator): void;
  Size(): Standard_Integer;
  IsEqual(theOther: TColStd_MapOfAsciiString): Standard_Boolean;
  Contains_2(theOther: TColStd_MapOfAsciiString): Standard_Boolean;
  Union(theLeft: TColStd_MapOfAsciiString, theRight: TColStd_MapOfAsciiString): void;
  Unite(theOther: TColStd_MapOfAsciiString): Standard_Boolean;
  HasIntersection(theMap: TColStd_MapOfAsciiString): Standard_Boolean;
  Intersection(theLeft: TColStd_MapOfAsciiString, theRight: TColStd_MapOfAsciiString): void;
  Intersect(theOther: TColStd_MapOfAsciiString): Standard_Boolean;
  Subtraction(theLeft: TColStd_MapOfAsciiString, theRight: TColStd_MapOfAsciiString): void;
  Subtract(theOther: TColStd_MapOfAsciiString): Standard_Boolean;
  Difference(theLeft: TColStd_MapOfAsciiString, theRight: TColStd_MapOfAsciiString): void;
  Differ(theOther: TColStd_MapOfAsciiString): Standard_Boolean;
}

  export declare class TColStd_MapOfAsciiString_1 extends TColStd_MapOfAsciiString {
    constructor();
  }

  export declare class TColStd_MapOfAsciiString_2 extends TColStd_MapOfAsciiString {
    constructor(theNbBuckets: Standard_Integer, theAllocator: Handle_NCollection_BaseAllocator);
  }

  export declare class TColStd_MapOfAsciiString_3 extends TColStd_MapOfAsciiString {
    constructor(theOther: TColStd_MapOfAsciiString);
  }

export declare class Plugin_MapOfFunctions extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: Plugin_MapOfFunctions): void;
  Assign(theOther: Plugin_MapOfFunctions): Plugin_MapOfFunctions;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TCollection_AsciiString, theItem: OSD_Function): Standard_Boolean;
  Bound(theKey: TCollection_AsciiString, theItem: OSD_Function): OSD_Function;
  IsBound(theKey: TCollection_AsciiString): Standard_Boolean;
  UnBind(theKey: TCollection_AsciiString): Standard_Boolean;
  Seek(theKey: TCollection_AsciiString): OSD_Function;
  Find_1(theKey: TCollection_AsciiString): OSD_Function;
  Find_2(theKey: TCollection_AsciiString, theValue: OSD_Function): Standard_Boolean;
  ChangeSeek(theKey: TCollection_AsciiString): OSD_Function;
  ChangeFind(theKey: TCollection_AsciiString): OSD_Function;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: Handle_NCollection_BaseAllocator): void;
  Size(): Standard_Integer;
}

  export declare class Plugin_MapOfFunctions_1 extends Plugin_MapOfFunctions {
    constructor();
  }

  export declare class Plugin_MapOfFunctions_2 extends Plugin_MapOfFunctions {
    constructor(theNbBuckets: Standard_Integer, theAllocator: Handle_NCollection_BaseAllocator);
  }

  export declare class Plugin_MapOfFunctions_3 extends Plugin_MapOfFunctions {
    constructor(theOther: Plugin_MapOfFunctions);
  }

export declare class TColStd_Array2OfBoolean {
  Init(theValue: Standard_Boolean): void;
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
  Assign(theOther: TColStd_Array2OfBoolean): TColStd_Array2OfBoolean;
  Move(theOther: TColStd_Array2OfBoolean): TColStd_Array2OfBoolean;
  Value(theRow: Standard_Integer, theCol: Standard_Integer): Standard_Boolean;
  ChangeValue(theRow: Standard_Integer, theCol: Standard_Integer): Standard_Boolean;
  SetValue(theRow: Standard_Integer, theCol: Standard_Integer, theItem: Standard_Boolean): void;
  Resize(theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class TColStd_Array2OfBoolean_1 extends TColStd_Array2OfBoolean {
    constructor();
  }

  export declare class TColStd_Array2OfBoolean_2 extends TColStd_Array2OfBoolean {
    constructor(theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer);
  }

  export declare class TColStd_Array2OfBoolean_3 extends TColStd_Array2OfBoolean {
    constructor(theOther: TColStd_Array2OfBoolean);
  }

  export declare class TColStd_Array2OfBoolean_4 extends TColStd_Array2OfBoolean {
    constructor(theOther: TColStd_Array2OfBoolean);
  }

  export declare class TColStd_Array2OfBoolean_5 extends TColStd_Array2OfBoolean {
    constructor(theBegin: Standard_Boolean, theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer);
  }

export declare class TColStd_SequenceOfAddress extends NCollection_BaseSequence {
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
  delNode(theNode: NCollection_SeqNode, theAl: Handle_NCollection_BaseAllocator): void;
  Clear(theAllocator: Handle_NCollection_BaseAllocator): void;
  Assign(theOther: TColStd_SequenceOfAddress): TColStd_SequenceOfAddress;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: Standard_Address): void;
  Append_2(theSeq: TColStd_SequenceOfAddress): void;
  Prepend_1(theItem: Standard_Address): void;
  Prepend_2(theSeq: TColStd_SequenceOfAddress): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: Standard_Address): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: TColStd_SequenceOfAddress): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: TColStd_SequenceOfAddress): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: Standard_Address): void;
  Split(theIndex: Standard_Integer, theSeq: TColStd_SequenceOfAddress): void;
  First(): Standard_Address;
  ChangeFirst(): Standard_Address;
  Last(): Standard_Address;
  ChangeLast(): Standard_Address;
  Value(theIndex: Standard_Integer): Standard_Address;
  ChangeValue(theIndex: Standard_Integer): Standard_Address;
  SetValue(theIndex: Standard_Integer, theItem: Standard_Address): void;
}

  export declare class TColStd_SequenceOfAddress_1 extends TColStd_SequenceOfAddress {
    constructor();
  }

  export declare class TColStd_SequenceOfAddress_2 extends TColStd_SequenceOfAddress {
    constructor(theAllocator: Handle_NCollection_BaseAllocator);
  }

  export declare class TColStd_SequenceOfAddress_3 extends TColStd_SequenceOfAddress {
    constructor(theOther: TColStd_SequenceOfAddress);
  }

export declare class Handle_Storage_HeaderData {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Storage_HeaderData): void;
  get(): Storage_HeaderData;
}

  export declare class Handle_Storage_HeaderData_1 extends Handle_Storage_HeaderData {
    constructor();
  }

  export declare class Handle_Storage_HeaderData_2 extends Handle_Storage_HeaderData {
    constructor(thePtr: Storage_HeaderData);
  }

  export declare class Handle_Storage_HeaderData_3 extends Handle_Storage_HeaderData {
    constructor(theHandle: Handle_Storage_HeaderData);
  }

  export declare class Handle_Storage_HeaderData_4 extends Handle_Storage_HeaderData {
    constructor(theHandle: Handle_Storage_HeaderData);
  }

export declare class Handle_Storage_Root {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Storage_Root): void;
  get(): Storage_Root;
}

  export declare class Handle_Storage_Root_1 extends Handle_Storage_Root {
    constructor();
  }

  export declare class Handle_Storage_Root_2 extends Handle_Storage_Root {
    constructor(thePtr: Storage_Root);
  }

  export declare class Handle_Storage_Root_3 extends Handle_Storage_Root {
    constructor(theHandle: Handle_Storage_Root);
  }

  export declare class Handle_Storage_Root_4 extends Handle_Storage_Root {
    constructor(theHandle: Handle_Storage_Root);
  }

export declare class Handle_Storage_HSeqOfRoot {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Storage_HSeqOfRoot): void;
  get(): Storage_HSeqOfRoot;
}

  export declare class Handle_Storage_HSeqOfRoot_1 extends Handle_Storage_HSeqOfRoot {
    constructor();
  }

  export declare class Handle_Storage_HSeqOfRoot_2 extends Handle_Storage_HSeqOfRoot {
    constructor(thePtr: Storage_HSeqOfRoot);
  }

  export declare class Handle_Storage_HSeqOfRoot_3 extends Handle_Storage_HSeqOfRoot {
    constructor(theHandle: Handle_Storage_HSeqOfRoot);
  }

  export declare class Handle_Storage_HSeqOfRoot_4 extends Handle_Storage_HSeqOfRoot {
    constructor(theHandle: Handle_Storage_HSeqOfRoot);
  }

export declare class Handle_TColStd_HSequenceOfAsciiString {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColStd_HSequenceOfAsciiString): void;
  get(): TColStd_HSequenceOfAsciiString;
}

  export declare class Handle_TColStd_HSequenceOfAsciiString_1 extends Handle_TColStd_HSequenceOfAsciiString {
    constructor();
  }

  export declare class Handle_TColStd_HSequenceOfAsciiString_2 extends Handle_TColStd_HSequenceOfAsciiString {
    constructor(thePtr: TColStd_HSequenceOfAsciiString);
  }

  export declare class Handle_TColStd_HSequenceOfAsciiString_3 extends Handle_TColStd_HSequenceOfAsciiString {
    constructor(theHandle: Handle_TColStd_HSequenceOfAsciiString);
  }

  export declare class Handle_TColStd_HSequenceOfAsciiString_4 extends Handle_TColStd_HSequenceOfAsciiString {
    constructor(theHandle: Handle_TColStd_HSequenceOfAsciiString);
  }

export declare class Handle_Storage_Data {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Storage_Data): void;
  get(): Storage_Data;
}

  export declare class Handle_Storage_Data_1 extends Handle_Storage_Data {
    constructor();
  }

  export declare class Handle_Storage_Data_2 extends Handle_Storage_Data {
    constructor(thePtr: Storage_Data);
  }

  export declare class Handle_Storage_Data_3 extends Handle_Storage_Data {
    constructor(theHandle: Handle_Storage_Data);
  }

  export declare class Handle_Storage_Data_4 extends Handle_Storage_Data {
    constructor(theHandle: Handle_Storage_Data);
  }

export declare class Handle_Standard_MultiplyDefined {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Standard_MultiplyDefined): void;
  get(): Standard_MultiplyDefined;
}

  export declare class Handle_Standard_MultiplyDefined_1 extends Handle_Standard_MultiplyDefined {
    constructor();
  }

  export declare class Handle_Standard_MultiplyDefined_2 extends Handle_Standard_MultiplyDefined {
    constructor(thePtr: Standard_MultiplyDefined);
  }

  export declare class Handle_Standard_MultiplyDefined_3 extends Handle_Standard_MultiplyDefined {
    constructor(theHandle: Handle_Standard_MultiplyDefined);
  }

  export declare class Handle_Standard_MultiplyDefined_4 extends Handle_Standard_MultiplyDefined {
    constructor(theHandle: Handle_Standard_MultiplyDefined);
  }

export declare class Handle_Standard_ImmutableObject {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Standard_ImmutableObject): void;
  get(): Standard_ImmutableObject;
}

  export declare class Handle_Standard_ImmutableObject_1 extends Handle_Standard_ImmutableObject {
    constructor();
  }

  export declare class Handle_Standard_ImmutableObject_2 extends Handle_Standard_ImmutableObject {
    constructor(thePtr: Standard_ImmutableObject);
  }

  export declare class Handle_Standard_ImmutableObject_3 extends Handle_Standard_ImmutableObject {
    constructor(theHandle: Handle_Standard_ImmutableObject);
  }

  export declare class Handle_Standard_ImmutableObject_4 extends Handle_Standard_ImmutableObject {
    constructor(theHandle: Handle_Standard_ImmutableObject);
  }

export declare class TColStd_DataMapOfAsciiStringInteger extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TColStd_DataMapOfAsciiStringInteger): void;
  Assign(theOther: TColStd_DataMapOfAsciiStringInteger): TColStd_DataMapOfAsciiStringInteger;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TCollection_AsciiString, theItem: Standard_Integer): Standard_Boolean;
  Bound(theKey: TCollection_AsciiString, theItem: Standard_Integer): Standard_Integer;
  IsBound(theKey: TCollection_AsciiString): Standard_Boolean;
  UnBind(theKey: TCollection_AsciiString): Standard_Boolean;
  Seek(theKey: TCollection_AsciiString): Standard_Integer;
  Find_1(theKey: TCollection_AsciiString): Standard_Integer;
  Find_2(theKey: TCollection_AsciiString, theValue: Standard_Integer): Standard_Boolean;
  ChangeSeek(theKey: TCollection_AsciiString): Standard_Integer;
  ChangeFind(theKey: TCollection_AsciiString): Standard_Integer;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: Handle_NCollection_BaseAllocator): void;
  Size(): Standard_Integer;
}

  export declare class TColStd_DataMapOfAsciiStringInteger_1 extends TColStd_DataMapOfAsciiStringInteger {
    constructor();
  }

  export declare class TColStd_DataMapOfAsciiStringInteger_2 extends TColStd_DataMapOfAsciiStringInteger {
    constructor(theNbBuckets: Standard_Integer, theAllocator: Handle_NCollection_BaseAllocator);
  }

  export declare class TColStd_DataMapOfAsciiStringInteger_3 extends TColStd_DataMapOfAsciiStringInteger {
    constructor(theOther: TColStd_DataMapOfAsciiStringInteger);
  }

export declare class TColStd_Array1OfListOfInteger {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: TColStd_ListOfInteger): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: TColStd_Array1OfListOfInteger): TColStd_Array1OfListOfInteger;
  Move(theOther: TColStd_Array1OfListOfInteger): TColStd_Array1OfListOfInteger;
  First(): TColStd_ListOfInteger;
  ChangeFirst(): TColStd_ListOfInteger;
  Last(): TColStd_ListOfInteger;
  ChangeLast(): TColStd_ListOfInteger;
  Value(theIndex: Standard_Integer): TColStd_ListOfInteger;
  ChangeValue(theIndex: Standard_Integer): TColStd_ListOfInteger;
  SetValue(theIndex: Standard_Integer, theItem: TColStd_ListOfInteger): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class TColStd_Array1OfListOfInteger_1 extends TColStd_Array1OfListOfInteger {
    constructor();
  }

  export declare class TColStd_Array1OfListOfInteger_2 extends TColStd_Array1OfListOfInteger {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class TColStd_Array1OfListOfInteger_3 extends TColStd_Array1OfListOfInteger {
    constructor(theOther: TColStd_Array1OfListOfInteger);
  }

  export declare class TColStd_Array1OfListOfInteger_4 extends TColStd_Array1OfListOfInteger {
    constructor(theOther: TColStd_Array1OfListOfInteger);
  }

  export declare class TColStd_Array1OfListOfInteger_5 extends TColStd_Array1OfListOfInteger {
    constructor(theBegin: TColStd_ListOfInteger, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_TColStd_HArray1OfListOfInteger {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColStd_HArray1OfListOfInteger): void;
  get(): TColStd_HArray1OfListOfInteger;
}

  export declare class Handle_TColStd_HArray1OfListOfInteger_1 extends Handle_TColStd_HArray1OfListOfInteger {
    constructor();
  }

  export declare class Handle_TColStd_HArray1OfListOfInteger_2 extends Handle_TColStd_HArray1OfListOfInteger {
    constructor(thePtr: TColStd_HArray1OfListOfInteger);
  }

  export declare class Handle_TColStd_HArray1OfListOfInteger_3 extends Handle_TColStd_HArray1OfListOfInteger {
    constructor(theHandle: Handle_TColStd_HArray1OfListOfInteger);
  }

  export declare class Handle_TColStd_HArray1OfListOfInteger_4 extends Handle_TColStd_HArray1OfListOfInteger {
    constructor(theHandle: Handle_TColStd_HArray1OfListOfInteger);
  }

export declare class TColStd_DataMapOfStringInteger extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TColStd_DataMapOfStringInteger): void;
  Assign(theOther: TColStd_DataMapOfStringInteger): TColStd_DataMapOfStringInteger;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TCollection_ExtendedString, theItem: Standard_Integer): Standard_Boolean;
  Bound(theKey: TCollection_ExtendedString, theItem: Standard_Integer): Standard_Integer;
  IsBound(theKey: TCollection_ExtendedString): Standard_Boolean;
  UnBind(theKey: TCollection_ExtendedString): Standard_Boolean;
  Seek(theKey: TCollection_ExtendedString): Standard_Integer;
  Find_1(theKey: TCollection_ExtendedString): Standard_Integer;
  Find_2(theKey: TCollection_ExtendedString, theValue: Standard_Integer): Standard_Boolean;
  ChangeSeek(theKey: TCollection_ExtendedString): Standard_Integer;
  ChangeFind(theKey: TCollection_ExtendedString): Standard_Integer;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: Handle_NCollection_BaseAllocator): void;
  Size(): Standard_Integer;
}

  export declare class TColStd_DataMapOfStringInteger_1 extends TColStd_DataMapOfStringInteger {
    constructor();
  }

  export declare class TColStd_DataMapOfStringInteger_2 extends TColStd_DataMapOfStringInteger {
    constructor(theNbBuckets: Standard_Integer, theAllocator: Handle_NCollection_BaseAllocator);
  }

  export declare class TColStd_DataMapOfStringInteger_3 extends TColStd_DataMapOfStringInteger {
    constructor(theOther: TColStd_DataMapOfStringInteger);
  }

export declare class TColStd_ListOfReal extends NCollection_BaseList {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Assign(theOther: TColStd_ListOfReal): TColStd_ListOfReal;
  Clear(theAllocator: Handle_NCollection_BaseAllocator): void;
  First_1(): Standard_Real;
  First_2(): Standard_Real;
  Last_1(): Standard_Real;
  Last_2(): Standard_Real;
  Append_1(theItem: Standard_Real): Standard_Real;
  Append_3(theOther: TColStd_ListOfReal): void;
  Prepend_1(theItem: Standard_Real): Standard_Real;
  Prepend_2(theOther: TColStd_ListOfReal): void;
  RemoveFirst(): void;
  Reverse(): void;
}

  export declare class TColStd_ListOfReal_1 extends TColStd_ListOfReal {
    constructor();
  }

  export declare class TColStd_ListOfReal_2 extends TColStd_ListOfReal {
    constructor(theAllocator: Handle_NCollection_BaseAllocator);
  }

  export declare class TColStd_ListOfReal_3 extends TColStd_ListOfReal {
    constructor(theOther: TColStd_ListOfReal);
  }

export declare class TColStd_ListOfAsciiString extends NCollection_BaseList {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Assign(theOther: TColStd_ListOfAsciiString): TColStd_ListOfAsciiString;
  Clear(theAllocator: Handle_NCollection_BaseAllocator): void;
  First_1(): TCollection_AsciiString;
  First_2(): TCollection_AsciiString;
  Last_1(): TCollection_AsciiString;
  Last_2(): TCollection_AsciiString;
  Append_1(theItem: TCollection_AsciiString): TCollection_AsciiString;
  Append_3(theOther: TColStd_ListOfAsciiString): void;
  Prepend_1(theItem: TCollection_AsciiString): TCollection_AsciiString;
  Prepend_2(theOther: TColStd_ListOfAsciiString): void;
  RemoveFirst(): void;
  Reverse(): void;
}

  export declare class TColStd_ListOfAsciiString_1 extends TColStd_ListOfAsciiString {
    constructor();
  }

  export declare class TColStd_ListOfAsciiString_2 extends TColStd_ListOfAsciiString {
    constructor(theAllocator: Handle_NCollection_BaseAllocator);
  }

  export declare class TColStd_ListOfAsciiString_3 extends TColStd_ListOfAsciiString {
    constructor(theOther: TColStd_ListOfAsciiString);
  }

export declare class Handle_Storage_BaseDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Storage_BaseDriver): void;
  get(): Storage_BaseDriver;
}

  export declare class Handle_Storage_BaseDriver_1 extends Handle_Storage_BaseDriver {
    constructor();
  }

  export declare class Handle_Storage_BaseDriver_2 extends Handle_Storage_BaseDriver {
    constructor(thePtr: Storage_BaseDriver);
  }

  export declare class Handle_Storage_BaseDriver_3 extends Handle_Storage_BaseDriver {
    constructor(theHandle: Handle_Storage_BaseDriver);
  }

  export declare class Handle_Storage_BaseDriver_4 extends Handle_Storage_BaseDriver {
    constructor(theHandle: Handle_Storage_BaseDriver);
  }

export declare class Handle_FSD_BinaryFile {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: FSD_BinaryFile): void;
  get(): FSD_BinaryFile;
}

  export declare class Handle_FSD_BinaryFile_1 extends Handle_FSD_BinaryFile {
    constructor();
  }

  export declare class Handle_FSD_BinaryFile_2 extends Handle_FSD_BinaryFile {
    constructor(thePtr: FSD_BinaryFile);
  }

  export declare class Handle_FSD_BinaryFile_3 extends Handle_FSD_BinaryFile {
    constructor(theHandle: Handle_FSD_BinaryFile);
  }

  export declare class Handle_FSD_BinaryFile_4 extends Handle_FSD_BinaryFile {
    constructor(theHandle: Handle_FSD_BinaryFile);
  }

export declare class Handle_FSD_File {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: FSD_File): void;
  get(): FSD_File;
}

  export declare class Handle_FSD_File_1 extends Handle_FSD_File {
    constructor();
  }

  export declare class Handle_FSD_File_2 extends Handle_FSD_File {
    constructor(thePtr: FSD_File);
  }

  export declare class Handle_FSD_File_3 extends Handle_FSD_File {
    constructor(theHandle: Handle_FSD_File);
  }

  export declare class Handle_FSD_File_4 extends Handle_FSD_File {
    constructor(theHandle: Handle_FSD_File);
  }

export declare class Handle_FSD_CmpFile {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: FSD_CmpFile): void;
  get(): FSD_CmpFile;
}

  export declare class Handle_FSD_CmpFile_1 extends Handle_FSD_CmpFile {
    constructor();
  }

  export declare class Handle_FSD_CmpFile_2 extends Handle_FSD_CmpFile {
    constructor(thePtr: FSD_CmpFile);
  }

  export declare class Handle_FSD_CmpFile_3 extends Handle_FSD_CmpFile {
    constructor(theHandle: Handle_FSD_CmpFile);
  }

  export declare class Handle_FSD_CmpFile_4 extends Handle_FSD_CmpFile {
    constructor(theHandle: Handle_FSD_CmpFile);
  }

export declare class Handle_Standard_NegativeValue {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Standard_NegativeValue): void;
  get(): Standard_NegativeValue;
}

  export declare class Handle_Standard_NegativeValue_1 extends Handle_Standard_NegativeValue {
    constructor();
  }

  export declare class Handle_Standard_NegativeValue_2 extends Handle_Standard_NegativeValue {
    constructor(thePtr: Standard_NegativeValue);
  }

  export declare class Handle_Standard_NegativeValue_3 extends Handle_Standard_NegativeValue {
    constructor(theHandle: Handle_Standard_NegativeValue);
  }

  export declare class Handle_Standard_NegativeValue_4 extends Handle_Standard_NegativeValue {
    constructor(theHandle: Handle_Standard_NegativeValue);
  }

export declare class NCollection_Utf8String {
  Iterator(): NCollection_UtfIterator<Standard_Utf8Char>;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  GetChar(theCharIndex: Standard_Integer): Standard_Utf32Char;
  GetCharBuffer(theCharIndex: Standard_Integer): Standard_Utf8Char;
  FromLocale(theString: string, theLength: Standard_Integer): void;
  IsEqual(theCompare: NCollection_Utf8String): boolean;
  SubString(theStart: Standard_Integer, theEnd: Standard_Integer): NCollection_Utf8String;
  ToCString(): Standard_Utf8Char;
  ToUtf8(): NCollection_Utf8String;
  ToUtf16(): NCollection_Utf16String;
  ToUtf32(): NCollection_Utf32String;
  ToUtfWide(): NCollection_UtfWideString;
  ToLocale(theBuffer: string, theSizeBytes: Standard_Integer): boolean;
  IsEmpty(): boolean;
  Clear(): void;
  Assign(theOther: NCollection_Utf8String): NCollection_Utf8String;
  Swap(theOther: NCollection_Utf8String): void;
}

  export declare class NCollection_Utf8String_1 extends NCollection_Utf8String {
    constructor();
  }

  export declare class NCollection_Utf8String_2 extends NCollection_Utf8String {
    constructor(theCopy: NCollection_Utf8String);
  }

  export declare class NCollection_Utf8String_3 extends NCollection_Utf8String {
    constructor(theOther: NCollection_Utf8String);
  }

  export declare class NCollection_Utf8String_4 extends NCollection_Utf8String {
    constructor(theCopyUtf8: string, theLength: Standard_Integer);
  }

  export declare class NCollection_Utf8String_5 extends NCollection_Utf8String {
    constructor(theCopyUtf16: Standard_Utf16Char, theLength: Standard_Integer);
  }

  export declare class NCollection_Utf8String_6 extends NCollection_Utf8String {
    constructor(theCopyUtf32: Standard_Utf32Char, theLength: Standard_Integer);
  }

  export declare class NCollection_Utf8String_7 extends NCollection_Utf8String {
    constructor(theCopyUtfWide: Standard_WideChar, theLength: Standard_Integer);
  }

export declare class NCollection_Utf16String {
  Iterator(): NCollection_UtfIterator<Standard_Utf16Char>;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  GetChar(theCharIndex: Standard_Integer): Standard_Utf32Char;
  GetCharBuffer(theCharIndex: Standard_Integer): Standard_Utf16Char;
  FromLocale(theString: string, theLength: Standard_Integer): void;
  IsEqual(theCompare: NCollection_Utf16String): boolean;
  SubString(theStart: Standard_Integer, theEnd: Standard_Integer): NCollection_Utf16String;
  ToCString(): Standard_Utf16Char;
  ToUtf8(): NCollection_Utf8String;
  ToUtf16(): NCollection_Utf16String;
  ToUtf32(): NCollection_Utf32String;
  ToUtfWide(): NCollection_UtfWideString;
  ToLocale(theBuffer: string, theSizeBytes: Standard_Integer): boolean;
  IsEmpty(): boolean;
  Clear(): void;
  Assign(theOther: NCollection_Utf16String): NCollection_Utf16String;
  Swap(theOther: NCollection_Utf16String): void;
}

  export declare class NCollection_Utf16String_1 extends NCollection_Utf16String {
    constructor();
  }

  export declare class NCollection_Utf16String_2 extends NCollection_Utf16String {
    constructor(theCopy: NCollection_Utf16String);
  }

  export declare class NCollection_Utf16String_3 extends NCollection_Utf16String {
    constructor(theOther: NCollection_Utf16String);
  }

  export declare class NCollection_Utf16String_4 extends NCollection_Utf16String {
    constructor(theCopyUtf8: string, theLength: Standard_Integer);
  }

  export declare class NCollection_Utf16String_5 extends NCollection_Utf16String {
    constructor(theCopyUtf16: Standard_Utf16Char, theLength: Standard_Integer);
  }

  export declare class NCollection_Utf16String_6 extends NCollection_Utf16String {
    constructor(theCopyUtf32: Standard_Utf32Char, theLength: Standard_Integer);
  }

  export declare class NCollection_Utf16String_7 extends NCollection_Utf16String {
    constructor(theCopyUtfWide: Standard_WideChar, theLength: Standard_Integer);
  }

export declare class NCollection_Utf32String {
  Iterator(): NCollection_UtfIterator<Standard_Utf32Char>;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  GetChar(theCharIndex: Standard_Integer): Standard_Utf32Char;
  GetCharBuffer(theCharIndex: Standard_Integer): Standard_Utf32Char;
  FromLocale(theString: string, theLength: Standard_Integer): void;
  IsEqual(theCompare: NCollection_Utf32String): boolean;
  SubString(theStart: Standard_Integer, theEnd: Standard_Integer): NCollection_Utf32String;
  ToCString(): Standard_Utf32Char;
  ToUtf8(): NCollection_Utf8String;
  ToUtf16(): NCollection_Utf16String;
  ToUtf32(): NCollection_Utf32String;
  ToUtfWide(): NCollection_UtfWideString;
  ToLocale(theBuffer: string, theSizeBytes: Standard_Integer): boolean;
  IsEmpty(): boolean;
  Clear(): void;
  Assign(theOther: NCollection_Utf32String): NCollection_Utf32String;
  Swap(theOther: NCollection_Utf32String): void;
}

  export declare class NCollection_Utf32String_1 extends NCollection_Utf32String {
    constructor();
  }

  export declare class NCollection_Utf32String_2 extends NCollection_Utf32String {
    constructor(theCopy: NCollection_Utf32String);
  }

  export declare class NCollection_Utf32String_3 extends NCollection_Utf32String {
    constructor(theOther: NCollection_Utf32String);
  }

  export declare class NCollection_Utf32String_4 extends NCollection_Utf32String {
    constructor(theCopyUtf8: string, theLength: Standard_Integer);
  }

  export declare class NCollection_Utf32String_5 extends NCollection_Utf32String {
    constructor(theCopyUtf16: Standard_Utf16Char, theLength: Standard_Integer);
  }

  export declare class NCollection_Utf32String_6 extends NCollection_Utf32String {
    constructor(theCopyUtf32: Standard_Utf32Char, theLength: Standard_Integer);
  }

  export declare class NCollection_Utf32String_7 extends NCollection_Utf32String {
    constructor(theCopyUtfWide: Standard_WideChar, theLength: Standard_Integer);
  }

export declare class NCollection_UtfWideString {
  Iterator(): NCollection_UtfIterator<Standard_WideChar>;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  GetChar(theCharIndex: Standard_Integer): Standard_Utf32Char;
  GetCharBuffer(theCharIndex: Standard_Integer): Standard_WideChar;
  FromLocale(theString: string, theLength: Standard_Integer): void;
  IsEqual(theCompare: NCollection_UtfWideString): boolean;
  SubString(theStart: Standard_Integer, theEnd: Standard_Integer): NCollection_UtfWideString;
  ToCString(): Standard_WideChar;
  ToUtf8(): NCollection_Utf8String;
  ToUtf16(): NCollection_Utf16String;
  ToUtf32(): NCollection_Utf32String;
  ToUtfWide(): NCollection_UtfWideString;
  ToLocale(theBuffer: string, theSizeBytes: Standard_Integer): boolean;
  IsEmpty(): boolean;
  Clear(): void;
  Assign(theOther: NCollection_UtfWideString): NCollection_UtfWideString;
  Swap(theOther: NCollection_UtfWideString): void;
}

  export declare class NCollection_UtfWideString_1 extends NCollection_UtfWideString {
    constructor();
  }

  export declare class NCollection_UtfWideString_2 extends NCollection_UtfWideString {
    constructor(theCopy: NCollection_UtfWideString);
  }

  export declare class NCollection_UtfWideString_3 extends NCollection_UtfWideString {
    constructor(theOther: NCollection_UtfWideString);
  }

  export declare class NCollection_UtfWideString_4 extends NCollection_UtfWideString {
    constructor(theCopyUtf8: string, theLength: Standard_Integer);
  }

  export declare class NCollection_UtfWideString_5 extends NCollection_UtfWideString {
    constructor(theCopyUtf16: Standard_Utf16Char, theLength: Standard_Integer);
  }

  export declare class NCollection_UtfWideString_6 extends NCollection_UtfWideString {
    constructor(theCopyUtf32: Standard_Utf32Char, theLength: Standard_Integer);
  }

  export declare class NCollection_UtfWideString_7 extends NCollection_UtfWideString {
    constructor(theCopyUtfWide: Standard_WideChar, theLength: Standard_Integer);
  }

export declare class Handle_TColStd_HSequenceOfInteger {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColStd_HSequenceOfInteger): void;
  get(): TColStd_HSequenceOfInteger;
}

  export declare class Handle_TColStd_HSequenceOfInteger_1 extends Handle_TColStd_HSequenceOfInteger {
    constructor();
  }

  export declare class Handle_TColStd_HSequenceOfInteger_2 extends Handle_TColStd_HSequenceOfInteger {
    constructor(thePtr: TColStd_HSequenceOfInteger);
  }

  export declare class Handle_TColStd_HSequenceOfInteger_3 extends Handle_TColStd_HSequenceOfInteger {
    constructor(theHandle: Handle_TColStd_HSequenceOfInteger);
  }

  export declare class Handle_TColStd_HSequenceOfInteger_4 extends Handle_TColStd_HSequenceOfInteger {
    constructor(theHandle: Handle_TColStd_HSequenceOfInteger);
  }

export declare class Handle_TColStd_HArray1OfBoolean {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColStd_HArray1OfBoolean): void;
  get(): TColStd_HArray1OfBoolean;
}

  export declare class Handle_TColStd_HArray1OfBoolean_1 extends Handle_TColStd_HArray1OfBoolean {
    constructor();
  }

  export declare class Handle_TColStd_HArray1OfBoolean_2 extends Handle_TColStd_HArray1OfBoolean {
    constructor(thePtr: TColStd_HArray1OfBoolean);
  }

  export declare class Handle_TColStd_HArray1OfBoolean_3 extends Handle_TColStd_HArray1OfBoolean {
    constructor(theHandle: Handle_TColStd_HArray1OfBoolean);
  }

  export declare class Handle_TColStd_HArray1OfBoolean_4 extends Handle_TColStd_HArray1OfBoolean {
    constructor(theHandle: Handle_TColStd_HArray1OfBoolean);
  }

export declare class Handle_TColStd_HSequenceOfTransient {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColStd_HSequenceOfTransient): void;
  get(): TColStd_HSequenceOfTransient;
}

  export declare class Handle_TColStd_HSequenceOfTransient_1 extends Handle_TColStd_HSequenceOfTransient {
    constructor();
  }

  export declare class Handle_TColStd_HSequenceOfTransient_2 extends Handle_TColStd_HSequenceOfTransient {
    constructor(thePtr: TColStd_HSequenceOfTransient);
  }

  export declare class Handle_TColStd_HSequenceOfTransient_3 extends Handle_TColStd_HSequenceOfTransient {
    constructor(theHandle: Handle_TColStd_HSequenceOfTransient);
  }

  export declare class Handle_TColStd_HSequenceOfTransient_4 extends Handle_TColStd_HSequenceOfTransient {
    constructor(theHandle: Handle_TColStd_HSequenceOfTransient);
  }

export declare class Handle_TColStd_HArray2OfTransient {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColStd_HArray2OfTransient): void;
  get(): TColStd_HArray2OfTransient;
}

  export declare class Handle_TColStd_HArray2OfTransient_1 extends Handle_TColStd_HArray2OfTransient {
    constructor();
  }

  export declare class Handle_TColStd_HArray2OfTransient_2 extends Handle_TColStd_HArray2OfTransient {
    constructor(thePtr: TColStd_HArray2OfTransient);
  }

  export declare class Handle_TColStd_HArray2OfTransient_3 extends Handle_TColStd_HArray2OfTransient {
    constructor(theHandle: Handle_TColStd_HArray2OfTransient);
  }

  export declare class Handle_TColStd_HArray2OfTransient_4 extends Handle_TColStd_HArray2OfTransient {
    constructor(theHandle: Handle_TColStd_HArray2OfTransient);
  }

export declare class Handle_TColStd_HPackedMapOfInteger {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColStd_HPackedMapOfInteger): void;
  get(): TColStd_HPackedMapOfInteger;
}

  export declare class Handle_TColStd_HPackedMapOfInteger_1 extends Handle_TColStd_HPackedMapOfInteger {
    constructor();
  }

  export declare class Handle_TColStd_HPackedMapOfInteger_2 extends Handle_TColStd_HPackedMapOfInteger {
    constructor(thePtr: TColStd_HPackedMapOfInteger);
  }

  export declare class Handle_TColStd_HPackedMapOfInteger_3 extends Handle_TColStd_HPackedMapOfInteger {
    constructor(theHandle: Handle_TColStd_HPackedMapOfInteger);
  }

  export declare class Handle_TColStd_HPackedMapOfInteger_4 extends Handle_TColStd_HPackedMapOfInteger {
    constructor(theHandle: Handle_TColStd_HPackedMapOfInteger);
  }

export declare class Resource_DataMapOfAsciiStringAsciiString extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: Resource_DataMapOfAsciiStringAsciiString): void;
  Assign(theOther: Resource_DataMapOfAsciiStringAsciiString): Resource_DataMapOfAsciiStringAsciiString;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TCollection_AsciiString, theItem: TCollection_AsciiString): Standard_Boolean;
  Bound(theKey: TCollection_AsciiString, theItem: TCollection_AsciiString): TCollection_AsciiString;
  IsBound(theKey: TCollection_AsciiString): Standard_Boolean;
  UnBind(theKey: TCollection_AsciiString): Standard_Boolean;
  Seek(theKey: TCollection_AsciiString): TCollection_AsciiString;
  Find_1(theKey: TCollection_AsciiString): TCollection_AsciiString;
  Find_2(theKey: TCollection_AsciiString, theValue: TCollection_AsciiString): Standard_Boolean;
  ChangeSeek(theKey: TCollection_AsciiString): TCollection_AsciiString;
  ChangeFind(theKey: TCollection_AsciiString): TCollection_AsciiString;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: Handle_NCollection_BaseAllocator): void;
  Size(): Standard_Integer;
}

  export declare class Resource_DataMapOfAsciiStringAsciiString_1 extends Resource_DataMapOfAsciiStringAsciiString {
    constructor();
  }

  export declare class Resource_DataMapOfAsciiStringAsciiString_2 extends Resource_DataMapOfAsciiStringAsciiString {
    constructor(theNbBuckets: Standard_Integer, theAllocator: Handle_NCollection_BaseAllocator);
  }

  export declare class Resource_DataMapOfAsciiStringAsciiString_3 extends Resource_DataMapOfAsciiStringAsciiString {
    constructor(theOther: Resource_DataMapOfAsciiStringAsciiString);
  }

export declare class Handle_StdFail_InfiniteSolutions {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StdFail_InfiniteSolutions): void;
  get(): StdFail_InfiniteSolutions;
}

  export declare class Handle_StdFail_InfiniteSolutions_1 extends Handle_StdFail_InfiniteSolutions {
    constructor();
  }

  export declare class Handle_StdFail_InfiniteSolutions_2 extends Handle_StdFail_InfiniteSolutions {
    constructor(thePtr: StdFail_InfiniteSolutions);
  }

  export declare class Handle_StdFail_InfiniteSolutions_3 extends Handle_StdFail_InfiniteSolutions {
    constructor(theHandle: Handle_StdFail_InfiniteSolutions);
  }

  export declare class Handle_StdFail_InfiniteSolutions_4 extends Handle_StdFail_InfiniteSolutions {
    constructor(theHandle: Handle_StdFail_InfiniteSolutions);
  }

export declare class Handle_TColStd_HArray1OfAsciiString {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColStd_HArray1OfAsciiString): void;
  get(): TColStd_HArray1OfAsciiString;
}

  export declare class Handle_TColStd_HArray1OfAsciiString_1 extends Handle_TColStd_HArray1OfAsciiString {
    constructor();
  }

  export declare class Handle_TColStd_HArray1OfAsciiString_2 extends Handle_TColStd_HArray1OfAsciiString {
    constructor(thePtr: TColStd_HArray1OfAsciiString);
  }

  export declare class Handle_TColStd_HArray1OfAsciiString_3 extends Handle_TColStd_HArray1OfAsciiString {
    constructor(theHandle: Handle_TColStd_HArray1OfAsciiString);
  }

  export declare class Handle_TColStd_HArray1OfAsciiString_4 extends Handle_TColStd_HArray1OfAsciiString {
    constructor(theHandle: Handle_TColStd_HArray1OfAsciiString);
  }

export declare class Handle_Message_Attribute {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Message_Attribute): void;
  get(): Message_Attribute;
}

  export declare class Handle_Message_Attribute_1 extends Handle_Message_Attribute {
    constructor();
  }

  export declare class Handle_Message_Attribute_2 extends Handle_Message_Attribute {
    constructor(thePtr: Message_Attribute);
  }

  export declare class Handle_Message_Attribute_3 extends Handle_Message_Attribute {
    constructor(theHandle: Handle_Message_Attribute);
  }

  export declare class Handle_Message_Attribute_4 extends Handle_Message_Attribute {
    constructor(theHandle: Handle_Message_Attribute);
  }

export declare class Handle_Message_CompositeAlerts {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Message_CompositeAlerts): void;
  get(): Message_CompositeAlerts;
}

  export declare class Handle_Message_CompositeAlerts_1 extends Handle_Message_CompositeAlerts {
    constructor();
  }

  export declare class Handle_Message_CompositeAlerts_2 extends Handle_Message_CompositeAlerts {
    constructor(thePtr: Message_CompositeAlerts);
  }

  export declare class Handle_Message_CompositeAlerts_3 extends Handle_Message_CompositeAlerts {
    constructor(theHandle: Handle_Message_CompositeAlerts);
  }

  export declare class Handle_Message_CompositeAlerts_4 extends Handle_Message_CompositeAlerts {
    constructor(theHandle: Handle_Message_CompositeAlerts);
  }

export declare class Message_ListOfMsg extends NCollection_BaseList {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Assign(theOther: Message_ListOfMsg): Message_ListOfMsg;
  Clear(theAllocator: Handle_NCollection_BaseAllocator): void;
  First_1(): Message_Msg;
  First_2(): Message_Msg;
  Last_1(): Message_Msg;
  Last_2(): Message_Msg;
  Append_1(theItem: Message_Msg): Message_Msg;
  Append_3(theOther: Message_ListOfMsg): void;
  Prepend_1(theItem: Message_Msg): Message_Msg;
  Prepend_2(theOther: Message_ListOfMsg): void;
  RemoveFirst(): void;
  Reverse(): void;
}

  export declare class Message_ListOfMsg_1 extends Message_ListOfMsg {
    constructor();
  }

  export declare class Message_ListOfMsg_2 extends Message_ListOfMsg {
    constructor(theAllocator: Handle_NCollection_BaseAllocator);
  }

  export declare class Message_ListOfMsg_3 extends Message_ListOfMsg {
    constructor(theOther: Message_ListOfMsg);
  }

export declare class Handle_Message_PrinterOStream {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Message_PrinterOStream): void;
  get(): Message_PrinterOStream;
}

  export declare class Handle_Message_PrinterOStream_1 extends Handle_Message_PrinterOStream {
    constructor();
  }

  export declare class Handle_Message_PrinterOStream_2 extends Handle_Message_PrinterOStream {
    constructor(thePtr: Message_PrinterOStream);
  }

  export declare class Handle_Message_PrinterOStream_3 extends Handle_Message_PrinterOStream {
    constructor(theHandle: Handle_Message_PrinterOStream);
  }

  export declare class Handle_Message_PrinterOStream_4 extends Handle_Message_PrinterOStream {
    constructor(theHandle: Handle_Message_PrinterOStream);
  }

export declare class Handle_Message_PrinterSystemLog {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Message_PrinterSystemLog): void;
  get(): Message_PrinterSystemLog;
}

  export declare class Handle_Message_PrinterSystemLog_1 extends Handle_Message_PrinterSystemLog {
    constructor();
  }

  export declare class Handle_Message_PrinterSystemLog_2 extends Handle_Message_PrinterSystemLog {
    constructor(thePtr: Message_PrinterSystemLog);
  }

  export declare class Handle_Message_PrinterSystemLog_3 extends Handle_Message_PrinterSystemLog {
    constructor(theHandle: Handle_Message_PrinterSystemLog);
  }

  export declare class Handle_Message_PrinterSystemLog_4 extends Handle_Message_PrinterSystemLog {
    constructor(theHandle: Handle_Message_PrinterSystemLog);
  }

export declare class Handle_Message_PrinterToReport {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Message_PrinterToReport): void;
  get(): Message_PrinterToReport;
}

  export declare class Handle_Message_PrinterToReport_1 extends Handle_Message_PrinterToReport {
    constructor();
  }

  export declare class Handle_Message_PrinterToReport_2 extends Handle_Message_PrinterToReport {
    constructor(thePtr: Message_PrinterToReport);
  }

  export declare class Handle_Message_PrinterToReport_3 extends Handle_Message_PrinterToReport {
    constructor(theHandle: Handle_Message_PrinterToReport);
  }

  export declare class Handle_Message_PrinterToReport_4 extends Handle_Message_PrinterToReport {
    constructor(theHandle: Handle_Message_PrinterToReport);
  }

export declare class Handle_NCollection_AccAllocator {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: NCollection_AccAllocator): void;
  get(): NCollection_AccAllocator;
}

  export declare class Handle_NCollection_AccAllocator_1 extends Handle_NCollection_AccAllocator {
    constructor();
  }

  export declare class Handle_NCollection_AccAllocator_2 extends Handle_NCollection_AccAllocator {
    constructor(thePtr: NCollection_AccAllocator);
  }

  export declare class Handle_NCollection_AccAllocator_3 extends Handle_NCollection_AccAllocator {
    constructor(theHandle: Handle_NCollection_AccAllocator);
  }

  export declare class Handle_NCollection_AccAllocator_4 extends Handle_NCollection_AccAllocator {
    constructor(theHandle: Handle_NCollection_AccAllocator);
  }

export declare class Handle_NCollection_AlignedAllocator {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: NCollection_AlignedAllocator): void;
  get(): NCollection_AlignedAllocator;
}

  export declare class Handle_NCollection_AlignedAllocator_1 extends Handle_NCollection_AlignedAllocator {
    constructor();
  }

  export declare class Handle_NCollection_AlignedAllocator_2 extends Handle_NCollection_AlignedAllocator {
    constructor(thePtr: NCollection_AlignedAllocator);
  }

  export declare class Handle_NCollection_AlignedAllocator_3 extends Handle_NCollection_AlignedAllocator {
    constructor(theHandle: Handle_NCollection_AlignedAllocator);
  }

  export declare class Handle_NCollection_AlignedAllocator_4 extends Handle_NCollection_AlignedAllocator {
    constructor(theHandle: Handle_NCollection_AlignedAllocator);
  }

export declare class Handle_NCollection_HeapAllocator {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: NCollection_HeapAllocator): void;
  get(): NCollection_HeapAllocator;
}

  export declare class Handle_NCollection_HeapAllocator_1 extends Handle_NCollection_HeapAllocator {
    constructor();
  }

  export declare class Handle_NCollection_HeapAllocator_2 extends Handle_NCollection_HeapAllocator {
    constructor(thePtr: NCollection_HeapAllocator);
  }

  export declare class Handle_NCollection_HeapAllocator_3 extends Handle_NCollection_HeapAllocator {
    constructor(theHandle: Handle_NCollection_HeapAllocator);
  }

  export declare class Handle_NCollection_HeapAllocator_4 extends Handle_NCollection_HeapAllocator {
    constructor(theHandle: Handle_NCollection_HeapAllocator);
  }

export declare class Handle_NCollection_WinHeapAllocator {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: NCollection_WinHeapAllocator): void;
  get(): NCollection_WinHeapAllocator;
}

  export declare class Handle_NCollection_WinHeapAllocator_1 extends Handle_NCollection_WinHeapAllocator {
    constructor();
  }

  export declare class Handle_NCollection_WinHeapAllocator_2 extends Handle_NCollection_WinHeapAllocator {
    constructor(thePtr: NCollection_WinHeapAllocator);
  }

  export declare class Handle_NCollection_WinHeapAllocator_3 extends Handle_NCollection_WinHeapAllocator {
    constructor(theHandle: Handle_NCollection_WinHeapAllocator);
  }

  export declare class Handle_NCollection_WinHeapAllocator_4 extends Handle_NCollection_WinHeapAllocator {
    constructor(theHandle: Handle_NCollection_WinHeapAllocator);
  }

export declare class Handle_OSD_Exception {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OSD_Exception): void;
  get(): OSD_Exception;
}

  export declare class Handle_OSD_Exception_1 extends Handle_OSD_Exception {
    constructor();
  }

  export declare class Handle_OSD_Exception_2 extends Handle_OSD_Exception {
    constructor(thePtr: OSD_Exception);
  }

  export declare class Handle_OSD_Exception_3 extends Handle_OSD_Exception {
    constructor(theHandle: Handle_OSD_Exception);
  }

  export declare class Handle_OSD_Exception_4 extends Handle_OSD_Exception {
    constructor(theHandle: Handle_OSD_Exception);
  }

export declare class Handle_OSD_Exception_ACCESS_VIOLATION {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OSD_Exception_ACCESS_VIOLATION): void;
  get(): OSD_Exception_ACCESS_VIOLATION;
}

  export declare class Handle_OSD_Exception_ACCESS_VIOLATION_1 extends Handle_OSD_Exception_ACCESS_VIOLATION {
    constructor();
  }

  export declare class Handle_OSD_Exception_ACCESS_VIOLATION_2 extends Handle_OSD_Exception_ACCESS_VIOLATION {
    constructor(thePtr: OSD_Exception_ACCESS_VIOLATION);
  }

  export declare class Handle_OSD_Exception_ACCESS_VIOLATION_3 extends Handle_OSD_Exception_ACCESS_VIOLATION {
    constructor(theHandle: Handle_OSD_Exception_ACCESS_VIOLATION);
  }

  export declare class Handle_OSD_Exception_ACCESS_VIOLATION_4 extends Handle_OSD_Exception_ACCESS_VIOLATION {
    constructor(theHandle: Handle_OSD_Exception_ACCESS_VIOLATION);
  }

export declare class Handle_OSD_Exception_ARRAY_BOUNDS_EXCEEDED {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OSD_Exception_ARRAY_BOUNDS_EXCEEDED): void;
  get(): OSD_Exception_ARRAY_BOUNDS_EXCEEDED;
}

  export declare class Handle_OSD_Exception_ARRAY_BOUNDS_EXCEEDED_1 extends Handle_OSD_Exception_ARRAY_BOUNDS_EXCEEDED {
    constructor();
  }

  export declare class Handle_OSD_Exception_ARRAY_BOUNDS_EXCEEDED_2 extends Handle_OSD_Exception_ARRAY_BOUNDS_EXCEEDED {
    constructor(thePtr: OSD_Exception_ARRAY_BOUNDS_EXCEEDED);
  }

  export declare class Handle_OSD_Exception_ARRAY_BOUNDS_EXCEEDED_3 extends Handle_OSD_Exception_ARRAY_BOUNDS_EXCEEDED {
    constructor(theHandle: Handle_OSD_Exception_ARRAY_BOUNDS_EXCEEDED);
  }

  export declare class Handle_OSD_Exception_ARRAY_BOUNDS_EXCEEDED_4 extends Handle_OSD_Exception_ARRAY_BOUNDS_EXCEEDED {
    constructor(theHandle: Handle_OSD_Exception_ARRAY_BOUNDS_EXCEEDED);
  }

export declare class Handle_OSD_Exception_CTRL_BREAK {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OSD_Exception_CTRL_BREAK): void;
  get(): OSD_Exception_CTRL_BREAK;
}

  export declare class Handle_OSD_Exception_CTRL_BREAK_1 extends Handle_OSD_Exception_CTRL_BREAK {
    constructor();
  }

  export declare class Handle_OSD_Exception_CTRL_BREAK_2 extends Handle_OSD_Exception_CTRL_BREAK {
    constructor(thePtr: OSD_Exception_CTRL_BREAK);
  }

  export declare class Handle_OSD_Exception_CTRL_BREAK_3 extends Handle_OSD_Exception_CTRL_BREAK {
    constructor(theHandle: Handle_OSD_Exception_CTRL_BREAK);
  }

  export declare class Handle_OSD_Exception_CTRL_BREAK_4 extends Handle_OSD_Exception_CTRL_BREAK {
    constructor(theHandle: Handle_OSD_Exception_CTRL_BREAK);
  }

export declare class Handle_OSD_Exception_FLT_DENORMAL_OPERAND {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OSD_Exception_FLT_DENORMAL_OPERAND): void;
  get(): OSD_Exception_FLT_DENORMAL_OPERAND;
}

  export declare class Handle_OSD_Exception_FLT_DENORMAL_OPERAND_1 extends Handle_OSD_Exception_FLT_DENORMAL_OPERAND {
    constructor();
  }

  export declare class Handle_OSD_Exception_FLT_DENORMAL_OPERAND_2 extends Handle_OSD_Exception_FLT_DENORMAL_OPERAND {
    constructor(thePtr: OSD_Exception_FLT_DENORMAL_OPERAND);
  }

  export declare class Handle_OSD_Exception_FLT_DENORMAL_OPERAND_3 extends Handle_OSD_Exception_FLT_DENORMAL_OPERAND {
    constructor(theHandle: Handle_OSD_Exception_FLT_DENORMAL_OPERAND);
  }

  export declare class Handle_OSD_Exception_FLT_DENORMAL_OPERAND_4 extends Handle_OSD_Exception_FLT_DENORMAL_OPERAND {
    constructor(theHandle: Handle_OSD_Exception_FLT_DENORMAL_OPERAND);
  }

export declare class Handle_OSD_Exception_FLT_DIVIDE_BY_ZERO {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OSD_Exception_FLT_DIVIDE_BY_ZERO): void;
  get(): OSD_Exception_FLT_DIVIDE_BY_ZERO;
}

  export declare class Handle_OSD_Exception_FLT_DIVIDE_BY_ZERO_1 extends Handle_OSD_Exception_FLT_DIVIDE_BY_ZERO {
    constructor();
  }

  export declare class Handle_OSD_Exception_FLT_DIVIDE_BY_ZERO_2 extends Handle_OSD_Exception_FLT_DIVIDE_BY_ZERO {
    constructor(thePtr: OSD_Exception_FLT_DIVIDE_BY_ZERO);
  }

  export declare class Handle_OSD_Exception_FLT_DIVIDE_BY_ZERO_3 extends Handle_OSD_Exception_FLT_DIVIDE_BY_ZERO {
    constructor(theHandle: Handle_OSD_Exception_FLT_DIVIDE_BY_ZERO);
  }

  export declare class Handle_OSD_Exception_FLT_DIVIDE_BY_ZERO_4 extends Handle_OSD_Exception_FLT_DIVIDE_BY_ZERO {
    constructor(theHandle: Handle_OSD_Exception_FLT_DIVIDE_BY_ZERO);
  }

export declare class Handle_OSD_Exception_FLT_INEXACT_RESULT {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OSD_Exception_FLT_INEXACT_RESULT): void;
  get(): OSD_Exception_FLT_INEXACT_RESULT;
}

  export declare class Handle_OSD_Exception_FLT_INEXACT_RESULT_1 extends Handle_OSD_Exception_FLT_INEXACT_RESULT {
    constructor();
  }

  export declare class Handle_OSD_Exception_FLT_INEXACT_RESULT_2 extends Handle_OSD_Exception_FLT_INEXACT_RESULT {
    constructor(thePtr: OSD_Exception_FLT_INEXACT_RESULT);
  }

  export declare class Handle_OSD_Exception_FLT_INEXACT_RESULT_3 extends Handle_OSD_Exception_FLT_INEXACT_RESULT {
    constructor(theHandle: Handle_OSD_Exception_FLT_INEXACT_RESULT);
  }

  export declare class Handle_OSD_Exception_FLT_INEXACT_RESULT_4 extends Handle_OSD_Exception_FLT_INEXACT_RESULT {
    constructor(theHandle: Handle_OSD_Exception_FLT_INEXACT_RESULT);
  }

export declare class Handle_OSD_Exception_FLT_INVALID_OPERATION {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OSD_Exception_FLT_INVALID_OPERATION): void;
  get(): OSD_Exception_FLT_INVALID_OPERATION;
}

  export declare class Handle_OSD_Exception_FLT_INVALID_OPERATION_1 extends Handle_OSD_Exception_FLT_INVALID_OPERATION {
    constructor();
  }

  export declare class Handle_OSD_Exception_FLT_INVALID_OPERATION_2 extends Handle_OSD_Exception_FLT_INVALID_OPERATION {
    constructor(thePtr: OSD_Exception_FLT_INVALID_OPERATION);
  }

  export declare class Handle_OSD_Exception_FLT_INVALID_OPERATION_3 extends Handle_OSD_Exception_FLT_INVALID_OPERATION {
    constructor(theHandle: Handle_OSD_Exception_FLT_INVALID_OPERATION);
  }

  export declare class Handle_OSD_Exception_FLT_INVALID_OPERATION_4 extends Handle_OSD_Exception_FLT_INVALID_OPERATION {
    constructor(theHandle: Handle_OSD_Exception_FLT_INVALID_OPERATION);
  }

export declare class Handle_OSD_Exception_FLT_OVERFLOW {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OSD_Exception_FLT_OVERFLOW): void;
  get(): OSD_Exception_FLT_OVERFLOW;
}

  export declare class Handle_OSD_Exception_FLT_OVERFLOW_1 extends Handle_OSD_Exception_FLT_OVERFLOW {
    constructor();
  }

  export declare class Handle_OSD_Exception_FLT_OVERFLOW_2 extends Handle_OSD_Exception_FLT_OVERFLOW {
    constructor(thePtr: OSD_Exception_FLT_OVERFLOW);
  }

  export declare class Handle_OSD_Exception_FLT_OVERFLOW_3 extends Handle_OSD_Exception_FLT_OVERFLOW {
    constructor(theHandle: Handle_OSD_Exception_FLT_OVERFLOW);
  }

  export declare class Handle_OSD_Exception_FLT_OVERFLOW_4 extends Handle_OSD_Exception_FLT_OVERFLOW {
    constructor(theHandle: Handle_OSD_Exception_FLT_OVERFLOW);
  }

export declare class Handle_OSD_Exception_FLT_STACK_CHECK {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OSD_Exception_FLT_STACK_CHECK): void;
  get(): OSD_Exception_FLT_STACK_CHECK;
}

  export declare class Handle_OSD_Exception_FLT_STACK_CHECK_1 extends Handle_OSD_Exception_FLT_STACK_CHECK {
    constructor();
  }

  export declare class Handle_OSD_Exception_FLT_STACK_CHECK_2 extends Handle_OSD_Exception_FLT_STACK_CHECK {
    constructor(thePtr: OSD_Exception_FLT_STACK_CHECK);
  }

  export declare class Handle_OSD_Exception_FLT_STACK_CHECK_3 extends Handle_OSD_Exception_FLT_STACK_CHECK {
    constructor(theHandle: Handle_OSD_Exception_FLT_STACK_CHECK);
  }

  export declare class Handle_OSD_Exception_FLT_STACK_CHECK_4 extends Handle_OSD_Exception_FLT_STACK_CHECK {
    constructor(theHandle: Handle_OSD_Exception_FLT_STACK_CHECK);
  }

export declare class Handle_OSD_Exception_FLT_UNDERFLOW {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OSD_Exception_FLT_UNDERFLOW): void;
  get(): OSD_Exception_FLT_UNDERFLOW;
}

  export declare class Handle_OSD_Exception_FLT_UNDERFLOW_1 extends Handle_OSD_Exception_FLT_UNDERFLOW {
    constructor();
  }

  export declare class Handle_OSD_Exception_FLT_UNDERFLOW_2 extends Handle_OSD_Exception_FLT_UNDERFLOW {
    constructor(thePtr: OSD_Exception_FLT_UNDERFLOW);
  }

  export declare class Handle_OSD_Exception_FLT_UNDERFLOW_3 extends Handle_OSD_Exception_FLT_UNDERFLOW {
    constructor(theHandle: Handle_OSD_Exception_FLT_UNDERFLOW);
  }

  export declare class Handle_OSD_Exception_FLT_UNDERFLOW_4 extends Handle_OSD_Exception_FLT_UNDERFLOW {
    constructor(theHandle: Handle_OSD_Exception_FLT_UNDERFLOW);
  }

export declare class Handle_OSD_Exception_ILLEGAL_INSTRUCTION {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OSD_Exception_ILLEGAL_INSTRUCTION): void;
  get(): OSD_Exception_ILLEGAL_INSTRUCTION;
}

  export declare class Handle_OSD_Exception_ILLEGAL_INSTRUCTION_1 extends Handle_OSD_Exception_ILLEGAL_INSTRUCTION {
    constructor();
  }

  export declare class Handle_OSD_Exception_ILLEGAL_INSTRUCTION_2 extends Handle_OSD_Exception_ILLEGAL_INSTRUCTION {
    constructor(thePtr: OSD_Exception_ILLEGAL_INSTRUCTION);
  }

  export declare class Handle_OSD_Exception_ILLEGAL_INSTRUCTION_3 extends Handle_OSD_Exception_ILLEGAL_INSTRUCTION {
    constructor(theHandle: Handle_OSD_Exception_ILLEGAL_INSTRUCTION);
  }

  export declare class Handle_OSD_Exception_ILLEGAL_INSTRUCTION_4 extends Handle_OSD_Exception_ILLEGAL_INSTRUCTION {
    constructor(theHandle: Handle_OSD_Exception_ILLEGAL_INSTRUCTION);
  }

export declare class Handle_OSD_Exception_INT_DIVIDE_BY_ZERO {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OSD_Exception_INT_DIVIDE_BY_ZERO): void;
  get(): OSD_Exception_INT_DIVIDE_BY_ZERO;
}

  export declare class Handle_OSD_Exception_INT_DIVIDE_BY_ZERO_1 extends Handle_OSD_Exception_INT_DIVIDE_BY_ZERO {
    constructor();
  }

  export declare class Handle_OSD_Exception_INT_DIVIDE_BY_ZERO_2 extends Handle_OSD_Exception_INT_DIVIDE_BY_ZERO {
    constructor(thePtr: OSD_Exception_INT_DIVIDE_BY_ZERO);
  }

  export declare class Handle_OSD_Exception_INT_DIVIDE_BY_ZERO_3 extends Handle_OSD_Exception_INT_DIVIDE_BY_ZERO {
    constructor(theHandle: Handle_OSD_Exception_INT_DIVIDE_BY_ZERO);
  }

  export declare class Handle_OSD_Exception_INT_DIVIDE_BY_ZERO_4 extends Handle_OSD_Exception_INT_DIVIDE_BY_ZERO {
    constructor(theHandle: Handle_OSD_Exception_INT_DIVIDE_BY_ZERO);
  }

export declare class Handle_OSD_Exception_INT_OVERFLOW {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OSD_Exception_INT_OVERFLOW): void;
  get(): OSD_Exception_INT_OVERFLOW;
}

  export declare class Handle_OSD_Exception_INT_OVERFLOW_1 extends Handle_OSD_Exception_INT_OVERFLOW {
    constructor();
  }

  export declare class Handle_OSD_Exception_INT_OVERFLOW_2 extends Handle_OSD_Exception_INT_OVERFLOW {
    constructor(thePtr: OSD_Exception_INT_OVERFLOW);
  }

  export declare class Handle_OSD_Exception_INT_OVERFLOW_3 extends Handle_OSD_Exception_INT_OVERFLOW {
    constructor(theHandle: Handle_OSD_Exception_INT_OVERFLOW);
  }

  export declare class Handle_OSD_Exception_INT_OVERFLOW_4 extends Handle_OSD_Exception_INT_OVERFLOW {
    constructor(theHandle: Handle_OSD_Exception_INT_OVERFLOW);
  }

export declare class Handle_OSD_Exception_INVALID_DISPOSITION {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OSD_Exception_INVALID_DISPOSITION): void;
  get(): OSD_Exception_INVALID_DISPOSITION;
}

  export declare class Handle_OSD_Exception_INVALID_DISPOSITION_1 extends Handle_OSD_Exception_INVALID_DISPOSITION {
    constructor();
  }

  export declare class Handle_OSD_Exception_INVALID_DISPOSITION_2 extends Handle_OSD_Exception_INVALID_DISPOSITION {
    constructor(thePtr: OSD_Exception_INVALID_DISPOSITION);
  }

  export declare class Handle_OSD_Exception_INVALID_DISPOSITION_3 extends Handle_OSD_Exception_INVALID_DISPOSITION {
    constructor(theHandle: Handle_OSD_Exception_INVALID_DISPOSITION);
  }

  export declare class Handle_OSD_Exception_INVALID_DISPOSITION_4 extends Handle_OSD_Exception_INVALID_DISPOSITION {
    constructor(theHandle: Handle_OSD_Exception_INVALID_DISPOSITION);
  }

export declare class Handle_OSD_Exception_IN_PAGE_ERROR {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OSD_Exception_IN_PAGE_ERROR): void;
  get(): OSD_Exception_IN_PAGE_ERROR;
}

  export declare class Handle_OSD_Exception_IN_PAGE_ERROR_1 extends Handle_OSD_Exception_IN_PAGE_ERROR {
    constructor();
  }

  export declare class Handle_OSD_Exception_IN_PAGE_ERROR_2 extends Handle_OSD_Exception_IN_PAGE_ERROR {
    constructor(thePtr: OSD_Exception_IN_PAGE_ERROR);
  }

  export declare class Handle_OSD_Exception_IN_PAGE_ERROR_3 extends Handle_OSD_Exception_IN_PAGE_ERROR {
    constructor(theHandle: Handle_OSD_Exception_IN_PAGE_ERROR);
  }

  export declare class Handle_OSD_Exception_IN_PAGE_ERROR_4 extends Handle_OSD_Exception_IN_PAGE_ERROR {
    constructor(theHandle: Handle_OSD_Exception_IN_PAGE_ERROR);
  }

export declare class Handle_OSD_Exception_NONCONTINUABLE_EXCEPTION {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OSD_Exception_NONCONTINUABLE_EXCEPTION): void;
  get(): OSD_Exception_NONCONTINUABLE_EXCEPTION;
}

  export declare class Handle_OSD_Exception_NONCONTINUABLE_EXCEPTION_1 extends Handle_OSD_Exception_NONCONTINUABLE_EXCEPTION {
    constructor();
  }

  export declare class Handle_OSD_Exception_NONCONTINUABLE_EXCEPTION_2 extends Handle_OSD_Exception_NONCONTINUABLE_EXCEPTION {
    constructor(thePtr: OSD_Exception_NONCONTINUABLE_EXCEPTION);
  }

  export declare class Handle_OSD_Exception_NONCONTINUABLE_EXCEPTION_3 extends Handle_OSD_Exception_NONCONTINUABLE_EXCEPTION {
    constructor(theHandle: Handle_OSD_Exception_NONCONTINUABLE_EXCEPTION);
  }

  export declare class Handle_OSD_Exception_NONCONTINUABLE_EXCEPTION_4 extends Handle_OSD_Exception_NONCONTINUABLE_EXCEPTION {
    constructor(theHandle: Handle_OSD_Exception_NONCONTINUABLE_EXCEPTION);
  }

export declare class Handle_OSD_Exception_PRIV_INSTRUCTION {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OSD_Exception_PRIV_INSTRUCTION): void;
  get(): OSD_Exception_PRIV_INSTRUCTION;
}

  export declare class Handle_OSD_Exception_PRIV_INSTRUCTION_1 extends Handle_OSD_Exception_PRIV_INSTRUCTION {
    constructor();
  }

  export declare class Handle_OSD_Exception_PRIV_INSTRUCTION_2 extends Handle_OSD_Exception_PRIV_INSTRUCTION {
    constructor(thePtr: OSD_Exception_PRIV_INSTRUCTION);
  }

  export declare class Handle_OSD_Exception_PRIV_INSTRUCTION_3 extends Handle_OSD_Exception_PRIV_INSTRUCTION {
    constructor(theHandle: Handle_OSD_Exception_PRIV_INSTRUCTION);
  }

  export declare class Handle_OSD_Exception_PRIV_INSTRUCTION_4 extends Handle_OSD_Exception_PRIV_INSTRUCTION {
    constructor(theHandle: Handle_OSD_Exception_PRIV_INSTRUCTION);
  }

export declare class Handle_OSD_Exception_STACK_OVERFLOW {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OSD_Exception_STACK_OVERFLOW): void;
  get(): OSD_Exception_STACK_OVERFLOW;
}

  export declare class Handle_OSD_Exception_STACK_OVERFLOW_1 extends Handle_OSD_Exception_STACK_OVERFLOW {
    constructor();
  }

  export declare class Handle_OSD_Exception_STACK_OVERFLOW_2 extends Handle_OSD_Exception_STACK_OVERFLOW {
    constructor(thePtr: OSD_Exception_STACK_OVERFLOW);
  }

  export declare class Handle_OSD_Exception_STACK_OVERFLOW_3 extends Handle_OSD_Exception_STACK_OVERFLOW {
    constructor(theHandle: Handle_OSD_Exception_STACK_OVERFLOW);
  }

  export declare class Handle_OSD_Exception_STACK_OVERFLOW_4 extends Handle_OSD_Exception_STACK_OVERFLOW {
    constructor(theHandle: Handle_OSD_Exception_STACK_OVERFLOW);
  }

export declare class Handle_OSD_Exception_STATUS_NO_MEMORY {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OSD_Exception_STATUS_NO_MEMORY): void;
  get(): OSD_Exception_STATUS_NO_MEMORY;
}

  export declare class Handle_OSD_Exception_STATUS_NO_MEMORY_1 extends Handle_OSD_Exception_STATUS_NO_MEMORY {
    constructor();
  }

  export declare class Handle_OSD_Exception_STATUS_NO_MEMORY_2 extends Handle_OSD_Exception_STATUS_NO_MEMORY {
    constructor(thePtr: OSD_Exception_STATUS_NO_MEMORY);
  }

  export declare class Handle_OSD_Exception_STATUS_NO_MEMORY_3 extends Handle_OSD_Exception_STATUS_NO_MEMORY {
    constructor(theHandle: Handle_OSD_Exception_STATUS_NO_MEMORY);
  }

  export declare class Handle_OSD_Exception_STATUS_NO_MEMORY_4 extends Handle_OSD_Exception_STATUS_NO_MEMORY {
    constructor(theHandle: Handle_OSD_Exception_STATUS_NO_MEMORY);
  }

export declare class Handle_OSD_OSDError {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OSD_OSDError): void;
  get(): OSD_OSDError;
}

  export declare class Handle_OSD_OSDError_1 extends Handle_OSD_OSDError {
    constructor();
  }

  export declare class Handle_OSD_OSDError_2 extends Handle_OSD_OSDError {
    constructor(thePtr: OSD_OSDError);
  }

  export declare class Handle_OSD_OSDError_3 extends Handle_OSD_OSDError {
    constructor(theHandle: Handle_OSD_OSDError);
  }

  export declare class Handle_OSD_OSDError_4 extends Handle_OSD_OSDError {
    constructor(theHandle: Handle_OSD_OSDError);
  }

export declare class Handle_OSD_Signal {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OSD_Signal): void;
  get(): OSD_Signal;
}

  export declare class Handle_OSD_Signal_1 extends Handle_OSD_Signal {
    constructor();
  }

  export declare class Handle_OSD_Signal_2 extends Handle_OSD_Signal {
    constructor(thePtr: OSD_Signal);
  }

  export declare class Handle_OSD_Signal_3 extends Handle_OSD_Signal {
    constructor(theHandle: Handle_OSD_Signal);
  }

  export declare class Handle_OSD_Signal_4 extends Handle_OSD_Signal {
    constructor(theHandle: Handle_OSD_Signal);
  }

export declare class Handle_OSD_SIGBUS {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OSD_SIGBUS): void;
  get(): OSD_SIGBUS;
}

  export declare class Handle_OSD_SIGBUS_1 extends Handle_OSD_SIGBUS {
    constructor();
  }

  export declare class Handle_OSD_SIGBUS_2 extends Handle_OSD_SIGBUS {
    constructor(thePtr: OSD_SIGBUS);
  }

  export declare class Handle_OSD_SIGBUS_3 extends Handle_OSD_SIGBUS {
    constructor(theHandle: Handle_OSD_SIGBUS);
  }

  export declare class Handle_OSD_SIGBUS_4 extends Handle_OSD_SIGBUS {
    constructor(theHandle: Handle_OSD_SIGBUS);
  }

export declare class Handle_OSD_SIGHUP {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OSD_SIGHUP): void;
  get(): OSD_SIGHUP;
}

  export declare class Handle_OSD_SIGHUP_1 extends Handle_OSD_SIGHUP {
    constructor();
  }

  export declare class Handle_OSD_SIGHUP_2 extends Handle_OSD_SIGHUP {
    constructor(thePtr: OSD_SIGHUP);
  }

  export declare class Handle_OSD_SIGHUP_3 extends Handle_OSD_SIGHUP {
    constructor(theHandle: Handle_OSD_SIGHUP);
  }

  export declare class Handle_OSD_SIGHUP_4 extends Handle_OSD_SIGHUP {
    constructor(theHandle: Handle_OSD_SIGHUP);
  }

export declare class Handle_OSD_SIGILL {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OSD_SIGILL): void;
  get(): OSD_SIGILL;
}

  export declare class Handle_OSD_SIGILL_1 extends Handle_OSD_SIGILL {
    constructor();
  }

  export declare class Handle_OSD_SIGILL_2 extends Handle_OSD_SIGILL {
    constructor(thePtr: OSD_SIGILL);
  }

  export declare class Handle_OSD_SIGILL_3 extends Handle_OSD_SIGILL {
    constructor(theHandle: Handle_OSD_SIGILL);
  }

  export declare class Handle_OSD_SIGILL_4 extends Handle_OSD_SIGILL {
    constructor(theHandle: Handle_OSD_SIGILL);
  }

export declare class Handle_OSD_SIGINT {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OSD_SIGINT): void;
  get(): OSD_SIGINT;
}

  export declare class Handle_OSD_SIGINT_1 extends Handle_OSD_SIGINT {
    constructor();
  }

  export declare class Handle_OSD_SIGINT_2 extends Handle_OSD_SIGINT {
    constructor(thePtr: OSD_SIGINT);
  }

  export declare class Handle_OSD_SIGINT_3 extends Handle_OSD_SIGINT {
    constructor(theHandle: Handle_OSD_SIGINT);
  }

  export declare class Handle_OSD_SIGINT_4 extends Handle_OSD_SIGINT {
    constructor(theHandle: Handle_OSD_SIGINT);
  }

export declare class Handle_OSD_SIGKILL {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OSD_SIGKILL): void;
  get(): OSD_SIGKILL;
}

  export declare class Handle_OSD_SIGKILL_1 extends Handle_OSD_SIGKILL {
    constructor();
  }

  export declare class Handle_OSD_SIGKILL_2 extends Handle_OSD_SIGKILL {
    constructor(thePtr: OSD_SIGKILL);
  }

  export declare class Handle_OSD_SIGKILL_3 extends Handle_OSD_SIGKILL {
    constructor(theHandle: Handle_OSD_SIGKILL);
  }

  export declare class Handle_OSD_SIGKILL_4 extends Handle_OSD_SIGKILL {
    constructor(theHandle: Handle_OSD_SIGKILL);
  }

export declare class Handle_OSD_SIGQUIT {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OSD_SIGQUIT): void;
  get(): OSD_SIGQUIT;
}

  export declare class Handle_OSD_SIGQUIT_1 extends Handle_OSD_SIGQUIT {
    constructor();
  }

  export declare class Handle_OSD_SIGQUIT_2 extends Handle_OSD_SIGQUIT {
    constructor(thePtr: OSD_SIGQUIT);
  }

  export declare class Handle_OSD_SIGQUIT_3 extends Handle_OSD_SIGQUIT {
    constructor(theHandle: Handle_OSD_SIGQUIT);
  }

  export declare class Handle_OSD_SIGQUIT_4 extends Handle_OSD_SIGQUIT {
    constructor(theHandle: Handle_OSD_SIGQUIT);
  }

export declare class Handle_OSD_SIGSEGV {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OSD_SIGSEGV): void;
  get(): OSD_SIGSEGV;
}

  export declare class Handle_OSD_SIGSEGV_1 extends Handle_OSD_SIGSEGV {
    constructor();
  }

  export declare class Handle_OSD_SIGSEGV_2 extends Handle_OSD_SIGSEGV {
    constructor(thePtr: OSD_SIGSEGV);
  }

  export declare class Handle_OSD_SIGSEGV_3 extends Handle_OSD_SIGSEGV {
    constructor(theHandle: Handle_OSD_SIGSEGV);
  }

  export declare class Handle_OSD_SIGSEGV_4 extends Handle_OSD_SIGSEGV {
    constructor(theHandle: Handle_OSD_SIGSEGV);
  }

export declare class Handle_OSD_SIGSYS {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: OSD_SIGSYS): void;
  get(): OSD_SIGSYS;
}

  export declare class Handle_OSD_SIGSYS_1 extends Handle_OSD_SIGSYS {
    constructor();
  }

  export declare class Handle_OSD_SIGSYS_2 extends Handle_OSD_SIGSYS {
    constructor(thePtr: OSD_SIGSYS);
  }

  export declare class Handle_OSD_SIGSYS_3 extends Handle_OSD_SIGSYS {
    constructor(theHandle: Handle_OSD_SIGSYS);
  }

  export declare class Handle_OSD_SIGSYS_4 extends Handle_OSD_SIGSYS {
    constructor(theHandle: Handle_OSD_SIGSYS);
  }

export declare class Handle_Plugin_Failure {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Plugin_Failure): void;
  get(): Plugin_Failure;
}

  export declare class Handle_Plugin_Failure_1 extends Handle_Plugin_Failure {
    constructor();
  }

  export declare class Handle_Plugin_Failure_2 extends Handle_Plugin_Failure {
    constructor(thePtr: Plugin_Failure);
  }

  export declare class Handle_Plugin_Failure_3 extends Handle_Plugin_Failure {
    constructor(theHandle: Handle_Plugin_Failure);
  }

  export declare class Handle_Plugin_Failure_4 extends Handle_Plugin_Failure {
    constructor(theHandle: Handle_Plugin_Failure);
  }

export declare class TColStd_MapRealHasher {
  constructor();
  HashCode(theKey: Standard_Real, theUpperBound: Standard_Integer): Standard_Integer;
  IsEqual(theKey1: Standard_Real, theKey2: Standard_Real): Standard_Boolean;
}

export declare class Quantity_Array2OfColor {
  Init(theValue: Quantity_Color): void;
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
  Assign(theOther: Quantity_Array2OfColor): Quantity_Array2OfColor;
  Move(theOther: Quantity_Array2OfColor): Quantity_Array2OfColor;
  Value(theRow: Standard_Integer, theCol: Standard_Integer): Quantity_Color;
  ChangeValue(theRow: Standard_Integer, theCol: Standard_Integer): Quantity_Color;
  SetValue(theRow: Standard_Integer, theCol: Standard_Integer, theItem: Quantity_Color): void;
  Resize(theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class Quantity_Array2OfColor_1 extends Quantity_Array2OfColor {
    constructor();
  }

  export declare class Quantity_Array2OfColor_2 extends Quantity_Array2OfColor {
    constructor(theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer);
  }

  export declare class Quantity_Array2OfColor_3 extends Quantity_Array2OfColor {
    constructor(theOther: Quantity_Array2OfColor);
  }

  export declare class Quantity_Array2OfColor_4 extends Quantity_Array2OfColor {
    constructor(theOther: Quantity_Array2OfColor);
  }

  export declare class Quantity_Array2OfColor_5 extends Quantity_Array2OfColor {
    constructor(theBegin: Quantity_Color, theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer);
  }

export declare class Handle_Quantity_DateDefinitionError {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Quantity_DateDefinitionError): void;
  get(): Quantity_DateDefinitionError;
}

  export declare class Handle_Quantity_DateDefinitionError_1 extends Handle_Quantity_DateDefinitionError {
    constructor();
  }

  export declare class Handle_Quantity_DateDefinitionError_2 extends Handle_Quantity_DateDefinitionError {
    constructor(thePtr: Quantity_DateDefinitionError);
  }

  export declare class Handle_Quantity_DateDefinitionError_3 extends Handle_Quantity_DateDefinitionError {
    constructor(theHandle: Handle_Quantity_DateDefinitionError);
  }

  export declare class Handle_Quantity_DateDefinitionError_4 extends Handle_Quantity_DateDefinitionError {
    constructor(theHandle: Handle_Quantity_DateDefinitionError);
  }

export declare class Handle_Quantity_PeriodDefinitionError {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Quantity_PeriodDefinitionError): void;
  get(): Quantity_PeriodDefinitionError;
}

  export declare class Handle_Quantity_PeriodDefinitionError_1 extends Handle_Quantity_PeriodDefinitionError {
    constructor();
  }

  export declare class Handle_Quantity_PeriodDefinitionError_2 extends Handle_Quantity_PeriodDefinitionError {
    constructor(thePtr: Quantity_PeriodDefinitionError);
  }

  export declare class Handle_Quantity_PeriodDefinitionError_3 extends Handle_Quantity_PeriodDefinitionError {
    constructor(theHandle: Handle_Quantity_PeriodDefinitionError);
  }

  export declare class Handle_Quantity_PeriodDefinitionError_4 extends Handle_Quantity_PeriodDefinitionError {
    constructor(theHandle: Handle_Quantity_PeriodDefinitionError);
  }

export declare class Resource_DataMapOfAsciiStringExtendedString extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: Resource_DataMapOfAsciiStringExtendedString): void;
  Assign(theOther: Resource_DataMapOfAsciiStringExtendedString): Resource_DataMapOfAsciiStringExtendedString;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TCollection_AsciiString, theItem: TCollection_ExtendedString): Standard_Boolean;
  Bound(theKey: TCollection_AsciiString, theItem: TCollection_ExtendedString): TCollection_ExtendedString;
  IsBound(theKey: TCollection_AsciiString): Standard_Boolean;
  UnBind(theKey: TCollection_AsciiString): Standard_Boolean;
  Seek(theKey: TCollection_AsciiString): TCollection_ExtendedString;
  Find_1(theKey: TCollection_AsciiString): TCollection_ExtendedString;
  Find_2(theKey: TCollection_AsciiString, theValue: TCollection_ExtendedString): Standard_Boolean;
  ChangeSeek(theKey: TCollection_AsciiString): TCollection_ExtendedString;
  ChangeFind(theKey: TCollection_AsciiString): TCollection_ExtendedString;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: Handle_NCollection_BaseAllocator): void;
  Size(): Standard_Integer;
}

  export declare class Resource_DataMapOfAsciiStringExtendedString_1 extends Resource_DataMapOfAsciiStringExtendedString {
    constructor();
  }

  export declare class Resource_DataMapOfAsciiStringExtendedString_2 extends Resource_DataMapOfAsciiStringExtendedString {
    constructor(theNbBuckets: Standard_Integer, theAllocator: Handle_NCollection_BaseAllocator);
  }

  export declare class Resource_DataMapOfAsciiStringExtendedString_3 extends Resource_DataMapOfAsciiStringExtendedString {
    constructor(theOther: Resource_DataMapOfAsciiStringExtendedString);
  }

export declare class Handle_Resource_Manager {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Resource_Manager): void;
  get(): Resource_Manager;
}

  export declare class Handle_Resource_Manager_1 extends Handle_Resource_Manager {
    constructor();
  }

  export declare class Handle_Resource_Manager_2 extends Handle_Resource_Manager {
    constructor(thePtr: Resource_Manager);
  }

  export declare class Handle_Resource_Manager_3 extends Handle_Resource_Manager {
    constructor(theHandle: Handle_Resource_Manager);
  }

  export declare class Handle_Resource_Manager_4 extends Handle_Resource_Manager {
    constructor(theHandle: Handle_Resource_Manager);
  }

export declare class Handle_Resource_NoSuchResource {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Resource_NoSuchResource): void;
  get(): Resource_NoSuchResource;
}

  export declare class Handle_Resource_NoSuchResource_1 extends Handle_Resource_NoSuchResource {
    constructor();
  }

  export declare class Handle_Resource_NoSuchResource_2 extends Handle_Resource_NoSuchResource {
    constructor(thePtr: Resource_NoSuchResource);
  }

  export declare class Handle_Resource_NoSuchResource_3 extends Handle_Resource_NoSuchResource {
    constructor(theHandle: Handle_Resource_NoSuchResource);
  }

  export declare class Handle_Resource_NoSuchResource_4 extends Handle_Resource_NoSuchResource {
    constructor(theHandle: Handle_Resource_NoSuchResource);
  }

export declare class Handle_Standard_NullValue {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Standard_NullValue): void;
  get(): Standard_NullValue;
}

  export declare class Handle_Standard_NullValue_1 extends Handle_Standard_NullValue {
    constructor();
  }

  export declare class Handle_Standard_NullValue_2 extends Handle_Standard_NullValue {
    constructor(thePtr: Standard_NullValue);
  }

  export declare class Handle_Standard_NullValue_3 extends Handle_Standard_NullValue {
    constructor(theHandle: Handle_Standard_NullValue);
  }

  export declare class Handle_Standard_NullValue_4 extends Handle_Standard_NullValue {
    constructor(theHandle: Handle_Standard_NullValue);
  }

export declare class Handle_Standard_AbortiveTransaction {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Standard_AbortiveTransaction): void;
  get(): Standard_AbortiveTransaction;
}

  export declare class Handle_Standard_AbortiveTransaction_1 extends Handle_Standard_AbortiveTransaction {
    constructor();
  }

  export declare class Handle_Standard_AbortiveTransaction_2 extends Handle_Standard_AbortiveTransaction {
    constructor(thePtr: Standard_AbortiveTransaction);
  }

  export declare class Handle_Standard_AbortiveTransaction_3 extends Handle_Standard_AbortiveTransaction {
    constructor(theHandle: Handle_Standard_AbortiveTransaction);
  }

  export declare class Handle_Standard_AbortiveTransaction_4 extends Handle_Standard_AbortiveTransaction {
    constructor(theHandle: Handle_Standard_AbortiveTransaction);
  }

export declare class Handle_Standard_NumericError {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Standard_NumericError): void;
  get(): Standard_NumericError;
}

  export declare class Handle_Standard_NumericError_1 extends Handle_Standard_NumericError {
    constructor();
  }

  export declare class Handle_Standard_NumericError_2 extends Handle_Standard_NumericError {
    constructor(thePtr: Standard_NumericError);
  }

  export declare class Handle_Standard_NumericError_3 extends Handle_Standard_NumericError {
    constructor(theHandle: Handle_Standard_NumericError);
  }

  export declare class Handle_Standard_NumericError_4 extends Handle_Standard_NumericError {
    constructor(theHandle: Handle_Standard_NumericError);
  }

export declare class Handle_Standard_DivideByZero {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Standard_DivideByZero): void;
  get(): Standard_DivideByZero;
}

  export declare class Handle_Standard_DivideByZero_1 extends Handle_Standard_DivideByZero {
    constructor();
  }

  export declare class Handle_Standard_DivideByZero_2 extends Handle_Standard_DivideByZero {
    constructor(thePtr: Standard_DivideByZero);
  }

  export declare class Handle_Standard_DivideByZero_3 extends Handle_Standard_DivideByZero {
    constructor(theHandle: Handle_Standard_DivideByZero);
  }

  export declare class Handle_Standard_DivideByZero_4 extends Handle_Standard_DivideByZero {
    constructor(theHandle: Handle_Standard_DivideByZero);
  }

export declare class Handle_Standard_LicenseError {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Standard_LicenseError): void;
  get(): Standard_LicenseError;
}

  export declare class Handle_Standard_LicenseError_1 extends Handle_Standard_LicenseError {
    constructor();
  }

  export declare class Handle_Standard_LicenseError_2 extends Handle_Standard_LicenseError {
    constructor(thePtr: Standard_LicenseError);
  }

  export declare class Handle_Standard_LicenseError_3 extends Handle_Standard_LicenseError {
    constructor(theHandle: Handle_Standard_LicenseError);
  }

  export declare class Handle_Standard_LicenseError_4 extends Handle_Standard_LicenseError {
    constructor(theHandle: Handle_Standard_LicenseError);
  }

export declare class Handle_Standard_LicenseNotFound {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Standard_LicenseNotFound): void;
  get(): Standard_LicenseNotFound;
}

  export declare class Handle_Standard_LicenseNotFound_1 extends Handle_Standard_LicenseNotFound {
    constructor();
  }

  export declare class Handle_Standard_LicenseNotFound_2 extends Handle_Standard_LicenseNotFound {
    constructor(thePtr: Standard_LicenseNotFound);
  }

  export declare class Handle_Standard_LicenseNotFound_3 extends Handle_Standard_LicenseNotFound {
    constructor(theHandle: Handle_Standard_LicenseNotFound);
  }

  export declare class Handle_Standard_LicenseNotFound_4 extends Handle_Standard_LicenseNotFound {
    constructor(theHandle: Handle_Standard_LicenseNotFound);
  }

export declare class Handle_Standard_NoMoreObject {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Standard_NoMoreObject): void;
  get(): Standard_NoMoreObject;
}

  export declare class Handle_Standard_NoMoreObject_1 extends Handle_Standard_NoMoreObject {
    constructor();
  }

  export declare class Handle_Standard_NoMoreObject_2 extends Handle_Standard_NoMoreObject {
    constructor(thePtr: Standard_NoMoreObject);
  }

  export declare class Handle_Standard_NoMoreObject_3 extends Handle_Standard_NoMoreObject {
    constructor(theHandle: Handle_Standard_NoMoreObject);
  }

  export declare class Handle_Standard_NoMoreObject_4 extends Handle_Standard_NoMoreObject {
    constructor(theHandle: Handle_Standard_NoMoreObject);
  }

export declare class Handle_Standard_Overflow {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Standard_Overflow): void;
  get(): Standard_Overflow;
}

  export declare class Handle_Standard_Overflow_1 extends Handle_Standard_Overflow {
    constructor();
  }

  export declare class Handle_Standard_Overflow_2 extends Handle_Standard_Overflow {
    constructor(thePtr: Standard_Overflow);
  }

  export declare class Handle_Standard_Overflow_3 extends Handle_Standard_Overflow {
    constructor(theHandle: Handle_Standard_Overflow);
  }

  export declare class Handle_Standard_Overflow_4 extends Handle_Standard_Overflow {
    constructor(theHandle: Handle_Standard_Overflow);
  }

export declare class Handle_Standard_TooManyUsers {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Standard_TooManyUsers): void;
  get(): Standard_TooManyUsers;
}

  export declare class Handle_Standard_TooManyUsers_1 extends Handle_Standard_TooManyUsers {
    constructor();
  }

  export declare class Handle_Standard_TooManyUsers_2 extends Handle_Standard_TooManyUsers {
    constructor(thePtr: Standard_TooManyUsers);
  }

  export declare class Handle_Standard_TooManyUsers_3 extends Handle_Standard_TooManyUsers {
    constructor(theHandle: Handle_Standard_TooManyUsers);
  }

  export declare class Handle_Standard_TooManyUsers_4 extends Handle_Standard_TooManyUsers {
    constructor(theHandle: Handle_Standard_TooManyUsers);
  }

export declare class Handle_Standard_Underflow {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Standard_Underflow): void;
  get(): Standard_Underflow;
}

  export declare class Handle_Standard_Underflow_1 extends Handle_Standard_Underflow {
    constructor();
  }

  export declare class Handle_Standard_Underflow_2 extends Handle_Standard_Underflow {
    constructor(thePtr: Standard_Underflow);
  }

  export declare class Handle_Standard_Underflow_3 extends Handle_Standard_Underflow {
    constructor(theHandle: Handle_Standard_Underflow);
  }

  export declare class Handle_Standard_Underflow_4 extends Handle_Standard_Underflow {
    constructor(theHandle: Handle_Standard_Underflow);
  }

export declare class Handle_StdFail_Undefined {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StdFail_Undefined): void;
  get(): StdFail_Undefined;
}

  export declare class Handle_StdFail_Undefined_1 extends Handle_StdFail_Undefined {
    constructor();
  }

  export declare class Handle_StdFail_Undefined_2 extends Handle_StdFail_Undefined {
    constructor(thePtr: StdFail_Undefined);
  }

  export declare class Handle_StdFail_Undefined_3 extends Handle_StdFail_Undefined {
    constructor(theHandle: Handle_StdFail_Undefined);
  }

  export declare class Handle_StdFail_Undefined_4 extends Handle_StdFail_Undefined {
    constructor(theHandle: Handle_StdFail_Undefined);
  }

export declare class Handle_StdFail_UndefinedValue {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StdFail_UndefinedValue): void;
  get(): StdFail_UndefinedValue;
}

  export declare class Handle_StdFail_UndefinedValue_1 extends Handle_StdFail_UndefinedValue {
    constructor();
  }

  export declare class Handle_StdFail_UndefinedValue_2 extends Handle_StdFail_UndefinedValue {
    constructor(thePtr: StdFail_UndefinedValue);
  }

  export declare class Handle_StdFail_UndefinedValue_3 extends Handle_StdFail_UndefinedValue {
    constructor(theHandle: Handle_StdFail_UndefinedValue);
  }

  export declare class Handle_StdFail_UndefinedValue_4 extends Handle_StdFail_UndefinedValue {
    constructor(theHandle: Handle_StdFail_UndefinedValue);
  }

export declare class TColStd_Array1OfExtendedString {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: TCollection_ExtendedString): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: TColStd_Array1OfExtendedString): TColStd_Array1OfExtendedString;
  Move(theOther: TColStd_Array1OfExtendedString): TColStd_Array1OfExtendedString;
  First(): TCollection_ExtendedString;
  ChangeFirst(): TCollection_ExtendedString;
  Last(): TCollection_ExtendedString;
  ChangeLast(): TCollection_ExtendedString;
  Value(theIndex: Standard_Integer): TCollection_ExtendedString;
  ChangeValue(theIndex: Standard_Integer): TCollection_ExtendedString;
  SetValue(theIndex: Standard_Integer, theItem: TCollection_ExtendedString): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class TColStd_Array1OfExtendedString_1 extends TColStd_Array1OfExtendedString {
    constructor();
  }

  export declare class TColStd_Array1OfExtendedString_2 extends TColStd_Array1OfExtendedString {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class TColStd_Array1OfExtendedString_3 extends TColStd_Array1OfExtendedString {
    constructor(theOther: TColStd_Array1OfExtendedString);
  }

  export declare class TColStd_Array1OfExtendedString_4 extends TColStd_Array1OfExtendedString {
    constructor(theOther: TColStd_Array1OfExtendedString);
  }

  export declare class TColStd_Array1OfExtendedString_5 extends TColStd_Array1OfExtendedString {
    constructor(theBegin: TCollection_ExtendedString, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_TColStd_HArray1OfExtendedString {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColStd_HArray1OfExtendedString): void;
  get(): TColStd_HArray1OfExtendedString;
}

  export declare class Handle_TColStd_HArray1OfExtendedString_1 extends Handle_TColStd_HArray1OfExtendedString {
    constructor();
  }

  export declare class Handle_TColStd_HArray1OfExtendedString_2 extends Handle_TColStd_HArray1OfExtendedString {
    constructor(thePtr: TColStd_HArray1OfExtendedString);
  }

  export declare class Handle_TColStd_HArray1OfExtendedString_3 extends Handle_TColStd_HArray1OfExtendedString {
    constructor(theHandle: Handle_TColStd_HArray1OfExtendedString);
  }

  export declare class Handle_TColStd_HArray1OfExtendedString_4 extends Handle_TColStd_HArray1OfExtendedString {
    constructor(theHandle: Handle_TColStd_HArray1OfExtendedString);
  }

export declare class Handle_Storage_CallBack {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Storage_CallBack): void;
  get(): Storage_CallBack;
}

  export declare class Handle_Storage_CallBack_1 extends Handle_Storage_CallBack {
    constructor();
  }

  export declare class Handle_Storage_CallBack_2 extends Handle_Storage_CallBack {
    constructor(thePtr: Storage_CallBack);
  }

  export declare class Handle_Storage_CallBack_3 extends Handle_Storage_CallBack {
    constructor(theHandle: Handle_Storage_CallBack);
  }

  export declare class Handle_Storage_CallBack_4 extends Handle_Storage_CallBack {
    constructor(theHandle: Handle_Storage_CallBack);
  }

export declare class Handle_Storage_TypedCallBack {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Storage_TypedCallBack): void;
  get(): Storage_TypedCallBack;
}

  export declare class Handle_Storage_TypedCallBack_1 extends Handle_Storage_TypedCallBack {
    constructor();
  }

  export declare class Handle_Storage_TypedCallBack_2 extends Handle_Storage_TypedCallBack {
    constructor(thePtr: Storage_TypedCallBack);
  }

  export declare class Handle_Storage_TypedCallBack_3 extends Handle_Storage_TypedCallBack {
    constructor(theHandle: Handle_Storage_TypedCallBack);
  }

  export declare class Handle_Storage_TypedCallBack_4 extends Handle_Storage_TypedCallBack {
    constructor(theHandle: Handle_Storage_TypedCallBack);
  }

export declare class Handle_Storage_DefaultCallBack {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Storage_DefaultCallBack): void;
  get(): Storage_DefaultCallBack;
}

  export declare class Handle_Storage_DefaultCallBack_1 extends Handle_Storage_DefaultCallBack {
    constructor();
  }

  export declare class Handle_Storage_DefaultCallBack_2 extends Handle_Storage_DefaultCallBack {
    constructor(thePtr: Storage_DefaultCallBack);
  }

  export declare class Handle_Storage_DefaultCallBack_3 extends Handle_Storage_DefaultCallBack {
    constructor(theHandle: Handle_Storage_DefaultCallBack);
  }

  export declare class Handle_Storage_DefaultCallBack_4 extends Handle_Storage_DefaultCallBack {
    constructor(theHandle: Handle_Storage_DefaultCallBack);
  }

export declare class Handle_Storage_HArrayOfCallBack {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Storage_HArrayOfCallBack): void;
  get(): Storage_HArrayOfCallBack;
}

  export declare class Handle_Storage_HArrayOfCallBack_1 extends Handle_Storage_HArrayOfCallBack {
    constructor();
  }

  export declare class Handle_Storage_HArrayOfCallBack_2 extends Handle_Storage_HArrayOfCallBack {
    constructor(thePtr: Storage_HArrayOfCallBack);
  }

  export declare class Handle_Storage_HArrayOfCallBack_3 extends Handle_Storage_HArrayOfCallBack {
    constructor(theHandle: Handle_Storage_HArrayOfCallBack);
  }

  export declare class Handle_Storage_HArrayOfCallBack_4 extends Handle_Storage_HArrayOfCallBack {
    constructor(theHandle: Handle_Storage_HArrayOfCallBack);
  }

export declare class Handle_Storage_HPArray {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Storage_HPArray): void;
  get(): Storage_HPArray;
}

  export declare class Handle_Storage_HPArray_1 extends Handle_Storage_HPArray {
    constructor();
  }

  export declare class Handle_Storage_HPArray_2 extends Handle_Storage_HPArray {
    constructor(thePtr: Storage_HPArray);
  }

  export declare class Handle_Storage_HPArray_3 extends Handle_Storage_HPArray {
    constructor(theHandle: Handle_Storage_HPArray);
  }

  export declare class Handle_Storage_HPArray_4 extends Handle_Storage_HPArray {
    constructor(theHandle: Handle_Storage_HPArray);
  }

export declare class Handle_Storage_InternalData {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Storage_InternalData): void;
  get(): Storage_InternalData;
}

  export declare class Handle_Storage_InternalData_1 extends Handle_Storage_InternalData {
    constructor();
  }

  export declare class Handle_Storage_InternalData_2 extends Handle_Storage_InternalData {
    constructor(thePtr: Storage_InternalData);
  }

  export declare class Handle_Storage_InternalData_3 extends Handle_Storage_InternalData {
    constructor(theHandle: Handle_Storage_InternalData);
  }

  export declare class Handle_Storage_InternalData_4 extends Handle_Storage_InternalData {
    constructor(theHandle: Handle_Storage_InternalData);
  }

export declare class Handle_Storage_Schema {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Storage_Schema): void;
  get(): Storage_Schema;
}

  export declare class Handle_Storage_Schema_1 extends Handle_Storage_Schema {
    constructor();
  }

  export declare class Handle_Storage_Schema_2 extends Handle_Storage_Schema {
    constructor(thePtr: Storage_Schema);
  }

  export declare class Handle_Storage_Schema_3 extends Handle_Storage_Schema {
    constructor(theHandle: Handle_Storage_Schema);
  }

  export declare class Handle_Storage_Schema_4 extends Handle_Storage_Schema {
    constructor(theHandle: Handle_Storage_Schema);
  }

export declare class Handle_Storage_HArrayOfSchema {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Storage_HArrayOfSchema): void;
  get(): Storage_HArrayOfSchema;
}

  export declare class Handle_Storage_HArrayOfSchema_1 extends Handle_Storage_HArrayOfSchema {
    constructor();
  }

  export declare class Handle_Storage_HArrayOfSchema_2 extends Handle_Storage_HArrayOfSchema {
    constructor(thePtr: Storage_HArrayOfSchema);
  }

  export declare class Handle_Storage_HArrayOfSchema_3 extends Handle_Storage_HArrayOfSchema {
    constructor(theHandle: Handle_Storage_HArrayOfSchema);
  }

  export declare class Handle_Storage_HArrayOfSchema_4 extends Handle_Storage_HArrayOfSchema {
    constructor(theHandle: Handle_Storage_HArrayOfSchema);
  }

export declare class Handle_Storage_RootData {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Storage_RootData): void;
  get(): Storage_RootData;
}

  export declare class Handle_Storage_RootData_1 extends Handle_Storage_RootData {
    constructor();
  }

  export declare class Handle_Storage_RootData_2 extends Handle_Storage_RootData {
    constructor(thePtr: Storage_RootData);
  }

  export declare class Handle_Storage_RootData_3 extends Handle_Storage_RootData {
    constructor(theHandle: Handle_Storage_RootData);
  }

  export declare class Handle_Storage_RootData_4 extends Handle_Storage_RootData {
    constructor(theHandle: Handle_Storage_RootData);
  }

export declare class Handle_Storage_StreamReadError {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Storage_StreamReadError): void;
  get(): Storage_StreamReadError;
}

  export declare class Handle_Storage_StreamReadError_1 extends Handle_Storage_StreamReadError {
    constructor();
  }

  export declare class Handle_Storage_StreamReadError_2 extends Handle_Storage_StreamReadError {
    constructor(thePtr: Storage_StreamReadError);
  }

  export declare class Handle_Storage_StreamReadError_3 extends Handle_Storage_StreamReadError {
    constructor(theHandle: Handle_Storage_StreamReadError);
  }

  export declare class Handle_Storage_StreamReadError_4 extends Handle_Storage_StreamReadError {
    constructor(theHandle: Handle_Storage_StreamReadError);
  }

export declare class Handle_Storage_StreamExtCharParityError {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Storage_StreamExtCharParityError): void;
  get(): Storage_StreamExtCharParityError;
}

  export declare class Handle_Storage_StreamExtCharParityError_1 extends Handle_Storage_StreamExtCharParityError {
    constructor();
  }

  export declare class Handle_Storage_StreamExtCharParityError_2 extends Handle_Storage_StreamExtCharParityError {
    constructor(thePtr: Storage_StreamExtCharParityError);
  }

  export declare class Handle_Storage_StreamExtCharParityError_3 extends Handle_Storage_StreamExtCharParityError {
    constructor(theHandle: Handle_Storage_StreamExtCharParityError);
  }

  export declare class Handle_Storage_StreamExtCharParityError_4 extends Handle_Storage_StreamExtCharParityError {
    constructor(theHandle: Handle_Storage_StreamExtCharParityError);
  }

export declare class Handle_Storage_StreamFormatError {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Storage_StreamFormatError): void;
  get(): Storage_StreamFormatError;
}

  export declare class Handle_Storage_StreamFormatError_1 extends Handle_Storage_StreamFormatError {
    constructor();
  }

  export declare class Handle_Storage_StreamFormatError_2 extends Handle_Storage_StreamFormatError {
    constructor(thePtr: Storage_StreamFormatError);
  }

  export declare class Handle_Storage_StreamFormatError_3 extends Handle_Storage_StreamFormatError {
    constructor(theHandle: Handle_Storage_StreamFormatError);
  }

  export declare class Handle_Storage_StreamFormatError_4 extends Handle_Storage_StreamFormatError {
    constructor(theHandle: Handle_Storage_StreamFormatError);
  }

export declare class Handle_Storage_StreamModeError {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Storage_StreamModeError): void;
  get(): Storage_StreamModeError;
}

  export declare class Handle_Storage_StreamModeError_1 extends Handle_Storage_StreamModeError {
    constructor();
  }

  export declare class Handle_Storage_StreamModeError_2 extends Handle_Storage_StreamModeError {
    constructor(thePtr: Storage_StreamModeError);
  }

  export declare class Handle_Storage_StreamModeError_3 extends Handle_Storage_StreamModeError {
    constructor(theHandle: Handle_Storage_StreamModeError);
  }

  export declare class Handle_Storage_StreamModeError_4 extends Handle_Storage_StreamModeError {
    constructor(theHandle: Handle_Storage_StreamModeError);
  }

export declare class Handle_Storage_StreamTypeMismatchError {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Storage_StreamTypeMismatchError): void;
  get(): Storage_StreamTypeMismatchError;
}

  export declare class Handle_Storage_StreamTypeMismatchError_1 extends Handle_Storage_StreamTypeMismatchError {
    constructor();
  }

  export declare class Handle_Storage_StreamTypeMismatchError_2 extends Handle_Storage_StreamTypeMismatchError {
    constructor(thePtr: Storage_StreamTypeMismatchError);
  }

  export declare class Handle_Storage_StreamTypeMismatchError_3 extends Handle_Storage_StreamTypeMismatchError {
    constructor(theHandle: Handle_Storage_StreamTypeMismatchError);
  }

  export declare class Handle_Storage_StreamTypeMismatchError_4 extends Handle_Storage_StreamTypeMismatchError {
    constructor(theHandle: Handle_Storage_StreamTypeMismatchError);
  }

export declare class Handle_Storage_StreamUnknownTypeError {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Storage_StreamUnknownTypeError): void;
  get(): Storage_StreamUnknownTypeError;
}

  export declare class Handle_Storage_StreamUnknownTypeError_1 extends Handle_Storage_StreamUnknownTypeError {
    constructor();
  }

  export declare class Handle_Storage_StreamUnknownTypeError_2 extends Handle_Storage_StreamUnknownTypeError {
    constructor(thePtr: Storage_StreamUnknownTypeError);
  }

  export declare class Handle_Storage_StreamUnknownTypeError_3 extends Handle_Storage_StreamUnknownTypeError {
    constructor(theHandle: Handle_Storage_StreamUnknownTypeError);
  }

  export declare class Handle_Storage_StreamUnknownTypeError_4 extends Handle_Storage_StreamUnknownTypeError {
    constructor(theHandle: Handle_Storage_StreamUnknownTypeError);
  }

export declare class Handle_Storage_StreamWriteError {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Storage_StreamWriteError): void;
  get(): Storage_StreamWriteError;
}

  export declare class Handle_Storage_StreamWriteError_1 extends Handle_Storage_StreamWriteError {
    constructor();
  }

  export declare class Handle_Storage_StreamWriteError_2 extends Handle_Storage_StreamWriteError {
    constructor(thePtr: Storage_StreamWriteError);
  }

  export declare class Handle_Storage_StreamWriteError_3 extends Handle_Storage_StreamWriteError {
    constructor(theHandle: Handle_Storage_StreamWriteError);
  }

  export declare class Handle_Storage_StreamWriteError_4 extends Handle_Storage_StreamWriteError {
    constructor(theHandle: Handle_Storage_StreamWriteError);
  }

export declare class Handle_Storage_TypeData {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Storage_TypeData): void;
  get(): Storage_TypeData;
}

  export declare class Handle_Storage_TypeData_1 extends Handle_Storage_TypeData {
    constructor();
  }

  export declare class Handle_Storage_TypeData_2 extends Handle_Storage_TypeData {
    constructor(thePtr: Storage_TypeData);
  }

  export declare class Handle_Storage_TypeData_3 extends Handle_Storage_TypeData {
    constructor(theHandle: Handle_Storage_TypeData);
  }

  export declare class Handle_Storage_TypeData_4 extends Handle_Storage_TypeData {
    constructor(theHandle: Handle_Storage_TypeData);
  }

export declare class TColStd_Array1OfCharacter {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: Standard_Character): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: TColStd_Array1OfCharacter): TColStd_Array1OfCharacter;
  Move(theOther: TColStd_Array1OfCharacter): TColStd_Array1OfCharacter;
  First(): Standard_Character;
  ChangeFirst(): Standard_Character;
  Last(): Standard_Character;
  ChangeLast(): Standard_Character;
  Value(theIndex: Standard_Integer): Standard_Character;
  ChangeValue(theIndex: Standard_Integer): Standard_Character;
  SetValue(theIndex: Standard_Integer, theItem: Standard_Character): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class TColStd_Array1OfCharacter_1 extends TColStd_Array1OfCharacter {
    constructor();
  }

  export declare class TColStd_Array1OfCharacter_2 extends TColStd_Array1OfCharacter {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class TColStd_Array1OfCharacter_3 extends TColStd_Array1OfCharacter {
    constructor(theOther: TColStd_Array1OfCharacter);
  }

  export declare class TColStd_Array1OfCharacter_4 extends TColStd_Array1OfCharacter {
    constructor(theOther: TColStd_Array1OfCharacter);
  }

  export declare class TColStd_Array1OfCharacter_5 extends TColStd_Array1OfCharacter {
    constructor(theBegin: Standard_Character, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class TColStd_Array2OfCharacter {
  Init(theValue: Standard_Character): void;
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
  Assign(theOther: TColStd_Array2OfCharacter): TColStd_Array2OfCharacter;
  Move(theOther: TColStd_Array2OfCharacter): TColStd_Array2OfCharacter;
  Value(theRow: Standard_Integer, theCol: Standard_Integer): Standard_Character;
  ChangeValue(theRow: Standard_Integer, theCol: Standard_Integer): Standard_Character;
  SetValue(theRow: Standard_Integer, theCol: Standard_Integer, theItem: Standard_Character): void;
  Resize(theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class TColStd_Array2OfCharacter_1 extends TColStd_Array2OfCharacter {
    constructor();
  }

  export declare class TColStd_Array2OfCharacter_2 extends TColStd_Array2OfCharacter {
    constructor(theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer);
  }

  export declare class TColStd_Array2OfCharacter_3 extends TColStd_Array2OfCharacter {
    constructor(theOther: TColStd_Array2OfCharacter);
  }

  export declare class TColStd_Array2OfCharacter_4 extends TColStd_Array2OfCharacter {
    constructor(theOther: TColStd_Array2OfCharacter);
  }

  export declare class TColStd_Array2OfCharacter_5 extends TColStd_Array2OfCharacter {
    constructor(theBegin: Standard_Character, theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer);
  }

export declare class Handle_TColStd_HArray1OfCharacter {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColStd_HArray1OfCharacter): void;
  get(): TColStd_HArray1OfCharacter;
}

  export declare class Handle_TColStd_HArray1OfCharacter_1 extends Handle_TColStd_HArray1OfCharacter {
    constructor();
  }

  export declare class Handle_TColStd_HArray1OfCharacter_2 extends Handle_TColStd_HArray1OfCharacter {
    constructor(thePtr: TColStd_HArray1OfCharacter);
  }

  export declare class Handle_TColStd_HArray1OfCharacter_3 extends Handle_TColStd_HArray1OfCharacter {
    constructor(theHandle: Handle_TColStd_HArray1OfCharacter);
  }

  export declare class Handle_TColStd_HArray1OfCharacter_4 extends Handle_TColStd_HArray1OfCharacter {
    constructor(theHandle: Handle_TColStd_HArray1OfCharacter);
  }

export declare class Handle_TColStd_HArray2OfBoolean {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColStd_HArray2OfBoolean): void;
  get(): TColStd_HArray2OfBoolean;
}

  export declare class Handle_TColStd_HArray2OfBoolean_1 extends Handle_TColStd_HArray2OfBoolean {
    constructor();
  }

  export declare class Handle_TColStd_HArray2OfBoolean_2 extends Handle_TColStd_HArray2OfBoolean {
    constructor(thePtr: TColStd_HArray2OfBoolean);
  }

  export declare class Handle_TColStd_HArray2OfBoolean_3 extends Handle_TColStd_HArray2OfBoolean {
    constructor(theHandle: Handle_TColStd_HArray2OfBoolean);
  }

  export declare class Handle_TColStd_HArray2OfBoolean_4 extends Handle_TColStd_HArray2OfBoolean {
    constructor(theHandle: Handle_TColStd_HArray2OfBoolean);
  }

export declare class Handle_TColStd_HArray2OfCharacter {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColStd_HArray2OfCharacter): void;
  get(): TColStd_HArray2OfCharacter;
}

  export declare class Handle_TColStd_HArray2OfCharacter_1 extends Handle_TColStd_HArray2OfCharacter {
    constructor();
  }

  export declare class Handle_TColStd_HArray2OfCharacter_2 extends Handle_TColStd_HArray2OfCharacter {
    constructor(thePtr: TColStd_HArray2OfCharacter);
  }

  export declare class Handle_TColStd_HArray2OfCharacter_3 extends Handle_TColStd_HArray2OfCharacter {
    constructor(theHandle: Handle_TColStd_HArray2OfCharacter);
  }

  export declare class Handle_TColStd_HArray2OfCharacter_4 extends Handle_TColStd_HArray2OfCharacter {
    constructor(theHandle: Handle_TColStd_HArray2OfCharacter);
  }

export declare class Handle_TColStd_HSequenceOfExtendedString {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TColStd_HSequenceOfExtendedString): void;
  get(): TColStd_HSequenceOfExtendedString;
}

  export declare class Handle_TColStd_HSequenceOfExtendedString_1 extends Handle_TColStd_HSequenceOfExtendedString {
    constructor();
  }

  export declare class Handle_TColStd_HSequenceOfExtendedString_2 extends Handle_TColStd_HSequenceOfExtendedString {
    constructor(thePtr: TColStd_HSequenceOfExtendedString);
  }

  export declare class Handle_TColStd_HSequenceOfExtendedString_3 extends Handle_TColStd_HSequenceOfExtendedString {
    constructor(theHandle: Handle_TColStd_HSequenceOfExtendedString);
  }

  export declare class Handle_TColStd_HSequenceOfExtendedString_4 extends Handle_TColStd_HSequenceOfExtendedString {
    constructor(theHandle: Handle_TColStd_HSequenceOfExtendedString);
  }

export declare class TColStd_IndexedMapOfReal extends NCollection_BaseMap {
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TColStd_IndexedMapOfReal): void;
  Assign(theOther: TColStd_IndexedMapOfReal): TColStd_IndexedMapOfReal;
  ReSize(theExtent: Standard_Integer): void;
  Add(theKey1: Standard_Real): Standard_Integer;
  Contains(theKey1: Standard_Real): Standard_Boolean;
  Substitute(theIndex: Standard_Integer, theKey1: Standard_Real): void;
  Swap(theIndex1: Standard_Integer, theIndex2: Standard_Integer): void;
  RemoveLast(): void;
  RemoveFromIndex(theIndex: Standard_Integer): void;
  RemoveKey(theKey1: Standard_Real): Standard_Boolean;
  FindKey(theIndex: Standard_Integer): Standard_Real;
  FindIndex(theKey1: Standard_Real): Standard_Integer;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: Handle_NCollection_BaseAllocator): void;
  Size(): Standard_Integer;
}

  export declare class TColStd_IndexedMapOfReal_1 extends TColStd_IndexedMapOfReal {
    constructor();
  }

  export declare class TColStd_IndexedMapOfReal_2 extends TColStd_IndexedMapOfReal {
    constructor(theNbBuckets: Standard_Integer, theAllocator: Handle_NCollection_BaseAllocator);
  }

  export declare class TColStd_IndexedMapOfReal_3 extends TColStd_IndexedMapOfReal {
    constructor(theOther: TColStd_IndexedMapOfReal);
  }

export declare class TColStd_MapOfReal extends NCollection_BaseMap {
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TColStd_MapOfReal): void;
  Assign(theOther: TColStd_MapOfReal): TColStd_MapOfReal;
  ReSize(N: Standard_Integer): void;
  Add(K: Standard_Real): Standard_Boolean;
  Added(K: Standard_Real): Standard_Real;
  Contains_1(K: Standard_Real): Standard_Boolean;
  Remove(K: Standard_Real): Standard_Boolean;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: Handle_NCollection_BaseAllocator): void;
  Size(): Standard_Integer;
  IsEqual(theOther: TColStd_MapOfReal): Standard_Boolean;
  Contains_2(theOther: TColStd_MapOfReal): Standard_Boolean;
  Union(theLeft: TColStd_MapOfReal, theRight: TColStd_MapOfReal): void;
  Unite(theOther: TColStd_MapOfReal): Standard_Boolean;
  HasIntersection(theMap: TColStd_MapOfReal): Standard_Boolean;
  Intersection(theLeft: TColStd_MapOfReal, theRight: TColStd_MapOfReal): void;
  Intersect(theOther: TColStd_MapOfReal): Standard_Boolean;
  Subtraction(theLeft: TColStd_MapOfReal, theRight: TColStd_MapOfReal): void;
  Subtract(theOther: TColStd_MapOfReal): Standard_Boolean;
  Difference(theLeft: TColStd_MapOfReal, theRight: TColStd_MapOfReal): void;
  Differ(theOther: TColStd_MapOfReal): Standard_Boolean;
}

  export declare class TColStd_MapOfReal_1 extends TColStd_MapOfReal {
    constructor();
  }

  export declare class TColStd_MapOfReal_2 extends TColStd_MapOfReal {
    constructor(theNbBuckets: Standard_Integer, theAllocator: Handle_NCollection_BaseAllocator);
  }

  export declare class TColStd_MapOfReal_3 extends TColStd_MapOfReal {
    constructor(theOther: TColStd_MapOfReal);
  }

export declare class Handle_TCollection_MapNode {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TCollection_MapNode): void;
  get(): TCollection_MapNode;
}

  export declare class Handle_TCollection_MapNode_1 extends Handle_TCollection_MapNode {
    constructor();
  }

  export declare class Handle_TCollection_MapNode_2 extends Handle_TCollection_MapNode {
    constructor(thePtr: TCollection_MapNode);
  }

  export declare class Handle_TCollection_MapNode_3 extends Handle_TCollection_MapNode {
    constructor(theHandle: Handle_TCollection_MapNode);
  }

  export declare class Handle_TCollection_MapNode_4 extends Handle_TCollection_MapNode {
    constructor(theHandle: Handle_TCollection_MapNode);
  }

export declare class Handle_TCollection_SeqNode {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TCollection_SeqNode): void;
  get(): TCollection_SeqNode;
}

  export declare class Handle_TCollection_SeqNode_1 extends Handle_TCollection_SeqNode {
    constructor();
  }

  export declare class Handle_TCollection_SeqNode_2 extends Handle_TCollection_SeqNode {
    constructor(thePtr: TCollection_SeqNode);
  }

  export declare class Handle_TCollection_SeqNode_3 extends Handle_TCollection_SeqNode {
    constructor(theHandle: Handle_TCollection_SeqNode);
  }

  export declare class Handle_TCollection_SeqNode_4 extends Handle_TCollection_SeqNode {
    constructor(theHandle: Handle_TCollection_SeqNode);
  }

export declare class TShort_Array2OfShortReal {
  Init(theValue: Standard_ShortReal): void;
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
  Assign(theOther: TShort_Array2OfShortReal): TShort_Array2OfShortReal;
  Move(theOther: TShort_Array2OfShortReal): TShort_Array2OfShortReal;
  Value(theRow: Standard_Integer, theCol: Standard_Integer): Standard_ShortReal;
  ChangeValue(theRow: Standard_Integer, theCol: Standard_Integer): Standard_ShortReal;
  SetValue(theRow: Standard_Integer, theCol: Standard_Integer, theItem: Standard_ShortReal): void;
  Resize(theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class TShort_Array2OfShortReal_1 extends TShort_Array2OfShortReal {
    constructor();
  }

  export declare class TShort_Array2OfShortReal_2 extends TShort_Array2OfShortReal {
    constructor(theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer);
  }

  export declare class TShort_Array2OfShortReal_3 extends TShort_Array2OfShortReal {
    constructor(theOther: TShort_Array2OfShortReal);
  }

  export declare class TShort_Array2OfShortReal_4 extends TShort_Array2OfShortReal {
    constructor(theOther: TShort_Array2OfShortReal);
  }

  export declare class TShort_Array2OfShortReal_5 extends TShort_Array2OfShortReal {
    constructor(theBegin: Standard_ShortReal, theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer);
  }

export declare class Handle_TShort_HArray2OfShortReal {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TShort_HArray2OfShortReal): void;
  get(): TShort_HArray2OfShortReal;
}

  export declare class Handle_TShort_HArray2OfShortReal_1 extends Handle_TShort_HArray2OfShortReal {
    constructor();
  }

  export declare class Handle_TShort_HArray2OfShortReal_2 extends Handle_TShort_HArray2OfShortReal {
    constructor(thePtr: TShort_HArray2OfShortReal);
  }

  export declare class Handle_TShort_HArray2OfShortReal_3 extends Handle_TShort_HArray2OfShortReal {
    constructor(theHandle: Handle_TShort_HArray2OfShortReal);
  }

  export declare class Handle_TShort_HArray2OfShortReal_4 extends Handle_TShort_HArray2OfShortReal {
    constructor(theHandle: Handle_TShort_HArray2OfShortReal);
  }

export declare class TShort_SequenceOfShortReal extends NCollection_BaseSequence {
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
  delNode(theNode: NCollection_SeqNode, theAl: Handle_NCollection_BaseAllocator): void;
  Clear(theAllocator: Handle_NCollection_BaseAllocator): void;
  Assign(theOther: TShort_SequenceOfShortReal): TShort_SequenceOfShortReal;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: Standard_ShortReal): void;
  Append_2(theSeq: TShort_SequenceOfShortReal): void;
  Prepend_1(theItem: Standard_ShortReal): void;
  Prepend_2(theSeq: TShort_SequenceOfShortReal): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: Standard_ShortReal): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: TShort_SequenceOfShortReal): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: TShort_SequenceOfShortReal): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: Standard_ShortReal): void;
  Split(theIndex: Standard_Integer, theSeq: TShort_SequenceOfShortReal): void;
  First(): Standard_ShortReal;
  ChangeFirst(): Standard_ShortReal;
  Last(): Standard_ShortReal;
  ChangeLast(): Standard_ShortReal;
  Value(theIndex: Standard_Integer): Standard_ShortReal;
  ChangeValue(theIndex: Standard_Integer): Standard_ShortReal;
  SetValue(theIndex: Standard_Integer, theItem: Standard_ShortReal): void;
}

  export declare class TShort_SequenceOfShortReal_1 extends TShort_SequenceOfShortReal {
    constructor();
  }

  export declare class TShort_SequenceOfShortReal_2 extends TShort_SequenceOfShortReal {
    constructor(theAllocator: Handle_NCollection_BaseAllocator);
  }

  export declare class TShort_SequenceOfShortReal_3 extends TShort_SequenceOfShortReal {
    constructor(theOther: TShort_SequenceOfShortReal);
  }

export declare class Handle_TShort_HSequenceOfShortReal {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TShort_HSequenceOfShortReal): void;
  get(): TShort_HSequenceOfShortReal;
}

  export declare class Handle_TShort_HSequenceOfShortReal_1 extends Handle_TShort_HSequenceOfShortReal {
    constructor();
  }

  export declare class Handle_TShort_HSequenceOfShortReal_2 extends Handle_TShort_HSequenceOfShortReal {
    constructor(thePtr: TShort_HSequenceOfShortReal);
  }

  export declare class Handle_TShort_HSequenceOfShortReal_3 extends Handle_TShort_HSequenceOfShortReal {
    constructor(theHandle: Handle_TShort_HSequenceOfShortReal);
  }

  export declare class Handle_TShort_HSequenceOfShortReal_4 extends Handle_TShort_HSequenceOfShortReal {
    constructor(theHandle: Handle_TShort_HSequenceOfShortReal);
  }

export declare class Handle_Units_Dimensions {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Units_Dimensions): void;
  get(): Units_Dimensions;
}

  export declare class Handle_Units_Dimensions_1 extends Handle_Units_Dimensions {
    constructor();
  }

  export declare class Handle_Units_Dimensions_2 extends Handle_Units_Dimensions {
    constructor(thePtr: Units_Dimensions);
  }

  export declare class Handle_Units_Dimensions_3 extends Handle_Units_Dimensions {
    constructor(theHandle: Handle_Units_Dimensions);
  }

  export declare class Handle_Units_Dimensions_4 extends Handle_Units_Dimensions {
    constructor(theHandle: Handle_Units_Dimensions);
  }

export declare class Handle_Units_Unit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Units_Unit): void;
  get(): Units_Unit;
}

  export declare class Handle_Units_Unit_1 extends Handle_Units_Unit {
    constructor();
  }

  export declare class Handle_Units_Unit_2 extends Handle_Units_Unit {
    constructor(thePtr: Units_Unit);
  }

  export declare class Handle_Units_Unit_3 extends Handle_Units_Unit {
    constructor(theHandle: Handle_Units_Unit);
  }

  export declare class Handle_Units_Unit_4 extends Handle_Units_Unit {
    constructor(theHandle: Handle_Units_Unit);
  }

export declare class Handle_Units_UnitsSequence {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Units_UnitsSequence): void;
  get(): Units_UnitsSequence;
}

  export declare class Handle_Units_UnitsSequence_1 extends Handle_Units_UnitsSequence {
    constructor();
  }

  export declare class Handle_Units_UnitsSequence_2 extends Handle_Units_UnitsSequence {
    constructor(thePtr: Units_UnitsSequence);
  }

  export declare class Handle_Units_UnitsSequence_3 extends Handle_Units_UnitsSequence {
    constructor(theHandle: Handle_Units_UnitsSequence);
  }

  export declare class Handle_Units_UnitsSequence_4 extends Handle_Units_UnitsSequence {
    constructor(theHandle: Handle_Units_UnitsSequence);
  }

export declare class Handle_Units_Quantity {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Units_Quantity): void;
  get(): Units_Quantity;
}

  export declare class Handle_Units_Quantity_1 extends Handle_Units_Quantity {
    constructor();
  }

  export declare class Handle_Units_Quantity_2 extends Handle_Units_Quantity {
    constructor(thePtr: Units_Quantity);
  }

  export declare class Handle_Units_Quantity_3 extends Handle_Units_Quantity {
    constructor(theHandle: Handle_Units_Quantity);
  }

  export declare class Handle_Units_Quantity_4 extends Handle_Units_Quantity {
    constructor(theHandle: Handle_Units_Quantity);
  }

export declare class Handle_Units_QuantitiesSequence {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Units_QuantitiesSequence): void;
  get(): Units_QuantitiesSequence;
}

  export declare class Handle_Units_QuantitiesSequence_1 extends Handle_Units_QuantitiesSequence {
    constructor();
  }

  export declare class Handle_Units_QuantitiesSequence_2 extends Handle_Units_QuantitiesSequence {
    constructor(thePtr: Units_QuantitiesSequence);
  }

  export declare class Handle_Units_QuantitiesSequence_3 extends Handle_Units_QuantitiesSequence {
    constructor(theHandle: Handle_Units_QuantitiesSequence);
  }

  export declare class Handle_Units_QuantitiesSequence_4 extends Handle_Units_QuantitiesSequence {
    constructor(theHandle: Handle_Units_QuantitiesSequence);
  }

export declare class Handle_Units_Token {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Units_Token): void;
  get(): Units_Token;
}

  export declare class Handle_Units_Token_1 extends Handle_Units_Token {
    constructor();
  }

  export declare class Handle_Units_Token_2 extends Handle_Units_Token {
    constructor(thePtr: Units_Token);
  }

  export declare class Handle_Units_Token_3 extends Handle_Units_Token {
    constructor(theHandle: Handle_Units_Token);
  }

  export declare class Handle_Units_Token_4 extends Handle_Units_Token {
    constructor(theHandle: Handle_Units_Token);
  }

export declare class Handle_Units_TokensSequence {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Units_TokensSequence): void;
  get(): Units_TokensSequence;
}

  export declare class Handle_Units_TokensSequence_1 extends Handle_Units_TokensSequence {
    constructor();
  }

  export declare class Handle_Units_TokensSequence_2 extends Handle_Units_TokensSequence {
    constructor(thePtr: Units_TokensSequence);
  }

  export declare class Handle_Units_TokensSequence_3 extends Handle_Units_TokensSequence {
    constructor(theHandle: Handle_Units_TokensSequence);
  }

  export declare class Handle_Units_TokensSequence_4 extends Handle_Units_TokensSequence {
    constructor(theHandle: Handle_Units_TokensSequence);
  }

export declare class Handle_Units_Lexicon {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Units_Lexicon): void;
  get(): Units_Lexicon;
}

  export declare class Handle_Units_Lexicon_1 extends Handle_Units_Lexicon {
    constructor();
  }

  export declare class Handle_Units_Lexicon_2 extends Handle_Units_Lexicon {
    constructor(thePtr: Units_Lexicon);
  }

  export declare class Handle_Units_Lexicon_3 extends Handle_Units_Lexicon {
    constructor(theHandle: Handle_Units_Lexicon);
  }

  export declare class Handle_Units_Lexicon_4 extends Handle_Units_Lexicon {
    constructor(theHandle: Handle_Units_Lexicon);
  }

export declare class Handle_Units_NoSuchType {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Units_NoSuchType): void;
  get(): Units_NoSuchType;
}

  export declare class Handle_Units_NoSuchType_1 extends Handle_Units_NoSuchType {
    constructor();
  }

  export declare class Handle_Units_NoSuchType_2 extends Handle_Units_NoSuchType {
    constructor(thePtr: Units_NoSuchType);
  }

  export declare class Handle_Units_NoSuchType_3 extends Handle_Units_NoSuchType {
    constructor(theHandle: Handle_Units_NoSuchType);
  }

  export declare class Handle_Units_NoSuchType_4 extends Handle_Units_NoSuchType {
    constructor(theHandle: Handle_Units_NoSuchType);
  }

export declare class Handle_Units_NoSuchUnit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Units_NoSuchUnit): void;
  get(): Units_NoSuchUnit;
}

  export declare class Handle_Units_NoSuchUnit_1 extends Handle_Units_NoSuchUnit {
    constructor();
  }

  export declare class Handle_Units_NoSuchUnit_2 extends Handle_Units_NoSuchUnit {
    constructor(thePtr: Units_NoSuchUnit);
  }

  export declare class Handle_Units_NoSuchUnit_3 extends Handle_Units_NoSuchUnit {
    constructor(theHandle: Handle_Units_NoSuchUnit);
  }

  export declare class Handle_Units_NoSuchUnit_4 extends Handle_Units_NoSuchUnit {
    constructor(theHandle: Handle_Units_NoSuchUnit);
  }

export declare class Handle_Units_ShiftedToken {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Units_ShiftedToken): void;
  get(): Units_ShiftedToken;
}

  export declare class Handle_Units_ShiftedToken_1 extends Handle_Units_ShiftedToken {
    constructor();
  }

  export declare class Handle_Units_ShiftedToken_2 extends Handle_Units_ShiftedToken {
    constructor(thePtr: Units_ShiftedToken);
  }

  export declare class Handle_Units_ShiftedToken_3 extends Handle_Units_ShiftedToken {
    constructor(theHandle: Handle_Units_ShiftedToken);
  }

  export declare class Handle_Units_ShiftedToken_4 extends Handle_Units_ShiftedToken {
    constructor(theHandle: Handle_Units_ShiftedToken);
  }

export declare class Handle_Units_ShiftedUnit {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Units_ShiftedUnit): void;
  get(): Units_ShiftedUnit;
}

  export declare class Handle_Units_ShiftedUnit_1 extends Handle_Units_ShiftedUnit {
    constructor();
  }

  export declare class Handle_Units_ShiftedUnit_2 extends Handle_Units_ShiftedUnit {
    constructor(thePtr: Units_ShiftedUnit);
  }

  export declare class Handle_Units_ShiftedUnit_3 extends Handle_Units_ShiftedUnit {
    constructor(theHandle: Handle_Units_ShiftedUnit);
  }

  export declare class Handle_Units_ShiftedUnit_4 extends Handle_Units_ShiftedUnit {
    constructor(theHandle: Handle_Units_ShiftedUnit);
  }

export declare class Handle_Units_UnitsDictionary {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Units_UnitsDictionary): void;
  get(): Units_UnitsDictionary;
}

  export declare class Handle_Units_UnitsDictionary_1 extends Handle_Units_UnitsDictionary {
    constructor();
  }

  export declare class Handle_Units_UnitsDictionary_2 extends Handle_Units_UnitsDictionary {
    constructor(thePtr: Units_UnitsDictionary);
  }

  export declare class Handle_Units_UnitsDictionary_3 extends Handle_Units_UnitsDictionary {
    constructor(theHandle: Handle_Units_UnitsDictionary);
  }

  export declare class Handle_Units_UnitsDictionary_4 extends Handle_Units_UnitsDictionary {
    constructor(theHandle: Handle_Units_UnitsDictionary);
  }

export declare class Handle_Units_UnitsLexicon {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Units_UnitsLexicon): void;
  get(): Units_UnitsLexicon;
}

  export declare class Handle_Units_UnitsLexicon_1 extends Handle_Units_UnitsLexicon {
    constructor();
  }

  export declare class Handle_Units_UnitsLexicon_2 extends Handle_Units_UnitsLexicon {
    constructor(thePtr: Units_UnitsLexicon);
  }

  export declare class Handle_Units_UnitsLexicon_3 extends Handle_Units_UnitsLexicon {
    constructor(theHandle: Handle_Units_UnitsLexicon);
  }

  export declare class Handle_Units_UnitsLexicon_4 extends Handle_Units_UnitsLexicon {
    constructor(theHandle: Handle_Units_UnitsLexicon);
  }

export declare class Handle_Units_UnitsSystem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Units_UnitsSystem): void;
  get(): Units_UnitsSystem;
}

  export declare class Handle_Units_UnitsSystem_1 extends Handle_Units_UnitsSystem {
    constructor();
  }

  export declare class Handle_Units_UnitsSystem_2 extends Handle_Units_UnitsSystem {
    constructor(thePtr: Units_UnitsSystem);
  }

  export declare class Handle_Units_UnitsSystem_3 extends Handle_Units_UnitsSystem {
    constructor(theHandle: Handle_Units_UnitsSystem);
  }

  export declare class Handle_Units_UnitsSystem_4 extends Handle_Units_UnitsSystem {
    constructor(theHandle: Handle_Units_UnitsSystem);
  }

export declare type Standard_JsonKey = {
  Standard_JsonKey_None: {};
  Standard_JsonKey_OpenChild: {};
  Standard_JsonKey_CloseChild: {};
  Standard_JsonKey_OpenContainer: {};
  Standard_JsonKey_CloseContainer: {};
  Standard_JsonKey_Quote: {};
  Standard_JsonKey_SeparatorKeyToValue: {};
  Standard_JsonKey_SeparatorValueToValue: {};
}

export declare type Quantity_NameOfColor = {
  Quantity_NOC_BLACK: {};
  Quantity_NOC_MATRABLUE: {};
  Quantity_NOC_MATRAGRAY: {};
  Quantity_NOC_ALICEBLUE: {};
  Quantity_NOC_ANTIQUEWHITE: {};
  Quantity_NOC_ANTIQUEWHITE1: {};
  Quantity_NOC_ANTIQUEWHITE2: {};
  Quantity_NOC_ANTIQUEWHITE3: {};
  Quantity_NOC_ANTIQUEWHITE4: {};
  Quantity_NOC_AQUAMARINE1: {};
  Quantity_NOC_AQUAMARINE2: {};
  Quantity_NOC_AQUAMARINE4: {};
  Quantity_NOC_AZURE: {};
  Quantity_NOC_AZURE2: {};
  Quantity_NOC_AZURE3: {};
  Quantity_NOC_AZURE4: {};
  Quantity_NOC_BEIGE: {};
  Quantity_NOC_BISQUE: {};
  Quantity_NOC_BISQUE2: {};
  Quantity_NOC_BISQUE3: {};
  Quantity_NOC_BISQUE4: {};
  Quantity_NOC_BLANCHEDALMOND: {};
  Quantity_NOC_BLUE: {};
  Quantity_NOC_BLUE1: {};
  Quantity_NOC_BLUE2: {};
  Quantity_NOC_BLUE3: {};
  Quantity_NOC_BLUE4: {};
  Quantity_NOC_BLUEVIOLET: {};
  Quantity_NOC_BROWN: {};
  Quantity_NOC_BROWN1: {};
  Quantity_NOC_BROWN2: {};
  Quantity_NOC_BROWN3: {};
  Quantity_NOC_BROWN4: {};
  Quantity_NOC_BURLYWOOD: {};
  Quantity_NOC_BURLYWOOD1: {};
  Quantity_NOC_BURLYWOOD2: {};
  Quantity_NOC_BURLYWOOD3: {};
  Quantity_NOC_BURLYWOOD4: {};
  Quantity_NOC_CADETBLUE: {};
  Quantity_NOC_CADETBLUE1: {};
  Quantity_NOC_CADETBLUE2: {};
  Quantity_NOC_CADETBLUE3: {};
  Quantity_NOC_CADETBLUE4: {};
  Quantity_NOC_CHARTREUSE: {};
  Quantity_NOC_CHARTREUSE1: {};
  Quantity_NOC_CHARTREUSE2: {};
  Quantity_NOC_CHARTREUSE3: {};
  Quantity_NOC_CHARTREUSE4: {};
  Quantity_NOC_CHOCOLATE: {};
  Quantity_NOC_CHOCOLATE1: {};
  Quantity_NOC_CHOCOLATE2: {};
  Quantity_NOC_CHOCOLATE3: {};
  Quantity_NOC_CHOCOLATE4: {};
  Quantity_NOC_CORAL: {};
  Quantity_NOC_CORAL1: {};
  Quantity_NOC_CORAL2: {};
  Quantity_NOC_CORAL3: {};
  Quantity_NOC_CORAL4: {};
  Quantity_NOC_CORNFLOWERBLUE: {};
  Quantity_NOC_CORNSILK1: {};
  Quantity_NOC_CORNSILK2: {};
  Quantity_NOC_CORNSILK3: {};
  Quantity_NOC_CORNSILK4: {};
  Quantity_NOC_CYAN: {};
  Quantity_NOC_CYAN1: {};
  Quantity_NOC_CYAN2: {};
  Quantity_NOC_CYAN3: {};
  Quantity_NOC_CYAN4: {};
  Quantity_NOC_DARKGOLDENROD: {};
  Quantity_NOC_DARKGOLDENROD1: {};
  Quantity_NOC_DARKGOLDENROD2: {};
  Quantity_NOC_DARKGOLDENROD3: {};
  Quantity_NOC_DARKGOLDENROD4: {};
  Quantity_NOC_DARKGREEN: {};
  Quantity_NOC_DARKKHAKI: {};
  Quantity_NOC_DARKOLIVEGREEN: {};
  Quantity_NOC_DARKOLIVEGREEN1: {};
  Quantity_NOC_DARKOLIVEGREEN2: {};
  Quantity_NOC_DARKOLIVEGREEN3: {};
  Quantity_NOC_DARKOLIVEGREEN4: {};
  Quantity_NOC_DARKORANGE: {};
  Quantity_NOC_DARKORANGE1: {};
  Quantity_NOC_DARKORANGE2: {};
  Quantity_NOC_DARKORANGE3: {};
  Quantity_NOC_DARKORANGE4: {};
  Quantity_NOC_DARKORCHID: {};
  Quantity_NOC_DARKORCHID1: {};
  Quantity_NOC_DARKORCHID2: {};
  Quantity_NOC_DARKORCHID3: {};
  Quantity_NOC_DARKORCHID4: {};
  Quantity_NOC_DARKSALMON: {};
  Quantity_NOC_DARKSEAGREEN: {};
  Quantity_NOC_DARKSEAGREEN1: {};
  Quantity_NOC_DARKSEAGREEN2: {};
  Quantity_NOC_DARKSEAGREEN3: {};
  Quantity_NOC_DARKSEAGREEN4: {};
  Quantity_NOC_DARKSLATEBLUE: {};
  Quantity_NOC_DARKSLATEGRAY1: {};
  Quantity_NOC_DARKSLATEGRAY2: {};
  Quantity_NOC_DARKSLATEGRAY3: {};
  Quantity_NOC_DARKSLATEGRAY4: {};
  Quantity_NOC_DARKSLATEGRAY: {};
  Quantity_NOC_DARKTURQUOISE: {};
  Quantity_NOC_DARKVIOLET: {};
  Quantity_NOC_DEEPPINK: {};
  Quantity_NOC_DEEPPINK2: {};
  Quantity_NOC_DEEPPINK3: {};
  Quantity_NOC_DEEPPINK4: {};
  Quantity_NOC_DEEPSKYBLUE1: {};
  Quantity_NOC_DEEPSKYBLUE2: {};
  Quantity_NOC_DEEPSKYBLUE3: {};
  Quantity_NOC_DEEPSKYBLUE4: {};
  Quantity_NOC_DODGERBLUE1: {};
  Quantity_NOC_DODGERBLUE2: {};
  Quantity_NOC_DODGERBLUE3: {};
  Quantity_NOC_DODGERBLUE4: {};
  Quantity_NOC_FIREBRICK: {};
  Quantity_NOC_FIREBRICK1: {};
  Quantity_NOC_FIREBRICK2: {};
  Quantity_NOC_FIREBRICK3: {};
  Quantity_NOC_FIREBRICK4: {};
  Quantity_NOC_FLORALWHITE: {};
  Quantity_NOC_FORESTGREEN: {};
  Quantity_NOC_GAINSBORO: {};
  Quantity_NOC_GHOSTWHITE: {};
  Quantity_NOC_GOLD: {};
  Quantity_NOC_GOLD1: {};
  Quantity_NOC_GOLD2: {};
  Quantity_NOC_GOLD3: {};
  Quantity_NOC_GOLD4: {};
  Quantity_NOC_GOLDENROD: {};
  Quantity_NOC_GOLDENROD1: {};
  Quantity_NOC_GOLDENROD2: {};
  Quantity_NOC_GOLDENROD3: {};
  Quantity_NOC_GOLDENROD4: {};
  Quantity_NOC_GRAY: {};
  Quantity_NOC_GRAY0: {};
  Quantity_NOC_GRAY1: {};
  Quantity_NOC_GRAY2: {};
  Quantity_NOC_GRAY3: {};
  Quantity_NOC_GRAY4: {};
  Quantity_NOC_GRAY5: {};
  Quantity_NOC_GRAY6: {};
  Quantity_NOC_GRAY7: {};
  Quantity_NOC_GRAY8: {};
  Quantity_NOC_GRAY9: {};
  Quantity_NOC_GRAY10: {};
  Quantity_NOC_GRAY11: {};
  Quantity_NOC_GRAY12: {};
  Quantity_NOC_GRAY13: {};
  Quantity_NOC_GRAY14: {};
  Quantity_NOC_GRAY15: {};
  Quantity_NOC_GRAY16: {};
  Quantity_NOC_GRAY17: {};
  Quantity_NOC_GRAY18: {};
  Quantity_NOC_GRAY19: {};
  Quantity_NOC_GRAY20: {};
  Quantity_NOC_GRAY21: {};
  Quantity_NOC_GRAY22: {};
  Quantity_NOC_GRAY23: {};
  Quantity_NOC_GRAY24: {};
  Quantity_NOC_GRAY25: {};
  Quantity_NOC_GRAY26: {};
  Quantity_NOC_GRAY27: {};
  Quantity_NOC_GRAY28: {};
  Quantity_NOC_GRAY29: {};
  Quantity_NOC_GRAY30: {};
  Quantity_NOC_GRAY31: {};
  Quantity_NOC_GRAY32: {};
  Quantity_NOC_GRAY33: {};
  Quantity_NOC_GRAY34: {};
  Quantity_NOC_GRAY35: {};
  Quantity_NOC_GRAY36: {};
  Quantity_NOC_GRAY37: {};
  Quantity_NOC_GRAY38: {};
  Quantity_NOC_GRAY39: {};
  Quantity_NOC_GRAY40: {};
  Quantity_NOC_GRAY41: {};
  Quantity_NOC_GRAY42: {};
  Quantity_NOC_GRAY43: {};
  Quantity_NOC_GRAY44: {};
  Quantity_NOC_GRAY45: {};
  Quantity_NOC_GRAY46: {};
  Quantity_NOC_GRAY47: {};
  Quantity_NOC_GRAY48: {};
  Quantity_NOC_GRAY49: {};
  Quantity_NOC_GRAY50: {};
  Quantity_NOC_GRAY51: {};
  Quantity_NOC_GRAY52: {};
  Quantity_NOC_GRAY53: {};
  Quantity_NOC_GRAY54: {};
  Quantity_NOC_GRAY55: {};
  Quantity_NOC_GRAY56: {};
  Quantity_NOC_GRAY57: {};
  Quantity_NOC_GRAY58: {};
  Quantity_NOC_GRAY59: {};
  Quantity_NOC_GRAY60: {};
  Quantity_NOC_GRAY61: {};
  Quantity_NOC_GRAY62: {};
  Quantity_NOC_GRAY63: {};
  Quantity_NOC_GRAY64: {};
  Quantity_NOC_GRAY65: {};
  Quantity_NOC_GRAY66: {};
  Quantity_NOC_GRAY67: {};
  Quantity_NOC_GRAY68: {};
  Quantity_NOC_GRAY69: {};
  Quantity_NOC_GRAY70: {};
  Quantity_NOC_GRAY71: {};
  Quantity_NOC_GRAY72: {};
  Quantity_NOC_GRAY73: {};
  Quantity_NOC_GRAY74: {};
  Quantity_NOC_GRAY75: {};
  Quantity_NOC_GRAY76: {};
  Quantity_NOC_GRAY77: {};
  Quantity_NOC_GRAY78: {};
  Quantity_NOC_GRAY79: {};
  Quantity_NOC_GRAY80: {};
  Quantity_NOC_GRAY81: {};
  Quantity_NOC_GRAY82: {};
  Quantity_NOC_GRAY83: {};
  Quantity_NOC_GRAY85: {};
  Quantity_NOC_GRAY86: {};
  Quantity_NOC_GRAY87: {};
  Quantity_NOC_GRAY88: {};
  Quantity_NOC_GRAY89: {};
  Quantity_NOC_GRAY90: {};
  Quantity_NOC_GRAY91: {};
  Quantity_NOC_GRAY92: {};
  Quantity_NOC_GRAY93: {};
  Quantity_NOC_GRAY94: {};
  Quantity_NOC_GRAY95: {};
  Quantity_NOC_GRAY97: {};
  Quantity_NOC_GRAY98: {};
  Quantity_NOC_GRAY99: {};
  Quantity_NOC_GREEN: {};
  Quantity_NOC_GREEN1: {};
  Quantity_NOC_GREEN2: {};
  Quantity_NOC_GREEN3: {};
  Quantity_NOC_GREEN4: {};
  Quantity_NOC_GREENYELLOW: {};
  Quantity_NOC_HONEYDEW: {};
  Quantity_NOC_HONEYDEW2: {};
  Quantity_NOC_HONEYDEW3: {};
  Quantity_NOC_HONEYDEW4: {};
  Quantity_NOC_HOTPINK: {};
  Quantity_NOC_HOTPINK1: {};
  Quantity_NOC_HOTPINK2: {};
  Quantity_NOC_HOTPINK3: {};
  Quantity_NOC_HOTPINK4: {};
  Quantity_NOC_INDIANRED: {};
  Quantity_NOC_INDIANRED1: {};
  Quantity_NOC_INDIANRED2: {};
  Quantity_NOC_INDIANRED3: {};
  Quantity_NOC_INDIANRED4: {};
  Quantity_NOC_IVORY: {};
  Quantity_NOC_IVORY2: {};
  Quantity_NOC_IVORY3: {};
  Quantity_NOC_IVORY4: {};
  Quantity_NOC_KHAKI: {};
  Quantity_NOC_KHAKI1: {};
  Quantity_NOC_KHAKI2: {};
  Quantity_NOC_KHAKI3: {};
  Quantity_NOC_KHAKI4: {};
  Quantity_NOC_LAVENDER: {};
  Quantity_NOC_LAVENDERBLUSH1: {};
  Quantity_NOC_LAVENDERBLUSH2: {};
  Quantity_NOC_LAVENDERBLUSH3: {};
  Quantity_NOC_LAVENDERBLUSH4: {};
  Quantity_NOC_LAWNGREEN: {};
  Quantity_NOC_LEMONCHIFFON1: {};
  Quantity_NOC_LEMONCHIFFON2: {};
  Quantity_NOC_LEMONCHIFFON3: {};
  Quantity_NOC_LEMONCHIFFON4: {};
  Quantity_NOC_LIGHTBLUE: {};
  Quantity_NOC_LIGHTBLUE1: {};
  Quantity_NOC_LIGHTBLUE2: {};
  Quantity_NOC_LIGHTBLUE3: {};
  Quantity_NOC_LIGHTBLUE4: {};
  Quantity_NOC_LIGHTCORAL: {};
  Quantity_NOC_LIGHTCYAN: {};
  Quantity_NOC_LIGHTCYAN1: {};
  Quantity_NOC_LIGHTCYAN2: {};
  Quantity_NOC_LIGHTCYAN3: {};
  Quantity_NOC_LIGHTCYAN4: {};
  Quantity_NOC_LIGHTGOLDENROD: {};
  Quantity_NOC_LIGHTGOLDENROD1: {};
  Quantity_NOC_LIGHTGOLDENROD2: {};
  Quantity_NOC_LIGHTGOLDENROD3: {};
  Quantity_NOC_LIGHTGOLDENROD4: {};
  Quantity_NOC_LIGHTGOLDENRODYELLOW: {};
  Quantity_NOC_LIGHTGRAY: {};
  Quantity_NOC_LIGHTPINK: {};
  Quantity_NOC_LIGHTPINK1: {};
  Quantity_NOC_LIGHTPINK2: {};
  Quantity_NOC_LIGHTPINK3: {};
  Quantity_NOC_LIGHTPINK4: {};
  Quantity_NOC_LIGHTSALMON1: {};
  Quantity_NOC_LIGHTSALMON2: {};
  Quantity_NOC_LIGHTSALMON3: {};
  Quantity_NOC_LIGHTSALMON4: {};
  Quantity_NOC_LIGHTSEAGREEN: {};
  Quantity_NOC_LIGHTSKYBLUE: {};
  Quantity_NOC_LIGHTSKYBLUE1: {};
  Quantity_NOC_LIGHTSKYBLUE2: {};
  Quantity_NOC_LIGHTSKYBLUE3: {};
  Quantity_NOC_LIGHTSKYBLUE4: {};
  Quantity_NOC_LIGHTSLATEBLUE: {};
  Quantity_NOC_LIGHTSLATEGRAY: {};
  Quantity_NOC_LIGHTSTEELBLUE: {};
  Quantity_NOC_LIGHTSTEELBLUE1: {};
  Quantity_NOC_LIGHTSTEELBLUE2: {};
  Quantity_NOC_LIGHTSTEELBLUE3: {};
  Quantity_NOC_LIGHTSTEELBLUE4: {};
  Quantity_NOC_LIGHTYELLOW: {};
  Quantity_NOC_LIGHTYELLOW2: {};
  Quantity_NOC_LIGHTYELLOW3: {};
  Quantity_NOC_LIGHTYELLOW4: {};
  Quantity_NOC_LIMEGREEN: {};
  Quantity_NOC_LINEN: {};
  Quantity_NOC_MAGENTA: {};
  Quantity_NOC_MAGENTA1: {};
  Quantity_NOC_MAGENTA2: {};
  Quantity_NOC_MAGENTA3: {};
  Quantity_NOC_MAGENTA4: {};
  Quantity_NOC_MAROON: {};
  Quantity_NOC_MAROON1: {};
  Quantity_NOC_MAROON2: {};
  Quantity_NOC_MAROON3: {};
  Quantity_NOC_MAROON4: {};
  Quantity_NOC_MEDIUMAQUAMARINE: {};
  Quantity_NOC_MEDIUMORCHID: {};
  Quantity_NOC_MEDIUMORCHID1: {};
  Quantity_NOC_MEDIUMORCHID2: {};
  Quantity_NOC_MEDIUMORCHID3: {};
  Quantity_NOC_MEDIUMORCHID4: {};
  Quantity_NOC_MEDIUMPURPLE: {};
  Quantity_NOC_MEDIUMPURPLE1: {};
  Quantity_NOC_MEDIUMPURPLE2: {};
  Quantity_NOC_MEDIUMPURPLE3: {};
  Quantity_NOC_MEDIUMPURPLE4: {};
  Quantity_NOC_MEDIUMSEAGREEN: {};
  Quantity_NOC_MEDIUMSLATEBLUE: {};
  Quantity_NOC_MEDIUMSPRINGGREEN: {};
  Quantity_NOC_MEDIUMTURQUOISE: {};
  Quantity_NOC_MEDIUMVIOLETRED: {};
  Quantity_NOC_MIDNIGHTBLUE: {};
  Quantity_NOC_MINTCREAM: {};
  Quantity_NOC_MISTYROSE: {};
  Quantity_NOC_MISTYROSE2: {};
  Quantity_NOC_MISTYROSE3: {};
  Quantity_NOC_MISTYROSE4: {};
  Quantity_NOC_MOCCASIN: {};
  Quantity_NOC_NAVAJOWHITE1: {};
  Quantity_NOC_NAVAJOWHITE2: {};
  Quantity_NOC_NAVAJOWHITE3: {};
  Quantity_NOC_NAVAJOWHITE4: {};
  Quantity_NOC_NAVYBLUE: {};
  Quantity_NOC_OLDLACE: {};
  Quantity_NOC_OLIVEDRAB: {};
  Quantity_NOC_OLIVEDRAB1: {};
  Quantity_NOC_OLIVEDRAB2: {};
  Quantity_NOC_OLIVEDRAB3: {};
  Quantity_NOC_OLIVEDRAB4: {};
  Quantity_NOC_ORANGE: {};
  Quantity_NOC_ORANGE1: {};
  Quantity_NOC_ORANGE2: {};
  Quantity_NOC_ORANGE3: {};
  Quantity_NOC_ORANGE4: {};
  Quantity_NOC_ORANGERED: {};
  Quantity_NOC_ORANGERED1: {};
  Quantity_NOC_ORANGERED2: {};
  Quantity_NOC_ORANGERED3: {};
  Quantity_NOC_ORANGERED4: {};
  Quantity_NOC_ORCHID: {};
  Quantity_NOC_ORCHID1: {};
  Quantity_NOC_ORCHID2: {};
  Quantity_NOC_ORCHID3: {};
  Quantity_NOC_ORCHID4: {};
  Quantity_NOC_PALEGOLDENROD: {};
  Quantity_NOC_PALEGREEN: {};
  Quantity_NOC_PALEGREEN1: {};
  Quantity_NOC_PALEGREEN2: {};
  Quantity_NOC_PALEGREEN3: {};
  Quantity_NOC_PALEGREEN4: {};
  Quantity_NOC_PALETURQUOISE: {};
  Quantity_NOC_PALETURQUOISE1: {};
  Quantity_NOC_PALETURQUOISE2: {};
  Quantity_NOC_PALETURQUOISE3: {};
  Quantity_NOC_PALETURQUOISE4: {};
  Quantity_NOC_PALEVIOLETRED: {};
  Quantity_NOC_PALEVIOLETRED1: {};
  Quantity_NOC_PALEVIOLETRED2: {};
  Quantity_NOC_PALEVIOLETRED3: {};
  Quantity_NOC_PALEVIOLETRED4: {};
  Quantity_NOC_PAPAYAWHIP: {};
  Quantity_NOC_PEACHPUFF: {};
  Quantity_NOC_PEACHPUFF2: {};
  Quantity_NOC_PEACHPUFF3: {};
  Quantity_NOC_PEACHPUFF4: {};
  Quantity_NOC_PERU: {};
  Quantity_NOC_PINK: {};
  Quantity_NOC_PINK1: {};
  Quantity_NOC_PINK2: {};
  Quantity_NOC_PINK3: {};
  Quantity_NOC_PINK4: {};
  Quantity_NOC_PLUM: {};
  Quantity_NOC_PLUM1: {};
  Quantity_NOC_PLUM2: {};
  Quantity_NOC_PLUM3: {};
  Quantity_NOC_PLUM4: {};
  Quantity_NOC_POWDERBLUE: {};
  Quantity_NOC_PURPLE: {};
  Quantity_NOC_PURPLE1: {};
  Quantity_NOC_PURPLE2: {};
  Quantity_NOC_PURPLE3: {};
  Quantity_NOC_PURPLE4: {};
  Quantity_NOC_RED: {};
  Quantity_NOC_RED1: {};
  Quantity_NOC_RED2: {};
  Quantity_NOC_RED3: {};
  Quantity_NOC_RED4: {};
  Quantity_NOC_ROSYBROWN: {};
  Quantity_NOC_ROSYBROWN1: {};
  Quantity_NOC_ROSYBROWN2: {};
  Quantity_NOC_ROSYBROWN3: {};
  Quantity_NOC_ROSYBROWN4: {};
  Quantity_NOC_ROYALBLUE: {};
  Quantity_NOC_ROYALBLUE1: {};
  Quantity_NOC_ROYALBLUE2: {};
  Quantity_NOC_ROYALBLUE3: {};
  Quantity_NOC_ROYALBLUE4: {};
  Quantity_NOC_SADDLEBROWN: {};
  Quantity_NOC_SALMON: {};
  Quantity_NOC_SALMON1: {};
  Quantity_NOC_SALMON2: {};
  Quantity_NOC_SALMON3: {};
  Quantity_NOC_SALMON4: {};
  Quantity_NOC_SANDYBROWN: {};
  Quantity_NOC_SEAGREEN: {};
  Quantity_NOC_SEAGREEN1: {};
  Quantity_NOC_SEAGREEN2: {};
  Quantity_NOC_SEAGREEN3: {};
  Quantity_NOC_SEAGREEN4: {};
  Quantity_NOC_SEASHELL: {};
  Quantity_NOC_SEASHELL2: {};
  Quantity_NOC_SEASHELL3: {};
  Quantity_NOC_SEASHELL4: {};
  Quantity_NOC_BEET: {};
  Quantity_NOC_TEAL: {};
  Quantity_NOC_SIENNA: {};
  Quantity_NOC_SIENNA1: {};
  Quantity_NOC_SIENNA2: {};
  Quantity_NOC_SIENNA3: {};
  Quantity_NOC_SIENNA4: {};
  Quantity_NOC_SKYBLUE: {};
  Quantity_NOC_SKYBLUE1: {};
  Quantity_NOC_SKYBLUE2: {};
  Quantity_NOC_SKYBLUE3: {};
  Quantity_NOC_SKYBLUE4: {};
  Quantity_NOC_SLATEBLUE: {};
  Quantity_NOC_SLATEBLUE1: {};
  Quantity_NOC_SLATEBLUE2: {};
  Quantity_NOC_SLATEBLUE3: {};
  Quantity_NOC_SLATEBLUE4: {};
  Quantity_NOC_SLATEGRAY1: {};
  Quantity_NOC_SLATEGRAY2: {};
  Quantity_NOC_SLATEGRAY3: {};
  Quantity_NOC_SLATEGRAY4: {};
  Quantity_NOC_SLATEGRAY: {};
  Quantity_NOC_SNOW: {};
  Quantity_NOC_SNOW2: {};
  Quantity_NOC_SNOW3: {};
  Quantity_NOC_SNOW4: {};
  Quantity_NOC_SPRINGGREEN: {};
  Quantity_NOC_SPRINGGREEN2: {};
  Quantity_NOC_SPRINGGREEN3: {};
  Quantity_NOC_SPRINGGREEN4: {};
  Quantity_NOC_STEELBLUE: {};
  Quantity_NOC_STEELBLUE1: {};
  Quantity_NOC_STEELBLUE2: {};
  Quantity_NOC_STEELBLUE3: {};
  Quantity_NOC_STEELBLUE4: {};
  Quantity_NOC_TAN: {};
  Quantity_NOC_TAN1: {};
  Quantity_NOC_TAN2: {};
  Quantity_NOC_TAN3: {};
  Quantity_NOC_TAN4: {};
  Quantity_NOC_THISTLE: {};
  Quantity_NOC_THISTLE1: {};
  Quantity_NOC_THISTLE2: {};
  Quantity_NOC_THISTLE3: {};
  Quantity_NOC_THISTLE4: {};
  Quantity_NOC_TOMATO: {};
  Quantity_NOC_TOMATO1: {};
  Quantity_NOC_TOMATO2: {};
  Quantity_NOC_TOMATO3: {};
  Quantity_NOC_TOMATO4: {};
  Quantity_NOC_TURQUOISE: {};
  Quantity_NOC_TURQUOISE1: {};
  Quantity_NOC_TURQUOISE2: {};
  Quantity_NOC_TURQUOISE3: {};
  Quantity_NOC_TURQUOISE4: {};
  Quantity_NOC_VIOLET: {};
  Quantity_NOC_VIOLETRED: {};
  Quantity_NOC_VIOLETRED1: {};
  Quantity_NOC_VIOLETRED2: {};
  Quantity_NOC_VIOLETRED3: {};
  Quantity_NOC_VIOLETRED4: {};
  Quantity_NOC_WHEAT: {};
  Quantity_NOC_WHEAT1: {};
  Quantity_NOC_WHEAT2: {};
  Quantity_NOC_WHEAT3: {};
  Quantity_NOC_WHEAT4: {};
  Quantity_NOC_WHITESMOKE: {};
  Quantity_NOC_YELLOW: {};
  Quantity_NOC_YELLOW1: {};
  Quantity_NOC_YELLOW2: {};
  Quantity_NOC_YELLOW3: {};
  Quantity_NOC_YELLOW4: {};
  Quantity_NOC_YELLOWGREEN: {};
  Quantity_NOC_WHITE: {};
}

export declare type Quantity_TypeOfColor = {
  Quantity_TOC_RGB: {};
  Quantity_TOC_sRGB: {};
  Quantity_TOC_HLS: {};
  Quantity_TOC_CIELab: {};
  Quantity_TOC_CIELch: {};
}

export declare type OSD_SysType = {
  OSD_Unknown: {};
  OSD_Default: {};
  OSD_UnixBSD: {};
  OSD_UnixSystemV: {};
  OSD_VMS: {};
  OSD_OS2: {};
  OSD_OSF: {};
  OSD_MacOs: {};
  OSD_Taligent: {};
  OSD_WindowsNT: {};
  OSD_LinuxREDHAT: {};
  OSD_Aix: {};
}

export declare type Standard_HandlerStatus = {
  Standard_HandlerVoid: {};
  Standard_HandlerJumped: {};
  Standard_HandlerProcessed: {};
}

export declare type Message_Gravity = {
  Message_Trace: {};
  Message_Info: {};
  Message_Warning: {};
  Message_Alarm: {};
  Message_Fail: {};
}

export declare type Message_MetricType = {
  Message_MetricType_None: {};
  Message_MetricType_ThreadCPUUserTime: {};
  Message_MetricType_ThreadCPUSystemTime: {};
  Message_MetricType_ProcessCPUUserTime: {};
  Message_MetricType_ProcessCPUSystemTime: {};
  Message_MetricType_MemPrivate: {};
  Message_MetricType_MemVirtual: {};
  Message_MetricType_MemWorkingSet: {};
  Message_MetricType_MemWorkingSetPeak: {};
  Message_MetricType_MemSwapUsage: {};
  Message_MetricType_MemSwapUsagePeak: {};
  Message_MetricType_MemHeapUsage: {};
}

export declare type NCollection_CellFilter_Action = {
  CellFilter_Keep: {};
  CellFilter_Purge: {};
}

export declare type Message_StatusType = {
  Message_DONE: {};
  Message_WARN: {};
  Message_ALARM: {};
  Message_FAIL: {};
}

export declare type Message_Status = {
  Message_None: {};
  Message_Done1: {};
  Message_Done2: {};
  Message_Done3: {};
  Message_Done4: {};
  Message_Done5: {};
  Message_Done6: {};
  Message_Done7: {};
  Message_Done8: {};
  Message_Done9: {};
  Message_Done10: {};
  Message_Done11: {};
  Message_Done12: {};
  Message_Done13: {};
  Message_Done14: {};
  Message_Done15: {};
  Message_Done16: {};
  Message_Done17: {};
  Message_Done18: {};
  Message_Done19: {};
  Message_Done20: {};
  Message_Done21: {};
  Message_Done22: {};
  Message_Done23: {};
  Message_Done24: {};
  Message_Done25: {};
  Message_Done26: {};
  Message_Done27: {};
  Message_Done28: {};
  Message_Done29: {};
  Message_Done30: {};
  Message_Done31: {};
  Message_Done32: {};
  Message_Warn1: {};
  Message_Warn2: {};
  Message_Warn3: {};
  Message_Warn4: {};
  Message_Warn5: {};
  Message_Warn6: {};
  Message_Warn7: {};
  Message_Warn8: {};
  Message_Warn9: {};
  Message_Warn10: {};
  Message_Warn11: {};
  Message_Warn12: {};
  Message_Warn13: {};
  Message_Warn14: {};
  Message_Warn15: {};
  Message_Warn16: {};
  Message_Warn17: {};
  Message_Warn18: {};
  Message_Warn19: {};
  Message_Warn20: {};
  Message_Warn21: {};
  Message_Warn22: {};
  Message_Warn23: {};
  Message_Warn24: {};
  Message_Warn25: {};
  Message_Warn26: {};
  Message_Warn27: {};
  Message_Warn28: {};
  Message_Warn29: {};
  Message_Warn30: {};
  Message_Warn31: {};
  Message_Warn32: {};
  Message_Alarm1: {};
  Message_Alarm2: {};
  Message_Alarm3: {};
  Message_Alarm4: {};
  Message_Alarm5: {};
  Message_Alarm6: {};
  Message_Alarm7: {};
  Message_Alarm8: {};
  Message_Alarm9: {};
  Message_Alarm10: {};
  Message_Alarm11: {};
  Message_Alarm12: {};
  Message_Alarm13: {};
  Message_Alarm14: {};
  Message_Alarm15: {};
  Message_Alarm16: {};
  Message_Alarm17: {};
  Message_Alarm18: {};
  Message_Alarm19: {};
  Message_Alarm20: {};
  Message_Alarm21: {};
  Message_Alarm22: {};
  Message_Alarm23: {};
  Message_Alarm24: {};
  Message_Alarm25: {};
  Message_Alarm26: {};
  Message_Alarm27: {};
  Message_Alarm28: {};
  Message_Alarm29: {};
  Message_Alarm30: {};
  Message_Alarm31: {};
  Message_Alarm32: {};
  Message_Fail1: {};
  Message_Fail2: {};
  Message_Fail3: {};
  Message_Fail4: {};
  Message_Fail5: {};
  Message_Fail6: {};
  Message_Fail7: {};
  Message_Fail8: {};
  Message_Fail9: {};
  Message_Fail10: {};
  Message_Fail11: {};
  Message_Fail12: {};
  Message_Fail13: {};
  Message_Fail14: {};
  Message_Fail15: {};
  Message_Fail16: {};
  Message_Fail17: {};
  Message_Fail18: {};
  Message_Fail19: {};
  Message_Fail20: {};
  Message_Fail21: {};
  Message_Fail22: {};
  Message_Fail23: {};
  Message_Fail24: {};
  Message_Fail25: {};
  Message_Fail26: {};
  Message_Fail27: {};
  Message_Fail28: {};
  Message_Fail29: {};
  Message_Fail30: {};
  Message_Fail31: {};
  Message_Fail32: {};
}

export declare type Storage_Error = {
  Storage_VSOk: {};
  Storage_VSOpenError: {};
  Storage_VSModeError: {};
  Storage_VSCloseError: {};
  Storage_VSAlreadyOpen: {};
  Storage_VSNotOpen: {};
  Storage_VSSectionNotFound: {};
  Storage_VSWriteError: {};
  Storage_VSFormatError: {};
  Storage_VSUnknownType: {};
  Storage_VSTypeMismatch: {};
  Storage_VSInternalError: {};
  Storage_VSExtCharParityError: {};
  Storage_VSWrongFileDriver: {};
}

export declare type Storage_OpenMode = {
  Storage_VSNone: {};
  Storage_VSRead: {};
  Storage_VSWrite: {};
  Storage_VSReadWrite: {};
}

export declare type Message_ConsoleColor = {
  Message_ConsoleColor_Default: {};
  Message_ConsoleColor_Black: {};
  Message_ConsoleColor_White: {};
  Message_ConsoleColor_Red: {};
  Message_ConsoleColor_Blue: {};
  Message_ConsoleColor_Green: {};
  Message_ConsoleColor_Yellow: {};
  Message_ConsoleColor_Cyan: {};
  Message_ConsoleColor_Magenta: {};
}

export declare type OSD_SignalMode = {
  OSD_SignalMode_AsIs: {};
  OSD_SignalMode_Set: {};
  OSD_SignalMode_SetUnhandled: {};
  OSD_SignalMode_Unset: {};
}

export declare type OSD_WhoAmI = {
  OSD_WDirectory: {};
  OSD_WDirectoryIterator: {};
  OSD_WEnvironment: {};
  OSD_WFile: {};
  OSD_WFileNode: {};
  OSD_WFileIterator: {};
  OSD_WPath: {};
  OSD_WProcess: {};
  OSD_WProtection: {};
  OSD_WHost: {};
  OSD_WDisk: {};
  OSD_WChronometer: {};
  OSD_WTimer: {};
  OSD_WPackage: {};
  OSD_WEnvironmentIterator: {};
}

export declare type OSD_FromWhere = {
  OSD_FromBeginning: {};
  OSD_FromHere: {};
  OSD_FromEnd: {};
}

export declare type OSD_KindFile = {
  OSD_FILE: {};
  OSD_DIRECTORY: {};
  OSD_LINK: {};
  OSD_SOCKET: {};
  OSD_UNKNOWN: {};
}

export declare type OSD_LockType = {
  OSD_NoLock: {};
  OSD_ReadLock: {};
  OSD_WriteLock: {};
  OSD_ExclusiveLock: {};
}

export declare type OSD_OpenMode = {
  OSD_ReadOnly: {};
  OSD_WriteOnly: {};
  OSD_ReadWrite: {};
}

export declare type OSD_OEMType = {
  OSD_Unavailable: {};
  OSD_SUN: {};
  OSD_DEC: {};
  OSD_SGI: {};
  OSD_NEC: {};
  OSD_MAC: {};
  OSD_PC: {};
  OSD_HP: {};
  OSD_IBM: {};
  OSD_VAX: {};
  OSD_LIN: {};
  OSD_AIX: {};
}

export declare type OSD_LoadMode = {
  OSD_RTLD_LAZY: {};
  OSD_RTLD_NOW: {};
}

export declare type OSD_SingleProtection = {
  OSD_None: {};
  OSD_R: {};
  OSD_W: {};
  OSD_RW: {};
  OSD_X: {};
  OSD_RX: {};
  OSD_WX: {};
  OSD_RWX: {};
  OSD_D: {};
  OSD_RD: {};
  OSD_WD: {};
  OSD_RWD: {};
  OSD_XD: {};
  OSD_RXD: {};
  OSD_WXD: {};
  OSD_RWXD: {};
}

export declare type Quantity_PhysicalQuantity = {
  Quantity_MASS: {};
  Quantity_PLANEANGLE: {};
  Quantity_SOLIDANGLE: {};
  Quantity_LENGTH: {};
  Quantity_AREA: {};
  Quantity_VOLUME: {};
  Quantity_SPEED: {};
  Quantity_VELOCITY: {};
  Quantity_ACCELERATION: {};
  Quantity_ANGULARVELOCITY: {};
  Quantity_FREQUENCY: {};
  Quantity_TEMPERATURE: {};
  Quantity_AMOUNTOFSUBSTANCE: {};
  Quantity_DENSITY: {};
  Quantity_MASSFLOW: {};
  Quantity_VOLUMEFLOW: {};
  Quantity_CONSUMPTION: {};
  Quantity_MOMENTUM: {};
  Quantity_KINETICMOMENT: {};
  Quantity_MOMENTOFINERTIA: {};
  Quantity_FORCE: {};
  Quantity_MOMENTOFAFORCE: {};
  Quantity_TORQUE: {};
  Quantity_WEIGHT: {};
  Quantity_PRESSURE: {};
  Quantity_VISCOSITY: {};
  Quantity_KINEMATICVISCOSITY: {};
  Quantity_ENERGY: {};
  Quantity_WORK: {};
  Quantity_POWER: {};
  Quantity_SURFACETENSION: {};
  Quantity_COEFFICIENTOFEXPANSION: {};
  Quantity_THERMALCONDUCTIVITY: {};
  Quantity_SPECIFICHEATCAPACITY: {};
  Quantity_ENTROPY: {};
  Quantity_ENTHALPY: {};
  Quantity_LUMINOUSINTENSITY: {};
  Quantity_LUMINOUSFLUX: {};
  Quantity_LUMINANCE: {};
  Quantity_ILLUMINANCE: {};
  Quantity_LUMINOUSEXPOSITION: {};
  Quantity_LUMINOUSEFFICACITY: {};
  Quantity_ELECTRICCHARGE: {};
  Quantity_ELECTRICCURRENT: {};
  Quantity_ELECTRICFIELDSTRENGTH: {};
  Quantity_ELECTRICPOTENTIAL: {};
  Quantity_ELECTRICCAPACITANCE: {};
  Quantity_MAGNETICFLUX: {};
  Quantity_MAGNETICFLUXDENSITY: {};
  Quantity_MAGNETICFIELDSTRENGTH: {};
  Quantity_RELUCTANCE: {};
  Quantity_RESISTANCE: {};
  Quantity_INDUCTANCE: {};
  Quantity_CAPACITANCE: {};
  Quantity_IMPEDANCE: {};
  Quantity_ADMITTANCE: {};
  Quantity_RESISTIVITY: {};
  Quantity_CONDUCTIVITY: {};
  Quantity_MOLARMASS: {};
  Quantity_MOLARVOLUME: {};
  Quantity_CONCENTRATION: {};
  Quantity_MOLARCONCENTRATION: {};
  Quantity_MOLARITY: {};
  Quantity_SOUNDINTENSITY: {};
  Quantity_ACOUSTICINTENSITY: {};
  Quantity_ACTIVITY: {};
  Quantity_ABSORBEDDOSE: {};
  Quantity_DOSEEQUIVALENT: {};
}

export declare type Resource_FormatType = {
  Resource_FormatType_SJIS: {};
  Resource_FormatType_EUC: {};
  Resource_FormatType_NoConversion: {};
  Resource_FormatType_GB: {};
  Resource_FormatType_UTF8: {};
  Resource_FormatType_SystemLocale: {};
  Resource_FormatType_CP1250: {};
  Resource_FormatType_CP1251: {};
  Resource_FormatType_CP1252: {};
  Resource_FormatType_CP1253: {};
  Resource_FormatType_CP1254: {};
  Resource_FormatType_CP1255: {};
  Resource_FormatType_CP1256: {};
  Resource_FormatType_CP1257: {};
  Resource_FormatType_CP1258: {};
  Resource_FormatType_iso8859_1: {};
  Resource_FormatType_iso8859_2: {};
  Resource_FormatType_iso8859_3: {};
  Resource_FormatType_iso8859_4: {};
  Resource_FormatType_iso8859_5: {};
  Resource_FormatType_iso8859_6: {};
  Resource_FormatType_iso8859_7: {};
  Resource_FormatType_iso8859_8: {};
  Resource_FormatType_iso8859_9: {};
  Resource_FormatType_GBK: {};
  Resource_FormatType_Big5: {};
  Resource_FormatType_ANSI: {};
  Resource_SJIS: {};
  Resource_EUC: {};
  Resource_ANSI: {};
  Resource_GB: {};
}

export declare type Storage_SolveMode = {
  Storage_AddSolve: {};
  Storage_WriteSolve: {};
  Storage_ReadSolve: {};
}

export declare type TCollection_Side = {
  TCollection_Left: {};
  TCollection_Right: {};
}

export declare type UnitsAPI_SystemUnits = {
  UnitsAPI_DEFAULT: {};
  UnitsAPI_SI: {};
  UnitsAPI_MDTV: {};
}

export declare type TKernelLib = {
  Standard_Transient_1: typeof Standard_Transient_1;
  Standard_Transient_2: typeof Standard_Transient_2;
  Standard_Failure_1: typeof Standard_Failure_1;
  Standard_Failure_2: typeof Standard_Failure_2;
  Standard_Failure_3: typeof Standard_Failure_3;
  Standard_DomainError_1: typeof Standard_DomainError_1;
  Standard_DomainError_2: typeof Standard_DomainError_2;
  Standard_RangeError_1: typeof Standard_RangeError_1;
  Standard_RangeError_2: typeof Standard_RangeError_2;
  Standard_OutOfRange_1: typeof Standard_OutOfRange_1;
  Standard_OutOfRange_2: typeof Standard_OutOfRange_2;
  Standard_ConstructionError_1: typeof Standard_ConstructionError_1;
  Standard_ConstructionError_2: typeof Standard_ConstructionError_2;
  Standard_TypeMismatch_1: typeof Standard_TypeMismatch_1;
  Standard_TypeMismatch_2: typeof Standard_TypeMismatch_2;
  Standard_NoSuchObject_1: typeof Standard_NoSuchObject_1;
  Standard_NoSuchObject_2: typeof Standard_NoSuchObject_2;
  Standard_ProgramError_1: typeof Standard_ProgramError_1;
  Standard_ProgramError_2: typeof Standard_ProgramError_2;
  TCollection_AsciiString_1: typeof TCollection_AsciiString_1;
  TCollection_AsciiString_2: typeof TCollection_AsciiString_2;
  TCollection_AsciiString_3: typeof TCollection_AsciiString_3;
  TCollection_AsciiString_4: typeof TCollection_AsciiString_4;
  TCollection_AsciiString_5: typeof TCollection_AsciiString_5;
  TCollection_AsciiString_6: typeof TCollection_AsciiString_6;
  TCollection_AsciiString_7: typeof TCollection_AsciiString_7;
  TCollection_AsciiString_8: typeof TCollection_AsciiString_8;
  TCollection_AsciiString_9: typeof TCollection_AsciiString_9;
  TCollection_AsciiString_10: typeof TCollection_AsciiString_10;
  TCollection_AsciiString_11: typeof TCollection_AsciiString_11;
  TCollection_AsciiString_12: typeof TCollection_AsciiString_12;
  TCollection_AsciiString_13: typeof TCollection_AsciiString_13;
  TCollection_AsciiString_14: typeof TCollection_AsciiString_14;
  Standard_DimensionError_1: typeof Standard_DimensionError_1;
  Standard_DimensionError_2: typeof Standard_DimensionError_2;
  Standard_DimensionMismatch_1: typeof Standard_DimensionMismatch_1;
  Standard_DimensionMismatch_2: typeof Standard_DimensionMismatch_2;
  Standard_OutOfMemory: typeof Standard_OutOfMemory;
  NCollection_Buffer: typeof NCollection_Buffer;
  Quantity_Color_1: typeof Quantity_Color_1;
  Quantity_Color_2: typeof Quantity_Color_2;
  Quantity_Color_3: typeof Quantity_Color_3;
  Quantity_Color_4: typeof Quantity_Color_4;
  Quantity_ColorRGBA_1: typeof Quantity_ColorRGBA_1;
  Quantity_ColorRGBA_2: typeof Quantity_ColorRGBA_2;
  Quantity_ColorRGBA_3: typeof Quantity_ColorRGBA_3;
  Quantity_ColorRGBA_4: typeof Quantity_ColorRGBA_4;
  Quantity_ColorRGBA_5: typeof Quantity_ColorRGBA_5;
  TCollection_HAsciiString_1: typeof TCollection_HAsciiString_1;
  TCollection_HAsciiString_2: typeof TCollection_HAsciiString_2;
  TCollection_HAsciiString_3: typeof TCollection_HAsciiString_3;
  TCollection_HAsciiString_4: typeof TCollection_HAsciiString_4;
  TCollection_HAsciiString_5: typeof TCollection_HAsciiString_5;
  TCollection_HAsciiString_6: typeof TCollection_HAsciiString_6;
  TCollection_HAsciiString_7: typeof TCollection_HAsciiString_7;
  TCollection_HAsciiString_8: typeof TCollection_HAsciiString_8;
  TCollection_HAsciiString_9: typeof TCollection_HAsciiString_9;
  Standard_NotImplemented_1: typeof Standard_NotImplemented_1;
  Standard_NotImplemented_2: typeof Standard_NotImplemented_2;
  TCollection_ExtendedString_1: typeof TCollection_ExtendedString_1;
  TCollection_ExtendedString_2: typeof TCollection_ExtendedString_2;
  TCollection_ExtendedString_3: typeof TCollection_ExtendedString_3;
  TCollection_ExtendedString_4: typeof TCollection_ExtendedString_4;
  TCollection_ExtendedString_5: typeof TCollection_ExtendedString_5;
  TCollection_ExtendedString_6: typeof TCollection_ExtendedString_6;
  TCollection_ExtendedString_7: typeof TCollection_ExtendedString_7;
  TCollection_ExtendedString_8: typeof TCollection_ExtendedString_8;
  TCollection_ExtendedString_9: typeof TCollection_ExtendedString_9;
  TCollection_ExtendedString_10: typeof TCollection_ExtendedString_10;
  TCollection_ExtendedString_11: typeof TCollection_ExtendedString_11;
  TCollection_ExtendedString_12: typeof TCollection_ExtendedString_12;
  OSD_Chronometer: typeof OSD_Chronometer;
  OSD_Timer: typeof OSD_Timer;
  OSD_Thread_1: typeof OSD_Thread_1;
  OSD_Thread_2: typeof OSD_Thread_2;
  OSD_Thread_3: typeof OSD_Thread_3;
  Standard_Mutex: typeof Standard_Mutex;
  Standard_Condition: typeof Standard_Condition;
  TCollection_HExtendedString_1: typeof TCollection_HExtendedString_1;
  TCollection_HExtendedString_2: typeof TCollection_HExtendedString_2;
  TCollection_HExtendedString_3: typeof TCollection_HExtendedString_3;
  TCollection_HExtendedString_4: typeof TCollection_HExtendedString_4;
  TCollection_HExtendedString_5: typeof TCollection_HExtendedString_5;
  TCollection_HExtendedString_6: typeof TCollection_HExtendedString_6;
  TCollection_HExtendedString_7: typeof TCollection_HExtendedString_7;
  TCollection_HExtendedString_8: typeof TCollection_HExtendedString_8;
  Message_Messenger_1: typeof Message_Messenger_1;
  Message_Messenger_2: typeof Message_Messenger_2;
  StdFail_NotDone_1: typeof StdFail_NotDone_1;
  StdFail_NotDone_2: typeof StdFail_NotDone_2;
  Message_ProgressRange_1: typeof Message_ProgressRange_1;
  Message_ProgressRange_2: typeof Message_ProgressRange_2;
  Message_ProgressScope_1: typeof Message_ProgressScope_1;
  Message_ProgressScope_2: typeof Message_ProgressScope_2;
  Message_ProgressScope_4: typeof Message_ProgressScope_4;
  OSD_MemInfo: typeof OSD_MemInfo;
  Message_AlertExtended: typeof Message_AlertExtended;
  Message_Level: typeof Message_Level;
  Message_Report: typeof Message_Report;
  Standard_NullObject_1: typeof Standard_NullObject_1;
  Standard_NullObject_2: typeof Standard_NullObject_2;
  StdFail_UndefinedDerivative_1: typeof StdFail_UndefinedDerivative_1;
  StdFail_UndefinedDerivative_2: typeof StdFail_UndefinedDerivative_2;
  NCollection_IncAllocator: typeof NCollection_IncAllocator;
  TColStd_PackedMapOfInteger_1: typeof TColStd_PackedMapOfInteger_1;
  TColStd_PackedMapOfInteger_2: typeof TColStd_PackedMapOfInteger_2;
  Message_ExecStatus_1: typeof Message_ExecStatus_1;
  Message_ExecStatus_2: typeof Message_ExecStatus_2;
  Message_Msg_1: typeof Message_Msg_1;
  Message_Msg_2: typeof Message_Msg_2;
  Message_Msg_3: typeof Message_Msg_3;
  Message_Msg_4: typeof Message_Msg_4;
  Message_Algorithm: typeof Message_Algorithm;
  Storage_HeaderData: typeof Storage_HeaderData;
  Storage_Root_1: typeof Storage_Root_1;
  Storage_Root_2: typeof Storage_Root_2;
  Storage_Root_3: typeof Storage_Root_3;
  Storage_Data: typeof Storage_Data;
  Standard_Persistent: typeof Standard_Persistent;
  Standard_MultiplyDefined_1: typeof Standard_MultiplyDefined_1;
  Standard_MultiplyDefined_2: typeof Standard_MultiplyDefined_2;
  Standard_ImmutableObject_1: typeof Standard_ImmutableObject_1;
  Standard_ImmutableObject_2: typeof Standard_ImmutableObject_2;
  Standard_GUID_1: typeof Standard_GUID_1;
  Standard_GUID_2: typeof Standard_GUID_2;
  Standard_GUID_3: typeof Standard_GUID_3;
  Standard_GUID_4: typeof Standard_GUID_4;
  Standard_GUID_5: typeof Standard_GUID_5;
  Standard_GUID_6: typeof Standard_GUID_6;
  FSD_CmpFile: typeof FSD_CmpFile;
  Standard_NegativeValue_1: typeof Standard_NegativeValue_1;
  Standard_NegativeValue_2: typeof Standard_NegativeValue_2;
  TColStd_HPackedMapOfInteger_1: typeof TColStd_HPackedMapOfInteger_1;
  TColStd_HPackedMapOfInteger_2: typeof TColStd_HPackedMapOfInteger_2;
  StdFail_InfiniteSolutions_1: typeof StdFail_InfiniteSolutions_1;
  StdFail_InfiniteSolutions_2: typeof StdFail_InfiniteSolutions_2;
  Message_Attribute: typeof Message_Attribute;
  Message_AttributeMeter: typeof Message_AttributeMeter;
  Message_AttributeObject: typeof Message_AttributeObject;
  Message_CompositeAlerts: typeof Message_CompositeAlerts;
  Message_PrinterOStream_1: typeof Message_PrinterOStream_1;
  Message_PrinterOStream_2: typeof Message_PrinterOStream_2;
  Message_PrinterSystemLog: typeof Message_PrinterSystemLog;
  Message_PrinterToReport: typeof Message_PrinterToReport;
  Message_ProgressSentry: typeof Message_ProgressSentry;
  NCollection_AccAllocator: typeof NCollection_AccAllocator;
  NCollection_AlignedAllocator: typeof NCollection_AlignedAllocator;
  NCollection_WinHeapAllocator: typeof NCollection_WinHeapAllocator;
  OSD_Error: typeof OSD_Error;
  OSD_Directory_1: typeof OSD_Directory_1;
  OSD_Directory_2: typeof OSD_Directory_2;
  OSD_DirectoryIterator_1: typeof OSD_DirectoryIterator_1;
  OSD_DirectoryIterator_2: typeof OSD_DirectoryIterator_2;
  OSD_Disk_1: typeof OSD_Disk_1;
  OSD_Disk_2: typeof OSD_Disk_2;
  OSD_Disk_3: typeof OSD_Disk_3;
  OSD_Environment_1: typeof OSD_Environment_1;
  OSD_Environment_2: typeof OSD_Environment_2;
  OSD_Environment_3: typeof OSD_Environment_3;
  OSD_Exception_1: typeof OSD_Exception_1;
  OSD_Exception_2: typeof OSD_Exception_2;
  OSD_Exception_ACCESS_VIOLATION_1: typeof OSD_Exception_ACCESS_VIOLATION_1;
  OSD_Exception_ACCESS_VIOLATION_2: typeof OSD_Exception_ACCESS_VIOLATION_2;
  OSD_Exception_ARRAY_BOUNDS_EXCEEDED_1: typeof OSD_Exception_ARRAY_BOUNDS_EXCEEDED_1;
  OSD_Exception_ARRAY_BOUNDS_EXCEEDED_2: typeof OSD_Exception_ARRAY_BOUNDS_EXCEEDED_2;
  OSD_Exception_CTRL_BREAK_1: typeof OSD_Exception_CTRL_BREAK_1;
  OSD_Exception_CTRL_BREAK_2: typeof OSD_Exception_CTRL_BREAK_2;
  OSD_Exception_FLT_DENORMAL_OPERAND_1: typeof OSD_Exception_FLT_DENORMAL_OPERAND_1;
  OSD_Exception_FLT_DENORMAL_OPERAND_2: typeof OSD_Exception_FLT_DENORMAL_OPERAND_2;
  OSD_Exception_FLT_DIVIDE_BY_ZERO_1: typeof OSD_Exception_FLT_DIVIDE_BY_ZERO_1;
  OSD_Exception_FLT_DIVIDE_BY_ZERO_2: typeof OSD_Exception_FLT_DIVIDE_BY_ZERO_2;
  OSD_Exception_FLT_INEXACT_RESULT_1: typeof OSD_Exception_FLT_INEXACT_RESULT_1;
  OSD_Exception_FLT_INEXACT_RESULT_2: typeof OSD_Exception_FLT_INEXACT_RESULT_2;
  OSD_Exception_FLT_INVALID_OPERATION_1: typeof OSD_Exception_FLT_INVALID_OPERATION_1;
  OSD_Exception_FLT_INVALID_OPERATION_2: typeof OSD_Exception_FLT_INVALID_OPERATION_2;
  OSD_Exception_FLT_OVERFLOW_1: typeof OSD_Exception_FLT_OVERFLOW_1;
  OSD_Exception_FLT_OVERFLOW_2: typeof OSD_Exception_FLT_OVERFLOW_2;
  OSD_Exception_FLT_STACK_CHECK_1: typeof OSD_Exception_FLT_STACK_CHECK_1;
  OSD_Exception_FLT_STACK_CHECK_2: typeof OSD_Exception_FLT_STACK_CHECK_2;
  OSD_Exception_FLT_UNDERFLOW_1: typeof OSD_Exception_FLT_UNDERFLOW_1;
  OSD_Exception_FLT_UNDERFLOW_2: typeof OSD_Exception_FLT_UNDERFLOW_2;
  OSD_Exception_ILLEGAL_INSTRUCTION_1: typeof OSD_Exception_ILLEGAL_INSTRUCTION_1;
  OSD_Exception_ILLEGAL_INSTRUCTION_2: typeof OSD_Exception_ILLEGAL_INSTRUCTION_2;
  OSD_Exception_INT_DIVIDE_BY_ZERO_1: typeof OSD_Exception_INT_DIVIDE_BY_ZERO_1;
  OSD_Exception_INT_DIVIDE_BY_ZERO_2: typeof OSD_Exception_INT_DIVIDE_BY_ZERO_2;
  OSD_Exception_INT_OVERFLOW_1: typeof OSD_Exception_INT_OVERFLOW_1;
  OSD_Exception_INT_OVERFLOW_2: typeof OSD_Exception_INT_OVERFLOW_2;
  OSD_Exception_INVALID_DISPOSITION_1: typeof OSD_Exception_INVALID_DISPOSITION_1;
  OSD_Exception_INVALID_DISPOSITION_2: typeof OSD_Exception_INVALID_DISPOSITION_2;
  OSD_Exception_IN_PAGE_ERROR_1: typeof OSD_Exception_IN_PAGE_ERROR_1;
  OSD_Exception_IN_PAGE_ERROR_2: typeof OSD_Exception_IN_PAGE_ERROR_2;
  OSD_Exception_NONCONTINUABLE_EXCEPTION_1: typeof OSD_Exception_NONCONTINUABLE_EXCEPTION_1;
  OSD_Exception_NONCONTINUABLE_EXCEPTION_2: typeof OSD_Exception_NONCONTINUABLE_EXCEPTION_2;
  OSD_Exception_PRIV_INSTRUCTION_1: typeof OSD_Exception_PRIV_INSTRUCTION_1;
  OSD_Exception_PRIV_INSTRUCTION_2: typeof OSD_Exception_PRIV_INSTRUCTION_2;
  OSD_Exception_STACK_OVERFLOW_1: typeof OSD_Exception_STACK_OVERFLOW_1;
  OSD_Exception_STACK_OVERFLOW_2: typeof OSD_Exception_STACK_OVERFLOW_2;
  OSD_Exception_STATUS_NO_MEMORY_1: typeof OSD_Exception_STATUS_NO_MEMORY_1;
  OSD_Exception_STATUS_NO_MEMORY_2: typeof OSD_Exception_STATUS_NO_MEMORY_2;
  OSD_FileIterator_1: typeof OSD_FileIterator_1;
  OSD_FileIterator_2: typeof OSD_FileIterator_2;
  OSD_Host: typeof OSD_Host;
  OSD_OSDError_1: typeof OSD_OSDError_1;
  OSD_OSDError_2: typeof OSD_OSDError_2;
  OSD_PerfMeter_1: typeof OSD_PerfMeter_1;
  OSD_PerfMeter_2: typeof OSD_PerfMeter_2;
  OSD_Process: typeof OSD_Process;
  OSD_Protection_1: typeof OSD_Protection_1;
  OSD_Protection_2: typeof OSD_Protection_2;
  OSD_Signal_1: typeof OSD_Signal_1;
  OSD_Signal_2: typeof OSD_Signal_2;
  OSD_SIGBUS_1: typeof OSD_SIGBUS_1;
  OSD_SIGBUS_2: typeof OSD_SIGBUS_2;
  OSD_SIGHUP_1: typeof OSD_SIGHUP_1;
  OSD_SIGHUP_2: typeof OSD_SIGHUP_2;
  OSD_SIGILL_1: typeof OSD_SIGILL_1;
  OSD_SIGILL_2: typeof OSD_SIGILL_2;
  OSD_SIGINT_1: typeof OSD_SIGINT_1;
  OSD_SIGINT_2: typeof OSD_SIGINT_2;
  OSD_SIGKILL_1: typeof OSD_SIGKILL_1;
  OSD_SIGKILL_2: typeof OSD_SIGKILL_2;
  OSD_SIGQUIT_1: typeof OSD_SIGQUIT_1;
  OSD_SIGQUIT_2: typeof OSD_SIGQUIT_2;
  OSD_SIGSEGV_1: typeof OSD_SIGSEGV_1;
  OSD_SIGSEGV_2: typeof OSD_SIGSEGV_2;
  OSD_SIGSYS_1: typeof OSD_SIGSYS_1;
  OSD_SIGSYS_2: typeof OSD_SIGSYS_2;
  OSD_SharedLibrary_1: typeof OSD_SharedLibrary_1;
  OSD_SharedLibrary_2: typeof OSD_SharedLibrary_2;
  Quantity_Date_1: typeof Quantity_Date_1;
  Quantity_Date_2: typeof Quantity_Date_2;
  Plugin_Failure_1: typeof Plugin_Failure_1;
  Plugin_Failure_2: typeof Plugin_Failure_2;
  Quantity_DateDefinitionError_1: typeof Quantity_DateDefinitionError_1;
  Quantity_DateDefinitionError_2: typeof Quantity_DateDefinitionError_2;
  Quantity_Period_1: typeof Quantity_Period_1;
  Quantity_Period_2: typeof Quantity_Period_2;
  Quantity_PeriodDefinitionError_1: typeof Quantity_PeriodDefinitionError_1;
  Quantity_PeriodDefinitionError_2: typeof Quantity_PeriodDefinitionError_2;
  Standard_ReadLineBuffer: typeof Standard_ReadLineBuffer;
  Resource_LexicalCompare: typeof Resource_LexicalCompare;
  Resource_Manager_1: typeof Resource_Manager_1;
  Resource_Manager_2: typeof Resource_Manager_2;
  Resource_NoSuchResource_1: typeof Resource_NoSuchResource_1;
  Resource_NoSuchResource_2: typeof Resource_NoSuchResource_2;
  Standard_NullValue_1: typeof Standard_NullValue_1;
  Standard_NullValue_2: typeof Standard_NullValue_2;
  Standard_AbortiveTransaction_1: typeof Standard_AbortiveTransaction_1;
  Standard_AbortiveTransaction_2: typeof Standard_AbortiveTransaction_2;
  Standard_ArrayStreamBuffer: typeof Standard_ArrayStreamBuffer;
  Standard_CLocaleSentry: typeof Standard_CLocaleSentry;
  Standard_NumericError_1: typeof Standard_NumericError_1;
  Standard_NumericError_2: typeof Standard_NumericError_2;
  Standard_DivideByZero_1: typeof Standard_DivideByZero_1;
  Standard_DivideByZero_2: typeof Standard_DivideByZero_2;
  Standard_LicenseError_1: typeof Standard_LicenseError_1;
  Standard_LicenseError_2: typeof Standard_LicenseError_2;
  Standard_LicenseNotFound_1: typeof Standard_LicenseNotFound_1;
  Standard_LicenseNotFound_2: typeof Standard_LicenseNotFound_2;
  Standard_MMgrOpt: typeof Standard_MMgrOpt;
  Standard_MMgrRaw: typeof Standard_MMgrRaw;
  Standard_MMgrTBBalloc: typeof Standard_MMgrTBBalloc;
  Standard_NoMoreObject_1: typeof Standard_NoMoreObject_1;
  Standard_NoMoreObject_2: typeof Standard_NoMoreObject_2;
  Standard_Overflow_1: typeof Standard_Overflow_1;
  Standard_Overflow_2: typeof Standard_Overflow_2;
  Standard_ReadBuffer: typeof Standard_ReadBuffer;
  Standard_TooManyUsers_1: typeof Standard_TooManyUsers_1;
  Standard_TooManyUsers_2: typeof Standard_TooManyUsers_2;
  Standard_Underflow_1: typeof Standard_Underflow_1;
  Standard_Underflow_2: typeof Standard_Underflow_2;
  StdFail_Undefined_1: typeof StdFail_Undefined_1;
  StdFail_Undefined_2: typeof StdFail_Undefined_2;
  StdFail_UndefinedValue_1: typeof StdFail_UndefinedValue_1;
  StdFail_UndefinedValue_2: typeof StdFail_UndefinedValue_2;
  Storage_Bucket_1: typeof Storage_Bucket_1;
  Storage_Bucket_2: typeof Storage_Bucket_2;
  Storage_BucketOfPersistent: typeof Storage_BucketOfPersistent;
  Storage_BucketIterator: typeof Storage_BucketIterator;
  Storage_TypedCallBack_1: typeof Storage_TypedCallBack_1;
  Storage_TypedCallBack_2: typeof Storage_TypedCallBack_2;
  Storage_DefaultCallBack: typeof Storage_DefaultCallBack;
  Storage_InternalData: typeof Storage_InternalData;
  Storage_Schema: typeof Storage_Schema;
  Storage_RootData: typeof Storage_RootData;
  Storage_StreamReadError_1: typeof Storage_StreamReadError_1;
  Storage_StreamReadError_2: typeof Storage_StreamReadError_2;
  Storage_StreamExtCharParityError_1: typeof Storage_StreamExtCharParityError_1;
  Storage_StreamExtCharParityError_2: typeof Storage_StreamExtCharParityError_2;
  Storage_StreamFormatError_1: typeof Storage_StreamFormatError_1;
  Storage_StreamFormatError_2: typeof Storage_StreamFormatError_2;
  Storage_StreamModeError_1: typeof Storage_StreamModeError_1;
  Storage_StreamModeError_2: typeof Storage_StreamModeError_2;
  Storage_StreamTypeMismatchError_1: typeof Storage_StreamTypeMismatchError_1;
  Storage_StreamTypeMismatchError_2: typeof Storage_StreamTypeMismatchError_2;
  Storage_StreamUnknownTypeError_1: typeof Storage_StreamUnknownTypeError_1;
  Storage_StreamUnknownTypeError_2: typeof Storage_StreamUnknownTypeError_2;
  Storage_StreamWriteError_1: typeof Storage_StreamWriteError_1;
  Storage_StreamWriteError_2: typeof Storage_StreamWriteError_2;
  Storage_TypeData: typeof Storage_TypeData;
  TCollection_MapNode: typeof TCollection_MapNode;
  TCollection_SeqNode: typeof TCollection_SeqNode;
  Units_Dimensions: typeof Units_Dimensions;
  Units_Unit_1: typeof Units_Unit_1;
  Units_Unit_2: typeof Units_Unit_2;
  Units_Unit_3: typeof Units_Unit_3;
  Units_Quantity: typeof Units_Quantity;
  Units_Explorer_1: typeof Units_Explorer_1;
  Units_Explorer_2: typeof Units_Explorer_2;
  Units_Explorer_3: typeof Units_Explorer_3;
  Units_Explorer_4: typeof Units_Explorer_4;
  Units_Explorer_5: typeof Units_Explorer_5;
  Units_Token_1: typeof Units_Token_1;
  Units_Token_2: typeof Units_Token_2;
  Units_Token_3: typeof Units_Token_3;
  Units_Token_4: typeof Units_Token_4;
  Units_Token_5: typeof Units_Token_5;
  Units_Token_6: typeof Units_Token_6;
  Units_Lexicon: typeof Units_Lexicon;
  Units_Sentence: typeof Units_Sentence;
  Units_MathSentence: typeof Units_MathSentence;
  Units_Measurement_1: typeof Units_Measurement_1;
  Units_Measurement_2: typeof Units_Measurement_2;
  Units_Measurement_3: typeof Units_Measurement_3;
  Units_NoSuchType_1: typeof Units_NoSuchType_1;
  Units_NoSuchType_2: typeof Units_NoSuchType_2;
  Units_NoSuchUnit_1: typeof Units_NoSuchUnit_1;
  Units_NoSuchUnit_2: typeof Units_NoSuchUnit_2;
  Units_ShiftedToken: typeof Units_ShiftedToken;
  Units_ShiftedUnit_1: typeof Units_ShiftedUnit_1;
  Units_ShiftedUnit_2: typeof Units_ShiftedUnit_2;
  Units_ShiftedUnit_3: typeof Units_ShiftedUnit_3;
  Units_UnitSentence_1: typeof Units_UnitSentence_1;
  Units_UnitSentence_2: typeof Units_UnitSentence_2;
  Units_UnitsDictionary: typeof Units_UnitsDictionary;
  Units_UnitsLexicon: typeof Units_UnitsLexicon;
  Units_UnitsSystem_1: typeof Units_UnitsSystem_1;
  Units_UnitsSystem_2: typeof Units_UnitsSystem_2;
  Handle_Standard_Transient_1: typeof Handle_Standard_Transient_1;
  Handle_Standard_Transient_2: typeof Handle_Standard_Transient_2;
  Handle_Standard_Transient_3: typeof Handle_Standard_Transient_3;
  Handle_Standard_Transient_4: typeof Handle_Standard_Transient_4;
  Handle_Standard_Type_1: typeof Handle_Standard_Type_1;
  Handle_Standard_Type_2: typeof Handle_Standard_Type_2;
  Handle_Standard_Type_3: typeof Handle_Standard_Type_3;
  Handle_Standard_Type_4: typeof Handle_Standard_Type_4;
  Handle_Standard_Failure_1: typeof Handle_Standard_Failure_1;
  Handle_Standard_Failure_2: typeof Handle_Standard_Failure_2;
  Handle_Standard_Failure_3: typeof Handle_Standard_Failure_3;
  Handle_Standard_Failure_4: typeof Handle_Standard_Failure_4;
  Handle_Standard_DomainError_1: typeof Handle_Standard_DomainError_1;
  Handle_Standard_DomainError_2: typeof Handle_Standard_DomainError_2;
  Handle_Standard_DomainError_3: typeof Handle_Standard_DomainError_3;
  Handle_Standard_DomainError_4: typeof Handle_Standard_DomainError_4;
  Handle_Standard_RangeError_1: typeof Handle_Standard_RangeError_1;
  Handle_Standard_RangeError_2: typeof Handle_Standard_RangeError_2;
  Handle_Standard_RangeError_3: typeof Handle_Standard_RangeError_3;
  Handle_Standard_RangeError_4: typeof Handle_Standard_RangeError_4;
  Handle_Standard_OutOfRange_1: typeof Handle_Standard_OutOfRange_1;
  Handle_Standard_OutOfRange_2: typeof Handle_Standard_OutOfRange_2;
  Handle_Standard_OutOfRange_3: typeof Handle_Standard_OutOfRange_3;
  Handle_Standard_OutOfRange_4: typeof Handle_Standard_OutOfRange_4;
  Handle_Standard_ConstructionError_1: typeof Handle_Standard_ConstructionError_1;
  Handle_Standard_ConstructionError_2: typeof Handle_Standard_ConstructionError_2;
  Handle_Standard_ConstructionError_3: typeof Handle_Standard_ConstructionError_3;
  Handle_Standard_ConstructionError_4: typeof Handle_Standard_ConstructionError_4;
  Handle_NCollection_BaseAllocator_1: typeof Handle_NCollection_BaseAllocator_1;
  Handle_NCollection_BaseAllocator_2: typeof Handle_NCollection_BaseAllocator_2;
  Handle_NCollection_BaseAllocator_3: typeof Handle_NCollection_BaseAllocator_3;
  Handle_NCollection_BaseAllocator_4: typeof Handle_NCollection_BaseAllocator_4;
  Handle_Standard_TypeMismatch_1: typeof Handle_Standard_TypeMismatch_1;
  Handle_Standard_TypeMismatch_2: typeof Handle_Standard_TypeMismatch_2;
  Handle_Standard_TypeMismatch_3: typeof Handle_Standard_TypeMismatch_3;
  Handle_Standard_TypeMismatch_4: typeof Handle_Standard_TypeMismatch_4;
  Handle_Standard_NoSuchObject_1: typeof Handle_Standard_NoSuchObject_1;
  Handle_Standard_NoSuchObject_2: typeof Handle_Standard_NoSuchObject_2;
  Handle_Standard_NoSuchObject_3: typeof Handle_Standard_NoSuchObject_3;
  Handle_Standard_NoSuchObject_4: typeof Handle_Standard_NoSuchObject_4;
  Handle_Standard_ProgramError_1: typeof Handle_Standard_ProgramError_1;
  Handle_Standard_ProgramError_2: typeof Handle_Standard_ProgramError_2;
  Handle_Standard_ProgramError_3: typeof Handle_Standard_ProgramError_3;
  Handle_Standard_ProgramError_4: typeof Handle_Standard_ProgramError_4;
  Handle_Standard_DimensionError_1: typeof Handle_Standard_DimensionError_1;
  Handle_Standard_DimensionError_2: typeof Handle_Standard_DimensionError_2;
  Handle_Standard_DimensionError_3: typeof Handle_Standard_DimensionError_3;
  Handle_Standard_DimensionError_4: typeof Handle_Standard_DimensionError_4;
  Handle_Standard_DimensionMismatch_1: typeof Handle_Standard_DimensionMismatch_1;
  Handle_Standard_DimensionMismatch_2: typeof Handle_Standard_DimensionMismatch_2;
  Handle_Standard_DimensionMismatch_3: typeof Handle_Standard_DimensionMismatch_3;
  Handle_Standard_DimensionMismatch_4: typeof Handle_Standard_DimensionMismatch_4;
  Handle_Standard_OutOfMemory_1: typeof Handle_Standard_OutOfMemory_1;
  Handle_Standard_OutOfMemory_2: typeof Handle_Standard_OutOfMemory_2;
  Handle_Standard_OutOfMemory_3: typeof Handle_Standard_OutOfMemory_3;
  Handle_Standard_OutOfMemory_4: typeof Handle_Standard_OutOfMemory_4;
  TColStd_Array1OfByte_1: typeof TColStd_Array1OfByte_1;
  TColStd_Array1OfByte_2: typeof TColStd_Array1OfByte_2;
  TColStd_Array1OfByte_3: typeof TColStd_Array1OfByte_3;
  TColStd_Array1OfByte_4: typeof TColStd_Array1OfByte_4;
  TColStd_Array1OfByte_5: typeof TColStd_Array1OfByte_5;
  Handle_TColStd_HArray1OfByte_1: typeof Handle_TColStd_HArray1OfByte_1;
  Handle_TColStd_HArray1OfByte_2: typeof Handle_TColStd_HArray1OfByte_2;
  Handle_TColStd_HArray1OfByte_3: typeof Handle_TColStd_HArray1OfByte_3;
  Handle_TColStd_HArray1OfByte_4: typeof Handle_TColStd_HArray1OfByte_4;
  Handle_NCollection_Buffer_1: typeof Handle_NCollection_Buffer_1;
  Handle_NCollection_Buffer_2: typeof Handle_NCollection_Buffer_2;
  Handle_NCollection_Buffer_3: typeof Handle_NCollection_Buffer_3;
  Handle_NCollection_Buffer_4: typeof Handle_NCollection_Buffer_4;
  Handle_TCollection_HAsciiString_1: typeof Handle_TCollection_HAsciiString_1;
  Handle_TCollection_HAsciiString_2: typeof Handle_TCollection_HAsciiString_2;
  Handle_TCollection_HAsciiString_3: typeof Handle_TCollection_HAsciiString_3;
  Handle_TCollection_HAsciiString_4: typeof Handle_TCollection_HAsciiString_4;
  Handle_Standard_NotImplemented_1: typeof Handle_Standard_NotImplemented_1;
  Handle_Standard_NotImplemented_2: typeof Handle_Standard_NotImplemented_2;
  Handle_Standard_NotImplemented_3: typeof Handle_Standard_NotImplemented_3;
  Handle_Standard_NotImplemented_4: typeof Handle_Standard_NotImplemented_4;
  TColStd_ListOfInteger_1: typeof TColStd_ListOfInteger_1;
  TColStd_ListOfInteger_2: typeof TColStd_ListOfInteger_2;
  TColStd_ListOfInteger_3: typeof TColStd_ListOfInteger_3;
  TColStd_IndexedDataMapOfStringString_1: typeof TColStd_IndexedDataMapOfStringString_1;
  TColStd_IndexedDataMapOfStringString_2: typeof TColStd_IndexedDataMapOfStringString_2;
  TColStd_IndexedDataMapOfStringString_3: typeof TColStd_IndexedDataMapOfStringString_3;
  TColStd_Array2OfReal_1: typeof TColStd_Array2OfReal_1;
  TColStd_Array2OfReal_2: typeof TColStd_Array2OfReal_2;
  TColStd_Array2OfReal_3: typeof TColStd_Array2OfReal_3;
  TColStd_Array2OfReal_4: typeof TColStd_Array2OfReal_4;
  TColStd_Array2OfReal_5: typeof TColStd_Array2OfReal_5;
  TColStd_SequenceOfInteger_1: typeof TColStd_SequenceOfInteger_1;
  TColStd_SequenceOfInteger_2: typeof TColStd_SequenceOfInteger_2;
  TColStd_SequenceOfInteger_3: typeof TColStd_SequenceOfInteger_3;
  TColStd_Array1OfInteger_1: typeof TColStd_Array1OfInteger_1;
  TColStd_Array1OfInteger_2: typeof TColStd_Array1OfInteger_2;
  TColStd_Array1OfInteger_3: typeof TColStd_Array1OfInteger_3;
  TColStd_Array1OfInteger_4: typeof TColStd_Array1OfInteger_4;
  TColStd_Array1OfInteger_5: typeof TColStd_Array1OfInteger_5;
  Handle_TColStd_HArray1OfInteger_1: typeof Handle_TColStd_HArray1OfInteger_1;
  Handle_TColStd_HArray1OfInteger_2: typeof Handle_TColStd_HArray1OfInteger_2;
  Handle_TColStd_HArray1OfInteger_3: typeof Handle_TColStd_HArray1OfInteger_3;
  Handle_TColStd_HArray1OfInteger_4: typeof Handle_TColStd_HArray1OfInteger_4;
  Handle_Message_Printer_1: typeof Handle_Message_Printer_1;
  Handle_Message_Printer_2: typeof Handle_Message_Printer_2;
  Handle_Message_Printer_3: typeof Handle_Message_Printer_3;
  Handle_Message_Printer_4: typeof Handle_Message_Printer_4;
  Handle_TCollection_HExtendedString_1: typeof Handle_TCollection_HExtendedString_1;
  Handle_TCollection_HExtendedString_2: typeof Handle_TCollection_HExtendedString_2;
  Handle_TCollection_HExtendedString_3: typeof Handle_TCollection_HExtendedString_3;
  Handle_TCollection_HExtendedString_4: typeof Handle_TCollection_HExtendedString_4;
  Handle_Message_Messenger_1: typeof Handle_Message_Messenger_1;
  Handle_Message_Messenger_2: typeof Handle_Message_Messenger_2;
  Handle_Message_Messenger_3: typeof Handle_Message_Messenger_3;
  Handle_Message_Messenger_4: typeof Handle_Message_Messenger_4;
  TColStd_SequenceOfExtendedString_1: typeof TColStd_SequenceOfExtendedString_1;
  TColStd_SequenceOfExtendedString_2: typeof TColStd_SequenceOfExtendedString_2;
  TColStd_SequenceOfExtendedString_3: typeof TColStd_SequenceOfExtendedString_3;
  TColStd_DataMapOfIntegerListOfInteger_1: typeof TColStd_DataMapOfIntegerListOfInteger_1;
  TColStd_DataMapOfIntegerListOfInteger_2: typeof TColStd_DataMapOfIntegerListOfInteger_2;
  TColStd_DataMapOfIntegerListOfInteger_3: typeof TColStd_DataMapOfIntegerListOfInteger_3;
  TShort_Array1OfShortReal_1: typeof TShort_Array1OfShortReal_1;
  TShort_Array1OfShortReal_2: typeof TShort_Array1OfShortReal_2;
  TShort_Array1OfShortReal_3: typeof TShort_Array1OfShortReal_3;
  TShort_Array1OfShortReal_4: typeof TShort_Array1OfShortReal_4;
  TShort_Array1OfShortReal_5: typeof TShort_Array1OfShortReal_5;
  Handle_TShort_HArray1OfShortReal_1: typeof Handle_TShort_HArray1OfShortReal_1;
  Handle_TShort_HArray1OfShortReal_2: typeof Handle_TShort_HArray1OfShortReal_2;
  Handle_TShort_HArray1OfShortReal_3: typeof Handle_TShort_HArray1OfShortReal_3;
  Handle_TShort_HArray1OfShortReal_4: typeof Handle_TShort_HArray1OfShortReal_4;
  TColStd_MapOfInteger_1: typeof TColStd_MapOfInteger_1;
  TColStd_MapOfInteger_2: typeof TColStd_MapOfInteger_2;
  TColStd_MapOfInteger_3: typeof TColStd_MapOfInteger_3;
  Quantity_Array1OfColor_1: typeof Quantity_Array1OfColor_1;
  Quantity_Array1OfColor_2: typeof Quantity_Array1OfColor_2;
  Quantity_Array1OfColor_3: typeof Quantity_Array1OfColor_3;
  Quantity_Array1OfColor_4: typeof Quantity_Array1OfColor_4;
  Quantity_Array1OfColor_5: typeof Quantity_Array1OfColor_5;
  Handle_Quantity_HArray1OfColor_1: typeof Handle_Quantity_HArray1OfColor_1;
  Handle_Quantity_HArray1OfColor_2: typeof Handle_Quantity_HArray1OfColor_2;
  Handle_Quantity_HArray1OfColor_3: typeof Handle_Quantity_HArray1OfColor_3;
  Handle_Quantity_HArray1OfColor_4: typeof Handle_Quantity_HArray1OfColor_4;
  TColStd_Array1OfAsciiString_1: typeof TColStd_Array1OfAsciiString_1;
  TColStd_Array1OfAsciiString_2: typeof TColStd_Array1OfAsciiString_2;
  TColStd_Array1OfAsciiString_3: typeof TColStd_Array1OfAsciiString_3;
  TColStd_Array1OfAsciiString_4: typeof TColStd_Array1OfAsciiString_4;
  TColStd_Array1OfAsciiString_5: typeof TColStd_Array1OfAsciiString_5;
  Handle_TColStd_HSequenceOfHAsciiString_1: typeof Handle_TColStd_HSequenceOfHAsciiString_1;
  Handle_TColStd_HSequenceOfHAsciiString_2: typeof Handle_TColStd_HSequenceOfHAsciiString_2;
  Handle_TColStd_HSequenceOfHAsciiString_3: typeof Handle_TColStd_HSequenceOfHAsciiString_3;
  Handle_TColStd_HSequenceOfHAsciiString_4: typeof Handle_TColStd_HSequenceOfHAsciiString_4;
  TColStd_Array1OfReal_1: typeof TColStd_Array1OfReal_1;
  TColStd_Array1OfReal_2: typeof TColStd_Array1OfReal_2;
  TColStd_Array1OfReal_3: typeof TColStd_Array1OfReal_3;
  TColStd_Array1OfReal_4: typeof TColStd_Array1OfReal_4;
  TColStd_Array1OfReal_5: typeof TColStd_Array1OfReal_5;
  Handle_TColStd_HArray1OfReal_1: typeof Handle_TColStd_HArray1OfReal_1;
  Handle_TColStd_HArray1OfReal_2: typeof Handle_TColStd_HArray1OfReal_2;
  Handle_TColStd_HArray1OfReal_3: typeof Handle_TColStd_HArray1OfReal_3;
  Handle_TColStd_HArray1OfReal_4: typeof Handle_TColStd_HArray1OfReal_4;
  TColStd_SequenceOfReal_1: typeof TColStd_SequenceOfReal_1;
  TColStd_SequenceOfReal_2: typeof TColStd_SequenceOfReal_2;
  TColStd_SequenceOfReal_3: typeof TColStd_SequenceOfReal_3;
  Handle_TColStd_HSequenceOfReal_1: typeof Handle_TColStd_HSequenceOfReal_1;
  Handle_TColStd_HSequenceOfReal_2: typeof Handle_TColStd_HSequenceOfReal_2;
  Handle_TColStd_HSequenceOfReal_3: typeof Handle_TColStd_HSequenceOfReal_3;
  Handle_TColStd_HSequenceOfReal_4: typeof Handle_TColStd_HSequenceOfReal_4;
  Handle_TColStd_HArray2OfReal_1: typeof Handle_TColStd_HArray2OfReal_1;
  Handle_TColStd_HArray2OfReal_2: typeof Handle_TColStd_HArray2OfReal_2;
  Handle_TColStd_HArray2OfReal_3: typeof Handle_TColStd_HArray2OfReal_3;
  Handle_TColStd_HArray2OfReal_4: typeof Handle_TColStd_HArray2OfReal_4;
  Handle_StdFail_NotDone_1: typeof Handle_StdFail_NotDone_1;
  Handle_StdFail_NotDone_2: typeof Handle_StdFail_NotDone_2;
  Handle_StdFail_NotDone_3: typeof Handle_StdFail_NotDone_3;
  Handle_StdFail_NotDone_4: typeof Handle_StdFail_NotDone_4;
  TColStd_Array2OfInteger_1: typeof TColStd_Array2OfInteger_1;
  TColStd_Array2OfInteger_2: typeof TColStd_Array2OfInteger_2;
  TColStd_Array2OfInteger_3: typeof TColStd_Array2OfInteger_3;
  TColStd_Array2OfInteger_4: typeof TColStd_Array2OfInteger_4;
  TColStd_Array2OfInteger_5: typeof TColStd_Array2OfInteger_5;
  Handle_TColStd_HArray2OfInteger_1: typeof Handle_TColStd_HArray2OfInteger_1;
  Handle_TColStd_HArray2OfInteger_2: typeof Handle_TColStd_HArray2OfInteger_2;
  Handle_TColStd_HArray2OfInteger_3: typeof Handle_TColStd_HArray2OfInteger_3;
  Handle_TColStd_HArray2OfInteger_4: typeof Handle_TColStd_HArray2OfInteger_4;
  Handle_Message_ProgressIndicator_1: typeof Handle_Message_ProgressIndicator_1;
  Handle_Message_ProgressIndicator_2: typeof Handle_Message_ProgressIndicator_2;
  Handle_Message_ProgressIndicator_3: typeof Handle_Message_ProgressIndicator_3;
  Handle_Message_ProgressIndicator_4: typeof Handle_Message_ProgressIndicator_4;
  TColStd_SequenceOfAsciiString_1: typeof TColStd_SequenceOfAsciiString_1;
  TColStd_SequenceOfAsciiString_2: typeof TColStd_SequenceOfAsciiString_2;
  TColStd_SequenceOfAsciiString_3: typeof TColStd_SequenceOfAsciiString_3;
  Handle_Message_Alert_1: typeof Handle_Message_Alert_1;
  Handle_Message_Alert_2: typeof Handle_Message_Alert_2;
  Handle_Message_Alert_3: typeof Handle_Message_Alert_3;
  Handle_Message_Alert_4: typeof Handle_Message_Alert_4;
  Handle_Message_AlertExtended_1: typeof Handle_Message_AlertExtended_1;
  Handle_Message_AlertExtended_2: typeof Handle_Message_AlertExtended_2;
  Handle_Message_AlertExtended_3: typeof Handle_Message_AlertExtended_3;
  Handle_Message_AlertExtended_4: typeof Handle_Message_AlertExtended_4;
  Handle_Message_Report_1: typeof Handle_Message_Report_1;
  Handle_Message_Report_2: typeof Handle_Message_Report_2;
  Handle_Message_Report_3: typeof Handle_Message_Report_3;
  Handle_Message_Report_4: typeof Handle_Message_Report_4;
  TColStd_DataMapOfIntegerInteger_1: typeof TColStd_DataMapOfIntegerInteger_1;
  TColStd_DataMapOfIntegerInteger_2: typeof TColStd_DataMapOfIntegerInteger_2;
  TColStd_DataMapOfIntegerInteger_3: typeof TColStd_DataMapOfIntegerInteger_3;
  TColStd_DataMapOfIntegerReal_1: typeof TColStd_DataMapOfIntegerReal_1;
  TColStd_DataMapOfIntegerReal_2: typeof TColStd_DataMapOfIntegerReal_2;
  TColStd_DataMapOfIntegerReal_3: typeof TColStd_DataMapOfIntegerReal_3;
  Handle_Standard_NullObject_1: typeof Handle_Standard_NullObject_1;
  Handle_Standard_NullObject_2: typeof Handle_Standard_NullObject_2;
  Handle_Standard_NullObject_3: typeof Handle_Standard_NullObject_3;
  Handle_Standard_NullObject_4: typeof Handle_Standard_NullObject_4;
  Handle_StdFail_UndefinedDerivative_1: typeof Handle_StdFail_UndefinedDerivative_1;
  Handle_StdFail_UndefinedDerivative_2: typeof Handle_StdFail_UndefinedDerivative_2;
  Handle_StdFail_UndefinedDerivative_3: typeof Handle_StdFail_UndefinedDerivative_3;
  Handle_StdFail_UndefinedDerivative_4: typeof Handle_StdFail_UndefinedDerivative_4;
  Handle_NCollection_IncAllocator_1: typeof Handle_NCollection_IncAllocator_1;
  Handle_NCollection_IncAllocator_2: typeof Handle_NCollection_IncAllocator_2;
  Handle_NCollection_IncAllocator_3: typeof Handle_NCollection_IncAllocator_3;
  Handle_NCollection_IncAllocator_4: typeof Handle_NCollection_IncAllocator_4;
  TColStd_IndexedMapOfInteger_1: typeof TColStd_IndexedMapOfInteger_1;
  TColStd_IndexedMapOfInteger_2: typeof TColStd_IndexedMapOfInteger_2;
  TColStd_IndexedMapOfInteger_3: typeof TColStd_IndexedMapOfInteger_3;
  TColStd_SequenceOfBoolean_1: typeof TColStd_SequenceOfBoolean_1;
  TColStd_SequenceOfBoolean_2: typeof TColStd_SequenceOfBoolean_2;
  TColStd_SequenceOfBoolean_3: typeof TColStd_SequenceOfBoolean_3;
  TColStd_Array1OfBoolean_1: typeof TColStd_Array1OfBoolean_1;
  TColStd_Array1OfBoolean_2: typeof TColStd_Array1OfBoolean_2;
  TColStd_Array1OfBoolean_3: typeof TColStd_Array1OfBoolean_3;
  TColStd_Array1OfBoolean_4: typeof TColStd_Array1OfBoolean_4;
  TColStd_Array1OfBoolean_5: typeof TColStd_Array1OfBoolean_5;
  Handle_TColStd_HArray1OfTransient_1: typeof Handle_TColStd_HArray1OfTransient_1;
  Handle_TColStd_HArray1OfTransient_2: typeof Handle_TColStd_HArray1OfTransient_2;
  Handle_TColStd_HArray1OfTransient_3: typeof Handle_TColStd_HArray1OfTransient_3;
  Handle_TColStd_HArray1OfTransient_4: typeof Handle_TColStd_HArray1OfTransient_4;
  Handle_TColStd_HSequenceOfHExtendedString_1: typeof Handle_TColStd_HSequenceOfHExtendedString_1;
  Handle_TColStd_HSequenceOfHExtendedString_2: typeof Handle_TColStd_HSequenceOfHExtendedString_2;
  Handle_TColStd_HSequenceOfHExtendedString_3: typeof Handle_TColStd_HSequenceOfHExtendedString_3;
  Handle_TColStd_HSequenceOfHExtendedString_4: typeof Handle_TColStd_HSequenceOfHExtendedString_4;
  Message_HArrayOfMsg_2: typeof Message_HArrayOfMsg_2;
  Message_HArrayOfMsg_3: typeof Message_HArrayOfMsg_3;
  Handle_Message_Algorithm_1: typeof Handle_Message_Algorithm_1;
  Handle_Message_Algorithm_2: typeof Handle_Message_Algorithm_2;
  Handle_Message_Algorithm_3: typeof Handle_Message_Algorithm_3;
  Handle_Message_Algorithm_4: typeof Handle_Message_Algorithm_4;
  TColStd_MapOfAsciiString_1: typeof TColStd_MapOfAsciiString_1;
  TColStd_MapOfAsciiString_2: typeof TColStd_MapOfAsciiString_2;
  TColStd_MapOfAsciiString_3: typeof TColStd_MapOfAsciiString_3;
  Plugin_MapOfFunctions_1: typeof Plugin_MapOfFunctions_1;
  Plugin_MapOfFunctions_2: typeof Plugin_MapOfFunctions_2;
  Plugin_MapOfFunctions_3: typeof Plugin_MapOfFunctions_3;
  TColStd_Array2OfBoolean_1: typeof TColStd_Array2OfBoolean_1;
  TColStd_Array2OfBoolean_2: typeof TColStd_Array2OfBoolean_2;
  TColStd_Array2OfBoolean_3: typeof TColStd_Array2OfBoolean_3;
  TColStd_Array2OfBoolean_4: typeof TColStd_Array2OfBoolean_4;
  TColStd_Array2OfBoolean_5: typeof TColStd_Array2OfBoolean_5;
  TColStd_SequenceOfAddress_1: typeof TColStd_SequenceOfAddress_1;
  TColStd_SequenceOfAddress_2: typeof TColStd_SequenceOfAddress_2;
  TColStd_SequenceOfAddress_3: typeof TColStd_SequenceOfAddress_3;
  Handle_Storage_HeaderData_1: typeof Handle_Storage_HeaderData_1;
  Handle_Storage_HeaderData_2: typeof Handle_Storage_HeaderData_2;
  Handle_Storage_HeaderData_3: typeof Handle_Storage_HeaderData_3;
  Handle_Storage_HeaderData_4: typeof Handle_Storage_HeaderData_4;
  Handle_Storage_Root_1: typeof Handle_Storage_Root_1;
  Handle_Storage_Root_2: typeof Handle_Storage_Root_2;
  Handle_Storage_Root_3: typeof Handle_Storage_Root_3;
  Handle_Storage_Root_4: typeof Handle_Storage_Root_4;
  Handle_Storage_HSeqOfRoot_1: typeof Handle_Storage_HSeqOfRoot_1;
  Handle_Storage_HSeqOfRoot_2: typeof Handle_Storage_HSeqOfRoot_2;
  Handle_Storage_HSeqOfRoot_3: typeof Handle_Storage_HSeqOfRoot_3;
  Handle_Storage_HSeqOfRoot_4: typeof Handle_Storage_HSeqOfRoot_4;
  Handle_TColStd_HSequenceOfAsciiString_1: typeof Handle_TColStd_HSequenceOfAsciiString_1;
  Handle_TColStd_HSequenceOfAsciiString_2: typeof Handle_TColStd_HSequenceOfAsciiString_2;
  Handle_TColStd_HSequenceOfAsciiString_3: typeof Handle_TColStd_HSequenceOfAsciiString_3;
  Handle_TColStd_HSequenceOfAsciiString_4: typeof Handle_TColStd_HSequenceOfAsciiString_4;
  Handle_Storage_Data_1: typeof Handle_Storage_Data_1;
  Handle_Storage_Data_2: typeof Handle_Storage_Data_2;
  Handle_Storage_Data_3: typeof Handle_Storage_Data_3;
  Handle_Storage_Data_4: typeof Handle_Storage_Data_4;
  Handle_Standard_MultiplyDefined_1: typeof Handle_Standard_MultiplyDefined_1;
  Handle_Standard_MultiplyDefined_2: typeof Handle_Standard_MultiplyDefined_2;
  Handle_Standard_MultiplyDefined_3: typeof Handle_Standard_MultiplyDefined_3;
  Handle_Standard_MultiplyDefined_4: typeof Handle_Standard_MultiplyDefined_4;
  Handle_Standard_ImmutableObject_1: typeof Handle_Standard_ImmutableObject_1;
  Handle_Standard_ImmutableObject_2: typeof Handle_Standard_ImmutableObject_2;
  Handle_Standard_ImmutableObject_3: typeof Handle_Standard_ImmutableObject_3;
  Handle_Standard_ImmutableObject_4: typeof Handle_Standard_ImmutableObject_4;
  TColStd_DataMapOfAsciiStringInteger_1: typeof TColStd_DataMapOfAsciiStringInteger_1;
  TColStd_DataMapOfAsciiStringInteger_2: typeof TColStd_DataMapOfAsciiStringInteger_2;
  TColStd_DataMapOfAsciiStringInteger_3: typeof TColStd_DataMapOfAsciiStringInteger_3;
  TColStd_Array1OfListOfInteger_1: typeof TColStd_Array1OfListOfInteger_1;
  TColStd_Array1OfListOfInteger_2: typeof TColStd_Array1OfListOfInteger_2;
  TColStd_Array1OfListOfInteger_3: typeof TColStd_Array1OfListOfInteger_3;
  TColStd_Array1OfListOfInteger_4: typeof TColStd_Array1OfListOfInteger_4;
  TColStd_Array1OfListOfInteger_5: typeof TColStd_Array1OfListOfInteger_5;
  Handle_TColStd_HArray1OfListOfInteger_1: typeof Handle_TColStd_HArray1OfListOfInteger_1;
  Handle_TColStd_HArray1OfListOfInteger_2: typeof Handle_TColStd_HArray1OfListOfInteger_2;
  Handle_TColStd_HArray1OfListOfInteger_3: typeof Handle_TColStd_HArray1OfListOfInteger_3;
  Handle_TColStd_HArray1OfListOfInteger_4: typeof Handle_TColStd_HArray1OfListOfInteger_4;
  TColStd_DataMapOfStringInteger_1: typeof TColStd_DataMapOfStringInteger_1;
  TColStd_DataMapOfStringInteger_2: typeof TColStd_DataMapOfStringInteger_2;
  TColStd_DataMapOfStringInteger_3: typeof TColStd_DataMapOfStringInteger_3;
  TColStd_ListOfReal_1: typeof TColStd_ListOfReal_1;
  TColStd_ListOfReal_2: typeof TColStd_ListOfReal_2;
  TColStd_ListOfReal_3: typeof TColStd_ListOfReal_3;
  TColStd_ListOfAsciiString_1: typeof TColStd_ListOfAsciiString_1;
  TColStd_ListOfAsciiString_2: typeof TColStd_ListOfAsciiString_2;
  TColStd_ListOfAsciiString_3: typeof TColStd_ListOfAsciiString_3;
  Handle_Storage_BaseDriver_1: typeof Handle_Storage_BaseDriver_1;
  Handle_Storage_BaseDriver_2: typeof Handle_Storage_BaseDriver_2;
  Handle_Storage_BaseDriver_3: typeof Handle_Storage_BaseDriver_3;
  Handle_Storage_BaseDriver_4: typeof Handle_Storage_BaseDriver_4;
  Handle_FSD_BinaryFile_1: typeof Handle_FSD_BinaryFile_1;
  Handle_FSD_BinaryFile_2: typeof Handle_FSD_BinaryFile_2;
  Handle_FSD_BinaryFile_3: typeof Handle_FSD_BinaryFile_3;
  Handle_FSD_BinaryFile_4: typeof Handle_FSD_BinaryFile_4;
  Handle_FSD_File_1: typeof Handle_FSD_File_1;
  Handle_FSD_File_2: typeof Handle_FSD_File_2;
  Handle_FSD_File_3: typeof Handle_FSD_File_3;
  Handle_FSD_File_4: typeof Handle_FSD_File_4;
  Handle_FSD_CmpFile_1: typeof Handle_FSD_CmpFile_1;
  Handle_FSD_CmpFile_2: typeof Handle_FSD_CmpFile_2;
  Handle_FSD_CmpFile_3: typeof Handle_FSD_CmpFile_3;
  Handle_FSD_CmpFile_4: typeof Handle_FSD_CmpFile_4;
  Handle_Standard_NegativeValue_1: typeof Handle_Standard_NegativeValue_1;
  Handle_Standard_NegativeValue_2: typeof Handle_Standard_NegativeValue_2;
  Handle_Standard_NegativeValue_3: typeof Handle_Standard_NegativeValue_3;
  Handle_Standard_NegativeValue_4: typeof Handle_Standard_NegativeValue_4;
  NCollection_Utf8String_1: typeof NCollection_Utf8String_1;
  NCollection_Utf8String_2: typeof NCollection_Utf8String_2;
  NCollection_Utf8String_3: typeof NCollection_Utf8String_3;
  NCollection_Utf8String_4: typeof NCollection_Utf8String_4;
  NCollection_Utf8String_5: typeof NCollection_Utf8String_5;
  NCollection_Utf8String_6: typeof NCollection_Utf8String_6;
  NCollection_Utf8String_7: typeof NCollection_Utf8String_7;
  NCollection_Utf16String_1: typeof NCollection_Utf16String_1;
  NCollection_Utf16String_2: typeof NCollection_Utf16String_2;
  NCollection_Utf16String_3: typeof NCollection_Utf16String_3;
  NCollection_Utf16String_4: typeof NCollection_Utf16String_4;
  NCollection_Utf16String_5: typeof NCollection_Utf16String_5;
  NCollection_Utf16String_6: typeof NCollection_Utf16String_6;
  NCollection_Utf16String_7: typeof NCollection_Utf16String_7;
  NCollection_Utf32String_1: typeof NCollection_Utf32String_1;
  NCollection_Utf32String_2: typeof NCollection_Utf32String_2;
  NCollection_Utf32String_3: typeof NCollection_Utf32String_3;
  NCollection_Utf32String_4: typeof NCollection_Utf32String_4;
  NCollection_Utf32String_5: typeof NCollection_Utf32String_5;
  NCollection_Utf32String_6: typeof NCollection_Utf32String_6;
  NCollection_Utf32String_7: typeof NCollection_Utf32String_7;
  NCollection_UtfWideString_1: typeof NCollection_UtfWideString_1;
  NCollection_UtfWideString_2: typeof NCollection_UtfWideString_2;
  NCollection_UtfWideString_3: typeof NCollection_UtfWideString_3;
  NCollection_UtfWideString_4: typeof NCollection_UtfWideString_4;
  NCollection_UtfWideString_5: typeof NCollection_UtfWideString_5;
  NCollection_UtfWideString_6: typeof NCollection_UtfWideString_6;
  NCollection_UtfWideString_7: typeof NCollection_UtfWideString_7;
  Handle_TColStd_HSequenceOfInteger_1: typeof Handle_TColStd_HSequenceOfInteger_1;
  Handle_TColStd_HSequenceOfInteger_2: typeof Handle_TColStd_HSequenceOfInteger_2;
  Handle_TColStd_HSequenceOfInteger_3: typeof Handle_TColStd_HSequenceOfInteger_3;
  Handle_TColStd_HSequenceOfInteger_4: typeof Handle_TColStd_HSequenceOfInteger_4;
  Handle_TColStd_HArray1OfBoolean_1: typeof Handle_TColStd_HArray1OfBoolean_1;
  Handle_TColStd_HArray1OfBoolean_2: typeof Handle_TColStd_HArray1OfBoolean_2;
  Handle_TColStd_HArray1OfBoolean_3: typeof Handle_TColStd_HArray1OfBoolean_3;
  Handle_TColStd_HArray1OfBoolean_4: typeof Handle_TColStd_HArray1OfBoolean_4;
  Handle_TColStd_HSequenceOfTransient_1: typeof Handle_TColStd_HSequenceOfTransient_1;
  Handle_TColStd_HSequenceOfTransient_2: typeof Handle_TColStd_HSequenceOfTransient_2;
  Handle_TColStd_HSequenceOfTransient_3: typeof Handle_TColStd_HSequenceOfTransient_3;
  Handle_TColStd_HSequenceOfTransient_4: typeof Handle_TColStd_HSequenceOfTransient_4;
  Handle_TColStd_HArray2OfTransient_1: typeof Handle_TColStd_HArray2OfTransient_1;
  Handle_TColStd_HArray2OfTransient_2: typeof Handle_TColStd_HArray2OfTransient_2;
  Handle_TColStd_HArray2OfTransient_3: typeof Handle_TColStd_HArray2OfTransient_3;
  Handle_TColStd_HArray2OfTransient_4: typeof Handle_TColStd_HArray2OfTransient_4;
  Handle_TColStd_HPackedMapOfInteger_1: typeof Handle_TColStd_HPackedMapOfInteger_1;
  Handle_TColStd_HPackedMapOfInteger_2: typeof Handle_TColStd_HPackedMapOfInteger_2;
  Handle_TColStd_HPackedMapOfInteger_3: typeof Handle_TColStd_HPackedMapOfInteger_3;
  Handle_TColStd_HPackedMapOfInteger_4: typeof Handle_TColStd_HPackedMapOfInteger_4;
  Resource_DataMapOfAsciiStringAsciiString_1: typeof Resource_DataMapOfAsciiStringAsciiString_1;
  Resource_DataMapOfAsciiStringAsciiString_2: typeof Resource_DataMapOfAsciiStringAsciiString_2;
  Resource_DataMapOfAsciiStringAsciiString_3: typeof Resource_DataMapOfAsciiStringAsciiString_3;
  Handle_StdFail_InfiniteSolutions_1: typeof Handle_StdFail_InfiniteSolutions_1;
  Handle_StdFail_InfiniteSolutions_2: typeof Handle_StdFail_InfiniteSolutions_2;
  Handle_StdFail_InfiniteSolutions_3: typeof Handle_StdFail_InfiniteSolutions_3;
  Handle_StdFail_InfiniteSolutions_4: typeof Handle_StdFail_InfiniteSolutions_4;
  Handle_TColStd_HArray1OfAsciiString_1: typeof Handle_TColStd_HArray1OfAsciiString_1;
  Handle_TColStd_HArray1OfAsciiString_2: typeof Handle_TColStd_HArray1OfAsciiString_2;
  Handle_TColStd_HArray1OfAsciiString_3: typeof Handle_TColStd_HArray1OfAsciiString_3;
  Handle_TColStd_HArray1OfAsciiString_4: typeof Handle_TColStd_HArray1OfAsciiString_4;
  Handle_Message_Attribute_1: typeof Handle_Message_Attribute_1;
  Handle_Message_Attribute_2: typeof Handle_Message_Attribute_2;
  Handle_Message_Attribute_3: typeof Handle_Message_Attribute_3;
  Handle_Message_Attribute_4: typeof Handle_Message_Attribute_4;
  Handle_Message_CompositeAlerts_1: typeof Handle_Message_CompositeAlerts_1;
  Handle_Message_CompositeAlerts_2: typeof Handle_Message_CompositeAlerts_2;
  Handle_Message_CompositeAlerts_3: typeof Handle_Message_CompositeAlerts_3;
  Handle_Message_CompositeAlerts_4: typeof Handle_Message_CompositeAlerts_4;
  Message_ListOfMsg_1: typeof Message_ListOfMsg_1;
  Message_ListOfMsg_2: typeof Message_ListOfMsg_2;
  Message_ListOfMsg_3: typeof Message_ListOfMsg_3;
  Handle_Message_PrinterOStream_1: typeof Handle_Message_PrinterOStream_1;
  Handle_Message_PrinterOStream_2: typeof Handle_Message_PrinterOStream_2;
  Handle_Message_PrinterOStream_3: typeof Handle_Message_PrinterOStream_3;
  Handle_Message_PrinterOStream_4: typeof Handle_Message_PrinterOStream_4;
  Handle_Message_PrinterSystemLog_1: typeof Handle_Message_PrinterSystemLog_1;
  Handle_Message_PrinterSystemLog_2: typeof Handle_Message_PrinterSystemLog_2;
  Handle_Message_PrinterSystemLog_3: typeof Handle_Message_PrinterSystemLog_3;
  Handle_Message_PrinterSystemLog_4: typeof Handle_Message_PrinterSystemLog_4;
  Handle_Message_PrinterToReport_1: typeof Handle_Message_PrinterToReport_1;
  Handle_Message_PrinterToReport_2: typeof Handle_Message_PrinterToReport_2;
  Handle_Message_PrinterToReport_3: typeof Handle_Message_PrinterToReport_3;
  Handle_Message_PrinterToReport_4: typeof Handle_Message_PrinterToReport_4;
  Handle_NCollection_AccAllocator_1: typeof Handle_NCollection_AccAllocator_1;
  Handle_NCollection_AccAllocator_2: typeof Handle_NCollection_AccAllocator_2;
  Handle_NCollection_AccAllocator_3: typeof Handle_NCollection_AccAllocator_3;
  Handle_NCollection_AccAllocator_4: typeof Handle_NCollection_AccAllocator_4;
  Handle_NCollection_AlignedAllocator_1: typeof Handle_NCollection_AlignedAllocator_1;
  Handle_NCollection_AlignedAllocator_2: typeof Handle_NCollection_AlignedAllocator_2;
  Handle_NCollection_AlignedAllocator_3: typeof Handle_NCollection_AlignedAllocator_3;
  Handle_NCollection_AlignedAllocator_4: typeof Handle_NCollection_AlignedAllocator_4;
  Handle_NCollection_HeapAllocator_1: typeof Handle_NCollection_HeapAllocator_1;
  Handle_NCollection_HeapAllocator_2: typeof Handle_NCollection_HeapAllocator_2;
  Handle_NCollection_HeapAllocator_3: typeof Handle_NCollection_HeapAllocator_3;
  Handle_NCollection_HeapAllocator_4: typeof Handle_NCollection_HeapAllocator_4;
  Handle_NCollection_WinHeapAllocator_1: typeof Handle_NCollection_WinHeapAllocator_1;
  Handle_NCollection_WinHeapAllocator_2: typeof Handle_NCollection_WinHeapAllocator_2;
  Handle_NCollection_WinHeapAllocator_3: typeof Handle_NCollection_WinHeapAllocator_3;
  Handle_NCollection_WinHeapAllocator_4: typeof Handle_NCollection_WinHeapAllocator_4;
  Handle_OSD_Exception_1: typeof Handle_OSD_Exception_1;
  Handle_OSD_Exception_2: typeof Handle_OSD_Exception_2;
  Handle_OSD_Exception_3: typeof Handle_OSD_Exception_3;
  Handle_OSD_Exception_4: typeof Handle_OSD_Exception_4;
  Handle_OSD_Exception_ACCESS_VIOLATION_1: typeof Handle_OSD_Exception_ACCESS_VIOLATION_1;
  Handle_OSD_Exception_ACCESS_VIOLATION_2: typeof Handle_OSD_Exception_ACCESS_VIOLATION_2;
  Handle_OSD_Exception_ACCESS_VIOLATION_3: typeof Handle_OSD_Exception_ACCESS_VIOLATION_3;
  Handle_OSD_Exception_ACCESS_VIOLATION_4: typeof Handle_OSD_Exception_ACCESS_VIOLATION_4;
  Handle_OSD_Exception_ARRAY_BOUNDS_EXCEEDED_1: typeof Handle_OSD_Exception_ARRAY_BOUNDS_EXCEEDED_1;
  Handle_OSD_Exception_ARRAY_BOUNDS_EXCEEDED_2: typeof Handle_OSD_Exception_ARRAY_BOUNDS_EXCEEDED_2;
  Handle_OSD_Exception_ARRAY_BOUNDS_EXCEEDED_3: typeof Handle_OSD_Exception_ARRAY_BOUNDS_EXCEEDED_3;
  Handle_OSD_Exception_ARRAY_BOUNDS_EXCEEDED_4: typeof Handle_OSD_Exception_ARRAY_BOUNDS_EXCEEDED_4;
  Handle_OSD_Exception_CTRL_BREAK_1: typeof Handle_OSD_Exception_CTRL_BREAK_1;
  Handle_OSD_Exception_CTRL_BREAK_2: typeof Handle_OSD_Exception_CTRL_BREAK_2;
  Handle_OSD_Exception_CTRL_BREAK_3: typeof Handle_OSD_Exception_CTRL_BREAK_3;
  Handle_OSD_Exception_CTRL_BREAK_4: typeof Handle_OSD_Exception_CTRL_BREAK_4;
  Handle_OSD_Exception_FLT_DENORMAL_OPERAND_1: typeof Handle_OSD_Exception_FLT_DENORMAL_OPERAND_1;
  Handle_OSD_Exception_FLT_DENORMAL_OPERAND_2: typeof Handle_OSD_Exception_FLT_DENORMAL_OPERAND_2;
  Handle_OSD_Exception_FLT_DENORMAL_OPERAND_3: typeof Handle_OSD_Exception_FLT_DENORMAL_OPERAND_3;
  Handle_OSD_Exception_FLT_DENORMAL_OPERAND_4: typeof Handle_OSD_Exception_FLT_DENORMAL_OPERAND_4;
  Handle_OSD_Exception_FLT_DIVIDE_BY_ZERO_1: typeof Handle_OSD_Exception_FLT_DIVIDE_BY_ZERO_1;
  Handle_OSD_Exception_FLT_DIVIDE_BY_ZERO_2: typeof Handle_OSD_Exception_FLT_DIVIDE_BY_ZERO_2;
  Handle_OSD_Exception_FLT_DIVIDE_BY_ZERO_3: typeof Handle_OSD_Exception_FLT_DIVIDE_BY_ZERO_3;
  Handle_OSD_Exception_FLT_DIVIDE_BY_ZERO_4: typeof Handle_OSD_Exception_FLT_DIVIDE_BY_ZERO_4;
  Handle_OSD_Exception_FLT_INEXACT_RESULT_1: typeof Handle_OSD_Exception_FLT_INEXACT_RESULT_1;
  Handle_OSD_Exception_FLT_INEXACT_RESULT_2: typeof Handle_OSD_Exception_FLT_INEXACT_RESULT_2;
  Handle_OSD_Exception_FLT_INEXACT_RESULT_3: typeof Handle_OSD_Exception_FLT_INEXACT_RESULT_3;
  Handle_OSD_Exception_FLT_INEXACT_RESULT_4: typeof Handle_OSD_Exception_FLT_INEXACT_RESULT_4;
  Handle_OSD_Exception_FLT_INVALID_OPERATION_1: typeof Handle_OSD_Exception_FLT_INVALID_OPERATION_1;
  Handle_OSD_Exception_FLT_INVALID_OPERATION_2: typeof Handle_OSD_Exception_FLT_INVALID_OPERATION_2;
  Handle_OSD_Exception_FLT_INVALID_OPERATION_3: typeof Handle_OSD_Exception_FLT_INVALID_OPERATION_3;
  Handle_OSD_Exception_FLT_INVALID_OPERATION_4: typeof Handle_OSD_Exception_FLT_INVALID_OPERATION_4;
  Handle_OSD_Exception_FLT_OVERFLOW_1: typeof Handle_OSD_Exception_FLT_OVERFLOW_1;
  Handle_OSD_Exception_FLT_OVERFLOW_2: typeof Handle_OSD_Exception_FLT_OVERFLOW_2;
  Handle_OSD_Exception_FLT_OVERFLOW_3: typeof Handle_OSD_Exception_FLT_OVERFLOW_3;
  Handle_OSD_Exception_FLT_OVERFLOW_4: typeof Handle_OSD_Exception_FLT_OVERFLOW_4;
  Handle_OSD_Exception_FLT_STACK_CHECK_1: typeof Handle_OSD_Exception_FLT_STACK_CHECK_1;
  Handle_OSD_Exception_FLT_STACK_CHECK_2: typeof Handle_OSD_Exception_FLT_STACK_CHECK_2;
  Handle_OSD_Exception_FLT_STACK_CHECK_3: typeof Handle_OSD_Exception_FLT_STACK_CHECK_3;
  Handle_OSD_Exception_FLT_STACK_CHECK_4: typeof Handle_OSD_Exception_FLT_STACK_CHECK_4;
  Handle_OSD_Exception_FLT_UNDERFLOW_1: typeof Handle_OSD_Exception_FLT_UNDERFLOW_1;
  Handle_OSD_Exception_FLT_UNDERFLOW_2: typeof Handle_OSD_Exception_FLT_UNDERFLOW_2;
  Handle_OSD_Exception_FLT_UNDERFLOW_3: typeof Handle_OSD_Exception_FLT_UNDERFLOW_3;
  Handle_OSD_Exception_FLT_UNDERFLOW_4: typeof Handle_OSD_Exception_FLT_UNDERFLOW_4;
  Handle_OSD_Exception_ILLEGAL_INSTRUCTION_1: typeof Handle_OSD_Exception_ILLEGAL_INSTRUCTION_1;
  Handle_OSD_Exception_ILLEGAL_INSTRUCTION_2: typeof Handle_OSD_Exception_ILLEGAL_INSTRUCTION_2;
  Handle_OSD_Exception_ILLEGAL_INSTRUCTION_3: typeof Handle_OSD_Exception_ILLEGAL_INSTRUCTION_3;
  Handle_OSD_Exception_ILLEGAL_INSTRUCTION_4: typeof Handle_OSD_Exception_ILLEGAL_INSTRUCTION_4;
  Handle_OSD_Exception_INT_DIVIDE_BY_ZERO_1: typeof Handle_OSD_Exception_INT_DIVIDE_BY_ZERO_1;
  Handle_OSD_Exception_INT_DIVIDE_BY_ZERO_2: typeof Handle_OSD_Exception_INT_DIVIDE_BY_ZERO_2;
  Handle_OSD_Exception_INT_DIVIDE_BY_ZERO_3: typeof Handle_OSD_Exception_INT_DIVIDE_BY_ZERO_3;
  Handle_OSD_Exception_INT_DIVIDE_BY_ZERO_4: typeof Handle_OSD_Exception_INT_DIVIDE_BY_ZERO_4;
  Handle_OSD_Exception_INT_OVERFLOW_1: typeof Handle_OSD_Exception_INT_OVERFLOW_1;
  Handle_OSD_Exception_INT_OVERFLOW_2: typeof Handle_OSD_Exception_INT_OVERFLOW_2;
  Handle_OSD_Exception_INT_OVERFLOW_3: typeof Handle_OSD_Exception_INT_OVERFLOW_3;
  Handle_OSD_Exception_INT_OVERFLOW_4: typeof Handle_OSD_Exception_INT_OVERFLOW_4;
  Handle_OSD_Exception_INVALID_DISPOSITION_1: typeof Handle_OSD_Exception_INVALID_DISPOSITION_1;
  Handle_OSD_Exception_INVALID_DISPOSITION_2: typeof Handle_OSD_Exception_INVALID_DISPOSITION_2;
  Handle_OSD_Exception_INVALID_DISPOSITION_3: typeof Handle_OSD_Exception_INVALID_DISPOSITION_3;
  Handle_OSD_Exception_INVALID_DISPOSITION_4: typeof Handle_OSD_Exception_INVALID_DISPOSITION_4;
  Handle_OSD_Exception_IN_PAGE_ERROR_1: typeof Handle_OSD_Exception_IN_PAGE_ERROR_1;
  Handle_OSD_Exception_IN_PAGE_ERROR_2: typeof Handle_OSD_Exception_IN_PAGE_ERROR_2;
  Handle_OSD_Exception_IN_PAGE_ERROR_3: typeof Handle_OSD_Exception_IN_PAGE_ERROR_3;
  Handle_OSD_Exception_IN_PAGE_ERROR_4: typeof Handle_OSD_Exception_IN_PAGE_ERROR_4;
  Handle_OSD_Exception_NONCONTINUABLE_EXCEPTION_1: typeof Handle_OSD_Exception_NONCONTINUABLE_EXCEPTION_1;
  Handle_OSD_Exception_NONCONTINUABLE_EXCEPTION_2: typeof Handle_OSD_Exception_NONCONTINUABLE_EXCEPTION_2;
  Handle_OSD_Exception_NONCONTINUABLE_EXCEPTION_3: typeof Handle_OSD_Exception_NONCONTINUABLE_EXCEPTION_3;
  Handle_OSD_Exception_NONCONTINUABLE_EXCEPTION_4: typeof Handle_OSD_Exception_NONCONTINUABLE_EXCEPTION_4;
  Handle_OSD_Exception_PRIV_INSTRUCTION_1: typeof Handle_OSD_Exception_PRIV_INSTRUCTION_1;
  Handle_OSD_Exception_PRIV_INSTRUCTION_2: typeof Handle_OSD_Exception_PRIV_INSTRUCTION_2;
  Handle_OSD_Exception_PRIV_INSTRUCTION_3: typeof Handle_OSD_Exception_PRIV_INSTRUCTION_3;
  Handle_OSD_Exception_PRIV_INSTRUCTION_4: typeof Handle_OSD_Exception_PRIV_INSTRUCTION_4;
  Handle_OSD_Exception_STACK_OVERFLOW_1: typeof Handle_OSD_Exception_STACK_OVERFLOW_1;
  Handle_OSD_Exception_STACK_OVERFLOW_2: typeof Handle_OSD_Exception_STACK_OVERFLOW_2;
  Handle_OSD_Exception_STACK_OVERFLOW_3: typeof Handle_OSD_Exception_STACK_OVERFLOW_3;
  Handle_OSD_Exception_STACK_OVERFLOW_4: typeof Handle_OSD_Exception_STACK_OVERFLOW_4;
  Handle_OSD_Exception_STATUS_NO_MEMORY_1: typeof Handle_OSD_Exception_STATUS_NO_MEMORY_1;
  Handle_OSD_Exception_STATUS_NO_MEMORY_2: typeof Handle_OSD_Exception_STATUS_NO_MEMORY_2;
  Handle_OSD_Exception_STATUS_NO_MEMORY_3: typeof Handle_OSD_Exception_STATUS_NO_MEMORY_3;
  Handle_OSD_Exception_STATUS_NO_MEMORY_4: typeof Handle_OSD_Exception_STATUS_NO_MEMORY_4;
  Handle_OSD_OSDError_1: typeof Handle_OSD_OSDError_1;
  Handle_OSD_OSDError_2: typeof Handle_OSD_OSDError_2;
  Handle_OSD_OSDError_3: typeof Handle_OSD_OSDError_3;
  Handle_OSD_OSDError_4: typeof Handle_OSD_OSDError_4;
  Handle_OSD_Signal_1: typeof Handle_OSD_Signal_1;
  Handle_OSD_Signal_2: typeof Handle_OSD_Signal_2;
  Handle_OSD_Signal_3: typeof Handle_OSD_Signal_3;
  Handle_OSD_Signal_4: typeof Handle_OSD_Signal_4;
  Handle_OSD_SIGBUS_1: typeof Handle_OSD_SIGBUS_1;
  Handle_OSD_SIGBUS_2: typeof Handle_OSD_SIGBUS_2;
  Handle_OSD_SIGBUS_3: typeof Handle_OSD_SIGBUS_3;
  Handle_OSD_SIGBUS_4: typeof Handle_OSD_SIGBUS_4;
  Handle_OSD_SIGHUP_1: typeof Handle_OSD_SIGHUP_1;
  Handle_OSD_SIGHUP_2: typeof Handle_OSD_SIGHUP_2;
  Handle_OSD_SIGHUP_3: typeof Handle_OSD_SIGHUP_3;
  Handle_OSD_SIGHUP_4: typeof Handle_OSD_SIGHUP_4;
  Handle_OSD_SIGILL_1: typeof Handle_OSD_SIGILL_1;
  Handle_OSD_SIGILL_2: typeof Handle_OSD_SIGILL_2;
  Handle_OSD_SIGILL_3: typeof Handle_OSD_SIGILL_3;
  Handle_OSD_SIGILL_4: typeof Handle_OSD_SIGILL_4;
  Handle_OSD_SIGINT_1: typeof Handle_OSD_SIGINT_1;
  Handle_OSD_SIGINT_2: typeof Handle_OSD_SIGINT_2;
  Handle_OSD_SIGINT_3: typeof Handle_OSD_SIGINT_3;
  Handle_OSD_SIGINT_4: typeof Handle_OSD_SIGINT_4;
  Handle_OSD_SIGKILL_1: typeof Handle_OSD_SIGKILL_1;
  Handle_OSD_SIGKILL_2: typeof Handle_OSD_SIGKILL_2;
  Handle_OSD_SIGKILL_3: typeof Handle_OSD_SIGKILL_3;
  Handle_OSD_SIGKILL_4: typeof Handle_OSD_SIGKILL_4;
  Handle_OSD_SIGQUIT_1: typeof Handle_OSD_SIGQUIT_1;
  Handle_OSD_SIGQUIT_2: typeof Handle_OSD_SIGQUIT_2;
  Handle_OSD_SIGQUIT_3: typeof Handle_OSD_SIGQUIT_3;
  Handle_OSD_SIGQUIT_4: typeof Handle_OSD_SIGQUIT_4;
  Handle_OSD_SIGSEGV_1: typeof Handle_OSD_SIGSEGV_1;
  Handle_OSD_SIGSEGV_2: typeof Handle_OSD_SIGSEGV_2;
  Handle_OSD_SIGSEGV_3: typeof Handle_OSD_SIGSEGV_3;
  Handle_OSD_SIGSEGV_4: typeof Handle_OSD_SIGSEGV_4;
  Handle_OSD_SIGSYS_1: typeof Handle_OSD_SIGSYS_1;
  Handle_OSD_SIGSYS_2: typeof Handle_OSD_SIGSYS_2;
  Handle_OSD_SIGSYS_3: typeof Handle_OSD_SIGSYS_3;
  Handle_OSD_SIGSYS_4: typeof Handle_OSD_SIGSYS_4;
  Handle_Plugin_Failure_1: typeof Handle_Plugin_Failure_1;
  Handle_Plugin_Failure_2: typeof Handle_Plugin_Failure_2;
  Handle_Plugin_Failure_3: typeof Handle_Plugin_Failure_3;
  Handle_Plugin_Failure_4: typeof Handle_Plugin_Failure_4;
  Quantity_Array2OfColor_1: typeof Quantity_Array2OfColor_1;
  Quantity_Array2OfColor_2: typeof Quantity_Array2OfColor_2;
  Quantity_Array2OfColor_3: typeof Quantity_Array2OfColor_3;
  Quantity_Array2OfColor_4: typeof Quantity_Array2OfColor_4;
  Quantity_Array2OfColor_5: typeof Quantity_Array2OfColor_5;
  Handle_Quantity_DateDefinitionError_1: typeof Handle_Quantity_DateDefinitionError_1;
  Handle_Quantity_DateDefinitionError_2: typeof Handle_Quantity_DateDefinitionError_2;
  Handle_Quantity_DateDefinitionError_3: typeof Handle_Quantity_DateDefinitionError_3;
  Handle_Quantity_DateDefinitionError_4: typeof Handle_Quantity_DateDefinitionError_4;
  Handle_Quantity_PeriodDefinitionError_1: typeof Handle_Quantity_PeriodDefinitionError_1;
  Handle_Quantity_PeriodDefinitionError_2: typeof Handle_Quantity_PeriodDefinitionError_2;
  Handle_Quantity_PeriodDefinitionError_3: typeof Handle_Quantity_PeriodDefinitionError_3;
  Handle_Quantity_PeriodDefinitionError_4: typeof Handle_Quantity_PeriodDefinitionError_4;
  Resource_DataMapOfAsciiStringExtendedString_1: typeof Resource_DataMapOfAsciiStringExtendedString_1;
  Resource_DataMapOfAsciiStringExtendedString_2: typeof Resource_DataMapOfAsciiStringExtendedString_2;
  Resource_DataMapOfAsciiStringExtendedString_3: typeof Resource_DataMapOfAsciiStringExtendedString_3;
  Handle_Resource_Manager_1: typeof Handle_Resource_Manager_1;
  Handle_Resource_Manager_2: typeof Handle_Resource_Manager_2;
  Handle_Resource_Manager_3: typeof Handle_Resource_Manager_3;
  Handle_Resource_Manager_4: typeof Handle_Resource_Manager_4;
  Handle_Resource_NoSuchResource_1: typeof Handle_Resource_NoSuchResource_1;
  Handle_Resource_NoSuchResource_2: typeof Handle_Resource_NoSuchResource_2;
  Handle_Resource_NoSuchResource_3: typeof Handle_Resource_NoSuchResource_3;
  Handle_Resource_NoSuchResource_4: typeof Handle_Resource_NoSuchResource_4;
  Handle_Standard_NullValue_1: typeof Handle_Standard_NullValue_1;
  Handle_Standard_NullValue_2: typeof Handle_Standard_NullValue_2;
  Handle_Standard_NullValue_3: typeof Handle_Standard_NullValue_3;
  Handle_Standard_NullValue_4: typeof Handle_Standard_NullValue_4;
  Handle_Standard_AbortiveTransaction_1: typeof Handle_Standard_AbortiveTransaction_1;
  Handle_Standard_AbortiveTransaction_2: typeof Handle_Standard_AbortiveTransaction_2;
  Handle_Standard_AbortiveTransaction_3: typeof Handle_Standard_AbortiveTransaction_3;
  Handle_Standard_AbortiveTransaction_4: typeof Handle_Standard_AbortiveTransaction_4;
  Handle_Standard_NumericError_1: typeof Handle_Standard_NumericError_1;
  Handle_Standard_NumericError_2: typeof Handle_Standard_NumericError_2;
  Handle_Standard_NumericError_3: typeof Handle_Standard_NumericError_3;
  Handle_Standard_NumericError_4: typeof Handle_Standard_NumericError_4;
  Handle_Standard_DivideByZero_1: typeof Handle_Standard_DivideByZero_1;
  Handle_Standard_DivideByZero_2: typeof Handle_Standard_DivideByZero_2;
  Handle_Standard_DivideByZero_3: typeof Handle_Standard_DivideByZero_3;
  Handle_Standard_DivideByZero_4: typeof Handle_Standard_DivideByZero_4;
  Handle_Standard_LicenseError_1: typeof Handle_Standard_LicenseError_1;
  Handle_Standard_LicenseError_2: typeof Handle_Standard_LicenseError_2;
  Handle_Standard_LicenseError_3: typeof Handle_Standard_LicenseError_3;
  Handle_Standard_LicenseError_4: typeof Handle_Standard_LicenseError_4;
  Handle_Standard_LicenseNotFound_1: typeof Handle_Standard_LicenseNotFound_1;
  Handle_Standard_LicenseNotFound_2: typeof Handle_Standard_LicenseNotFound_2;
  Handle_Standard_LicenseNotFound_3: typeof Handle_Standard_LicenseNotFound_3;
  Handle_Standard_LicenseNotFound_4: typeof Handle_Standard_LicenseNotFound_4;
  Handle_Standard_NoMoreObject_1: typeof Handle_Standard_NoMoreObject_1;
  Handle_Standard_NoMoreObject_2: typeof Handle_Standard_NoMoreObject_2;
  Handle_Standard_NoMoreObject_3: typeof Handle_Standard_NoMoreObject_3;
  Handle_Standard_NoMoreObject_4: typeof Handle_Standard_NoMoreObject_4;
  Handle_Standard_Overflow_1: typeof Handle_Standard_Overflow_1;
  Handle_Standard_Overflow_2: typeof Handle_Standard_Overflow_2;
  Handle_Standard_Overflow_3: typeof Handle_Standard_Overflow_3;
  Handle_Standard_Overflow_4: typeof Handle_Standard_Overflow_4;
  Handle_Standard_TooManyUsers_1: typeof Handle_Standard_TooManyUsers_1;
  Handle_Standard_TooManyUsers_2: typeof Handle_Standard_TooManyUsers_2;
  Handle_Standard_TooManyUsers_3: typeof Handle_Standard_TooManyUsers_3;
  Handle_Standard_TooManyUsers_4: typeof Handle_Standard_TooManyUsers_4;
  Handle_Standard_Underflow_1: typeof Handle_Standard_Underflow_1;
  Handle_Standard_Underflow_2: typeof Handle_Standard_Underflow_2;
  Handle_Standard_Underflow_3: typeof Handle_Standard_Underflow_3;
  Handle_Standard_Underflow_4: typeof Handle_Standard_Underflow_4;
  Handle_StdFail_Undefined_1: typeof Handle_StdFail_Undefined_1;
  Handle_StdFail_Undefined_2: typeof Handle_StdFail_Undefined_2;
  Handle_StdFail_Undefined_3: typeof Handle_StdFail_Undefined_3;
  Handle_StdFail_Undefined_4: typeof Handle_StdFail_Undefined_4;
  Handle_StdFail_UndefinedValue_1: typeof Handle_StdFail_UndefinedValue_1;
  Handle_StdFail_UndefinedValue_2: typeof Handle_StdFail_UndefinedValue_2;
  Handle_StdFail_UndefinedValue_3: typeof Handle_StdFail_UndefinedValue_3;
  Handle_StdFail_UndefinedValue_4: typeof Handle_StdFail_UndefinedValue_4;
  TColStd_Array1OfExtendedString_1: typeof TColStd_Array1OfExtendedString_1;
  TColStd_Array1OfExtendedString_2: typeof TColStd_Array1OfExtendedString_2;
  TColStd_Array1OfExtendedString_3: typeof TColStd_Array1OfExtendedString_3;
  TColStd_Array1OfExtendedString_4: typeof TColStd_Array1OfExtendedString_4;
  TColStd_Array1OfExtendedString_5: typeof TColStd_Array1OfExtendedString_5;
  Handle_TColStd_HArray1OfExtendedString_1: typeof Handle_TColStd_HArray1OfExtendedString_1;
  Handle_TColStd_HArray1OfExtendedString_2: typeof Handle_TColStd_HArray1OfExtendedString_2;
  Handle_TColStd_HArray1OfExtendedString_3: typeof Handle_TColStd_HArray1OfExtendedString_3;
  Handle_TColStd_HArray1OfExtendedString_4: typeof Handle_TColStd_HArray1OfExtendedString_4;
  Handle_Storage_CallBack_1: typeof Handle_Storage_CallBack_1;
  Handle_Storage_CallBack_2: typeof Handle_Storage_CallBack_2;
  Handle_Storage_CallBack_3: typeof Handle_Storage_CallBack_3;
  Handle_Storage_CallBack_4: typeof Handle_Storage_CallBack_4;
  Handle_Storage_TypedCallBack_1: typeof Handle_Storage_TypedCallBack_1;
  Handle_Storage_TypedCallBack_2: typeof Handle_Storage_TypedCallBack_2;
  Handle_Storage_TypedCallBack_3: typeof Handle_Storage_TypedCallBack_3;
  Handle_Storage_TypedCallBack_4: typeof Handle_Storage_TypedCallBack_4;
  Handle_Storage_DefaultCallBack_1: typeof Handle_Storage_DefaultCallBack_1;
  Handle_Storage_DefaultCallBack_2: typeof Handle_Storage_DefaultCallBack_2;
  Handle_Storage_DefaultCallBack_3: typeof Handle_Storage_DefaultCallBack_3;
  Handle_Storage_DefaultCallBack_4: typeof Handle_Storage_DefaultCallBack_4;
  Handle_Storage_HArrayOfCallBack_1: typeof Handle_Storage_HArrayOfCallBack_1;
  Handle_Storage_HArrayOfCallBack_2: typeof Handle_Storage_HArrayOfCallBack_2;
  Handle_Storage_HArrayOfCallBack_3: typeof Handle_Storage_HArrayOfCallBack_3;
  Handle_Storage_HArrayOfCallBack_4: typeof Handle_Storage_HArrayOfCallBack_4;
  Handle_Storage_HPArray_1: typeof Handle_Storage_HPArray_1;
  Handle_Storage_HPArray_2: typeof Handle_Storage_HPArray_2;
  Handle_Storage_HPArray_3: typeof Handle_Storage_HPArray_3;
  Handle_Storage_HPArray_4: typeof Handle_Storage_HPArray_4;
  Handle_Storage_InternalData_1: typeof Handle_Storage_InternalData_1;
  Handle_Storage_InternalData_2: typeof Handle_Storage_InternalData_2;
  Handle_Storage_InternalData_3: typeof Handle_Storage_InternalData_3;
  Handle_Storage_InternalData_4: typeof Handle_Storage_InternalData_4;
  Handle_Storage_Schema_1: typeof Handle_Storage_Schema_1;
  Handle_Storage_Schema_2: typeof Handle_Storage_Schema_2;
  Handle_Storage_Schema_3: typeof Handle_Storage_Schema_3;
  Handle_Storage_Schema_4: typeof Handle_Storage_Schema_4;
  Handle_Storage_HArrayOfSchema_1: typeof Handle_Storage_HArrayOfSchema_1;
  Handle_Storage_HArrayOfSchema_2: typeof Handle_Storage_HArrayOfSchema_2;
  Handle_Storage_HArrayOfSchema_3: typeof Handle_Storage_HArrayOfSchema_3;
  Handle_Storage_HArrayOfSchema_4: typeof Handle_Storage_HArrayOfSchema_4;
  Handle_Storage_RootData_1: typeof Handle_Storage_RootData_1;
  Handle_Storage_RootData_2: typeof Handle_Storage_RootData_2;
  Handle_Storage_RootData_3: typeof Handle_Storage_RootData_3;
  Handle_Storage_RootData_4: typeof Handle_Storage_RootData_4;
  Handle_Storage_StreamReadError_1: typeof Handle_Storage_StreamReadError_1;
  Handle_Storage_StreamReadError_2: typeof Handle_Storage_StreamReadError_2;
  Handle_Storage_StreamReadError_3: typeof Handle_Storage_StreamReadError_3;
  Handle_Storage_StreamReadError_4: typeof Handle_Storage_StreamReadError_4;
  Handle_Storage_StreamExtCharParityError_1: typeof Handle_Storage_StreamExtCharParityError_1;
  Handle_Storage_StreamExtCharParityError_2: typeof Handle_Storage_StreamExtCharParityError_2;
  Handle_Storage_StreamExtCharParityError_3: typeof Handle_Storage_StreamExtCharParityError_3;
  Handle_Storage_StreamExtCharParityError_4: typeof Handle_Storage_StreamExtCharParityError_4;
  Handle_Storage_StreamFormatError_1: typeof Handle_Storage_StreamFormatError_1;
  Handle_Storage_StreamFormatError_2: typeof Handle_Storage_StreamFormatError_2;
  Handle_Storage_StreamFormatError_3: typeof Handle_Storage_StreamFormatError_3;
  Handle_Storage_StreamFormatError_4: typeof Handle_Storage_StreamFormatError_4;
  Handle_Storage_StreamModeError_1: typeof Handle_Storage_StreamModeError_1;
  Handle_Storage_StreamModeError_2: typeof Handle_Storage_StreamModeError_2;
  Handle_Storage_StreamModeError_3: typeof Handle_Storage_StreamModeError_3;
  Handle_Storage_StreamModeError_4: typeof Handle_Storage_StreamModeError_4;
  Handle_Storage_StreamTypeMismatchError_1: typeof Handle_Storage_StreamTypeMismatchError_1;
  Handle_Storage_StreamTypeMismatchError_2: typeof Handle_Storage_StreamTypeMismatchError_2;
  Handle_Storage_StreamTypeMismatchError_3: typeof Handle_Storage_StreamTypeMismatchError_3;
  Handle_Storage_StreamTypeMismatchError_4: typeof Handle_Storage_StreamTypeMismatchError_4;
  Handle_Storage_StreamUnknownTypeError_1: typeof Handle_Storage_StreamUnknownTypeError_1;
  Handle_Storage_StreamUnknownTypeError_2: typeof Handle_Storage_StreamUnknownTypeError_2;
  Handle_Storage_StreamUnknownTypeError_3: typeof Handle_Storage_StreamUnknownTypeError_3;
  Handle_Storage_StreamUnknownTypeError_4: typeof Handle_Storage_StreamUnknownTypeError_4;
  Handle_Storage_StreamWriteError_1: typeof Handle_Storage_StreamWriteError_1;
  Handle_Storage_StreamWriteError_2: typeof Handle_Storage_StreamWriteError_2;
  Handle_Storage_StreamWriteError_3: typeof Handle_Storage_StreamWriteError_3;
  Handle_Storage_StreamWriteError_4: typeof Handle_Storage_StreamWriteError_4;
  Handle_Storage_TypeData_1: typeof Handle_Storage_TypeData_1;
  Handle_Storage_TypeData_2: typeof Handle_Storage_TypeData_2;
  Handle_Storage_TypeData_3: typeof Handle_Storage_TypeData_3;
  Handle_Storage_TypeData_4: typeof Handle_Storage_TypeData_4;
  TColStd_Array1OfCharacter_1: typeof TColStd_Array1OfCharacter_1;
  TColStd_Array1OfCharacter_2: typeof TColStd_Array1OfCharacter_2;
  TColStd_Array1OfCharacter_3: typeof TColStd_Array1OfCharacter_3;
  TColStd_Array1OfCharacter_4: typeof TColStd_Array1OfCharacter_4;
  TColStd_Array1OfCharacter_5: typeof TColStd_Array1OfCharacter_5;
  TColStd_Array2OfCharacter_1: typeof TColStd_Array2OfCharacter_1;
  TColStd_Array2OfCharacter_2: typeof TColStd_Array2OfCharacter_2;
  TColStd_Array2OfCharacter_3: typeof TColStd_Array2OfCharacter_3;
  TColStd_Array2OfCharacter_4: typeof TColStd_Array2OfCharacter_4;
  TColStd_Array2OfCharacter_5: typeof TColStd_Array2OfCharacter_5;
  Handle_TColStd_HArray1OfCharacter_1: typeof Handle_TColStd_HArray1OfCharacter_1;
  Handle_TColStd_HArray1OfCharacter_2: typeof Handle_TColStd_HArray1OfCharacter_2;
  Handle_TColStd_HArray1OfCharacter_3: typeof Handle_TColStd_HArray1OfCharacter_3;
  Handle_TColStd_HArray1OfCharacter_4: typeof Handle_TColStd_HArray1OfCharacter_4;
  Handle_TColStd_HArray2OfBoolean_1: typeof Handle_TColStd_HArray2OfBoolean_1;
  Handle_TColStd_HArray2OfBoolean_2: typeof Handle_TColStd_HArray2OfBoolean_2;
  Handle_TColStd_HArray2OfBoolean_3: typeof Handle_TColStd_HArray2OfBoolean_3;
  Handle_TColStd_HArray2OfBoolean_4: typeof Handle_TColStd_HArray2OfBoolean_4;
  Handle_TColStd_HArray2OfCharacter_1: typeof Handle_TColStd_HArray2OfCharacter_1;
  Handle_TColStd_HArray2OfCharacter_2: typeof Handle_TColStd_HArray2OfCharacter_2;
  Handle_TColStd_HArray2OfCharacter_3: typeof Handle_TColStd_HArray2OfCharacter_3;
  Handle_TColStd_HArray2OfCharacter_4: typeof Handle_TColStd_HArray2OfCharacter_4;
  Handle_TColStd_HSequenceOfExtendedString_1: typeof Handle_TColStd_HSequenceOfExtendedString_1;
  Handle_TColStd_HSequenceOfExtendedString_2: typeof Handle_TColStd_HSequenceOfExtendedString_2;
  Handle_TColStd_HSequenceOfExtendedString_3: typeof Handle_TColStd_HSequenceOfExtendedString_3;
  Handle_TColStd_HSequenceOfExtendedString_4: typeof Handle_TColStd_HSequenceOfExtendedString_4;
  TColStd_IndexedMapOfReal_1: typeof TColStd_IndexedMapOfReal_1;
  TColStd_IndexedMapOfReal_2: typeof TColStd_IndexedMapOfReal_2;
  TColStd_IndexedMapOfReal_3: typeof TColStd_IndexedMapOfReal_3;
  TColStd_MapOfReal_1: typeof TColStd_MapOfReal_1;
  TColStd_MapOfReal_2: typeof TColStd_MapOfReal_2;
  TColStd_MapOfReal_3: typeof TColStd_MapOfReal_3;
  Handle_TCollection_MapNode_1: typeof Handle_TCollection_MapNode_1;
  Handle_TCollection_MapNode_2: typeof Handle_TCollection_MapNode_2;
  Handle_TCollection_MapNode_3: typeof Handle_TCollection_MapNode_3;
  Handle_TCollection_MapNode_4: typeof Handle_TCollection_MapNode_4;
  Handle_TCollection_SeqNode_1: typeof Handle_TCollection_SeqNode_1;
  Handle_TCollection_SeqNode_2: typeof Handle_TCollection_SeqNode_2;
  Handle_TCollection_SeqNode_3: typeof Handle_TCollection_SeqNode_3;
  Handle_TCollection_SeqNode_4: typeof Handle_TCollection_SeqNode_4;
  TShort_Array2OfShortReal_1: typeof TShort_Array2OfShortReal_1;
  TShort_Array2OfShortReal_2: typeof TShort_Array2OfShortReal_2;
  TShort_Array2OfShortReal_3: typeof TShort_Array2OfShortReal_3;
  TShort_Array2OfShortReal_4: typeof TShort_Array2OfShortReal_4;
  TShort_Array2OfShortReal_5: typeof TShort_Array2OfShortReal_5;
  Handle_TShort_HArray2OfShortReal_1: typeof Handle_TShort_HArray2OfShortReal_1;
  Handle_TShort_HArray2OfShortReal_2: typeof Handle_TShort_HArray2OfShortReal_2;
  Handle_TShort_HArray2OfShortReal_3: typeof Handle_TShort_HArray2OfShortReal_3;
  Handle_TShort_HArray2OfShortReal_4: typeof Handle_TShort_HArray2OfShortReal_4;
  TShort_SequenceOfShortReal_1: typeof TShort_SequenceOfShortReal_1;
  TShort_SequenceOfShortReal_2: typeof TShort_SequenceOfShortReal_2;
  TShort_SequenceOfShortReal_3: typeof TShort_SequenceOfShortReal_3;
  Handle_TShort_HSequenceOfShortReal_1: typeof Handle_TShort_HSequenceOfShortReal_1;
  Handle_TShort_HSequenceOfShortReal_2: typeof Handle_TShort_HSequenceOfShortReal_2;
  Handle_TShort_HSequenceOfShortReal_3: typeof Handle_TShort_HSequenceOfShortReal_3;
  Handle_TShort_HSequenceOfShortReal_4: typeof Handle_TShort_HSequenceOfShortReal_4;
  Handle_Units_Dimensions_1: typeof Handle_Units_Dimensions_1;
  Handle_Units_Dimensions_2: typeof Handle_Units_Dimensions_2;
  Handle_Units_Dimensions_3: typeof Handle_Units_Dimensions_3;
  Handle_Units_Dimensions_4: typeof Handle_Units_Dimensions_4;
  Handle_Units_Unit_1: typeof Handle_Units_Unit_1;
  Handle_Units_Unit_2: typeof Handle_Units_Unit_2;
  Handle_Units_Unit_3: typeof Handle_Units_Unit_3;
  Handle_Units_Unit_4: typeof Handle_Units_Unit_4;
  Handle_Units_UnitsSequence_1: typeof Handle_Units_UnitsSequence_1;
  Handle_Units_UnitsSequence_2: typeof Handle_Units_UnitsSequence_2;
  Handle_Units_UnitsSequence_3: typeof Handle_Units_UnitsSequence_3;
  Handle_Units_UnitsSequence_4: typeof Handle_Units_UnitsSequence_4;
  Handle_Units_Quantity_1: typeof Handle_Units_Quantity_1;
  Handle_Units_Quantity_2: typeof Handle_Units_Quantity_2;
  Handle_Units_Quantity_3: typeof Handle_Units_Quantity_3;
  Handle_Units_Quantity_4: typeof Handle_Units_Quantity_4;
  Handle_Units_QuantitiesSequence_1: typeof Handle_Units_QuantitiesSequence_1;
  Handle_Units_QuantitiesSequence_2: typeof Handle_Units_QuantitiesSequence_2;
  Handle_Units_QuantitiesSequence_3: typeof Handle_Units_QuantitiesSequence_3;
  Handle_Units_QuantitiesSequence_4: typeof Handle_Units_QuantitiesSequence_4;
  Handle_Units_Token_1: typeof Handle_Units_Token_1;
  Handle_Units_Token_2: typeof Handle_Units_Token_2;
  Handle_Units_Token_3: typeof Handle_Units_Token_3;
  Handle_Units_Token_4: typeof Handle_Units_Token_4;
  Handle_Units_TokensSequence_1: typeof Handle_Units_TokensSequence_1;
  Handle_Units_TokensSequence_2: typeof Handle_Units_TokensSequence_2;
  Handle_Units_TokensSequence_3: typeof Handle_Units_TokensSequence_3;
  Handle_Units_TokensSequence_4: typeof Handle_Units_TokensSequence_4;
  Handle_Units_Lexicon_1: typeof Handle_Units_Lexicon_1;
  Handle_Units_Lexicon_2: typeof Handle_Units_Lexicon_2;
  Handle_Units_Lexicon_3: typeof Handle_Units_Lexicon_3;
  Handle_Units_Lexicon_4: typeof Handle_Units_Lexicon_4;
  Handle_Units_NoSuchType_1: typeof Handle_Units_NoSuchType_1;
  Handle_Units_NoSuchType_2: typeof Handle_Units_NoSuchType_2;
  Handle_Units_NoSuchType_3: typeof Handle_Units_NoSuchType_3;
  Handle_Units_NoSuchType_4: typeof Handle_Units_NoSuchType_4;
  Handle_Units_NoSuchUnit_1: typeof Handle_Units_NoSuchUnit_1;
  Handle_Units_NoSuchUnit_2: typeof Handle_Units_NoSuchUnit_2;
  Handle_Units_NoSuchUnit_3: typeof Handle_Units_NoSuchUnit_3;
  Handle_Units_NoSuchUnit_4: typeof Handle_Units_NoSuchUnit_4;
  Handle_Units_ShiftedToken_1: typeof Handle_Units_ShiftedToken_1;
  Handle_Units_ShiftedToken_2: typeof Handle_Units_ShiftedToken_2;
  Handle_Units_ShiftedToken_3: typeof Handle_Units_ShiftedToken_3;
  Handle_Units_ShiftedToken_4: typeof Handle_Units_ShiftedToken_4;
  Handle_Units_ShiftedUnit_1: typeof Handle_Units_ShiftedUnit_1;
  Handle_Units_ShiftedUnit_2: typeof Handle_Units_ShiftedUnit_2;
  Handle_Units_ShiftedUnit_3: typeof Handle_Units_ShiftedUnit_3;
  Handle_Units_ShiftedUnit_4: typeof Handle_Units_ShiftedUnit_4;
  Handle_Units_UnitsDictionary_1: typeof Handle_Units_UnitsDictionary_1;
  Handle_Units_UnitsDictionary_2: typeof Handle_Units_UnitsDictionary_2;
  Handle_Units_UnitsDictionary_3: typeof Handle_Units_UnitsDictionary_3;
  Handle_Units_UnitsDictionary_4: typeof Handle_Units_UnitsDictionary_4;
  Handle_Units_UnitsLexicon_1: typeof Handle_Units_UnitsLexicon_1;
  Handle_Units_UnitsLexicon_2: typeof Handle_Units_UnitsLexicon_2;
  Handle_Units_UnitsLexicon_3: typeof Handle_Units_UnitsLexicon_3;
  Handle_Units_UnitsLexicon_4: typeof Handle_Units_UnitsLexicon_4;
  Handle_Units_UnitsSystem_1: typeof Handle_Units_UnitsSystem_1;
  Handle_Units_UnitsSystem_2: typeof Handle_Units_UnitsSystem_2;
  Handle_Units_UnitsSystem_3: typeof Handle_Units_UnitsSystem_3;
  Handle_Units_UnitsSystem_4: typeof Handle_Units_UnitsSystem_4;
  Standard_JsonKey: typeof Standard_JsonKey;
  Quantity_NameOfColor: typeof Quantity_NameOfColor;
  Quantity_TypeOfColor: typeof Quantity_TypeOfColor;
  OSD_SysType: typeof OSD_SysType;
  Standard_HandlerStatus: typeof Standard_HandlerStatus;
  Message_Gravity: typeof Message_Gravity;
  Message_MetricType: typeof Message_MetricType;
  NCollection_CellFilter_Action: typeof NCollection_CellFilter_Action;
  Message_StatusType: typeof Message_StatusType;
  Message_Status: typeof Message_Status;
  Storage_Error: typeof Storage_Error;
  Storage_OpenMode: typeof Storage_OpenMode;
  Message_ConsoleColor: typeof Message_ConsoleColor;
  OSD_SignalMode: typeof OSD_SignalMode;
  OSD_WhoAmI: typeof OSD_WhoAmI;
  OSD_FromWhere: typeof OSD_FromWhere;
  OSD_KindFile: typeof OSD_KindFile;
  OSD_LockType: typeof OSD_LockType;
  OSD_OpenMode: typeof OSD_OpenMode;
  OSD_OEMType: typeof OSD_OEMType;
  OSD_LoadMode: typeof OSD_LoadMode;
  OSD_SingleProtection: typeof OSD_SingleProtection;
  Quantity_PhysicalQuantity: typeof Quantity_PhysicalQuantity;
  Resource_FormatType: typeof Resource_FormatType;
  Storage_SolveMode: typeof Storage_SolveMode;
  TCollection_Side: typeof TCollection_Side;
  UnitsAPI_SystemUnits: typeof UnitsAPI_SystemUnits;
};
