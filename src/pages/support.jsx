// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../components/Link'
import StandardPage from '../components/wrappers/StandardPage'

import seoHelper from '../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React
const pageData = {
  pageTitle: 'Support',
  nakedPageSlug: 'support',
  pageAbstract:
    'The project has been bootstrapped from small contributions given by friends and family of core team persons. To carry on we now need more funding. Please consider giving.',
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
          A small community has emerged around these ideas spontaneously. We are
          working passionately and round-the-clock on these machines. The
          intention of everyone involved is to create something that can have a
          positive impact and reach as many people as possible.
        </p>
        <p>
          The project has been bootstrapped from small contributions given by
          friends and family of core team persons. To carry on we now need more
          funding. Please consider giving. Please know that any amount is
          greatly appreciated.
        </p>
        <p>How to contribute funds –</p>
        <ul className="mask-p" style={{ paddingLeft: 30, listStyle: 'disc' }}>
          <li>
            Visit <Link to="https://donations.auroville.com/">this link ⇾</Link>
          </li>
          <li>
            Note: The link takes you to the Auroville Foundation payment gateway
            page, and you will be able to receive a tax exemption
          </li>
          <li>
            Once there, please select “Other” in the Project selection, and
            specify “Light Fish (251667), for Inspired Machines" as the Project
            name.
          </li>
          <li>
            Please notify us by email (
            <Link to="mailto:inspiredmachines@gmail.com">
              inspiredmachines@gmail.com
            </Link>
            ) that you’ve made a transfer, so that we can track your
            contribution.
          </li>
        </ul>
        <h4>
          <u>Please read this message before you contribute</u>
        </h4>
        <p>
          <strong>Open-source or commercial:</strong>&nbsp;Please note that the
          respective creators will hold rights and licences for the devices, and
          will choose whether to publish their designs and work as an
          open-source project, or to develop their project commercially.
          Regardless of the approach the intention of the project is to create
          something for the commons.
        </p>

        <h3>Help offers</h3>
        <p>
          If you think that you can directly help us for example by sending
          supplies, technical support or something of that sort – please write
          to us by email (
          <Link to="mailto:inspiredmachines@gmail.com">
            inspiredmachines@gmail.com
          </Link>
          ).
        </p>
        <h3>For anything else...</h3>
        <p>
          Please be aware that we might take some to time to reply, we are
          working hard and that is taking much of our time right now. If you
          want to get in touch with us for some other reason – please write to
          us by email (
          <Link to="mailto:inspiredmachines@gmail.com">
            inspiredmachines@gmail.com
          </Link>
          ).
        </p>
        <h3>Thank you, givers...</h3>
        <p>
          We're grateful to these individuals, who have contributed funds and
          support to the project...
        </p>
        <ul className="mask-p" style={{ paddingLeft: 30, listStyle: 'disc' }}>
          <li>Dr. Srinivasan</li>
          <li>Mangal</li>
          <li>Dr. Brijesh Kumar</li>
          <li>Hitendra N. Jha</li>
          <li>Gurucharan Singh</li>
          <li>Uma and Neeraj</li>
          <li>Chintoo and Varun</li>
        </ul>
      </StandardPage>
    )
  }
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
