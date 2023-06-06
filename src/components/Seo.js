// import { graphql, useStaticQuery } from 'gatsby';
// import React from 'react';

// export default function Seo({ children, location, description, title, image }) {
//   const { site } = useStaticQuery(graphql`
//     query {
//       site {
//         siteMetadata {
//           title
//           description
//         }
//       }
//     }
//   `);
//   return (
//     <Helmet titleTemplate={`%s - ${site.siteMetadata.title}`}>
//       <html lang="en" />
//       <title>{title}</title>
//       {/* Fav Icons */}
//       <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
//       <link rel="alternate icon" href="/favicon.ico" />
//       {/* Meta Tags */}
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <meta name="description" content={site.siteMetadata.description} />
//       {/* Open Graph */}
//       {location && <meta property="og:url" content={location.href} />}
//       <meta property="og:image" content={image || '.logo.svg'} />
//       <meta property="og:title" content={title} key="ogtitle" />
//       <meta
//         property="og:site_name"
//         content={site.siteMetadata.title}
//         key="ogsitename"
//       />
//       <meta property="og:description" content={description} key="ogdesc" />
//       {children}
//     </Helmet>
//   );
// }
