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
  pageTitle: 'People',
  nakedPageSlug: 'people',
  pageAbstract:
    'A small community has emerged around these ideas spontaneously. We are working passionately and round-the-clock on these machines. The intention of everyone involved is to create something that can have a positive impact and reach as many people as possible.',
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
        <h3>Prototyping teams</h3>
        <p>
          <strong>Tusky Ventilator</strong> – Samvit (of{' '}
          <Link to="http://light-fish.com/index.html">Light Fish</Link>)
          supported by Akash and Karthik
        </p>
        <p>
          <strong>JASAN Ventilator</strong> – <strong>J</strong>orge,{' '}
          <strong>A</strong>kash (of{' '}
          <Link to="https://www.evfuture.com/">Cynergy</Link>),{' '}
          <strong>S</strong>ukrit (of{' '}
          <Link to="http://aurovelo.com/">Aurovelo</Link>), <strong>A</strong>
          lex, and&nbsp;
          <strong>N</strong>igel (of{' '}
          <Link to="https://aquadynauroville.com/site/en/">Aqua Dyn</Link>)
        </p>
        <p>
          <strong>Silly Box Air Purifier</strong> - Karthik, supported by Sumvit
        </p>
        <h3>Medical advising team</h3>
        <p>
          Dr. Hasan and Aneesh from Pondicherry Institute of Medical Sciences
        </p>
        <p>Dr. Shanu from Auroville Health Centre</p>
        <p>Surya from Auroville Dental Clinic</p>
        <h3>Documentation team</h3>
        <p>Doris, Francis & Aurovenkatesh</p>
        <h3>Support team</h3>
        <p>Banu, Jothi Prasad, Pranav and Loretta</p>
        <h3>Support network</h3>
        <p>
          Prassana, Anoo, Sarath, Dinesh, Kim, Sivakumar, Bram, Franz and Dr.
          Brijesh Kumar
        </p>
      </StandardPage>
    )
  }
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
