/*
import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

const AllPrcSections = () => (
  <StaticQuery
    query={graphql`
        query AllPrcSections  {
          allWpPage(filter: {title: {in: "Process Risk And Controls"}}) {
            edges {
              node {
                acf {
                  body_section_prc
                  banner_subtext_prc
                  banner_heading_prc
                  banner_background_prc {
                    localFile {
                      childImageSharp {
                        fixed(width: 1940, height:400, quality: 100) {
                          src
                          srcWebp
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
      <div className="prc-page">
        {data.allWpPage.edges.map(({ node }) => (
          <div>
            <section style={{ background: `url(${node.acf.banner_background_prc.localFile.childImageSharp.fixed.srcWebp}), rgba(0,0,0,.3)` }} className="container-fluid why-us vciso-banner prc-banner ">
              <div className="container">
                <div className="row">
                  <div className="col-12  col-lg-10  col-12 mx-auto">
                    <div className="section-title text-center m-0">
                      <h2 className="text-light">{node.acf.banner_heading_prc}</h2>
                      <p>{node.acf.banner_subtext_prc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="container pt-5 csc-sec-2 pt-sec-2 grc-sec-2 prc-sec-2">
                <div className="row">
                  <div className="col-md-12">
                    <div dangerouslySetInnerHTML={{
                      __html: (node.acf.body_section_prc)
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

export default AllPrcSections;
*/