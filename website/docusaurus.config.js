const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Nền tảng IOT Makipos',
  tagline: 'Dành cho các ứng dụng giám sát thiết bị, nhà thông minh',
  url: 'https://makipos.github.io',
  baseUrl: '/iot-server/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'makipos', // Usually your GitHub org/user name.
  projectName: 'iot-server', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // Please change this to your repo.
          // editUrl: 'https://github.com/makipos/iot-server/tree/master/website',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl: 'https://github.com/makipos/iot-server',
        // },
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
        title: 'Nền tảng IOT Makipos',
        logo: {
          alt: 'Makipos',
          src: 'img/favicon.ico',
        },
        items: [
          {
            type: 'doc',
            docId: 'feature',
            position: 'left',
            label: 'Chức năng',
          },
          {
            to: 'docs/architecture',
            label: 'Kiến trúc',
            position: 'left'
          },
          {
            to: 'docs/installation',
            label: 'Hướng dẫn',
            position: 'left'
          },
          {
            to: '/api',
            label: 'API',
            position: 'left'
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: 'Copyright © 2018 Makipos.',
        logo: {
          src: 'img/favicon.ico'
        }
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
