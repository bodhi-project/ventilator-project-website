// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import StandardPage from '../../components/wrappers/StandardPage'

import seoHelper from '../../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React
const { TabPane } = Tabs
const pageData = {
  pageTitle: 'Home | Auroville Dynamics',
  nakedPageSlug: '',
  pageAbstract: 'Auroville Dynamics',
}

const seoData = seoHelper(pageData)

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <Fragment>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green'
          if (tag === 'loser') {
            color = 'volcano'
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          )
        })}
      </Fragment>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
]

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    feature1: file(relativePath: { eq: "blowfish/feature1.jpg" }) {
      ...max1500
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
            <div className="feature">
              <Img fluid={this.props.data.feature1.childImageSharp.fluid} />
              <Tooltip
                title={
                  <p style={{ marginBottom: 0 }}>
                    <strong>Chassis</strong>, built out of laser-cut acrylic or
                    aluminium, and includes multiple 3D printed components.
                    Measures ? X ? X ? inches (? x ? x ? mm) and weighes ? kg.
                  </p>
                }
              >
                <span className="tip tip1">&nbsp;</span>
              </Tooltip>
              <Tooltip
                title={
                  <p>
                    <strong>Breath delivery</strong>, the ventilator delivers
                    breaths by compressing a conventional bag-valve mask with a
                    pivoting cam arm. Tidal volume is 300ml to 500ml. Next
                    iteration will allow 300ml to 800ml.
                  </p>
                }
              >
                <span className="tip tip2">&nbsp;</span>
              </Tooltip>
            </div>
          </TabPane>
          <TabPane
            tab={
              <a href="#" className="mask-p" onClick={e => e.preventDefault()}>
                Specs.
              </a>
            }
            key="3"
          >
            <Table columns={columns} dataSource={data} />
          </TabPane>
          <TabPane
            tab={
              <a href="#" className="mask-p" onClick={e => e.preventDefault()}>
                Videos
              </a>
            }
            key="2"
          >
            Content of Tab Pane 2
          </TabPane>
          <TabPane
            tab={
              <a href="#" className="mask-p" onClick={e => e.preventDefault()}>
                Timeline
              </a>
            }
            key="4"
          >
            Content of Tab Pane 4
          </TabPane>
          <TabPane
            tab={
              <a href="#" className="mask-p" onClick={e => e.preventDefault()}>
                Downloads
              </a>
            }
            key="5"
          >
            Content of Tab Pane 5
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
