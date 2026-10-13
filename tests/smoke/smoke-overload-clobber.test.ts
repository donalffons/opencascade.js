/**
 * Verifies representative same-arity overloads remain callable without one registration
 * shadowing another. Coverage includes XCAF color tools and NCollection append/find operations.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: same-arity overload dispatch (no clobber)', () => {
  beforeAll(async () => { await initOC(); });

  it('XCAFDoc_ColorTool::SetColor dispatches to the TopoDS_Shape overload without BindingError', () => {
    const oc = getOC();
    using extString = new oc.TCollection_ExtendedString();
    using doc = new oc.TDocStd_Document(extString);
    using mainLabel1 = doc.Main();
    using shapeTool = oc.XCAFDoc_DocumentTool.ShapeTool(mainLabel1);
    using mainLabel2 = doc.Main();
    using colorTool = oc.XCAFDoc_DocumentTool.ColorTool(mainLabel2);

    expect(shapeTool).toBeTruthy();
    expect(colorTool).toBeTruthy();

    using box = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
    using boxShape = box.Shape();
    using shapeLabel = shapeTool.NewShape();
    shapeTool.SetShape(shapeLabel, boxShape);

    using color = new oc.Quantity_Color(0.25, 0.5, 0.75, oc.Quantity_TypeOfColor.Quantity_TOC_RGB);

    // Pre-fix: SetColor(Shape, ...) BindingErrored because the (Label, ...) overload
    // was the last registration. Post-fix: a single val-dispatcher routes by
    // instanceof and the call lands on the Shape overload.
    expect(() =>
      colorTool.SetColor(boxShape, color, oc.XCAFDoc_ColorType.XCAFDoc_ColorGen),
    ).not.toThrow();

    using readBack = new oc.Quantity_Color();
    expect(colorTool.GetColor(boxShape, oc.XCAFDoc_ColorType.XCAFDoc_ColorGen, readBack)).toBe(true);
  });

  it('NCollection_List_TopoDS_Shape::Append accepts a single TopoDS_Shape', () => {
    const oc = getOC();
    using box = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
    using shape = box.Shape();
    using list = new oc.NCollection_List_TopoDS_Shape();

    expect(list.Size()).toBe(0);

    // Pre-fix: Append(Shape) clobbered by Append(Shape, Iterator&) and
    // threw BindingError. Post-fix: the unified dispatcher resolves the
    // single-argument shape variant cleanly.
    expect(() => {
      using disposable = list.Append(shape);
      disposable;
    }).not.toThrow();

    expect(list.Size()).toBe(1);
  });

  it('NCollection_IndexedMap exposes a primary FindKey(size_t) method', () => {
    const oc = getOC();
    using box = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
    using shape = box.Shape();
    using map = new oc.NCollection_IndexedMap_TopoDS_Shape_TopTools_ShapeMapHasher();

    using explorer = new oc.TopExp_Explorer(
      shape,
      oc.TopAbs_ShapeEnum.TopAbs_FACE,
      oc.TopAbs_ShapeEnum.TopAbs_SHAPE,
    );
    while (explorer.More()) {
      using current = explorer.Current();
      map.Add(current);
      explorer.Next();
    }
    expect(map.Size()).toBe(6);

    // Pre-fix: the C++-canonical dedup left FindKey(int) + FindKey(size_t)
    // as a doubly-ambiguous group with no primary emitted — only suffixed
    // FindKey_1 / FindKey_2 were callable. Post-fix: the V8-preferred
    // size_t overload survives dedup and FindKey is on the prototype.
    expect(typeof map.FindKey).toBe('function');

    using firstFace = map.FindKey(1);
    expect(firstFace.IsNull()).toBe(false);
  });
});
