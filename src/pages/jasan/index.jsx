// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import StandardPage from '../../components/wrappers/StandardPage'

import seoHelper from '../../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React
const pageData = {
  pageTitle: 'JASAN Ventilator',
  nakedPageSlug: 'jasan',
  pageAbstract:
    'A cost-effective, compact, mechanised and non-invasive ventilator with an innovative and revolutionary design for hospital use.',
}

const seoData = seoHelper(pageData)

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
        <p>Coming soon...</p>
      </StandardPage>
    )
  }
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
