import React from 'react';
import { Helmet } from 'react-helmet';
import { UncontrolledCollapse, Button } from 'reactstrap';
import loadable from '@loadable/component';

import Layout from '../components/Layout';
import sectiongbg from '../images/page-banner.webp';

const Logos = loadable(() => import('../components/Logos'));

const CybersecurityConsultingFAQ = () => {
  return (
    <Layout pageTitle="IRM Consulting & Advisory - Cybersecurity Consulting FAQ">
      <Helmet>
        <meta name="description" content="We answer all your questions and concerns about Cybersecurity." />
        <meta name="keywords" content="ransomware, penetration testing , pen test, cryptocurrency, data security, security program, cybersecurity program, data privacy" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="google-site-verification" content="7mCyYHywOZgOshvytuzwG7CdqjexkBr4tn3WykxnWxw" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="IRM Consulting &amp; Advisory" />
        <meta property="article:publisher" content="https://www.facebook.com/irmcon" />
        <meta property="article:modified_time" content="2021-01-11T10:52:43+00:00" />
        <meta property="og:image:width" content="1824" />
        <meta property="og:image:height" content="596" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://irmcon-staging.netlify.app/cybersecurity-consulting-faq/" />
        <meta property="og:title" content="IRM Consulting & Advisory - Cybersecurity Consulting for your SaaS Business" />
        <meta property="og:description" content="We answer all your questions and concerns about Cybersecurity." />
        <meta property="og:image" content="https://xgw.394.myftpupload.com/wp-content/uploads/2021/10/irm-logo-social-scaled.jpg" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content="IRM Consulting & Advisory - Cybersecurity Consulting for your SaaS Business" />
        <meta property="twitter:description" content="We answer all your questions and concerns about Cybersecurity." />
        <meta property="twitter:image" content="https://xgw.394.myftpupload.com/wp-content/uploads/2021/10/irm-logo-social-scaled.jpg" />
        <meta property="twitter:site" content="IRM Consulting & Advisory" />
        <link rel="canonical" href="https://irmcon-staging.netlify.app/cybersecurity-consulting-faq/" />
      </Helmet>

      <section className="page-title-sec" style={{ backgroundImage: `url(${sectiongbg})` }}>
        <div className="auto-container">
          <div className="row">
            <div className="col-md-12">
              <div className="content-box">
                <h1>Frequently Asked Questions - FAQ's</h1>
                <p>We answer questions about us and our services</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faqs-sec">
        <div className="auto-container">
          <div className="text-center mb-5">
            <h1>Frequently Asked Questions</h1>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div id="accordion">
                <div className="accordion-item pt-2" key="1">
                  <h5><Button className="btn" id="toggler" style={{ marginBottom: '1rem' }}>
                    <i className="icon">+</i>
                    What is Threat Modeling?
                  </Button>
                  </h5>
                  <UncontrolledCollapse toggler="#toggler" defaultOpen={false}>
                    <p className="pb-3">Threat modeling is a process by which potential threats, such as structural vulnerabilities or the absence of appropriate safeguards, can be identified, enumerated, and mitigations can be prioritized.</p>
                  </UncontrolledCollapse>
                </div>
                <div className="accordion-item pt-2" key="2">
                  <h5><Button className="btn" color="primary" id="toggler2" style={{ marginBottom: '1rem' }}>
                    <i className="icon">+</i>
                    What does Penetration Testing entail?
                  </Button>
                  </h5>
                  <UncontrolledCollapse toggler="#toggler2" defaultOpen={false}>
                    <p className="pb-3"><span className="ILfuVd"><span className="hgKElc">A <strong>Penetration Test</strong>, also known as a <strong>Pen Test</strong>, is a simulated cyberattack against your Web Application or System Infrastructure and Network to check for exploitable vulnerabilities. <span className="ILfuVd NA6bn">Pen Testing aims to identify vulnerabilities and risks which may negatively impact the <strong>Confidentiality, integrity, Availability, Security and Privacy</strong> of data and information assets.</span></span></span></p>
                  </UncontrolledCollapse>
                </div>
                <div className="accordion-item pt-2" key="3">
                  <h5><Button className="btn" color="primary" id="toggler3" style={{ marginBottom: '1rem' }}>
                    <i className="icon">+</i>
                    What is Ransomware?
                  </Button>
                  </h5>
                  <UncontrolledCollapse toggler="#toggler3" defaultOpen={false}>
                    <p className="pb-3">Ransomware is malicious software (malware) used in a cyberattack to encrypt the victim’s data with an encryption key that is known only to the attacker, thereby rendering the data unusable until a ransom payment (usually cryptocurrency, such as Bitcoin) is made by the victim.</p>
                    <p className="pb-3">Ransomware is not a new threat. The earliest known ransomware, known as PC Cyborg, was unleashed in 1989. Since that time, ransomware has evolved and become far more sophisticated.</p>
                    <p className="pb-3">Ransomware has also become more pervasive and lucrative with developments such as the following:</p>
                    <p className="pb-3"><strong>»Ongoing digital transformation: </strong>As more organizations digitize their operations and employees use email, cloud apps, and mobile devices to get work done, the number of potential entry points for attackers increases exponentially. After a network has been breached, infections can spread more quickly when critical systems are connected.</p>
                    <p className="pb-3"><strong>»The rise of cryptocurrency: </strong>Currency (such as Bitcoin) enables easy and virtually untraceable payments to anonymous cybercriminals. As cryptocurrency speculation continues to push prices higher, the potential for large ransoms grows proportionally.</p>
                    <p className="pb-3"><strong>»The emergence of Ransomware-as-a-Service (RaaS):</strong> RaaS (ransomware that can be purchased for a small fee and/or a percentage of the ransom payment) makes it easy for practically anyone to use ransomware which is concerning.</p>
                  </UncontrolledCollapse>
                </div>
                <div className="accordion-item pt-2" key="4">
                  <h5><Button className="btn" color="primary" id="toggler4" style={{ marginBottom: '1rem' }}>
                    <i className="icon">+</i>
                    What is the difference between Data Security and Privacy?
                  </Button>
                  </h5>
                  <UncontrolledCollapse toggler="#toggler4" defaultOpen={false}>
                    <p className="pb-3"><span className="ILfuVd"><span className="hgKElc"><strong>Security </strong>is about the safeguarding of <strong>data,</strong> whereas <span className="ILfuVd NA6bn"><strong>Data privacy</strong> is about proper usage, collection, retention, deletion, and storage of personally identifiable or health <strong>information.</strong></span></span></span></p>
                    <p className="pb-3"><span className="ILfuVd"><span className="hgKElc"><strong>Data Security </strong>is about <strong>protection</strong> against the unauthorized access and disclosure of <strong>data</strong>. Encryption is typically used as a security control to mitigate this risk.</span></span></p>
                  </UncontrolledCollapse>
                </div>
                <div className="pt-2" key="5">
                  <h5><Button className="btn" color="primary" id="toggler5" style={{ marginBottom: '1rem' }}>
                    <i className="icon">+</i>
                    What is a Cybersecurity Program?
                  </Button>
                  </h5>
                  <UncontrolledCollapse toggler="#toggler5" defaultOpen={false}>
                    <p className="pb-3"><span className="ILfuVd"><span className="hgKElc">A <strong>cybersecurity program</strong> is a documented set of your organization’s information security policies, procedures, guidelines, standards and operating procedures. The <strong>security program</strong> includes a roadmap, plan and milestones for effective implementation of security management best practices and controls.</span></span></p>
                  </UncontrolledCollapse>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Logos />
    </Layout>
  );
}

export default CybersecurityConsultingFAQ;
