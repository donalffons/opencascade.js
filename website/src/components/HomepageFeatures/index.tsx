import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Web-First CAD',
    Svg: require('@site/static/img/undraw_internet_on_the_go_re_vben.svg').default,
    description: (
      <>
        Build web-enabled CAD applications that run in the browser, in the cloud or on any device that supports WebAssembly.
      </>
    ),
  },
  {
    title: 'Blazingly Fast',
    Svg: require('@site/static/img/undraw_outer_space_re_u9vd.svg').default,
    description: (
      <>
        Using the power of Emscripten and WebAssembly, the CAD Kernel runs at near-native speeds and even supports multi-threading on all modern browsers.
      </>
    ),
  },
  {
    title: 'Small Footprint',
    Svg: require('@site/static/img/undraw_add_files_re_v09g.svg').default,
    description: (
      <>
        Ship only the code that your application needs using custom builds of the library. Save your user's bandwidth and memory and allow your code to run on low-end devices.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
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

export default function HomepageFeatures(): JSX.Element {
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
