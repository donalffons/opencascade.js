import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: XCAF document tools', () => {
  beforeAll(async () => { await initOC(); });

  it('should create XCAF document with ShapeTool and ColorTool, add box and set color', () => {
    const oc = getOC();
    using tCollectionExtendedstring = new oc.TCollection_ExtendedString();
    using doc = new oc.TDocStd_Document(tCollectionExtendedstring);
    using disposable = doc.Main();
    using shapeTool = oc.XCAFDoc_DocumentTool.ShapeTool(disposable);
    using disposable2 = doc.Main();
    using colorTool = oc.XCAFDoc_DocumentTool.ColorTool(disposable2);

    expect(shapeTool).toBeTruthy();
    expect(colorTool).toBeTruthy();

    using box = new oc.BRepPrimAPI_MakeBox(10, 10, 10);
    using boxShape = box.Shape();

    using newShapeLabel = shapeTool.NewShape();
    shapeTool.SetShape(newShapeLabel, boxShape);

    using color = new oc.Quantity_Color(1, 0, 0, oc.Quantity_TypeOfColor.Quantity_TOC_RGB);
    colorTool.SetColor(boxShape, color, oc.XCAFDoc_ColorType.XCAFDoc_ColorGen);

    using inRetrievedColor = new oc.Quantity_Color();
    const hasColor = colorTool.GetColor(boxShape, oc.XCAFDoc_ColorType.XCAFDoc_ColorGen, inRetrievedColor);
    expect(hasColor).toBe(true);
  });
});
