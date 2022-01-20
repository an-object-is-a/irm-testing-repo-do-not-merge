/*
import React, { useMemo } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Image = ({ showWPImages = true, src, ...props }) => {
//   const data = useStaticQuery(graphql`
//     query {
//       allFile(filter: { internal: { mediaType: { regex: "images/" } } }) {
//         edges {
//           node {
//             childImageSharp {
//               fluid {
//                 ...GatsbyImageSharpFluid
//                 originalName
//               }
//             }
//             absolutePath
//           }
//         }
//       }
//     }
//   `);

//   const match = useMemo(() => {
//     return data.allFile.edges.find(
//       ({ node }) => src === node?.childImageSharp?.fluid?.originalName
//     );
//   });
//   console.log('testing x image', match);
//   return <Img fluid={match && match.node.childImageSharp.fluid} {...props} />;

//   if (showWPImages) {
//     const match = useMemo(() => {
//       return data.allFile.edges.find(
//         ({ node }) => src === node?.childImageSharp?.fluid?.originalName
//       );
//     }, [data, src]);

//     return <Img fluid={match && match.node.childImageSharp.fluid} {...props} />;
//   } else {
//     // This below will be for all images
// const match = useMemo(() => {
//   const abc = src.split("/");
//   const matchingString = abc[abc.length - 2] + "/" + abc[abc.length - 1];
//   return data.allFile.edges.find(({ node }) => {
//     const xyz = node?.absolutePath.split("/");
//     const nodeImgPath = xyz[xyz.length - 2] + "/" + xyz[xyz.length - 1];
//     //   src === node?.childImageSharp?.fluid?.originalName;
//     return matchingString === nodeImgPath;
//   });
// }, [data, src]);

// return <Img fluid={match && match.node.childImageSharp.fluid} {...props} />;
//   }
}

export default Image;
*/