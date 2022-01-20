/*
import React from 'react';

import { graphql, StaticQuery } from 'gatsby';

const AllGrcSections = () => (
  <StaticQuery
    query={graphql`
        query AllGrcSections  {
            allWpPage(filter: {title: {in: "Governance Risk"}}) {
              edges {
                node {
                  acf {
                    banner_subtext_grc
                    banner_heading_grc
                    body_text_grc
                    banner_background_grc {
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
          <div>

            <section style={{ background: `url(${node.acf.banner_background_grc.localFile.childImageSharp.fixed.srcWebp}), rgba(0,0,0,.3)` }} className="container-fluid why-us vciso-banner grc-banner grc-page-title">
              <div className="container">
                <div className="row">
                  <div className="col-12  col-lg-10  col-12 mx-auto">
                    <div className="section-title text-center m-0">
                      <h2 className="text-light">{node.acf.banner_heading_grc}</h2>
                      <p>{node.acf.banner_subtext_grc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="container pt-5 csc-sec-2 pt-sec-2 grc-sec-2">
                <div className="row">
                  <div className="col-md-12">

                  </div>
                  <div className="col-md-12">
                    <div dangerouslySetInnerHTML={{
                      __html: (node.acf.body_text_grc)
                    }} />
                    <a href="/cybersecurity-consulting-appointments" className="cr-btn cr-btn-sm  b-t-btn">
                      <span>Learn More</span>
                    </a>
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

export default AllGrcSections;
*/