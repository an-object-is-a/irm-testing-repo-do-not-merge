import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import loadable from '@loadable/component';

import Layout from '../components/Layout';
import homepagebanner1 from '../images/banners/pt.webp';
import pt1 from '../images/svg/pt.webp';
import check from '../images/svg/check.svg';

const Logos = loadable(() => import('../components/Logos'));
const Slide = loadable(() => import('react-reveal/Slide'));

const PenetrationTestingPt = () => (
  <Layout pageTitle="Penetration Testing Services |  IRM Consulting & Advisory">
    <Helmet>
      <meta name="description" content="Penetration testing, or pen testing, is a method used by security professionals to simulate an attack from a malicious hacker. We provide penetration testing services to test the security of an organization's network and applications, pro-actively identifying vulnerabilities that can be exploited by an attacker." />
      <meta name="keywords" content="cybersecurity consulting, penetration testing services, penetration testing company, penetration testing, penetration testing service, Application Security" />
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
      <meta property="og:url" content="https://irmcon-staging.netlify.app/penetration-testing-pt/" />
      <meta property="og:title" content="IRM Consulting & Advisory - Cybersecurity Consulting for your SaaS Business" />
      <meta property="og:description" content="Penetration testing, or pen testing, is a method used by security professionals to simulate an attack from a malicious hacker. We provide penetration testing services to test the security of an organization's network and applications, pro-actively identifying vulnerabilities that can be exploited by an attacker." />
      <meta property="og:image" content="https://xgw.394.myftpupload.com/wp-content/uploads/2021/10/irm-logo-social-scaled.jpg" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content="IRM Consulting & Advisory - Cybersecurity Consulting for your SaaS Business" />
      <meta property="twitter:description" content="Penetration testing, or pen testing, is a method used by security professionals to simulate an attack from a malicious hacker. We provide penetration testing services to test the security of an organization's network and applications, pro-actively identifying vulnerabilities that can be exploited by an attacker." />
      <meta property="twitter:image" content="https://xgw.394.myftpupload.com/wp-content/uploads/2021/10/irm-logo-social-scaled.jpg" />
      <meta property="twitter:site" content="IRM Consulting & Advisory" />
      <link rel="canonical" href="https://irmcon-staging.netlify.app/penetration-testing-pt/" />
    </Helmet>

    <section className="page-title-sec" style={{ background: `url(${homepagebanner1})` }}>
      <div className="auto-container">
        <div className="row">
          <div className="col-md-12">
            <div className="content-box">
              <h1>Penetration Testing (PT)</h1>
              <p>Simulate attack scenarios that a hacker will use to launch an attack, Identify <br /> security vulnerabilities before hackers can locate and exploit them</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="services-detail pt-page mt-0">
      <div className="light-blue-background mb-3 py-5">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <Slide left duration={2000}>
                <div className="image-box">
                  <img src={pt1} width="300px" alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" />
                </div>
              </Slide>
            </div>
            <div className="col-lg-7 col-md-12">
              <Slide right duration={2000}>
                <div className="detail-box">
                  <h3>What Is Pen Testing and Why is it Important?</h3>
                  <p><span className="blue-color">Penetration Testing, or Pen Testing, also known as Ethical Hacking,</span> is an authorized simulated cyberattack on Applications and supporting Technology Infrastructure performed to evaluate the security of the system. The test is performed to identify both weaknesses (also referred to as vulnerabilities), including the potential for unauthorized parties to gain access to the system’s features and data as well as strengths, enabling a full risk assessment to be completed. Testing Types include</p>
                  <p><span className="blue-color">Static Application Security Test (SAST), or “White Box,”</span>  tools inspect source code or binaries of your SaaS Products and provide feedback on possible Application Security Vulnerabilities.</p>
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </div>
      <div className="auto-container">
        <div className="row">
          <div className="col-md-12">
            <div className="detail-list detail-box">
              <p><span className="blue-color">“Grey Box”</span> Test is a combination of both “White Box” and “Black Box” testing. It is a method to debug software and evaluate vulnerabilities of your SaaS Products with limited knowledge of the workings of the component being tested.</p>
              <h2>Our Services</h2>
              <ul>
                <li><i className="icon"><img src={check} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" /></i> <span className="blue-color">Pen Testing your SaaS Products,</span>  to ensure its security provides your business a competitive advantage, reduces Post-Release costs, provides your prospects and customers Secure Products whilst enhancing your Brand and Customer Trust.</li>
                <li><i className="icon"><img src={check} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" /></i> We provide <span className="blue-color">Penetration Testing Services</span>   using industry standard and best practice Pen Testing Tools and Processes.</li>
              </ul>
              <div className="gray-bg">
                <div className="row">
                  <div className="col-lg-12">
                    <h3>Penetration Tests</h3>
                    <span>Penetration Testing</span>
                    <div className="text">
                      Get a Penetration Test to identify security weaknesses which could be exploited in a system, potentially exposing data and giving functionality to malicious hackers.
                    </div>
                    <div className="row">
                      <div className="col-lg-6"><h4>Price</h4>
                        <p>Starting at $5000</p></div>
                      <div className="col-lg-6">
                        <Link className="theme-btn btn-style-one" to="/penetration-test-quote"> Request Quote</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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

export default PenetrationTestingPt;
