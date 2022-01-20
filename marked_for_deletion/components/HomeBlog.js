/*
import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
const HomeBlog = () => (
  <StaticQuery
    query={graphql`
        query HomeBlog {
  allWpPage(filter: {title: {in: "Home Page"}}) {
    edges {
      node {
        acf {
            title_sec7
            sub_title_sec7
            content_sec7
            button_text_sec7
            buton_text_url_sec7
            image_sec7 {
            localFile {
              childImageSharp {
                fluid(maxWidth:650, maxHeight:640, quality: 100) {
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


          `}

    render={data => (
      <div>
        {data.allWpPage.edges.map(({ node }) => (
          <div className="blog">
            ksdkasl
          </div>
        ))}
      </div>
    )}
  />

);

export default HomeBlog;
*/