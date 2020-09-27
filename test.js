import opencascade from "./dist/opencascade.wasm.js";

jest.setTimeout(30000);

const BottleExample = async () => {
  const oc = await new opencascade();
}

test('promise throws', async () => {
  await BottleExample();
})
