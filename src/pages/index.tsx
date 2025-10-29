import type {ReactNode} from 'react';
import clsx from 'clsx';
//import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <h2 className="hero__subtitle">{siteConfig.tagline}</h2>

      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`欢迎来到 ${siteConfig.title}`}
      description={`${siteConfig.title}首页，感谢您的到来`}>
      
      <HomepageHeader />
      <main>
        {<HomepageFeatures />}
      </main>
    </Layout>
  );
}
