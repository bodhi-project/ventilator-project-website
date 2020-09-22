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

import InfoIcon from 'react-feather/dist/icons/info'
import CheckCircleIcon from 'react-feather/dist/icons/check-circle'
import XCircleIcon from 'react-feather/dist/icons/x-circle'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../../components/Link'
import StandardPage from '../../components/wrappers/StandardPage'

import '../../styles/tooltip.less'

import seoHelper from '../../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React
const { TabPane } = Tabs
const pageData = {
  pageTitle: 'Box Purifier',
  nakedPageSlug: 'box-purifier',
  pageAbstract: 'Coming soon.',
}

const seoData = seoHelper(pageData)

const columns = [
  {
    title: 'Parameter',
    dataIndex: 'parameter',
    key: 'parameter',
    width: '25%',
  },
  {
    title: 'Minimum Required Setting/Value/Range',
    dataIndex: 'required',
    key: 'required',
    width: '55%',
  },
  {
    title: 'v1',
    dataIndex: 'v1',
    key: 'v1',
    width: '10%',
  },
  {
    title: 'v2',
    key: 'v2',
    dataIndex: 'v2',
    width: '10%',
  },
]

const data = [
  {
    key: '1',
    parameter: (
      <span className="mask-p">
        Modes&nbsp;
        <Tooltip
          title={
            <p>
              <small>Air volume pushed into lung</small>
            </p>
          }
        >
          <InfoIcon
            width={18}
            height={18}
            viewBox="0 0 26 26"
            fill="none"
            stroke="rgba(0, 0, 0, 0.65)"
            strokeWidth="3"
            style={{ verticalAlign: 'middle' }}
          />
        </Tooltip>
      </span>
    ),
    required: (
      <span className="mask-p">
        Volume Control Ventilation&nbsp;
        <Tooltip
          title={
            <p>
              <small>
                The system delivers a set volume with a uniform inspiratory flow
                rate, over a specified inspiratory time. The user sets a tidal
                volume and respiratory rate. The tidal volume is delivered
                during the inspiratory period.
              </small>
            </p>
          }
        >
          <InfoIcon
            width={18}
            height={18}
            viewBox="0 0 26 26"
            fill="none"
            stroke="rgba(0, 0, 0, 0.65)"
            strokeWidth="3"
            style={{ verticalAlign: 'middle' }}
          />
        </Tooltip>
        <hr
          style={{
            border: 'unset',
            borderTop: '1px solid rgba(0, 0, 0, 0.1234)',
            marginTop: 10,
            marginBottom: 8,
          }}
        />
        Assist Control&nbsp;
        <Tooltip
          title={
            <p>
              <small>
                The system detects airway pressure fluctuations, and supports
                patient-initiated breaths, and then recognizes and allows
                exhalation.
              </small>
            </p>
          }
        >
          <InfoIcon
            width={18}
            height={18}
            viewBox="0 0 26 26"
            fill="none"
            stroke="rgba(0, 0, 0, 0.65)"
            strokeWidth="3"
            style={{ verticalAlign: 'middle' }}
          />
        </Tooltip>
        <br />
        <small>Based on a trigger sensitivity</small>
      </span>
    ),
    v1: (
      <span className="mask-p">
        <CheckCircleIcon
          width={18}
          height={18}
          viewBox="0 0 26 26"
          fill="none"
          stroke="#008900"
          strokeWidth="3"
          style={{ verticalAlign: 'middle' }}
        />
        <hr
          style={{
            border: 'unset',
            borderTop: '1px solid rgba(0, 0, 0, 0.1234)',
            marginTop: 10,
            marginBottom: 8,
          }}
        />
        <XCircleIcon
          width={18}
          height={18}
          viewBox="0 0 26 26"
          fill="none"
          stroke="#670000"
          strokeWidth="3"
          style={{ verticalAlign: 'middle' }}
        />
        <br />
        &nbsp;
      </span>
    ),
    v2: (
      <span className="mask-p">
        <CheckCircleIcon
          width={18}
          height={18}
          viewBox="0 0 26 26"
          fill="none"
          stroke="#008900"
          strokeWidth="3"
          style={{ verticalAlign: 'middle' }}
        />
        <hr
          style={{
            border: 'unset',
            borderTop: '1px solid rgba(0, 0, 0, 0.1234)',
            marginTop: 10,
            marginBottom: 8,
          }}
        />
        <Tooltip
          title={
            <p>
              <small>Planned.</small>
            </p>
          }
        >
          <InfoIcon
            width={18}
            height={18}
            viewBox="0 0 26 26"
            fill="none"
            stroke="#e6c200"
            strokeWidth="3"
            style={{ verticalAlign: 'middle' }}
          />
        </Tooltip>
        <br />
        &nbsp;
      </span>
    ),
  },
  {
    key: '2',
    parameter: (
      <span className="mask-p">
        Tidal Volume (TV)&nbsp;
        <Tooltip
          title={
            <p>
              <small>
                Air delivered to the patient, or air volume pushed into lung. In
                Acute Respiratory Distress Syndrome (ARDS), patients’ tidal
                volumes are kept between 4 to 8 cc/kg.
              </small>
            </p>
          }
        >
          <InfoIcon
            width={18}
            height={18}
            viewBox="0 0 26 26"
            fill="none"
            stroke="rgba(0, 0, 0, 0.65)"
            strokeWidth="3"
            style={{ verticalAlign: 'middle' }}
          />
        </Tooltip>
      </span>
    ),
    required: (
      <span className="mask-p">
        200 – 800 mL
        <br />
        <small>Must be adjustable</small>
      </span>
    ),
    v1: (
      <span className="mask-p">
        <CheckCircleIcon
          width={18}
          height={18}
          viewBox="0 0 26 26"
          fill="none"
          stroke="#008900"
          strokeWidth="3"
          style={{ verticalAlign: 'middle' }}
        />
      </span>
    ),
    v2: (
      <span className="mask-p">
        <CheckCircleIcon
          width={18}
          height={18}
          viewBox="0 0 26 26"
          fill="none"
          stroke="#008900"
          strokeWidth="3"
          style={{ verticalAlign: 'middle' }}
        />
      </span>
    ),
  },
  {
    key: '3',
    parameter: (
      <span className="mask-p">
        Respiratory Rate (RR)&nbsp;
        <Tooltip
          title={
            <p>
              <small>Air volume pushed into lung</small>
            </p>
          }
        >
          <InfoIcon
            width={18}
            height={18}
            viewBox="0 0 26 26"
            fill="none"
            stroke="rgba(0, 0, 0, 0.65)"
            strokeWidth="3"
            style={{ verticalAlign: 'middle' }}
          />
        </Tooltip>
      </span>
    ),
    required: (
      <span className="mask-p">
        Between 6 – 40
        <br />
        <small>Must be adjustable</small>
      </span>
    ),
    v1: (
      <span className="mask-p">
        <Tooltip
          title={
            <p>
              <small>
                Adjustable through controlling the RPM of the motor that
                actuates the AMBU bag.
              </small>
            </p>
          }
        >
          <InfoIcon
            width={18}
            height={18}
            viewBox="0 0 26 26"
            fill="none"
            stroke="#e6c200"
            strokeWidth="3"
            style={{ verticalAlign: 'middle' }}
          />
        </Tooltip>
      </span>
    ),
    v2: (
      <span className="mask-p">
        <Tooltip
          title={
            <p>
              <small>
                Adjustable through controlling the RPM of the motor that
                actuates the AMBU bag.
              </small>
            </p>
          }
        >
          <InfoIcon
            width={18}
            height={18}
            viewBox="0 0 26 26"
            fill="none"
            stroke="#e6c200"
            strokeWidth="3"
            style={{ verticalAlign: 'middle' }}
          />
        </Tooltip>
      </span>
    ),
  },
  {
    key: '3',
    parameter: (
      <span className="mask-p">
        PEEP&nbsp;
        <Tooltip
          title={
            <p>
              <small>
                Positive end-expiratory pressure (PEEP) is applied in order to
                maintain an ‘open lung’ and prevent alveolar collapse.
              </small>
            </p>
          }
        >
          <InfoIcon
            width={18}
            height={18}
            viewBox="0 0 26 26"
            fill="none"
            stroke="rgba(0, 0, 0, 0.65)"
            strokeWidth="3"
            style={{ verticalAlign: 'middle' }}
          />
        </Tooltip>
      </span>
    ),
    required: (
      <span className="mask-p">
        5–15 cm H2O
        <br />
        <small>Must be adjustable</small>
      </span>
    ),
    v1: (
      <span className="mask-p">
        <CheckCircleIcon
          width={18}
          height={18}
          viewBox="0 0 26 26"
          fill="none"
          stroke="#008900"
          strokeWidth="3"
          style={{ verticalAlign: 'middle' }}
        />
      </span>
    ),
    v2: (
      <span className="mask-p">
        <CheckCircleIcon
          width={18}
          height={18}
          viewBox="0 0 26 26"
          fill="none"
          stroke="#008900"
          strokeWidth="3"
          style={{ verticalAlign: 'middle' }}
        />
      </span>
    ),
  },
  {
    key: '3',
    parameter: (
      <span className="mask-p">
        Plateau Pressure&nbsp;
        <Tooltip
          title={
            <p>
              <small>
                The capability to perform an "end-inspiratory hold" for a
                programmable duration.
              </small>
            </p>
          }
        >
          <InfoIcon
            width={18}
            height={18}
            viewBox="0 0 26 26"
            fill="none"
            stroke="rgba(0, 0, 0, 0.65)"
            strokeWidth="3"
            style={{ verticalAlign: 'middle' }}
          />
        </Tooltip>
      </span>
    ),
    required: <span className="mask-p">Max 30 cm H2O</span>,
    v1: (
      <span className="mask-p">
        <XCircleIcon
          width={18}
          height={18}
          viewBox="0 0 26 26"
          fill="none"
          stroke="#670000"
          strokeWidth="3"
          style={{ verticalAlign: 'middle' }}
        />
      </span>
    ),
    v2: (
      <span className="mask-p">
        <Tooltip
          title={
            <p>
              <small>
                Not planned/being worked upon at the moment. The second
                iteration of the system may or may not include the option to
                control Plateau Pressure.
              </small>
            </p>
          }
        >
          <InfoIcon
            width={18}
            height={18}
            viewBox="0 0 26 26"
            fill="none"
            stroke="#e6c200"
            strokeWidth="3"
            style={{ verticalAlign: 'middle' }}
          />
        </Tooltip>
      </span>
    ),
  },
  {
    key: '3',
    parameter: (
      <span className="mask-p">
        Max Pressure&nbsp;
        <Tooltip
          title={
            <p>
              <small>
                The capability to perform an "end-inspiratory hold" for a
                programmable duration.
              </small>
            </p>
          }
        >
          <InfoIcon
            width={18}
            height={18}
            viewBox="0 0 26 26"
            fill="none"
            stroke="rgba(0, 0, 0, 0.65)"
            strokeWidth="3"
            style={{ verticalAlign: 'middle' }}
          />
        </Tooltip>
      </span>
    ),
    required: (
      <span className="mask-p">
        Max 40 cm H2O
        <br />
        <small>Passive mechanical blow-off valve recommended</small>
      </span>
    ),
    v1: (
      <span className="mask-p">
        <CheckCircleIcon
          width={18}
          height={18}
          viewBox="0 0 26 26"
          fill="none"
          stroke="#008900"
          strokeWidth="3"
          style={{ verticalAlign: 'middle' }}
        />
      </span>
    ),
    v2: (
      <span className="mask-p">
        <CheckCircleIcon
          width={18}
          height={18}
          viewBox="0 0 26 26"
          fill="none"
          stroke="#008900"
          strokeWidth="3"
          style={{ verticalAlign: 'middle' }}
        />
      </span>
    ),
  },
  {
    key: '3',
    parameter: (
      <span className="mask-p">
        I/E Ratio&nbsp;
        <Tooltip
          title={
            <p>
              <small>
                Inspiratory/expiration time ratio. In a single breath "cycle",
                the ratio of time spent breathing in (inspiratory) vs. exhaling
                (expiratory). More time is required to fully exhale and prevent
                over-inflation.
              </small>
            </p>
          }
        >
          <InfoIcon
            width={18}
            height={18}
            viewBox="0 0 26 26"
            fill="none"
            stroke="rgba(0, 0, 0, 0.65)"
            strokeWidth="3"
            style={{ verticalAlign: 'middle' }}
          />
        </Tooltip>
      </span>
    ),
    required: (
      <span className="mask-p">
        1:2
        <hr
          style={{
            border: 'unset',
            borderTop: '1px solid rgba(0, 0, 0, 0.1234)',
            marginTop: 10,
            marginBottom: 8,
          }}
        />
        Adjustable between range of 1:1 – 1:4
      </span>
    ),
    v1: (
      <span className="mask-p">
        <XCircleIcon
          width={18}
          height={18}
          viewBox="0 0 26 26"
          fill="none"
          stroke="#670000"
          strokeWidth="3"
          style={{ verticalAlign: 'middle' }}
        />
        <hr
          style={{
            border: 'unset',
            borderTop: '1px solid rgba(0, 0, 0, 0.1234)',
            marginTop: 10,
            marginBottom: 8,
          }}
        />
        <XCircleIcon
          width={18}
          height={18}
          viewBox="0 0 26 26"
          fill="none"
          stroke="#670000"
          strokeWidth="3"
          style={{ verticalAlign: 'middle' }}
        />
      </span>
    ),
    v2: (
      <span className="mask-p">
        <Tooltip
          title={
            <p>
              <small>Planned.</small>
            </p>
          }
        >
          <InfoIcon
            width={18}
            height={18}
            viewBox="0 0 26 26"
            fill="none"
            stroke="#e6c200"
            strokeWidth="3"
            style={{ verticalAlign: 'middle' }}
          />
        </Tooltip>
        <hr
          style={{
            border: 'unset',
            borderTop: '1px solid rgba(0, 0, 0, 0.1234)',
            marginTop: 10,
            marginBottom: 8,
          }}
        />
        <XCircleIcon
          width={18}
          height={18}
          viewBox="0 0 26 26"
          fill="none"
          stroke="#670000"
          strokeWidth="3"
          style={{ verticalAlign: 'middle' }}
        />
      </span>
    ),
  },
  {
    key: '3',
    parameter: <span className="mask-p">Inspired filtration</span>,
    required: (
      <span className="mask-p">
        Optional, recommended
        <br />
        <small>Must be in line</small>
      </span>
    ),
    v1: (
      <span className="mask-p">
        <Tooltip
          title={
            <p>
              <small>
                Possible through a standard, hospital-supplied HEPA Filter or a
                Thermovent HEPA Low Deadspace Heat and Moisture Exchange Filter.
              </small>
            </p>
          }
        >
          <InfoIcon
            width={18}
            height={18}
            viewBox="0 0 26 26"
            fill="none"
            stroke="#e6c200"
            strokeWidth="3"
            style={{ verticalAlign: 'middle' }}
          />
        </Tooltip>
      </span>
    ),
    v2: (
      <span className="mask-p">
        <Tooltip
          title={
            <p>
              <small>
                Possible through a standard, hospital-supplied HEPA Filter or a
                Thermovent HEPA Low Deadspace Heat and Moisture Exchange Filter.
              </small>
            </p>
          }
        >
          <InfoIcon
            width={18}
            height={18}
            viewBox="0 0 26 26"
            fill="none"
            stroke="#e6c200"
            strokeWidth="3"
            style={{ verticalAlign: 'middle' }}
          />
        </Tooltip>
      </span>
    ),
  },
  {
    key: '3',
    parameter: <span className="mask-p">Expired filtration</span>,
    required: (
      <span className="mask-p">
        Optional, recommended
        <br />
        <small>Must be in line</small>
        <br />
        <small>Required in COVID-19 cases because of nebulisation</small>
      </span>
    ),
    v1: (
      <span className="mask-p">
        <Tooltip
          title={
            <p>
              <small>
                Possible through a standard, hospital-supplied HEPA Filter or a
                Thermovent HEPA Low Deadspace Heat and Moisture Exchange Filter.
              </small>
            </p>
          }
        >
          <InfoIcon
            width={18}
            height={18}
            viewBox="0 0 26 26"
            fill="none"
            stroke="#e6c200"
            strokeWidth="3"
            style={{ verticalAlign: 'middle' }}
          />
        </Tooltip>
      </span>
    ),
    v2: (
      <span className="mask-p">
        <Tooltip
          title={
            <p>
              <small>
                Possible through a standard, hospital-supplied HEPA Filter or a
                Thermovent HEPA Low Deadspace Heat and Moisture Exchange Filter.
              </small>
            </p>
          }
        >
          <InfoIcon
            width={18}
            height={18}
            viewBox="0 0 26 26"
            fill="none"
            stroke="#e6c200"
            strokeWidth="3"
            style={{ verticalAlign: 'middle' }}
          />
        </Tooltip>
      </span>
    ),
  },
  {
    key: '3',
    parameter: <span className="mask-p">FiO2</span>,
    required: (
      <span className="mask-p">
        Optional, recommended
        <br />
        <small>30%-100%</small>
      </span>
    ),
    v1: (
      <span className="mask-p">
        <Tooltip
          title={
            <p>
              <small>Not available.</small>
            </p>
          }
        >
          <XCircleIcon
            width={18}
            height={18}
            viewBox="0 0 26 26"
            fill="none"
            stroke="#670000"
            strokeWidth="3"
            style={{ verticalAlign: 'middle' }}
          />
        </Tooltip>
      </span>
    ),
    v2: (
      <span className="mask-p">
        <Tooltip
          title={
            <p>
              <small>Not available.</small>
            </p>
          }
        >
          <XCircleIcon
            width={18}
            height={18}
            viewBox="0 0 26 26"
            fill="none"
            stroke="#670000"
            strokeWidth="3"
            style={{ verticalAlign: 'middle' }}
          />
        </Tooltip>
      </span>
    ),
  },
]

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    feature1: file(relativePath: { eq: "tusky/feature1.jpg" }) {
      ...max1500
    }
    p11: file(relativePath: { eq: "box-purifier/p1.jpg" }) {
      ...max1500
    }
    p12: file(relativePath: { eq: "box-purifier/p2.jpg" }) {
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
            <p>
              The Box Purifier is a room ionizer that removes microscopic
              particles from the air instead of using fans and filters, by
              generating negative ions and releasing those into the air.
            </p>
            <p>
              The device can purify air that could leave a room healthy
              especially for those suffering from allergies, respiratory
              ailments, asthma, or impaired immunity, without as many allergens
              flowing in the lungs. It can clean the ambiance of a room from
              industrial pollution, cigarette’s tobacco, dust, bacteria, viruse,
              and more.
            </p>
            <p>
              This device is being developled by two engineers with support from
              the Pondicherry Institute of Medical Sciences, and is in the last
              stages of development. We are also in talks with partners to take
              the machine forward.
            </p>
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
                    Little 3D printed component (last week of May, 2020)
                  </strong>
                </p>
                <div className="mask-p">
                  <GalleryX
                    data={this.props.data}
                    lookup="p1"
                    columns={{ min: 2, max: 2 }}
                    Img={Img}
                    Gallery={Gallery}
                    MediaQuery={MediaQuery}
                  />
                </div>
              </Timeline.Item>
            </Timeline>
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
