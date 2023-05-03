// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Indonesia Project Zomboid Portal',
  tagline: 'This is the new hub for Indonesian Project Zomboid content, offering the community access to guides, blogs, and upcoming content',
  favicon: 'https://res.cloudinary.com/belanga/image/upload/v1677682087/ipz/icon_hb81gc.png',

  // Set the production url of your site here
  url: 'https://portal.projectzomboid.id',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'projectzomboid-id', // Usually your GitHub org/user name.
  projectName: 'portal', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'guides',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'guides',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './guides',
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/projectzomboid-id/portal/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/projectzomboid-id/portal/tree/master/',
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
      // Replace with your project's social card
      image: 'https://api.projectzomboid.id/assets/img/bg.jpg',
      navbar: {
        title: 'Portal',
        logo: {
          alt: 'IPZ Logo',
          src: 'https://res.cloudinary.com/ipz/image/upload/v1677766525/ipz/logo-s14-hotfix_kumesb.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/projectzomboid-id/portal',
            label: 'GitHub',
            position: 'right',
          },
          {to: '/guides', label: 'Guides', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/intro',
              },
	      {
		label: 'Blog',
		to: '/blog',
	      },
	     {
		label: 'Guides',
		to: '/guides',
	      },
            ],
          },
          {
            title: 'Community',
            items: [
	      {
		label: 'Main Website',
		href: 'https://projectzomboid.id',
	      },
              {
                label: 'Github',
                href: 'https://github.com/projectzomboid-id',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/ipz',
              },
              {
                label: 'Instagram',
                href: 'https://instagram.com/projectzomboid.id',
              },
            ],
          },
          {
            title: 'Support Us',
            items: [
              {
                label: 'Sociabuzz',
                href: 'https://sociabuzz.com/projectzomboid_id/tribe',
              },
              {
                label: 'Ko-fi',
                href: 'https://ko-fi.com/cattycats',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Indonesia Project Zomboid. Built with Docusaurus.`,
      },
      prism: {
	      theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
