// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import Video from '@bodhi-project/components/lib/video'
import '@bodhi-project/components/lib/video/style.less'

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

import Division from '@bodhi-project/components/lib/division'
import '@bodhi-project/antrd/lib/just-futura/4.1.4/row/style/css'
import '@bodhi-project/antrd/lib/just-futura/4.1.4/col/style/css'

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

const columns2 = [
  {
    title: 'SN',
    dataIndex: 'sn',
    key: 'sn',
    width: '3%',
  },
  {
    title: 'Parameter required (and acceptable deviation/s)',
    dataIndex: 'parameter',
    key: 'parameter',
    width: '67%',
  },
  {
    title: 'Essential (desirable)',
    dataIndex: 'required',
    key: 'required',
    width: '30%',
  },
]

const columns3 = [
  {
    title: 'SN',
    dataIndex: 'sn',
    key: 'sn',
    width: '3%',
  },
  {
    title: 'Parameter required (and acceptable deviation/s)',
    dataIndex: 'parameter',
    key: 'parameter',
    width: '57%',
  },
  {
    title: 'Essential (desirable)',
    dataIndex: 'required',
    key: 'required',
    width: '25%',
  },
  {
    title: 'Implemented',
    dataIndex: 'implemented',
    key: 'implemented',
    width: '14%',
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
              <small>Pressure can be set between 8 and 40cmH2O</small>
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
                between 8 and 40cmH20)
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
        5–15cm H2O
        <br />
        <small>Must be adjustable</small>
      </span>
    ),
    v1: (
      <span className="mask-p">
        <Tooltip
          title={
            <p>
              <small>Through external PEEP valve (5, 10, 15cmH20)</small>
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
    required: <span className="mask-p">Max 30cm H2O</span>,
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
        Max 40cm H2O
        <br />
        <small>Passive mechanical blow-off valve recommended</small>
      </span>
    ),
    v1: (
      <span className="mask-p">
        <Tooltip
          title={
            <p>
              <small>Can be set between 8 and 40cmH20.</small>
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
                Can detect and display 0-60cmH2O pressure range in patient
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

const data2 = [
  {
    key: '1',
    sn: <span className="mask-p">a</span>,
    parameter: (
      <span className="mask-p">
        The machine should be turbine/compressor based because the installation
        sites might not have central Oxygen Lines
      </span>
    ),
    required: <span className="mask-p">Yes</span>,
  },
  {
    key: '2',
    sn: <span className="mask-p">b</span>,
    parameter: (
      <span className="mask-p">
        The machine should have Invasive, Non-Invasive and CPAP features to make
        them versatile
        <br />
        <small>
          <strong>Acceptable deviation:</strong> Pressure support ventilation
          mode available can be used in place of CPAP & BPAP
        </small>
      </span>
    ),
    required: <span className="mask-p">Yes</span>,
  },
  {
    key: '3',
    sn: <span className="mask-p">c</span>,
    parameter: (
      <span className="mask-p">
        200-600 mL tidal volume, Lung Mechanics Display
      </span>
    ),
    required: <span className="mask-p">Yes</span>,
  },
  {
    key: '4',
    sn: <span className="mask-p">d</span>,
    parameter: (
      <span className="mask-p">
        Monitoring of, plateau Pressure, PEEP, PS, oxygen Concentration, Lung
        mechanics /inverse ratio(I:E)
      </span>
    ),
    required: <span className="mask-p">Yes</span>,
  },
  {
    key: '5',
    sn: <span className="mask-p">e</span>,
    parameter: <span className="mask-p">Pressure & Volume control , PSV</span>,
    required: <span className="mask-p">Yes</span>,
  },
  {
    key: '6',
    sn: <span className="mask-p">f</span>,
    parameter: (
      <span className="mask-p">Continuous working capability for 4-5 days</span>
    ),
    required: <span className="mask-p">Yes</span>,
  },
  {
    key: '7',
    sn: <span className="mask-p">g</span>,
    parameter: (
      <span className="mask-p">
        FiO2 manipulation b/w 21-100 % is essential
      </span>
    ),
    required: <span className="mask-p">Yes</span>,
  },
  {
    key: '8',
    sn: <span className="mask-p">h</span>,
    parameter: <span className="mask-p">PEEP upto 30</span>,
    required: <span className="mask-p">Yes</span>,
  },
  {
    key: '9',
    sn: <span className="mask-p">i</span>,
    parameter: (
      <span className="mask-p">
        FiO2 delivery should be independent of the flow rate PEEP and the minute
        volume. FiO2 delivery to the patient can't be made dependant on other
        factors. Every patient has a different lungs dynamics and can't be
        delivered gases at the same settings.
      </span>
    ),
    required: <span className="mask-p">Yes</span>,
  },
  {
    key: '10',
    sn: <span className="mask-p">j</span>,
    parameter: (
      <span className="mask-p">
        FiO2 delivery should be independent of the flow rate PEEP and the minute
        volume. FiO2 delivery to the patient can't be made dependant on other
        factors. Every patient has a different lungs dynamics and can't be
        delivered gases at the same settings.
      </span>
    ),
    required: <span className="mask-p">Yes</span>,
  },
]

const data3 = [
  {
    key: '1',
    sn: <span className="mask-p">1</span>,
    parameter: (
      <span className="mask-p">
        The ventilator should be microprocessor based with active exhalation
        valve.
      </span>
    ),
    required: <span className="mask-p">Yes</span>,
    implemented: <span className="mask-p">Yes</span>,
  },
  {
    key: '2',
    sn: <span className="mask-p">2</span>,
    parameter: (
      <span className="mask-p">
        The ventilator should be turbine based/ run on compressor. The
        compressor (if available) should be stand alone and from the same
        manufacturer with price quoted separately
        <br />
        <small>
          <strong>Acceptable deviation:</strong> Compressor of different make
          also accepted. However, supplier should take responsibility of the
          functioning of the both compressor & ventilator
        </small>
      </span>
    ),
    required: <span className="mask-p">Yes</span>,
  },
  {
    key: '3',
    sn: <span className="mask-p">3</span>,
    parameter: (
      <span className="mask-p">
        Suitable for use in ICU for Adult, Pediatric patients
      </span>
    ),
    required: <span className="mask-p">Yes</span>,
    implemented: <span className="mask-p">Partial</span>,
  },
  {
    key: '4',
    sn: <span className="mask-p">4</span>,
    parameter: (
      <span className="mask-p">
        Should undergo automatic calibration system on start-up.
        <br />
        <small>
          <strong>Acceptable deviation:</strong> Self-declaration acceptable
        </small>
      </span>
    ),
    required: <span className="mask-p">Yes</span>,
  },
  {
    key: '5',
    sn: <span className="mask-p">5</span>,
    parameter: (
      <span className="mask-p">
        It should have in-built programmable ultrasonic nebulizer/ external
        nebuliser
      </span>
    ),
    required: <span className="mask-p">Yes</span>,
    implemented: (
      <span className="mask-p">
        Partial
        <br />
        (can connect external nebuliser to the circuit)
      </span>
    ),
  },
  {
    key: '6',
    sn: <span className="mask-p">6</span>,
    parameter: <span className="mask-p">Screen Size</span>,
    required: (
      <span className="mask-p">
        6.5in or more
        <br />
        <small>
          <strong>Desirable:</strong> 10in or more
        </small>
      </span>
    ),
    implemented: <span className="mask-p">Partial</span>,
  },
  {
    key: '7',
    sn: <span className="mask-p">7</span>,
    parameter: (
      <span className="mask-p">
        Modes available
        <br />
        <small>
          <strong>Acceptable deviation:</strong> Pressure support ventilation
          mode available can be used in place of CPAP & BPAP
        </small>
      </span>
    ),
    required: (
      <span className="mask-p">
        PC-CMV, PC-SIMV, PSV, VC-SIMV, VC-CMV, PRVC, ACV, CPAP, BPAP
        <br />
        <small>
          <strong>Desirable:</strong> APRV, Bi-phasic ventilation, Auto-weaning
          modes
        </small>
      </span>
    ),
    implemented: <span className="mask-p">VC-CMV, PC-CMV, ACV (partial)</span>,
  },
  {
    key: '8',
    sn: <span className="mask-p">8</span>,
    parameter: (
      <span className="mask-p">
        <strong>Ventilator settings –</strong>
      </span>
    ),
    required: <span className="mask-p">&nbsp;</span>,
  },
  {
    key: '81',
    sn: <span className="mask-p">8.1</span>,
    parameter: <span className="mask-p">Peak Pressure</span>,
    required: <span className="mask-p">60cmH20</span>,
    implemented: <span className="mask-p">40cmH20</span>,
  },
  {
    key: '82',
    sn: <span className="mask-p">8.2</span>,
    parameter: <span className="mask-p">Peak Respiratory rate</span>,
    required: <span className="mask-p">60 breaths per minute</span>,
    implemented: <span className="mask-p">10-24 breaths per minute</span>,
  },
  {
    key: '83',
    sn: <span className="mask-p">8.3</span>,
    parameter: <span className="mask-p">Inspiratory time</span>,
    required: (
      <span className="mask-p">
        At least 0.3 -2.5 seconds
        <br />
        <small>
          <strong>Desirable:</strong> 0.3-5 sec
        </small>
      </span>
    ),
    implemented: <span className="mask-p">Partial</span>,
  },
  {
    key: '84',
    sn: <span className="mask-p">8.4</span>,
    parameter: (
      <span className="mask-p">
        Tidal Volume
        <br />
        <small>
          <strong>Acceptable deviation:</strong> 200-600mL as per ETF acceptable
        </small>
      </span>
    ),
    required: <span className="mask-p">50 to 2000ml</span>,
    implemented: <span className="mask-p">200 to 800ml</span>,
  },
  {
    key: '85',
    sn: <span className="mask-p">8.5</span>,
    parameter: (
      <span className="mask-p">
        Peak Flow rate
        <br />
        <small>
          <strong>Acceptable deviation:</strong> 150 LPM (+/-10%) or above
          acceptable
        </small>
      </span>
    ),
    required: <span className="mask-p">240 litres per minute</span>,
    implemented: (
      <span className="mask-p">
        Yes
        <br />
        <small>(192 LPM)</small>
      </span>
    ),
  },
  {
    key: '86',
    sn: <span className="mask-p">8.6</span>,
    parameter: <span className="mask-p">PEEP</span>,
    required: (
      <span className="mask-p">0cmH2O to 30cmH2O (increments of 1cmH2O)</span>
    ),
    implemented: (
      <span className="mask-p">
        Yes{' '}
        <small>
          (through external peep valve attachments of 5, 10, or 15cmH20)
        </small>
      </span>
    ),
  },
  {
    key: '87',
    sn: <span className="mask-p">8.7</span>,
    parameter: (
      <span className="mask-p">
        Pressure Support
        <br />
        <small>
          <strong>Acceptable deviation:</strong> 5-40cm H2O acceptable
        </small>
      </span>
    ),
    required: <span className="mask-p">0-40cm H20</span>,
    implemented: <span className="mask-p">Yes</span>,
  },
  {
    key: '88',
    sn: <span className="mask-p">8.8</span>,
    parameter: <span className="mask-p">Inspiratory pause</span>,
    required: (
      <span className="mask-p">
        Available
        <br />
        <small>Desirable: expiratory pause sustained exhalation</small>
      </span>
    ),
    implemented: <span className="mask-p">Partial</span>,
  },
  {
    key: '89',
    sn: <span className="mask-p">8.9</span>,
    parameter: <span className="mask-p">I:E ratio</span>,
    required: (
      <span className="mask-p">
        1:4 to 4:1
        <br />
        <small>
          <strong>Acceptable deviation:</strong> Higher range acceptable
        </small>
      </span>
    ),
    implemented: <span className="mask-p">Partial</span>,
  },
  {
    key: '810',
    sn: <span className="mask-p">8.10</span>,
    parameter: (
      <span className="mask-p">
        Trigger Flow Sensitivity
        <br />
        <small>
          <strong>Acceptable deviation:</strong> Pressure trigger in place of
          flow trigger also acceptable
        </small>
      </span>
    ),
    required: (
      <span className="mask-p">
        1 L per minute to 10 L per minute
        <br />
        <small>Desirable: 0.1 L/min - 20 L/min</small>
      </span>
    ),
  },
  {
    key: '811',
    sn: <span className="mask-p">8.11</span>,
    parameter: <span className="mask-p">Programmable/ adjustable SIGH</span>,
    required: (
      <span className="mask-p">
        <small>Desirable: Yes</small>
      </span>
    ),
  },
  {
    key: '812',
    sn: <span className="mask-p">8.12</span>,
    parameter: <span className="mask-p">Leak Volume Compensation</span>,
    required: <span className="mask-p">Yes</span>,
  },
  {
    key: '813',
    sn: <span className="mask-p">8.13</span>,
    parameter: (
      <span className="mask-p">
        Volume Accuracy
        <br />
        <small>
          <strong>Acceptable deviation:</strong> Self-declaration accepted
        </small>
      </span>
    ),
    required: (
      <span className="mask-p">
        2-3 % of the full scale between (10 L/min - 80L/min)
      </span>
    ),
  },
  {
    key: '9',
    sn: <span className="mask-p">9</span>,
    parameter: (
      <span className="mask-p">
        <strong>Monitored parameters –</strong>
      </span>
    ),
    required: <span className="mask-p">&nbsp;</span>,
  },
  {
    key: '91',
    sn: <span className="mask-p">9.1</span>,
    parameter: <span className="mask-p">Respiratory Phase and Type</span>,
    required: <span className="mask-p">Yes</span>,
  },
  {
    key: '92',
    sn: <span className="mask-p">9.2</span>,
    parameter: <span className="mask-p">Exhaled Tidal and Minute volume</span>,
    required: <span className="mask-p">Yes</span>,
    implemented: <span className="mask-p">Partial</span>,
  },
  {
    key: '93',
    sn: <span className="mask-p">9.3</span>,
    parameter: <span className="mask-p">Respiratory Rate</span>,
    required: <span className="mask-p">Yes</span>,
    implemented: <span className="mask-p">Yes</span>,
  },
  {
    key: '94',
    sn: <span className="mask-p">9.4</span>,
    parameter: (
      <span className="mask-p">
        Total leak percentage/ Leak volume
        <br />
        <small>
          <strong>Acceptable deviation:</strong> Leakage in flow rate also
          acceptable
        </small>
      </span>
    ),
    required: <span className="mask-p">Yes</span>,
  },
  {
    key: '95',
    sn: <span className="mask-p">9.5</span>,
    parameter: <span className="mask-p">Spontaneous Minute Volume</span>,
    required: <span className="mask-p">Yes</span>,
  },
  {
    key: '96',
    sn: <span className="mask-p">9.6</span>,
    parameter: <span className="mask-p">I:E Ratio</span>,
    required: <span className="mask-p">Yes</span>,
    implemented: <span className="mask-p">Yes</span>,
  },
  {
    key: '97',
    sn: <span className="mask-p">9.7</span>,
    parameter: (
      <span className="mask-p">
        Peak Inspiratory and End Expiratory Pressure
      </span>
    ),
    required: <span className="mask-p">Yes</span>,
  },
  {
    key: '98',
    sn: <span className="mask-p">9.8</span>,
    parameter: <span className="mask-p">Mean and Plateau Pressure</span>,
    required: <span className="mask-p">Yes</span>,
  },
  {
    key: '99',
    sn: <span className="mask-p">9.9</span>,
    parameter: (
      <span className="mask-p">
        Auto/Intrinsic PEEP
        <br />
        <small>
          <strong>Acceptable deviation:</strong> Display of PEEP value is
          acceptable
        </small>
      </span>
    ),
    required: <span className="mask-p">Yes</span>,
    implemented: <span className="mask-p">Yes</span>,
  },
  {
    key: '910',
    sn: <span className="mask-p">9.10</span>,
    parameter: <span className="mask-p">RSBI</span>,
    required: (
      <span className="mask-p">
        <small>Desirable: Yes</small>
      </span>
    ),
  },
  {
    key: '911',
    sn: <span className="mask-p">9.11</span>,
    parameter: <span className="mask-p">Static Compliance and Resistance</span>,
    required: (
      <span className="mask-p">
        <small>Desirable: Yes</small>
      </span>
    ),
  },
  {
    key: '912',
    sn: <span className="mask-p">9.12</span>,
    parameter: (
      <span className="mask-p">
        Low Inflection point (LIP) and upper inflection point (UIP)
      </span>
    ),
    required: (
      <span className="mask-p">
        <small>Desirable: Yes</small>
      </span>
    ),
  },
  {
    key: '913',
    sn: <span className="mask-p">9.13</span>,
    parameter: <span className="mask-p">Maximum Inspiratory Pressure</span>,
    required: (
      <span className="mask-p">
        <small>Desirable: Yes</small>
      </span>
    ),
  },
  {
    key: '914',
    sn: <span className="mask-p">9.14</span>,
    parameter: (
      <span className="mask-p">Lung recruitment maneuver & Monitoring.</span>
    ),
    required: (
      <span className="mask-p">
        <small>Desirable: Yes</small>
      </span>
    ),
  },
  {
    key: '10',
    sn: <span className="mask-p">10</span>,
    parameter: (
      <span className="mask-p">
        Should have graphics mode with display of followings scalers:
        <br />
        &nbsp;•&nbsp;Flow vs time
        <br />
        &nbsp;•&nbsp;Pressure vs time
        <br />
        &nbsp;•&nbsp;Volume vs time
      </span>
    ),
    required: <span className="mask-p">Yes</span>,
  },
  {
    key: '11',
    sn: <span className="mask-p">11</span>,
    parameter: (
      <span className="mask-p">
        Should have display of loops:
        <br />
        &nbsp;•&nbsp;Flow/Volume
        <br />
        &nbsp;•&nbsp;Pressure/Volume
        <br />
        &nbsp;•&nbsp;Pressure/ Flow
      </span>
    ),
    required: (
      <span className="mask-p">
        <small>Desirable: Yes</small>
      </span>
    ),
  },
  {
    key: '12',
    sn: <span className="mask-p">12</span>,
    parameter: (
      <span className="mask-p">
        <strong>Alarms –</strong>
      </span>
    ),
    required: <span className="mask-p">&nbsp;</span>,
  },
  {
    key: '121',
    sn: <span className="mask-p">12.1</span>,
    parameter: <span className="mask-p">Power Disconnected</span>,
    required: <span className="mask-p">Power Supply unplugged</span>,
  },
  {
    key: '122',
    sn: <span className="mask-p">12.2</span>,
    parameter: <span className="mask-p">Patient Disconnected</span>,
    required: (
      <span className="mask-p">PIP &#60; (Desired Pressure x 0.6)</span>
    ),
  },
  {
    key: '123',
    sn: <span className="mask-p">12.3</span>,
    parameter: <span className="mask-p">High Inspiratory Pressure</span>,
    required: (
      <span className="mask-p">PIP &#60; (Desired Pressure x 0.6)</span>
    ),
    implemented: <span className="mask-p">Yes</span>,
  },
  {
    key: '124',
    sn: <span className="mask-p">12.4</span>,
    parameter: <span className="mask-p">High PEEP</span>,
    required: (
      <span className="mask-p">
        PEEP > Set PEEP + 2 or 6 Consecutive cycles
      </span>
    ),
  },
  {
    key: '125',
    sn: <span className="mask-p">12.5</span>,
    parameter: <span className="mask-p">High Respiratory Rate</span>,
    required: <span className="mask-p">RR > 70</span>,
  },
  {
    key: '126',
    sn: <span className="mask-p">12.6</span>,
    parameter: (
      <span className="mask-p">
        Power Sensor Failure
        <br />
        <small>
          <strong>Acceptable deviation:</strong> These are Software & hardware
          architectural design in the machine pointing to errors.
          Self-declaration acceptable
        </small>
      </span>
    ),
    required: <span className="mask-p">Power sensor fails to respond</span>,
  },
  {
    key: '127',
    sn: <span className="mask-p">12.7</span>,
    parameter: (
      <span className="mask-p">
        Read/Write Error
        <br />
        <small>
          <strong>Acceptable deviation:</strong> These are Software & hardware
          architectural design in the machine pointing to errors.
          Self-declaration acceptable
        </small>
      </span>
    ),
    required: (
      <span className="mask-p">Settings saved in memory could not be read</span>
    ),
  },
  {
    key: '128',
    sn: <span className="mask-p">12.8</span>,
    parameter: (
      <span className="mask-p">
        Ventilator Temperature Error
        <br />
        <small>
          <strong>Acceptable deviation:</strong> These are Software & hardware
          architectural design in the machine pointing to errors.
          Self-declaration acceptable
        </small>
      </span>
    ),
    required: (
      <span className="mask-p">
        The core temperature of ventilator CPU greater than 85 oC
      </span>
    ),
  },
  {
    key: '129',
    sn: <span className="mask-p">12.9</span>,
    parameter: (
      <span className="mask-p">
        System Failure (Safe Mode)
        <small>
          <strong>Acceptable deviation:</strong> These are Software & hardware
          architectural design in the machine pointing to errors.
          Self-declaration acceptable
        </small>
      </span>
    ),
    required: <span className="mask-p">Vital components inactive</span>,
  },
  {
    key: '1210',
    sn: <span className="mask-p">12.10</span>,
    parameter: <span className="mask-p">Low Tidal Volume</span>,
    required: (
      <span className="mask-p">
        VTi&#60; Set VT * 0.75 for 6 consecutive cycles
      </span>
    ),
  },
  {
    key: '13',
    sn: <span className="mask-p">13</span>,
    parameter: (
      <span className="mask-p">
        Alarm History of ≥ 100 alarms
        <br />
        <small>
          <strong>Acceptable deviation:</strong> Minimum 16 alarms/event
        </small>
      </span>
    ),
    required: <span className="mask-p">Yes</span>,
  },
  {
    key: '14',
    sn: <span className="mask-p">14</span>,
    parameter: (
      <span className="mask-p">
        Should have battery backup of atleast 2 hrs for ventilator
        <br />
        Battery: 60 Watt hour Lithium ion Battery (4hours back up)
        <br />
        <small>
          <strong>Acceptable deviation:</strong> Battery backup of at least one
          and half hours (+/- 10%) for the ventilator acceptable
        </small>
      </span>
    ),
    required: <span className="mask-p">Yes</span>,
    implemented: <span className="mask-p">2 hour run time on battery</span>,
  },
  {
    key: '15',
    sn: <span className="mask-p">15</span>,
    parameter: (
      <span className="mask-p">
        Displayed Trends Values for 48 hours atleast for above parameters.
        <br />
        <small>
          <strong>Acceptable deviation:</strong> Alarm history of minimum 16
          alarm/events acceptable
        </small>
      </span>
    ),
    required: <span className="mask-p">Yes</span>,
  },
  {
    key: '16',
    sn: <span className="mask-p">16</span>,
    parameter: (
      <span className="mask-p">
        Should be approved by reputed national/ international certifying agency
      </span>
    ),
    required: <span className="mask-p">Yes</span>,
  },
  {
    key: '17',
    sn: <span className="mask-p">17</span>,
    parameter: (
      <span className="mask-p">
        Company should have local service centre and should provide service 24x7
      </span>
    ),
    required: <span className="mask-p">Yes</span>,
  },
  {
    key: '18',
    sn: <span className="mask-p">18</span>,
    parameter: (
      <span className="mask-p">
        Certified for meeting IEC 60601-1-4 Medical electrical equipment - Part
        1-4: General requirements for safety - Collateral Standard: Programmable
        electrical medical systems
        <br />
        <small>
          <strong>Acceptable deviation:</strong> Certified for IEC 60601-1
          Medical electrical equipment - Part 1: General requirements for basic
          safety and essential performance or higher standards (as IEC 60601-1-4
          had withdrawn in 2013)
        </small>
      </span>
    ),
    required: (
      <span className="mask-p">Yes (within 30 days of placing order)</span>
    ),
  },
  {
    key: '19',
    sn: <span className="mask-p">19</span>,
    parameter: (
      <span className="mask-p">
        The service provider should have the necessary equipments recommended by
        the manufacturer to carry out preventive maintenance test as per
        guidelines provided in the service/maintenance manual.
      </span>
    ),
    required: <span className="mask-p">Yes</span>,
  },
  {
    key: '20',
    sn: <span className="mask-p">20</span>,
    parameter: (
      <span className="mask-p">
        All equipment should be from the same manufacturer or OEM (original
        equipment manufacturer)
      </span>
    ),
    required: <span className="mask-p">Yes</span>,
  },
  {
    key: '21',
    sn: <span className="mask-p">21</span>,
    parameter: (
      <span className="mask-p">
        Must submit user list and performance report within last 5 years from
        major Central Govt./State Govt./reputed private hospitals
      </span>
    ),
    required: (
      <span className="mask-p">
        <small>Desirable: Yes</small>
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
    doc3: file(relativePath: { eq: "tusky/timeline/photo24.jpeg" }) {
      ...max900
    }
    doc1: file(relativePath: { eq: "tusky/timeline/photo23.jpeg" }) {
      ...max900
    }
    g12: file(relativePath: { eq: "jasan/img2.jpeg" }) {
      ...max900
    }
    g11: file(relativePath: { eq: "jasan/img1.jpeg" }) {
      ...max900
    }
    g13: file(relativePath: { eq: "jasan/img3.jpeg" }) {
      ...max900
    }
    img4: file(relativePath: { eq: "jasan/img4.jpeg" }) {
      ...max900
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
                <Img fluid={this.props.data.img4.childImageSharp.fluid} />
              </div>
            </Carousel>
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
              The JASAN team is happy to report that it is collaborating with
              industry experts and partners to bring this device to hospitals.
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
                Documentation
              </a>
            }
            key="2"
          >
            <MediaQuery minWidth={992}>
              {matches => (
                <Fragment>
                  <Tabs
                    defaultActiveKey="11"
                    tabPosition={matches === true ? 'right' : 'top'}
                  >
                    <TabPane
                      key="11"
                      tab={
                        <a
                          href="#"
                          className="mask-p"
                          onClick={e => e.preventDefault()}
                          style={{ marginBottom: 0 }}
                        >
                          Meet JASAN
                          <br />
                          <small>The machine in operation</small>
                        </a>
                      }
                    >
                      <Video
                        ratio={0.57200057}
                        url="https://vimeo.com/426934352"
                        className="margin-p"
                      />
                    </TabPane>
                    <TabPane
                      key="12"
                      tab={
                        <a
                          href="#"
                          className="mask-p"
                          onClick={e => e.preventDefault()}
                          style={{ marginBottom: 0 }}
                        >
                          JASAN Documentary
                          <br />
                          <small>A one-hour feature</small>
                        </a>
                      }
                    >
                      <Video
                        ratio={0.57200057}
                        url="https://vimeo.com/441413314"
                        className="margin-p"
                      />
                    </TabPane>
                    <TabPane
                      key="13"
                      tab={
                        <a
                          href="#"
                          className="mask-p"
                          onClick={e => e.preventDefault()}
                        >
                          <span>Compliances</span>
                          <br />
                          <small>Required specs.</small>
                        </a>
                      }
                    >
                      <h3>Technical Specification Compliance</h3>
                      <p>
                        In this section we include this technical specification
                        compliance sheet which has information about parameters
                        and features that are required or desirable in a
                        ventilator. We also note the features that we have been
                        able to implement so far.
                      </p>
                      <p>
                        <strong>I. Essential Technical Features (ETF)</strong>
                      </p>
                      <Table
                        columns={columns2}
                        dataSource={data2}
                        pagination={false}
                      />
                      <br />
                      <br />
                      <p>
                        <strong>II. Technical Specifications</strong>
                      </p>
                      <Table
                        columns={columns3}
                        dataSource={data3}
                        pagination={false}
                      />
                      <br />
                      <br />
                      <p>
                        <strong>III. Packing List (for each delivery)</strong>
                      </p>
                      <p>
                        <strong>Essential:</strong>
                        &nbsp;•&nbsp;1 Ventilator
                        <br />
                        &nbsp;•&nbsp;Arm Holder and Humidifier (if not part of
                        equipment, compatible humidifier and arm holder should
                        be available as additional accessories)
                        <br />
                        &nbsp;•&nbsp;1 User Manual
                        <br />
                        &nbsp;•&nbsp;1 Warranty card
                        <br />
                        &nbsp;•&nbsp;220-volt power cable
                        <br />
                        &nbsp;•&nbsp;12 Volt power cable
                        <br />
                        &nbsp;•&nbsp;Stand Attachment
                      </p>
                      <p>
                        <strong>Desirable:</strong>
                      </p>
                      <p>
                        &nbsp;•&nbsp;Patient tubing: Adult, Paeds: 2/ unit
                        <br />
                        &nbsp;•&nbsp;NIV mask: 2 for adult and pediatric/ unit
                        <br />
                        &nbsp;•&nbsp;Test lung: 1 (1 for adult and pediatric
                        each)
                        <br />
                        &nbsp;•&nbsp;Flow sensor (reusable): 2
                      </p>
                    </TabPane>
                  </Tabs>
                </Fragment>
              )}
            </MediaQuery>
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
                    A working prototype (month of September, 2020)
                  </strong>
                </p>
                <div className="mask-p">
                  <GalleryX
                    data={this.props.data}
                    lookup="g1"
                    columns={{ min: 2, max: 2 }}
                    Img={Img}
                    Gallery={Gallery}
                    MediaQuery={MediaQuery}
                  />
                </div>
              </Timeline.Item>
              <Timeline.Item color="#00128B">
                <p>
                  <strong>In Media (months of July and August, 2020)</strong>
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
                  <strong>Early efforts (month of April, 2020)</strong>
                </p>
                <Division className="margin-p">
                  <Video
                    ratio={0.54999261}
                    url="https://vimeo.com/427073109"
                    style={{ background: 'unset' }}
                  />
                  <Video
                    ratio={0.54999261}
                    url="https://vimeo.com/427073746"
                    style={{ background: 'unset' }}
                  />
                </Division>
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
