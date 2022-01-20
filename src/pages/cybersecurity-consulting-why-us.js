import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import loadable from '@loadable/component';

import Layout from '../components/Layout';
import homepagebanner1 from '../images/banners/grc.webp';
import settings from '../images/svg/settings.svg';
import wu1 from '../images/svg/why1.webp';
import wu2 from '../images/svg/why2.webp';
import wu3 from '../images/svg/why3.svg';

const Logos = loadable(() => import('../components/Logos'));

const CybersecurityConsultingWhyUs = () => (
  <Layout pageTitle="IRM Consulting & Advisory - Cybersecurity Consulting Why Us">
    <Helmet>
      <meta name="description" content="Improve your competitive advantage by reassuring your customers, partners, investors, and suppliers that the valuable information they provide you will be secure." />
      <meta name="keywords" content="cybersecurity, security assurance, shifting security left, cybersecurity attacks" />
      <meta charSet="UTF-8" />
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
      <meta property="og:url" content="https://irmcon-staging.netlify.app/cybersecurity-consulting-why-us/" />
      <meta property="og:title" content="IRM Consulting & Advisory - Cybersecurity Consulting for your SaaS Business" />
      <meta property="og:description" content="Improve your competitive advantage by reassuring your customers, partners, investors, and suppliers that the valuable information they provide you will be secure." />
      <meta property="og:image" content="https://xgw.394.myftpupload.com/wp-content/uploads/2021/10/irm-logo-social-scaled.jpg" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content="IRM Consulting & Advisory - Cybersecurity Consulting for your SaaS Business" />
      <meta property="twitter:description" content="Improve your competitive advantage by reassuring your customers, partners, investors, and suppliers that the valuable information they provide you will be secure." />
      <meta property="twitter:image" content="https://xgw.394.myftpupload.com/wp-content/uploads/2021/10/irm-logo-social-scaled.jpg" />
      <meta property="twitter:site" content="IRM Consulting & Advisory" />
      <link rel="canonical" href="https://irmcon-staging.netlify.app/cybersecurity-consulting-why-us/" />
    </Helmet>

    <section className="page-title-sec" style={{ background: `url(${homepagebanner1})` }}>
      <div className="auto-container">
        <div className="row">
          <div className="col-md-12">
            <div className="content-box">
              <h1>Why Us</h1>
              <p>We offer personalized Cybersecurity & Risk Management-as-a-Service.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="why-us">
      <div className="auto-container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="mb-5 why-us-main-new-heading">Benefits for your SaaS Products and Services</h3>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="detail-box detail-list">
              <h5>Competitive Advantage &amp; Fast Time to Market</h5>
              <p>Improve your competitive advantage by reassuring your customers, partners, investors, and suppliers that the valuable information they provide you will be secure.</p>
              <h5>Save Costs and Time</h5>
              <p>Avoid or reduce the direct and indirect impacts on your business from <br /> Cybersecurity Attacks. Impacts include but are not limited to:</p>
              <ul>
                <li><i className="icon"><img src={settings} alt="irmcon-list-icon" /></i>Data Breaches</li>
                <li><i className="icon"><img src={settings} alt="irmcon-list-icon" /></i>Financial Loss</li>
                <li><i className="icon"><img src={settings} alt="irmcon-list-icon" /></i>Damage to Brand or Reputation</li>
                <li><i className="icon"><img src={settings} alt="irmcon-list-icon" /></i>Negative Customer Experience and Loss of Customer Trust</li>
                <li><i className="icon"><img src={settings} alt="irmcon-list-icon" /></i>Disruptions of Business Operations</li>
                <li><i className="icon"><img src={settings} alt="irmcon-list-icon" /></i>Unavailability of Technology Software and Infrastructure</li>
                <li><i className="icon"><img src={settings} alt="irmcon-list-icon" /></i>Negative employee experience</li>
                <li><i className="icon"><img src={settings} alt="irmcon-list-icon" /></i>Litigation, Regulatory Fines or License revocation.</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="image-box mt-5">
              <img src={wu1} alt="irmcon-image" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="detail-box">
              <ul>
                <li><i className="icon"><img src={settings} alt="irmcon-list-item" /></i> Significantly cut down on remediation time and costs by “shifting security left” and mitigating threats before they turn into vulnerabilities.</li>
              </ul>
              <h5>Consistency</h5>
              <p>Demonstrate your adherence to Industry Standard Security &amp; Privacy best practices to Prospects and existing customers.</p>
              <h5>Efficiency</h5>
              <p>Ensure your organization is eligible to compete for business opportunities that require cybersecurity assurance. Our services will help you build secure Products and Services, establish and maintain a robust and sustainable Security Program.</p>
              <h5>Customer Trust &amp; Satisfaction</h5>
              <p>Our services will help you win new business, gain Customer Trust and provide Security Assurance for your Products &amp; Services.</p>
              <Link to="/cybersecurity-consulting-services" className="theme-btn btn-style-one learnmore">
                Learn More</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="light-blue-background mb-5 py-5">
        <div className="auto-container pt-3">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="image-box">
                <img src={wu2} alt="irmcon-image" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="detail-box detail-list">
                <h3>Protect Customers & Grow your SaaS Business</h3>
                <p>Business adoption of cloud technologies, such as SaaS and IaaS, provides huge productivity wins but also brings major issues that can adversely impact the security of your SaaS Products &amp; Services. As your Trusted Advisor, we thrive on helping you build secure products, protect your customer data, privacy, and your critical information assets in the Cloud against cybersecurity attacks.</p>
                <p>As your Trusted Advisor, we will help you ensure confidentiality, integrity and availability, privacy and data security of your products and services — we will help you implement industry-standard best practices and prepare you for SOC2 Type 2, ISO27001, ISO27017, or CyberSecure Canada Certifications when you are ready.</p>
                <Link to="/cybersecurity-consulting-services" className="theme-btn btn-style-one learnmore">
                  Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="auto-container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="detail-box">
              <h3>Cybersecurity Assurance for your SaaS Business</h3>
              <p>You can count on the diverse experience of our Trusted Advisors. We help Internet, Technology Start-Ups and Small-To-Medium Size companies providing SaaS Products and Services across all Industries.</p>
              <p>We partner with Management, Product, Application Development and Engineering teams to identify, protect, detect and respond to security Threats and Risks while ensuring Regulatory &amp; Legal Compliance. We’ll work with you to design and implement secure effective controls and solutions. We will embed security best practices into all aspects of your Product and Development Lifecycles.</p>
              <p>We provide assurance by guiding you to achieve industry-standard security certifications such as SOC2, ISO27001, PCI-DSS. We provide assurance by ensuring your critical and sensitive information assets such as PII and ePHI is protected in compliance with Privacy Laws and Regulations such as GDPR.</p>
              <p>Our Services are designed based on Risk and Security best practices to empower Entrepreneurs, Technology Start-Ups, Small-To Medium-Size companies in industries such as Financial Services, Health Care, Education, Public Sector, Advertising, eCommerce, Marketing, and Hospitality so that they can focus on their core business of providing quality Products &amp; Services to customers with a level of Assurance.</p>
              <Link to="/cybersecurity-consulting-services" className="theme-btn btn-style-one learnmore">
                Learn More</Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="image-box">
              <img src={wu3} alt="irmcon-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <Logos />
  </Layout>
);

export default CybersecurityConsultingWhyUs;
