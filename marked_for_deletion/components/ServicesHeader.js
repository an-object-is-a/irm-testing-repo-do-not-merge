/*
import React from 'react';

import { graphql, StaticQuery } from 'gatsby';

const ServicesHeader = () => (
  <StaticQuery
    query={graphql`
        query ServicesHeader {
  allWpPage(filter: {title: {in: "Services"}}) {
    edges {
      node {
        acf {
          heading_services_subtext
          services_background_banner {
            localFile {
              childImageSharp {
                fixed(width:1450, height:350, quality:100) {
                  srcWebp
                  src
                }
              }
            }
          }
          services_banner_heading

        }
      }
    }
  }
}

  `}

    render={data => (
      <div>
        {data.allWpPage.edges.map(({ node }) => (
          <section style={{ background: `url(${node.acf.services_background_banner.localFile.childImageSharp.fixed.srcWebp}), rgba(0,0,0,.3)` }} className="container-fluid contact-us-1 services-banner">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-12 offset-0">
                  <div className="section-title text-center m-0">
                    <h2 className="text-light">{node.acf.services_banner_heading}</h2>
                    <p>{node.acf.heading_services_subtext}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}


      </div>
    )}
  />

);

export default ServicesHeader;
*/