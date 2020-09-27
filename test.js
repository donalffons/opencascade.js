import opencascade from "./dist/opencascade.wasm.js";

jest.setTimeout(300000);

const BottleExample = async () => {
  const oc = await new opencascade();
}

test('Bottle Example', async () => {
  await BottleExample();
})
