import React from 'react';
import { Link } from 'gatsby';

import img1 from '../images/svg/services-1.svg';
import img2 from '../images/svg/services-2.svg';
import img3 from '../images/svg/services-3.svg';
import img4 from '../images/svg/services-4.svg';
import img5 from '../images/svg/services-5.svg';
import img6 from '../images/svg/services-6.svg';
import img7 from '../images/svg/services-7.svg';
import img8 from '../images/svg/services-8.svg';
import img9 from '../images/svg/services-9.svg';
import img10 from '../images/svg/services-10.svg';
import img11 from '../images/svg/services-11.svg';
import img12 from '../images/svg/services-12.svg';
import bg from '../images/page-banner.webp';

const AllServicesSection = () => (
  <div>
    <div>
      <section className="page-title-sec" style={{ backgroundImage: `url(${bg})` }}>
        <div className="auto-container">
          <div className="row">
            <div className="col-md-12">
              <div className="content-box">
                <h1>Advisory Services</h1>
                <p>We can optimize your organization's data security.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="we-offer-sec p-5 main-services services-sub-heading">
        <div className="auto-container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="mb-5">Our expert Trusted Advisors and Consultants can help you protect and secure your organization and customer Information Assets through the following Services</h3>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mh1">
              <div className="we-offer-block">
                <div className="icon-area">
                  <img src={img1} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" />
                </div>
                <div className="text-box">
                  <h4>Virtual CISO Services <br />(vCISO)</h4>
                  <p>Build and Run your entire Cybersecurity Program with our vCISO Services. </p>
                  <Link to="/virtual-ciso-services-vciso/" className="theme-btn btn-style-one vciso-buton-ser">
                    Explore vCISO Solutions
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mh2">
              <div className="we-offer-block">
                <div className="icon-area">
                  <img src={img12} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" />
                </div>
                <div className="text-box">
                  <h4>Cybersecurity Training &amp; <br /> Awareness <br />(CTA)</h4>
                  <p>Leverage solutions to integrate Cybersecurity Awareness and Training into the People, Culture and Business Processes of your organization </p>
                  <Link to="/cybersecurity-training-awareness" className="theme-btn btn-style-one">
                    Explore CTA Solutions
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mh3">
              <div className="we-offer-block">
                <div className="icon-area">
                  <img src={img3} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" />
                </div>
                <div className="text-box">
                  <h4>Data Security &amp; Privacy <br /> (DSP)</h4>
                  <p>Protect the Privacy and Security of your organization and customer data. Prevent and detect Data Breaches and unauthorized disclosure of sensitive data.</p>
                  <Link to="/marketplace" className="theme-btn btn-style-one">
                    Explore DSP Solutions
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mh4">
              <div className="we-offer-block">
                <div className="icon-area">
                  <img src={img4} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" />
                </div>
                <div className="text-box">
                  <h4>Governance Risk &amp; Compliance <br /> (GRC)</h4>
                  <p>Govern, Manage Risk and ensure Compliance and sustainability of your Security Program.</p>
                  <Link to="/marketplace" className="theme-btn btn-style-one">
                    Explore GRC Solutions
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mh5">
              <div className="we-offer-block">
                <div className="icon-area">
                  <img src={img5} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" />
                </div>
                <div className="text-box">
                  <h4>Process Risk &amp; Controls <br />(PRC)</h4>
                  <p>Identify Process Risks, Design, Implement and operate effective controls to mitigate Risks to your organization and customer Information &amp; Technology Assets.</p>
                  <Link to="/marketplace" className="theme-btn btn-style-one">
                    Explore PRC Solutions
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mh6">
              <div className="we-offer-block">
                <div className="icon-area">
                  <img src={img6} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" />
                </div>
                <div className="text-box">
                  <h4>Threat Modeling <br />(TM)</h4>
                  <p>Proactively identify and evaluate potential Security Threats and Vulnerabilities during Product Design, understand the impact of Threats and apply appropriate security controls and solutions.</p>
                  <Link to="/marketplace" className="theme-btn btn-style-one">
                    Explore Threat Modeling Solutions
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mh7">
              <div className="we-offer-block">
                <div className="icon-area">
                  <img src={img7} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" />
                </div>
                <div className="text-box">
                  <h4>Penetration Testing <br />(PT)</h4>
                  <p>Simulate attack scenarios that a hacker will use to launch an attack, Identify security vulnerabilities before hackers can locate and exploit them.</p>
                  <Link to="/marketplace" className="theme-btn btn-style-one">
                    Explore Pen Testing Solutions
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mh8">
              <div className="we-offer-block">
                <div className="icon-area">
                  <img src={img8} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" />
                </div>
                <div className="text-box">
                  <h4>Cloud Security Controls <br />(CSC)</h4>
                  <p>Protect your Cloud environments against misconfiguration, vulnerabilities, and malicious attacks. Implement security best practices to secure your Information & Technology Assets in the Cloud.</p>
                  <Link to="/marketplace" className="theme-btn btn-style-one">
                    Explore Cloud Security
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mh9">
              <div className="we-offer-block">
                <div className="icon-area">
                  <img src={img9} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" />
                </div>
                <div className="text-box">
                  <h4>DevSecOps <br />(DSO)</h4>
                  <p>Automate and embed security into your Development Lifecycle and Release Workflows. Build and release Secure Products and Services for your Customers.</p>
                  <Link to="/marketplace" className="theme-btn btn-style-one">
                    Explore DevSecOps Solutions
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mh10">
              <div className="we-offer-block">
                <div className="icon-area">
                  <img src={img10} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" />
                </div>
                <div className="text-box">
                  <h4>Blockchain Security <br />(BS)</h4>
                  <p>Build and Run secure Distributed Applications and Services on Blockchain Technology</p>
                  <Link to="/marketplace" className="theme-btn btn-style-one">
                    Explore Blockchain Security
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mh11">
              <div className="we-offer-block">
                <div className="icon-area">
                  <img src={img11} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" />
                </div>
                <div className="text-box">
                  <h4>IoT Security <br />(IoT)</h4>
                  <p>Protect your Data, Smart Devices, Smart Homes, Smart Cities, Smart Buildings and Smart Governments in an interconnected ecosystem</p>
                  <Link to="/marketplace" className="theme-btn btn-style-one">
                    Explore IoT Security
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mh12">
              <div className="we-offer-block">
                <div className="icon-area">
                  <img src={img2} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" />
                </div>
                <div className="text-box">
                  <h4>Security Architecture <br /> (SA)</h4>
                  <p>Protect your Cloud Network Infrastructure design with in-depth Threat Modeling, Defense-in-Depth Security Principles and Control specifications.</p>
                  <Link to="/marketplace" className="theme-btn btn-style-one">
                    Explore SA Solutions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
)

export default AllServicesSection;


/* Gatsby V4 Syntax
Data is incomplete on the WP-side, therefore taking out any querying in this component for now.
When the WP ACFields for the 'Services' page are complete, then look to implement a static query to the content mesh.
*/

/* Gatsby V2 Syntax
  query MyQuery111 {
    allWordpressPage(filter: {title: {in: "Services"}}) {
      edges {
        node {
          acf {
            new_services_top_text
            new_services_box {
              new_services_button_text
              new_services_button_url
              new_services_heading
              new_services_subtext
              new_services_img {
                localFile {
                  childImageSharp {
                    fluid {
                      srcWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
*/