import ReactPlayer from 'react-player'
import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className='landing_start'>
       <Link className='landing_start_button' to={'/home'}><p>Get Started</p></Link>
        <ReactPlayer className='landing_video' width="100%" height="1300px" url="/landing1.mp4" top="0" left="0" object-fit="cover" playing={true} loop={true} controls={true} />
    </div>
  )
}

export default Landing