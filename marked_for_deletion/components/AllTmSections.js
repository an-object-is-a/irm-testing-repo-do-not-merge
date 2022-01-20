/*
import React from 'react';

import { graphql, StaticQuery } from 'gatsby';

const AllTmSections = () => (
  <StaticQuery
    query={graphql`
        query AllTmSections  {
          allWpPage(filter: {title: {in: "Threat Modeling"}}) {
            edges {
              node {
                acf {
                  threat_modeling_list_tm
                  second_text_section_tm
                  our_service_tm
                  body_first_text_tm
                  body_first_heading_tm
                  banner_subtext_tm
                  banner_heading_tm
                  banner_background_tm {
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
            <section style={{ background: `url(${node.acf.banner_background_tm.localFile.childImageSharp.fixed.srcWebp}), rgba(0,0,0,.3)` }} className="container-fluid why-us vciso-banner tm-banner">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12  col-lg-10  col-12 mx-auto">
                    <div className="section-title text-center m-0">
                      <h2 className="text-light">{node.acf.banner_heading_tm}</h2>
                      <p>{node.acf.banner_subtext_tm}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="container pt-5 csc-sec-2">
                <div className="row">
                  <div className="col-md-12 pt-5">
                    <h2 className="color-blue">{node.acf.banner_heading_tm}</h2>
                  </div>
                  <div className="col-md-12">
                    <div dangerouslySetInnerHTML={{
                      __html: (node.acf.body_first_text_tm)
                    }} />


                  </div>
                </div>
              </div>
              <div className="container tm-inner-section">
                <div dangerouslySetInnerHTML={{
                  __html: (node.acf.threat_modeling_list_tm)
                }} />
                <div dangerouslySetInnerHTML={{
                  __html: (node.acf.second_text_section_tm)
                }} />
              </div>
              <div className="container tm-inner-section-2">
                <h2 className="color-blue">Our Services</h2>
                <div dangerouslySetInnerHTML={{
                  __html: (node.acf.our_service_tm)
                }} />
                <a href="/cybersecurity-consulting-appointments" className="cr-btn cr-btn-sm  b-t-btn">
                  <span>Learn More</span>
                </a>
              </div>
            </section>
          </div>
        ))}
      </div>
    )}
  />

);

export default AllTmSections;
*/