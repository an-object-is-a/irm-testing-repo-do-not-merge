import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

const Logos = () => (
  /*
    Getting all of the logos saved on the Wordpress page "Logos".
  */
  <StaticQuery
    query={graphql`
      query MyQuerylogo {
        allWpPage(filter: {title: {eq: "Logos"}}) {
          edges {
            node {
              allLogosPage {
                logos {
                  logo {
                    localFile {
                      childImageSharp {
                        fluid(quality: 100) {
                          src
                          srcWebp
                          originalName
                          ...GatsbyImageSharpFluid
                        }
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
        {data.allWpPage.edges.map(({ node }, index) => (
          <section className="logos section-padding-sm marquee-sec" key={index}>
            <div className="container">
              <div className="marquee">
                <div className="row">
                  {
                    node.allLogosPage.logos.map((logo_parent, index) => {
                      const { sizes } = logo_parent.logo.localFile.childImageSharp.fluid;
                      let x = sizes.split(",");

                      return (
                        <div className="col d-flex flex-column justify-content-center" key={index}>
                          <img width={x[x.length - 1]} height="100px" src={logo_parent.logo.localFile.childImageSharp.fluid.srcWebp} title="cyber security service" alt="cyber security service" />
                        </div>
                      )
                    })}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    )}
  />

);

export default Logos;