import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type CardItem = {
  title: string;
  description: string;
  to: string;
  emoji: string;
};

const cards: CardItem[] = [
    {
    title: '奶龙都能看懂的民法总则手册',
    description: '奶龙能看懂，你也能看懂 📚',
    to: '/docs/civil',
    emoji: '🐉',
  },
  {
    title: '博客',
    description: '博客就是博客 📝',
    to: '/blog',
    emoji: '📰',
  },
];

function DocsCard({title, description, to, emoji}: CardItem) {
  return (
    <Link to={to} className={clsx('card', styles.docsCard)}>
      <div className="card__body">
        <Heading as="h3">
          {emoji} {title}
        </Heading>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={clsx('text--center', styles.features)}>
      <div className="container">
        <Heading as="h2" className="margin-bottom--lg">
          🚀 速览
        </Heading>
        <div className="row">
          {cards.map((item, idx) => (
            <div key={idx} className="col col--6 margin-bottom--lg">
              <DocsCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
