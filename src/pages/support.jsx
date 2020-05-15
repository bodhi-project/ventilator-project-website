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
  pageTitle: 'Home | Auroville Dynamics',
  nakedPageSlug: '',
  pageAbstract: 'Auroville Dynamics',
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
        <h3>Funding support</h3>
        <p>
          The project has been bootstrapped from small contributions given by
          friends and family of core team persons. To carry on we now need more
          funding. Please consider giving. Please know that any amount is
          greatly appreciated. These funds would go towards buying and sourcing
          materials, and also paying engineers in the core-team to carry on
          their work. At the moment we are working on discovering the proper way
          for you to give. We will share this here shortly.
        </p>
        <h3>Help offers</h3>
        <p>
          If you think that you can directly help us for example by sending
          supplies, technical support or something of that sort – we're working
          on a form that you can fill.
        </p>
        <h3>For antything else...</h3>
        <p>
          If you want to get in touch with us for some other reason – we're
          working on a form that you can fill. Please be aware that we might
          take some to time to reply, we are working hard and that is taking
          much of our time right now.
        </p>
      </StandardPage>
    )
  }
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
