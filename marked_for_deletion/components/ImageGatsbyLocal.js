/*
import React, { useMemo } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const ImageLocal = ({ src, ...props }) => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allFile(filter: { internal: { mediaType: { regex: "images/" } } }) {
  //       edges {
  //         node {
  //           absolutePath
  //           childImageSharp {
  //             fluid {
  //               ...GatsbyImageSharpFluid
  //               originalName
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  // const match = useMemo(() => {
  //   const abc = src.split("/");
  //   const matchingString = abc[abc.length - 2] + "/" + abc[abc.length - 1];
  //   console.log('testing abc', abc);
  //   console.log('testing matchingString', matchingString);

  //   let x = data.allFile.edges.find(({ node }) => {
  //     const xyz = node?.absolutePath.split("/");
  //     const nodeImgPath = xyz[xyz.length - 2] + "/" + xyz[xyz.length - 1];
  //     //   src === node?.childImageSharp?.fluid?.originalName;
  //     console.log('testing nodeImgPath', nodeImgPath, nodeImgPath === matchingString);
  //     return matchingString === nodeImgPath;
  //   });

  //   console.log('testing x', x)
  //   return x;
  // }, [data, src]);

  //   console.log('testing match', match)

  // return <Img fluid={match && match.node.childImageSharp.fluid} {...props} />;
};

export default ImageLocal;
*/