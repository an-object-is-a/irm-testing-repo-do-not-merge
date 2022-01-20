import React from 'react';

import bgimg1 from '../images/svg/contact-us.webp';
import bgimg2 from '../images/svg/contact.svg';
import bgimg4 from '../images/svg/map.svg';
import bgimg5 from '../images/svg/f-phone.svg';
import bgimg6 from '../images/svg/f-email.svg';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactAllSection = () => (
  <div>
    <div>
      <section className="page-title-sec" style={{ backgroundImage: `url(${bgimg1})` }}>
        <div className="auto-container">
          <div className="row">
            <div className="col-md-12">
              <div className="content-box">
                <h1>Contact Us</h1>
                <p>Please do not hesitate to get in touch with us</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-sec contact-page">
        <div className="auto-container">
          <div className="row">
            <div className="col-md-12">
              <div className="sec-title mb-0">
                <h2>We are here to Help.</h2>
                <h5>Contact us for your Cybersecurity & Information Risk Management Needs.</h5>
                <p>Do you have more questions about our company and services? We will be glad to answer them for <br /> you. At IRM Consulting & Advisory, our services are based on your organization’s overall needs. Send<br /> us a message today!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-sec contact-page mb-5">
        <div className="light-blue-background py-5">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="contact-left-area">
                  <div className="image-box">
                    <img src={bgimg2} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" />
                  </div>
                  <div className="text-box">
                    <p>We are your No #1 Trusted Advisor for protecting the security of your SaaS Business. Let our expert Advisors help your business achieve Industry Certifications such as SOC2, CSA Star Level and ISO27001, provide Customer and Regulatory Assurance while you grow your Business.</p>
                    <span className="blue-color">Thank you for visiting our Website.</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <form className="contact-form" name="contact-page" method="post" data-netlify-recaptcha="true" data-netlify="true">
                  <div className="row clearfix">
                    <div className="form-group col-lg-12 col-md-12">
                      <input type="hidden" name="form-name" value="contact-page" />
                      <input type="text" name="name" placeholder="Full Name" required />
                    </div>
                    <div className="form-group col-lg-6 col-md-12">
                      <input type="tel" name="phone" placeholder="Phone" required />
                    </div>
                    <div className="form-group col-lg-6 col-md-12">
                      <input type="email" name="email" placeholder="Email" required />
                    </div>
                    <div className="form-group col-lg-12 col-md-12">
                      <textarea name="message" placeholder="Message" required></textarea>
                    </div>
                    <div className="form-group col-lg-12 col-md-12">
                      <input className="styled-checkbox" id="styled-checkbox-2" name="checkbox" type="checkbox" value="value2" required />
                      <label htmlFor="styled-checkbox-2">"I agree that my submitted data is being collected and stored."</label>
                    </div>

                    <div className="form-group col-lg-12 col-md-12">
                      <div className="d-flex justify-content-center">
                        <ReCAPTCHA sitekey="6Lc4v-0aAAAAAIL9Hpo_L4SXf95pq2_-XG6ApiBP" />
                      </div>
                    </div>


                    <div className="form-group col-lg-12 col-md-12">
                      <button type="submit" className="theme-btn btn-style-one transperent-bg mmmm">Send a Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="map-sec">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="map-box">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11548.36282169957!2d-79.40054486547696!3d43.64628114308932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3568a9c89809%3A0xf004e53e1a2d45c2!2sIRM%20Consulting%20%26%20Advisory!5e0!3m2!1sen!2s!4v1617115966903!5m2!1sen!2s" width="600" height="350" allowFullScreen="" loading="lazy"></iframe>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="address-block">
                <div className="address-area">
                  <div className="icon-area">
                    <img src={bgimg4} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" width="18px" />
                  </div>
                  <div className="text-area">
                    <p>IRM Consulting & Advisory <br /> First Canadian Place, 100 King Street West,  <br /> Suite 5700, Toronto, Ontario, M5X 1C7</p>
                  </div>
                </div>
                <div className="address-area">
                  <div className="icon-area">
                    <img src={bgimg5} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" width="18px" />
                  </div>
                  <div className="text-area">
                    <p>+1-647-800-2590</p>
                  </div>
                </div>
                <div className="address-area">
                  <div className="icon-area">
                    <img src={bgimg6} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" width="18px" />
                  </div>
                  <div className="text-area">
                    <p>info@irmcon.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default ContactAllSection;


/* Gatsby V4 Syntax
Data is incomplete on the WP-side, therefore taking out any querying in this component for now.
When the WP ACFields for the 'Contact' page are complete, then look to implement a static query to the content mesh.
*/

/* Gatsby V2 Syntax
  query ContactAll {
    allWordpressPage(filter: {title: {in: "Contact"}}) {
      edges {
        node {
          acf {
            banner_subtext_contact
            banner_heading_contact
            form_subtext_contact
            form_heading_contact
            banner_background_contact {
              localFile {
                childImageSharp {
                  fixed(width: 1940, height:400, quality: 100) {
                    srcWebp
                    src
                  }
                }
              }
            }
            email_contact
            phone_contact
            address_contact
          }
        }
      }
    }
  }
*/
