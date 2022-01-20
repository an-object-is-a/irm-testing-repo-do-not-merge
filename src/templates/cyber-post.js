import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import loadable from '@loadable/component';

import Layout from '../components/Layout';
import bgtitle from '../images/cyber-image.jpg';

const ReCAPTCHA = loadable(() => import('react-google-recaptcha'));
const Logos = loadable(() => import('../components/Logos'));
const Slide = loadable(() => import('react-reveal/Slide'));

/*
  @param  {object}  data - one single cybersecurity blog post fetched using the query at the end of this file
  @return {React function}  n/a - returns a complete cybersecurity blog page

  This file is used as a Gatsby template. It's used to dynamically auto-generate blog pages based on
  calls from 'gatsby-node.j'.
*/
const CyberPost = ({ data }) => {
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
        <meta property="og:url" content={`https://elated-swanson-224ee1.netlify.app/cybersecurity-training-awareness/${post.slug}/`} />
        <meta property="og:title" content="IRM Consulting & Advisory - Cybersecurity Consulting for your SaaS Business" />
        <meta property="og:description" content={post.allBlog.metaDescription} />
        <meta property="og:image" content="https://xgw.394.myftpupload.com/wp-content/uploads/2021/10/irm-logo-social-scaled.jpg" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content="IRM Consulting & Advisory - Cybersecurity Consulting for your SaaS Business" />
        <meta property="twitter:description" content={post.allBlog.metaDescription} />
        <meta property="twitter:image" content="https://xgw.394.myftpupload.com/wp-content/uploads/2021/10/irm-logo-social-scaled.jpg" />
        <meta property="twitter:site" content="IRM Consulting & Advisory" />
        <link rel="canonical" href={`https://elated-swanson-224ee1.netlify.app/cybersecurity-training-awareness/${post.slug}/`} />
      </Helmet>
      <section className="page-title-sec" style={{ backgroundImage: `url(${bgtitle})` }}>
        <div className="auto-container">
          <div className="row">
            <div className="col-md-12">
              <div className="content-box">
                <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container bbb-single">
        <div className="row">
          <div className="col-lg-8">
            <div className="newDescription">
              <div dangerouslySetInnerHTML={{ __html: post.cybersecurity.description }} />
            </div>
            <div className="cyber-desc">
              {/* Dynamic .pdf files loading in the iframe. Meant for production site. For developer site, just use a constant .pdf to save on loading time. */}
              {/* <iframe src={post.cybersecurity.downloadLink1.localFile.url} frameborder="0" width="100%" height="600px"></iframe> */}
              <iframe src="https://zzt.7ff.myftpupload.com/wp-content/uploads/2021/03/ISO-37500-LOM-4p-EN.pdf" frameborder="0" width="100%" height="600px"></iframe>
            </div>
          </div>
          <div className="col-lg-4">
            <div>
            </div>
            <div className="pdf-download">
              <div className="b-img">
                <a href={post.cybersecurity.downloadLink1.localFile.url} target="_blank"><img src={post.cybersecurity.brochure.sourceUrl} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" /></a>
              </div>
              <div className="dbpdf">
                <p><a href={post.cybersecurity.downloadLink1.localFile.url} target="_blank">Click to Download Brochure</a></p>
              </div>
              <div className="buttons">
                <a className="theme-btn btn-style-one transperent-bg mmmm" href={post.cybersecurity.payNowLink} target="_blank" >Pay Now</a>
              </div>
              <div className="buttons">
                <Link className="theme-btn btn-style-one transperent-bg mmmm" to="/cybersecurity-consulting-appointments" >
                  Talk to an Advisor</Link>
              </div>
            </div>
            <div className="infograph">
              <Slide top duration={2000}>
                <img src={post.cybersecurity.infograph ? post.cybersecurity.infograph.localFile.childImageSharp.fixed.src : ""} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" />
              </Slide>
            </div>
            <div className="contact-us-form cyber-form">
              <h3>Contact us about Training!</h3>
              <form className="contact-form" name="cybersecurity-training" method="post" data-netlify-recaptcha="true" data-netlify="true">
                <div className="row contactus">
                  <div className="col-lg-12"><input type="hidden" name="form-name" value="cybersecurity-training" /><input required="" type="text" name="fname" placeholder="Full Name*" required /></div>
                  <div className="col-lg-12"><input required="" type="text" name="lname" placeholder="Last Name*" required /></div>
                  <div className="col-lg-12"><input required="" type="text" name="phone" placeholder="Phone*" required /></div>
                  <div className="col-lg-12"><input required="" type="email" name="email" placeholder="Email*" required /></div>
                  <div className="col-lg-12"><input type="hidden" name="course" value={post.title} required /></div>
                  <div className="col-lg-12">
                    <input type="checkbox" required id="agrmt" name="agreement" value="i agree"></input>
                    <label htmlFor="agrmt" className="for--agr"> "I agree that my submitted data is being collected and stored."</label>
                  </div>
                  <div className="col-lg-12 text-center recaptcha-div">
                    <div className="d-flex justify-content-center">
                      <ReCAPTCHA sitekey="6Lc4v-0aAAAAAIL9Hpo_L4SXf95pq2_-XG6ApiBP" />
                    </div>
                  </div>
                  <div className="col-lg-12 center">
                    <button type="submit" className="theme-btn btn-style-one transperent-bg mmmm"><span>Send a Message</span></button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Logos />
    </Layout>
  )
}

/*
  Getting the Wordpress cybersecurity blog post associated with the '$slug' passed in through the 'gatsby-node.js' file.
*/
export const query = graphql`
  query ($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
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
          cybersecurity {
            description
            payNowLink
            downloadLink1 {
              localFile {
                url
              }
            }
            brochure {
              sourceUrl
              localFile {
                childImageSharp {
                  fixed {
                    src
                    srcWebp
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
            infograph {
              localFile {
                childImageSharp {
                  fixed {
                    src
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
`

export default CyberPost;