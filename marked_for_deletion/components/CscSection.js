/*
import React from 'react';

import { graphql, StaticQuery } from 'gatsby';


const DsoSections = () => (
  <StaticQuery
    query={graphql`
        query CscSection  {
  allWpPage(filter: {title: {in: "Cloud Security Control"}}) {
    edges {
      node {
        acf {
          third_box_csc
          services_body_csc
          second_box_csc
          risks_and_challenges_csc
          first_box_csc
          banner_subtext_csc
          banner_heading_csc
          banner_background_csc {
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
            <section style={{ background: `url(${node.acf.banner_background_csc.localFile.childImageSharp.fixed.srcWebp}), rgba(0,0,0,.3)` }} className="container-fluid why-us csc-content title-csc-content ">
              <div className="container">
                <div className="row">
                  <div className="col-xl-10 col-lg-10 col-12 offset-md-1">
                    <div className="section-title text-center m-0">
                      <h2 className="text-light">{node.acf.banner_heading_csc}</h2>
                      <p>{node.acf.banner_subtext_csc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="container pt-5 csc-sec-2 all-csc-p">
                <div className="row">
                  <div className="col-md-12 pt-5">
                    <h2 className="color-blue">Cloud Security Controls for SaaS Providers</h2>
                  </div>
                  <div className="col-md-12">
                    <h3 className="color-blue">Risks and Challenges</h3>
                    <div dangerouslySetInnerHTML={{
                      __html: (node.acf.risks_and_challenges_csc)
                    }} />
                    <h3 className="color-blue">Why Are Cloud Security Controls Important?</h3>
                    <div className="row">
                      <div className="col-md-8">
                        <div dangerouslySetInnerHTML={{
                          __html: (node.acf.first_box_csc)
                        }} />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-8 ml-auto">
                        <div dangerouslySetInnerHTML={{
                          __html: (node.acf.second_box_csc)
                        }} />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-8">
                        <div dangerouslySetInnerHTML={{
                          __html: (node.acf.third_box_csc)
                        }} />
                      </div>
                    </div>
                    <div className="csc-sec-2">
                      <h2 className="color-blue">Our Services</h2>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div dangerouslySetInnerHTML={{
                          __html: (node.acf.services_body_csc)
                        }} />
                        <a href="/cybersecurity-consulting-appointments" className="cr-btn cr-btn-sm  b-t-btn">
                          <span>Learn More</span>
                        </a>
                      </div>
                    </div>
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

export default DsoSections;
*/