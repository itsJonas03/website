// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

const isCI = process.env.CI === "true";
const isPreview = process.env.DEPLOY_PREVIEW === "true";

const url = isPreview ? process.env.PREVIEW_URL : "https://website-e84.pages.dev/";
const baseUrl = isPreview ? process.env.PREVIEW_BASE_URL : "/";
const completeUrl = url + baseUrl;

/** @type {import('@docusaurus/types').Config} */
const config = {

  title: "Jonas",


  tagline: 'Personal Website',
  url: url,
  baseUrl: baseUrl,
  onBrokenLinks: isCI ? "throw" : "warn",
  onBrokenMarkdownLinks: isCI ? "throw" : "warn",
  onDuplicateRoutes: isCI ? "throw" : "error",
  favicon: 'img/iconlogo.ico',
  organizationName: 'Jonas Verdeflor',
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
          editUrl: 'https://github.com/itsjonas03/website/',
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
        title: 'Jonas Verdeflor',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },

        items: [
          {
            type: "localeDropdown",
            position: "left",
          },
          {
            to: "/college-notes/intro",
            label: "College",
            position: "right",
            items: [
              {
                label: "Year 12",
                to: "/college-notes/year-12/intro",
              },
              {
                label: "Year 13",
                to: "/college-notes/year-13/intro",
              },
            ],
          },
          {
            type: "doc",
            label: "🔒Univerisity",
            position: "right",
            docId: "uni-notes/intro",
          },

          {
            href: "https://discordapp.com/users/349274596907941889",
            position: "right",
            className: "discord-icon",
            "aria-label": "Discord",
          },
          {
            href: "https://github.com/itsjonas03",
            position: "right",
            className: "github-icon",
            "aria-label": "GitHub",
          },

        ],

      },
      footer: {
        style: 'dark',
        links: [
          {
            title: "Learn",
            items: [
              {
                label: "Docusaurus",
                href: "https://docusaurus.io/"
              },
              {
                label: "React",
                href: "https://reactjs.org/"
              },
              {
                label: "React UI Library",
                href: "https://mui.com/"
              },
              {
                label: "React Spring",
                href: "https://react-spring.io/"
              },


            ]
          },
          {
            title: 'Social Media',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.bigbox.gg',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/itsjonas03',
              },

            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Jonas Verdeflor, Built with Docusaurus`,
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
