import shell from "shelljs";
import * as fs from "fs";

const isFileSizeCorrect = (actual: number, target: number, epsPct: number) => actual >= target * (1-epsPct) && actual <= target * (1+epsPct);

it("can create custom build: simple", () => {
  shell.cd("./customBuilds");
  shell.exec(`docker run --rm -v $(pwd):/src -u $(id -u):$(id -g) donalffons/opencascade.js simple.yml`);
  const { size: sizeJs } = fs.statSync("./customBuild.simple.js");
  const { size: sizeWasm } = fs.statSync("./customBuild.simple.wasm");
  const { size: sizeDTs } = fs.statSync("./customBuild.simple.d.ts");
  const epsPct = 0.1;
  expect(isFileSizeCorrect(sizeJs, 117392, epsPct)).toBeTruthy();
  expect(isFileSizeCorrect(sizeWasm, 413352, epsPct)).toBeTruthy();
  expect(isFileSizeCorrect(sizeDTs, 6993, epsPct)).toBeTruthy();
  shell.cd("..");
});
