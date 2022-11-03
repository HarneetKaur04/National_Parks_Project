import React from 'react'
import { Link } from 'react-router-dom'
// import ToggleFavorite from './ToggleFavorite'

const ParkSummaryCards = ({parksInfo, num, title, seeMore}) => {

  // console.log(parksInfo, "check parksInfo State Card")
  let displayFewParksFromAllParks = parksInfo.filter((item, index)=> index % num === 0)

  return (
    <>
    <h2>{title}</h2>
    {seeMore}
    <div className='container1' >
      {displayFewParksFromAllParks.map((item, index) => 
        <div className='container' key={index} >
        <div className= "card">
          <div className= "image">
            <img src ={item.images[0].url} alt={item.images[0].altText}/>
            <h3>{item.fullName}</h3>
            {/* <ToggleFavorite parkCode={item.parkCode}/> */}
          </div>
          <div className= "content">
            <p>{item.description}</p>
          </div>
          {/* <div className= "content"><button onClick={() => handleChosenPark(item)}>Explore</button></div> */}
          <div className= "content">
            <Link to={`/allparks/${item.parkCode}`}>Explore</Link>
          </div>
        </div>    
      </div>
      )}
     </div>
     </>
  )
}

export default ParkSummaryCards