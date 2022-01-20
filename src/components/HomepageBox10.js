import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import testmonial from '../images/svg/testimonials.svg';
import client from './images/client.webp';
import jinee from './images/jineee.webp';
import mike from "./images/mikee.webp";

const HomepageBox10 = () => (
  <div className="">
    <section className="testmonial-sec">
      <div className="auto-container">
        <div className="row">
          <div className="col-md-12">
            <div className="sec-title left-style">
              <p>Testimonials</p>
              <h2>What Our Clients Say</h2>
            </div>
          </div>
          <Carousel interval={8000} autoPlay={true} infiniteLoop={true} showArrows={false} dynamicHeight={false}>
            <div>
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="testmonial-block light-pink-background">
                    <h4>“The right Services for our Business”</h4>
                    <p>We were impressed with the quality and level of Service and advice we received to help us build our DevSecOps process and Cybersecurity Program. Highly recommended !!</p>
                    <div className="client-info">
                      <div className="icon-area">
                        <img className="test1" width="35px" height="35px" src={client} alt="IRM Consulting & Advisory" title="IRM Consulting & Advisory" />
                      </div>
                      <div className="text-block">
                        <h6>ANNA CLARKSON</h6>
                        <p>Client</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="testmonial-block light-yellow-background">
                    <h4>“Expert Cybersecurity Advice”</h4>
                    <p>We were able to quickly win new business with the excellent Risk Assessments and Cybersecurity Solutions that provided assurance to our clients.</p>
                    <div className="client-info">
                      <div className="icon-area">
                        <img src={testmonial} width="35px" height="35px" alt="IRM Consulting & Advisory" title="IRM Consulting & Advisory" />
                      </div>
                      <div className="text-block">
                        <h6>DAVID KENNEDY</h6>
                        <p>Client</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="testmonial-block light-green-background">
                    <h4>“We rely on their Trusted Advisors”</h4>
                    <p>Our Cybersecurity concerns and requirements are always addressed with the right solutions. We have seen an improvement in the maturity of our security controls.</p>
                    <div className="client-info">
                      <div className="icon-area">
                        <img src={mike} className="test1" width="35px" height="35px" alt="IRM Consulting & Advisory" title="IRM Consulting & Advisory" />
                      </div>
                      <div className="text-block">
                        <h6>MIKE ROBERTSON</h6>
                        <p>Client</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="testmonial-block light-purple-background">
                    <h4>“We achieved our SOC2 Readiness”</h4>
                    <p>The help and advice we received as a small business accelerated our SOC2 Certification Readiness in a short space of time. We are very happy with the Service we received.</p>
                    <div className="client-info">
                      <div className="icon-area">
                        <img className="test1" src={jinee} width="35px" height="35px" alt="IRM Consulting & Advisory" title="IRM Consulting & Advisory" />
                      </div>
                      <div className="text-block">
                        <h6>JENNIFER LAWSON</h6>
                        <p>Client</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  </div>
);

export default HomepageBox10;