import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import loadable from '@loadable/component';

import Layout from '../components/Layout';
import homepagebanner1 from '../images/banners/dsp.webp';
import MarketplaceImg from '../images/marketplace/marketplace1.webp';

const AllMarketplaceLinks = loadable(() => import('../components/AllMarketplacelinks'));
const GetMarketplaceList = loadable(() => import('../components/marketplace/GetMarketplaceList'));
const Slide = loadable(() => import('react-reveal/Slide'));

/*
  @param  {object}  data - all the posts associated with a specific marketplace category fetched using the query at the end of this file
  @return {React function}  n/a - returns a complete marketplace product listing

  This file is used as a Gatsby template. It's used to dynamically auto-generate marketplace product pages based on
  calls from 'gatsby-node.j'.
*/
const MarketplaceListing = ({ data }) => {
  let { category } = data.allWpPost.edges[0].node.marketplace;

  /*
    In the WordPress Custom Fields, two post categories having naming mismatches with the SEO data in the meta tags below.
    * Posts that have the category "Privacy-M" are meant to be just "Privacy".
    * Posts that have the category "Vulnerability Assessment" are correct, but the old site had meta data associated with just "Vulnerability".

    For these reasons, I've kept the old meta data categories, "Privacy" and "Vulnerability".
  */
  if (category === "Privacy-M") category = "Privacy";
  if (category === "Vulnerability Assessment") category = "Vulnerability";

  return (
    <Layout pageTitle={`${category} | IRM Consulting & Advisory`}>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="description" content={`IRM Consulting & Advisory - ${category} | Explore our Marketplace for FREE Security Solutions and Tools for your Business`} />
        <meta name="keywords" content="Cybersecurity Solutions, Cybersecurity Products, Cybersecurity Services, vCISO Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="google-site-verification" content="7mCyYHywOZgOshvytuzwG7CdqjexkBr4tn3WykxnWxw" />
        <meta name="robots" content="index, follow" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="IRM Consulting &amp; Advisory" />
        <meta property="article:publisher" content="https://www.facebook.com/irmcon" />
        <meta property="article:modified_time" content="2021-01-11T10:52:43+00:00" />
        <meta property="og:image:width" content="1824" />
        <meta property="og:image:height" content="596" />
        <meta property="og:url" content="https://irmcon-staging.netlify.app/marketplace/" />
        <meta property="og:title" content="IRM Consulting & Advisory - Cybersecurity Consulting for your SaaS Business" />
        <meta property="og:description" content={`IRM Consulting & Advisory - ${category} | Explore our Marketplace for FREE Security Solutions and Tools for your Business`} />
        <meta property="og:image" content="https://xgw.394.myftpupload.com/wp-content/uploads/2021/10/irm-logo-social-scaled.jpg" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content="IRM Consulting & Advisory - Cybersecurity Consulting for your SaaS Business" />
        <meta property="twitter:description" content={`IRM Consulting & Advisory - ${category} | Explore our Marketplace for FREE Security Solutions and Tools for your Business`} />
        <meta property="twitter:image" content="https://xgw.394.myftpupload.com/wp-content/uploads/2021/10/irm-logo-social-scaled.jpg" />
        <meta property="twitter:site" content="IRM Consulting & Advisory" />
        <link rel="canonical" href="https://irmcon-staging.netlify.app/marketplace/" />
      </Helmet>

      <section className="page-title-sec" style={{ background: `url(${homepagebanner1})` }}      >
        <div className="auto-container">
          <div className="row">
            <div className="col-md-12">
              <div className="content-box">
                <h1>IRM Consulting & Advisory <br /> {`${category}`}</h1>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="marketplace-page">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-3">
              <div className="all-links">
                <AllMarketplaceLinks />
              </div>
              <div className="infograph">
                <Slide top duration={2000}>
                  <img
                    className="marketplace-cat-img my-5"
                    src={MarketplaceImg}
                  />
                </Slide>
              </div>
            </div>
            <div className="col-lg-9 we-offer-sec-market">
              <div className="row">
                <GetMarketplaceList marketplace_data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

/*
  Getting ALL the Wordpress posts associated with the '$category' passed in through the 'gatsby-node.js' file.
*/
export const query = graphql`
  query MyGetMarketplaceListQuery($category: String!) {
    allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: $category}}}}}) {
      edges {
        node {
          title
          marketplace {
            content
            link
            price
            category
            logo {
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

export default MarketplaceListing;