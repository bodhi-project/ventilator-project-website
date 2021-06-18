// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import compose from 'recompose/compose'
import { connect } from 'react-redux'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { useMediaQuery } from 'react-responsive'

import InitializeMeta from '@bodhi-project/seo/lib/InitializeMeta'
import UpdateTitle from '@bodhi-project/seo/lib/UpdateTitle'
import WebsiteSchema from '@bodhi-project/seo/lib/WebsiteSchema'
import OrganisationSchema from '@bodhi-project/seo/lib/OrganisationSchema'

import MediaState from '@bodhi-project/components/lib/media-state'

import '@bodhi-project/antrd/lib/4.10.3/style/index.css'

import { Textfit } from 'react-textfit'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import data from '../../seo/data.json'

import Link from '../link'
import '../link/style.less'

import Header from '../header'
import '../header/style.less'

import Footer from '../footer'
import '../footer/style.less'

import indexImage from '../../images/banners/launch.jpg'

import { updateMediaState, updateScreenSizeState } from '../../state/actions'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Styles
import '../../styles/index.less'
import '../../styles/type.less'
import '../../styles/container.less'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React

export const exportImageFragments = graphql`
  fragment max90 on File {
    childImageSharp {
      fluid(maxWidth: 90, quality: 80) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
  fragment max300 on File {
    childImageSharp {
      fluid(maxWidth: 300, quality: 80, srcSetBreakpoints: [300]) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
  fragment max900 on File {
    childImageSharp {
      fluid(maxWidth: 900, quality: 80, srcSetBreakpoints: [300, 600, 900]) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
  fragment defaultImage on File {
    childImageSharp {
      fluid(maxWidth: 900, quality: 80, srcSetBreakpoints: [300, 600, 900]) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
  fragment max1200 on File {
    childImageSharp {
      fluid(
        maxWidth: 1200
        quality: 80
        srcSetBreakpoints: [300, 600, 900, 1200]
      ) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
  fragment max1500 on File {
    childImageSharp {
      fluid(
        maxWidth: 1500
        quality: 80
        srcSetBreakpoints: [300, 600, 900, 1500]
      ) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
  fragment max3000 on File {
    childImageSharp {
      fluid(
        maxWidth: 3000
        quality: 80
        srcSetBreakpoints: [300, 600, 900, 1500, 2250, 3000]
      ) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
`

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------- Global SEO
// ----------------------------------------------------------------------------
const websiteSchemaData = {
  url: data.websiteUrl,
  name: data.websiteName,
  description: data.websiteDescription,
  author: data.org.name,
  publisher: data.org.name,
  image: indexImage,
}

const organisationSchemaData = {
  name: data.org.name,
  legalName: data.org.legalName,
  url: data.org.url,
  logo: `${data.org.url}${data.org.logo}`,
  foundingDate: new Date(data.org.foundingDate).toISOString(),
  founders: data.org.founders,
  streetAddress: data.orgLocation.streetAddress,
  addressLocality: data.orgLocation.addressLocality,
  addressRegion: data.orgLocation.addressRegion,
  postalCode: data.orgLocation.postalCode,
  addressCountry: data.orgLocation.addressCountry,
  telephone: data.orgContact.telephone,
  email: data.orgContact.email,
  sameAs: data.orgSocialMediaProfiles,
  image: indexImage,
}

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Layout */
class Layout extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props)

    this.state = {
      client: false,
    }
  }

  /** after mount */
  componentDidMount() {
    this.setState({ client: true })
  }

  /** on mount */
  componentDidUpdate() {
    if (typeof window !== 'undefined') {
      if (this.state.client === true) {
        const element = document.getElementById('layout')
        element.scrollTop = 0
      }
    }
  }

  /** standard renderer */
  render() {
    const { client } = this.state
    const {
      location,
      children,
      uri = '',
      lightOrDarkMode,
      updateLightOrDarkMode,
      mediaState,
      screenSizeState,
      updateMediaState,
      updateScreenSizeState,
      className = 'standard-page',
    } = this.props

    return (
      <MediaState
        className={`layout ${className}`}
        id="layout"
        data-uri={uri}
        useMediaQuery={useMediaQuery}
        updateMediaState={updateMediaState}
        screenSizeState={screenSizeState}
        updateScreenSizeState={updateScreenSizeState}
        useEffect={useEffect}
        useState={useState}
        client={client}
      >
        <InitializeMeta data={{ titleTemplate: `%s | ${data.websiteName}` }} />
        <UpdateTitle title={data.websiteAbstract} />
        <WebsiteSchema data={websiteSchemaData} />
        <OrganisationSchema data={organisationSchemaData} />
        <Header uri={uri} />
        <main role="main">{children}</main>
        <Footer />
      </MediaState>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

// ----------------------------------------------------------------------------
// ---------------------------------------------------------------------- State
// ----------------------------------------------------------------------------
const withState = connect(
  (state) => ({
    lightOrDarkMode: state.lightOrDarkMode,
    mediaState: state.mediaState,
    screenSizeState: state.screenSizeState,
  }),
  (dispatch) => ({
    updateMediaState(payload) {
      dispatch(updateMediaState(payload))
    },
    updateScreenSizeState(payload) {
      dispatch(updateScreenSizeState(payload))
    },
  })
)

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Compose
// ----------------------------------------------------------------------------
/** Compose ala FP style */
const ComposedLayout = compose(
  withState // Add state
)(Layout)

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default ComposedLayout
