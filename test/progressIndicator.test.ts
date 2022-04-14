import shell from "shelljs";
import initOpenCascade, { OpenCascadeInstance } from "opencascade.js/dist/node";
import * as path from 'path';
import { fileURLToPath } from 'url';

import { jest } from "@jest/globals";
import dockerImageName from "./dockerImageName";
jest.setTimeout(10000);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const customBuildCmd = `cd customBuilds && docker run --rm -v $(pwd):/src -u $(id -u):$(id -g) ${dockerImageName}`;

it("can create custom build: progressIndicator", () => {
  expect(shell.exec(`${customBuildCmd} progressIndicator.yml`).code).toBe(0);
});

let mainJs: any = undefined;
let oc: OpenCascadeInstance = undefined;

it("can load custom build: progressIndicator", async () => {
  mainJs = await import(path.join(__dirname, "customBuilds", "customBuild.progressIndicator.js"));
  oc = await initOpenCascade({
    mainJS: mainJs.default,
    mainWasm: path.join(__dirname, "customBuilds", "customBuild.progressIndicator.wasm"),
  });
})

it("can indicate progress", async () => {
  let numShowCalls = 0;
  const MyProgressIndicator = oc.Message_ProgressIndicator_JS.extend("Message_ProgressIndicator_JS", {
    Show: function (theScope, isForce) {
      numShowCalls++;
    },
    UserBreak: function () {
      return false;
    },
  });
  const p = new MyProgressIndicator();
  const box1 = new oc.BRepPrimAPI_MakeBox_3(new oc.gp_Pnt_3(0, 0, 0), 2, 1, 1);
  const box2 = new oc.BRepPrimAPI_MakeBox_3(new oc.gp_Pnt_3(1, 0, 0), 2, 1, 1);
  expect(p.GetPosition()).toBe(0);
  const myBody = new oc.BRepAlgoAPI_Fuse_3(box1.Shape(), box2.Shape(), p.Start_1());
  expect(p.GetPosition()).toBe(1);
  const vProps = new oc.GProp_GProps_1();
  oc.BRepGProp.VolumeProperties_1(myBody.Shape(), vProps, true, true, false);
  expect(vProps.Mass()).toBeCloseTo(3);
  expect(numShowCalls).toBeGreaterThan(100);
  expect(p.GetPosition()).toBe(1);
});

it("can cancel long-running task", async () => {
  const MyProgressIndicator = oc.Message_ProgressIndicator_JS.extend("Message_ProgressIndicator_JS", {
    Show: function (theScope, isForce) { },
    UserBreak: function () {
      return true;
    },
  });
  const p = new MyProgressIndicator();
  const box1 = new oc.BRepPrimAPI_MakeBox_3(new oc.gp_Pnt_3(0, 0, 0), 2, 1, 1);
  const box2 = new oc.BRepPrimAPI_MakeBox_3(new oc.gp_Pnt_3(1, 0, 0), 2, 1, 1);
  expect(p.GetPosition()).toBe(0);
  const myBody = new oc.BRepAlgoAPI_Fuse_3(box1.Shape(), box2.Shape(), p.Start_1());
  expect(myBody.Shape().IsNull()).toBeTruthy();
  expect(p.GetPosition()).toBe(1);
});
