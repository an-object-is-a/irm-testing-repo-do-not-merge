import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

import download_icon from '../images/download-icon.png';

const PrivacyCourses = () => {
  /*
    Getting all Wordpress blog posts with the 'category' of "Privacy".
  */
  const data = useStaticQuery(graphql`
    query PrivacyCourses {
      allWpPost(
        filter: {categories: {nodes: {elemMatch: {name: {eq: "Privacy"}}}}}
      ) {
        edges {
          node {
            title
            slug
            cybersecurity {
              courseDelivery
              payNowLink
              downloadLink1 {
                localFile {
                  url
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <>
      {data.allWpPost.edges.map(({ node }, index) => (
        <tr key={index}>
          <th width="40%" scope="row" className="title"><Link to={node.slug}><span dangerouslySetInnerHTML={{ __html: node.title }} /></Link></th>
          <td width="15%" className="center paypal course_delivery">{node.cybersecurity.courseDelivery}</td>
          <td width="10%" className="center paypal"><a target="_blank" href={node.cybersecurity.payNowLink}>Pay</a></td>
          <td width="20%" className="center more"><Link to="/cybersecurity-consulting-appointments">Schedule a Course</Link></td>
          <td width="15%" className="center"><a target="_blank" href={node.cybersecurity.downloadLink1.localFile.url}><img width="30px" src={download_icon} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" /></a></td>
        </tr>
      ))}
    </>
  )
}

export default PrivacyCourses;