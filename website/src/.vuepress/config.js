const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'OpenCascade.js',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#b49d01' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Docs',
        link: '/docs/about/',
      },
      {
        text: 'Examples',
        link: '/examples/',
      },
      {
        text: 'Starter Templates',
        link: '/starter-templates/',
      },
      {
        text: 'Community Projects',
        link: '/community-projects/',
      },
      {
        text: 'Github',
        link: 'https://github.com/donalffons/opencascade.js',
      },
    ],
    sidebar: {
      '/docs/': [
        {
          title: 'About',
          collapsable: false,
          children: [
            'about/',
            'about/getting-started',
            'about/app-dev-workflow',
            'about/acknowledgements',
          ],
        },
        {
          title: 'Beginner Guides',
          collapsable: false,
          children: [
            'beginner-guides/hello-world',
            'beginner-guides/bottle',
          ],
        },
        {
          title: 'Advanced Guides',
          collapsable: false,
          children: [
            'advanced-guides/gotchas',
            'advanced-guides/web-worker',
            'advanced-guides/progress-indicators',
            'advanced-guides/user-break',
            'advanced-guides/multi-threading',
          ],
        },
        {
          title: 'OpenCascade vs OpenCascade.js',
          collapsable: false,
          children: [
            'cpp-in-js/',
            'cpp-in-js/overloaded-methods',
            'cpp-in-js/references-to-built-ins',
            'cpp-in-js/limitations',
          ],
        },
        {
          title: 'Custom Builds',
          collapsable: false,
          children: [
            'custom-builds/',
            'custom-builds/file-size-comparison',
            'custom-builds/how-to',
            'custom-builds/additional-cpp-code',
            'custom-builds/additional-bind-code',
          ],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
