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
  pageTitle: 'About',
  nakedPageSlug: 'about',
  pageAbstract: 'About',
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
        <h3>How it began</h3>
        <p>
          The project began in March 2020, in Auroville (India), in the midst of
          the emerging health crisis in India caused by COVID-19. We read that
          one of the main problems in India would have been the lack of
          emergency ventilators for the patients, so we got working. The lack of
          such ventilators is expected to be one of the most critical
          difficulties in ensuring the adequate treatment for the affected
          population during the evolution of this pandemic.
        </p>
        <h3>Three teams emerged</h3>
        <p>
          A small group started to work on a prototype "minimum safe" ventilator
          device of last resort that would automate an AMBU type manual
          resuscitator, and which could be built in a short time, and with
          readily available materials in India. The goal at this point of time
          was to design a device that could be used in life-and-death situations
          in emergency triages, and which could free up healthcare professionals
          in an extreme situation where there is a shortage of assisted
          ventilators.
        </p>
        <p>
          From here, over the course of the next four weeks, three teams emerged
          which are now working on –
        </p>
        <ol className="mask-p" style={{ paddingLeft: 20 }}>
          <li>
            <strong>Blowfish resuscitator:</strong> ...
          </li>
          <li>
            <strong>JASAN ventilator:</strong> ...
          </li>
          <li>
            <strong>Unnamed air purifier:</strong> ...
          </li>
        </ol>
        <h3>Disclaimer</h3>
        <p>
          The prototypes we are working on are not yet medically certified for
          use. Before anyone can manufacture the devices, they need to be
          certified. Such devices are regulated by stringent medico-legal
          frameworks, and to get such certifications we have to go through the
          right process.
        </p>
        <p>
          It is important to understand that even when these devices are
          medically certified – they are emergency devices of last resort and
          can not replace much superior traditional machines. The correct use of
          these devices could save lives, bad use of such a device could cause
          the death of the patient. Note:
        </p>
        <ul className="mask-p" style={{ paddingLeft: 20 }}>
          <li>
            We do not believe that these experimental designs are yet ready to
            be built at the moment. They have only had the lightest of testing
            at the moment.
          </li>
          <li>
            It may emerge that as these designs mature, they could be excellent
            for use in other cases than COVID-19, such as for patients with
            other diseases, such as for patients with acute trauma.
          </li>
        </ul>
      </StandardPage>
    )
  }
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
