import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Foxx Cyber Documentation',
  tagline: 'Comprehensive guides and documentation for Foxx Cyber security solutions',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.foxxcyber.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'foxxcyber', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Markdown configuration - warn on broken images until screenshots are added
  markdown: {
    preprocessor: ({filePath, fileContent}) => fileContent,
    hooks: {
      onBrokenMarkdownImages: 'warn',
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs/bedrock-cmmc',
          routeBasePath: 'bedrock-cmmc',
          sidebarPath: './sidebars-bedrock-cmmc.ts',
          editUrl: 'https://github.com/foxxcyber/docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/foxxcyber/docs/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'bedrock-cmmc-c3pao',
        path: 'docs/bedrock-cmmc-c3pao',
        routeBasePath: 'bedrock-cmmc-c3pao',
        sidebarPath: './sidebars-bedrock-cmmc-c3pao.ts',
        editUrl: 'https://github.com/foxxcyber/docs/tree/main/',
      },
    ],
  ],

  themeConfig: {
    image: 'img/foxx-cyber-logo.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Foxx Cyber',
      logo: {
        alt: 'Foxx Cyber Logo',
        src: 'img/foxx-cyber-logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          label: 'Bedrock CMMC',
          docsPluginId: 'default',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'intro',
          label: 'Bedrock CMMC C3PAO',
          docsPluginId: 'bedrock-cmmc-c3pao',
          position: 'left',
        },
        {to: '/blog', label: 'Release Notes', position: 'left'},
        {
          href: 'https://foxxcyber.com',
          label: 'Foxx Cyber',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Products',
          items: [
            {
              label: 'Bedrock CMMC',
              to: '/bedrock-cmmc/intro',
            },
            {
              label: 'Bedrock CMMC C3PAO',
              to: '/bedrock-cmmc-c3pao/intro',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Release Notes',
              to: '/blog',
            },
            {
              label: 'Support',
              href: 'https://foxxcyber.com/support',
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'Website',
              href: 'https://foxxcyber.com',
            },
            {
              label: 'Contact',
              href: 'https://foxxcyber.com/contact',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Foxx Cyber LLC. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
