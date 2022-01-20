import React from 'react';
import { Link } from 'gatsby';

import sectiongbg from '../images/new-images/36.webp';
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

const AppointmentBanner = () => (
  <div>
    <div>
      <section className="page-title-sec" style={{ backgroundImage: `url(${sectiongbg})` }}>
        <div className="auto-container">
          <div className="row">
            <div className="col-md-12">
              <div className="content-box">
                <h1>Talk to a Cybersecurity <br />Trusted Advisor</h1>
                <p>Let’s talk about your Cybersecurity needs and how we can help. <br />Book a FREE 30 minute consultation with us, so we can learn more about your organizational  <br /> Cybersecurity needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="light-blue-background">
        <div className="auto-container pt-5 text-center">
          <p>
            We can improve your cybersecurity risk posture and maturity
            and compliance with regulations. We can identify, detect and
            protect high areas of risk in organizational assets and infrastructure
            and provide recommendations to mitigate identified risks and threats.
          </p>
        </div>
        <section className="calender-sec">
          <div className="auto-container">
            <div className="row">
              <div className="col-md-12">
                <div className="celander-iiner text-center">
                  <iframe src="https://calendly.com/info-irmcon/appointment-clone?embed_domain=irmcon.com&amp;embed_type=Inline" width="100%" height="700" frameBorder="0" data-gtm-yt-inspected-1_25="true"></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="services-sec style-two p-5 app-page-ser">
        <div className="auto-container">
          <div className="row">
            <div className="col-md-12 text-center blue-text">
              <h2 >Services We Offer</h2>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="we-offer-block">
                <div className="icon-area">
                  <Link to="/devsecops-dso">
                    <img src={img9} alt="irmcon-appointment-image" />
                  </Link>
                </div>
                <div className="text-box">
                  <h4>
                    <Link to="/devsecops-dso">
                      DevSecOps <br />(DSO)
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="we-offer-block">
                <div className="icon-area">
                  <Link to="/blockchain-security">
                    <img src={img10} alt="irmcon-appointment-image" />
                  </Link>
                </div>
                <div className="text-box">
                  <h4>
                    <Link to="/blockchain-security">
                      Blockchain Security <br />(BS)
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="we-offer-block">
                <div className="icon-area">
                  <Link to="/iot-security">
                    <img src={img11} alt="irmcon-appointment-image" />
                  </Link>
                </div>
                <div className="text-box">
                  <h4>
                    <Link to="/iot-security">
                      IoT Security <br />(IoT)
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="we-offer-block">
                <div className="icon-area">
                  <Link to="/cybersecurity-training-awareness">
                    <img src={img12} alt="irmcon-appointment-image" />
                  </Link>
                </div>
                <div className="text-box">
                  <h4>
                    <Link to="/cybersecurity-training-awareness">
                      Cybersecurity Training &amp; <br /> Awareness <br />(CTA)
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="we-offer-block">
                <div className="icon-area ">
                  <Link to="/virtual-ciso-services-vciso">
                    <img src={img1} alt="irmcon-appointment-image" />
                  </Link>
                </div>
                <div className="text-box">
                  <h4>
                    <Link to="/virtual-ciso-services-vciso">
                      Virtual CISO Services <br />(vCISO)
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="we-offer-block">
                <div className="icon-area">
                  <Link to="/security-architecture-sa">
                    <img src={img2} alt="irmcon-appointment-image" />
                  </Link>
                </div>
                <div className="text-box">
                  <h4>
                    <Link to="/security-architecture-sa">
                      Security Architecture <br /> (SA)
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="we-offer-block">
                <div className="icon-area">
                  <Link to="/data-security-privacy-dsp">
                    <img src={img3} alt="irmcon-appointment-image" />
                  </Link>
                </div>
                <div className="text-box">
                  <h4>
                    <Link to="/data-security-privacy-dsp">
                      Data Security &amp; Privacy <br /> (DSP)
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="we-offer-block">
                <div className="icon-area">
                  <Link to="/governance-risk-compliance-grc">
                    <img src={img4} alt="irmcon-appointment-image" />
                  </Link>
                </div>
                <div className="text-box">
                  <h4>
                    <Link to="/governance-risk-compliance-grc">
                      Governance Risk &amp; Compliance <br /> (GRC)
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="we-offer-block">
                <div className="icon-area">
                  <Link to="/process-risk-controls-prc">
                    <img src={img5} alt="irmcon-appointment-image" />
                  </Link>
                </div>
                <div className="text-box">
                  <h4>
                    <Link to="/process-risk-controls-prc">
                      Process Risk &amp; Controls <br />(PRC)
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="we-offer-block">
                <div className="icon-area">
                  <Link to="/threat-modeling-tm">
                    <img src={img6} alt="irmcon-appointment-image" />
                  </Link>
                </div>
                <div className="text-box">
                  <h4>
                    <Link to="/threat-modeling-tm">
                      Threat Modeling <br />(TM)
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="we-offer-block">
                <div className="icon-area">
                  <Link to="/penetration-testing-pt">
                    <img src={img7} alt="irmcon-appointment-image" />
                  </Link>
                </div>
                <div className="text-box">
                  <h4>
                    <Link to="/penetration-testing-pt">
                      Penetration Testing <br />(PT)
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="we-offer-block">
                <div className="icon-area">
                  <Link to="/cloud-security-controls-csc">
                    <img src={img8} alt="irmcon-appointment-image" />
                  </Link>
                </div>
                <div className="text-box">
                  <h4>
                    <Link to="/cloud-security-controls-csc">
                      Cloud Security Controls <br />(CSC)
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
)

export default AppointmentBanner;

/* Gatsby V4 Syntax
Data is incomplete on the WP-side, therefore taking out any querying in this component for now.
When the WP ACFields for the 'Services' page are complete, then look to implement a static query to the content mesh.
*/

/* Gatsby V2 Syntax
  query AppointmentBanner {
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