import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

const FooterBlog = () => {
  /*
    Getting 4 Wordpress blog posts with the 'category' of "blog".
  */
  const data = useStaticQuery(graphql`
    query FooterBlog {
      allWpPost(
        limit: 4
        filter: {categories: {nodes: {elemMatch: {name: {eq: "blog"}}}}}
      ) {
        edges {
          node {
            title
            slug
            excerpt
            featuredImage {
              node {
                sourceUrl
                localFile {
                  childImageSharp {
                    fixed(width: 200, height: 200, quality: 100) {
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
    <div className="">
      <div className="single-widget widget-quick-links footer-widget">
        <h2 className="widget-title">Latest News</h2>
        <div className="footer-blog">
          <ul>
            {data.allWpPost.edges.map(({ node }, index) => (
              <li className="pb-100" key={index}>
                <div className="img">
                  <Link to={`/blog/${node.slug}`}>
                    <img width="50px" height="50px" src={node.featuredImage.node.localFile.childImageSharp.fixed.srcWebp} title="cyber security service" alt="cyber security service" /></Link>
                </div>
                <h3>
                  <Link to={`/blog/${node.slug}`}>
                    {node.title}</Link>
                </h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FooterBlog;