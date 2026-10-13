import * as fs from 'node:fs/promises';
import type { OpenCascadeInstance, TopoDS_Shape } from 'libcascade';

/**
 * Export `shape` as ISO 10303-21 (STEP) bytes using AP214 (Configuration
 * Controlled Design).
 *
 * STEPControl_Writer writes its output through the Emscripten in-WASM
 * filesystem; we read it back as a Uint8Array and write it to the host
 * filesystem. Every embind handle is captured by `using` so the WASM
 * heap is reclaimed deterministically at scope exit — sustained CLI
 * usage has been measured leaking tens of GB without this discipline.
 */
export async function shapeToStep(
  oc: OpenCascadeInstance,
  shape: TopoDS_Shape,
  outPath: string,
): Promise<void> {
  using writer = new oc.STEPControl_Writer();
  oc.Interface_Static.SetCVal('write.step.schema', 'AP214CD');

  using transferProgress = new oc.Message_ProgressRange();
  const status = writer.Transfer(
    shape,
    oc.STEPControl_StepModelType.STEPControl_AsIs,
    true,
    transferProgress,
  );
  if (status !== oc.IFSelect_ReturnStatus.IFSelect_RetDone) {
    throw new Error(`libcascade: STEPControl_Writer.Transfer returned status=${String(status)}`);
  }

  const tmp = '/out.step';
  const writeStatus = writer.Write(tmp);
  if (writeStatus !== oc.IFSelect_ReturnStatus.IFSelect_RetDone) {
    throw new Error(`libcascade: STEPControl_Writer.Write returned status=${String(writeStatus)}`);
  }

  const bytes = oc.FS.readFile(tmp);
  oc.FS.unlink(tmp);
  await fs.writeFile(outPath, bytes);
}
