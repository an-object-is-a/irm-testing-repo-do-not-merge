import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import loadable from '@loadable/component';

import Layout from '../components/Layout';
import homepagebanner1 from '../images/banners/sa.webp'
import sas1 from '../images/svg/sa-image.webp'

const Logos = loadable(() => import('../components/Logos'));
const Slide = loadable(() => import('react-reveal/Slide'));

const SecurityArchitectureSa = () => (
  <Layout pageTitle="Cyber Security Architecture Services |  IRM Consulting & Advisory">
    <Helmet>
      <meta name="description" content="IRM Consulting & Advisory, one of the leading cybersecurity companies in Canada offers exceptional Security Architecture Advisory and Services. Our team of security experts will you give you the best Security Architecture Advisory and Services." />
      <meta name="keywords" content="cybersecurity architecture, security architecture, cybersecurity, cybersecurity consulting" />
      <meta charSet="UTF-8" />
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
      <meta property="og:url" content="https://irmcon-staging.netlify.app/security-architecture-sa/" />
      <meta property="og:title" content="IRM Consulting & Advisory - Cybersecurity Consulting for your SaaS Business" />
      <meta property="og:description" content="IRM Consulting & Advisory, one of the leading cybersecurity companies in Canada offers exceptional Security Architecture Advisory and Services. Our team of security experts will you give you the best Security Architecture Advisory and Services." />
      <meta property="og:image" content="https://xgw.394.myftpupload.com/wp-content/uploads/2021/10/irm-logo-social-scaled.jpg" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content="IRM Consulting & Advisory - Cybersecurity Consulting for your SaaS Business" />
      <meta property="twitter:description" content="IRM Consulting & Advisory, one of the leading cybersecurity companies in Canada offers exceptional Security Architecture Advisory and Services. Our team of security experts will you give you the best Security Architecture Advisory and Services." />
      <meta property="twitter:image" content="https://xgw.394.myftpupload.com/wp-content/uploads/2021/10/irm-logo-social-scaled.jpg" />
      <meta property="twitter:site" content="IRM Consulting & Advisory" />
      <link rel="canonical" href="https://irmcon-staging.netlify.app/security-architecture-sa/" />
    </Helmet>

    <section className="page-title-sec" style={{ background: `url(${homepagebanner1})` }}>
      <div className="auto-container">
        <div className="row">
          <div className="col-md-12">
            <div className="content-box">
              <h1>Security Architecture (SA)</h1>
              <p>Protect your Cloud Network Infrastructure design with <br />  in-depth Threat Modeling, Defense-on-Depth Security  <br /> Principles and Control Specifications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="services-detail">
      <div className="auto-container">
        <div className="row">
          <div className="col-md-12">
            <div className="detail-list mb-5">
              <p>At IRM Consulting &amp; Advisory, we focus on technology and components of security to ensure the protection of the architectural design of your software. Security architectures may include firewalls, load balancers, configuration of ingress and egress traffic, Advanced Threat Protection, DDos protection, and Security Configuration, among others. We deliver the entire security necessary to protect and keep the confidentiality, integrity, availability, security and privacy of your data and information assets. We specialize in identifying specifications, developing processes, and following standard operating procedures (SOPs) involved in mitigating, investigating, and preventing different cybersecurity threats.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="light-blue-background py-5 mb-2">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <Slide left duration={2000}>
                <div className="image-box">
                  <img width="400px" src={sas1} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" />
                </div>
              </Slide>
            </div>
            <div className="col-lg-7 col-md-12">
              <Slide right duration={2000}>
                <div className="detail-box">
                  <h3>Security Architecture Service Offerings</h3>
                  <p>Our SA professionals assess an organization/company’s security architecture regularly, ensuring the current architecture complements the business goals and meets the business’ needs through implementing necessary adjustments and modifications.</p>
                  <p>Security architecture services include a detailed guidance and standard best practices for Identity &amp; Access Management (IAM) to protect and effectively control and manage access to Applications, Systems and Infrastructure of your organization.</p>
                  <p>Security protocols for faster detection and prevention of threats, incident response to security breaches, and disaster recovery.
                    <br />
                    We carry out and are responsible for daily operations of the security system, maintain specific applications and networks, manage end-users and end-user agreements, and oversee the overall security architecture.
                  </p>
                  <p>IRM Consulting &amp; Advisory, one of the leading cybersecurity companies in Canada offers exceptional Security Architecture Advisory and Services. Our team of security experts will you give you the best Security Architecture Advisory and Services available in the market and at a competitive below market price and ensure that your company/organization is up-to-date with advanced and innovative cybersecurity solutions. Let IRM Consulting &amp; Advisory lead you towards a risk-management success.</p>
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </div>
      <div className="auto-container">
        <div className="row">
          <div className="col-md-12">
            <div className="detail-list">
              <p>
                If you are interested in our services, please
                <Link to="/cybersecurity-consulting-appointments"> set an appointment </Link> with us so we can thoroughly discuss your needs.
              </p>
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
);

export default SecurityArchitectureSa;
