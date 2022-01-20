import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

const FeaturedPostHome = () => {
  /*
    Getting 3 Wordpress blog posts with the 'category' of "blog".
  */
  const data = useStaticQuery(graphql`
    query FeaturedPostHome {
      allWpPost(
        limit: 3
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
                    fixed(width: 300, height: 200, quality: 100) {
                      src
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
    <div className="light-blue-background">
      <section className="blog-sec">
        <div className="auto-container">
          <div className="row">
            <div className="col-md-12">
              <div className="sec-title left-style text-left">
                <p>Our Blogs </p>
                <h2>Read Our Latest Articles, <br /> Tips & News</h2>
              </div>
            </div>
            {data.allWpPost.edges.map(({ node }, index) => (
              <div className="col-lg-4 col-md-6 col-sm-12 blog-card" key={index}>
                <div className="blog-block">
                  <div className="image-box position-relative">
                    <Link to={`/blog/${node.slug}`}>
                      <img className="blog-card-image" width="340px" height="227px" src={node.featuredImage.node.localFile.childImageSharp.fixed.srcWebp} alt="IRM Consulting & Advisory" />
                      <div className="position-relative">
                        <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                          <svg viewBox="0 0 2150 480" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z" fill="#fff"></path></svg>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="text-box pb-4 px-3">
                    <h5><Link to={`/blog/${node.slug}`}>{node.title}</Link></h5>
                    <h5>by IRM Consulting & Advisory</h5>
                    <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                    <Link to={`/blog/${node.slug}`} className="theme-btn btn-style-one">Read More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default FeaturedPostHome;