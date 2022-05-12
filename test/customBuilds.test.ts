import shell from "shelljs";
import * as fs from "fs";
import initOpenCascade from "opencascade.js/dist/node";
import * as path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const dockerImageName = process.env.dockerImageName ?? "donalffons/opencascade.js";
const customBuildCmd = `cd customBuilds && docker run --rm -v $(pwd):/src -u $(id -u):$(id -g) ${dockerImageName}`;

const createCustomBuild = (name: string, targetSizeJs: number, targetSizeWasm: number, targetSizeDTs: number, epsPct = 0.1) => {
  expect(shell.exec(`${customBuildCmd} ${name}.yml`).code).toBe(0);
  const { size: sizeJs } = fs.statSync(path.join(__dirname, "customBuilds", `./customBuild.${name}.js`));
  console.log(`size of: ./customBuild.${name}.js: ${sizeJs}`);
  const { size: sizeWasm } = fs.statSync(path.join(__dirname, "customBuilds", `./customBuild.${name}.wasm`));
  console.log(`size of: ./customBuild.${name}.wasm: ${sizeWasm}`);
  const { size: sizeDTs } = fs.statSync(path.join(__dirname, "customBuilds", `./customBuild.${name}.d.ts`));
  console.log(`size of: ./customBuild.${name}.d.ts: ${sizeDTs}`);
  expect(sizeJs).toBeGreaterThan((1 - epsPct / 2) * targetSizeJs);
  expect(sizeJs).toBeLessThan((1 + epsPct / 2) * targetSizeJs);
  expect(sizeWasm).toBeGreaterThan((1 - epsPct / 2) * targetSizeWasm);
  expect(sizeWasm).toBeLessThan((1 + epsPct / 2) * targetSizeWasm);
  expect(sizeDTs).toBeGreaterThan((1 - epsPct / 2) * targetSizeDTs);
  expect(sizeDTs).toBeLessThan((1 + epsPct / 2) * targetSizeDTs);
};

const initCustomBuild = async (name: string) => {
  const mainJs = await import(path.join(__dirname, "customBuilds", `customBuild.${name}.js`));
  const oc = await initOpenCascade({
    mainJS: mainJs.default,
    mainWasm: path.join(__dirname, "customBuilds", `customBuild.${name}.wasm`),
  });
  return oc;
};

it("can create custom build: simple", () => {
  createCustomBuild("simple", 110726, 445231, 7238);
});

it("can run custom build: simple", async () => {
  const oc = await initCustomBuild("simple");
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

it("can create custom build: no-exceptions", () => {
  createCustomBuild("no-exceptions", 166702, 32653528, 9205436);
});

it("can run custom build: no-exceptions", async () => {
  const oc = await initCustomBuild("no-exceptions");
  expect(() => {
    oc.ExceptionTest.throwingFunc();
  }).toThrow();
  expect(() => {
    oc.ExceptionTest.catchingFunc();
  }).toThrow();
});
