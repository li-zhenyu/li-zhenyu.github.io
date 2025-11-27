import React from 'react';
import DocItem from '@theme-original/DocItem';
import CusdisComments from '@site/src/components/CusdisComments';

export default function DocItemWrapper(props) {
  return (
    <>
      <DocItem {...props} />
           <CusdisComments />
    </>
  );
}
