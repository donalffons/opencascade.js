import initOpenCascade from "opencascade.js/dist/node.js"
import shell from "shelljs";
import * as path from 'path';
import { fileURLToPath } from 'url';
import dockerImageName from "./dockerImageName";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const customBuildCmd = `cd customBuilds && docker run --rm -v $(pwd):/src -u $(id -u):$(id -g) ${dockerImageName}`;

it("can create custom build: exceptions", () => {
  expect(shell.exec(`${customBuildCmd} exceptions.yml`).code).toBe(0);
});

it("can use custom build: exceptions", async () => {
  const mainJs = await import(path.join(__dirname, "customBuilds", "customBuild.exceptions.js"));
  const oc = await initOpenCascade({
    mainJS: mainJs.default,
    mainWasm: path.join(__dirname, "customBuilds", "customBuild.exceptions.wasm"),
  });
  try {
    new oc.BRepPrimAPI_MakeCone_1(1, 0.5, 0);
  } catch (e) {
    expect(oc.OCJSExceptionTools.getStandard_FailureData(e).GetMessageString()).toBe("cone with negative or null height");
  }
});
