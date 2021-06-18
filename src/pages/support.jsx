// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../components/link'
import StandardPage from '../components/standard-page-wrapper'

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
        <h3>Message of thanks</h3>
        <p>
          Update in September (2020) – The Inspired Machines team is grateful
          for your support. Through small contributions we were able to
          bootstrap the project. We're happy to report that the two ventilators
          have now found the relevant industry partners and are working to bring
          the machines to hospitals. The air purifier is in it's last stage of
          development and is also in early talks partners to take it forward.
        </p>
        <h3>Thank you, givers...</h3>
        <p>
          We're grateful to these individuals, who have contributed funds and
          material support to the project...
        </p>
        <ul className="mask-p" style={{ paddingLeft: 30, listStyle: 'disc' }}>
          <li>Dr. V S Srinivasan</li>
          <li>Dr. Saurabh Srinivasan</li>
          <li>Dr. Rajendra Prasad</li>
          <li>Mr. Mangal</li>
          <li>Dr. Brijesh Kumar</li>
          <li>Dr. Hitendra N. Jha</li>
          <li>Mr. Gurucharan Singh</li>
          <li>Mr. Om Prakash Sharma</li>
          <li>Ms. Chintoo</li>
          <li>Mr. Arunendra P. Sharma</li>
        </ul>
        <h3>Where the money went</h3>
        <p>
          The largest part of the raised funds went to Tusky, and a minor part
          has gone towards the air purifier. JASAN, on the other hand, has been
          self-financed by the JASAN team.
        </p>
        <h3>Funding support</h3>
        <p>
          While we no longer urgently require funds, you can still give if you
          so wish. The money will go towards paying for raw materials, and not
          towards paying anybody – everyone is working voluntarily in this
          project. Tusky and JASAN have both found the right partners to take
          the project forward with.
        </p>
        <p>
          Tusky continues to be open-source (while JASAN is a commercial
          project), and all source files, design diagrams, etc. for Tusky will
          be uploaded once the machine has the relevant licences and
          permissions. In time the Tusky team plans to produce 100 machines and
          give these away to local hospitals and health centers. But, this is by
          good estimates, a few months down the line. You can also give money
          towards this later.
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
      </StandardPage>
    )
  }
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
