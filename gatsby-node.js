// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

// const path = require('path')
exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  if (stage === 'build-javascript') {
    const config = getConfig()
    const miniCssExtractPlugin = config.plugins.find(
      (plugin) => plugin.constructor.name === 'MiniCssExtractPlugin'
    )
    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true
    }
    actions.replaceWebpackConfig(config)
  }
}

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------- Methods
// ----------------------------------------------------------------------------
// exports.createPages = async ({ graphql, actions, reporter }) => {
//   const { createPage } = actions

//   // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//   // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ About Pages
//   // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//   const aboutPageTemplate = path.resolve(
//     `src/components/about-page-template/index.jsx`
//   )

//   const aboutPages = await graphql(
//     `
//       query AboutPages {
//         allAboutJson {
//           edges {
//             node {
//               routeSlug
//             }
//           }
//         }
//       }
//     `
//   )

//   if (aboutPages.errors) {
//     reporter.panicOnBuild(`Error while running GraphQL query.`)
//     return
//   }

//   aboutPages.data.allAboutJson.edges.forEach((edge) => {
//     console.log(`Creating ${edge.node.routeSlug}`)
//     createPage({
//       path: edge.node.routeSlug,
//       component: aboutPageTemplate,
//       context: {
//         routeSlug: edge.node.routeSlug,
//       },
//     })
//   })

//   // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//   // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Case Studies
//   // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//   const caseStudyPageTemplate = path.resolve(
//     `src/components/case-study-page-template/index.jsx`
//   )

//   const caseStudies = await graphql(
//     `
//       query CaseStudies {
//         allCaseStudiesJson {
//           edges {
//             node {
//               routeSlug
//             }
//           }
//         }
//       }
//     `
//   )

//   if (caseStudies.errors) {
//     reporter.panicOnBuild(`Error while running GraphQL query.`)
//     return
//   }

//   caseStudies.data.allCaseStudiesJson.edges.forEach((edge) => {
//     console.log(`Creating ${edge.node.routeSlug}`)
//     createPage({
//       path: edge.node.routeSlug,
//       component: caseStudyPageTemplate,
//       context: {
//         routeSlug: edge.node.routeSlug,
//       },
//     })
//   })

//   // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//   // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Events
//   // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//   const eventPageTemplate = path.resolve(
//     `src/components/event-page-template/index.jsx`
//   )

//   const events = await graphql(
//     `
//       query Events {
//         allEventsJson {
//           edges {
//             node {
//               routeSlug
//             }
//           }
//         }
//       }
//     `
//   )

//   if (events.errors) {
//     reporter.panicOnBuild(`Error while running GraphQL query.`)
//     return
//   }

//   events.data.allEventsJson.edges.forEach((edge) => {
//     console.log(`Creating ${edge.node.routeSlug}`)
//     createPage({
//       path: edge.node.routeSlug,
//       component: eventPageTemplate,
//       context: {
//         routeSlug: edge.node.routeSlug,
//       },
//     })
//   })

//   // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//   // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Reports
//   // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//   const reportPageTemplate = path.resolve(
//     `src/components/report-page-template/index.jsx`
//   )

//   const reports = await graphql(
//     `
//       query Reports {
//         allReportsJson {
//           edges {
//             node {
//               routeSlug
//             }
//           }
//         }
//       }
//     `
//   )

//   if (reports.errors) {
//     reporter.panicOnBuild(`Error while running GraphQL query.`)
//     return
//   }

//   reports.data.allReportsJson.edges.forEach((edge) => {
//     console.log(`Creating ${edge.node.routeSlug}`)
//     createPage({
//       path: edge.node.routeSlug,
//       component: reportPageTemplate,
//       context: {
//         routeSlug: edge.node.routeSlug,
//       },
//     })
//   })

//   // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//   // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Newsletters
//   // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//   const updatePageTemplate = path.resolve(
//     `src/components/update-page-template/index.jsx`
//   )

//   const updates = await graphql(
//     `
//       query Updates {
//         allUpdatesJson {
//           edges {
//             node {
//               routeSlug
//             }
//           }
//         }
//       }
//     `
//   )

//   if (updates.errors) {
//     reporter.panicOnBuild(`Error while running GraphQL query.`)
//     return
//   }

//   updates.data.allUpdatesJson.edges.forEach((edge) => {
//     console.log(`Creating ${edge.node.routeSlug}`)
//     createPage({
//       path: edge.node.routeSlug,
//       component: updatePageTemplate,
//       context: {
//         routeSlug: edge.node.routeSlug,
//       },
//     })
//   })
// }
