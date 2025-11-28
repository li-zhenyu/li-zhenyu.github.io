import React, {type ReactNode} from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import type BlogPostItemType from '@theme/BlogPostItem';
import type {WrapperProps} from '@docusaurus/types';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client'

type Props = WrapperProps<typeof BlogPostItemType>;

export default function BlogPostItemWrapper(props: Props): ReactNode {
  const {metadata} = useBlogPost();
  const {title, permalink} = metadata;
  const inside_title = title.replaceAll("〈", "《").replaceAll("〉", "》").replaceAll("《", "〈").replaceAll("》", "〉");//按照权威机构，内部第三层次的书名号，回到《》。
  return (
    <>
      <BlogPostItem {...props} />
      <a href={`mailto:lizhenyu66666666@outlook.com?subject=关于博客文章《${inside_title}》的邮件`}>（暂代评论区）就《{inside_title}》给作者写邮件</a>
    </>
  );
}
