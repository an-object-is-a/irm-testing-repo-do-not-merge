/*
import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';

const AllDsp = () => (
  <StaticQuery
    query={graphql`
        query AllDsp  {
  allWpPage(filter: {title: {in: "Dsp"}}) {
    edges {
      node {
        acf {
          banner_heading_dsp
          banner_subtext_dsp
          body_text_dsp
          button_link_dsp
          banner_background_dsp {
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
            <section style={{ background: `url(${node.acf.banner_background_dsp.localFile.childImageSharp.fixed.srcWebp}), rgba(0,0,0,.3)` }} className="container-fluid why-us">
              <div className="container">
                <div className="row">
                  <div className="col-xl-10  col-lg-10  col-12 offset-1">
                    <div className="section-title text-center m-0">
                      <h2 className="text-light">{node.acf.banner_heading_dsp}</h2>
                      <p>{node.acf.banner_subtext_dsp}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="container">
                <div className="row">
                  <div className="col-md-12 pt-5 vciso-content-col dsp-content new-dsp-content">
                    <div dangerouslySetInnerHTML={{
                      __html: (node.acf.body_text_dsp)
                    }} />
                    <button className="cr-btn cr-btn-sm  b-t-btn">
                      <span><Link to="/cybersecurity-consulting-appointments">Learn More</Link></span>
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

export default AllDsp;
*/