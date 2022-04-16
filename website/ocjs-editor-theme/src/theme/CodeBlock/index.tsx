import React, { useMemo, useState } from "react";
import CodeBlock, { type Props } from "@theme-init/CodeBlock";
import yaml from "js-yaml";
// @ts-ignore
import styles from "./index.module.css";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Loadable from "react-loadable";
// @ts-ignore
import DecimalPrecision from "./DecimalPrecision";

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

type Param = {
  type: "range";
  default: number;
  lower: number;
  upper: number;
};

function ParamInput({ title, param, onUpdate }: { title: string; param: Param; onUpdate: (val: number) => void }) {
  const [val, setVal] = useState(param.default);
  return (
    <div>
      <div>
        {title}: {DecimalPrecision.round(val, 2)}
      </div>
      <input
        type="range"
        min={param.lower}
        max={param.upper}
        value={val}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setVal(parseFloat(e.target.value));
        }}
        onPointerUp={() => {
          onUpdate(val);
        }}
      />
    </div>
  );
}

function OCJSEditor(props: any & { Component: any }) {
  const yamlData = useMemo(() => (typeof (props.children) === "string") ? yaml.load(props.children) : undefined, [props]) as {
    code?: string;
    params?: { [key: string]: Param | undefined };
  };
  const paramEntries = useMemo(() => yamlData.params && Object.entries(yamlData.params), [yamlData]);
  const [paramValues, setParamValues] = useState(paramEntries && Object.fromEntries(paramEntries.map(p => [p[0], p[1]!.default])));
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
                params={paramValues}
              />
            )}
          </BrowserOnly>
          {
            paramEntries && (
              <div className={styles.paramArea}>
                {paramEntries.map((p, i) => p[1] && (
                  <ParamInput
                    key={i}
                    title={p[0]}
                    param={p[1]}
                    onUpdate={newVal => setParamValues(paramValues => paramValues && ({
                      ...paramValues,
                      [p[0]]: newVal,
                    }))}
                  />
                ))}
              </div>
            )
          }
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
