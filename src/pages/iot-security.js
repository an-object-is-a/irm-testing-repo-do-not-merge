import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import loadable from '@loadable/component';

import Layout from '../components/Layout';
import homepagebanner1 from '../images/banners/iot.webp';
import is1 from '../images/svg/iot1.webp';
import is2 from '../images/svg/iot2.svg';
import check from '../images/svg/check.svg';

const Logos = loadable(() => import('../components/Logos'));
const Slide = loadable(() => import('react-reveal/Slide'));

const IotSecurity = () => (
  <Layout pageTitle="What is Internet of Things (IoT) Security? | Tips & Guide Here">
    <Helmet>
      <meta name="description" content="The Internet of Things (IoT) - Worried about IoT Security? Talk to our Cybersecurity Trusted Advisor’s to learn how you can effectively mitigate these Security Threats and Risks." />
      <meta name="keywords" content="cybersecurity, cyber security, security threats, network security, network security assessments, it security assessment" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="google-site-verification" content="7mCyYHywOZgOshvytuzwG7CdqjexkBr4tn3WykxnWxw" />
      <meta name="robots" content="index, follow" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="IRM Consulting &amp; Advisory" />
      <meta property="article:publisher" content="https://www.facebook.com/irmcon" />
      <meta property="article:modified_time" content="2021-01-11T10:52:43+00:00" />
      <meta property="og:image:width" content="1824" />
      <meta property="og:image:height" content="596" />
      <meta property="og:url" content="https://irmcon-staging.netlify.app/iot-security/" />
      <meta property="og:title" content="IRM Consulting & Advisory - Cybersecurity Consulting for your SaaS Business" />
      <meta property="og:description" content="The Internet of Things (IoT) - Worried about IoT Security? Talk to our Cybersecurity Trusted Advisor’s to learn how you can effectively mitigate these Security Threats and Risks." />
      <meta property="og:image" content="https://xgw.394.myftpupload.com/wp-content/uploads/2021/10/irm-logo-social-scaled.jpg" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content="IRM Consulting & Advisory - Cybersecurity Consulting for your SaaS Business" />
      <meta property="twitter:description" content="The Internet of Things (IoT) - Worried about IoT Security? Talk to our Cybersecurity Trusted Advisor’s to learn how you can effectively mitigate these Security Threats and Risks." />
      <meta property="twitter:image" content="https://xgw.394.myftpupload.com/wp-content/uploads/2021/10/irm-logo-social-scaled.jpg" />
      <meta property="twitter:site" content="IRM Consulting & Advisory" />
      <link rel="canonical" href="https://irmcon-staging.netlify.app/iot-security/" />
    </Helmet>

    <section className="page-title-sec" style={{ background: `url(${homepagebanner1})` }}>
      <div className="auto-container">
        <div className="row">
          <div className="col-md-12">
            <div className="content-box">
              <h1>Internet of Things (IoT) <br />Security</h1>
              <p>Protect and secure data and information transmitted between sensors, connecting devices <br /> and IoT Applications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="services-detail iot-page">
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-5 col-md-12">
            <Slide left duration={2000}>
              <div className="image-box">
                <img src={is1} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" />
              </div>
            </Slide>
          </div>
          <div className="col-lg-7 col-md-12">
            <Slide right duration={2000}>
              <div className="detail-box">
                <h3>What is IoT?</h3>
                <p><span className="blue-color">Internet of things (IoT)</span> is a collection of many <span className="blue-color">interconnected</span> objects, services, humans, and devices that can communicate, share data, and information to achieve a common goal in different areas and applications.</p>
                <p><span className="blue-color">IoT</span> has many implementation domains like transportation, agriculture, healthcare, energy production and distribution. <span className="blue-color"> Devices</span> in IoT follow an <span className="blue-color">Identity Management</span> approach to be identified in a collection of similar and heterogeneous devices.</p>
                <p>Similarly, a region in IoT can be defined by an IP address but within each region each entity has a unique. The purpose of IoT is to transform the way we live today by making intelligent devices around us perform daily tasks and chores. Smart homes, smart cities, smart transportation and infrastructure etc. are the terms which are used in relevance with IoT. There are many application domains of IoT, ranging from personal to enterprise environments.</p>
              </div>
            </Slide>
          </div>
        </div>
      </div>
      <div className="light-blue-background py-5 my-5">
        <div className="auto-container">
          <div className="row">
            <div className="col-md-12">
              <div className="detail-box">
                <h3>Why is IoT Security Important?</h3>
                <p>IoT mainly operates on three layers termed as Perception, Network, and Application layers. Each layer of IoT has inherent security issues associated with it.</p>
                <h3>Perception Layer</h3>
                <p>The <span className="blue-color">Perception Layer</span> is also known as the <span className="blue-color">“Sensors”</span> layer in IoT. The purpose of this layer is to acquire the data from the environment with the help of sensors and actuators. This layer detects, collects, and processes information and then transmits it to the network layer. This layer also performs the IoT node collaboration in local and short-range networks.</p>
                <h3>Network Layer</h3>
                <p>IoT mainly operates on three layers termed as Perception, Network, and Application layers. Each layer of IoT has inherent security issues associated with it.</p>
                <p>The <span className="blue-color">Network Layer</span> of IoT serves the function of <span className="blue-color"> data routing and transmission</span>  to different IoT hubs and devices over the Internet. At this layer, cloud computing platforms, Internet gateways, switching, and routing devices etc. operate by using some of the very recent technologies such as Wi-Fi, LTE, Bluetooth, 4G or 5G etc. The network gateways serve as the mediator between different IoT nodes by aggregating, filtering, and transmitting data to and from different sensors.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="auto-container">
        <div className="row">
          <div className="col-md-12">
            <div className="detail-box">
              <h3>Application Layer</h3>
              <p>The <span className="blue-color">Application Layer</span> guarantees the authenticity, integrity, and confidentiality of the data. At this layer, the purpose of IoT or the creation of a smart environment is achieved.</p>
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="detail-list detail-box">
              <div className="center-image text-center">
                <Slide top duration={2000}>
                  <img src={is2} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" />
                </Slide>
              </div>
              <p>Each IoT layer is susceptible to security threats and attacks. These can be active, or passive, and can originate from external sources or internal network owing to an attack by the Insider</p>
              <p>An active attack directly stops the service while the passive kind monitors IoT network information without hindering its service. At each layer, IoT devices and services are susceptible to Denial-of-Service attacks (DoS), which make the device, resource or network unavailable to authorized users.</p>
              <p>Typical security goals of Confidentiality, Integrity and Availability (CIA) also apply to IoT. However, the IoT has many restrictions and limitations in terms of the components and devices, computational and power resources, and even the heterogonous and ubiquitous nature of IoT that introduce additional concerns.</p>
              <p>The security challenges of IoT can be broadly divided into two classes: Technological challenges and Security challenges. There are different mechanisms to ensure security including but not limited to: -</p>
              <ul>
                <li><i className="icon"><img src={check} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" /></i>The software running on all IoT devices should be authorized.</li>
                <li><i className="icon"><img src={check} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" /></i>When an IoT device is turned on, it should first authenticate itself into the network before collecting or sending data.</li>
                <li><i className="icon"><img src={check} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" /></i>Since the IoT devices have limited computation and memory capabilities, firewalling is necessary in IoT network to filter packets directed to the devices.</li>
                <li><i className="icon"><img src={check} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" /></i>The updates and patches on the device should be installed in a way that additional bandwidth is not consumed.</li>
              </ul>
              <p>Talk to our Cybersecurity Trusted Advisor’s to learn how you can effectively mitigate these Security Threats and Risks.</p>
              <div className="learno-more">
                <Link to="/cybersecurity-consulting-appointments" className="theme-btn btn-style-one">
                  Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Logos />
  </Layout>
)

export default IotSecurity;
