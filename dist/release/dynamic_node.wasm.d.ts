declare const libName = "./dynamic_node.wasm.d.ts";
export default libName;

type Standard_Boolean = boolean;
type Standard_Byte = number;
type Standard_Character = string;
type Standard_CString = string;
type Standard_Integer = number;
type Standard_Real = number;
type Standard_ShortReal = number;
type Standard_Size = number;

export declare class LibraryLoader {
  loadLibrary(filename: string): void;
}

export declare type dynamic_nodeLib = {
};
