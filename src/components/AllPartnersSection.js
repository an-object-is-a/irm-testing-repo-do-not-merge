import React from 'react';

import img1 from '../images/svg/partner.webp';
import img2 from './images/1.webp';
import img3 from './images/2.webp';
import img4 from './images/3.webp';
import img5 from './images/4.png';
import img6 from './images/5.webp';
import img7 from './images/6.png';
import img8 from './images/7.webp';
import img9 from './images/apptech-logo.png';
import img10 from './images/grove-technologies.png';
import img11 from './images/heimdal-image.png';
import img12 from './images/future-feed.png';
import img13 from './images/tower-wall.png';
import sectiongbg from '../images/banners/partners.webp';

const AllPartnersSection = () => (
  <div>
    <section className="page-title-sec" style={{ backgroundImage: `url(${sectiongbg})` }}>
      <div className="auto-container">
        <div className="row">
          <div className="col-md-12">
            <div className="content-box">
              <h1>Our Partners</h1>
              <p>We work together to promote quality cybersecurity services.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="light-blue-background pt-5">
      <section className="services-detail parter-page mt-0">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="image-box">
                <img src={img1} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" />
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="detail-box">
                <h3>Our Partners</h3>
                <p>Working with and assisting our Partners provides proven, cost-effective Cybersecurity solutions and vCISO Managed Services that promotes rapid and secure Application Development and Cybersecurity Program Management.</p>
                <p>We partner to provide the right security platforms and solutions for our clients to help them prevent, detect and mitigate Cybersecurity Threats and Vulnerabilities.</p>
                <p>Our Partnership network helps small to medium size businesses reduce Cybersecurity risks at speed, provide a fast-time to market and competitive advantage with adequate security and compliance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div className="container partner-logo--page">
      <div className="row">
        <div className="col-lg-3 col-md-3 col-3 one">
          <img src={img2} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" width="150px" />
        </div>
        <div className="col-lg-3 col-md-3 col-3 tow">
          <img src={img3} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" width="150px" />
        </div>
        <div className="col-lg-3 col-md-3 col-3 three">
          <img src={img4} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" width="150px" />
        </div>
        <div className="col-lg-3 col-md-3 col-3 four">
          <img src={img5} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" width="150px" />
        </div>
        <div className="col-lg-3 col-md-3 col-3 fifth">
          <img src={img6} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" width="150px" />
        </div>
        <div className="col-lg-3 col-md-3 col-3 senth">
          <img src={img7} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" width="150px" />
        </div>
        <div className="col-lg-3 col-md-3 col-3 eight">
          <img src={img8} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" width="150px" />
        </div>
        <div className="col-lg-3 col-md-3 col-3 eight">
          <img src={img9} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" width="150px" />
        </div>
        <div className="col-lg-3 col-md-3 col-3 eight">
          <img src={img10} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" width="150px" />
        </div>
        <div className="col-lg-3 col-md-3 col-3 eight">
          <img src={img11} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" width="150px" />
        </div>
        <div className="col-lg-3 col-md-3 col-3 eight">
          <img src={img12} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" width="150px" />
        </div>
        <div className="col-lg-3 col-md-3 col-3 eight">
          <img src={img13} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" width="150px" />
        </div>
      </div>
    </div>
  </div>
);

export default AllPartnersSection;
