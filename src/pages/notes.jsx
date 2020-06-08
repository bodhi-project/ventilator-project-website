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
  pageTitle: 'Notes',
  nakedPageSlug: 'notes',
  pageAbstract: 'Notes',
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
        <h3>Notes on the project</h3>
        <Collapse bordered={false}>
          <Panel
            header={
              <span className="mask-p">
                <strong>Self-reporting ventilator prototype status</strong>
              </span>
            }
            key="1"
          >
            <div>
              <p>
                We began our efforts by exploring many<supr>*</supr> open-source
                projects (we started with the Spanish{' '}
                <Link to="https://www.oxygen.protofy.xyz/">OXYGen</Link>{' '}
                design), and what we discovered was that there was a lack of
                clear and transparent information on what stage a project or a
                prototype was in. As we set out to document the efforts of our
                team <i>over time</i> we wanted to express clearly and
                transparently the status of our prototypes. We discovered the
                algorithm from{' '}
                <Link to="https://www.pubinv.org/">Public Invention</Link>
                &nbsp;(shown below) to be a good means to quickly inform others
                of our progress, and this is what we have adopted at the moment
                to report the status of the ventilator prototypes.
              </p>
              <div
                className="margin-p"
                style={{ paddingTop: '7px', paddingBottom: '7px' }}
              >
                <div style={{ maxWidth: '45rem' }} className="feature">
                  <Img fluid={this.props.data.process.childImageSharp.fluid} />
                </div>
              </div>
              <p>
                <supr>*</supr> At the time of writing this note (last week of
                May, 2020) there are atleast a hundred and sixteen ventilator
                designs that teams around the world are working on. This
                information is tracked and managed by a community which is led
                by the{' '}
                <Link to="https://www.pubinv.org/">Public Invention</Link>{' '}
                group, and{' '}
                <Link to="https://docs.google.com/spreadsheets/d/1inYw5H4RiL0AC_J9vPWzJxXCdlkMLPBRdPgEVKF8DZw/edit#gid=0">
                  can be found here
                </Link>
                .
              </p>
            </div>
          </Panel>
        </Collapse>
      </StandardPage>
    )
  }
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
