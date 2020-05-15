// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { Grommet, Box, Button, DropButton, Layer, TextInput } from 'grommet'
import MediaQuery from 'react-responsive'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import InitializeMeta from '@bodhi-project/seo/lib/InitializeMeta'
import UpdateTitle from '@bodhi-project/seo/lib/UpdateTitle'
import WebsiteSchema from '@bodhi-project/seo/lib/WebsiteSchema'
import OrganisationSchema from '@bodhi-project/seo/lib/OrganisationSchema'

import SplitNavigation from '@bodhi-project/components/lib/header-navigations/split/gatsby'
import '@bodhi-project/components/lib/header-navigations/split/style.less'
import '@bodhi-project/components/lib/header-navigations/primitives/mobile-layer/style.less'
import '@bodhi-project/components/lib/header-navigations/primitives/list-menu-renderer/style.less'

import MinimalFooterNavigation from '@bodhi-project/components/lib/footer-navigations/minimal'
import '@bodhi-project/components/lib/footer-navigations/minimal/style.less'

import '@bodhi-project/antrd/lib/just-futura/4.1.4/style/index.css'
// import '@bodhi-project/antrd/lib/just-futura/4.1.4/style/v2-compatible-reset.css'

import '@bodhi-project/components/lib/containers/default-container.less'
import '@bodhi-project/components/lib/containers/small-default-container.less'
import '@bodhi-project/components/lib/containers/small-container.less'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import './style.less'
import '../../styles/index.less'
import '../../styles/type.less'
import indexImage from '../../images/banners/launch.jpg'
import websiteData from '../../data/website.json'
import desktopMenu from '../../data/desktopMenu.json'
import Link from '../Link'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React
export const query = graphql`
  fragment max90 on File {
    childImageSharp {
      fluid(maxWidth: 90, quality: 80) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
  fragment max300 on File {
    childImageSharp {
      fluid(
        maxWidth: 300
        quality: 80
        srcSetBreakpoints: [100, 150, 200, 250, 300]
      ) {
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
  fragment max1500 on File {
    childImageSharp {
      fluid(
        maxWidth: 900
        quality: 80
        srcSetBreakpoints: [300, 600, 900, 1200, 1500]
      ) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
  fragment defaults on File {
    childImageSharp {
      fluid(
        maxWidth: 900
        quality: 80
        srcSetBreakpoints: [90, 360, 540, 720, 900]
      ) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
  query {
    mobileLogo: file(relativePath: { eq: "logos/logo.png" }) {
      ...defaults
    }
    desktopLogo: file(relativePath: { eq: "logos/logo.png" }) {
      ...defaults
    }
    logoIcon: file(relativePath: { eq: "logos/logo.png" }) {
      ...defaults
    }
  }
`

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
  }

  /** standard renderer */
  render() {
    const { children, uri = '' } = this.props

    return (
      <Fragment>
        <InitializeMeta
          data={{ titleTemplate: `%s | ${websiteData.websiteName}` }}
        />
        <UpdateTitle title={websiteData.websiteAbstract} />
        <WebsiteSchema data={websiteSchemaData} />
        <OrganisationSchema data={organisationSchemaData} />
        <StaticQuery
          query={query}
          render={data => {
            return (
              <div
                className="small-default-container"
                id="layout"
                data-uri={uri}
              >
                <header>
                  <br />
                  <SplitNavigation
                    {...this.props}
                    data={desktopMenu}
                    Link={Link}
                    Img={Img}
                    Box={Box}
                    Button={Button}
                    Layer={Layer}
                    TextInput={TextInput}
                    MediaQuery={MediaQuery}
                    DropButton={DropButton}
                    mobileLogo={data.mobileLogo.childImageSharp.fluid}
                    desktopLogo={data.desktopLogo.childImageSharp.fluid}
                    logoIcon={data.logoIcon.childImageSharp.fluid}
                    logoIconHeight={60}
                  />
                </header>
                <main role="main">{children}</main>
                <footer style={{ borderTop: '2px solid black' }}>
                  <br />
                  <p style={{ marginBottom: 0, textAlign: 'center' }}>
                    <strong>Disclaimer</strong>: These prototype designs are in
                    an experimental phase, and are{' '}
                    <u>not medically certified for use</u>.
                  </p>
                  <MinimalFooterNavigation data={desktopMenu} Link={Link} />
                </footer>
              </div>
            )
          }}
        />
      </Fragment>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

// ----------------------------------------------------------------------- Export
export default Layout
