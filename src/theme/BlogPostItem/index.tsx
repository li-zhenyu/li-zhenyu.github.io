import React, {type ReactNode} from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import type BlogPostItemType from '@theme/BlogPostItem';
import type {WrapperProps} from '@docusaurus/types';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client'
import { ReactCusdis } from 'react-cusdis';

type Props = WrapperProps<typeof BlogPostItemType>;

export default function BlogPostItemWrapper(props: Props): ReactNode {
  const {metadata} = useBlogPost();
  const {title, permalink} = metadata;
  const inside_title = title.replaceAll("〈", "《").replaceAll("〉", "》").replaceAll("《", "〈").replaceAll("》", "〉");//按照权威机构，内部第三层次的书名号，回到《》。

  return (
    <>
      <BlogPostItem {...props} />
    <div>
      <ReactCusdis
        attrs={{
          host: 'https://cusdis.com',
          appId: '3ae124ed-37d0-46c0-84f8-e1feec7bee8a',
          pageId: permalink,
          pageTitle: title,
          pageUrl: "https://lizhenyu.top" + permalink
        }}
      />

    </div>
    </>
  );
}
