import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = () => (
  <div className="h-100">
    <section className="h-100 mt-md-0 mt-4 contact-sec remove-gray2">
      <div className="auto-container h-100">
        <div className="row d-flex justify-content-center text-center h-100">
          <div className="contact-box h-100">
            <span>Talk to a Trusted Advisor</span>
            <h3>Send Us a Message</h3>
            <form className="contact-form" name="contact" method="post" data-netlify-recaptcha="true" data-netlify="true">
              <div className="row clearfix">
                <div className="form-group col-lg-12 col-md-12">
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="text" name="name" placeholder="Full Name" required />
                </div>
                <div className="form-group col-lg-6 col-md-12">
                  <input type="tel" name="phone" placeholder="Phone" />
                </div>
                <div className="form-group col-lg-6 col-md-12">
                  <input type="email" name="email" placeholder="Email" required />
                </div>
                <div className="form-group col-lg-12 col-md-12">
                  <textarea name="msg" placeholder="Message"></textarea>
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
                  <button type="submit" className="theme-btn btn-style-one mmmm">Send a Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default ContactForm;