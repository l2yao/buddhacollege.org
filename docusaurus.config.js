/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: '佛陀教育',
  tagline: '佛教就是佛陀教育，揭示宇宙人生的真相',
  url: 'https://buddhacollege.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'l2yao', // Usually your GitHub org/user name.
  projectName: 'buddhacollege.org', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '佛陀教育',
      logo: {
        alt: 'Buddha College Logo',
        src: 'img/buddha_college.jpeg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: '课程',
        },
        {
          type: 'doc',
          docId: '谷歌教室',
          position: 'left',
          label: '谷歌教室',
        },
        {to: '/blog', label: '新闻', position: 'left'},
        {
          href: 'https://github.com/l2yao/buddhacollege.org',
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
              label: 'Courses',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/l2yao/buddhacollege.org',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Buddha College, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/l2yao/buddhacollege.org/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/l2yao/buddhacollege.org/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
