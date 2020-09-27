import opencascade from "./dist/opencascade.wasm.js";
import { makeBottle } from "opencascade.js-examples/src/demos/bottle - basic/library";

jest.setTimeout(300000);

const BottleExample = async () => {
  const oc = await((await new opencascade()).ready);
  const width = 50, height = 70, thickness = 30;
  makeBottle(oc, width, height, thickness);
}

test('Bottle Example', async () => {
  await BottleExample();
})
