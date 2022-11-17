import ReactPlayer from 'react-player'
import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className='landing_start'>
       <Link className='landing_start_button' to={'/home'}><p>Get Started</p></Link>
        <ReactPlayer className='landing_video' width="100vw" height="100vh" position= "fixed" url="/landing1.mp4" object-fit="cover" playing={true} loop={true} controls={true} />
    </div>
  )
}

export default Landing