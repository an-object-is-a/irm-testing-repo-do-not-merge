import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import loadable from '@loadable/component';

import Layout from '../components/Layout';
import homepagebanner1 from '../images/banners/prc.webp';
import prc1 from '../images/svg/prc1.webp';
import prc2 from '../images/svg/prc2.webp';
import prc3 from '../images/svg/prc3.webp';
import settings from '../images/svg/settings.svg';
import BusinessResilience from '../images/svg/business_resilince.webp';
import BusinessContinuityPlan from '../images/svg/business-continuity-plan.webp';
;
const Logos = loadable(() => import('../components/Logos'));
const Slide = loadable(() => import('react-reveal/Slide'));

const ProcessRiskControlsPrc = () => (
  <Layout pageTitle="Process Risk & Controls | IRM Consulting & Advisory">
    <Helmet>
      <meta name="description" content="Our Process Risk & Control Assessments prepare you for Industry Certifications" />
      <meta name="keywords" content="process risk controls, risk control assessements, control assessments, cybersecurity assessments, vulnerability Management, Threat Hunting" />
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
      <meta property="og:url" content="https://irmcon-staging.netlify.app/process-risk-controls-prc/" />
      <meta property="og:title" content="IRM Consulting & Advisory - Cybersecurity Consulting for your SaaS Business" />
      <meta property="og:description" content="Our Process Risk & Control Assessments prepare you for Industry Certifications" />
      <meta property="og:image" content="https://xgw.394.myftpupload.com/wp-content/uploads/2021/10/irm-logo-social-scaled.jpg" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content="IRM Consulting & Advisory - Cybersecurity Consulting for your SaaS Business" />
      <meta property="twitter:description" content="Our Process Risk & Control Assessments prepare you for Industry Certifications" />
      <meta property="twitter:image" content="https://xgw.394.myftpupload.com/wp-content/uploads/2021/10/irm-logo-social-scaled.jpg" />
      <meta property="twitter:site" content="IRM Consulting & Advisory" />
      <link rel="canonical" href="https://irmcon-staging.netlify.app/process-risk-controls-prc/" />
    </Helmet>

    <section className="page-title-sec" style={{ background: `url(${homepagebanner1})` }}>
      <div className="auto-container">
        <div className="row">
          <div className="col-md-12">
            <div className="content-box">
              <h1>Process Risk &amp; Controls (PRC)</h1>
              <p>Identify Process Risks, Design, Implement and operate effective controls to<br /> mitigate Risks to your organization and customer Information &amp; Technology<br /> Assets.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="services-detail dsp-page">
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-5 col-md-12">
            <Slide left duration={2000}>
              <div className="image-box">
                <img src={prc1} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" />
              </div>
            </Slide>
          </div>
          <div className="col-lg-7 col-md-12">
            <Slide right duration={2000}>
              <div className="detail-box">
                <h3>Process Risk &amp; Controls</h3>
                <p>Process Risk &amp; Controls is a structured method that helps an organization to evaluate, understand, and optimize their business processes, which is important to promote risk management to mitigate business risks. With PRC, an organization can check the health of their operational activities, financial reports, and their compliance with its internal procedures, as well as operate in compliance with operational regulations under the law.</p>
                <p>Process Risk &amp; Control Assessments is a process that is implemented to determine operational risks and find ways to mitigate them. This is done by examining existing internal controls and implementing new and improved internal controls to ensure that all business objectives are met.</p>
              </div>
            </Slide>
          </div>
        </div>
      </div>
      <div className="detail-box light-blue-background mt-5 py-5">
        <div className="auto-container">
          <div className="text-center mb-5">
            <h3>Your SaaS Business Resiliency - Incident Response Plan (IRP)</h3>
            <h4>Incident Response Plan & Testing (IRP)-as-a-Service</h4>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div>
                <p>Incident response and management are considered essential minimize the damage of a Cybersecurity Incident or Outbreak. An IRP (Incident Response Plan) with Testing Services is a critical facet to protect and ensure continuity of your business operations, data and customers.</p>
                <div className="my-3 text-center"><Slide left duration={2000}><img src={BusinessResilience} alt="ciso-services-image" /></Slide></div>
                <p>We provide services for the creation, documentation and testing of Cybersecurity Incident Response Policy, Plan, and Procedures.</p>
                <h4 className="primary-color my-4">IRP PLAN OBJECTIVES</h4>
                <p>The objective of Incident Response Plan (IRP) is to:</p>
                <ul className="mt-3">
                  <li><i className="icon mr-2"><img src={settings} alt="irmcon-list-icon" /></i>Limit immediate incident impact to customers and business partners</li>
                  <li><i className="icon mr-2"><img src={settings} alt="irmcon-list-icon" /></i>Recover from the incident;</li>
                  <li><i className="icon mr-2"><img src={settings} alt="irmcon-list-icon" /></i>Determine how the incident occurred;</li>
                  <li><i className="icon mr-2"><img src={settings} alt="irmcon-list-icon" /></i>Find out how to avoid further exploitation of the same vulnerability</li>
                  <li><i className="icon mr-2"><img src={settings} alt="irmcon-list-icon" /></i>Avoid escalation and further incidents</li>
                  <li><i className="icon mr-2"><img src={settings} alt="irmcon-list-icon" /></i>Assess the impact and damage in terms of financial impact and loss of image</li>
                  <li><i className="icon mr-2"><img src={settings} alt="irmcon-list-icon" /></i>Update company policies, procedures, standards and guidelines as needed</li>
                  <li><i className="icon mr-2"><img src={settings} alt="irmcon-list-icon" /></i>Determine who initiated the incident for possible criminal and/or civil prosecution</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="detail-box py-5">
        <div className="auto-container">
          <div className="text-center my-5">
            <h3>Your SaaS Business Resiliency - Business Impact Assessment (BIA)</h3>
            <h4>Business Impact Assessment (BIA)-as-a-Service</h4>
          </div>
          <div className="row">
            <div className="col-md-7 col-sm-12">
              <div>
                <p className="mb-3">Our Services will identify and evaluate critical technology and data assets that support your key business processes and operations.</p>
                <p className="mb-3">We will assess impact to these critical assets in the event of a disruption from external, internal events or Cybersecurity Incidents.</p>
                <p>A Business Impact Assessment (BIA) is an essential component of your Business Continuity and Recovery Plans.</p>
              </div>
            </div>
            <div className="col-md-5 col-sm-12">
              <div>
                <div className="text-center mt-3"><Slide right duration={2000}><img width="350px" src={BusinessContinuityPlan} alt="ciso-services-image" /></Slide></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="light-blue-background my-5 py-5">
        <div className="auto-container">
          <div className="row">
            <div className="col-md-12">
              <div className="detail-box">
                <h3>Identity &amp; Access Management (IAM)</h3>
                <p>Identity and Access Management (<span className="blue-color"> IAM</span>) is a process that helps you securely control access to your systems and information resources and assets. The objective is to establish and configure <span className="blue-color">IAM</span> Tools and supporting control processes to understand who is authenticated (signed in) and authorized (has permissions) to use your business network, systems, information resources and assets. A preventative and detective control process.</p>
              </div>
              <div className="detail-box">
                <h3>Threat &amp; Vulnerability Management</h3>
                <p><span className="blue-color">Threat &amp; Vulnerability Management</span>  is the process of identifying, evaluating, treating, and reporting on known security threats and vulnerabilities in systems and technology and the potential impact to your business. It is vital for organizations to prioritize and address possible and probable threats to minimize their “attack surface.”</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5 py-5">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-7 col-md-12">
              <Slide left duration={2000}>
                <div className="detail-box">
                  <h3>Threat Hunting &amp; Incident Response Management</h3>
                  <p><span className="blue-color"> Security incident Response Management</span> is the process of identifying, managing, recording and analyzing security threats or incidents in real-time. … Policy violations and unauthorized access to data such as health, financial, social security numbers, and personally identifiable records are all examples of security incidents. Organizations must be pro-active and implement this preventative control.</p>
                </div>
                <div className="detail-box">
                  <h3>Business Continuity &amp; Resiliency</h3>
                  <p>This process involves building systems that promote better prevention and recovery, which are important to properly address potential threats. Business Continuity &amp; Resiliency involves improving the current system and creating new plans to enhance an organization’s ability to tackle challenges.</p>
                </div>
              </Slide>
            </div>
            <div className="col-lg-5 col-md-12">
              <Slide right duration={2000}>
                <div className="image-box">
                  <img src={prc2} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" />
                </div>
              </Slide>
            </div>
            <div className="col-md-12">
              <div className="detail-box">
                <h3>Change &amp; Configuration Management</h3>
                <p>Change management focuses on managing the changes that affect the configurable items and the system while configuration management focuses on managing the configurable items and the state of the system. Businesses must ensure speed and automation is deployed for system configuration and Product changes to achieve a competitive advantage and Fast-Time-To Market.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="light-blue-background py-5 mb-5">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <Slide left duration={2000}>
                <div className="image-box">
                  <img src={prc3} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" />
                </div>
              </Slide>
            </div>
            <div className="col-lg-7 col-md-12">
              <Slide right duration={2000}>
                <div className="detail-box">
                  <h3>Security Information &amp; Event Management (SIEM)</h3>
                  <p><span className="blue-color">SIEM</span> provides businesses with capabilities for collect and aggregator security logs and security event data generated by networks, system infrastructure, applications and devices in order to develop insights for security monitoring, alerting, security investigations and decision-making.</p>
                </div>
                <div className="detail-box">
                  <h3>Security Culture &amp; People</h3>
                  <p>Security Culture highlights the values shared by individuals involved in an organization. This guides people with regards to their approach and actions that affect the security of the data of a company. With this, individuals feel more involved in preserving the data security of an organization. Security Awareness &amp; Training campaigns are key to creating and sustaining a Security Culture in your organization.</p>
                </div>
              </Slide>
            </div>
            <div className="col-md-12">
              <div className="detail-box">
                <h3>Third-Party Risk Management</h3>
                <p>An organization’s limited visibility into its third parties’ security policies, vulnerability &amp; threats makes it difficult to assess risk. Third-party risk management is now a requirement for organizations to protect their reputation, intellectual property, data, and competitive advantage. Increased reliance on third-party vendors and dependence on sub-processors means a broader attack surface and the spread of vulnerabilities &amp; infections.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="auto-container">
        <div className="row">
          <div className="col-md-12">
            <div className="detail-box">
              <h3>Risk Registers &amp; Risk Reporting</h3>
              <p>
                A risk register is a list of project risks within an organization’s system. It allows companies to identify risks and document information about their nature. A risk report is a summary of this information, including threats, which helps an organization to create proactive decisions to manage risks.At IRM Consulting &amp; Advisory, we offer cybersecurity consulting services for the above processes and we help you implement them. If you are interested to learn more about our services, please
                <Link to="/cybersecurity-consulting-appointments"> set an appointment </Link> with us.
              </p>
              <div className="learno-more">
                <Link to="/cybersecurity-consulting-appointments" className="theme-btn btn-style-one">
                  Schedule an Appointment</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Logos />
  </Layout>
);

export default ProcessRiskControlsPrc;
