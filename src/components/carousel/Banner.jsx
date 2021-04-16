import React from 'react'
import { Link } from 'react-router-dom'
import { CloudinaryContext, Video, Transformation } from 'cloudinary-react'

const Item = ({ item, index }) => (
  <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
    <CloudinaryContext cloudName='dbmataac4'>
      <Video publicId='workshop/hero_video' poster='https://res.cloudinary.com/dbmataac4/video/upload/f_auto,q_auto/v1/workshop/hero_video.jpg' id='bgvideo' muted autoPlay loop playsInline>
        <Transformation quality='auto' />
      </Video>
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
