// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import StandardPage from '../components/wrappers/StandardPage'

import seoHelper from '../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React
const pageData = {
  pageTitle: 'Disclaimer',
  nakedPageSlug: 'disclaimer',
  pageAbstract: 'Disclaimer',
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
        <h3>Disclaimer</h3>
        <p>
          <strong>
            Last-resort devices and "surge-ventilators" may do more harm than
            good if they do not meet stringent requirements and clear a rigorous
            testing regime.
          </strong>
        </p>
        <p>
          The prototypes we are working on are not yet medically certified for
          use. Before anyone can manufacture the devices, they need to be
          certified. Such devices are regulated by medico-legal frameworks, and
          to get such certifications we have to go through the right process,
          and we have not yet started this process.
        </p>
        <p>
          It is important to understand that even when these devices are
          medically certified – the correct use of these devices could save
          lives, and bad use of such a device could cause the death of the
          patient.
        </p>
      </StandardPage>
    )
  }
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
