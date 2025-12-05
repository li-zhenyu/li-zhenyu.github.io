---
slug: how-to-use-docusaurus
title: Docusaurus 使用笔记
authors: [li-zhenyu]
tags: 
  - site
---

使用Docusaurus的站长喜欢做一件事情——记录自己如何使用Docusaurus。不像Hexo或者Hugo那种选主题然后配置，不行就换掉主题的使用方式，Docusaurus几乎只有这一个主题。万幸它使用React。虽然我此前完全没有接触过JavaScript/TypeScript。我选择的是后者，因为反正两者都没接触过，干脆就选择听上去更先进的了。

我的配置和swizzle出来的组件，其中的代码提供读者随便参考。[许可协议](/about#许可协议)所指称的“源代码”主要是指文章页面对应的`.md`文件（以后或许会有其他的格式，比如`.tex`），为了防止变相抄袭而加以限制。组件、配置之类的东西，我的站点做得相对简陋，其中大多数本就没有著作权可言。

<!-- truncate -->

本站的源码托管在https://github.com/li-zhenyu/li-zhenyu.github.io 。以下是具体问题的介绍。

:::warning
我的Docusaurus版本是3.9.2，node版本是24。

请注意，方案使用了Docusaurus的内部API，哪怕是小版本变动，都有可能出现不一致的行为。
:::

## `pnpm`与swizzle

我所使用的包管理器是`pnpm`。它的依赖管理比较严格，主打的是“附庸的附庸不是我的附庸”。需要手动 hoist 部分文件。本站源代码的`.npmrc`展示了解决方案。

这个问题，我当时在Docusaurus的GitHub Discussions[提问](https://github.com/facebook/docusaurus/discussions/11578)。当时表达不是很好，被指出来了。但是这位slorber先生仍然耐心地回复了我。特此感谢。

```txt title=".npmrc"
public-hoist-pattern[]=*@docusaurus/*
```

## 构建流程

正如[关于](/about)页面所说，本站使用GitHub Actions自动构建。这样本地预览一下，没问题直接`git commit -m "xxx" && git pull`就行了。

构建流程是AI帮我写的，所以容易获取，就不贴出来了。也可以参考见本站源代码的`.github/workflows/build.yml`。

## Cusdis评论区设置

使用Cusdis的理由，见这篇[Post](./2025-11-26-about-comments.md)。

我配置Cusdis时，在网上搜到了这位美女的[配置](https://peiyu.us/docs/website-comment/)，很可惜是错的，BlogPostItem还笔误为BlogPoseItem：

```jsx title=".../website/src/theme/BlogPoseItem/index.js"
import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import { ReactCusdis } from 'react-cusdis'

export default function BlogPostItemWrapper(props) {
  return (
    <>
      <BlogPostItem {...props} />

         <ReactCusdis
          lang="zh-tw" //繁體中文
          attrs={{
          host: 'https://cusdis.com',
          appId: "{{ app_id }}", // change to tour app ID, see step 1
          pageId: "{{ PAGE_ID }}",
          pageTitle: props.title,
          pageUrl: 'https://peiyu.us/' + props.siteUrl, // change to your website
          }}
          />

    </>
  );
}
```

她的pageId和pageUrl都没有正确获取到。\{\{ PAGE_ID \}\}是召唤不出一个唯一的页面ID的。看一下她的iframe里面的源代码即可证明这一点。看到类似不小心出错的解决方案可能会让人疑惑。我试着在她的评论区提醒。但是似乎不能正常工作。下面是正解。

:::danger
必须把以下内容换成你自己的，不然你的评论会出现在我的网站上！

```jsx
const CusdisContainer = (
  <div key={cusdisTheme}>
    <ReactCusdis
      lang="zh-cn"
      attrs={{
        host: 'https://cusdis.com',
        appId: '3ae124ed-37d0-46c0-84f8-e1feec7bee8a',//换成你的
        pageId: permalink,
        pageTitle: title,
        pageUrl: "https://lizhenyu.top" + permalink,//换成你的
        theme: cusdisTheme,
      }}
    />
  </div>
);
```
:::

只要用wrap方式把BlogPostItem swizzle出来，然后按照以下内容填写（高亮部分是自己填写的）：

```tsx title="你wrap得到的index.tsx"
import React, { type ReactNode } from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import type BlogPostItemType from '@theme/BlogPostItem';
import type { WrapperProps } from '@docusaurus/types';
//highlight-start
import { useBlogPost } from '@docusaurus/plugin-content-blog/client'//非公开API，用于获取元数据，比如title、permalink
import { ReactCusdis } from 'react-cusdis';//评论组件
import { useColorMode, ColorMode } from '@docusaurus/theme-common';//获取当前的颜色，支持夜间模式
//highlight-end

type Props = WrapperProps<typeof BlogPostItemType>;

export default function BlogPostItemWrapper(props: Props): ReactNode {
//highlight-start
  const DocusaurusColorModeToCusdisTheme: Record<ColorMode, 'light' | 'dark' | 'auto'> = {
    light: 'light',
    dark: 'dark'
  };
  const { colorMode } = useColorMode();
  const cusdisTheme = DocusaurusColorModeToCusdisTheme[colorMode];

  const { metadata, isBlogPostPage } = useBlogPost();
  const { title, permalink } = metadata;
  const CusdisContainer = (//Key={cusdisTheme}是说，让这个div随着cusdisTheme的动态变化而更新。
  // 不然就只能等待页面刷新后才能看见效果
    <div key={cusdisTheme}>
      <ReactCusdis
        lang="zh-cn"
        attrs={{
          host: 'https://cusdis.com',
          appId: '3ae124ed-37d0-46c0-84f8-e1feec7bee8a',
          pageId: permalink,
          pageTitle: title,
          pageUrl: "https://lizhenyu.top" + permalink,
          theme: cusdisTheme,
        }}
      />
    </div>
  );
//highlight-end
  return (
    <>
      <BlogPostItem {...props} />
      //highlight-next-line
      {isBlogPostPage && CusdisContainer}
    </>
  );
}
```

:::warning
必须在“页面内部”使用`useBlogPost()`钩子。不然会报错。

PS：如果你wrap了`DocItem`，不要在里面用`useDoc()`，因为那似乎是文档外部，会报错。似乎可以用`props.title`。我wrap的是`DocItem/Footer`。这样做一切正常。而直接wrap `DocItem`，会得到一个宽度占满中间和右边的超巨大评论区——显然并非所想要的。
:::

同理，对于`DocItem/Footer`（懒得高亮了）：

```jsx title="你 wrap 得到的 index.jsx"
import React, { type ReactNode } from 'react';
import Footer from '@theme-original/DocItem/Footer';
import type FooterType from '@theme/DocItem/Footer';
import type { WrapperProps } from '@docusaurus/types';

import { ReactCusdis } from 'react-cusdis';
import { useColorMode, ColorMode } from '@docusaurus/theme-common';
import { useDoc } from '@docusaurus/plugin-content-docs/client';


type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): ReactNode {
  // 直接从 props 中获取 metadata
  const { metadata } = useDoc();

  const DocusaurusColorModeToCusdisTheme: Record<ColorMode, 'light' | 'dark' | 'auto'> = {
    light: 'light',
    dark: 'dark'
  };
  const { colorMode } = useColorMode();
  const cusdisTheme = DocusaurusColorModeToCusdisTheme[colorMode];

  const { title, permalink } = metadata;
  const CusdisContainer = (
    <div key={cusdisTheme}>
      <ReactCusdis
        lang="zh-cn"
        attrs={{
          host: 'https://cusdis.com',
          appId: '3ae124ed-37d0-46c0-84f8-e1feec7bee8a',
          pageId: permalink,
          pageTitle: title,
          pageUrl: "https://lizhenyu.top" + permalink,
          theme: cusdisTheme,
        }}
      />
    </div>
  );
  return (
    <>

      <Footer {...props} />
      {CusdisContainer}
    </>
  );
}
```