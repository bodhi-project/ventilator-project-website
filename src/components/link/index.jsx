// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'

import startsWith from 'lodash/startsWith'
import isUndefined from 'lodash/isUndefined'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { Link as GatsbyLink } from 'gatsby-plugin-intl'

import Outlink from '@bodhi-project/components/lib/outlink'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Link */
const Link = ({ to, children, ...props }) => {
  const thatTo = isUndefined(to) ? '#' : to
  const isOutLink =
    thatTo.startsWith('http') ||
    thatTo.startsWith('https') ||
    thatTo.startsWith('mailto:')
  const isHashLink = startsWith(thatTo, '#') || isUndefined(thatTo)

  return (
    <Fragment>
      {isOutLink === true ? (
        <Outlink to={thatTo} {...props}>
          {children}
        </Outlink>
      ) : (
        <Fragment>
          {isHashLink === true ? (
            <a href="#" {...props}>
              {children}
            </a>
          ) : (
            <GatsbyLink to={thatTo} {...props}>
              {children}
            </GatsbyLink>
          )}
        </Fragment>
      )}
    </Fragment>
  )
}

Link.propTypes = {
  to: PropTypes.string,
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default Link
