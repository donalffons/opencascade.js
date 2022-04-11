import shell from "shelljs";
import initOpenCascade, { OpenCascadeInstance } from "opencascade.js/dist/node";
import * as path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const customBuildCmd = "cd customBuilds && docker run --rm -v $(pwd):/src -u $(id -u):$(id -g) donalffons/opencascade.js-testImage";

it("can create custom build: testBindings", () => {
  expect(shell.exec(`${customBuildCmd} testBindings.yml`).code).toBe(0);
});

let oc: OpenCascadeInstance = undefined;

it("can initialize custom build: testBindings", async () => {
  const mainJs = await import(path.join(__dirname, "customBuilds", "customBuild.testBindings.js"));
  oc = await initOpenCascade({
    mainJS: mainJs.default,
    mainWasm: path.join(__dirname, "customBuilds", "customBuild.testBindings.wasm"),
  });
});

it("correctly binds StaticMethods::intReturn", async () => {
  expect(oc.StaticMethods.intReturn.argCount).toBe(0);
  expect(oc.StaticMethods.intReturn()).toBe(123);
  expect(() => {
    oc.StaticMethods.intReturn("keks");
  }).toThrow();
  expect(() => {
    oc.StaticMethods.intReturn(123);
  }).toThrow();
  expect(() => {
    oc.StaticMethods.intReturn(undefined);
  }).toThrow();
  expect(() => {
    oc.StaticMethods.intReturn(null);
  }).toThrow();
  expect(() => {
    oc.StaticMethods.intReturn({});
  }).toThrow();
});

it("correctly binds StaticMethods::intArgument", async () => {
  expect(oc.StaticMethods.intArgument.argCount).toBe(1);
  expect(() => {
    oc.StaticMethods.intArgument(123);
  }).not.toThrow();
  expect(() => {
    oc.StaticMethods.intArgument("123");
  }).not.toThrow();
  expect(() => {
    oc.StaticMethods.intArgument(234);
  }).toThrow();
  expect(() => {
    oc.StaticMethods.intArgument();
  }).toThrow();
  expect(() => {
    oc.StaticMethods.intArgument("keks");
  }).toThrow();
  expect(() => {
    oc.StaticMethods.intArgument(undefined);
  }).toThrow();
  expect(() => {
    oc.StaticMethods.intArgument(null);
  }).toThrow();
  expect(() => {
    oc.StaticMethods.intArgument({});
  }).toThrow();
});