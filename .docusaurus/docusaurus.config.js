export default {
  "title": "佛陀教育",
  "tagline": "佛教就是佛陀教育，揭示宇宙人生的真相",
  "url": "https://buddhacollege.org",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "l2yao",
  "projectName": "buddhacollege.org",
  "themeConfig": {
    "navbar": {
      "title": "佛陀教育",
      "logo": {
        "alt": "Buddha College Logo",
        "src": "img/buddha_college.jpeg"
      },
      "items": [
        {
          "type": "doc",
          "docId": "谷歌教室",
          "position": "left",
          "label": "课程",
          "activeSidebarClassName": "navbar__link--active"
        },
        {
          "to": "/blog",
          "label": "新闻",
          "position": "left"
        },
        {
          "href": "https://github.com/l2yao/buddhacollege.org",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Courses",
              "to": "/docs/intro"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Stack Overflow",
              "href": "https://stackoverflow.com/questions/tagged/docusaurus"
            },
            {
              "label": "Discord",
              "href": "https://discordapp.com/invite/docusaurus"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/docusaurus"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "/blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/l2yao/buddhacollege.org"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2021 Buddha College, Inc. Built with Docusaurus."
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/longyao/Documents/buddhacollege.org/sidebars.js",
          "editUrl": "https://github.com/l2yao/buddhacollege.org/edit/master/website/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/l2yao/buddhacollege.org/edit/master/website/blog/"
        },
        "theme": {
          "customCss": "/Users/longyao/Documents/buddhacollege.org/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};