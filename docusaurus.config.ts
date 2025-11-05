import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  trailingSlash: false,
  deploymentBranch: "master",
  title: "李振宇的主页",
  tagline: "🫡 欢迎！",
  favicon: "/img/avatar.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://lizhenyu.top",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "li-zhenyu", // Usually your GitHub org/user name.
  projectName: "li-zhenyu.github.io", // Usually your repo name.

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          showLastUpdateTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/li-zhenyu/li-zhenyu.github.io/tree/source/",
        },
        blog: {
          showReadingTime: true,
          showLastUpdateTime: true,
          blogSidebarTitle: "全部文章", //默认为“Recent Posts”
          blogSidebarCount: "ALL",
          feedOptions: {
            type: "all",
            copyright: `著作权所有 © ${new Date().getFullYear()} 李振宇`,
            createFeedItems: async (params) => {
              const { blogPosts, defaultCreateFeedItems, ...rest } = params;
              return defaultCreateFeedItems({
                // keep only the 50 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 50),
                ...rest,
              });
            },
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/li-zhenyu/li-zhenyu.github.io/tree/source/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    //image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "首页",
      logo: {
        alt: "网站 Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "文档",
        },
        { to: "/blog", label: "Blog", position: "left" },
        { to: "/rss", label: "RSS", position: "right" }, //Fuck you Docusaurus!
        { to: "/links", label: "友链", position: "left" },
        { to: "/about", label: "关于", position: "right" },
        {
          href: "https://github.com/li-zhenyu/",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://github.com/li-zhenyu/li-zhenyu.github.io/discussions/1",
          label: "留言板",
          position: "right",
        },
        {
          href: "mailto:lizhenyu66666666@outlook.com",
          label: "邮箱",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "文档",
          items: [
            {
              label: "奶龙都能看懂的民法总则手册",
              to: "/docs/civil",
            },
          ],
        },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'X',
        //       href: 'https://x.com/docusaurus',
        //     },
        //   ],
        // },
        // {
        //   title: '友链',
        //   items: [
        //     {
        //       label: 'FrankSean 的树洞',
        //       href: 'https://bili233.top/',
        //     },
        //   ],
        // }
      ],
      //autocorrect: false
      copyright: `著作权所有 © ${new Date().getFullYear()} 李振宇，详见<a href="/about#许可协议">许可协议</a><br/>由 Docusaurus 驱动`,
      //autocorrect: true,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
};

export default config;
