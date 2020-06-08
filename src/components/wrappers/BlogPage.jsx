// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
// import { css } from "glamor";
import moment from 'moment'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import BlogPostSchema from '@bodhi-project/seo/lib/BlogPostSchema'
import { Article, Header, Footer } from '@bodhi-project/semantic-webflow'
import { FacebookProvider, Like as FBLike } from 'react-facebook'

import PrevNext from '@bodhi-project/components/lib/prev-next'

import Breadcrumb from 'antd/lib/breadcrumb'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/breadcrumb/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../Link'
import StandardPage from './StandardPage'

import seoHelper from '../../methods/seoHelper'
import withUrl from '../../methods/withUrl'

import data from '../../data/website.json'

const { Item: BItem } = Breadcrumb

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
const Page = props => {
  const { children, pageData } = props
  const {
    // pageTitle,
    pageTitle: title,
    nakedPageSlug: route,
    publishedTimestamp,
    // category,
    author,
    pageAbstract: abstract,
    cover,
    prev,
    next,
  } = pageData

  const isoDate = moment.unix(publishedTimestamp).format()

  const seoData = seoHelper(pageData)
  const blogPageSchemaData = {
    headline: title,
    image: `${data.nakedWebsiteUrl}${cover}`,
    url: `${data.websiteUrl}${route}`,
    datePublished: isoDate,
    dateModified: isoDate,
    description: abstract,
    publisher: {
      name: data.org.name,
      logo: {
        url: `${data.nakedWebsiteUrl}${data.org.logo}`,
        height: 900,
        width: 900,
      },
    },
    author: data.org.founders[0],
  }

  return (
    <StandardPage className="" seoData={seoData} {...props}>
      <BlogPostSchema data={blogPageSchemaData} />
      <Article>
        <Breadcrumb
          className="mask-p"
          separator="»"
          style={{ marginBottom: 30 }}
        >
          <BItem>
            <Link to="/">Home</Link>
          </BItem>
          <BItem>
            <Link to="/writings">Articles</Link>
          </BItem>
          <BItem>{title}</BItem>
        </Breadcrumb>
        <Header>
          <h1 className="mask-h3">{title}</h1>
          <div style={{ position: 'relative' }} className="mask-p">
            <FacebookProvider appId="218604115574634">
              <FBLike
                href={withUrl(route, data)}
                colorScheme="dark"
                share
                showFaces
              />
            </FacebookProvider>
          </div>
        </Header>
        {children}
        <Footer style={{ borderTop: '1px dotted #00006F' }}>
          <h1 className="mask-h4">More articles</h1>
          <PrevNext next={next} prev={prev} Link={Link} />
        </Footer>
      </Article>
    </StandardPage>
  )
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
