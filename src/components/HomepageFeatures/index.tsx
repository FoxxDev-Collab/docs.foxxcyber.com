import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'CMMC Compliance Made Simple',
    description: (
      <>
        Bedrock-CMMC streamlines your path to CMMC Level 2 certification with
        built-in NIST SP 800-171 control mapping, automated evidence collection,
        and assessment-ready documentation.
      </>
    ),
  },
  {
    title: 'Continuous Monitoring',
    description: (
      <>
        Track your compliance posture in real time. Manage your System Security
        Plan (SSP), Plan of Action &amp; Milestones (POA&amp;M), and control
        assessments from a single platform.
      </>
    ),
  },
  {
    title: 'Assessment Ready',
    description: (
      <>
        Generate ATO packages, coordinate with C3PAO assessors, and maintain
        audit-ready evidence. Bedrock-CMMC keeps your organization prepared for
        certification at all times.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md padding-vert--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
