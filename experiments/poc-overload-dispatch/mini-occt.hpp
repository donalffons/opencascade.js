// Synthetic mini-OCCT classes that reproduce the same overload shapes
// causing the 7 remaining OCJS V8 test failures. Shared between broken.cpp
// (current codegen pattern) and fixed.cpp (proposed FIX-A + FIX-B + FIX-C).
#pragma once
#include <string>
#include <cstddef>

// --- Argument-type stand-ins (real OCCT API has these) ---------------------

class TDF_Label {
public:
  int id;
  TDF_Label() : id(0) {}
  TDF_Label(int i) : id(i) {}
};

class Quantity_Color {
public:
  float r, g, b;
  Quantity_Color() : r(1), g(1), b(1) {}
  Quantity_Color(float r_, float g_, float b_) : r(r_), g(g_), b(b_) {}
};

class Quantity_ColorRGBA {
public:
  float r, g, b, a;
  Quantity_ColorRGBA() : r(1), g(1), b(1), a(1) {}
  Quantity_ColorRGBA(float r_, float g_, float b_, float a_) : r(r_), g(g_), b(b_), a(a_) {}
};

class TopoDS_Shape {
public:
  int kind;
  TopoDS_Shape() : kind(0) {}
  TopoDS_Shape(int k) : kind(k) {}
};

enum class XCAFDoc_ColorType { Generic, Surface, Curve };

// --- RC-A specimen 1: XCAFDoc_ColorTool::SetColor (6 class-typed overloads) ---
// Real OCCT signature is identical (DataExchange/TKXCAF/XCAFDoc/XCAFDoc_ColorTool.hxx).

class XCAFDoc_ColorTool {
public:
  mutable std::string lastCalled;

  void SetColor(const TDF_Label& L, const TDF_Label& colorL, XCAFDoc_ColorType t) const {
    lastCalled = "TDF_Label,TDF_Label,Type";
  }
  void SetColor(const TDF_Label& L, const Quantity_Color& c, XCAFDoc_ColorType t) const {
    lastCalled = "TDF_Label,Quantity_Color,Type";
  }
  void SetColor(const TDF_Label& L, const Quantity_ColorRGBA& c, XCAFDoc_ColorType t) const {
    lastCalled = "TDF_Label,Quantity_ColorRGBA,Type";
  }
  bool SetColor(const TopoDS_Shape& s, const TDF_Label& colorL, XCAFDoc_ColorType t) {
    lastCalled = "TopoDS_Shape,TDF_Label,Type";
    return true;
  }
  bool SetColor(const TopoDS_Shape& s, const Quantity_Color& c, XCAFDoc_ColorType t) {
    lastCalled = "TopoDS_Shape,Quantity_Color,Type";
    return true;
  }
  bool SetColor(const TopoDS_Shape& s, const Quantity_ColorRGBA& c, XCAFDoc_ColorType t) {
    lastCalled = "TopoDS_Shape,Quantity_ColorRGBA,Type";
    return true;
  }
};

// --- RC-A specimen 2: NCollection_List::Append (single-item vs splice) ----
// Mirrors NCollection_List_TopoDS_Shape (template inst surfaced in OCJS).

class NCollection_List_Shape {
public:
  mutable std::string lastCalled;
  size_t count = 0;

  // Single-item append (returns reference to inserted item).
  TopoDS_Shape& Append(const TopoDS_Shape& item) {
    lastCalled = "Append(TopoDS_Shape)";
    count++;
    static TopoDS_Shape last;
    last = item;
    return last;
  }
  // Splice another list into this list.
  void Append(NCollection_List_Shape& other) {
    lastCalled = "Append(NCollection_List_Shape)";
    count += other.count;
  }
};

// --- RC-B specimen: NCollection_IndexedMap::FindKey (size_t vs int) -------
// Mirrors NCollection_IndexedMap_TopoDS_Shape_TopTools_ShapeMapHasher's
// V8 parallel size_t/int overloads (NCollection size_t API migration #1212).

class NCollection_IndexedMap_Shape {
public:
  mutable std::string lastCalled;

  // V8 modern overload.
  TopoDS_Shape FindKey(size_t i) const {
    lastCalled = "FindKey(size_t)";
    return TopoDS_Shape(static_cast<int>(i));
  }
  // Legacy transitional alias kept for source compat in C++; JS-indistinguishable
  // from the size_t version.
  TopoDS_Shape FindKey(int i) const {
    lastCalled = "FindKey(int)";
    return TopoDS_Shape(i);
  }
};
