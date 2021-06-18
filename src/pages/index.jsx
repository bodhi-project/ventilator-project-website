// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'

// import Division from '@bodhi-project/components/lib/division'
// import '@bodhi-project/antrd/lib/4.10.3/row/style/css'
// import '@bodhi-project/antrd/lib/4.10.3/col/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../components/link'
import StandardPage from '../components/standard-page-wrapper'

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
          <div className="cover as-paragraph" style={{ maxWidth: 'unset' }}>
            <GatsbyImage image={getImage(this.props.data.banner)} />
            <div className="intro">
              <h1>
                <span>INSPIRED MACHINES</span>
              </h1>
              <p className="mask-h5">
                Devices for the commons created by collaborative efforts
                <br />
                in Auroville, India, since March 2020.
              </p>
            </div>
          </div>
          <div className="two-col as-paragraph" style={{ maxWidth: 'unset' }}>
            <div>
              <p style={{ marginBottom: 0 }}>
                On the first day of the national lockdown in India in response
                to COVID-19, a small team of individuals, mostly from&nbsp;
                <Link to="https://www.auroville.org/">Auroville</Link>, gathered
                quickly. The task was urgent but simple: create a low-cost,
                low-tech ventilator with parts easily available in India, such
                that it could be made accessible. There have been two teams
                working on two different designs.
              </p>
            </div>
            <div>
              <p style={{ marginBottom: 0 }}>
                In the time that has passed since we started the project has
                made progress and the ventilator devices will offer the same
                features as sophisticated devices, and may offer a chance of
                survival to patients who do not have access to a more
                sophisticated artificial ventilator due to shortage of supply or
                absence in remote areas.
              </p>
            </div>
          </div>
          <div className="boxed as-paragraph" style={{ maxWidth: 'unset' }}>
            <h2>Recent Updates (June 2021)</h2>
            <p>
              <strong>JASAN</strong>: The first set of JASAN prototypes are
              ready and lab testing is underway, and will happen over the next
              couple of months. It may take at least six more months for mass
              production to commence.
            </p>
            <p style={{ marginBottom: 0 }}>
              <strong>Tusky</strong>: The Tusky ventilator is in late-stage R&D
              in collaboration with an incubator. The team has been seeking
              funding to take the project to the next milestone of making
              prototypes for medical testing.
            </p>
          </div>
          <div className="two-col as-paragraph" style={{ maxWidth: 'unset' }}>
            <div>
              <h2>Tusky Ventilator</h2>
              <div className="mask-p">
                <GatsbyImage
                  className="as-paragraph"
                  image={getImage(this.props.data.tusky)}
                />
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
              <h2>JASAN Ventilator</h2>
              <div className="mask-p">
                <GatsbyImage
                  className="as-paragraph"
                  image={getImage(this.props.data.jasan)}
                />
              </div>
              <p style={{ marginBottom: 0 }}>
                The JASAN ventilator is a cost-effective, compact, mechanised
                ventilator designed for both invasive and non-invasive
                ventilation with a unique design.
                <br />
                <Link to="/jasan">Read more ⇾</Link>
              </p>
            </div>
          </div>
        </div>
      </StandardPage>
    )
  }
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
