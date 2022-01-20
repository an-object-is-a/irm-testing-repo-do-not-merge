/*
import React, { Component } from "react";
var Recaptcha = require('react-recaptcha');

class ContactForm extends Component {
  render() {
    return (

      <div>
        <section className="contact-form section-padding-xs bg-grey">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 home-form">
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <span>Talk to a Trusted Advisor</span>
                    <h2>Send Us a Message</h2>
                    <p>Thank you very much for your interest in our company and our services. If you have any questions, please write us a message now!</p>
                  </div>
                </div>

                <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                  <div className="row contact-form-home">
                    <div className="col-lg-12">
                      <input type="hidden" name="bot-field" />
                      <input type="hidden" name="form-name" value="contact" />
                      <input required type="text" name="name" placeholder="Full Name*" />
                    </div>
                    <div className="col-lg-6">
                      <input required type="text" name="phone" placeholder="Phone*" />
                    </div>
                    <div className="col-lg-6">
                      <input required type="email" name="email" placeholder="Email*" />
                    </div>
                    <div className="col-lg-12">
                      <textarea name="msg" required placeholder="Message"></textarea>
                    </div>
                    <div className="col-lg-12">
                      <input type="checkbox" required id="agrmt" name="agreement" value="i agree"></input>
                      <label> "I agree that my submitted data is being collected and stored."</label>
                    </div>
                    <div className="col-lg-12 text-center recaptcha">  <div data-netlify-recaptcha="true"></div>
                    </div>
                    <div className="col-lg-12 text-center">
                      <button type="submit" className="cr-btn cr-btn-sm form-button contact-page-form-button remove-cap b-t-btn" href="#">Send a Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>


      </div>

    );
  }
}

export default ContactForm;
*/