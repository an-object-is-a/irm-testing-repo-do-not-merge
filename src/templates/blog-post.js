import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import loadable from "@loadable/component";

import homepagebanner1 from '../images/banners/blog.webp';
import Layout from "../components/Layout";

const Logos = loadable(() => import('../components/Logos'));
const BlogSuggest = loadable(() => import('../components/Blogsuggest'));

/*
  @param  {object}  data - one single blog post fetched using the query at the end of this file
  @return {React function}  n/a - returns a complete blog page

  This file is used as a Gatsby template. It's used to dynamically auto-generate blog pages based on
  calls from 'gatsby-node.j'.
*/
const BlogPost = ({ data }) => {
  const post = data.allWpPost.edges[0].node;

  return (
    <Layout pageTitle={post.title}>
      <Helmet>
        <meta name="description" content={post.allBlog.metaDescription} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="IRM Consulting &amp; Advisory" />
        <meta property="article:publisher" content="https://www.facebook.com/irmcon" />
        <meta property="article:modified_time" content="2021-01-11T10:52:43+00:00" />
        <meta property="og:image:width" content="1824" />
        <meta property="og:image:height" content="596" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://elated-swanson-224ee1.netlify.app/blog/${post.slug}/`} />
        <meta property="og:title" content="IRM Consulting & Advisory - Cybersecurity Consulting for your SaaS Business" />
        <meta property="og:description" content={post.allBlog.metaDescription} />
        <meta property="og:image" content="https://xgw.394.myftpupload.com/wp-content/uploads/2021/10/irm-logo-social-scaled.jpg" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content="IRM Consulting & Advisory - Cybersecurity Consulting for your SaaS Business" />
        <meta property="twitter:description" content={post.allBlog.metaDescription} />
        <meta property="twitter:image" content="https://xgw.394.myftpupload.com/wp-content/uploads/2021/10/irm-logo-social-scaled.jpg" />
        <meta property="twitter:site" content="IRM Consulting & Advisory" />
        <link rel="canonical" href={`https://elated-swanson-224ee1.netlify.app/blog/${post.slug}/`} />
      </Helmet>

      <section className="page-title-sec blog-inner-page-title" style={{ background: `url(${homepagebanner1})` }}>
        <div className="auto-container">
          <div className="row">
            <div className="col-md-12">
              <div className="content-box">
                <h1>{post.title}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-details-sec">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </section>
      <div className="bbb-single mt-0">
        <BlogSuggest />
      </div>
      <div className="container bbb-single mt-0">
        <div className="row">
          <div className="col-lg-12">
            <div>
              <Logos />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

/*
  Getting the Wordpress blog post associated with the '$slug' passed in through the 'gatsby-node.js' file.
*/
export const query = graphql`
  query ($slug: String!) {
    allWpPost(filter: {slug: {eq: $slug}}) {
      edges {
        node {
          id
          title
          slug
          content
          excerpt
          allBlog {
            metaDescription
          }
          featuredImage {
            node {
              sourceUrl
              localFile {
                childImageSharp {
                  fixed(width: 1000, height: 400, quality: 100) {
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
`

export default BlogPost;