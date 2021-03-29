import React from 'react'
import { Video, CloudinaryContext } from 'cloudinary-react'
import { Link } from 'react-router-dom'

const Item = ({ item, index }) => (
  <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
    <CloudinaryContext cloudName='dbmataac4'>
      <Video publicId='workshop/hero_video' id='bgvideo' muted autoPlay loop playsInline />
    </CloudinaryContext>

  </div>
)

const Banner = (props) => {
  return (
    <div
      id={props.id}
      className={`carousel slide ${props.className}`}
      data-ride='carousel'
      style={{ minHeight: 100 }}
    >

      <div className='carousel-inner'>
        {props.data.map((item, index) => (
          <Item item={item} index={index} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Banner
