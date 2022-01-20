/*
import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

const AllPtSections = () => (
  <StaticQuery
    query={graphql`
        query AllPtSections  {
          allWpPage(filter: {title: {in: "Penetration Testing"}}) {
            edges {
              node {
                acf {
                  why_pen_testing_pt
                  our_services_pt
                  banner_subtext_pt
                  banner_heading_pt
                  banner_background_pt {
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
            <section style={{ background: `url(${node.acf.banner_background_pt.localFile.childImageSharp.fixed.srcWebp}), rgba(0,0,0,.3)` }} className="container-fluid why-us vciso-banner pt-banner">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12 col-lg-10  col-12 mx-auto">
                    <div className="section-title text-center m-0">
                      <h2 className="text-light">{node.acf.banner_heading_pt}</h2>
                      <p>{node.acf.banner_subtext_pt}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="container pt-5 csc-sec-2 pt-sec-2">
                <div className="row">
                  <div className="col-md-12 pt-5">
                    <h2 className="color-blue">Cybersecurity – Penetration Testing Service</h2>
                  </div>
                  <div className="col-md-12">
                    <h3 className="color-blue icon-8-bg">What Is Pen Testing and Why is it Important?</h3>
                    <div dangerouslySetInnerHTML={{
                      __html: (node.acf.why_pen_testing_pt)
                    }} />
                  </div>
                </div>
              </div>
              <div className="container tm-inner-section-2">
                <h2 className="color-blue">Our Services</h2>
                <div className="row">
                  <div className="col-md-12">
                    <div dangerouslySetInnerHTML={{
                      __html: (node.acf.our_services_pt)
                    }} />
                  </div>
                </div>
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

export default AllPtSections;
*/