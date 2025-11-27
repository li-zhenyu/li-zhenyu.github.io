import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import { ReactCusdis } from 'react-cusdis';

export default function BlogPostItemWrapper(props) {
  return (
    <>
      <BlogPostItem {...props} />
         <ReactCusdis
          lang="zh-cn" //中文
          attrs={{
          host: 'https://cusdis.com',
          appId: '3ae124ed-37d0-46c0-84f8-e1feec7bee8a',
          pageId: MDXComponent.metadata.permalink,
          pageTitle: MDXComponent.metadata.title,
          pageUrl: 'https://lizhenyu.top/'+MDXComponent.metadata.permalink,
          }}
          />
    </>
  );
}
