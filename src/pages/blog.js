import React from 'react'
import { Helmet } from 'react-helmet';
import { graphql } from "gatsby"
import loadable from '@loadable/component';

import Layout from '../components/Layout';
import AllBlog from '../components/AllBlog';

const Logos = loadable(() => import('../components/Logos'));

/*
  @param  {object}  data - 30 blog posts fetched using the query at the end of this file
  @return {React function}  n/a - returns a blog page directory for the user to browse

  This page displays a general library of Wordpress blogs.
  The individual blog pages are generated from a different mechanism ('gatsby-node.js' & 'blog-post.js').
*/
export default function BlogPosts({ data }) {
  return (
    <Layout pageTitle="IRM Consulting & Advisory - Cybersecurity Consulting Blogs">
      <Helmet>
        <meta name="description" content="Welcome to IRM Consulting & Advisory Blogs" />
        <meta name="keywords" content="cybersecurity, security assurance, security best practices, security blogs, blogs" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="google-site-verification" content="7mCyYHywOZgOshvytuzwG7CdqjexkBr4tn3WykxnWxw" />
        <meta name="robots" content="index, follow" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="IRM Consulting &amp; Advisory" />
        <meta property="article:publisher" content="https://www.facebook.com/irmcon" />
        <meta property="article:modified_time" content="2021-01-11T10:52:43+00:00" />
        <meta property="og:image:width" content="1824" />
        <meta property="og:image:height" content="596" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://irmcon-staging.netlify.app/blog/" />
        <meta property="og:title" content="IRM Consulting & Advisory - Cybersecurity Consulting for your SaaS Business" />
        <meta property="og:description" content="Welcome to IRM Consulting & Advisory Blogs" />
        <meta property="og:image" content="https://xgw.394.myftpupload.com/wp-content/uploads/2021/10/irm-logo-social-scaled.jpg" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content="IRM Consulting & Advisory - Cybersecurity Consulting for your SaaS Business" />
        <meta property="twitter:description" content="Welcome to IRM Consulting & Advisory Blogs" />
        <meta property="twitter:image" content="https://xgw.394.myftpupload.com/wp-content/uploads/2021/10/irm-logo-social-scaled.jpg" />
        <meta property="twitter:site" content="IRM Consulting & Advisory" />
        <link rel="canonical" href="https://irmcon-staging.netlify.app/blog/" />
      </Helmet>
      <AllBlog parentBlogs={data} />
      <Logos />
    </Layout>
  )
}

/*
  Getting 30 Wordpress blog posts with the 'category' of "blog".
*/
export const pageQuery = graphql`
  query {
    allWpPost(
      limit: 30
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
`