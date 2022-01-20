import React from 'react';
import Zoom from 'react-reveal/Zoom';

const HomepageBox2 = () => {
  return (
    <div className="light-blue-background">
      <section className="services-area section-padding-top-xs section-padding-bottom-lg">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-12 offset-0">
              <Zoom top duration={1500}>
                <div className="section-title text-center m-0">
                  <h6 className="sb-heading">Welcome to our Company</h6>
                  <h2>Your Trusted Advisor To Build Secure Products &amp; Services</h2>
                  <div className="homepageo1-text">
                    <p>With over 25 years of Technology Engineering, Information Security, Technology &amp; Operational Risk Management expertise, we have grown to become a Boutique
                      Cybersecurity &amp; Risk Management Consulting and Advisory Team obsessed
                      with implementing security best practices to protect and create a
                      competitive advantage for SaaS Companies.
                    </p>
                    <p> We provide Solutions to solve your Cybersecurity challenges, help you achieve Industry Standard
                      Certifications that creates a Competitive Advantage and provide Assurance to your Customers.
                    </p>
                  </div>
                </div>
              </Zoom>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomepageBox2;