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
  pageTitle: 'JASAN Ventilator',
  nakedPageSlug: 'jasan',
  pageAbstract:
    'The JASAN ventilator is a cost-effective, compact, mechanised ventilator designed for both invasive and non-invasive ventilation of patients suffering from various illnesses.',
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
    width: '20%',
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
        Pressure Control Ventilation&nbsp;
        <Tooltip
          title={
            <p>
              <small>
                This mode is only acceptable if the tidal-volume delivered is
                clearly displayed and the user can set patient-specific upper
                and lower tidal-volume alarms to alert to the need to adjust the
                pressure.
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
        Pressure & Volume Control Ventilation&nbsp;
        <Tooltip
          title={
            <p>
              <small>
                The system delivers a set pressure for the period of inspiration
                and the volume achieved is measured and displayed.
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
        <Tooltip
          title={
            <p>
              <small>
                Tidal volume can set between 200 and 800 ml per breath
              </small>
            </p>
          }
        >
          <CheckCircleIcon
            width={18}
            height={18}
            viewBox="0 0 26 26"
            fill="none"
            stroke="#008900"
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
        <Tooltip
          title={
            <p>
              <small>Pressure can be set between 8 and 40 cmH2O</small>
            </p>
          }
        >
          <CheckCircleIcon
            width={18}
            height={18}
            viewBox="0 0 26 26"
            fill="none"
            stroke="#008900"
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
        <Tooltip
          title={
            <p>
              <small>
                Dispenses fixed volume at maximum pressure (user configured
                between 8 and 40 cmH20)
              </small>
            </p>
          }
        >
          <CheckCircleIcon
            width={18}
            height={18}
            viewBox="0 0 26 26"
            fill="none"
            stroke="#008900"
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
        <Tooltip
          title={
            <p>
              <small>
                Will detect a dip in patient circuit pressure and initiate a
                breath cycle <strong>ONLY</strong> during the idle expiratory
                phase
              </small>
            </p>
          }
        >
          <CheckCircleIcon
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
              <small>Between 10 and 24 breaths per minute</small>
            </p>
          }
        >
          <CheckCircleIcon
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
        <Tooltip
          title={
            <p>
              <small>Through external PEEP valve (5, 10, 15 cmH20)</small>
            </p>
          }
        >
          <CheckCircleIcon
            width={18}
            height={18}
            viewBox="0 0 26 26"
            fill="none"
            stroke="#008900"
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
        <Tooltip
          title={
            <p>
              <small>Can be set between 8 and 40 cmH20.</small>
            </p>
          }
        >
          <CheckCircleIcon
            width={18}
            height={18}
            viewBox="0 0 26 26"
            fill="none"
            stroke="#008900"
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
  },
  {
    key: '3',
    parameter: (
      <span className="mask-p">
        SpO2&nbsp;
        <Tooltip
          title={
            <p>
              <small>
                SpO2, also known as oxygen saturation, is a measure of the
                amount of oxygen-carrying hemoglobin in the blood relative to
                the amount of hemoglobin not carrying oxygen.
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
    required: <span className="mask-p">Optional</span>,
    v1: (
      <span className="mask-p">
        <Tooltip
          title={
            <p>
              <small>
                Pulse oximetry with alarms and display of SpO2 on screen – no
                need for external monitor.
              </small>
            </p>
          }
        >
          <CheckCircleIcon
            width={18}
            height={18}
            viewBox="0 0 26 26"
            fill="none"
            stroke="#008900"
            strokeWidth="3"
            style={{ verticalAlign: 'middle' }}
          />
        </Tooltip>
      </span>
    ),
  },
  {
    key: '3',
    parameter: <span className="mask-p">Monitoring</span>,
    required: (
      <span className="mask-p">
        Display
        <hr
          style={{
            border: 'unset',
            borderTop: '1px solid rgba(0, 0, 0, 0.1234)',
            marginTop: 10,
            marginBottom: 8,
          }}
        />
        Flow sensing/display
        <hr
          style={{
            border: 'unset',
            borderTop: '1px solid rgba(0, 0, 0, 0.1234)',
            marginTop: 10,
            marginBottom: 8,
          }}
        />
        Pressure sensing/display
      </span>
    ),
    v1: (
      <span className="mask-p">
        <Tooltip
          title={
            <p>
              <small>
                Through external LCD-TFT Display. Display apparatus connects to
                sensors in the machine via bluetooth. Optionally, an android
                application is available which allows controls at the push of a
                button.
              </small>
            </p>
          }
        >
          <CheckCircleIcon
            width={18}
            height={18}
            viewBox="0 0 26 26"
            fill="none"
            stroke="#008900"
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
        <Tooltip
          title={
            <p>
              <small>
                Venturi type differential sensor. Provides inspiratory and
                expiratory volumes.
              </small>
            </p>
          }
        >
          <CheckCircleIcon
            width={18}
            height={18}
            viewBox="0 0 26 26"
            fill="none"
            stroke="#008900"
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
        <Tooltip
          title={
            <p>
              <small>
                Can detect and display 0-60 cmH2O pressure range in patient
                circuit.
              </small>
            </p>
          }
        >
          <CheckCircleIcon
            width={18}
            height={18}
            viewBox="0 0 26 26"
            fill="none"
            stroke="#008900"
            strokeWidth="3"
            style={{ verticalAlign: 'middle' }}
          />
        </Tooltip>
      </span>
    ),
  },
  {
    key: '3',
    parameter: <span className="mask-p">Alarms</span>,
    required: (
      <span className="mask-p">
        Over-pressure&nbsp;
        <Tooltip
          title={
            <p>
              <small>Inspiratory airway pressure exceeded.</small>
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
        Under-pressure&nbsp;
        <Tooltip
          title={
            <p>
              <small>
                Inspiratory and PEEP pressure not achieved (equivalent to
                disconnection alarm).
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
    parameter: <span className="mask-p">Electricity supply</span>,
    required: (
      <span className="mask-p">
        Power consumption
        <hr
          style={{
            border: 'unset',
            borderTop: '1px solid rgba(0, 0, 0, 0.1234)',
            marginTop: 10,
            marginBottom: 8,
          }}
        />
        Battery backup
      </span>
    ),
    v1: (
      <span className="mask-p">
        &#60;40W
        <hr
          style={{
            border: 'unset',
            borderTop: '1px solid rgba(0, 0, 0, 0.1234)',
            marginTop: 10,
            marginBottom: 8,
          }}
        />
        2 hour run-time
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
              The JASAN ventilator is a cost-effective, compact, mechanised
              ventilator designed for both invasive and non-invasive ventilation
              of patients suffering from various illnesses. The idea was born
              during the early days of the COVID-19 pandemic.
            </p>
            <p>
              A team of five experts in different fields collaborated on this
              project with support from the Pondicherry Institute of Medical
              Sciences. Difficulties were faced at almost all levels, but
              primarily getting supplies and precision machining, making the
              work much harder!
            </p>
            <p>
              We're in Stage 2 at the moment &nbsp;(
              <Link to="/notes">read note on self-reporting</Link>). At the
              moment we have a working prototype, and we are collaborating with
              medical professionals to iterate until the prototype is medically
              worthy.
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
            <br />
            <br />
            <p>References and further reading:</p>
            <ul className="mask-p" style={{}}>
              <li>
                MIT E-Vent's&nbsp;
                <Link to="https://e-vent.mit.edu/clinical/">documentation</Link>
              </li>
              <li>
                UK's RMVS&nbsp;
                <Link to="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/876167/RMVS001_v3.1.pdf">
                  documentation
                </Link>
              </li>
              <li>ICMR's specifications</li>
            </ul>
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
                    Design update, controls (month of April, 2020)
                  </strong>
                </p>
                <p>
                  In terms of user interface, a rotary encoder knob with push
                  button is the only user interface available, along with a 4
                  inch TFT color display. The graphical UI displays important
                  parameters such as pressure and volume curves, peak pressure,
                  breathing rate and PEEP pressure.
                </p>
              </Timeline.Item>
              <Timeline.Item color="#00128B">
                <p>
                  <strong>
                    Design outline, the broad idea (month of April, 2020)
                  </strong>
                </p>
                <p>
                  A lot of thought went into making the design, attempting to
                  make something as compact as possible while ensuring the
                  features required for a life support system. An AMBU bag is
                  used as the air reservoir which is deflated using a
                  scissor-like mechanical arm powered by a stepper motor. This
                  allow for very high precision while deflating, thus ensuring
                  tidal volume control.
                </p>
                <p>
                  Additionally, the team spent time brainstorming on ways to
                  make the device easily cleanable in a hospital environment.
                  The electronics and hardware reside in the top part of the
                  enclosure, and the AMBU bag is suspended below. This unique
                  design differs from all the low cost AMBU bag respirators on
                  the market.
                </p>
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
