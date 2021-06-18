// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React, { useEffect, useState } from 'react'
import compose from 'recompose/compose'
import { connect } from 'react-redux'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { useMediaQuery } from 'react-responsive'
import MediaState from '@bodhi-project/components/lib/media-state'

import InitializeMeta from '@bodhi-project/seo/lib/InitializeMeta'
import UpdateTitle from '@bodhi-project/seo/lib/UpdateTitle'
import WebsiteSchema from '@bodhi-project/seo/lib/WebsiteSchema'
import OrganisationSchema from '@bodhi-project/seo/lib/OrganisationSchema'

import '@bodhi-project/antrd/lib/4.10.3/style/index.css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import { updateMediaState, updateScreenSizeState } from '../../state/actions'

import Header from '../header'
import Footer from '../footer'

import './style.less'
import '../../styles/index.less'

import indexImage from '../../images/banners/launch.jpg'
import websiteData from '../../data/website.json'
import desktopMenu from '../../data/desktopMenu.json'

import Link from '../Link'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------- Global SEO
// ----------------------------------------------------------------------------
const websiteSchemaData = {
  url: websiteData.websiteUrl,
  name: websiteData.websiteName,
  description: websiteData.websiteDescription,
  author: websiteData.org.name,
  publisher: websiteData.org.name,
  image: indexImage,
}

const organisationSchemaData = {
  name: websiteData.org.name,
  legalName: websiteData.org.legalName,
  url: websiteData.org.url,
  logo: `${websiteData.org.url}${websiteData.org.logo}`,
  foundingDate: new Date(websiteData.org.foundingDate).toISOString(),
  founders: websiteData.org.founders,
  streetAddress: websiteData.orgLocation.streetAddress,
  addressLocality: websiteData.orgLocation.addressLocality,
  addressRegion: websiteData.orgLocation.addressRegion,
  postalCode: websiteData.orgLocation.postalCode,
  addressCountry: websiteData.orgLocation.addressCountry,
  telephone: websiteData.orgContact.telephone,
  email: websiteData.orgContact.email,
  sameAs: websiteData.orgSocialMediaProfiles,
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
      children,
      uri = '',
      mediaState,
      screenSizeState,
      updateMediaState,
      updateScreenSizeState,
      className = 'standard-page',
      websiteState,
      pageContext,
    } = this.props
    const { mode } = websiteState

    return (
      <MediaState
        className={`layout ${className} ${mode}-mode`}
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
        <InitializeMeta
          data={{ titleTemplate: `%s | ${websiteData.websiteName}` }}
        />
        <UpdateTitle title={websiteData.websiteAbstract} />
        <WebsiteSchema data={websiteSchemaData} />
        <OrganisationSchema data={organisationSchemaData} />
        <Header />
        <main role="main">{children}</main>
        <Footer />
      </MediaState>
    )
  }
}

// ----------------------------------------------------------------------------
// ---------------------------------------------------------------------- State
// ----------------------------------------------------------------------------
const withState = connect(
  (state) => ({
    mediaState: state.mediaState,
    screenSizeState: state.screenSizeState,
    websiteState: state.websiteState,
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
export default Layout
