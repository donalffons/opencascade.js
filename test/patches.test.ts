import initOpenCascade, { OpenCascadeInstance } from "opencascade.js/dist/node.js"
import * as fs from "fs";

let oc: OpenCascadeInstance = undefined;

beforeAll(async () => {
  oc = await initOpenCascade();
});

it("can read .iges files (make sure that getpwuid error is not thrown)", () => {
  oc.FS.createDataFile("/", "file.iges", fs.readFileSync("./data/cone.iges"), true, true, true);
  const reader = new oc.IGESControl_Reader_1();
  const readResult = reader.ReadFile("file.iges");
  expect(readResult).toBe(oc.IFSelect_ReturnStatus.IFSelect_RetDone);
  reader.TransferRoots(new oc.Message_ProgressRange_1());
  oc.FS.unlink("file.iges");
});
