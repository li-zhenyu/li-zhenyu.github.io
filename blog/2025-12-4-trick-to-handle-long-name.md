---
title: 耍小聪明：如何每次都写一遍很长的名字
slug: trick-to-handle-long-name
authors: [li-zhenyu]
tags:
  - law 
---

今天写了这么一个课程作业，用了$\LaTeX$，其中一段：

```latex
\newcommand{\nowsfjs}{2020年《最高人民法院关于审理建设工程施工合同纠纷案件适用法律问题的解释（一）》}
\newcommand{\futuresfjs}{2025年《最高人民法院关于审理建设工程施工合同纠纷案件适用法律问题的解释（二）（征求意见稿）》}
\newcommand{\pifu}{2002年《最高人民法院关于建设工程价款优先受偿权问题的批复》}
\newcommand{\oldsfjsa}{2004年《最高人民法院关于审理建设工程施工合同纠纷案件适用法律问题的解释》}
\newcommand{\oldsfjsb}{2018年《最高人民法院关于审理建设工程施工合同纠纷案件适用法律问题的解释（二）》}
```

<!-- truncate -->

然后正文部分大概像这样：

```latex
某某制度，这是\oldsfjsb 的规定，在现行的\nowsfjs 中基本保留。\futuresfjs 则对其加以细化……
```

我想，这样会让我看上去很认真，也能让字数显得多一点。