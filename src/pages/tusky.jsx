// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { graphql } from 'gatsby'

import Video from '@bodhi-project/components/lib/video'
import '@bodhi-project/components/lib/video/style.less'

import Tooltip from 'antd/lib/tooltip'
import '@bodhi-project/antrd/lib/4.10.3/tooltip/style/css'

import Tabs from 'antd/lib/tabs'
import '@bodhi-project/antrd/lib/4.10.3/tabs/style/css'

import Table from 'antd/lib/table'
import '@bodhi-project/antrd/lib/4.10.3/table/style/css'

import Timeline from 'antd/lib/timeline'
import '@bodhi-project/antrd/lib/4.10.3/timeline/style/css'

import InfoIcon from 'react-feather/dist/icons/info'
import CheckCircleIcon from 'react-feather/dist/icons/check-circle'
import XCircleIcon from 'react-feather/dist/icons/x-circle'

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
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    tuskyBanner: file(relativePath: { eq: "tusky/tusky-banner.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    feature2: file(relativePath: { eq: "tusky/feature2.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    feature3: file(relativePath: { eq: "tusky/feature3.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    print1: file(relativePath: { eq: "tusky/timeline/photo1.jpeg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 900
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    print2: file(relativePath: { eq: "tusky/timeline/photo2.jpeg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 900
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    print3: file(relativePath: { eq: "tusky/timeline/photo3.jpeg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 900
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    oWorks1: file(relativePath: { eq: "tusky/timeline/photo4.jpeg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 900
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    oWorks2: file(relativePath: { eq: "tusky/timeline/photo5.jpeg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 900
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    print4: file(relativePath: { eq: "tusky/timeline/photo6.jpeg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 900
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    oWorks3: file(relativePath: { eq: "tusky/timeline/photo7.jpeg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 900
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    print5: file(relativePath: { eq: "tusky/timeline/photo8.jpeg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 900
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    oneWay1: file(relativePath: { eq: "tusky/timeline/photo9.jpeg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 900
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    oneWay2: file(relativePath: { eq: "tusky/timeline/photo10.jpeg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 900
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    photo11: file(relativePath: { eq: "tusky/timeline/photo11.jpeg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 900
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    photo12: file(relativePath: { eq: "tusky/timeline/photo12.jpeg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 900
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    photo13: file(relativePath: { eq: "tusky/timeline/photo13.jpeg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 900
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    photo14: file(relativePath: { eq: "tusky/timeline/ren1.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 900
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    newRen4: file(relativePath: { eq: "tusky/timeline/photo18.jpeg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 900
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    newRen5: file(relativePath: { eq: "tusky/timeline/photo19.jpeg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 900
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    doc4: file(relativePath: { eq: "tusky/timeline/photo25.jpeg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 900
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    doc2: file(relativePath: { eq: "tusky/timeline/photo22.jpeg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 900
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    process: file(
      relativePath: { eq: "tusky/FLOSSVentDevelopmentProcessv6.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    mayLastWeek1: file(relativePath: { eq: "tusky/timeline/img1.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 900
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    mayLastWeek2: file(relativePath: { eq: "tusky/timeline/img2.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 900
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    mayLastWeek3: file(relativePath: { eq: "tusky/timeline/img3.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 900
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    mayLastWeek4: file(relativePath: { eq: "tusky/timeline/img4.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 900
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    mayLastWeek5: file(relativePath: { eq: "tusky/timeline/img5.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 900
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    sept1: file(relativePath: { eq: "tusky/timeline/img6.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 900
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    sept2: file(relativePath: { eq: "tusky/timeline/img7.jpg" }) {
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
    const images3 = []
    const images4 = []
    const images5 = []
    const images6 = []
    const images7 = []

    images1.push({
      data: this.props.data.sept1,
      height: this.props.data.sept1.childImageSharp.gatsbyImageData.height,
      width: this.props.data.sept1.childImageSharp.gatsbyImageData.width,
    })
    images1.push({
      data: this.props.data.sept2,
      height: this.props.data.sept2.childImageSharp.gatsbyImageData.height,
      width: this.props.data.sept2.childImageSharp.gatsbyImageData.width,
    })

    images2.push({
      data: this.props.data.mayLastWeek1,
      height: this.props.data.mayLastWeek1.childImageSharp.gatsbyImageData
        .height,
      width: this.props.data.mayLastWeek1.childImageSharp.gatsbyImageData.width,
    })
    images2.push({
      data: this.props.data.mayLastWeek2,
      height: this.props.data.mayLastWeek2.childImageSharp.gatsbyImageData
        .height,
      width: this.props.data.mayLastWeek2.childImageSharp.gatsbyImageData.width,
    })
    images2.push({
      data: this.props.data.mayLastWeek3,
      height: this.props.data.mayLastWeek3.childImageSharp.gatsbyImageData
        .height,
      width: this.props.data.mayLastWeek3.childImageSharp.gatsbyImageData.width,
    })
    images2.push({
      data: this.props.data.mayLastWeek4,
      height: this.props.data.mayLastWeek4.childImageSharp.gatsbyImageData
        .height,
      width: this.props.data.mayLastWeek4.childImageSharp.gatsbyImageData.width,
    })
    images2.push({
      data: this.props.data.mayLastWeek5,
      height: this.props.data.mayLastWeek5.childImageSharp.gatsbyImageData
        .height,
      width: this.props.data.mayLastWeek5.childImageSharp.gatsbyImageData.width,
    })

    images3.push({
      data: this.props.data.newRen4,
      height: this.props.data.newRen4.childImageSharp.gatsbyImageData.height,
      width: this.props.data.newRen4.childImageSharp.gatsbyImageData.width,
    })
    images3.push({
      data: this.props.data.newRen5,
      height: this.props.data.newRen5.childImageSharp.gatsbyImageData.height,
      width: this.props.data.newRen5.childImageSharp.gatsbyImageData.width,
    })

    images4.push({
      data: this.props.data.oneWay1,
      height: this.props.data.oneWay1.childImageSharp.gatsbyImageData.height,
      width: this.props.data.oneWay1.childImageSharp.gatsbyImageData.width,
    })
    images4.push({
      data: this.props.data.oneWay2,
      height: this.props.data.oneWay2.childImageSharp.gatsbyImageData.height,
      width: this.props.data.oneWay2.childImageSharp.gatsbyImageData.width,
    })

    images5.push({
      data: this.props.data.doc2,
      height: this.props.data.doc2.childImageSharp.gatsbyImageData.height,
      width: this.props.data.doc2.childImageSharp.gatsbyImageData.width,
    })
    images5.push({
      data: this.props.data.doc4,
      height: this.props.data.doc4.childImageSharp.gatsbyImageData.height,
      width: this.props.data.doc4.childImageSharp.gatsbyImageData.width,
    })

    images6.push({
      data: this.props.data.oWorks3,
      height: this.props.data.oWorks3.childImageSharp.gatsbyImageData.height,
      width: this.props.data.oWorks3.childImageSharp.gatsbyImageData.width,
    })
    images6.push({
      data: this.props.data.oWorks2,
      height: this.props.data.oWorks2.childImageSharp.gatsbyImageData.height,
      width: this.props.data.oWorks2.childImageSharp.gatsbyImageData.width,
    })
    images6.push({
      data: this.props.data.oWorks1,
      height: this.props.data.oWorks1.childImageSharp.gatsbyImageData.height,
      width: this.props.data.oWorks1.childImageSharp.gatsbyImageData.width,
    })

    images7.push({
      data: this.props.data.print1,
      height: this.props.data.print1.childImageSharp.gatsbyImageData.height,
      width: this.props.data.print1.childImageSharp.gatsbyImageData.width,
    })
    images7.push({
      data: this.props.data.print2,
      height: this.props.data.print2.childImageSharp.gatsbyImageData.height,
      width: this.props.data.print2.childImageSharp.gatsbyImageData.width,
    })
    images7.push({
      data: this.props.data.print3,
      height: this.props.data.print3.childImageSharp.gatsbyImageData.height,
      width: this.props.data.print3.childImageSharp.gatsbyImageData.width,
    })
    images7.push({
      data: this.props.data.print4,
      height: this.props.data.print4.childImageSharp.gatsbyImageData.height,
      width: this.props.data.print4.childImageSharp.gatsbyImageData.width,
    })
    images7.push({
      data: this.props.data.print5,
      height: this.props.data.print5.childImageSharp.gatsbyImageData.height,
      width: this.props.data.print5.childImageSharp.gatsbyImageData.width,
    })

    return (
      <ConfigProvider prefixCls="wtf">
        <StandardPage seoData={seoData} {...this.props}>
          <div className="container">
            <Tabs defaultActiveKey="1">
              <TabPane tab={<span>Design</span>} key="1">
                <Video
                  className="margin-p"
                  ratio={0.57200057}
                  url="https://vimeo.com/426941888"
                />
                <p>
                  Tusky is a low-cost, low-tech, portable, mechanised,
                  non-invasive resuscitator that automates the process of manual
                  ventilation for patients in situations where not enough
                  ventilators are available or in resource-constrained
                  environments.
                </p>
                <p>
                  Developed by a group of individuals from Auroville, with the
                  support of the Pondicherry Institute of Medical Sciences.
                </p>
                <p>
                  The Tusky team is happy to report that it is collaborating
                  with industry experts and partners to bring this device to
                  hospitals.
                </p>
              </TabPane>
              <TabPane tab={<span>Specs</span>} key="2">
                <Table columns={columns} dataSource={data} pagination={false} />
                <p>References and further reading:</p>
                <ul>
                  <li>
                    MIT E-Vent's&nbsp;
                    <Link to="https://e-vent.mit.edu/clinical/">
                      documentation
                    </Link>
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
              <TabPane tab={<span>Feature</span>} key="3">
                <Video
                  className="margin-p"
                  ratio={0.57200057}
                  url="https://vimeo.com/437033358"
                />
              </TabPane>
              <TabPane tab={<span>Timeline</span>} key="4">
                <Timeline>
                  <Timeline.Item color="#00128B">
                    <p>
                      <strong>
                        Collaborations with an incubator, and seeking funding
                        (month of May, 2021)
                      </strong>
                    </p>
                    <p>
                      The Tusky ventilator is in late-stage R&D in collaboration
                      with an incubator. The team has been seeking funding to
                      take the project to the next milestone of making
                      prototypes for medical testing.
                    </p>
                  </Timeline.Item>
                  <Timeline.Item color="#ffd700">
                    <p>
                      <strong>
                        Tusky v1.5, a fully working prototype (September, 2020)
                      </strong>
                    </p>
                    <div className="mask-p">
                      <Gallery images={images1} />
                    </div>
                  </Timeline.Item>
                  <Timeline.Item color="#00128B">
                    <p>
                      <strong>
                        In Media (months of July and August, 2020)
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
                        "COVID-19: Auroville engineers in collaboration with
                        PIMS develop low cost ventilators"
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
                        Tusky v1, first look (last week of May, 2020)
                      </strong>
                    </p>
                    <div className="mask-p">
                      <Gallery images={images2} />
                    </div>
                  </Timeline.Item>
                  <Timeline.Item color="#00128B">
                    <p>
                      <strong>
                        First renderings of Tusky v1 (first week of May, 2020)
                      </strong>
                    </p>
                    <div className="mask-p">
                      <Gallery images={images3} />
                    </div>
                  </Timeline.Item>
                  <Timeline.Item color="#ffd700">
                    <p>
                      <strong>
                        A smart 3D one-way non-return valve (third week of
                        April, 2020)
                      </strong>
                    </p>
                    <div className="mask-p">
                      <Gallery images={images4} />
                    </div>
                  </Timeline.Item>
                  <Timeline.Item color="#00128B">
                    <p>
                      <strong>
                        Collaboration with Dr. Hasan of PIMS emerges (second
                        week of April, 2020)
                      </strong>
                    </p>
                    <div className="mask-p">
                      <Gallery images={images5} />
                    </div>
                  </Timeline.Item>
                  <Timeline.Item color="#ffd700">
                    <p>
                      <strong>
                        We get a working model of OXYGen (first week of April,
                        2020)
                      </strong>
                    </p>
                    <div className="mask-p">
                      <Gallery images={images6} />
                    </div>
                  </Timeline.Item>
                  <Timeline.Item color="#00128B">
                    <p>
                      <strong>
                        Starting out, laser-cutting the OXYGen Ventilator
                        (fourth week of March, 2020)
                      </strong>
                    </p>
                    <div className="mask-p">
                      <Gallery images={images7} />
                    </div>
                  </Timeline.Item>
                </Timeline>
              </TabPane>
            </Tabs>
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
