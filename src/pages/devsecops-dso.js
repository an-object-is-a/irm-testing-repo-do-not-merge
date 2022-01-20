import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import loadable from '@loadable/component';

import Layout from '../components/Layout';
import homepagebanner1 from '../images/banners/dso.webp';
import dd1 from '../images/svg/dso.webp';
import arrow from '../images/svg/arrow.svg';
import bug from '../images/svg/bug.svg';
import cloud from '../images/svg/cloud.svg';
import startup from '../images/svg/startup.svg';

const Logos = loadable(() => import('../components/Logos'));
const Slide = loadable(() => import('react-reveal/Slide'));

const DevSecOpsDSO = () => (
  <Layout pageTitle="DevSecOps Consulting Services | IRM Consulting & Advisory">
    <Helmet>
      <meta name="description" content="Need DevSecOps Consulting Services? DevSecOps accelerates the pace of digital business, but the constant change to production introduces considerable security threats and risk to business operations and regulatory compliance." />
      <meta name="keywords" content="cybersecurity consulting, devsecops services, devops consulting, devops consultant" />
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
      <meta property="og:url" content="https://elated-swanson-224ee1.netlify.app/devsecops-dso/" />
      <meta property="og:title" content="IRM Consulting & Advisory - Cybersecurity Consulting for your SaaS Business" />
      <meta property="og:description" content="Need DevSecOps Consulting Services? DevSecOps accelerates the pace of digital business, but the constant change to production introduces considerable security threats and risk to business operations and regulatory compliance." />
      <meta property="og:image" content="https://xgw.394.myftpupload.com/wp-content/uploads/2021/10/irm-logo-social-scaled.jpg" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content="IRM Consulting & Advisory - Cybersecurity Consulting for your SaaS Business" />
      <meta property="twitter:description" content="Need DevSecOps Consulting Services? DevSecOps accelerates the pace of digital business, but the constant change to production introduces considerable security threats and risk to business operations and regulatory compliance." />
      <meta property="twitter:image" content="https://xgw.394.myftpupload.com/wp-content/uploads/2021/10/irm-logo-social-scaled.jpg" />
      <meta property="twitter:site" content="IRM Consulting & Advisory" />
      <link rel="canonical" href="https://elated-swanson-224ee1.netlify.app/devsecops-dso/" />
    </Helmet>

    <section className="page-title-sec" style={{ background: `url(${homepagebanner1})` }}>
      <div className="auto-container">
        <div className="row">
          <div className="col-md-12">
            <div className="content-box">
              <h1>DevSecOps (DSO)</h1>
              <p>Automate and embed security into your Development Lifecycle and Release <br /> Workflows. Build  and release Secure Products and Services for your Customers.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="services-detail dso-page mt-0">
      <div className="light-blue-background mb-5 py-5">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <Slide left duration={2000}>
                <div className="image-box">
                  <img src={dd1} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" />
                </div>
              </Slide>
            </div>
            <div className="col-lg-7 col-md-12">
              <Slide right duration={2000}>
                <div className="detail-box">
                  <h3>Why DevSecOps?</h3>
                  <p>DevSecOps is a combination of Software Development (Dev), Cybersecurity (Sec) and Information Technology Operations (Ops). Combining these factors together allows for speeding the software delivery that makes continuous collaboration, automation, communication, and integration possible. With these processes, software delivery is prioritized based on risk and scanning for security vulnerabilities is increased and optimized into your Continuous Integration/Continuous Delivery (CI/CD) Pipelines.</p>
                  <p>DevOps accelerates the pace of digital business, but the constant change to production introduces considerable security threats and risk to business operations and regulatory compliance.</p>
                  <p>Avoiding and mitigating these threats and risks in your DevOps initiatives by following security best practices will help your organization deliver secure products to your customers and avoid regulatory scrutiny or possibly fines.</p>
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </div>
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 col-md-12">
            <div className="services-box-detail">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="services-box-inner">
                    <div className="icon-area">
                      <h3>13%</h3>
                    </div>
                    <div className="text-box">
                      <p>Avoiding and mitigating these threats and risks in your DevOps initiatives by following security best practices will help your organization deliver secure products to your customers and avoid regulatory scrutiny or possibly fines. </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="services-box-inner">
                    <div className="icon-area">
                      <img src={arrow} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" />
                    </div>
                    <div className="text-box">
                      <p>You call that a shift left?  <br /> Security professionals report that their organizations are shifting security left, but they really aren’t doing the scans to support that claim.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="services-box-inner">
                    <div className="icon-area">
                      <img src={bug} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" />
                    </div>
                    <div className="text-box">
                      <p>Why can’t we be friends? Just like in last year’s survey, security pros think devs don’t find enough of the bugs at the earliest stages and are slow to prioritize fixing them</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="services-box-inner">
                    <div className="icon-area">
                      <img src={cloud} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" />
                    </div>
                    <div className="text-box">
                      <p>Cutting edge is left out. <br /> Most sec team don’t have security processes in place for microservices/containers/APIs/cloud native or serverless.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3"></div>
                <div className="col-lg-6 col-md-12">
                  <div className="services-box-inner">
                    <div className="icon-area">
                      <img src={startup} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" />
                    </div>
                    <div className="text-box">
                      <p>Testing traction <br /> Over 42% said testing happens too late in the lifecycle, 36% reported it was hard to understand, process, and fix any discovered vulnerabilities, and 31% found prioritizing vulnerability remediation an uphill battle. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="detail-box">
              <p>Our Services and Solutions will help you embed and integrate Security into your existing DevOps Tools and Processes, allowing your organization’s systems to combine optimal software development and technology with quality and security. This combination promotes a balance between fast development and codebase security.</p>
              <p>
                If you are interested in our services, please
                <Link to="/cybersecurity-consulting-appointments" > set an appointment </Link> with us so we can thoroughly discuss your needs.
              </p>
              <div className="learno-more">
                <Link to="/cybersecurity-consulting-appointments" className="theme-btn btn-style-one">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Logos />
  </Layout>
)

export default DevSecOpsDSO;
