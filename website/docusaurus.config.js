// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import("@docusaurus/types").Config} */
const config = {
  title: "OpenCascade.js",
  tagline: "Port of the OpenCascade CAD library to JavaScript and WebAssembly via Emscripten.",
  url: "https://ocjs.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "/favicon.ico",
  organizationName: "donalffons",
  projectName: "opencascade.js",

  presets: [
    [
      "classic",
      /** @type {import("@docusaurus/preset-classic").Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/donalffons/opencascade.js/tree/master/website/",
          remarkPlugins: [
            require("mdx-mermaid"),
          ],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import("@docusaurus/preset-classic").ThemeConfig} */
    ({
      navbar: {
        title: "OpenCascade.js",
        logo: {
          alt: "OpenCascade.js Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            label: "Guides",
            to: "/docs/about",
            position: "left",
          },
          {
            position: "left",
            label: "Reference Docs",
            href: "/reference-docs/index.html",
            target: "_blank",
          },
          {
            label: "Starter Templates",
            to: "/starter-templates",
            position: "left",
          },
          {
            type: "search",
            position: "right",
          },
          {
            href: "https://github.com/donalffons/opencascade.js/discussions",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Guides",
                to: "/docs/about",
              },
              {
                label: "Reference Docs",
                href: "/reference-docs/index.html",
                target: "_blank",
              },
              {
                label: "Starter Templates",
                to: "/starter-templates",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Github Discussions",
                href: "https://github.com/donalffons/opencascade.js/discussions",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/donalffons/opencascade.js",
              },
              {
                label: "OpenCascade",
                href: "https://dev.opencascade.org/",
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
    require.resolve("docusaurus-lunr-search"),
  ],

  clientModules: [
    require.resolve("./src/firebase.ts"),
  ],

  scripts: [{
    src: "/cookieconsent/cookieconsent.js",
    defer: true,
  }],

  stylesheets: [
    "/cookieconsent/cookieconsent.css",
  ],

  themes: [
    async function myTheme() {
      return {
        name: "my theme",
        getThemePath: () => {
          return "./ocjs-editor-theme/lib/theme";
        },
        getTypeScriptThemePath: () => {
          return "./ocjs-editor-theme/src/theme";
        },
        configureWebpack() {
          return {
            experiments: {
              syncWebAssembly: false,
              asyncWebAssembly: false,
            },
            module: {
              rules: [
                {
                  test: /.(wasm)$/,
                  loader: "file-loader",
                  options: {
                    outputPath: "assets/wasm/",
                  },
                },
                {
                  test: /\.worker\.js$/,
                  use: {
                    loader: "worker-loader",
                  },
                },
              ],
            },
          };
        },
      };
    }
  ],

  trailingSlash: false,
};

module.exports = config;
