import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';


const FeatureList = [
  {
    title: 'Microservice',
    Svg: require('../../static/img/undraw_server_q2pb.svg').default,
    description: (
      <>
        Mô hình microservice module hóa cao, cung cấp khả năng mở rộng linh hoạt.
      </>
    ),
  },
  {
    title: 'Bảo mật',
    Svg: require('../../static/img/undraw_security_o890.svg').default,
    description: (
      <>
        API người dùng và thiết bị được phân quyền chặt chẽ.
      </>
    ),
  },
  {
    title: 'Mobile app',
    Svg: require('../../static/img/undraw_mobile_development_8gyo.svg').default,
    description: (
      <>
        Mobile app đa nền tảng.
      </>
    ),
  },
  {
    title: 'Tùy chỉnh',
    Svg: require('../../static/img/undraw_advanced_customization_58j6.svg').default,
    description: (
      <>
        Xây dựng và kiểm soát hoàn toàn bởi Makipos.
      </>
    ),
  }
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
