/*
import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

const AllSaSections = () => (
  <StaticQuery
    query={graphql`
        query AllSaSections  {
          allWpPage(filter: {title: {in: "Security Architecture"}}) {
            edges {
              node {
                acf {
                  second_section_sa
                  first_section_sa
                  banner_subtext_sa
                  banner_heading_sa
                  banner_background_sa {
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
            <section style={{ background: `url(${node.acf.banner_background_sa.localFile.childImageSharp.fixed.srcWebp}), rgba(0,0,0,.3)` }} className="container-fluid why-us vciso-banner sa-banner sa-page-title">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12 col-lg-10  col-12 mx-auto">
                    <div className="section-title text-center m-0">
                      <h2 className="text-light">{node.acf.banner_heading_sa}</h2>
                      <p>{node.acf.banner_subtext_sa}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="sa-page-content">
              <div className="container pt-5 csc-sec-2 pt-sec-2 sa-sec-2">
                <div className="row">
                  <div className="col-md-12 pt-5">
                    <div dangerouslySetInnerHTML={{
                      __html: (node.acf.first_section_sa)
                    }} />
                  </div>
                  <div className="col-md-12">
                    <div dangerouslySetInnerHTML={{
                      __html: (node.acf.second_section_sa)
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

export default AllSaSections;
*/