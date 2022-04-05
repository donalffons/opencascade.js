import React, { Suspense } from "react";
import "@google/model-viewer";
import { suspend } from "suspend-react";
import { wrap } from "comlink";
import MyComlinkWorker, { runOCJSCode } from "./opencascade.worker";

function Preview({ code }: { code?: string }) {
  const data = suspend(async () => {
    if (code === undefined) return;
    const myComlinkWorkerInstance: Worker = new MyComlinkWorker();
    const myOCJSCodeRunner = wrap<typeof runOCJSCode>(myComlinkWorkerInstance);
    const ret = await myOCJSCodeRunner(code);
    if (ret === undefined) return;
    return URL.createObjectURL(new Blob([ret.buffer], { type: "model/gltf-binary" }));
  }, [code])
  return (
    <model-viewer
      src={data}
      camera-controls
    />
  );
}

export default function OCJSPreview({ code }: { code?: string }) {
  return (
    <Suspense fallback={null}>
      <Preview code={code} />
    </Suspense>
  );
}