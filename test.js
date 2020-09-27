import opencascade from "./dist/opencascade.wasm.js";

jest.setTimeout(300000);

const BottleExample = async () => {
  try {
    console.log("STARTING");
    const oc = await new opencascade();
    console.log("DONE");
  } catch (error) {
    throw new Error(error.toString());
  }
}

test('Bottle Example', async () => {
  await BottleExample();
})
