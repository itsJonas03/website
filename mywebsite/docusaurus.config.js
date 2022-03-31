// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

const isCI = process.env.CI === "true";
const isPreview = process.env.DEPLOY_PREVIEW === "true";

const url = isPreview ? process.env.PREVIEW_URL : "https://nicolasvaccari.com";
const baseUrl = isPreview ? process.env.PREVIEW_BASE_URL : "/";
const completeUrl = url + baseUrl;

/** @type {import('@docusaurus/types').Config} */
const config = {
  
  title: 'Nicolas Vaccari',
  tagline: 'Sitoweb personale',
  url: url,
  baseUrl: baseUrl,
  onBrokenLinks: isCI ? "throw" : "warn",
  onBrokenMarkdownLinks: isCI ? "throw" : "warn",
  onDuplicateRoutes: isCI ? "throw" : "error",
  favicon: 'img/favicon.ico',
  organizationName: 'Nicolas Vaccari',
  projectName: 'website',
  trailingSlash: false,
  noIndex: isPreview,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        debug: !isCI || isPreview,
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/nicolasvac/univr/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarCollapsible: true,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: '/katex/katex.min.css',
      type: 'text/css',
    },
  ],

  themes: ['@docusaurus/theme-live-codeblock'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Nicolas Vaccari',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: "doc",
            label: "Università",
            docId: "intro",
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Links',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.bigbox.gg',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/nicolasvac',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nicolas Vaccari`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [
          "batch",
          "bash",
          "git",
          "java",
          "javastacktrace",
          "kotlin",
          "groovy",
          "log",
          "toml",
          "properties",
        ],
      },
    }),
};

module.exports = config;
