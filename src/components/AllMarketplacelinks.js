import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

/*
  This component is used to create the left side directory on the '/marketplace' route.
  It's a listing of all of the marketplace product categories along with the number or products
  contained within each category.
*/
const AllMarketplaceLinks = () => {
  const [allRecords, setAllRecords] = useState([]);
  const [categoriesCount, setCategoriesCount] = useState();
  const [totalProducts, setTotalProducts] = useState();
  let data = {};

  useEffect(() => {
    let x = 0;
    for (let item of query_result.allWpPost.edges) {
      const { node: { marketplace: { category } } } = item;

      if (category) {
        x = x + 1;
        data[category] = 1 + (data[category] || 0);
      }
    }
    setCategoriesCount(data);
    setTotalProducts(x);
  }, [allRecords]);

  /*
    Getting all Wordpress blog posts.
  */
  const query_result = useStaticQuery(graphql`
    query AllMarketPlaceCategories {
      allWpPost {
        edges {
          node {
            marketplace {
              category
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <h3 className="marketplace-cat">Categories</h3>
      <ul className="marketplace-category-list">
        <Link to="/marketplace">
          <li className="marketplace-cat-item d-flex justify-content-between">
            All Products
            <span className="marketplace-cat-item-count d-flex justify-content-center align-items-center">
              {totalProducts && totalProducts}
            </span>
          </li>
        </Link>
        <Link to="/marketplace/penetration-testing">
          <li className="marketplace-cat-item d-flex justify-content-between">
            Penetration Testing
            <span className="marketplace-cat-item-count d-flex justify-content-center align-items-center">
              {categoriesCount && categoriesCount["Penetration Testing"]}
            </span>
          </li>
        </Link>
        <Link to="/marketplace/network-monitoring">
          <li className="marketplace-cat-item d-flex justify-content-between">
            Network Monitoring
            <span className="marketplace-cat-item-count d-flex justify-content-center align-items-center">
              {categoriesCount && categoriesCount["Network Monitoring"]}
            </span>
          </li>
        </Link>
        <Link to="/marketplace/privacy">
          <li className="marketplace-cat-item d-flex justify-content-between">
            Privacy
            <span className="marketplace-cat-item-count d-flex justify-content-center align-items-center">
              {categoriesCount && categoriesCount["Privacy"]}
            </span>
          </li>
        </Link>
        <Link to="/marketplace/password">
          <li className="marketplace-cat-item d-flex justify-content-between">
            Password
            <span className="marketplace-cat-item-count d-flex justify-content-center align-items-center">
              {categoriesCount && categoriesCount["Password"]}
            </span>
          </li>
        </Link>
        <Link to="/marketplace/endpoint-security">
          <li className="marketplace-cat-item d-flex justify-content-between">
            Endpoint Security
            <span className="marketplace-cat-item-count d-flex justify-content-center align-items-center">
              {categoriesCount && categoriesCount["Endpoint Security"]}
            </span>
          </li>
        </Link>
        <Link to="/marketplace/firewall">
          <li className="marketplace-cat-item d-flex justify-content-between">
            Firewall
            <span className="marketplace-cat-item-count d-flex justify-content-center align-items-center">
              {categoriesCount && categoriesCount["Firewall"]}
            </span>
          </li>
        </Link>
        <Link to="/marketplace/safe-browsing">
          <li className="marketplace-cat-item d-flex justify-content-between">
            Safe Browsing
            <span className="marketplace-cat-item-count d-flex justify-content-center align-items-center">
              {categoriesCount && categoriesCount["Safe Browsing"]}
            </span>
          </li>
        </Link>
        <Link to="/marketplace/security-mis-configuration">
          <li className="marketplace-cat-item d-flex justify-content-between">
            Security Mis-Configuration
            <span className="marketplace-cat-item-count d-flex justify-content-center align-items-center">
              {categoriesCount &&
                categoriesCount["Security Mis-Configuration"]}
            </span>
          </li>
        </Link>
        <Link to="/marketplace/siem">
          <li className="marketplace-cat-item d-flex justify-content-between">
            SIEM
            <span className="marketplace-cat-item-count d-flex justify-content-center align-items-center">
              {categoriesCount && categoriesCount["SIEM"]}
            </span>
          </li>
        </Link>
        <Link to="/marketplace/vulnerability-assessment">
          <li className="marketplace-cat-item d-flex justify-content-between">
            Vulnerability Assessment
            <span className="marketplace-cat-item-count d-flex justify-content-center align-items-center">
              {categoriesCount &&
                categoriesCount["Vulnerability Assessment"]}
            </span>
          </li>
        </Link>
        <Link to="/marketplace/intrusion-detection">
          <li className="marketplace-cat-item d-flex justify-content-between">
            Intrusion Detection
            <span className="marketplace-cat-item-count d-flex justify-content-center align-items-center">
              {categoriesCount && categoriesCount["Intrusion Detection"]}
            </span>
          </li>
        </Link>
        <Link to="/marketplace/human-security-awareness">
          <li className="marketplace-cat-item d-flex justify-content-between">
            Human Security Awareness
            <span className="marketplace-cat-item-count d-flex justify-content-center align-items-center">
              {categoriesCount &&
                categoriesCount["Human Security Awareness"]}
            </span>
          </li>
        </Link>
        <Link to="/marketplace/ransomware">
          <li className="marketplace-cat-item d-flex justify-content-between">
            Ransomware
            <span className="marketplace-cat-item-count d-flex justify-content-center align-items-center">
              {categoriesCount &&
                categoriesCount["Ransomware"]}
            </span>
          </li>
        </Link>
        <Link to="/marketplace/access-management">
          <li className="marketplace-cat-item d-flex justify-content-between">
            Access Management
            <span className="marketplace-cat-item-count d-flex justify-content-center align-items-center">
              {categoriesCount &&
                categoriesCount["Access Management"]}
            </span>
          </li>
        </Link>
        <Link to="/marketplace/threat-modeling">
          <li className="marketplace-cat-item d-flex justify-content-between">
            Threat Modeling
            <span className="marketplace-cat-item-count d-flex justify-content-center align-items-center">
              {categoriesCount &&
                categoriesCount["Threat Modeling"]}
            </span>
          </li>
        </Link>
        <Link to="/marketplace/grc-tools">
          <li className="marketplace-cat-item d-flex justify-content-between">
            GRC Tools
            <span className="marketplace-cat-item-count d-flex justify-content-center align-items-center">
              {categoriesCount &&
                categoriesCount["GRC Tools"]}
            </span>
          </li>
        </Link>
      </ul>
    </>
  )
};

export default AllMarketplaceLinks;