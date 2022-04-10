import React, { Suspense } from "react";
import "@google/model-viewer";
import { suspend } from "suspend-react";
import { wrap } from "comlink";
import MyComlinkWorker, { runOCJSCode } from "./opencascade.worker";
import { PuffLoader } from "react-spinners";
// @ts-ignore
import styles from "./OCJSPreview.module.css";
import { ErrorBoundary, FallbackProps } from "react-error-boundary"
import Admonition from "@theme/Admonition";

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
      enable-pan
    />
  );
}

function ErrorFallback({ error }: FallbackProps) {
  return (
    <>
      <Admonition type="danger" title="There was an error loading this example">
        Please file a <a href="https://github.com/donalffons/opencascade.js/issues">bug report</a> including:
        <ul>
          <li>
            What's your device and browser (including version)?
          </li>
          <li>
            Which example crashed?
          </li>
          <li>
            What are the error details, shown below?
          </li>
        </ul>
      </Admonition>
      <pre className={styles.errorPre}>
        name: {error.name}<br />
        message: {error.message}<br />
        stack: {error.stack}
      </pre>
    </>
  )
}

export default function OCJSPreview({ code }: { code?: string }) {
  return (
    <div className={styles.previewContainer}>
      <Suspense fallback={<PuffLoader color="#b39b00" />}>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
        >
          <Preview code={code} />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
}