import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Slide from 'react-reveal/Slide';

import missionSec from '../images/svg/about-graph.webp';
import missionimage from '../images/svg/mission-image.webp';

const HomepageBox4 = () => {
  /*
    Getting data saved on the Wordpress page "Home Page".
  */
  const data = useStaticQuery(graphql`
    query MyQuery4 {
      allWpPage(filter: {title: {eq: "Home Page"}}) {
        edges {
          node {
            title
            ourMission {
              missionHeading
              missionContent
              missionImage {
                localFile {
                  childImageSharp {
                    fluid {
                      srcWebp
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
    <section className="about-sec style-two">
      <div className="auto-container">
        {data.allWpPage.edges.map(({ node }, index) => (
          <div className="row" key={index}>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <Slide left duration={1500}>
                <div className="about-text-block">
                  <div className="icon-area">
                    <img src={missionSec} alt="IRM Consulting & Advisory" title="IRM Consulting & Advisory" />
                  </div>
                  <h2>{node.ourMission.missionHeading}</h2>
                  <div dangerouslySetInnerHTML={{ __html: (node.ourMission.missionContent) }} />
                </div>
              </Slide>
            </div>
            <Slide right duration={1500}>
              <div className="col-lg-6 col-md-12 col-sm-12 p-0">
                <div className="image-block">
                  <img width="685px" height="685px" src={missionimage} alt="IRM Consulting & Advisory" title="IRM Consulting & Advisory" />
                </div>
              </div>
            </Slide>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HomepageBox4;