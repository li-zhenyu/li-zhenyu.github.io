import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import CusdisComments from '@site/src/components/CusdisComments';

export default function BlogPostItemWrapper(props) {
  return (
    <>
      <BlogPostItem {...props} />
      <CusdisComments />
    </>
  );
}
