import React, { useMemo } from "react";
import CodeBlock, { type Props } from "@theme-init/CodeBlock";
import "@google/model-viewer";
import yaml from "js-yaml";
// @ts-ignore
import styles from "./styles.module.css";

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

const withLiveEditor = (Component: typeof CodeBlock) => (props: Props) => {
  const yamlData = useMemo(() => (props.ocjs && typeof (props.children) === "string") ? yaml.load(props.children) : undefined, [props]) as {
    code?: string;
  };
  return (
    props.ocjs ? (
      <div>
        <Component {...props}>
          {yamlData.code ?? ""}
        </Component>
        <div className={styles.viewportSpacer}>
          <div className={styles.viewportWrapper}>
            <model-viewer
              src="/BoomBox.glb"
              camera-controls
            />
          </div>
        </div>
      </div>
    ) : (
      <Component {...props} />
    )
  );
};

export default withLiveEditor(CodeBlock);
