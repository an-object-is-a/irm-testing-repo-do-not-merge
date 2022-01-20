import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import loadable from '@loadable/component';

import Layout from '../components/Layout';
import homepagebanner1 from '../images/banners/tm.webp'
import tm1 from '../images/svg/tm1.webp'
import tm2 from '../images/svg/tm2.webp'
import check from '../images/new-images/check.png'

const Logos = loadable(() => import('../components/Logos'));
const Slide = loadable(() => import('react-reveal/Slide'));

const ThreatModelingTm = () => (
  <Layout pageTitle="Threat Modeling Services | IRM Consulting & Advisory">
    <Helmet>
      <meta name="description" content="Without Threat Modeling, your security is a gamble—and in today’s business environment, your SaaS Products & Services are sure to be exposed to Business Loss." />
      <meta name="keywords" content="Without Threat Modeling, your security is a gamble—and in today’s business environment, your SaaS Products & Services are sure to be exposed to Business Loss." />
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
      <meta property="og:url" content="https://irmcon-staging.netlify.app/threat-modeling-tm/" />
      <meta property="og:title" content="IRM Consulting & Advisory - Cybersecurity Consulting for your SaaS Business" />
      <meta property="og:description" content="Without Threat Modeling, your security is a gamble—and in today’s business environment, your SaaS Products & Services are sure to be exposed to Business Loss." />
      <meta property="og:image" content="https://xgw.394.myftpupload.com/wp-content/uploads/2021/10/irm-logo-social-scaled.jpg" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content="IRM Consulting & Advisory - Cybersecurity Consulting for your SaaS Business" />
      <meta property="twitter:description" content="Without Threat Modeling, your security is a gamble—and in today’s business environment, your SaaS Products & Services are sure to be exposed to Business Loss." />
      <meta property="twitter:image" content="https://xgw.394.myftpupload.com/wp-content/uploads/2021/10/irm-logo-social-scaled.jpg" />
      <meta property="twitter:site" content="IRM Consulting & Advisory" />
      <link rel="canonical" href="https://irmcon-staging.netlify.app/threat-modeling-tm/" />
    </Helmet>

    <section className="page-title-sec" style={{ background: `url(${homepagebanner1})` }}>
      <div className="auto-container">
        <div className="row">
          <div className="col-md-12">
            <div className="content-box">
              <h1>Threat Modeling (TM)</h1>
              <p>Proactively identify and evaluate potential Security Threats and Vulnerabilities during Product <br /> Design, understand the impact of Threats and apply appropriate security controls and  <br /> solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="services-detail tm-page">
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-5 col-md-12">
            <Slide left duration={2000}>
              <div className="image-box">
                <img src={tm1} width="250px" alt="irmcon-threat-modeling-image" />
              </div>
            </Slide>
          </div>
          <div className="col-lg-7 col-md-12">
            <Slide right duration={2000}>
              <div className="detail-box">
                <h3>When Should Threat Modeling Be Initiated?</h3>
                <p>Use Threat Modeling at the early stages of your Product and Application Design, and every time there is a change in Product, Application Functionality, System Infrastructure or System Architecture. You can also use Threat Modeling after a Security Incident has occurred or new vulnerabilities discovered.</p>
                <p>Without Threat Modeling, your security is a gamble—and in today’s business environment, your SaaS Products &amp; Services are sure to be exposed to Business Loss.</p>
              </div>
            </Slide>
          </div>
        </div>
      </div>
      <div className="light-blue-background py-5 mt-3 mb-5">
        <div className="auto-container">
          <div className="row">
            <div className="col-md-12">
              <div className="detail-list detail-box">
                <h3>Why Threat Modeling?</h3>
                <ul>
                  <li><i className="icon"><img src={check} alt="irmcon-list-icon" /></i> It is better to find security flaws when there is time to fix them.</li>
                  <li><i className="icon"><img src={check} alt="irmcon-list-icon" /></i>It can save time, revenue, and the reputation of your company.</li>
                  <li><i className="icon"><img src={check} alt="irmcon-list-icon" /></i>To build a secure application.</li>
                  <li><i className="icon"><img src={check} alt="irmcon-list-icon" /></i>To bridge the gap between developers and security.</li>
                  <li><i className="icon"><img src={check} alt="irmcon-list-icon" /></i>It provides a document of all the identified threats and rated threats.</li>
                  <li><i className="icon"><img src={check} alt="irmcon-list-icon" /></i>It offers knowledge and awareness of the latest risks and vulnerabilities.</li>
                </ul>
                <h3>What Are the Threat Modeling Techniques?</h3>
                <ul className="strike-list">
                  <li><span className="blue-text">STRIDE – </span> (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege)</li>
                  <li><span className="blue-text">PASTA –  </span> (Risk-Centric Approach): Process for Attack Simulation and Threat Analysis</li>
                  <li><span className="blue-text">TRIKE –  </span> (Risk-Based Approach with unique implementation and Risk-Modelling process)</li>
                  <li><span className="blue-text">VAST –  </span> (Visual, Agile, and Simple Threat Modeling)</li>
                  <li><span className="blue-text">OCTAVE –  </span> (Focused on assessing organizational (non-technical) risks that may result from breached information assets)</li>
                </ul>
                <p>We use Threat Modeling methodologies and tools to derive your Product Security requirements so you can design, build, and deliver Secure Products to your Customers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="auto-container">
        <div className="row">
          <Slide left duration={2000}>
            <div className="col-lg-7 col-md-12">
              <div className="detail-box">
                <h2>Our Services</h2>
                <p> What if we told you that you could <span className="blue-color"> identify threats at a significantly</span> faster rate and secure your complete application portfolio?</p>
              </div>
              <div className="detail-box">
                <h3>Scale Threat Modeling</h3>
                <p>Across your SaaS applications to improve time to market and product security.</p>
              </div>
              <div className="detail-box">
                <h3>Significantly cut down on remediation time and costs</h3>
                <p>By <span className="blue-color">“shifting security left” </span> and mitigating threats before they turn into vulnerabilities.</p>
              </div>
              <div className="detail-box">
                <h3>Improve the quality and consistency</h3>
                <p>Use Threat Models through automation and deliver actionable security tasks for DevOps teams within their workflows.</p>
              </div>
            </div>
          </Slide>
          <div className="col-lg-5 col-md-12">
            <Slide right duration={2000}>
              <div className="image-box">
                <img src={tm2} alt="irmcon-threat-modeling-image" />
              </div>
            </Slide>
          </div>
          <div className="col-md-12">
            <div className="detail-box">
              <p>Enhance the efficiency of your threat modeling capabilities to adequately <span className="blue-color"> mitigate risks across your application portfolio.</span></p>
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

export default ThreatModelingTm;
