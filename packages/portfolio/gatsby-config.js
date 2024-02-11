const profile = require('./config/profile.json')
const core = require('@justsloth/core')

module.exports = {
  trailingSlash: `never`,
  flags: {
    FAST_DEV: true,
    DEV_SSR: false, // 개발환경에서 SSR 사용시 Hydration Error 발생 가능
    PARALLEL_SOURCING: true
  },
  siteMetadata: {
    title: profile.title,
    titleTemplate: profile.titleTemplate,
    siteUrl: profile.siteUrl,
    description: profile.description,
    author: profile.author,
    url: profile.siteUrl,
    image: profile.placeholder,
    twitterUsername: ''
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: profile.googleAnalyticsTag,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: profile.siteUrl
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-mdx',
    'gatsby-plugin-typescript',
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/'
      },
      __key: 'pages'
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024,
              linkImagesToOriginal: false
            }
          },
          `gatsby-remark-gifs`,
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: 'Dark+ (default dark)',
              languageAliases: {
                typescripts: 'typescript',
                shell: 'bash',
                vim: 'bash'
              }
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: core.Colors.CYAN.DEFAULT,
        // Disable the loading spinner.
        showSpinner: false
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: profile.description,
        short_name: profile.author,
        start_url: `/`,
        icon: `static/favicons/favicon-96x96.png`,
        icons: [
          {
            src: '/favicons/android-icon-36x36.png',
            sizes: '36x36',
            type: 'image/png'
          },
          {
            src: '/favicons/android-icon-48x48.png',
            sizes: '48x48',
            type: 'image/png'
          },
          {
            src: '/favicons/android-icon-72x72.png',
            sizes: '72x72',
            type: 'image/png'
          },
          {
            src: '/favicons/android-icon-96x96.png',
            sizes: '96x96',
            type: 'image/png'
          },
          {
            src: '/favicons/android-icon-144x144.png',
            sizes: '144x144',
            type: 'image/png'
          },
          {
            src: '/favicons/android-icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/sitemap',
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }  
            allMarkdownRemark {
              nodes {
                fields {
                  slug
                }
                frontmatter {
                  date
                }
              }
            }
          }
        `,
        resolveSiteUrl: () => profile.siteUrl,
        resolvePages: ({ allMarkdownRemark: { nodes: allMarkdownPages } }) => {
          const pages = allMarkdownPages.map((page) => {
            return {
              path: page.fields.slug,
              modified: page.frontmatter.date
            }
          })
          return [...pages]
        },
        serialize: ({ path, modified }) => {
          return {
            url: path,
            lastmod: modified,
            changefreq: 'daily',
            priority: 0.7
          }
        }
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }
  ]
}
