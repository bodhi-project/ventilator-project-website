// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

// import Division from '@bodhi-project/components/lib/division'
// import '@bodhi-project/antrd/lib/4.10.3/row/style/css'
// import '@bodhi-project/antrd/lib/4.10.3/col/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../components/Link'
import StandardPage from '../components/wrappers/StandardPage'

import seoHelper from '../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React
const pageData = {
  pageTitle:
    'Devices for the commons created by collaborative efforts in Auroville, India, since March 2020.',
  nakedPageSlug: '',
  pageAbstract:
    'On the first day of the national lockdown in India because of COVID-19, a small team of individuals, mostly from Auroville, gathered quickly on Slack and Whatsapp. The task was urgent but simple: create a low-cost, low-tech ventilator with parts easily available in India, such that it could be replicated and made accessible to the vast commons for emergency use. Since then, there have emerged three teams working on different prototypes.',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    banner: file(relativePath: { eq: "banners/banner-without-text.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    tusky: file(relativePath: { eq: "banners/tusky.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    jasan: file(relativePath: { eq: "banners/jasan.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    airPurifier: file(relativePath: { eq: "banners/air-purifier.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP, AVIF]
        )
      }
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
        <div className="container">
          <div className="feature margin-p">
            <Img fluid={this.props.data.banner.childImageSharp.fluid} />
            <div className="intro">
              <h1>
                <span>INSPIRED MACHINES</span>
              </h1>
              <p className="mask-h5">
                Devices for the commons
                <br />
                created by collaborative efforts
                <br />
                in Auroville, India,
                <br />
                since March 2020.
              </p>
            </div>
          </div>
          <p>
            On the first day of the national lockdown in India because of
            COVID-19, a small team of individuals, mostly from&nbsp;
            <Link to="https://www.auroville.org/">Auroville</Link>, gathered
            quickly on Slack and Whatsapp. The task was urgent but simple:
            create a low-cost, low-tech ventilator with parts easily available
            in India, such that it could be replicated and made accessible to
            the vast commons for emergency use.&nbsp;
            <Link to="/about">Read more ⇾</Link>
          </p>
          <p>
            The ventilator devices may offer a chance of survival to patients
            who do not have access to a more sophisticated artificial ventilator
            due to shortage of supply or absence in remote areas.
          </p>
          <p>
            Since we started, there have emerged three teams working on three
            different ideas.
          </p>
          <p>
            We're happy to report that it's been six months since this project
            came about, and Tusky and JASAN have recently signed agreements with
            an incubator and a commercial partner respectively to take the
            project forward. ⇾
          </p>
          <br />
          <br />
          <div>
            <h3>Tusky Ventilator</h3>
            <div className="mask-p">
              <Img fluid={this.props.data.tusky.childImageSharp.fluid} />
            </div>
            <p style={{ marginBottom: 0 }}>
              A low-cost, low-tech, portable, mechanised and non-invasive
              ventilator design that cannot get any simpler. For hospital and
              home use.
              <br />
              <Link to="/tusky">Read more ⇾</Link>
            </p>
          </div>
          <div>
            <h3>JASAN Ventilator</h3>
            <div className="mask-p">
              <Img fluid={this.props.data.jasan.childImageSharp.fluid} />
            </div>
            <p style={{ marginBottom: 0 }}>
              The JASAN ventilator is a cost-effective, compact, mechanised
              ventilator designed for both invasive and non-invasive ventilation
              with a unique design.
              <br />
              <Link to="/jasan">Read more ⇾</Link>
            </p>
          </div>
          <div>
            <h3>Box Purifier</h3>
            <div className="mask-p">
              <Img fluid={this.props.data.airPurifier.childImageSharp.fluid} />
            </div>
            <p style={{ marginBottom: 0 }}>
              An affordable, low-tech, negative-ion air-purifier the size of a
              tissue box that can zap <i>everything</i>, and can be deployed in
              hospitals and homes.
              <br />
              <Link to="/box-purifier">Read more ⇾</Link>
            </p>
          </div>
          <br />
          <br />
          <div className="feature" style={{ background: '#F6F7EC' }}>
            <br />
            <h3
              style={{
                width: '78%',
                margin: 'auto',
                textAlign: 'center',
                lineHeight: 1,
                marginBottom: 16,
              }}
            >
              Thanks for your support!
            </h3>
            <p
              style={{
                margin: 'auto',
                textAlign: 'center',
                marginBottom: 0,
              }}
              className="support"
            >
              Update in September (2020) – The Inspired Machines team is
              grateful for your support. Through small contributions we were
              able to bootstrap the project. We're happy to report that the two
              ventilators have now found the relevant industry partners and are
              working to bring the machines to hospitals.
              <br />
              <Link to="/support">Read more ⇾</Link>
            </p>
            <br />
          </div>
          <br />
          <br />
        </div>
      </StandardPage>
    )
  }
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
