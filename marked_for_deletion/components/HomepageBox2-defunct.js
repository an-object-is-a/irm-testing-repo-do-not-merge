/*
import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Link } from "gatsby"

const HomepageBox2 = () => (
  <StaticQuery
    query={graphql`
        query MyQuery1 {
  allWpPage(filter: {title: {in: "Home Page"}}) {
    edges {
      node {
        acf {
          icon_services {
            title
            span
            link
            icon {
              localFile {
                childImageSharp {
                  fluid(quality: 100) {
                      srcWebp
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


        <section className="services-area service-top">
          <div className="container-fluid">
            {data.allWpPage.edges.map(({ node }) => (
              <div className="row justify-content-center">
                {node.acf.icon_services.map((icon_servic) => (
                  <div className="col-lg-2 col-md-6 col-12">
                    <div className="service service-style-2 text-center bg-white">
                      <div className="service-icon">
                        <span>
                          <Link to={icon_servic.link}>
                            <img src={icon_servic.icon.localFile.childImageSharp.fluid.srcWebp} alt="IRM Consulting & Advisory" title="IRM Consulting & Advisory" /></Link>
                        </span>
                      </div>
                      <div className="service-content">
                        <Link to={icon_servic.link}>
                          <h4>{icon_servic.title}</h4>
                        </Link>
                        <span className="w-100">{icon_servic.span}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

      </div>
    )}
  />

);

export default HomepageBox2;
*/