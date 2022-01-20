import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import loadable from '@loadable/component';

import Layout from '../components/Layout';
import homepagebanner1 from '../images/banners/csc.webp';
import csc1 from '../images/svg/csc1.webp';
import csc2 from '../images/svg/csc2.webp';
import csc3 from '../images/svg/csc3.webp';
import csc4 from '../images/svg/csc4.webp';

const Logos = loadable(() => import('../components/Logos'));
const Slide = loadable(() => import('react-reveal/Slide'));

const CloudSecurityControlsCSC = () => (
  <Layout pageTitle="Cloud Management & Consulting Services | IRM Consulting & Advisory">
    <Helmet>
      <meta name="description" content="IRM Consulting & Advisory, providing best cloud security management & consulting services. Cloud Security Consulting has taken over the business world by storm, and it’s quickly becoming the first choice for any business that’s looking forward to the future." />
      <meta name="keywords" content="cloud computing consulting services, cloud service consulting, cloud management services, Cloud securty, Cloud securty controls, Risk control assessments" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="google-site-verification" content="7mCyYHywOZgOshvytuzwG7CdqjexkBr4tn3WykxnWxw" />
      <meta name="robots" content="index, follow" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="IRM Consulting &amp; Advisory" />
      <meta property="article:publisher" content="https://www.facebook.com/irmcon" />
      <meta property="article:modified_time" content="2021-01-11T10:52:43+00:00" />
      <meta property="og:image:width" content="1824" />
      <meta property="og:image:height" content="596" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://elated-swanson-224ee1.netlify.app/cloud-security-controls-csc/" />
      <meta property="og:title" content="IRM Consulting & Advisory - Cybersecurity Consulting for your SaaS Business" />
      <meta property="og:description" content="IRM Consulting & Advisory, providing best cloud security management & consulting services. Cloud Security Consulting has taken over the business world by storm, and it’s quickly becoming the first choice for any business that’s looking forward to the future." />
      <meta property="og:image" content="https://xgw.394.myftpupload.com/wp-content/uploads/2021/10/irm-logo-social-scaled.jpg" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content="IRM Consulting & Advisory - Cybersecurity Consulting for your SaaS Business" />
      <meta property="twitter:description" content="IRM Consulting & Advisory, providing best cloud security management & consulting services. Cloud Security Consulting has taken over the business world by storm, and it’s quickly becoming the first choice for any business that’s looking forward to the future." />
      <meta property="twitter:image" content="https://xgw.394.myftpupload.com/wp-content/uploads/2021/10/irm-logo-social-scaled.jpg" />
      <meta property="twitter:site" content="IRM Consulting & Advisory" />
      <link rel="canonical" href="https://elated-swanson-224ee1.netlify.app/cloud-security-controls-csc/" />
    </Helmet>

    <section className="page-title-sec" style={{ background: `url(${homepagebanner1})` }}>
      <div className="auto-container">
        <div className="row">
          <div className="col-md-12">
            <div className="content-box">
              <h1>Cloud Security Controls (CSC)</h1>
              <p>Protect your Cloud environment against vulnerabilities and malicious attacks. <br />  Implement security best practices to secure your Informaion &amp; technology assets  <br />  in the Cloud</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="services-detail csc-page">
      <div className="auto-container">
        <div className="row">
          <div className="col-md-12">
            <div className="detail-list detail-box">
              <h2>Cloud Security Controls for SaaS Providers</h2>
            </div>
          </div>
          <div className="col-lg-5 col-md-12">
            <Slide left duration={2000}>
              <div className="image-box">
                <img width="300px" src={csc1} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" />
              </div>
            </Slide>
          </div>
          <div className="col-lg-7 col-md-12">
            <Slide right duration={2000}>
              <div className="detail-box">
                <h3>Risks and Challenges</h3>
                <p>Security in the cloud is a shared responsibility between the cloud provider and its customer. Organizations that assume that the cloud provider does everything and fail to recognize their responsibility get into trouble.</p>
                <p>In the world of SaaS, the application provider secures the underlying physical infrastructure, network, OS, and application, freeing up customers to focus their efforts on identity and access management (IAM) and data protection. The challenge is that businesses often forget that keeping track of who has access, and what that access is used for, is still their responsibility.</p>
              </div>
            </Slide>
          </div>
        </div>
      </div>
      <div className="light-blue-background mb-5 mt-3 py-5">
        <div className="auto-container">
          <div className="row">
            <div className="col-md-12">
              <div className="detail-border-area">
                <div className="row clearfix">
                  <div className="col-lg-7 col-md-12">
                    <Slide left duration={2000}>
                      <div className="detail-border-box">
                        <h3>#1 Internet-Accessible Management APIs can be Compromised.</h3>
                        <p>Cloud Service Providers expose a set of application programming interfaces (APIs) that customers use to manage and interact with cloud services (also known as the management plane). These APIs can contain the same software vulnerabilities as an API for an operating system, library, etc. These APIs are accessible via the Internet exposing them more broadly to potential exploitation.</p>
                      </div>
                    </Slide>
                  </div>
                  <div className="col-lg-5 col-md-12">
                    <Slide right duration={2000}>
                      <div className="image-box">
                        <img width="300px" src={csc2} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" />
                      </div>
                    </Slide>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="detail-border-area">
                <div className="row clearfix">
                  <div className="col-lg-5 col-md-12">
                    <Slide left duration={2000}>
                      <div className="image-box">
                        <img width="300px" src={csc3} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" />
                      </div>
                    </Slide>
                  </div>
                  <div className="col-lg-7 col-md-12">
                    <Slide right duration={2000}>
                      <div className="detail-border-box">
                        <h3>#2 Separation Among Multiple Tenants Fail.</h3>
                        <p>Exploitation of system and software vulnerabilities within a Cloud Service Provider’s infrastructure, platforms, or applications that support multi-tenancy can lead to a failure to maintain separation among tenants. This failure can be used by an attacker to gain access from one organization’s resource to another user’s or organization’s assets or data. Multi-tenancy increases the attack surface, leading to an increased chance of data leakage if the separation controls fail.</p>
                      </div>
                    </Slide>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="detail-border-area">
                <div className="row clearfix">
                  <div className="col-lg-7 col-md-12">
                    <Slide left duration={2000}>
                      <div className="detail-border-box">
                        <h3>#3 Data Residency &amp; Cross-Border Risks.</h3>
                        <p>Threats associated with data access, residency and deletion exist because the consumer has reduced visibility into where their data is physically stored in the cloud and a reduced ability to verify the secure deletion of their data.</p>
                        <p>This risk is concerning because the data is spread over a number of different storage devices within the Cloud Service Provider’s infrastructure in a multi-tenancy environment. In addition, deletion procedures may differ from provider to provider. Organizations may not be able to verify that their data was securely deleted and that remnants of the data are not available to attackers.</p>
                      </div>
                    </Slide>
                  </div>
                  <div className="col-lg-5 col-md-12">
                    <Slide right duration={2000}>
                      <div className="image-box">
                        <img width="300px" src={csc4} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" />
                      </div>
                    </Slide>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="detail-box">
              <h2>Our Services</h2>
              <p>Compliance with the Cloud Security Controls promotes transparency and trust with your customers and provides customer visibility into specific security standard practices your business uses to build Secure Products.</p>
              <p>It is important to assess both your internal level of assurance and the level of assurance your customers expect. Our services can help you manage your security and privacy programs more effectively.</p>
              <p>Our Cloud Security Control Assessment service provides comprehensive documentation of best practice security controls required for your Cloud environments, helping your business focus on Product Design and Delivery.</p>
              <p>We will help your organization address some of the most urgent and important security questions your customers and future prospects are asking, which can dramatically speed up decision making during their purchasing of your Cloud Products &amp; Services.</p>
              <p>We can help you implement industry-standard Cloud Security Controls by performing Risk Control Assessments and Audits against industry de-facto standards and providing recommendations that will give your Customers the assurance they need around the Security of your SaaS Products and Services.</p>
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

export default CloudSecurityControlsCSC;
