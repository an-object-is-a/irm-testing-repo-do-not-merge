import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Slide from 'react-reveal/Slide';

import aboutSec from '../images/svg/about-graph.webp';
import aboutimg from '../images/svg/about-image.webp';

const HomepageBox3 = () => {
  /*
    Getting data saved on the Wordpress page "Home Page".
  */
  const data = useStaticQuery(graphql`
    query MyQuery3 {
      allWpPage(filter: {title: {eq: "Home Page"}}) {
        edges {
          node {
            welcomeToIrmConsultingAndAdvisory {
              mainTitleSec3
              contentS3
              buttonUrlS3
              buttonTextS3
              imageS3 {
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
  `);

  return (
    <div>
      {data.allWpPage.edges.map(({ node }, index) => (
        <section className="about-sec first" key={index}>
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 p-0">
                <Slide left duration={2000}>
                  <div className="image-block">
                    <img width="685px" height="685px" src={aboutimg} alt="IRM Consulting & Advisory" title="IRM Consulting & Advisory" />
                  </div>
                </Slide>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <Slide right duration={2000}>
                  <div className="about-text-block">
                    <div className="icon-area">
                      <img src={aboutSec} alt="IRM Consulting & Advisory" title="IRM Consulting & Advisory" />
                    </div>
                    <h2>Welcome To <br />
                      IRM Consulting & Advisory
                    </h2>
                    <div>
                      <p>IRM Consulting & Advisory is a boutique Cybersecurity Consulting and Advisory firm obsessed with implementing security best practices to create a competitive advantage for SaaS Companies. We solve Cybersecurity and Information Risk problems for your SaaS Business. We take a consultative approach to every client engagement, and find actionable solutions that will help mitigate Threats and Risks to your Customer and Organization Information Assets.</p>
                      <p>We help you use Security to achieve a Competitive Advantage and Manage Risk for the best Business outcomes. We know the importance of security to your business, customers and partners. We will help, enable and support you to achieve the level of security protection required for your Business and Customers.</p>
                    </div>
                    <Link to={node.welcomeToIrmConsultingAndAdvisory.buttonUrlS3} className="theme-btn btn-style-one">
                      {node.welcomeToIrmConsultingAndAdvisory.buttonTextS3}</Link>
                    <span>+1-647-800-2590</span>
                  </div>
                </Slide>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}

export default HomepageBox3;