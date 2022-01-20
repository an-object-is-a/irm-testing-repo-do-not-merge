/*
import React from 'react';
import { Link } from "gatsby"
import { graphql, StaticQuery } from 'gatsby';

const WhyusFirst = () => (
  <StaticQuery
    query={graphql`
        query Querywhy
{
  allWpPage(filter: {title: {in: "Why Us"}}) {
    edges {
      node {
        acf {
          first_section_heading
          first_section_left_text
          first_section_bottom_text
          banner_background{
            localFile {
              childImageSharp {
                fixed(width: 1940, height:400, quality: 100) {
                srcWebp
                src
                }
              }
            }
          }
          first_section_image_right {
            localFile {
              childImageSharp {
                fixed(quality: 100) {
                  srcWebp
                ...GatsbyImageSharpFixed
                }
              }
            }
          }
          second_section_image {
            localFile {
              childImageSharp {
                fixed(quality: 100) {
                  srcWebp
                ...GatsbyImageSharpFixed
                }
              }
            }
          }
          second_section_text
          third_section_text
          third_section_image {
            localFile {
              childImageSharp {
                fixed(quality: 100) {
                  srcWebp
                ...GatsbyImageSharpFixed
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
      <div className="why-us-page">




        {data.allWpPage.edges.map(({ node }) => (
          <div>
            <section style={{ background: `url(${node.acf.banner_background.localFile.childImageSharp.fixed.srcWebp}), rgba(0,0,0,.3)` }} className="container-fluid why-us why-us-page">
              <div className="container">
                <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-12 offset-0">
                    <div className="section-title text-center m-0">
                      <h2 className="text-light">Why Us</h2>
                      <p>We offer personalized cybersecurity solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="padding-b-t">
              <div className="container pt-5 pb-4">
                <div className="row">
                  <div className="col-12 text-center">
                    <h2 className="color-blue">Cybersecurity & Risk Management – Why Us?</h2>
                  </div>
                </div>
              </div>
              <div className="container-fluid bg-gray-rounded">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <h3>{node.acf.first_section_heading}</h3>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-7">
                      <div dangerouslySetInnerHTML={{
                        __html: (node.acf.first_section_left_text)
                      }} />
                    </div>
                    <div className="col-md-5 mt-4">
                      <img src={node.acf.first_section_image_right.localFile.childImageSharp.fixed.srcWebp} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" />
                    </div>
                    <div className="col-md-12">
                      <Link to="/cybersecurity-consulting-services" className="bold-button b-t-btn" href="#">
                        Learn More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="padding-t-b bg-gray why-us-page">
              <div className="container-fluid bg-white-rounded">
                <div className="container">
                  <div className="row">
                    <div className="col-md-5 my-auto">
                      <img src={node.acf.second_section_image.localFile.childImageSharp.fixed.srcWebp} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" />
                    </div>
                    <div className="col-md-7">
                      <div dangerouslySetInnerHTML={{
                        __html: (node.acf.second_section_text)
                      }} />
                      <Link to="/cybersecurity-consulting-services" className="bold-button b-t-btn" href="#">
                        Learn More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="padding-40-40">
              <div className="container-fluid bg-gray-rounded">
                <div className="container">
                  <div className="row">
                    <div className="col-md-7">
                      <div dangerouslySetInnerHTML={{
                        __html: (node.acf.third_section_text)
                      }} />
                      <Link to="/cybersecurity-consulting-services" className="bold-button b-t-btn" href="#">
                        Learn More</Link>
                    </div>
                    <div className="col-md-5 mt-4">
                      <img src={node.acf.third_section_image.localFile.childImageSharp.fixed.srcWebp} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" />
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

export default WhyusFirst;
*/