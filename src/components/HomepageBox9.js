import React from 'react';
import { Link } from 'gatsby';

import ContactForm from './ContactForm';
import boximg from '../images/svg/ref-image.webp';

const HomepageBox9 = () => (
  <div>
    <section className="refles-sec">
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="referls-block h-100">
              <div className="row clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                  <div className="text-box">
                    <h3>Send Your Referrals</h3>
                    <img width="400px" height="355px" src={boximg} alt="IRM Consulting & Advisory" title="IRM Consulting & Advisory" />
                    <p className="mt-3">Are you helping a colleague of yours who is looking for trustworthy and cost-effective cybersecurity services? Our team of skilled advisors will be ready to assist your referrals with professional business solutions.
                      <br />
                    </p>
                    <div className="ref-button">
                      <Link to="/cybersecurity-consulting-contact-us/" className="theme-btn btn-style-one mmmm">
                        Send a Referral</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6 col-md-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default HomepageBox9;