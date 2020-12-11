declare const libName = "./modules/TKSTL.wasm.d.ts";
export default libName;

type Standard_Boolean = boolean;
type Standard_Byte = number;
type Standard_Character = string;
type Standard_CString = string;
type Standard_Integer = number;
type Standard_Real = number;
type Standard_ShortReal = number;
type Standard_Size = number;

export declare class RWStl {
  constructor();
  WriteBinary(theMesh: Handle_Poly_Triangulation, thePath: OSD_Path, theProgress: Message_ProgressRange): Standard_Boolean;
  WriteAscii(theMesh: any, thePath: OSD_Path, theProgress: Message_ProgressRange): Standard_Boolean;
  ReadFile_1(theFile: OSD_Path, aProgInd: Message_ProgressRange): any;
  ReadFile_2(theFile: Standard_CString, aProgInd: Message_ProgressRange): any;
  ReadBinary(thePath: OSD_Path, theProgress: Message_ProgressRange): any;
  ReadAscii(thePath: OSD_Path, theProgress: Message_ProgressRange): any;
}

export declare class RWStl_Reader extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Read(theFile: string, theProgress: Message_ProgressRange): Standard_Boolean;
  IsAscii(theStream: Standard_IStream, isSeekgAvailable: boolean): Standard_Boolean;
  ReadBinary(theStream: Standard_IStream, theProgress: Message_ProgressRange): Standard_Boolean;
  ReadAscii(theStream: Standard_IStream, theBuffer: Standard_ReadLineBuffer, theUntilPos: any, theProgress: Message_ProgressRange): Standard_Boolean;
  AddNode(thePnt: gp_XYZ): Standard_Integer;
  AddTriangle(theN1: Standard_Integer, theN2: Standard_Integer, theN3: Standard_Integer): void;
}

export declare class StlAPI {
  constructor();
  Write(theShape: TopoDS_Shape, theFile: Standard_CString, theAsciiMode: Standard_Boolean): Standard_Boolean;
  Read(theShape: TopoDS_Shape, aFile: Standard_CString): Standard_Boolean;
}

export declare class StlAPI_Reader {
  constructor();
  Read(theShape: TopoDS_Shape, theFileName: Standard_CString): Standard_Boolean;
}

export declare class StlAPI_Writer {
  constructor()
  ASCIIMode(): Standard_Boolean;
  Write(theShape: TopoDS_Shape, theFileName: Standard_CString, theProgress: Message_ProgressRange): Standard_Boolean;
}

export declare type TKSTLLib = {
  StlAPI_Writer: typeof StlAPI_Writer;
};
