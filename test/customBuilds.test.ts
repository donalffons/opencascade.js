import shell from "shelljs";
import * as fs from "fs";
import initOpenCascade from "opencascade.js/dist/node";
import * as path from 'path';
import { fileURLToPath } from 'url';
import dockerImageName from "./dockerImageName";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const customBuildCmd = `cd customBuilds && docker run --rm -v $(pwd):/src -u $(id -u):$(id -g) ${dockerImageName}`;

it("can create custom build: simple", () => {
  expect(shell.exec(`${customBuildCmd} simple.yml`).code).toBe(0);
  const { size: sizeJs } = fs.statSync(path.join(__dirname, "customBuilds", "./customBuild.simple.js"));
  const { size: sizeWasm } = fs.statSync(path.join(__dirname, "customBuilds", "./customBuild.simple.wasm"));
  const { size: sizeDTs } = fs.statSync(path.join(__dirname, "customBuilds", "./customBuild.simple.d.ts"));
  const epsPct = 0.1;
  const targetSizeJs = 117964;
  expect(sizeJs).toBeGreaterThan((1 - epsPct / 2) * targetSizeJs);
  expect(sizeJs).toBeLessThan((1 + epsPct / 2) * targetSizeJs);
  const targetSizeWasm = 443938;
  expect(sizeWasm).toBeGreaterThan((1 - epsPct / 2) * targetSizeWasm);
  expect(sizeWasm).toBeLessThan((1 + epsPct / 2) * targetSizeWasm);
  const targetSizeDTs = 7238;
  expect(sizeDTs).toBeGreaterThan((1 - epsPct / 2) * targetSizeDTs);
  expect(sizeDTs).toBeLessThan((1 + epsPct / 2) * targetSizeDTs);
});

it("can use custom build: simple", async () => {
  const mainJs = await import(path.join(__dirname, "customBuilds", "customBuild.simple.js"));
  const oc = await initOpenCascade({
    mainJS: mainJs.default,
    mainWasm: path.join(__dirname, "customBuilds", "customBuild.simple.wasm"),
  });
  const testShape = new oc.TopoDS_Shape();
  expect(testShape.IsNull()).toBeTruthy();
  const fooResult = oc.Test.foo();
  expect(fooResult).toBe(123);
  expect(oc.TopoDS_Face).toBeUndefined();
});

it("fails on custom build: errorUnknownProp1", () => {
  expect(shell.exec(`${customBuildCmd} errorUnknownProp1.yml`).code).not.toBe(0);
});

it("fails on custom build: errorUnknownProp2", () => {
  expect(shell.exec(`${customBuildCmd} errorUnknownProp2.yml`).code).not.toBe(0);
});
