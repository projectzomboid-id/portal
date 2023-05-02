import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Learn from Players',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Our platform is designed to help you improve your game by learning from the best. Connect with top players, access exclusive tips and insights, and take your skills to the next level.
      </>
    ),
  },
  {
    title: 'Community-driven',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
	At our core, we believe that gaming is all about community. That's why we've built a platform that is driven by the players themselves. Join our vibrant community, share your thoughts and ideas, and help shape the future of gaming.
      </>
    ),
  },
  {
    title: 'Built with Docusaurus',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Our platform is powered by Docusaurus, a modern open-source documentation framework that makes it easy to build and maintain high-quality websites. With Docusaurus, we can ensure that our platform is fast, reliable,
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
