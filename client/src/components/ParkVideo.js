import React from 'react'
import ReactPlayer from 'react-player'

const ParkVideo = () => {
  return (
    <div className='full_container' > 
        <div className="video_space" >
          <div className="video_space3">
        <ReactPlayer style={{margin: 'auto'}} url="https://www.youtube.com/watch?v=KcI_xfryMD0"/>
        </div>
        </div>
        <div className="video_space2">
            <h3 className="video_heading">Our Great National Parks</h3>
            <p className="video_paragraph">Celebrate and discover the power of our planet’s greatest national parks and wild spaces. <br/> OUR GREAT NATIONAL PARKS beckons us to get out and explore, create new ways for these wild places to thrive, and vigorously preserve them for future generations to come. </p>
        </div>
        

    </div>
  )
}

export default ParkVideo