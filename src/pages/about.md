---
title: 关于
---
## 关于我

李振宇，山东人。不想考公。最近觉得有时用网名不怎么方便，现已实名上网。

## 关于网站

```mermaid
flowchart TD
    subgraph S1 [1. 源代码管理]
        direction TB
        Repo["Github 仓库<br/>li-zhenyu/li-zhenyu.github.io"]
        Repo --> C[Branch: source]
        Repo --> D[Branch: gotopagesdev]
    end

    subgraph S2 [2. 构建与部署]
        direction TB
        C --push事件触发--> Actions[Github Actions<br/>自动构建]
        Actions --Deploy--> B
    end

    subgraph S3 [3. 网站托管与访问]
        direction TB
        B[Branch: master<br/>托管构建后的文件] -- 托管于 --> E[li-zhenyu.pages.dev]
        D -- 托管于 --> G[li-zhenyu.github.io]
    end

    subgraph S4 [4. 用户访问]
        direction TB
        F["自定义域名<br/>lizhenyu.top"] -- CNAME记录指向 --> E
        G -- JavaScript跳转 --> E
    end

    S1 --> S2 --> S3 --> S4
```

[lizhenyu.top](https://lizhenyu.top)这个域名，我还在考虑要不要续费。[li-zhenyu.pages.dev](https://li-zhenyu.pages.dev)是免费的，会长期使用。但是国内访问可能不太稳定，SEO效果也不怎么样。

因此，如果lizhenyu.top挂掉了，读者可以考虑看一下li-zhenyu.pages.dev，如果也挂掉了，可以设法看一下我的[Github Repo](https://github.com/li-zhenyu/li-zhenyu.github.io)。[我的邮箱](mailto:lizhenyu66666666@outlook.com)长期使用，欢迎您将网站无法访问的情况通过Github Issues或者邮箱向我反馈。