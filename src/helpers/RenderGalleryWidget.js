import React, { useEffect } from 'react';

const PGallery = () => {
  // debugger;
  const galleryInit = () => {
    console.log('Trying to initiate the widget')
    const mygallery = window.cloudinary.galleryWidget({
      container: '#my-gallery',
      cloudName: 'pictures77',
      imageBreakpoint: 200,
      dpr: 1,
      mediaAssets: [
        { tag: 'position_1', mediaType: 'video' },
        { tag: 'position_1' }
      ]
    })
    mygallery.render()
    console.log(mygallery)
  };

  useEffect(() => {
    // return (galleryInit(), [])
    return (galleryInit(), [])
  })

  return (
    <>
      <div id='my-gallery' style={{ maxWidth: '80%', margin: 'auto' }} />
    </>
  )
};

export default PGallery
