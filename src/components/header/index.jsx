// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'

// import { connect } from 'react-redux'
import compose from 'recompose/compose'
import pure from 'recompose/pure'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { StaticQuery, graphql } from 'gatsby'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../link'
import '../link/style.less'

// import { updateHeaderState } from '../../state/actions'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React

export const query = graphql`
  query {
    logo: file(relativePath: { eq: "logos/logo.png" }) {
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
/** Header */
const Header = (props) => (
  <Fragment>
    <header className="container">
      <StaticQuery
        query={query}
        render={(data) => (
          <Link to="/">
            <GatsbyImage
              className="logo as-paragraph"
              image={getImage(data.logo)}
            />
          </Link>
        )}
      />
      <nav>
        <li className="hidden-on-mobile">
          <Link to="/">
            <span>Home</span>
          </Link>
        </li>
        <li style={{ opacity: 0.3 }}>
          <span>•</span>
        </li>
        <li>
          <Link to="/jasan">
            <span>JASAN</span>
          </Link>
        </li>
        <li style={{ opacity: 0.3 }}>
          <span>•</span>
        </li>
        <li>
          <Link to="/tusky">
            <span>Tusky</span>
          </Link>
        </li>
        <li style={{ opacity: 0.3 }}>
          <span>•</span>
        </li>
        <li>
          <Link to="/about">
            <span>About</span>
          </Link>
        </li>
      </nav>
    </header>
  </Fragment>
)

// // ----------------------------------------------------------------------------
// // ---------------------------------------------------------------------- State
// // ----------------------------------------------------------------------------
// const withState = connect(
//   state => ({
//     headerState: state.headerState,
//   }),
//   dispatch => ({
//     updateHeaderState(payload) {
//       dispatch(updateHeaderState(payload))
//     },
//   })
// )

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Compose
// ----------------------------------------------------------------------------
/** Compose ala FP style */
const ComposedHeader = compose(
  pure // Wrap it with pure HOC
)(Header)

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default ComposedHeader
