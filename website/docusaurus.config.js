// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenCascade.js',
  tagline: 'Port of the OpenCascade CAD library to JavaScript and WebAssembly via Emscripten.',
  url: 'http://ocjs.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          remarkPlugins: [
            require('mdx-mermaid'),
          ],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'OpenCascade.js',
        logo: {
          alt: 'OpenCascade.js Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'about',
            position: 'left',
            label: 'Guides',
          },
          {
            position: 'left',
            label: 'Reference Docs',
            href: '/reference-docs',
            target: '_blank',
          },
          {
            type: "search",
            position: "right",
          },
          {
            href: 'https://github.com/donalffons/opencascade.js/discussions',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Guides',
                to: '/docs/about',
              },
              {
                label: 'Reference Docs',
                href: '/reference-docs',
                target: '_blank',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Github Discussions',
                href: 'https://github.com/donalffons/opencascade.js/discussions',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/donalffons/opencascade.js',
              },
              {
                label: 'OpenCascade',
                href: 'https://dev.opencascade.org/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OpenCascade.js`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
    require.resolve('docusaurus-lunr-search'),
  ],

  clientModules: [
    require.resolve("./src/firebase.ts"),
  ],
};

module.exports = config;
