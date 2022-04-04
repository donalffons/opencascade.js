import React, { Suspense, useMemo } from "react";
import CodeBlock, { type Props } from "@theme-init/CodeBlock";
import "@google/model-viewer";
import yaml from "js-yaml";
// @ts-ignore
import styles from "./styles.module.css";
import { suspend } from "suspend-react";
import { wrap } from "comlink";
import MyComlinkWorker, { runOCJSCode } from "./opencascade.worker";

interface ModelViewerJSX {
  src: string | undefined;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": ModelViewerJSX & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

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

function OCJSEditor(props: Props & { Component: typeof CodeBlock }) {
  const yamlData = useMemo(() => (typeof (props.children) === "string") ? yaml.load(props.children) : undefined, [props]) as {
    code?: string;
  };
  return (
    <div>
      <props.Component {...props}>
        {yamlData.code ?? ""}
      </props.Component>
      <div className={styles.viewportSpacer}>
        <div className={styles.viewportWrapper}>
          <Suspense fallback={null}>
            <Preview
              code={yamlData.code}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

const withLiveEditor = (Component: typeof CodeBlock) => (props: Props) => {
  return (
    props.ocjs ? (
      <OCJSEditor
        Component={Component}
        {...props}
      />
    ) : (
      <Component {...props} />
    )
  );
};

export default withLiveEditor(CodeBlock);
