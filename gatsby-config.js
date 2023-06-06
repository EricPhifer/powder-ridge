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
    'gatsby-plugin-google-gtag',
    'gatsby-plugin-sitemap',
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
