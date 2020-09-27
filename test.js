import opencascade from "./dist/opencascade.wasm.js";

jest.setTimeout(300000);

const BottleExample = async () => {
  try {
    const oc = await new opencascade();
  } catch (error) {
    throw new Error(error.toString());
  }
}

test('Bottle Example', async () => {
  await BottleExample();
})
