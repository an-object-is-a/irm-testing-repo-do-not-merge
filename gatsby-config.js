module.exports = {
  siteMetadata: {
    siteUrl: `https://elated-swanson-224ee1.netlify.app/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://elated-swanson-224ee1.netlify.app`,
      },
    },
    /*
      A package to redirect routes using Netlify.
      Read the plugin docs for more information: https://www.gatsbyjs.com/plugins/gatsby-plugin-netlify/
    */
    // "gatsby-plugin-netlify",
    /*
      A package to help integrate page-specific SEO into React App's.
      Read the plugin docs for more information: https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/
    */
    "gatsby-plugin-react-helmet",
    /*
      Three Gatsby plugins that allow for images to be optimized when being displayed to the end user.
      Read the plugin docs for more information:
        https://www.gatsbyjs.com/plugins/gatsby-plugin-image/
        https://www.gatsbyjs.com/plugins/gatsby-plugin-sharp/
        https://www.gatsbyjs.com/plugins/gatsby-transformer-sharp/
    */
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    /*
      Adding the ability for Gatsby to understand where the 'images' folder is within '/src'
      Read the plugin docs for more information: https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/
    */
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    /*
      Adding the ability for Gatsby to draw in Wordpress API data into the Content Mesh for use in GraphQL queries.
      Read the plugin docs for more information: https://www.gatsbyjs.com/plugins/gatsby-source-wordpress/
    */
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "https://zzt.7ff.myftpupload.com/graphql",
      },
    },
    /*
      Adding Google analytics tracking to the website.
      Read the plugin docs for more information: https://www.gatsbyjs.com/plugins/gatsby-plugin-google-gtag/
    */
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-L8D6167KQ7", // Google Analytics / GA
          "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    /* 
      Modifying the sitemap of the site to exclude specific routes.
      Read the plugin docs for more information: https://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap/
    */
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: '/',
        excludes: [
          `/auth/callback`,
          `/auth/callback/`,
          `/cybersecurity-consulting-case-studies/`,
          `/cybersecurity-consulting-send-your-referrals/`
        ],
        // query: `
        // {
        //   site {
        //     siteMetadata {
        //       siteUrl
        //     }
        //   }
        //   allSitePage {
        //     edges {
        //       node {
        //         path
        //       }
        //     }
        //   }
        // }`,
        // serialize: ({ site, allSitePage }) => {
        //   let x = []

        //   for (let index = 0; index < allSitePage.edges.length; index++) {
        //     const { path } = allSitePage.edges[index].node;
        //     if (!path.endsWith("/")) {
        //       let newPath = path + "/";
        //       x.push({
        //         url: site.siteMetadata.siteUrl + newPath,
        //         changefreq: 'daily',
        //         priority: 0.7,
        //       })
        //     } else {
        //       x.push({
        //         url: site.siteMetadata.siteUrl + path,
        //         changefreq: 'daily',
        //         priority: 0.7,
        //       })
        //     }
        //   }

        //   return x;
        // }
      }
    },
    /* 
      Generating the site's robots.txt
      Read the plugin docs for more information: https://www.gatsbyjs.com/plugins/gatsby-plugin-robots-txt/

      // DO NOT ENABLE THIS PLUGIN FOR THE STAGING ENVIRONMENT, JUST PRODUCTION PLEASE.
    */
    // {
    //   resolve: 'gatsby-plugin-robots-txt',
    //   options: {
    //     host: 'https://elated-swanson-224ee1.netlify.app/',
    //     sitemap: 'https://elated-swanson-224ee1.netlify.app/sitemap-0.xml',
    //     policy: [{ userAgent: '*', allow: '/' }]
    //   }
    // },
    /*
      This plugin is used to set the favicon for the website.
      Read the plugin docs for more information: https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest
    */
    {

      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "src/images/icon.png", // This path is relative to the root of the site.
      }
    }
  ]
};
