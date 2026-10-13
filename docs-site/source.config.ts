import { defineConfig, defineDocs } from 'fumadocs-mdx/config';
import { remarkMdxMermaid } from 'fumadocs-core/mdx-plugins';
import { remarkAutoTypeTable, createGenerator } from 'fumadocs-typescript';
import { llmStringifyMdx } from './lib/llm-stringify-mdx';
import { remarkResolveRelativeLinks } from './lib/remark-resolve-relative-links';

const generator = createGenerator({
  tsconfigPath: './tsconfig.json',
});

export const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    postprocess: {
      includeProcessedMarkdown: {
        stringify: (...stringifyArguments) => llmStringifyMdx(...stringifyArguments),
      },
    },
  },
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [
      [remarkAutoTypeTable, { generator }],
      remarkMdxMermaid,
      remarkResolveRelativeLinks,
    ],
    remarkCodeTabOptions: {
      parseMdx: true,
    },
    rehypeCodeOptions: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      defaultColor: false,
      inline: 'tailing-curly-colon',
    },
  },
});
