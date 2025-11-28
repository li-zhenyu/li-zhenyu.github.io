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
