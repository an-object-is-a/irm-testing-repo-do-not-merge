/*
import React from 'react';

import { Link, graphql, StaticQuery } from 'gatsby';

const HomeSemiFeaturedPost = () => (
  <StaticQuery
    query={graphql`
        query HomeSemiFeaturedPost {
  allWpPost(limit: 1, filter: {categories: {elemMatch: {name: {eq: "blog"}}}},  skip: 1 ) {
    edges {
      node {
        title
        slug
        excerpt
        featured_media {
          source_url
          localFile {
            childImageSharp {
              fixed(width: 300, height:300, quality: 100) {
                srcWebp
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

        {data.allWpPost.edges.map(({ node }) => (

          <div className="blog">
            <div className="row">
              <div className="col-xl-4 col-lg-4">
                <div className="icons">
                  <Link to={`/cybersecurity-consulting-Blogs/${node.slug}`}>
                    <img className="semi-image" src={node.featured_media.localFile.childImageSharp.fixed.srcWebp} alt="IRM Consulting & Advisory" title="IRM Consulting & Advisory" /></Link>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8">
                <h3>
                  <Link to={`/cybersecurity-consulting-Blogs/${node.slug}`}>
                    {node.title}</Link>
                </h3>
                <div className="content">
                </div>
              </div>
            </div>
          </div>




        ))}



      </div>
    )}
  />

);

export default HomeSemiFeaturedPost;
*/