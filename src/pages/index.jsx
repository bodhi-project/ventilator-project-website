// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React, { useEffect } from 'react'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Img from 'gatsby-image'
import { navigate, StaticQuery, graphql } from 'gatsby'

import Division from '@bodhi-project/components/lib/division'
import '@bodhi-project/antrd/lib/just-futura/4.1.4/row/style/css'
import '@bodhi-project/antrd/lib/just-futura/4.1.4/col/style/css'

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
      ...max3000
    }
    tusky: file(relativePath: { eq: "tusky/feature1.jpg" }) {
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
        <div className="feature margin-p">
          <Img fluid={this.props.data.banner.childImageSharp.fluid} />
          <div style={{ position: 'absolute', top: 4, left: 30 }}>
            <h1 style={{ color: '#00128b', lineHeight: '1', marginBottom: 18 }}>
              <span style={{ fontSize: '125%' }}>INSPIRED MACHINES</span>
            </h1>
            <p
              className="mask-h5"
              style={{ color: '#00128b', lineHeight: '1.1' }}
            >
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
          quickly on Slack and Whatsapp. The task was urgent but simple: create
          a low-cost, low-tech ventilator with parts easily available in India,
          such that it could be replicated and made accessible to the vast
          commons for emergency use.&nbsp;<Link to="/about">Read more ⇾</Link>
        </p>
        <p>
          Since then, there have emerged three teams working on different
          prototypes ⇾
        </p>
        <Division byThree className="margin-p">
          <div>
            <h3>Tusky Ventilator</h3>
            <p style={{ marginBottom: 0 }}>
              A low-cost, low-tech, portable, mechanised and non-invasive
              ventilator design that cannot get any simpler. For patients in
              transit and home use.
              <br />
              <Link to="/about">Read more ⇾</Link>
            </p>
          </div>
          <div>
            <h3>JASAN Ventilator</h3>
            <p style={{ marginBottom: 0 }}>
              A cost-effective, compact, mechanised and non-invasive ventilator
              with an innovative and revolutionary design for hospital use.
              <br />
              <Link to="/about">Read more ⇾</Link>
            </p>
          </div>
          <div>
            <h3>Silly Box Air Purifier</h3>
            <p style={{ marginBottom: 0 }}>
              A affordable, negative-ion air-purifier-in-a-box that can be
              deployed in hospitals and homes.
              <br />
              <Link to="/about">Read more ⇾</Link>
            </p>
          </div>
        </Division>
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
            You can support us
          </h3>
          <p
            style={{
              width: '55%',
              margin: 'auto',
              textAlign: 'center',
              marginBottom: 0,
            }}
          >
            A small community has emerged around these ideas spontaneously. We
            are working passionately and round-the-clock on these machines. The
            intention of everyone involved is to create something that can have
            a positive impact and reach as many people in need as possible. We
            need your help to continue working on this project.
            <br />
            <Link to="/support">Support us ⇾</Link>
          </p>
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
