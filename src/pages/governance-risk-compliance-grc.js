import * as React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import loadable from '@loadable/component';

import Layout from '../components/Layout';
import homepagebanner1 from '../images/banners/grc.webp';
import prcp1 from '../images/svg/grc.webp';

const Logos = loadable(() => import('../components/Logos'));
const Slide = loadable(() => import('react-reveal/Slide'));

const GovernanceRiskCompliance = () => (
  <Layout pageTitle="Governance Risk & Compliance Services | IRM Consulting & Advisory">
    <Helmet>
      <meta name="description" content="Security Governance, Risk, and Compliance (GRC) frameworks help an organization align its information technology, security with business objectives while managing risk and meeting regulatory compliance requirements." />
      <meta name="keywords" content="cybersecurity consulting, risk mamagement, compliance, GRC, Security Program, cyber security strategy, it security assessment, security assessment plan, information security strategy " />
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
      <meta property="og:url" content="https://irmcon-staging.netlify.app/governance-risk-compliance-grc/" />
      <meta property="og:title" content="IRM Consulting & Advisory - Cybersecurity Consulting for your SaaS Business" />
      <meta property="og:description" content="Security Governance, Risk, and Compliance (GRC) frameworks help an organization align its information technology, security with business objectives while managing risk and meeting regulatory compliance requirements." />
      <meta property="og:image" content="https://xgw.394.myftpupload.com/wp-content/uploads/2021/10/irm-logo-social-scaled.jpg" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content="IRM Consulting & Advisory - Cybersecurity Consulting for your SaaS Business" />
      <meta property="twitter:description" content="Security Governance, Risk, and Compliance (GRC) frameworks help an organization align its information technology, security with business objectives while managing risk and meeting regulatory compliance requirements." />
      <meta property="twitter:image" content="https://xgw.394.myftpupload.com/wp-content/uploads/2021/10/irm-logo-social-scaled.jpg" />
      <meta property="twitter:site" content="IRM Consulting & Advisory" />
      <link rel="canonical" href="https://irmcon-staging.netlify.app/governance-risk-compliance-grc/" />
    </Helmet>
    <section className="page-title-sec" style={{ background: `url(${homepagebanner1})` }}>
      <div className="auto-container">
        <div className="row">
          <div className="col-md-12">
            <div className="content-box">
              <h1>Governance Risk &amp; Compliance <br /> (GRC)</h1>
              <p>Govern, Manage Risk and ensure Compliance and sustainability of your Security<br /> Program</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="services-detail dsp-page mt-0">
      <div className="light-blue-background mb-5 pt-5 pb-3">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <Slide left duration={2000}>
                <div className="image-box">
                  <img width="300px" src={prcp1} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" />
                </div>
              </Slide>
            </div>
            <div className="col-lg-7 col-md-12">
              <Slide right duration={2000}>
                <div className="detail-box">
                  <h3>What Is GRC?</h3>
                  <p>Governance Risk &amp; Compliance or GRC is a strategy used to manage a company’s governance, risk management, compliance with regulations, and improve its overall performance. Its purpose is to optimize the alignment of an organization’s business objectives and goals with effective risk management.</p>
                  <p>Ultimately, GRC is about organizing a company’s management structures to support the company’s business goals. It also ensures that potential risks are tracked and addressed for an effective risk management process. GRC helps make sure that the company and its different facets, including the executive and administrative branch, operations, HR, and IT, are operated under regulations implemented by the law.</p>
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </div>
      <div className="auto-container">
        <div className="row">
          <div className="col-md-12">
            <div className="detail-box">
              <h3>Security Governance, Risk &amp; Compliance Management</h3>
              <p>Security Governance, Risk, and Compliance (GRC) frameworks help an organization align its information technology, security with business objectives while managing risk and meeting regulatory compliance requirements.</p>
            </div>
            <div className="detail-box">
              <h3>Security Certification and Audit Readiness Assessment</h3>
              <p>Organizations need to get ready to meet customer expectations and follow industry best practices by achieving SOC2, SCA Star Level, ISO27001, PCI Certifications and more. To ensure the fulfilment of these requirements, your business can save costs by proactively preparing through the implementing and testing key control and processes. Save costs by pro-actively ensuring your readiness through a Readiness Assessment Check before engaging External Auditors.</p>
            </div>
            <div className="detail-box">
              <h3>Risk &amp; Control Self- Assessments (RCSA)</h3>
              <p>Risk and Control Self-Assessment (RCSA) is a Top-Down Management process through which top operational risks and the effectiveness of controls to mitigate those risks are assessed and examined to be designed and operating effectively. The objective is to provide reasonable assurance that all strategic business objectives will be met.</p>
            </div>
            <div className="detail-box">
              <h3>Documentation of Security Policies, Standards and Procedures</h3>
              <p>Information Security Policies are rules that an organization needs to follow to ensure that all users of the IT system within a company follow the regulations regarding data security that are digitally stored within the authority of the company. This is enacted to ensure that a company’s information and assets are protected.</p>
            </div>
            <div className="detail-box">
              <h3>Asset Management</h3>
              <p>Poor <span className="blue-color">Asset Management</span> threatens your entire business – insufficient practices increase the risk of stolen assets and sensitive data causing disruption of business operations. With proper asset management process, these risks can be efficiently and consistently mitigated.</p>
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

export default GovernanceRiskCompliance;
