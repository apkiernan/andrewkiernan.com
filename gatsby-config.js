module.exports = {
  siteMetadata: {
    title: 'Andrew Kiernan',
    description:
      'This repo contains an example business website that is built with Gatsby, and Netlify CMS.It follows the JAMstack architecture by using Git as a single source of truth, and Netlify for continuous deployment, and CDN distribution.'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-157284781-1',
        head: true,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Andrew Kiernan`,
        short_name: `Andrew Kiernan`,
        start_url: `/`,
        background_color: `#000966`,
        theme_color: `#729FE3`,
        display: `standalone`,
        icon: `src/img/logo-inverted.svg`
      }
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        preCachePages: [`/`, `/contact`]
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Rubik']
        }
      }
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
        jsxPragma: 'React'
      }
    },
    { resolve: 'gatsby-plugin-react-helmet' },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images'
      }
    },
    { resolve: 'gatsby-plugin-sharp' },
    { resolve: 'gatsby-transformer-sharp' },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads'
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048
            }
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static'
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`blog-post`, `project`],
        singleTypes: [`home`]
      }
    },
    { resolve: 'gatsby-plugin-styled-components' },
    { resolve: 'gatsby-plugin-netlify' } // make sure to keep it last in the array
  ]
};
