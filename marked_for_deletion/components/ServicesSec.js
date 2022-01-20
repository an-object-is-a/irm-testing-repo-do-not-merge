/*
import React from 'react';
const ServicesSec = () => (
  <StaticQuery
    query={MyQuerySS`
        query MyQuerySS {
  allWpPage(filter: {title: {in: "Home Page"}}) {
    edges {
      node {
        acf {
          icon_services {
            title
            span
            link
            icon {
              localFile {
                childImageSharp {
                  fluid(quality: 100) {
                      srcWebp
                    ...GatsbyImageSharpFluid
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


          `}

    render={data => (
      <div>

        <section className="services-sec">
          <div className="auto-container">
            <div className="row">
              <div className="col">
                <div className="services-bloc">
                  <div className="icon-block">
                    <img src="images/icons/icon-1.png" alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" />
                  </div>
                  <div className="text-block">
                    <h3>Virtual CISO  <br />  Services</h3>
                    <p>(vCISO)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    )}
  />

);

export default ServicesSec;
*/