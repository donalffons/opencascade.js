/**
 * Indexed map of ASCII string key-value pairs.
 *
 * Used for metadata exchange in data export operations
 * (e.g. GLTF writer metadata passed to `RWGltf_CafWriter.Perform`).
 */
export declare class TColStd_IndexedDataMapOfStringString {
  constructor();
  /** Release the underlying C++ object to prevent memory leaks. */
  delete(): void;
  [Symbol.dispose](): void;
}

/**
 * Static helper for downcasting generic `TopoDS_Shape` to concrete topology subtypes.
 *
 * OCCT shapes are polymorphic — `BRepAlgoAPI_Fuse.Shape()` returns `TopoDS_Shape`,
 * but algorithms like `BRepFilletAPI_MakeFillet` require `TopoDS_Edge` or `TopoDS_Face`.
 * Use these static casts after verifying the shape type via `TopExp_Explorer`.
 */
export declare class TopoDS {
  /**
   * Downcast a generic shape to an edge.
   *
   * @param shape - The shape to cast (must have `ShapeType() === TopAbs_EDGE`).
   * @returns The same shape typed as `TopoDS_Edge`.
   */
  static Edge(shape: TopoDS_Shape): TopoDS_Edge;
  /**
   * Downcast a generic shape to a wire.
   *
   * @param shape - The shape to cast (must have `ShapeType() === TopAbs_WIRE`).
   * @returns The same shape typed as `TopoDS_Wire`.
   */
  static Wire(shape: TopoDS_Shape): TopoDS_Wire;
  /**
   * Downcast a generic shape to a face.
   *
   * @param shape - The shape to cast (must have `ShapeType() === TopAbs_FACE`).
   * @returns The same shape typed as `TopoDS_Face`.
   */
  static Face(shape: TopoDS_Shape): TopoDS_Face;
  /**
   * Downcast a generic shape to a vertex.
   *
   * @param shape - The shape to cast (must have `ShapeType() === TopAbs_VERTEX`).
   * @returns The same shape typed as `TopoDS_Vertex`.
   */
  static Vertex(shape: TopoDS_Shape): TopoDS_Vertex;
  /**
   * Downcast a generic shape to a shell.
   *
   * @param shape - The shape to cast (must have `ShapeType() === TopAbs_SHELL`).
   * @returns The same shape typed as `TopoDS_Shell`.
   */
  static Shell(shape: TopoDS_Shape): TopoDS_Shell;
  /**
   * Downcast a generic shape to a solid.
   *
   * @param shape - The shape to cast (must have `ShapeType() === TopAbs_SOLID`).
   * @returns The same shape typed as `TopoDS_Solid`.
   */
  static Solid(shape: TopoDS_Shape): TopoDS_Solid;
  /**
   * Downcast a generic shape to a compound.
   *
   * @param shape - The shape to cast (must have `ShapeType() === TopAbs_COMPOUND`).
   * @returns The same shape typed as `TopoDS_Compound`.
   */
  static Compound(shape: TopoDS_Shape): TopoDS_Compound;
}

/**
 * libcascade runtime helpers for exception introspection.
 *
 * Provides access to OCCT exception data when exception handling is enabled
 * (`-fexceptions` / `-sDISABLE_EXCEPTION_CATCHING=0`).
 */
export declare class OCJS {
  /**
   * Extract the `Standard_Failure` data from a caught Emscripten exception pointer.
   *
   * @param exceptionPtr - The raw exception pointer from the Emscripten catch block.
   * @returns The OCCT failure object containing the exception type and message.
   */
  static getStandard_FailureData(exceptionPtr: number): Standard_Failure;
  /**
   * Whether this WASM build was compiled with exception handling enabled.
   *
   * @returns `true` if `-fexceptions` / `-sDISABLE_EXCEPTION_CATCHING=0` was used.
   */
  static exceptionsEnabled(): boolean;
  /** Release the underlying C++ object to prevent memory leaks. */
  delete(): void;
  [Symbol.dispose](): void;
}

/** OCCT boolean primitive, mapped to JS `boolean`. */
type Standard_Boolean = boolean;
/** OCCT unsigned byte primitive (0–255), mapped to JS `number`. */
type Standard_Byte = number;
/** OCCT single character, mapped to JS `string`. */
type Standard_Character = string;
/** OCCT null-terminated C string, mapped to JS `string`. */
type Standard_CString = string;
/** OCCT signed integer primitive, mapped to JS `number`. */
type Standard_Integer = number;
/** OCCT double-precision floating-point primitive, mapped to JS `number`. */
type Standard_Real = number;
/** OCCT single-precision floating-point primitive, mapped to JS `number`. */
type Standard_ShortReal = number;
/** OCCT unsigned size/count primitive, mapped to JS `number`. */
type Standard_Size = number;
