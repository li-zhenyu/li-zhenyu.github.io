---
title: 现已启用text-autospace
slug: now-we-have-text-autospace
authors: [li-zhenyu]
tags:
  - site
---

今年开始许多浏览器支持CSS的`text-autospace`。尽管还有许多浏览器不支持。总之早晚都会支持的。本站选择拥抱这一新标准。

这一属性的兼容性见[MDN页面](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-autospace)。可见，主流的浏览器在2025年新版本几乎都已经支持这一属性。我很喜欢它，并向你推荐。

<!-- truncate -->

现在设置`text-autospace: normal;`，效果将显示为在需要添加间距的中英文字符之间，添加一个$\frac{1}{8}$的空格。据说以后会增设可以调整这一默认宽度的机制：[^css-autospace]

> Spacing conventions vary, but values typically range from 1/4ic to as low as 1/8ic, with 1/4ic being more common in historical contexts due to metal type limitations and 1/6ic or thinner being more common in proportional typesetting. Because these spaces are inserted by default (through the initial value, normal), CSS uses 1/8ic in order to be conservative in its interference. A future level of this module may introduce control over the amount of spacing.

[^css-autospace]: https://drafts.csswg.org/css-text-4/#propdef-text-autospace

所以这里用`text-autospace`替代手动添加空格。由于目前暂无浏览器支持`replace`这个值，因此我手动移除了先前Post的所有空格。所以它们的更新时间均有变化。

总而言之，以后有浏览器帮我操心空格的事情了。

近期我将对本站的其他文档和页面进行调整，以向使用最新的浏览器的读者提供舒适的阅读体验。

及时拥抱新技术、新标准，抛弃旧范式、旧思路，可以有效将自身成本转嫁到外部。比如本站所使用的Docusaurus版本以及AVIF格式的图片，在许多老旧平台上均无法正常工作。

这样面向未来的选择，听起来或许有些激进。但是它们对我来说提供了便利和舒适，也让本站显得朝气蓬勃而非一潭死水。最重要的是，它们增强了本站的可维护性。让我无需手动敲下一个个空格，或者疲于应付快速膨胀的图片储存体积。因此我毫不犹豫地选择接受它们。