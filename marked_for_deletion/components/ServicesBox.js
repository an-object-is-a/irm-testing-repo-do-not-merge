/*
import React from 'react';
import { Link } from "gatsby"
import { graphql, StaticQuery } from 'gatsby';

const ServicesBox = () => (
  <StaticQuery
    query={graphql`
        query ServicesBox {
  allWpPage(filter: {title: {in: "Services"}}) {
    edges {
      node {
        acf {
          services_text_below_banner
          all_services {
            button_text_allservice
            button_url_allservice
            content_allservice
            title_allservice
            icon_allservice {
              localFile {
                childImageSharp {
                  fixed(quality: 100) {
                      srcWebp 
                      src
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
        {data.allWpPage.edges.map(({ node }) => (

          <section className="services-area main-services section-padding-xs bg-grey">
            <div className="container pt-2">
              <div className="row">
                <div className=" col-lg-12  col-12  col-md-12">
                  <div className="section-title text-center mb-0">
                    <h2 className="color-blue font-28">{node.acf.services_text_below_banner}</h2>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                {node.acf.all_services.map((all_service) => (
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="service service-style-2 text-center">
                      <div className="service-icon">
                        <span> <img src={all_service.icon_allservice.localFile.childImageSharp.fixed.srcWebp} alt="cybersecurity solutions" /> </span>
                        <span> <img src={all_service.icon_allservice.localFile.childImageSharp.fixed.srcWebp} alt="cybersecurity solutions" /> </span>
                      </div>
                      <div className="service-content">
                        <h4 dangerouslySetInnerHTML={{
                          __html: (all_service.title_allservice)
                        }} />
                        <p>{all_service.content_allservice}</p>
                        <Link to={all_service.button_url_allservice}>
                          <button className="cr-btn cr-btn-sm b-t-btn">
                            <span>{all_service.button_text_allservice}</span>
                          </button></Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

        ))}
      </div>


    )}
  />

);

export default ServicesBox;
*/