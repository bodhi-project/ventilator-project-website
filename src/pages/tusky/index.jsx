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
  pageTitle: 'Tusky Ventilator',
  nakedPageSlug: '/tusky',
  pageAbstract:
    'Tusky is a low-cost, low-tech, portable, mechanised, non-invasive resuscitator that automates the process of manual ventilation for patients in situations where not enough ventilators are available or in resource-constrained environments. The device may offer a chance of survival to patients who do not have access to a more sophisticated artificial ventilator due to shortage of supply or absence in remote areas.',
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
    width: '45%',
  },
  {
    title: 'v1',
    dataIndex: 'v1',
    key: 'v1',
    width: '15%',
  },
  {
    title: 'v2',
    key: 'v2',
    dataIndex: 'v2',
    width: '15%',
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
              <small>Visual monitoring</small>
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
        <Tooltip
          title={
            <p>
              <small>Visual display</small>
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
        <Tooltip
          title={
            <p>
              <small>Visual display</small>
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
                Visual dsiplay, also planned through sensors and TFD display.
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
                Visual dsiplay, also planned through sensors and TFD display.
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
                Visual dsiplay, also planned through sensors and TFD display.
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
        <Tooltip
          title={
            <p>
              <small>
                6 hours with a standard battery that can be attached to the
                device
              </small>
            </p>
          }
        >
          6h
        </Tooltip>
      </span>
    ),
    v2: (
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
        <Tooltip
          title={
            <p>
              <small>
                6 hours to 1 week with a standard battery that can be attached
                to the device depending on the battery size
              </small>
            </p>
          }
        >
          6h - 1w
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
    tuskyBanner: file(relativePath: { eq: "tusky/tusky-banner.jpg" }) {
      ...max1500
    }
    feature2: file(relativePath: { eq: "tusky/feature2.jpg" }) {
      ...max1500
    }
    feature3: file(relativePath: { eq: "tusky/feature3.jpg" }) {
      ...max1500
    }
    print1: file(relativePath: { eq: "tusky/timeline/photo1.jpeg" }) {
      ...max900
    }
    print2: file(relativePath: { eq: "tusky/timeline/photo2.jpeg" }) {
      ...max900
    }
    print3: file(relativePath: { eq: "tusky/timeline/photo3.jpeg" }) {
      ...max900
    }
    oWorks1: file(relativePath: { eq: "tusky/timeline/photo4.jpeg" }) {
      ...max900
    }
    oWorks2: file(relativePath: { eq: "tusky/timeline/photo5.jpeg" }) {
      ...max900
    }
    print4: file(relativePath: { eq: "tusky/timeline/photo6.jpeg" }) {
      ...max900
    }
    oWorks3: file(relativePath: { eq: "tusky/timeline/photo7.jpeg" }) {
      ...max900
    }
    print5: file(relativePath: { eq: "tusky/timeline/photo8.jpeg" }) {
      ...max900
    }
    oneWay1: file(relativePath: { eq: "tusky/timeline/photo9.jpeg" }) {
      ...max900
    }
    oneWay2: file(relativePath: { eq: "tusky/timeline/photo10.jpeg" }) {
      ...max900
    }
    photo11: file(relativePath: { eq: "tusky/timeline/photo11.jpeg" }) {
      ...max900
    }
    photo12: file(relativePath: { eq: "tusky/timeline/photo12.jpeg" }) {
      ...max900
    }
    photo13: file(relativePath: { eq: "tusky/timeline/photo13.jpeg" }) {
      ...max900
    }
    photo14: file(relativePath: { eq: "tusky/timeline/ren1.jpg" }) {
      ...max900
    }
    newRen4: file(relativePath: { eq: "tusky/timeline/photo18.jpeg" }) {
      ...max900
    }
    newRen5: file(relativePath: { eq: "tusky/timeline/photo19.jpeg" }) {
      ...max900
    }
    doc4: file(relativePath: { eq: "tusky/timeline/photo25.jpeg" }) {
      ...max900
    }
    doc2: file(relativePath: { eq: "tusky/timeline/photo23.jpeg" }) {
      ...max900
    }
    doc3: file(relativePath: { eq: "tusky/timeline/photo24.jpeg" }) {
      ...max900
    }
    doc1: file(relativePath: { eq: "tusky/timeline/photo22.jpeg" }) {
      ...max900
    }
    process: file(
      relativePath: { eq: "tusky/FLOSSVentDevelopmentProcessv6.png" }
    ) {
      ...max1500
    }
    mayLastWeek1: file(relativePath: { eq: "tusky/timeline/img1.jpg" }) {
      ...max900
    }
    mayLastWeek2: file(relativePath: { eq: "tusky/timeline/img2.jpg" }) {
      ...max900
    }
    mayLastWeek3: file(relativePath: { eq: "tusky/timeline/img3.jpg" }) {
      ...max900
    }
    mayLastWeek4: file(relativePath: { eq: "tusky/timeline/img4.jpg" }) {
      ...max900
    }
    mayLastWeek5: file(relativePath: { eq: "tusky/timeline/img5.jpg" }) {
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
                <Img
                  fluid={this.props.data.tuskyBanner.childImageSharp.fluid}
                />
              </div>
              <div className="feature">
                <Img fluid={this.props.data.feature1.childImageSharp.fluid} />
                <Tooltip
                  title={
                    <p style={{ marginBottom: 0 }}>
                      <strong>Chassis</strong>, built out of laser-cut acrylic
                      or aluminium, and includes multiple 3D printed components.
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
              Tusky is a low-cost, low-tech, portable, mechanised, non-invasive
              resuscitator that automates the process of manual ventilation for
              patients in situations where not enough ventilators are available
              or in resource-constrained environments.
            </p>
            <p>
              Developed by a group of individuals from Auroville, with the
              support of the Pondicherry Institute of Medical Sciences.
            </p>
            <p>
              We're in Stage 2 at the moment &nbsp;(
              <Link to="/notes">read note on self-reporting</Link>). These
              devices have not yet recieved approvals or licenses. At the moment
              we have a working prototype, and we are collaborating with medical
              professionals to iterate until the prototype is medically worthy.
              ahead.
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
                Documentation
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
                    Walkthrough
                    <br />
                    <small>The machine in operation</small>
                  </a>
                }
              >
                <div style={{ maxWidth: '45rem' }} className="margin-p">
                  {/* <Video url="https://www.youtube.com/watch?v=cn9cSBCQ5BA" /> */}
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
                  {/* <Video url="https://www.youtube.com/watch?v=hVYcsUnKByk" /> */}
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
                  {/* <Video url="https://www.youtube.com/watch?v=cuCqn07EOKk" /> */}
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
                  {/* <Video url="https://www.youtube.com/watch?v=uDd3iupKUyI" /> */}
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
                  {/* <Video url="https://www.youtube.com/watch?v=luM6oeCM7Yw" /> */}
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
                  {/* <Video url="https://www.youtube.com/watch?v=0Bhiy0797qo" /> */}
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
                  {/* <Video url="https://www.youtube.com/watch?v=L3b-FB_2-nk" /> */}
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
                  <strong>Tusky v1, first look (last week of May, 2020)</strong>
                </p>
                <div className="mask-p">
                  <GalleryX
                    data={this.props.data}
                    lookup="mayLast"
                    columns={{ min: 3, max: 3 }}
                    Img={Img}
                    Gallery={Gallery}
                    MediaQuery={MediaQuery}
                  />
                </div>
              </Timeline.Item>
              <Timeline.Item color="#00128B">
                <p>
                  <strong>
                    First renderings of Tusky v1 (first week of May, 2020)
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
              <Timeline.Item color="#00128B">
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
                Warning: Tusky is an expermiental design. It is not a medical
                device, and it does not have any licenses at the moment. Never
                use Tusky without medical supervision.
              </big>
            </p>
            <p>
              We intend Tusky to be an Open Source Hardware Project. Anyone can
              download it for free, or contribute to its modifications or
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
