import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

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
          remarkPlugins: [remarkMath],
          rehypePlugins: [[rehypeKatex, {output: 'mathml'}]],
          sidebarPath: "./sidebars.ts",
          showLastUpdateTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/li-zhenyu/li-zhenyu.github.io/tree/source/",
        },
        blog: {
          remarkPlugins: [remarkMath],
          rehypePlugins: [[rehypeKatex, {output: 'mathml'}]],
          showReadingTime: true,
          showLastUpdateTime: true,
          blogSidebarTitle: "全部文章", //默认为“Recent Posts”
          blogSidebarCount: "ALL",
          feedOptions: {
            type: "all",
            xslt: true,
            copyright: `著作权所有 © ${new Date().getFullYear()} 李振宇`,
            createFeedItems: async (params) => {
              const { blogPosts, defaultCreateFeedItems, ...rest } = params;
              return defaultCreateFeedItems({
                // keep only the 50 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 500),
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
        gtag: {
          trackingID: "G-58ENB9HC1T",
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
    
  ],

  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    algolia: {
      // The application ID provided by Algolia
      appId: '502VHLLVKH',

      // Public API key: it is safe to commit it
      apiKey: 'a3dbdaf797df32ec37fc423fef12d034',

      indexName: 'Search of Li Zhenyu',
    },
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
        { to: "pathname:///tracker", label: "追踪黑名单", position: 'left'},
        //以下是右边
        { to: "/rss", label: "RSS", position: "right" }, //Fuck you Docusaurus!
        { to: "/links", label: "友链", position: "right" },
        { to: "/comments", label: "留言板", position: "right"},
        { to: "/about", label: "关于", position: "right" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "文档",
          items: [
            {
              label: "民法总则手册",
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
      copyright: `著作权所有 © ${new Date().getFullYear()} 李振宇，详见<a href="/about#许可协议">许可协议</a><br/>由 Docusaurus 驱动<br/><a href="https://icp.gov.moe/?keyword=20251450" target="_blank">萌ICP备20251450号</a>`,
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
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
};

export default config;
