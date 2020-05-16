// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import Video from '@bodhi-project/components/lib/video'
import Gallery from 'react-photo-gallery'
import MediaQuery from 'react-responsive'
import GalleryX from '@bodhi-project/components/lib/gatsby/Gallery'

import Carousel from 'antd/lib/carousel'
import '@bodhi-project/antrd/lib/just-futura/4.1.4/carousel/style/css'

import Tooltip from 'antd/lib/tooltip'
import '@bodhi-project/antrd/lib/just-futura/4.1.4/tooltip/style/css'

import Tabs from 'antd/lib/tabs'
import '@bodhi-project/antrd/lib/just-futura/4.1.4/tabs/style/css'

import Table from 'antd/lib/table'
import '@bodhi-project/antrd/lib/just-futura/4.1.4/table/style/css'

import Tag from 'antd/lib/tag'
import '@bodhi-project/antrd/lib/just-futura/4.1.4/tag/style/css'

import Space from 'antd/lib/space'
import '@bodhi-project/antrd/lib/just-futura/4.1.4/space/style/css'

import Timeline from 'antd/lib/timeline'
import '@bodhi-project/antrd/lib/just-futura/4.1.4/timeline/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import StandardPage from '../../components/wrappers/StandardPage'

import seoHelper from '../../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React
const { TabPane } = Tabs
const pageData = {
  pageTitle: 'Blowfish Ventilator',
  nakedPageSlug: '/blowfish',
  pageAbstract:
    'Blowfish is a low-cost, low-tech, portable, mechanised, non-invasive resuscitator that automates the process of manual ventilation for patients in situations where not enough ventilators are available or in resource-constrained environments. The device may offer a chance of survival to patients who do not have access to a more sophisticated artificial ventilator due to shortage of supply or absence in remote areas.',
}

const seoData = seoHelper(pageData)

const columns = [
  {
    title: 'Parameter',
    dataIndex: 'parameter',
    key: 'parameter',
    width: '15%',
  },
  {
    title: 'Min. Required',
    dataIndex: 'required',
    key: 'required',
    width: '55%',
  },
  {
    title: 'Have?',
    dataIndex: 'have',
    key: 'have',
    width: '15%',
  },
  {
    title: 'Upcoming?',
    key: 'upcoming',
    dataIndex: 'upcoming',
    width: '15%',
  },
]

const data = [
  {
    key: '1',
    parameter: 'Modes',
    required: '...',
    have: '...',
    upcoming: '...',
  },
  {
    key: '2',
    parameter: 'Tidal Volume',
    required: '...',
    have: '...',
    upcoming: '...',
  },
  {
    key: '3',
    parameter: 'Modes',
    required: '...',
    have: '...',
    upcoming: '...',
  },
  {
    key: '3',
    parameter: 'Rate',
    required: '...',
    have: '...',
    upcoming: '...',
  },
  {
    key: '3',
    parameter: 'PEEP',
    required: '...',
    have: '...',
    upcoming: '...',
  },
  {
    key: '3',
    parameter: 'Plateau Pressure',
    required: '...',
    have: '...',
    upcoming: '...',
  },
  {
    key: '3',
    parameter: 'I/E Ratio',
    required: '...',
    have: '...',
    upcoming: '...',
  },
  {
    key: '3',
    parameter: 'Expired filtration',
    required: '...',
    have: '...',
    upcoming: '...',
  },
  {
    key: '3',
    parameter: 'Inspired filtration',
    required: '...',
    have: '...',
    upcoming: '...',
  },
  {
    key: '3',
    parameter: 'FiO2',
    required: '...',
    have: '...',
    upcoming: '...',
  },
  {
    key: '3',
    parameter: 'Assist Control',
    required: '...',
    have: '...',
    upcoming: '...',
  },
]

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    feature1: file(relativePath: { eq: "blowfish/feature1.jpg" }) {
      ...max1500
    }
    feature2: file(relativePath: { eq: "blowfish/feature2.jpg" }) {
      ...max1500
    }
    feature3: file(relativePath: { eq: "blowfish/feature3.jpg" }) {
      ...max1500
    }
    print1: file(relativePath: { eq: "blowfish/timeline/photo1.jpeg" }) {
      ...max900
    }
    print2: file(relativePath: { eq: "blowfish/timeline/photo2.jpeg" }) {
      ...max900
    }
    print3: file(relativePath: { eq: "blowfish/timeline/photo3.jpeg" }) {
      ...max900
    }
    oWorks1: file(relativePath: { eq: "blowfish/timeline/photo4.jpeg" }) {
      ...max900
    }
    oWorks2: file(relativePath: { eq: "blowfish/timeline/photo5.jpeg" }) {
      ...max900
    }
    print4: file(relativePath: { eq: "blowfish/timeline/photo6.jpeg" }) {
      ...max900
    }
    oWorks3: file(relativePath: { eq: "blowfish/timeline/photo7.jpeg" }) {
      ...max900
    }
    print5: file(relativePath: { eq: "blowfish/timeline/photo8.jpeg" }) {
      ...max900
    }
    oneWay1: file(relativePath: { eq: "blowfish/timeline/photo9.jpeg" }) {
      ...max900
    }
    oneWay2: file(relativePath: { eq: "blowfish/timeline/photo10.jpeg" }) {
      ...max900
    }
    photo11: file(relativePath: { eq: "blowfish/timeline/photo11.jpeg" }) {
      ...max900
    }
    photo12: file(relativePath: { eq: "blowfish/timeline/photo12.jpeg" }) {
      ...max900
    }
    photo13: file(relativePath: { eq: "blowfish/timeline/photo13.jpeg" }) {
      ...max900
    }
    photo14: file(relativePath: { eq: "blowfish/timeline/ren1.jpg" }) {
      ...max900
    }
    newRen4: file(relativePath: { eq: "blowfish/timeline/photo18.jpeg" }) {
      ...max900
    }
    newRen5: file(relativePath: { eq: "blowfish/timeline/photo19.jpeg" }) {
      ...max900
    }
    newRen6: file(relativePath: { eq: "blowfish/timeline/photo20.jpeg" }) {
      ...max900
    }
    newRen7: file(relativePath: { eq: "blowfish/timeline/photo21.jpeg" }) {
      ...max900
    }
    doc4: file(relativePath: { eq: "blowfish/timeline/photo25.jpeg" }) {
      ...max900
    }
    doc2: file(relativePath: { eq: "blowfish/timeline/photo23.jpeg" }) {
      ...max900
    }
    doc3: file(relativePath: { eq: "blowfish/timeline/photo24.jpeg" }) {
      ...max900
    }
    doc1: file(relativePath: { eq: "blowfish/timeline/photo22.jpeg" }) {
      ...max900
    }
    process: file(
      relativePath: { eq: "blowfish/FLOSSVentDevelopmentProcessv6.png" }
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
        <Tabs defaultActiveKey="1">
          <TabPane
            tab={
              <a href="#" className="mask-p" onClick={e => e.preventDefault()}>
                Design
              </a>
            }
            key="1"
          >
            <Carousel>
              <div className="feature">
                <Img fluid={this.props.data.feature1.childImageSharp.fluid} />
                <Tooltip
                  title={
                    <p style={{ marginBottom: 0 }}>
                      <strong>Chassis</strong>, built out of laser-cut acrylic
                      or aluminium, and includes multiple 3D printed components.
                      Measures ? X ? X ? inches (? x ? x ? mm) and weighes ? kg.
                    </p>
                  }
                >
                  <span className="tip tip1">&nbsp;</span>
                </Tooltip>
                <Tooltip
                  title={
                    <p>
                      <strong>Breath delivery</strong>, the ventilator delivers
                      breaths by compressing a conventional bag-valve mask with
                      a pivoting cam arm. Tidal volume is 300ml to 500ml. Next
                      iteration will allow 300ml to 800ml.
                    </p>
                  }
                >
                  <span className="tip tip2">&nbsp;</span>
                </Tooltip>
                <Tooltip
                  title={
                    <p>
                      <strong>Compression mechanism</strong>, log-shape CAM that
                      goes up-and-down. Next iteration will implement a CAM
                      design to implement proper breathing rhythm with
                      inspiration:expiration ratio of 1:2.
                    </p>
                  }
                >
                  <span className="tip tip3">&nbsp;</span>
                </Tooltip>
              </div>
              <div className="feature">
                <Img fluid={this.props.data.feature3.childImageSharp.fluid} />
                <Tooltip
                  title={
                    <p>
                      <strong>Motor</strong>, a standard Toyota 12V DC
                      windshield wiper motor to actuate the CAM.
                    </p>
                  }
                >
                  <span className="tip tip4">&nbsp;</span>
                </Tooltip>
              </div>
              <div className="feature">
                <Img fluid={this.props.data.feature2.childImageSharp.fluid} />
                <Tooltip
                  title={
                    <p>
                      <strong>RPM monitor</strong>, a free android and ios app
                      that reports the RPM with ±0.1 error. Can permanently
                      include a cheap mobile with the device, or bring a mobile
                      close each time the device needs adjustment.
                    </p>
                  }
                >
                  <span className="tip tip5">&nbsp;</span>
                </Tooltip>
              </div>
            </Carousel>
            <p>
              Blowfish is a low-cost, low-tech, portable, mechanised,
              non-invasive resuscitator that automates the process of manual
              ventilation for patients in situations where not enough
              ventilators are available or in resource-constrained environments.
              The device may offer a chance of survival to patients who do not
              have access to a more sophisticated artificial ventilator due to
              shortage of supply or absence in remote areas.
            </p>
            <p>
              Developed by a group of individuals from Auroville, with the
              support of the Pondicherry Institute of Medical Sciences.
            </p>
            <p>
              These devices have not yet recieved approvals or licenses. At the
              moment we have a working prototype, and we are collaborating with
              medical professionals to iterate until the prototype is medically
              worthy. ahead.
            </p>
          </TabPane>
          <TabPane
            tab={
              <a href="#" className="mask-p" onClick={e => e.preventDefault()}>
                Project Status
              </a>
            }
            key="6"
          >
            <p>
              As per the following algorithm proposed by the Public invention
              group...
            </p>
            <div style={{ maxWidth: '35rem' }} className="margin-p feature">
              <Img fluid={this.props.data.process.childImageSharp.fluid} />
            </div>
            <p>
              ... we are fluctuating between Steps 3 and 6 at the moment. If
              we're progressing at the rate we're progressing, we anticipate to
              be solidly established in steps 6 and 7 in around 4-6 weeks.
            </p>
          </TabPane>
          <TabPane
            tab={
              <a href="#" className="mask-p" onClick={e => e.preventDefault()}>
                Specs.
              </a>
            }
            key="3"
          >
            <Table columns={columns} dataSource={data} pagination={false} />
          </TabPane>
          <TabPane
            tab={
              <a href="#" className="mask-p" onClick={e => e.preventDefault()}>
                Tests
              </a>
            }
            key="12"
          >
            <p>
              There is a considerable amount of future work required to move
              this prototype design up to a level considered medically-viable,
              and even further work needed to reach medical-grade status. At the
              moment of writing this document, the engineering teams from
              Auroville are collaborating with Dr. Karnam Hasan of PIMS
              (Pondicherry Institute of Medical Sciences) and a bio-medical
              device engineers with whom the device is being / will be tested
              comprehensively and iterated as necessary.
            </p>
          </TabPane>
          <TabPane
            tab={
              <a href="#" className="mask-p" onClick={e => e.preventDefault()}>
                Videos
              </a>
            }
            key="2"
          >
            <Tabs defaultActiveKey="11" tabPosition="right">
              <TabPane
                key="11"
                tab={
                  <a
                    href="#"
                    className="mask-p"
                    onClick={e => e.preventDefault()}
                  >
                    Demo
                    <br />
                    <small>A walkthrough of the machine in operation</small>
                  </a>
                }
              >
                <div style={{ maxWidth: '45rem' }} className="margin-p">
                  <Video url="https://www.youtube.com/watch?v=cn9cSBCQ5BA" />
                </div>
              </TabPane>
              <TabPane
                key="12"
                tab={
                  <a
                    href="#"
                    className="mask-p"
                    onClick={e => e.preventDefault()}
                  >
                    Ventilation Modes
                    <br />
                    <small>Volume controlled ventilation</small>
                  </a>
                }
              >
                <div style={{ maxWidth: '45rem' }} className="margin-p">
                  <Video url="https://www.youtube.com/watch?v=hVYcsUnKByk" />
                </div>
              </TabPane>
              <TabPane
                key="13"
                tab={
                  <a
                    href="#"
                    className="mask-p"
                    onClick={e => e.preventDefault()}
                  >
                    Controls
                    <br />
                    <small>Controlling pressure and breath rate</small>
                  </a>
                }
              >
                <div style={{ maxWidth: '45rem' }} className="margin-p">
                  <Video url="https://www.youtube.com/watch?v=cuCqn07EOKk" />
                </div>
              </TabPane>
              <TabPane
                key="14"
                tab={
                  <a
                    href="#"
                    className="mask-p"
                    onClick={e => e.preventDefault()}
                  >
                    Filtration
                    <br />
                    <small>Air filtration options</small>
                  </a>
                }
              >
                <div style={{ maxWidth: '45rem' }} className="margin-p">
                  <Video url="https://www.youtube.com/watch?v=uDd3iupKUyI" />
                </div>
              </TabPane>
              <TabPane
                key="15"
                tab={
                  <a
                    href="#"
                    className="mask-p"
                    onClick={e => e.preventDefault()}
                  >
                    Infection Control
                    <br />
                    <small>Infection control for the machine</small>
                  </a>
                }
              >
                <div style={{ maxWidth: '45rem' }} className="margin-p">
                  <Video url="https://www.youtube.com/watch?v=luM6oeCM7Yw" />
                </div>
              </TabPane>
              <TabPane
                key="16"
                tab={
                  <a
                    href="#"
                    className="mask-p"
                    onClick={e => e.preventDefault()}
                  >
                    Monitoring and Alarms
                    <br />
                    <small>Monitoring and alarm systems</small>
                  </a>
                }
              >
                <div style={{ maxWidth: '45rem' }} className="margin-p">
                  <Video url="https://www.youtube.com/watch?v=0Bhiy0797qo" />
                </div>
              </TabPane>
              <TabPane
                key="17"
                tab={
                  <a
                    href="#"
                    className="mask-p"
                    onClick={e => e.preventDefault()}
                  >
                    Biological Safety
                    <br />
                    <small>Materials used and safety considerations</small>
                  </a>
                }
              >
                <div style={{ maxWidth: '45rem' }} className="margin-p">
                  <Video url="https://www.youtube.com/watch?v=L3b-FB_2-nk" />
                </div>
              </TabPane>
            </Tabs>
          </TabPane>
          <TabPane
            tab={
              <a href="#" className="mask-p" onClick={e => e.preventDefault()}>
                Timeline
              </a>
            }
            key="4"
          >
            <Timeline>
              <Timeline.Item color="#ffd700">
                <p>
                  <strong>
                    First renderings of Blowfish v1 (first week of May, 2020)
                  </strong>
                </p>
                <div className="mask-p">
                  <GalleryX
                    data={this.props.data}
                    lookup="newRen"
                    columns={{ min: 3, max: 3 }}
                    Img={Img}
                    Gallery={Gallery}
                    MediaQuery={MediaQuery}
                  />
                </div>
              </Timeline.Item>
              <Timeline.Item color="#0000ff">
                <p>
                  <strong>
                    A different design emerges (third week of April, 2020)
                  </strong>
                </p>
              </Timeline.Item>
              <Timeline.Item color="#ffd700">
                <p>
                  <strong>
                    A smart 3D one-way non-return valve (third week of April,
                    2020)
                  </strong>
                </p>
                <div className="mask-p">
                  <GalleryX
                    data={this.props.data}
                    lookup="oneWay"
                    columns={{ min: 2, max: 2 }}
                    Img={Img}
                    Gallery={Gallery}
                    MediaQuery={MediaQuery}
                  />
                </div>
              </Timeline.Item>
              <Timeline.Item color="#0000ff">
                <p>
                  <strong>
                    Collaboration with Dr. Hasan of PIMS emerges (second week of
                    April, 2020)
                  </strong>
                </p>
                <div className="mask-p">
                  <GalleryX
                    data={this.props.data}
                    lookup="doc"
                    columns={{ min: 2, max: 2 }}
                    Img={Img}
                    Gallery={Gallery}
                    MediaQuery={MediaQuery}
                  />
                </div>
              </Timeline.Item>
              <Timeline.Item color="#ffd700">
                <p>
                  <strong>
                    We get a working model of OXYGen (first week of April, 2020)
                  </strong>
                </p>
                <div className="mask-p">
                  <GalleryX
                    data={this.props.data}
                    lookup="oWorks"
                    columns={{ min: 3, max: 3 }}
                    Img={Img}
                    Gallery={Gallery}
                    MediaQuery={MediaQuery}
                  />
                </div>
              </Timeline.Item>
              <Timeline.Item color="#0000ff">
                <p>
                  <strong>
                    Starting out, laser-cutting the OXYGen Ventilator (fourth
                    week of March, 2020)
                  </strong>
                </p>
                <div className="mask-p">
                  <GalleryX
                    data={this.props.data}
                    lookup="print"
                    columns={{ min: 3, max: 3 }}
                    Img={Img}
                    Gallery={Gallery}
                    MediaQuery={MediaQuery}
                  />
                </div>
              </Timeline.Item>
            </Timeline>
          </TabPane>
          <TabPane
            tab={
              <a href="#" className="mask-p" onClick={e => e.preventDefault()}>
                Downloads
              </a>
            }
            key="5"
          >
            <p style={{ color: 'maroon' }}>
              <big>
                Warning: Blowfish is an expermiental design. It is not a medical
                device, and it does not have any licenses at the moment. Never
                use Blowfish without medical supervision.
              </big>
            </p>
            <p>
              We intend Blowfish to be an Open Source Hardware Project. Anyone
              can download it for free, or contribute to its modifications or
              improvements. We will put up files and other documents here for
              you to explore and download after the relevant approvals.
            </p>
          </TabPane>
        </Tabs>
      </StandardPage>
    )
  }
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
