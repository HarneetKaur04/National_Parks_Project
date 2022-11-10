import ReactPlayer from 'react-player'
import React from 'react'

const Landing = () => {
  return (
    <div>
         
        <button className='landing_start_button'>Get Started</button>
        <ReactPlayer url="/landing1.mp4" width="100%" height="100%" controls/>
    </div>
  )
}

export default Landing