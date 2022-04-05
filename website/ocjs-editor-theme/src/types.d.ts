/// <reference types="@docusaurus/theme-classic" />
/// <reference types="@docusaurus/module-type-aliases" />

declare module '@theme-init/CodeBlock' {
  import type CodeBlock, { Props as BaseProps } from '@theme/CodeBlock';

  export interface Props extends BaseProps {
    ocjs?: boolean;
  }
  const CodeBlockComp: typeof CodeBlock;
  export default CodeBlockComp;
}