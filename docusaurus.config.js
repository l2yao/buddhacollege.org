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
          docId: '谷歌教室',
          position: 'left',
          label: '课程',
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
              label: 'AMTB',
              to: '/docs/amtb/淨土五經一論/無量壽經/02-040',
            },
            {
              label: 'Youtube',
              to: '/docs/youtube/淨土大經科註',
            },
            {
              label: '谷歌教室',
              to: '/docs/谷歌教室',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: '淨空老法師專集網',
              href: 'https://www.amtb.tw/#/home',
            },
            {
              label: '華藏淨宗弘化網',
              href: 'https://www.hwadzan.com/',
            },
            {
              label: '佛陀教育網路學院',
              href: 'https://www.amtbcollege.org/',
            },
            {
              label: '儒釋道文化教育網',
              href: 'https://rsd.amtb.tw/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: '新闻',
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
            'https://github.com/l2yao/buddhacollege.org/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/l2yao/buddhacollege.org/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
