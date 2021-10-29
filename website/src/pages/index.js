import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import useBaseUrl from '@docusaurus/useBaseUrl';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg margin-right--lg"
            to="https://makipos.com/">
            Makipos
          </Link>
          <Link
            className="button button--secondary button--lg margin-right--lg"
            to="https://makihome.vn/">
            Makihome
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://github.com/makipos/iot-server">
            Github
          </Link>
        </div>
      </div>
    </header>
  );
}

function Flexible() {
  return (
    <div className='row padding-vert--xl' >
      <div className="text--left margin-vert--md col col--4 col--offset-2">

        <h3>Linh động</h3>
        <p>
          <a href={useBaseUrl('/docs/overview/architecture')}>Kiến trúc</a> microservice cùng với docker swarm cho phép hệ thống dễ dàng mở rộng đáp ứng chịu tải cao<br/>
          Phát triển chức năng mới trong hệ thống dễ dàng
        </p>
      </div>
      <img src={useBaseUrl('/img/scalable.jpg')} className='col col--3 col--offset-1' alt={'Linh động'} />
    </div>
  );
}

function EasyInstall() {
  return (
    <div className='row padding-vert--xl' style={{backgroundColor: 'var(--ifm-color-secondary-light)'}}>
      <img src={useBaseUrl('/img/undraw_setup_wizard_r6mr.svg')} className='col col--3 col--offset-2' alt={'Linh động'} />
      <div className="text--left margin-vert--md col col--4 col--offset-2">

        <h3>Dễ dàng cài đặt</h3>
        <p>
          Quá trình cài đặt lên máy chủ được đơn giản hóa bằng các script được cung cấp sẵn, bao gồm cả thao tác khởi tạo database<br/>
          Cấu hình dễ dàng bằng docker compose và config file cho từng service<br/>
          <a href={useBaseUrl('/docs/tutorial/install/installation')}>Hướng dẫn từng bước</a>
        </p>

      </div>
    </div>
  );
}

function MobileApp() {
  return (
    <div className='row padding-vert--lg' style={{backgroundColor: 'var(--ifm-color-secondary-darkest)'}} >
      <div className="text--left margin-vert--md col col--4 col--offset-2">

        <h3>Mobile app</h3>
        <p>
          Ứng dụng xây dựng trên framework React Native đa nền tảng cho <a href="https://play.google.com/store/apps/details?id=com.mkpsmarthome.pro">android</a> và <a href="https://www.apple.com/ios/app-store/">ios</a>. Giao diện thân thiện người dùng, tùy chỉnh dễ dàng<br/>
          - Điều khiển quản lý thiết bị<br/>
          - Thời tiết trực quan<br/>
          - Theo dõi qua camera<br/>
          - Tùy chỉnh phòng, nhà, biểu tượng, tên thiết bị<br/>
          - Chia sẻ quyền sử dụng<br/>
          - Theo dõi lịch sử thiết bị<br/>
          - Thông báo người dùng<br/>
          - Hẹn giờ điều khiển thiết bị<br/>
          - Kịch bản<br/>
          - Luật thông minh<br/>
          - Đa ngôn ngữ<br/>
          - Tiếp nhận phản hồi từ người dùng
        </p>
      </div>
      <img src={useBaseUrl('/img/mobileapp.png')} className='col col--3 col--offset-1' alt={'Linh động'} />
    </div>
  );
}

function Dashboard() {
  return (
    <div className='row padding-vert--xl' style={{backgroundColor: 'var(--ifm-color-secondary-light)'}}>
      <img src={useBaseUrl('/img/dashboard.png')} className='col col--3 col--offset-2' alt={'Linh động'} />
      <div className="text--left margin-vert--md col col--4 col--offset-2">
        <h3>Dashboard</h3>
        <p>
          Web quản trị xây dựng dựa trên coreui reactjs trực quan và tùy chỉnh dễ dàng, giao tiếp dữ liệu với server thông qua API bảo mật chặt chẽ
        </p>
      </div>
    </div>
  );
}

const Tools = () => (
  <div className="padding-vert--lg"
    style={{textAlign: 'center'}}>
    <div class="row">
      <img src={useBaseUrl('/img/docker.png')} alt={'docker'} className='col col--1 col--offset-1' />
      <img src={useBaseUrl('/img/traefik.png')} alt={'traefik'} className='col col--1 col--offset-2' />
      <img src={useBaseUrl('/img/emq.png')} alt={'emq'} className='col col--1 col--offset-2' />
      <img src={useBaseUrl('/img/redis.svg')} alt={'redis'} className='col col--1 col--offset-2' />
    </div>
    <div class="row">
      <img src={useBaseUrl('/img/mongodb.png')} alt={'mongodb'} className='col col--1 col--offset-1' />
      <img src={useBaseUrl('/img/nodejs.png')} alt={'nodejs'} className='col col--1 col--offset-2' />
      <img src={useBaseUrl('/img/coreui.png')} alt={'coreui'} className='col col--1 col--offset-2' />
      <img src={useBaseUrl('/img/react-native.png')} alt={'react-native'} className='col col--1 col--offset-2' />
    </div>
  </div>
);

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <Flexible/>
        <EasyInstall/>
        <MobileApp/>
        <Dashboard/>
        <Tools/>
      </main>
    </Layout>
  );
}
