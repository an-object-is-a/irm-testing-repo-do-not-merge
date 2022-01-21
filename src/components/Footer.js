import React from 'react';
import { Link } from 'gatsby';

import location from '../images/svg/map.svg'
import phone from '../images/svg/f-phone.svg'
import email from '../images/svg/f-email.svg'
import footerlogo from "../images/svg/irm_logo_1.webp"
import bblogo from "../images/svg/bb-logo.svg"
import fb from '../images/svg/facebook.svg'
import twitter from '../images/svg/twitter.svg'
import instagram from '../images/svg/instag.svg'
import linkedin from '../images/svg/linkdin.svg'
import yelp from '../images/svg/yelp.svg'

import FooterBlog from './FooterBlog';

const Footer = () => {
  return (
    <div>
      <footer className="main-footer">
        <div className="auto-container">
          <div className="widgets-section">
            <div className="row">
              <div className="footer-column col-xl-4 col-lg-6 col-md-6 col-sm-12">
                <div className="footer-widget about-widget">
                  <div className="footer-logo">
                    <figure>
                      <a href="/"><img width="250px" height="80px" src={footerlogo} alt="IRM Consulting & Advisory Logo" /></a>
                    </figure>
                  </div>
                  <div className="widget-content">
                    <div className="text">We solve business problems, take a consultative approach to every client engagement, and find actionable solutions that will help your organization.</div>
                    <ul className="social-links">
                      <li><a rel="noreferrer" target="_blank" href="https://www.facebook.com/irmcon"><span className="icon"><img src={fb} alt="IRM Consulting & Advisory" width="30px" data-tip="Facebook" data-for='footer' /></span></a></li>
                      <li><a rel="noreferrer" target="_blank" href="https://twitter.com/irm_con"><span className="icon"><img src={twitter} alt="IRM Consulting & Advisory" width="30px" data-tip="Twitter" data-for='footer' /></span></a></li>
                      <li><a rel="noreferrer" target="_blank" href="https://www.instagram.com/irmconsulting/"><span className="icon"><img src={instagram} data-tip="Instagram" data-for='footer' alt="IRM Consulting & Advisory" width="30px" /></span></a></li>
                      <li><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/company/irmcon/?viewAsMember=true"><span className="icon"><img data-tip="Linkedin" data-for='footer' src={linkedin} alt="IRM Consulting & Advisory" width="30px" /></span></a></li>
                      <li><a rel="noreferrer" target="_blank" href="https://www.yelp.com/biz/irm-consulting-and-advisory-toronto"><span className="icon"><img data-tip="Yelp" data-for='footer' src={yelp} alt="IRM Consulting & Advisory" width="30px" /></span></a></li>
                    </ul>
                    <div className="bb-area">
                      <img src={bblogo} alt="IRM Consulting & Advisory" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-column col-xl-3 col-lg-3 col-md-6 col-sm-12 footer-blog">
                <FooterBlog />
              </div>
              <div className="footer-column col-xl-2 col-lg-2 col-md-6 col-sm-12">
                <div className="footer-widget links-widget">
                  <h2 className="widget-title">Navigation</h2>
                  <div className="widget-content">
                    <ul className="list">
                      <li>
                        <Link to="/index.html">
                          Home</Link>
                      </li>
                      <li>
                        <Link to="/cybersecurity-consulting-why-us">
                          Why Us</Link>
                      </li>
                      <li>
                        <Link to="/cybersecurity-consulting-services">
                          Services</Link>
                      </li>
                      <li>
                        <Link to="/marketplace">
                          Marketplace</Link>
                      </li>
                      <li>
                        <Link to="/cybersecurity-consulting-partners">
                          Partners</Link>
                      </li>
                      <li>
                        <Link to="/blog">
                          Blogs</Link>
                      </li>
                      <li>
                        <Link to="/cybersecurity-consulting-faq">
                          FAQs</Link>
                      </li>
                      <li>
                        <Link to="/cybersecurity-consulting-appointments">
                          Appointments</Link>
                      </li>
                      <li>
                        <Link to="/cybersecurity-consulting-contact-us">
                          Contact Us</Link>
                      </li>
                      <li>
                        <Link to="/cybersecurity-consulting-privacy-policy">
                          Our Privacy Policy</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="footer-widget contact-widget">
                  <h2 className="widget-title">Services</h2>
                  <div className="widget-content">
                    <ul className="list">
                      <li>
                        <Link to="/virtual-ciso-services-vciso">
                          Virtual CISO Services</Link>
                      </li>
                      <li>
                        <Link to="/cybersecurity-training-awareness">
                          Cybersecurity Training &  Awareness</Link>
                      </li>
                      <li>
                        <Link to="/blockchain-security">
                          Blockchain Security</Link>
                      </li>
                      <li>
                        <Link to="/iot-security">
                          IoT Security</Link>
                      </li>
                      <li>
                        <Link to="/data-security-privacy-dsp">
                          Data Security &amp; Privacy</Link>
                      </li>
                      <li>
                        <Link to="/cloud-security-controls-csc">
                          Cloud Security Controls</Link>
                      </li>
                      <li>
                        <Link to="/devsecops-dso">
                          DevSecOps</Link>
                      </li>
                      <li>
                        <Link to="/threat-modeling-tm">
                          Threat Modeling</Link>
                      </li>
                      <li>
                        <Link to="/penetration-testing-pt">
                          Penetration Testing</Link>
                      </li>
                      <li>
                        <Link to="/security-architecture-sa">
                          Security Architecture</Link>
                      </li>
                      <li>
                        <Link to="/governance-risk-compliance-grc">
                          Governance Risk &amp; Compliance</Link>
                      </li>
                      <li>
                        <Link to="/process-risk-controls-prc">
                          Process Risk &amp; Controls</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row widget-content text-center">
            <p className="mb-3 text-white w-100"><img className="mx-2" src={location} alt="IRM Consulting & Advisory" width="18px" /> First Canadian Place, 100 King Street West, Suite 5700, Toronto, Ontario, M5X 1C7, Canada  <img className="ml-4 mr-2" src={phone} alt="IRM Consulting & Advisory" width="20px" /><a className="text-white" href="tel:+16478002590">+1-647-800-2590</a>  <img className="ml-4 mr-2" src={email} alt="IRM Consulting & Advisory" width="18px" /><a className="text-white" href="mailto:info@irmcon.com">info@irmcon.com</a></p>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="inner-container clearfix">
              <div className="copyright-text">
                <p>Copyright © 2021 IRM Consulting & Advisory - All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
