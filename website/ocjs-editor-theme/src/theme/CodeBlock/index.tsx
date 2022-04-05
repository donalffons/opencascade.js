import React, { useMemo } from "react";
import CodeBlock, { type Props } from "@theme-init/CodeBlock";
import yaml from "js-yaml";
// @ts-ignore
import styles from "./index.module.css";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Loadable from "react-loadable";

const OCJSPreview = Loadable({
  loader: () => import("./OCJSPreview"),
  loading: () => null,
});

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

function OCJSEditor(props: any & { Component: any }) {
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
          <BrowserOnly>
            {() => (
              <OCJSPreview
                code={yamlData.code}
              />
            )}
          </BrowserOnly>
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
