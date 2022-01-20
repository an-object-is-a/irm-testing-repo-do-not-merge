import React from 'react';
import { Link } from 'gatsby';
import Slide from 'react-reveal/Zoom';

import servimg1 from '../images/svg/services-1.webp';
import servimg2 from '../images/svg/services-2.webp';
import img12 from '../images/svg/services-12.webp';

const HomepageBox7 = () => (
  <div className="light-blue-background pt-5 mb-5">
    <section className="we-offer-sec">
      <div className="auto-container">
        <div className="row">
          <div className="col-md-12">
            <div className="sec-title blue-title">
              <p>What We Do</p>
              <h2>Services We Offer</h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Slide left duration={1500}>
              <div className="we-offer-block">
                <div className="icon-area">
                  <img width="271px" height="164px" src={servimg1} alt="IRM Consulting & Advisory" title="IRM Consulting & Advisory" />
                </div>
                <div className="text-box">
                  <h4>Virtual CISO Services <br />(vCISO)</h4>
                  <p>Build and Run your entire Cybersecurity Program with our vCISO Services.</p>
                  <Link to="/virtual-ciso-services-vciso" className="theme-btn btn-style-one">
                    Learn More</Link>
                </div>
              </div>
            </Slide>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="we-offer-block">
              <div className="icon-area">
                <img width="193px" height="128px" src={img12} alt="IRM Consulting & Advisory" title="IRM Consulting & Advisory" />
              </div>
              <div className="text-box">
                <h4>Cybersecurity Training &amp; <br /> Awareness <br />(CTA)</h4>
                <p>Leverage solutions to integrate Cybersecurity Awareness and Training into the People, Culture and Business Processes of your organization </p>
                <Link to="/cybersecurity-training-awareness" className="theme-btn btn-style-one">
                  Learn More</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Slide right duration={1500}>
              <div className="we-offer-block">
                <div className="icon-area">
                  <img width="163px" height="164px" src={servimg2} alt="IRM Consulting & Advisory" title="IRM Consulting & Advisory" />
                </div>
                <div className="text-box">
                  <h4>Data Security & Privacy <br /> (DSP)</h4>
                  <p>Protect the Privacy and Security of your organization and customer data. Prevent and detect Data Breaches and unauthorized disclosure of sensitive.</p>
                  <Link to="/data-security-privacy-dsp" className="theme-btn btn-style-one">
                    Learn More</Link>
                </div>
              </div>
            </Slide>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default HomepageBox7;
