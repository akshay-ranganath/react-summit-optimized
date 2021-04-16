import React, { useEffect } from 'react'

const PGallery = () => {
  const galleryInit = () => {
    console.log('Trying to initiate the widget')
    const mygallery = window.cloudinary.galleryWidget({
      container: '#my-gallery',
      cloudName: 'dbmataac4',
      imageBreakpoint: 200,
      dpr: 1,
      mediaAssets: [
        { tag: 'sku001', mediaType: 'video' },
        { tag: 'sku001' }
      ]
    })
    mygallery.render()
    console.log(mygallery)
  }

  useEffect(() => {
    // return (galleryInit(), [])
    return (galleryInit(), [])
  })

  return (
    <>
      <div id='my-gallery' style={{ maxWidth: '80%', margin: 'auto' }} />
    </>
  )
}

export default PGallery
