import React from 'react';
import { Link } from 'gatsby';

import fb from '../images/svg/facebook.svg'
import twitter from '../images/svg/twitter.svg'
import instagram from '../images/svg/instag.svg'
import linkedin from '../images/svg/linkdin.svg'
import yelp from '../images/svg/yelp.svg'
import menu from '../images/icons/menu.png'
import phone from '../images/svg/phone.svg'
import falogo_irmcebook from '../images/svg/irm_logo_1.webp'
import bsimg1 from "../images/svg/sec-1.svg"
import bsimg2 from "../images/svg/sec-2.svg"
import bsimg5 from "../images/svg/sec-5.svg"
import bsimg6 from "../images/svg/sec-6.svg"
import bsimg7 from "../images/svg/sec-7.svg"
import bsimg8 from "../images/svg/sec-8.svg"
import bsimg11 from "../images/svg/sec-11.svg"
import bsimg15 from "../images/svg/sec-15.svg"
import bsimg16 from "../images/svg/sec-16.svg"
import bsimg17 from "../images/svg/sec-17.svg"
import bsimg18 from "../images/svg/sec-18.svg"
import bsimg20 from "../images/svg/sec-20.svg"

import MobileHeader from './MobileHeader';

const Header = () => {
  return (
    <div>
      <header className="main-header">
        <div className="auto-container">
          <div className="header-top">
            <div className="auto-container">
              <div className="row">
                <div className="col-md-12">
                  <div className="header-top-inner">
                    <p><span className="icon"><img src={phone} alt="IRM Consulting & Advisory" title="IRM Consulting & Advisory" width="20px" /></span> +1-647-800-2590</p>
                    <ul className="social-links">
                      <li><a rel="noreferrer" target="_blank" href="https://www.facebook.com/irmcon"><span className="icon"><img src={fb} alt="IRM Consulting & Advisory" width="30px" data-tip="Facebook" data-for='header' /></span></a></li>
                      <li><a rel="noreferrer" target="_blank" href="https://twitter.com/irm_con"><span className="icon"><img src={twitter} alt="IRM Consulting & Advisory" width="30px" data-tip="Twitter" data-for='header' /></span></a></li>
                      <li><a rel="noreferrer" target="_blank" href="https://www.instagram.com/irmconsulting/"><span className="icon"><img src={instagram} data-tip="Instagram" data-for='header' alt="IRM Consulting & Advisory" width="30px" /></span></a></li>
                      <li><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/company/irmcon/?viewAsMember=true"><span className="icon"><img data-tip="Linkedin" data-for='header' src={linkedin} alt="IRM Consulting & Advisory" width="30px" /></span></a></li>
                      <li><a rel="noreferrer" target="_blank" href="https://www.yelp.com/biz/irm-consulting-and-advisory-toronto"><span className="icon"><img data-tip="Yelp" data-for='header' src={yelp} alt="IRM Consulting & Advisory" width="30px" /></span></a></li>
                    </ul>
                    <Link to="/cybersecurity-consulting-appointments" className="get-free">
                      Get Free Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-box clearfix desktop-header">
            <div className="logo-box">
              <div className="logo"><a href="/"><img width="200px" height="63.27px" src={falogo_irmcebook} alt="cyber security service" title="cyber security service" /></a></div>
            </div>
            <div className="nav-outer clearfix">
              <nav className="main-menu navbar-expand-md ">
                <div className="navbar-header">
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="icon"><img src={menu} alt="IRM Consulting & Advisory" /></span>
                  </button>
                </div>
                <div className="collapse navbar-collapse clearfix" id="navbarSupportedContent">
                  <ul className="navigation clearfix">
                    <li>
                      <Link to="/index.html">
                        Home
                      </Link>
                    </li>
                    <li className="dropdown" style={{ position: "inherit" }}>
                      <Link to="/cybersecurity-consulting-services">
                        Services
                      </Link>
                      <ul className="w-100">
                        <div className="row horizontal-submenu-container py-3 px-5">
                          <div className="col-4 pl-0">
                            <li className="mb-3">
                              <Link className="text-white" to="/virtual-ciso-services-vciso">
                                <img className="mr-2" src={bsimg2} width="25px" alt="vCISO"/> Virtual CISO Services (vCISO)
                              </Link>
                            </li>
                            <li className="mb-3">
                              <Link className="text-white" to="/cybersecurity-training-awareness">
                                <img className="mr-2" src={bsimg8} width="25px" alt="cybersecurity training"/> Cybersecurity Training &  Awareness (CTA)
                              </Link>
                            </li>
                            <li className="mb-3">
                              <Link className="text-white" to="/blockchain-security">
                                <img className="mr-2" src={bsimg1} width="25px" alt="blockchain security"/> Blockchain Security (BS)
                              </Link>
                            </li>
                            <li className="mb-3">
                              <Link className="text-white" to="/iot-security">
                                <img className="mr-2" src={bsimg16} width="25px" alt="IoT Security"/> IoT Security (IoT)
                              </Link>
                            </li>
                          </div>
                          <div className="col-4 pl-0">
                            <li className="mb-3">
                              <Link className="text-white" to="/data-security-privacy-dsp">
                                <img className="mr-2" src={bsimg18} width="25px" alt="data security"/> Data Security &amp; Privacy (DSP)
                              </Link>
                            </li>
                            <li className="mb-3">
                              <Link className="text-white" to="/cloud-security-controls-csc">
                                <img className="mr-2" src={bsimg7} width="25px" alt="cloud security"/> Cloud Security Controls (CSC)
                              </Link>
                            </li>
                            <li className="mb-3">
                              <Link className="text-white" to="/devsecops-dso">
                                <img className="mr-2" src={bsimg5} width="25px" alt="devsec ops"/> DevSecOps (DSO)
                              </Link>
                            </li>
                            <li className="mb-3">
                              <Link className="text-white" to="/threat-modeling-tm">
                                <img className="mr-2" src={bsimg15} width="25px" alt="threat modeling"/> Threat Modeling (TM)
                              </Link>
                            </li>
                          </div>
                          <div className="col-4 pl-0">
                            <li className="mb-3">
                              <Link className="text-white" to="/penetration-testing-pt">
                                <img className="mr-2" src={bsimg17} width="25px" alt="pentration testing"/> Penetration Testing (PT)
                              </Link>
                            </li>
                            <li className="mb-3">
                              <Link className="text-white" to="/security-architecture-sa">
                                <img className="mr-2" src={bsimg20} width="25px" alt="security architecture"/> Security Architecture (SA)
                              </Link>
                            </li>
                            <li className="mb-3">
                              <Link className="text-white" to="/governance-risk-compliance-grc">
                                <img className="mr-2" src={bsimg6} width="25px" alt="governance risk"/> Governance Risk &amp; Compliance (GRC)
                              </Link>
                            </li>
                            <li className="mb-3">
                              <Link className="text-white" to="/process-risk-controls-prc">
                                <img className="mr-2" src={bsimg11} width="25px" alt="process risk controls"/> Process Risk &amp; Controls (PRC)
                              </Link>
                            </li>
                          </div>
                        </div>
                      </ul>
                    </li>
                    <li>
                      <Link to="/cybersecurity-consulting-why-us">
                        Why Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/marketplace">
                        Marketplace
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog">
                        Blogs
                      </Link>
                    </li>
                    <li>
                      <Link to="/cybersecurity-consulting-partners">
                        Partners
                      </Link>
                    </li>
                    <li>
                      <Link to="/cybersecurity-consulting-appointments">
                        Appointments
                      </Link>
                    </li>
                    <li>
                      <Link to="/cybersecurity-consulting-contact-us">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
          <MobileHeader />
        </div>
      </header>
    </div>
  )
}

export default Header;
