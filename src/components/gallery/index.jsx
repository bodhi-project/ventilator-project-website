// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Gallery from 'react-photo-gallery'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** [description] */
const imageRenderer = ({ index, left, top, key, photo }) => (
  <GatsbyImage
    style={{ height: photo.height, width: photo.width, margin: 2 }}
    image={getImage(photo.data)}
  />
)

/** GalleryX */
const GalleryX = ({ images }) => (
  <div className="gallery as-paragraph">
    <Gallery
      photos={images}
      renderImage={imageRenderer}
      direction="row"
      targetRowHeight={300}
    />
  </div>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default GalleryX
