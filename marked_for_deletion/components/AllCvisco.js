/*
import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';

const Cvisco = () => (
  <StaticQuery
    query={graphql`
        query Cvisco  {
                allWpPage(filter: {title: {in: "vCISO"}}) {
                  edges {
                    node {
                      acf {

                        banner_heading_vciso
                        banner_subtext_vciso
                        content_vciso
                        button_text
                        button_link
                        banner_vcisco_background {
                          localFile {
                            childImageSharp {
                              fixed(width: 1940, height:400, quality: 100) {
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
          `}
    render={data => (
      <div>
        {data.allWpPage.edges.map(({ node }) => (
          <div className="allcvisco">
            <section style={{ background: `url(${node.acf.banner_vcisco_background.localFile.childImageSharp.fixed.srcWebp}), rgba(0,0,0,.3)` }} className="container-fluid why-us vciso-banner">
              <div className="container">
                <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-12 offset-0">
                    <div className="section-title text-center m-0">
                      <h2 className="text-light">{node.acf.banner_heading_vciso}</h2>
                      <p>{node.acf.banner_subtext_vciso}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="container">
                <div className="row">
                  <div className="col-md-12 pt-5 vciso-content-col">
                    <div dangerouslySetInnerHTML={{
                      __html: (node.acf.content_vciso)
                    }} />
                    <button className="cr-btn cr-btn-sm b-t-btn">
                      <span><Link to="/cybersecurity-consulting-appointments">{node.acf.button_text}</Link></span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ))}

      </div>
    )}
  />

);

export default Cvisco;
*/