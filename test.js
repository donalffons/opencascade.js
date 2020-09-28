import opencascade from "./dist/opencascade.wasm.js";
import { makeBottle } from "opencascade.js-examples/src/demos/bottle - basic/library";
import { makePolygon } from "opencascade.js-examples/src/demos/polygon/library";

jest.setTimeout(300000);

test('Create Polygonal Face', async () => {
  const oc = await((await new opencascade()).ready);
  makePolygon(oc);
});

test('Bottle Example', async () => {
  const oc = await((await new opencascade()).ready);
  const width = 50, height = 70, thickness = 30;
  makeBottle(oc, width, height, thickness);
});
