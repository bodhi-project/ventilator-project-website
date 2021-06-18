// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
// import Button from 'antd/lib/button'
import '@bodhi-project/antrd/lib/4.10.3/button/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Button */
const Button = ({ children, ...props }) => {
  return (
    <div className="container">
      <footer style={{ borderTop: '2px solid #00128b' }}>
        <br />
        <p
          style={{
            marginBottom: 0,
            textAlign: 'center',
            lineHeight: 1,
            margin: 'auto',
          }}
        >
          <strong>Disclaimer</strong>: These prototype designs are in an
          experimental phase,
          <br />
          and are <u>not medically certified for use</u>.{' '}
          <Link to="/disclaimer">Read more ⇾</Link>
        </p>
        <br />
        Footer
        {/* <MinimalFooterNavigation data={desktopMenu} Link={Link} /> */}
      </footer>
      <p>Footer</p>
    </div>
  )
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Button
