/*
import React from 'react';

import { graphql, StaticQuery } from 'gatsby';


const DsoSections = () => (
  <StaticQuery
    query={graphql`
        query DsoSections  {
      allWpPage(filter: {title: {in: "Dev Sec Ops"}}) {
        edges {
          node {
            acf {
              second_box_dso
              why_dso_body
              third_box_dso
              fourth_box_dso
              first_box_dso
              fifth_box_dso
              body_text_dso
              banner_heading_dso
              banner_subtext_dso
              banner_background_dso {
                localFile {
                  childImageSharp {
                    fixed(width: 1940, height:400, quality: 100) {
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
            <section className="container-fluid why-us csc-content dso-banner">
              <div className="container">
                <div className="row">
                  <div className="col-xl-10 col-lg-10 col-12 offset-md-1">
                    <div className="section-title text-center m-0">
                      <h2 className="text-light">{node.acf.banner_heading_dso}</h2>
                      <p>{node.acf.banner_subtext_dso}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="container pt-5 csc-sec-2">
                <div className="row">
                  <div className="col-md-12">
                    <h3 className="color-blue dso-h3">Why DevSecOps?</h3>
                    <div dangerouslySetInnerHTML={{
                      __html: (node.acf.why_dso_body)
                    }} />
                    <div className="row cards-blue">
                      <div className="col-md-10 mx-auto">
                        <div className="row">
                          <div className="col-md-6 icon-1">
                            <p dangerouslySetInnerHTML={{
                              __html: (node.acf.first_box_dso)
                            }} />
                          </div>
                          <div className="col-md-6 icon-2">
                            <p dangerouslySetInnerHTML={{
                              __html: (node.acf.second_box_dso)
                            }} />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 icon-3">
                            <p dangerouslySetInnerHTML={{
                              __html: (node.acf.third_box_dso)
                            }} />
                          </div>
                          <div className="col-md-6 icon-4">
                            <p dangerouslySetInnerHTML={{
                              __html: (node.acf.fourth_box_dso)
                            }} />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mx-auto icon-5">
                            <p dangerouslySetInnerHTML={{
                              __html: (node.acf.fifth_box_dso)
                            }} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div dangerouslySetInnerHTML={{
                          __html: (node.acf.body_text_dso)
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