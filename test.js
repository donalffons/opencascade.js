import opencascade from "./dist/opencascade.wasm.js";

jest.setTimeout(300000);

const BottleExample = async () => {
  throw(new Error("This should fail, no?!"));
  const oc = await new opencascade();
}

test('Bottle Example', async () => {
  await BottleExample();
})
