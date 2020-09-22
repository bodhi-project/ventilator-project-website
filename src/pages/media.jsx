// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import Collapse from 'antd/lib/collapse'
import '@bodhi-project/antrd/lib/just-futura/4.1.4/collapse/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../components/Link'
import StandardPage from '../components/wrappers/StandardPage'

import seoHelper from '../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React
const { Panel } = Collapse
const pageData = {
  pageTitle: 'Media',
  nakedPageSlug: 'media',
  pageAbstract: 'Media',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    process: file(
      relativePath: { eq: "tusky/FLOSSVentDevelopmentProcessv6.png" }
    ) {
      ...max1500
    }
  }
`

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
class Page extends React.Component {
  /**
   * [constructor description]
   * @return {[type]} [description]
   */
  constructor() {
    super()
  }

  /** [componentDidMount description] */
  componentDidMount() {}

  /**
   * [render description]
   * @return {[type]} [description]
   */
  render() {
    return (
      <StandardPage seoData={seoData} {...this.props}>
        <h3>Media</h3>
        <p>
          <strong>In Media (months of July and August, 2020)</strong>
        </p>
        <p>
          •&nbsp;
          <Link to="https://www.auroville.org/contents/5050">
            "Breathing easier: Aurovilians building ventilators"
          </Link>
          <br />
          •&nbsp;
          <Link to="https://www.thehindu.com/news/national/tamil-nadu/auroville-team-designs-low-cost-ventilator-prototype/article31928633.ece">
            "Auroville team designs low-cost ventilator prototype"
          </Link>
          <br />
          •&nbsp;
          <Link to="http://cms.newindianexpress.com/good-news/2020/jun/24/covid-19-auroville-engineers-in-collaboration-with-pims-develop-low-cost-ventilators-2160909.html">
            "COVID-19: Auroville engineers in collaboration with PIMS develop
            low cost ventilators"
          </Link>
          <br />
          •&nbsp;
          <Link to="https://www.inkl.com/news/auroville-team-designs-low-cost-ventilator-prototype">
            "Auroville team designs low-cost ventilator prototype"
          </Link>
        </p>
        <p>More coming soon...</p>
      </StandardPage>
    )
  }
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
