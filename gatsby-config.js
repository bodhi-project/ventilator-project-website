// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// const path = require('path')

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
const data = require('./src/seo/data.json')
// const googleServiceAccountKey = require('./src/data/service-account.json')

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = data.websiteUrl,
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === 'production'
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL
// const cwd = process.cwd()
// const purgeCssCheck = '!(*.d).{ts,js,jsx,tsx}'

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------

module.exports = {
  pathPrefix: data.pathPrefix,
  siteMetadata: {
    title: data.websiteName,
    siteUrl,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-webpack-bundle-analyzer`, // https://www.gatsbyjs.org/packages/gatsby-plugin-webpack-bundle-analyzer
      options: {
        // https://www.gatsbyjs.org/packages/gatsby-plugin-webpack-bundle-analyzer/?=#options
        disable: false,
        production: true, // analyze production?
      },
    },
    {
      resolve: `gatsby-plugin-react-redux-persist`,
      options: {
        pathToCreateStoreModule: './src/state/createStore',
        serialize: {
          space: 0,
          isJSON: true,
          unsafe: false,
          ignoreFunction: true,
        },
        cleanupOnClient: true,
        windowKey: '__PRELOADED_STATE__',
      },
    },
    {
      resolve: `gatsby-plugin-preact`, // https://www.npmjs.com/package/gatsby-plugin-remove-serviceworker
    },
    {
      resolve: `gatsby-plugin-offline`, // https://www.gatsbyjs.org/packages/gatsby-plugin-offline
    },
    // {
    //   resolve: `gatsby-plugin-remove-serviceworker`, // https://www.npmjs.com/package/gatsby-plugin-remove-serviceworker
    // },
    {
      resolve: `gatsby-transformer-json`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/resources`,
        name: 'resources',
        ignore: [`**/*.src.json`],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`, // https://www.npmjs.com/package/gatsby-plugin-remove-serviceworker
    },
    {
      resolve: `gatsby-transformer-sharp`, // https://www.npmjs.com/package/gatsby-plugin-remove-serviceworker
    },
    // {
    //   resolve: `gatsby-source-mongodb`, // https://www.gatsbyjs.org/packages/gatsby-source-mongodb/?=gatsby-source-mongodb
    //   options: {
    //     ...data.db,
    //   },
    // },
    {
      resolve: `gatsby-plugin-react-helmet`, // https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/?=gatsby-plugin-react-helmet
    },
    {
      resolve: `gatsby-plugin-advanced-sitemap`, // https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap
    },
    {
      resolve: `gatsby-plugin-netlify`, // https://www.gatsbyjs.org/packages/gatsby-plugin-netlify/
    },
    {
      resolve: `gatsby-plugin-netlify-cache`, // https://github.com/axe312ger/gatsby-plugin-netlify-cache
    },
    {
      resolve: `gatsby-plugin-nprogress`, // https://www.gatsbyjs.org/packages/gatsby-plugin-nprogress/
      options: {
        color: `tomato`,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`, // https://next.gatsbyjs.org/packages/gatsby-plugin-robots-txt/?=
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-remove-trailing-slashes`, // https://www.npmjs.com/package/gatsby-plugin-remove-trailing-slashes
    },
    // {
    //   resolve: `gatsby-plugin-sentry`, // https://next.gatsbyjs.org/packages/gatsby-plugin-sentry/?=
    //   options: {
    //     dsn: 'https://1d927ed984d5497e8fe3730382a5777e@sentry.io/1294144',
    //     config: {
    //       // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
    //       extra: { website: { url: siteUrl } },
    //     },
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-purgecss`, // https://next.gatsbyjs.org/packages/gatsby-plugin-purgecss/?=
    //   options: {
    //     rejected: true,
    //     printRejected: true,
    //     // content: [
    //     //   path.join(cwd, `src/**/${purgeCssCheck}`),
    //     //   path.join(cwd, `node_modules/antd/lib/${purgeCssCheck}`),
    //     // ],
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-fastclick`, // https://github.com/escaladesports/gatsby-plugin-fastclick
    // },
    // {
    //   resolve: `gatsby-plugin-google-analytics`, // https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-google-analytics
    //   options: {
    //     trackingId: data.googleAnalyticsID,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-guess-js`, // https://next.gatsbyjs.org/packages/gatsby-plugin-guess-js/?=
    //   options: {
    //     GAViewID: `197703820`,
    //     // Add a JWT to get data from GA
    //     jwt: {
    //       client_email: `GOOGLE_SERVICE_ACCOUNT_EMAIL`,
    //       private_key: `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY`,
    //     },
    //     minimumThreshold: 0.03,
    //     period: {
    //       startDate: new Date('2020-1-1'),
    //       endDate: new Date(),
    //     },
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: data.websiteName,
        short_name: data.websiteName,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `./src/images/logos/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`, // https://www.gatsbyjs.org/packages/gatsby-plugin-canonical-urls
      options: {
        siteUrl,
      },
    },
    {
      resolve: `gatsby-plugin-sri`, // https://www.gatsbyjs.org/packages/gatsby-plugin-sri
      options: {
        hash: 'sha512',
      },
    },
    {
      resolve: `gatsby-plugin-zopfli`, // https://www.gatsbyjs.org/packages/gatsby-plugin-zopfli
    },
    // {
    //   resolve: `gatsby-plugin-accessibilityjs`, // https://www.gatsbyjs.com/plugins/gatsby-plugin-accessibilityjs
    // },
    // {
    //   resolve: `gatsby-plugin-react-axe`, // https://www.gatsbyjs.com/plugins/gatsby-plugin-react-axe
    // },
    {
      resolve: `gatsby-plugin-less`, // https://www.gatsbyjs.org/packages/gatsby-plugin-less/
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`, `ko`, `de`],
        // language file path
        defaultLanguage: `en`,
        // option to redirect to `/en` when connecting `/`
        redirect: true,
      },
    },
    {
      resolve: `gatsby-plugin-remove-console`, // https://www.gatsbyjs.org/packages/gatsby-plugin-remove-console
    },
  ],
}
