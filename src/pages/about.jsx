// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { graphql } from 'gatsby'

import Timeline from 'antd/lib/timeline'
import '@bodhi-project/antrd/lib/4.10.3/timeline/style/css'

import Video from '@bodhi-project/components/lib/video'
import '@bodhi-project/components/lib/video/style.less'

import ConfigProvider from 'antd/lib/config-provider'
import '@bodhi-project/antrd/lib/4.10.3/config-provider/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../components/link'
import StandardPage from '../components/standard-page-wrapper'

import Gallery from '../components/gallery'
import '../components/gallery/style.less'

import seoHelper from '../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React
const pageData = {
  pageTitle: 'About',
  nakedPageSlug: 'about',
  pageAbstract:
    '24 March 2020, Auroville, India. It was the first day of the national lockdown because of COVID-19. All of a sudden the threat became real for everybody. One of the main worries in India, amongst many others, was the lack of emergency ventilators, its affordability and reliance on imported models. Responses from individuals emerged spontaneously throughout the country to confront these challenges, and this project is such a response.',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    tuskySept1: file(relativePath: { eq: "tusky/timeline/img6.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 900
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    tuskySept2: file(relativePath: { eq: "tusky/timeline/img7.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 900
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    jasanSept1: file(relativePath: { eq: "jasan/img2.jpeg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 900
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    jasanSept2: file(relativePath: { eq: "jasan/img1.jpeg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 900
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    jasanSept3: file(relativePath: { eq: "jasan/img3.jpeg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 900
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    jasanSept4: file(relativePath: { eq: "jasan/img4.jpeg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 900
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
    const images1 = []
    const images2 = []

    images1.push({
      data: this.props.data.tuskySept1,
      height: this.props.data.tuskySept1.childImageSharp.gatsbyImageData.height,
      width: this.props.data.tuskySept1.childImageSharp.gatsbyImageData.width,
    })
    images1.push({
      data: this.props.data.tuskySept2,
      height: this.props.data.tuskySept2.childImageSharp.gatsbyImageData.height,
      width: this.props.data.tuskySept2.childImageSharp.gatsbyImageData.width,
    })

    images2.push({
      data: this.props.data.jasanSept1,
      height: this.props.data.jasanSept1.childImageSharp.gatsbyImageData.height,
      width: this.props.data.jasanSept1.childImageSharp.gatsbyImageData.width,
    })
    images2.push({
      data: this.props.data.jasanSept2,
      height: this.props.data.jasanSept2.childImageSharp.gatsbyImageData.height,
      width: this.props.data.jasanSept2.childImageSharp.gatsbyImageData.width,
    })
    images2.push({
      data: this.props.data.jasanSept3,
      height: this.props.data.jasanSept3.childImageSharp.gatsbyImageData.height,
      width: this.props.data.jasanSept3.childImageSharp.gatsbyImageData.width,
    })
    images2.push({
      data: this.props.data.jasanSept4,
      height: this.props.data.jasanSept4.childImageSharp.gatsbyImageData.height,
      width: this.props.data.jasanSept4.childImageSharp.gatsbyImageData.width,
    })

    return (
      <ConfigProvider prefixCls="wtf">
        <StandardPage seoData={seoData} {...this.props}>
          <div className="container">
            <h3>About the project</h3>
            <p>
              24 March 2020, Auroville, India. It was the first day of the
              national lockdown because of COVID-19. All of a sudden the threat
              became real for everybody. One of the main worries in India,
              amongst many others, was the lack of emergency ventilators, its
              affordability and reliance on imported models. Responses from
              individuals emerged spontaneously throughout the country to
              confront these challenges, and this project is such a response.
            </p>
            <div className="boxed">
              <h3>In Media</h3>
              <p>
                <Link to="https://www.auroville.org/contents/5050">
                  <strong>
                    <i>Auroville Today</i>
                  </strong>
                  , August 2020 issue
                  <br />
                  Breathing easier: Aurovilians building ventilators
                </Link>
                <br />
                <Link to="/Auroville_Today_aug_2020_issue.pdf">
                  <strong>PDF</strong>
                </Link>
              </p>
              <p>
                <Link to="https://www.thehindu.com/news/national/tamil-nadu/auroville-team-designs-low-cost-ventilator-prototype/article31928633.ece">
                  <strong>
                    <i>The Hindu</i>
                  </strong>
                  , 27 June 2020
                  <br />
                  Auroville team designs low-cost ventilator prototype
                </Link>
              </p>
              <p>
                <Link to="http://cms.newindianexpress.com/good-news/2020/jun/24/covid-19-auroville-engineers-in-collaboration-with-pims-develop-low-cost-ventilators-2160909.html">
                  <strong>The New Indian Express</strong> 24 June 2020
                  <br />
                  COVID-19: Auroville engineers in collaboration with PIMS
                  develop low cost ventilators
                </Link>
              </p>
            </div>
            <div className="boxed alt">
              <h2>Note of thanks</h2>
              <p>
                The Inspired Machines team is grateful for your support. Through
                small contributions we were able to bootstrap the project. We're
                grateful to these individuals, who have contributed funds and
                material support to the project –
              </p>
              <ul style={{ paddingLeft: 30, listStyle: 'disc' }}>
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
            </div>
            <h3>Project timeline –</h3>
            <Timeline reverse>
              <Timeline.Item color="#ffd700">
                <p style={{ marginBottom: 22 }}>
                  <strong>
                    How it began...
                    <br />
                    <small style={{ display: 'block', marginTop: -5 }}>
                      third week of March, 2020
                    </small>
                  </strong>
                </p>
                <p>
                  In Auroville, a small team of individuals quickly gathered on
                  Slack and Whatsapp. The task was urgent but simple: create a
                  low-cost, low-tech ventilator with parts easily available in
                  India, such that it could be replicated and made accessible to
                  the vast commons for emergency use.
                </p>
              </Timeline.Item>
              <Timeline.Item color="#ffd700">
                <p style={{ marginBottom: 22 }}>
                  <strong>
                    Collaborations emerging
                    <br />
                    <small style={{ display: 'block', marginTop: -5 }}>
                      end of March, 2020
                    </small>
                  </strong>
                </p>
                <p>
                  A small group of engineers and makers from Auroville started
                  to work on a prototype &quot;minimum safe&quot; ventilator
                  device of last resort that would automate an AMBU type manual
                  resuscitator, which could be built in a short time, and with
                  readily available materials in India.
                </p>
                <p>
                  The goal at this point of time was to design a device that
                  could be used in life-and-death situations in emergency
                  triages, and which could free up healthcare professionals in
                  an extreme situation where there is a shortage of assisted
                  ventilators.
                </p>
              </Timeline.Item>
              <Timeline.Item color="#ffd700">
                <p style={{ marginBottom: 22 }}>
                  <strong>
                    Two approaches emerge...
                    <br />
                    <small style={{ display: 'block', marginTop: -5 }}>
                      middle of April, 2020
                    </small>
                  </strong>
                </p>
                <p>
                  Over the course of the next few weeks there emerged two
                  approaches, and two designs being worked upon by two
                  multidisciplinary teams in parallel –
                </p>
                <ol className="mask-p" style={{ paddingLeft: 20 }}>
                  <li>
                    <strong>
                      <Link to="/tusky">Tusky Ventilator</Link>
                    </strong>
                  </li>
                  <li>
                    <strong>
                      <Link to="/jasan">JASAN Ventilator</Link>
                    </strong>
                  </li>
                </ol>
                <p>
                  A small support team also fell into place that was supporting
                  through efforts in logistics, documentation, fundraising,
                  interfacing, and more.
                </p>
              </Timeline.Item>
              <Timeline.Item color="#ffd700">
                <p style={{ marginBottom: 22 }}>
                  <strong>
                    ... so do many challenges
                    <br />
                    <small style={{ display: 'block', marginTop: -5 }}>
                      March and April, 2020
                    </small>
                  </strong>
                </p>
                <p>
                  In the extraordinary time of the pandemic, even the smallest
                  thing became a big thing. The teams at Auroville worked around
                  the clock, while fully respecting the lockdown protocols.
                  Working individually and remotely most of the time and meeting
                  in-person only for essential test-runs slowed progress down.
                  Ordinary parts such as bolts and nuts were hard to come by.
                  Other parts and materials could only be 3-D printed or
                  salvaged from existing wares. A car’s windshield wiper motor
                  became key feature of one of the designs, so was a museli jar.
                  Thanks to the support of Auroville’s Working Committee, passes
                  were eventually obtained to enable essential materials
                  movement and very importantly, for essential visits by medical
                  experts who are core members of this collaboration.
                </p>
              </Timeline.Item>
              <Timeline.Item color="#ffd700">
                <p style={{ marginBottom: 22 }}>
                  <strong>
                    An air-purifier on the side...
                    <br />
                    <small style={{ display: 'block', marginTop: -5 }}>
                      middle of April, 2020
                    </small>
                  </strong>
                </p>
                <p>
                  Another idea emerged, that of creating an affordable and
                  negative-ion air-purifier – the size of a tissue box – that
                  could be deployed in hospitals and homes. A team-person
                  expressed that he would be able to create such a device. The
                  device would use high voltage to ionise (electrically charge)
                  air molecules, and coupled with electrostatically positively
                  charged collector plates, such a device could be used to lower
                  (and ideally eliminate) airborne viral infections. And thus
                  emerged the{' '}
                  <strong>
                    <Link to="/box-purifier">Box Purifier.</Link>
                  </strong>
                </p>
              </Timeline.Item>
              <Timeline.Item color="#ffd700">
                <p style={{ marginBottom: 22 }}>
                  <strong>
                    A month since we started...
                    <br />
                    <small style={{ display: 'block', marginTop: -5 }}>
                      first week of May, 2020
                    </small>
                  </strong>
                </p>
                <p>
                  ...we have the first working prototypes of the{' '}
                  <Link to="/tusky">
                    <strong>Tusky Ventilator</strong>
                  </Link>{' '}
                  and the{' '}
                  <Link to="/jasan">
                    <strong>JASAN Ventilator !</strong>
                  </Link>
                </p>
                <p>
                  We are collaborating with Dr. Hasan of Pondicherry Institue of
                  Medical Sciences, and we hope to start testing the prototypes
                  very soon (in the next one-two weeks). We foresee (and hope)
                  that we would have the first medically viable versions of both
                  these designs in the next twelve-sixteen weeks.
                </p>
                <p>
                  The <strong>Box Purifier</strong> is in design phase and there
                  is not yet a mature first prototype. We foresee (and again,
                  hope) that the first prototype will emerge in the next
                  two-three weeks.
                </p>
              </Timeline.Item>
              <Timeline.Item color="#ffd700">
                <p style={{ marginBottom: 22 }}>
                  <strong>
                    Creating this website
                    <br />
                    <small style={{ display: 'block', marginTop: -5 }}>
                      end of May, 2020
                    </small>
                  </strong>
                </p>
                <p>
                  Why we created this website – The first and most important
                  reason is that we wanted to share the project with others so
                  we're able to raise the funds that are needed for the project
                  to keep going.
                </p>
                <p>
                  Secondly, depending on the interest and feedback we get from
                  the broader community, this website and the small platform
                  that has spontaneously emerged can support, document and
                  enable not just these two ventilator projects, but also
                  projects of a similar nature that emerge from a spirit of
                  service, and which intended to similarly offer something for
                  the common good.
                </p>
                <p>
                  Lastly, these efforts leave an interesting precedent for the
                  future. There can emerge a project and a platform in Auroville
                  that works to invent, design and prototype machines for the
                  common good. Ideas could be submitted to the platform, and
                  looking at the pool of available skills and expertise in the
                  Auroville community, an idea may or may not be accepted. Once
                  accepted, the idea could be crowd-funded. The design that
                  comes as a result could be offered as a gift or a service from
                  Auroville to the world. The design may or may not be offered
                  open-source, that is upto the creators of the prototype. It is
                  left to the broader community to reflect if this is a good
                  idea. We have created this website with comprehensive
                  documentation to share with Auroville that such an idea maybe
                  possible. For the moment we have no intention of pursuing
                  this, and we will continue with the three prototype designs we
                  have.
                </p>
              </Timeline.Item>
              <Timeline.Item color="#ffd700">
                <p style={{ marginBottom: 22 }}>
                  <strong>
                    Beyond COVID-19
                    <br />
                    <small style={{ display: 'block', marginTop: -5 }}>
                      end of May, 2020
                    </small>
                  </strong>
                </p>
                <p>
                  In late March 2020, things started looking pretty grim, and
                  severe ventilator shortages were being predicted around the
                  world. At this time multiple teams (like this team here in
                  Auroville) started exploring how to fill the predicted
                  short-fall in ventilators.
                </p>
                <p>
                  Thankfully, in late May 2020, it now appears that strong
                  public health measures have slowed the pandemic faster than
                  most had predicted. Therefore, it thankfully appears unlikely
                  that there will be an actual need of emergency ventilators.
                  While the urgent need appears to have evaporated, the work
                  that has been done can still add a lot of value in the future.
                </p>
                <p>
                  Good quality, high performance ventilators can and will save
                  lives. By implementing the best design, and executing this
                  project fully we can offer under-resourced health services in
                  India and elsewhere access to high-quality, robust and
                  powerful ventilators at a greatly reduced cost.
                </p>
              </Timeline.Item>
              <Timeline.Item color="#ffd700">
                <p style={{ marginBottom: 22 }}>
                  <strong>
                    Future directions
                    <br />
                    <small style={{ display: 'block', marginTop: -5 }}>
                      first week of June, 2020
                    </small>
                  </strong>
                </p>
                <p>
                  The challenge right now is to fully execute and follow the
                  project through. The next "big" step for each of the
                  prototypes would be to have a medically viable device, and
                  then to undergo and pass tests. Once that is achieved we would
                  then need to start the certifications process with ICMR.
                </p>
                <p style={{ marginBottom: 0 }}>
                  We will keep on posting updates in this space as the project
                  unfolds.
                </p>
              </Timeline.Item>
              <Timeline.Item color="#ffd700">
                <p style={{ marginBottom: 22 }}>
                  <strong>
                    Meet Tusky and JASAN
                    <br />
                    <small style={{ display: 'block', marginTop: -5 }}>
                      month of July, 2020
                    </small>
                  </strong>
                </p>
                <Video
                  className="mask-p"
                  ratio={0.54999261}
                  url="https://vimeo.com/426941888"
                  style={{ background: 'unset' }}
                />
                <Video
                  className="mask-p"
                  ratio={0.54999261}
                  url="https://vimeo.com/426934352"
                  style={{ background: 'unset' }}
                />
              </Timeline.Item>
              <Timeline.Item color="#ffd700">
                <p style={{ marginBottom: 22 }}>
                  <strong>
                    In Media
                    <br />
                    <small style={{ display: 'block', marginTop: -5 }}>
                      months of July and August, 2020
                    </small>
                  </strong>
                </p>
                <p>
                  •&nbsp;
                  <Link to="https://www.auroville.org/contents/5050">
                    "Breathing easier: Aurovilians building ventilators"
                  </Link>
                  <br />
                  •&nbsp;
                  <Link to="https://www.thehindu.com/news/national/tamil-nadu/auroville-team-designs-low-cost-ventilator-prototype/article31928633.ece">
                    "Auroville team designs low-cost ventilator prototype"
                  </Link>
                  <br />
                  •&nbsp;
                  <Link to="http://cms.newindianexpress.com/good-news/2020/jun/24/covid-19-auroville-engineers-in-collaboration-with-pims-develop-low-cost-ventilators-2160909.html">
                    "COVID-19: Auroville engineers in collaboration with PIMS
                    develop low cost ventilators"
                  </Link>
                  <br />
                  •&nbsp;
                  <Link to="https://www.inkl.com/news/auroville-team-designs-low-cost-ventilator-prototype">
                    "Auroville team designs low-cost ventilator prototype"
                  </Link>
                </p>
              </Timeline.Item>
              <Timeline.Item color="#ffd700">
                <p style={{ marginBottom: 22 }}>
                  <strong>
                    Bringing it together...
                    <br />
                    <small style={{ display: 'block', marginTop: -5 }}>
                      month of September, 2020
                    </small>
                  </strong>
                </p>
                <p>
                  We're happy to report that it's been six months since this
                  project came about, and Tusky and JASAN have recently signed
                  agreements with an incubator and a commercial partner
                  respectively to take the project forward.
                </p>
                <p>This is how Tusky looks right now –</p>
                <Gallery images={images2} />
                <p>And, an update from JASAN in September –</p>
                <Gallery images={images1} />
              </Timeline.Item>
              <Timeline.Item color="#ffd700">
                <p style={{ marginBottom: 22 }}>
                  <strong>
                    Status update
                    <br />
                    <small style={{ display: 'block', marginTop: -5 }}>
                      month of June, 2021
                    </small>
                  </strong>
                </p>
                <p>
                  <strong>JASAN</strong>: The first set of JASAN prototypes are
                  ready and lab testing is underway, and will happen over the
                  next couple of months. It may take at least six more months
                  for mass production to commence.
                </p>
                <p style={{ marginBottom: 0 }}>
                  <strong>Tusky</strong>: The Tusky ventilator is in late-stage
                  R&D in collaboration with an incubator. The team has been
                  seeking funding to take the project to the next milestone of
                  making prototypes for medical testing.
                </p>
              </Timeline.Item>
            </Timeline>
          </div>
        </StandardPage>
      </ConfigProvider>
    )
  }
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
