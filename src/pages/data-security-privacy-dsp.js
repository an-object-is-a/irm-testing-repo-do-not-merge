import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import loadable from '@loadable/component';

import Layout from '../components/Layout';
import homepagebanner1 from '../images/banners/dsp.webp';
import dsp1 from '../images/svg/dsp.webp';

const Logos = loadable(() => import('../components/Logos'));
const Slide = loadable(() => import('react-reveal/Slide'));

const DataSecurityPrivacyDSP = () => (
  <Layout pageTitle="Data Security Services & Solutions | IRM Consulting & Advisory">
    <Helmet>
      <meta name="description" content="IRM Consulting & Advisory can help with protecting data security and privacy of your customer’s Personal Identifiable Information (PII) and Personal Health Information (PHI). Our services will help you ensure compliance with GDPR, HIPAA, PIPEDA, and other privacy and data security regulations." />
      <meta name="keywords" content="data security services, cybersecurity compliance, information security services, data security, data breaches" />
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
      <meta property="og:url" content="https://irmcon-staging.netlify.app/data-security-privacy-dsp/" />
      <meta property="og:title" content="IRM Consulting & Advisory - Cybersecurity Consulting for your SaaS Business" />
      <meta property="og:description" content="IRM Consulting & Advisory can help with protecting data security and privacy of your customer’s Personal Identifiable Information (PII) and Personal Health Information (PHI). Our services will help you ensure compliance with GDPR, HIPAA, PIPEDA, and other privacy and data security regulations." />
      <meta property="og:image" content="https://xgw.394.myftpupload.com/wp-content/uploads/2021/10/irm-logo-social-scaled.jpg" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content="IRM Consulting & Advisory - Cybersecurity Consulting for your SaaS Business" />
      <meta property="twitter:description" content="IRM Consulting & Advisory can help with protecting data security and privacy of your customer’s Personal Identifiable Information (PII) and Personal Health Information (PHI). Our services will help you ensure compliance with GDPR, HIPAA, PIPEDA, and other privacy and data security regulations." />
      <meta property="twitter:image" content="https://xgw.394.myftpupload.com/wp-content/uploads/2021/10/irm-logo-social-scaled.jpg" />
      <meta property="twitter:site" content="IRM Consulting & Advisory" />
      <link rel="canonical" href="https://irmcon-staging.netlify.app/data-security-privacy-dsp/" />
    </Helmet>

    <section className="page-title-sec" style={{ background: `url(${homepagebanner1})` }}>
      <div className="auto-container">
        <div className="row">
          <div className="col-md-12">
            <div className="content-box">
              <h1>Data Security & Privacy (DSP)</h1>
              <p>Protect the Privacy and Security of your organization<br /> and customer. Prevent and detect Data Breaches and<br /> unauthorized disclosure of sensitive data.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="services-detail dsp-page mt-0">
      <div className="light-blue-background py-5 mb-3">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <Slide left duration={2000}>
                <div className="image-box">
                  <img src={dsp1} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" width="300px" />
                </div>
              </Slide>
            </div>
            <div className="col-lg-7 col-md-12">
              <Slide right duration={2000}>
                <div className="detail-box">
                  <h3>We make sure your data is always Safe and Secure.</h3>
                  <p>We understand how important it is for companies and individuals to have their information and data always secure and private. We provide help with protecting the security and privacy of your customer’s Personal Identifiable Information (PII) and Personal Health Information (PHI). Our services will help you ensure compliance with GDPR, HIPAA, PIPEDA, and other privacy and data security regulations.</p>
                  <p>We can help you achieve Industry Standard Attestations and Certifications. Our professionals provide thorough checks and solutions to protect your Customer, internal Company data and prevent Data Breaches of sensitive and confidential information. As your Trusted Advisor, we will provide the right guidance and solutions to protect sensitive data in use, during transit, and in storage.</p>
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
              <p>We will implement effective <span className="blue-color"> Data Loss Prevention (DLP)</span> solutions with an approach that seeks to improve information security and protect business and customer information from loss and data breaches.</p>
              <p>We conduct <span className="blue-color">Privacy Impact Assessment (PIA)</span>  if your program or activity may have an impact on the personal information of individuals. Organizations are required to conduct <span className="blue-color">Privacy Impact Assessments</span> when personal information may be used as part of product and service offerings to Customers.</p>
              <p>

                If you are interested in our services, please
                <Link to="/cybersecurity-consulting-appointments"> set an appointment</Link> with us so we can thoroughly discuss your needs.

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
)

export default DataSecurityPrivacyDSP;
