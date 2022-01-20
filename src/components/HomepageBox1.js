import React from 'react';
import { Link } from 'gatsby';
import Slide from 'react-reveal/Slide';

import hmbox1 from '../images/svg/1.webp';
import hmbox2 from '../images/svg/2.webp';
import hmbox3 from '../images/svg/3.webp';
import hmbox4 from '../images/svg/4.webp';
import hmbox5 from '../images/svg/5.webp';

const HomepageBox1 = () => {
  return (
    <div>
      <Slide top duration={1500}>
        <section className="services-sec">
          <div className="auto-container">
            <div className="row">
              <div className="col">
                <div className="services-bloc">
                  <div className="icon-block">
                    <Link to="/virtual-ciso-services-vciso/">
                      <img width="120px" height="75px" src={hmbox1} alt="IRM Consulting & Advisory" />
                    </Link>
                  </div>
                  <div className="text-block">
                    <Link to="/virtual-ciso-services-vciso/">
                      <h3>Virtual CISO  <br /> Services</h3>
                      <p>(vCISO)</p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="services-bloc">
                  <div className="icon-block">
                    <Link to="/data-security-privacy-dsp/">
                      <img width="75px" height="75px" src={hmbox2} alt="IRM Consulting & Advisory" />
                    </Link>
                  </div>
                  <div className="text-block">
                    <Link to="/data-security-privacy-dsp/">
                      <h3>Data Security <br /> &amp; Privacy</h3>
                      <p>(DSP)</p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="services-bloc">
                  <div className="icon-block">
                    <Link to="/governance-risk-compliance-grc/">
                      <img width="75px" height="75px" src={hmbox3} alt="IRM Consulting & Advisory" />
                    </Link>
                  </div>
                  <div className="text-block">
                    <Link to="/governance-risk-compliance-grc/">
                      <h3>Governance Risk &amp; <br /> Compliance</h3>
                      <p>(GRC)</p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="services-bloc">
                  <div className="icon-block">
                    <Link to="/threat-modeling-tm/">
                      <img width="75px" height="75px" src={hmbox4} alt="IRM Consulting & Advisory" />
                    </Link>
                  </div>
                  <div className="text-block">
                    <Link to="/threat-modeling-tm/">
                      <h3>Threat <br /> Modeling</h3>
                      <p>(TM)</p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="services-bloc">
                  <div className="icon-block">
                    <Link to="/penetration-testing-pt/">
                      <img width="85px" height="75px" src={hmbox5} alt="IRM Consulting & Advisory" />
                    </Link>
                  </div>
                  <div className="text-block">
                    <Link to="/penetration-testing-pt/">
                      <h3>Penetration <br /> Testing</h3>
                      <p>(PT)</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Slide>
    </div>
  )
}

export default HomepageBox1;