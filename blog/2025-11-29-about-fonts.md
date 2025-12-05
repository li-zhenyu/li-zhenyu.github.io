---
slug: about-fonts
title: 站点的字体和版式
authors: [li-zhenyu]
tags: 
  - site
---

## 字体

本站的字体优先级，配置为：

```css
--ifm-font-family-base: "Noto Sans CJK SC", "Noto Sans SC", "Noto Sans",
 "思源黑体 SC", "思源黑体", "PingFang SC", "Microsoft YaHei", "Heiti SC",
  "WenQuanYi Micro Hei", "Helvetica Neue", Arial, sans-serif;
```

<!-- truncate -->

在Windows平台上，如果足够在意细节，就会发现默认的微软雅黑字体的正反引号看起来极为相似。对我而言，这很难受，因为阅读检查自己的Blog时，很难看出引号是不是正确匹配的。因此我把默认的字体设置为Noto。它的正反引号看起来很明显。

读者通常而言无需考虑正反引号的问题。或许您和我一样，对细节有一点点稍微过分的执着，则可以考虑安装一份Noto Sans CJK SC字体。它是免费开源、允许商用的。

## 版式

### 代码块

对代码块的等宽字体做了调整，为：

```css
font-family: "Fira Code", "JetBrains Mono", "Cascadia Code", "Consolas", "SF Mono",
  "Monaco", "Source Code Pro", "Roboto Mono", "Inconsolata", "DejaVu Sans Mono",
  var(--ifm-font-family-base), monospace
```

这是为了避免看到宋体和Courier。它们不是不好，只是跟本站不搭。事实上，Windows默认的Consolas跟本站也不太协调。我自己安装了Fira Code。它支持连字，比如这里的`->`会被连接成一个$\rightarrow$。

### `<em>`标签

对`<em>`标签的样式做了调整，为：

```css
em {
    font-style: normal;
    text-decoration: underline dotted 2.5px ;
    text-decoration-color: var(--ifm-color-primary);
    text-underline-offset: 4px;
}
```

这是因为，italic在中文环境下会产生伪斜体。中文没有这种字体，正式的出版中也不会用到。伪斜体也影响阅读体验，显得不够正式，也难以与normal字体区分。因此这里改为下面加主题颜色（本站是蓝色）的圆点来表示。就像*这样*。