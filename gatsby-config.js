/**
 * @type {import('gatsby').GatsbyConfig}
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Powder Ridge HOA`,
    siteUrl: `https://powderridgegrandmesa.com`,
    description:
      'We help the Powder Ridge community in Mesa, CO remain ordered. We live life, together.',
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '1oaoktsj',
        dataset: 'production',
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-LSBFGY5478', // Google Analytics / GA
          // AdWords & Google Ads ID
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // gtagConfig: {
        //   optimize_id: "OPT_CONTAINER_ID",
        //   anonymize_ip: true,
        //   cookie_expires: 0,
        // },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional [sets Respect Do Not Track]
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ['/preview/**', '/do-not-track/me/too/'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://powderridgegrandmesa.com',
        sitemap: 'https://powderridgegrandmesa.com/sitemap/sitemap-index.xml',
        policy: [{ userAgent: `*`, allow: `/` }],
      },
    },
    {
      resolve: 'gatsby-plugin-sanity-image',
      options: {
        projectId: '1oaoktsj',
        dataset: 'production',
      },
    },
  ],
};
