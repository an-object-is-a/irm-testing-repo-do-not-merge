const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const { createRedirect } = actions;
  createRedirect({
    fromPath: '/index.html',
    isPermanent: false,
    redirectInBrowser: true,
    toPath: '/'
  });
  /* 
    This array is used to help auto-generate separate marketplace category pages.
    Instead of creating ~16 new files manually, looping through this area allows Gatsby to use a template to do it for us.
    Any new marketplace categories should be added to this array.
  */
  const marketplace_product_listing = [
    {
      slug: 'access-management',
      category: 'Access Management'
    },
    {
      slug: 'endpoint-security',
      category: 'Endpoint Security'
    },
    {
      slug: 'firewall',
      category: 'Firewall'
    },
    {
      slug: 'grc-tools',
      category: 'GRC Tools'
    },
    {
      slug: 'human-security-awareness',
      category: 'Human Security Awareness'
    },
    {
      slug: 'intrusion-detection',
      category: 'Intrusion Detection'
    },
    {
      slug: 'network-monitoring',
      category: 'Network Monitoring'
    },
    {
      slug: 'password',
      category: 'Password'
    },
    {
      slug: 'penetration-testing',
      category: 'Penetration Testing'
    },
    {
      slug: 'privacy',
      category: 'Privacy-M'
    },
    {
      slug: 'ransomware',
      category: 'Ransomware'
    },
    {
      slug: 'safe-browsing',
      category: 'Safe Browsing'
    },
    {
      slug: 'security-mis-configuration',
      category: 'Security Mis-Configuration'
    },
    {
      slug: 'siem',
      category: 'SIEM'
    },
    {
      slug: 'threat-modeling',
      category: 'Threat Modeling'
    },
    {
      slug: 'vulnerability-assessment',
      category: 'Vulnerability Assessment'
    },
  ]

  // Get all Wordpress posts of types "blog" and "cybersecurity"
  const result = await graphql(`
    query MyTemplateQueries {
      allBlogPosts: allWpPost(filter: {allBlog: {type: {eq: "blog"}}}) {
        edges {
          node {
            slug
          }
        }
      }
      allCybersecurityPosts: allWpPost(filter: {allBlog: {type: {eq: "cybersecurity"}}}) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors
  }

  /*
    Create blog posts pages.
  */
  result.data.allBlogPosts.edges.forEach(post => {
    createPage({
      path: `/blog/${post.node.slug}`,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: post.node.slug
      }
    });
  });

  /*
    Create cybersecurity posts pages.
  */
  result.data.allCybersecurityPosts.edges.forEach(post => {
    createPage({
      path: `/cybersecurity-training-awareness/${post.node.slug}`,
      component: path.resolve(`./src/templates/cyber-post.js`),
      context: {
        slug: post.node.slug
      }
    });
  });

  /*
    Create marketplace product listings pages.
  */
  marketplace_product_listing.forEach(marketplace => {
    createPage({
      path: `/marketplace/${marketplace.slug}`,
      component: path.resolve(`./src/templates/marketplace-listing.js`),
      context: {
        category: marketplace.category
      }
    });
  });
}

