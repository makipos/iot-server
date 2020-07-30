/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = (props) => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = (props) => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = (props) => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const PromoSection = (props) => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = (props) => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/undraw_server_cluster_jwwq.svg`} />
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button href="https://makihome.vn/">Website</Button>
            <Button href="https://github.com/makipos/iot-server">Github</Button>
            {/*<Button href={docUrl('doc1.html')}>Example Link</Button>*/}
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = (props) => (
      <Container
        padding={['top', 'bottom']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Features = () => (
      <Block layout="fourColumn" background='light'>
        {[
          {
            image: `${baseUrl}img/undraw_server_q2pb.svg`,
            imageAlign: 'top',
            title: 'Microservice',
            content: 'Mô hình microservice module hóa cao, cung cấp khả năng mở rộng linh hoạt',
          },
          {
            content: 'API người dùng và thiết bị được phân quyền chặt chẽ',
            image: `${baseUrl}img/undraw_security_o890.svg`,
            imageAlign: 'top',
            title: 'Bảo mật',
          },
          {
            image: `${baseUrl}img/undraw_mobile_development_8gyo.svg`,
            imageAlign: 'top',
            title: 'Mobile app',
            content: 'Mobile app đa nền tảng',
          },
          {
            image: `${baseUrl}img/undraw_advanced_customization_58j6.svg`,
            imageAlign: 'top',
            title: 'Tùy chỉnh',
            content: 'Xây dựng và kiểm soát hoàn toàn bởi Makipos',
          }
        ]}
      </Block>
    );

    const Tools = () => (
      <div
        className="productShowcaseSection paddingTop"
        style={{textAlign: 'center'}}>
        <GridBlock
          align="center"
          layout={'fourColumn'}
          contents={[
            {
              image: `${baseUrl}img/docker.png`,
              imageAlign: 'top',
            }, {
              image: `${baseUrl}img/traefik.png`,
              imageAlign: 'top',
            }, {
              image: `${baseUrl}img/emq.png`,
              imageAlign: 'top',
            }, {
              image: `${baseUrl}img/redis.svg`,
              imageAlign: 'top',
            }, {
              image: `${baseUrl}img/mongodb.png`,
              imageAlign: 'top',
            }, {
              image: `${baseUrl}img/nodejs.png`,
              imageAlign: 'top',
            }, {
              image: `${baseUrl}img/coreui.png`,
              imageAlign: 'top',
            }, {
              image: `${baseUrl}img/react-native.png`,
              imageAlign: 'top',
            }
          ]}
        />
      </div>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Feature Callout</h2>
        <MarkdownBlock>These are features of this project</MarkdownBlock>
      </div>
    );

    const EasyInstall = () => (
      <Block background='light'>
        {[
          {
            content:
              'Quá trình cài đặt lên máy chủ được đơn giản hóa bằng các script được cung cấp sẵn, bao gồm cả thao tác khởi tạo database  \n\
              Cấu hình dễ dàng bằng docker compose và config file cho từng service  \n\
              [Hướng dẫn từng bước](/iot-server/docs/installation) ',
            image: `${baseUrl}img/undraw_setup_wizard_r6mr.svg`,
            imageAlign: 'left',
            title: 'Dễ dàng cài đặt',
          },
        ]}
      </Block>
    );

    const Flexible = () => (
      <Block>
        {[
          {
            content:
              '[Kiến trúc](/docs/architecture) microservice cùng với docker swarm cho phép hệ thống dễ dàng mở rộng đáp ứng chịu tải cao  \n\
              Phát triển chức năng mới trong hệ thống dễ dàng  \n',
            image: `${baseUrl}img/scalable.jpg`,
            imageAlign: 'right',
            title: 'Linh động',
          },
        ]}
      </Block>
    );

    const Dashboard = () => (
      <Block background='light'>
        {[
          {
            content:
              'Web quản trị xây dựng dựa trên coreui reactjs trực quan và tùy chỉnh dễ dàng, giao tiếp dữ liệu với server thông qua API bảo mật chặt chẽ',
            image: `${baseUrl}img/dashboard.png`,
            imageAlign: 'left',
            title: 'Dashboard',
          },
        ]}
      </Block>
    );

    const MobileApp = () => (
      <Block background='dark'>
        {[
          {
            content:
              'Ứng dụng xây dựng trên framework React Native đa nền tảng cho [android](https://play.google.com/store/apps/details?id=com.mkpsmarthome.pro) và [ios](https://www.apple.com/ios/app-store/). Giao diện thân thiện người dùng, tùy chỉnh dễ dàng  \n\
              - Điều khiển quản lý thiết bị  \n\
              - Chia sẻ quyền sử dụng  \n\
              - Theo dõi lịch sử thiết bị  \n\
              - Thông báo người dùng  \n\
              - Hẹn giờ điều khiển thiết bị  \n\
              - Kịch bản  \n\
              - Luật thông minh  \n',
            image: `${baseUrl}img/mobileapp.png`,
            imageAlign: 'right',
            title: 'Mobile app',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter((user) => user.pinned)
        .map((user) => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = (page) => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          {/*<FeatureCallout />*/}
          <Flexible/>
          <EasyInstall />
          <MobileApp/>
          <Dashboard/>
          <Tools/>
          {/*<Showcase />*/}
        </div>
      </div>
    );
  }
}

module.exports = Index;
