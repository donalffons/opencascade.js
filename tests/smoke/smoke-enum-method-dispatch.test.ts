/**
 * Smoke tests: Enum parameter dispatch in same-arity method overloads.
 *
 * Validates that instance methods with string enum parameters dispatch
 * correctly when multiple overloads share the same arity. The JS dispatch
 * system must map enum type IDs to a matchable JS type in cppTypeToJsType.
 *
 * Regression target: XCAFDoc_ColorTool.SetColor with Quantity_ColorRGBA
 * and XCAFDoc_ColorType enum — the enum parameter fails signature matching
 * because cppTypeToJsType returns a raw type ID instead of a wildcard.
 *
 * Patterns tested:
 * - SetColor(TDF_Label, Quantity_ColorRGBA, XCAFDoc_ColorType) dispatch
 * - SetColor(TDF_Label, Quantity_Color, XCAFDoc_ColorType) dispatch
 * - SetColor(TopoDS_Shape, Quantity_ColorRGBA, XCAFDoc_ColorType) dispatch
 * - GetColor with enum parameter retrieval
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: enum dispatch in same-arity method overloads', () => {
  beforeAll(async () => { await initOC(); });

  describe('XCAFDoc_ColorTool.SetColor with Quantity_ColorRGBA', () => {
    it('should dispatch SetColor(TDF_Label, Quantity_ColorRGBA, XCAFDoc_ColorType)', () => {
      const oc = getOC();
      using tCollectionExtendedstring = new oc.TCollection_ExtendedString();
      using doc = new oc.TDocStd_Document(tCollectionExtendedstring);
      using disposable = doc.Main();
      using shapeTool = oc.XCAFDoc_DocumentTool.ShapeTool(disposable);
      using disposable2 = doc.Main();
      using colorTool = oc.XCAFDoc_DocumentTool.ColorTool(disposable2);

      using box = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
      using label = shapeTool.NewShape();
      using boxShape = box.Shape();
      shapeTool.SetShape(label, boxShape);

      using colorRGBA = new oc.Quantity_ColorRGBA(0.8, 0.2, 0.2, 1.0);
      colorTool.SetColor(label, colorRGBA, oc.XCAFDoc_ColorType.XCAFDoc_ColorSurf);

      using inRetrievedColor = new oc.Quantity_ColorRGBA();
      const hasColor = oc.XCAFDoc_ColorTool.GetColor(
        label,
        oc.XCAFDoc_ColorType.XCAFDoc_ColorSurf,
        inRetrievedColor,
      );
      expect(hasColor).toBe(true);
    });

    it('should dispatch SetColor(TopoDS_Shape, Quantity_ColorRGBA, XCAFDoc_ColorType)', () => {
      const oc = getOC();
      using tCollectionExtendedstring2 = new oc.TCollection_ExtendedString();
      using doc = new oc.TDocStd_Document(tCollectionExtendedstring2);
      using disposable3 = doc.Main();
      using shapeTool = oc.XCAFDoc_DocumentTool.ShapeTool(disposable3);
      using disposable4 = doc.Main();
      using colorTool = oc.XCAFDoc_DocumentTool.ColorTool(disposable4);

      using box = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
      using label = shapeTool.NewShape();
      using boxShape2 = box.Shape();
      shapeTool.SetShape(label, boxShape2);

      using colorRGBA = new oc.Quantity_ColorRGBA(0.2, 0.8, 0.2, 0.5);
      using boxShape3 = box.Shape();
      const result = colorTool.SetColor(
        boxShape3,
        colorRGBA,
        oc.XCAFDoc_ColorType.XCAFDoc_ColorSurf,
      );
      expect(result).toBe(true);
    });
  });

  describe('XCAFDoc_ColorTool.SetColor with Quantity_Color', () => {
    it('should dispatch SetColor(TDF_Label, Quantity_Color, XCAFDoc_ColorType)', () => {
      const oc = getOC();
      using tCollectionExtendedstring3 = new oc.TCollection_ExtendedString();
      using doc = new oc.TDocStd_Document(tCollectionExtendedstring3);
      using disposable5 = doc.Main();
      using shapeTool = oc.XCAFDoc_DocumentTool.ShapeTool(disposable5);
      using disposable6 = doc.Main();
      using colorTool = oc.XCAFDoc_DocumentTool.ColorTool(disposable6);

      using box = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
      using label = shapeTool.NewShape();
      using boxShape4 = box.Shape();
      shapeTool.SetShape(label, boxShape4);

      using color = new oc.Quantity_Color(
        1, 0, 0,
        oc.Quantity_TypeOfColor.Quantity_TOC_RGB,
      );
      colorTool.SetColor(label, color, oc.XCAFDoc_ColorType.XCAFDoc_ColorSurf);

      using inRetrievedColor = new oc.Quantity_Color();
      const hasColor = oc.XCAFDoc_ColorTool.GetColor(
        label,
        oc.XCAFDoc_ColorType.XCAFDoc_ColorSurf,
        inRetrievedColor,
      );
      expect(hasColor).toBe(true);
    });
  });

  describe('Enum dispatch across different enum types', () => {
    it('should dispatch Quantity_Color constructor with Quantity_TypeOfColor enum', () => {
      const oc = getOC();
      using color = new oc.Quantity_Color(
        0.5, 0.3, 0.1,
        oc.Quantity_TypeOfColor.Quantity_TOC_sRGB,
      );

      const r = color.Red();
      expect(r).toBeGreaterThan(0);
      expect(typeof r).toBe('number');
    });
  });
});
