import shell from "shelljs";
import * as fs from "fs";
import initOpenCascade from "opencascade.js/dist/node";
import * as path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const isFileSizeCorrect = (actual: number, target: number, epsPct: number) => actual >= target * (1-epsPct) && actual <= target * (1+epsPct);

const customBuildCmd = "cd customBuilds && docker run --rm -v $(pwd):/src -u $(id -u):$(id -g) donalffons/opencascade.js";

it("can create custom build: simple", () => {
  expect(shell.exec(`${customBuildCmd} simple.yml`).code).toBe(0);
  const { size: sizeJs } = fs.statSync(path.join(__dirname, "customBuilds", "./customBuild.simple.js"));
  const { size: sizeWasm } = fs.statSync(path.join(__dirname, "customBuilds", "./customBuild.simple.wasm"));
  const { size: sizeDTs } = fs.statSync(path.join(__dirname, "customBuilds", "./customBuild.simple.d.ts"));
  const epsPct = 0.1;
  expect(isFileSizeCorrect(sizeJs, 117392, epsPct)).toBeTruthy();
  expect(isFileSizeCorrect(sizeWasm, 413352, epsPct)).toBeTruthy();
  expect(isFileSizeCorrect(sizeDTs, 6993, epsPct)).toBeTruthy();
});

it("can use custom build: simple", async () => {
  const mainJs = await import(path.join(__dirname, "customBuilds", "customBuild.simple.js"));
  const oc = await initOpenCascade({
    mainJS: mainJs.default,
    mainWasm: path.join(__dirname, "customBuilds", "customBuild.simple.wasm"),
  });
  const testShape = new oc.TopoDS_Shape();
  expect(testShape.IsNull()).toBeTruthy();
  expect(oc.TopoDS_Face).toBeUndefined();
});

it("fails on custom build: errorUnknownProp1", () => {
  expect(shell.exec(`${customBuildCmd} errorUnknownProp1.yml`).code).not.toBe(0);
});

it("fails on custom build: errorUnknownProp2", () => {
  expect(shell.exec(`${customBuildCmd} errorUnknownProp2.yml`).code).not.toBe(0);
});
