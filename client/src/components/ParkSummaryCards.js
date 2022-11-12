import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';
import ToggleFavorite from './ToggleFavorite'

const ParkSummaryCards = ({parksInfo, num, title, seeMore, singleStateParksInfo}) => {

  const { loginWithRedirect, user } = useAuth0();

  console.log(parksInfo, "check parksInfo State Card")

  let displayFewParksFromAllParks;
  function checkDataToDisplay () {
    
    if (singleStateParksInfo){
      console.log("hmm")
      displayFewParksFromAllParks = parksInfo.filter((item)=> item.states === singleStateParksInfo)
    } else {
      displayFewParksFromAllParks = parksInfo.filter((item, index)=> index % num === 0)
    }
  }

  checkDataToDisplay()

  console.log(displayFewParksFromAllParks, "")

  return (
    <>
    <div className='heading'>
    <h2>{title}</h2>
    <Link to="/allparks">{seeMore}</Link>
    </div>
    <div className='container1' >
      {displayFewParksFromAllParks.map((item, index) => 
        <div className='container' key={index} >
        <div className= "card">
          <div className= "image">
            <img src ={item.images[0].url} alt={item.images[0].altText}/>
            <h3>{item.fullName}</h3>
            {user? <ToggleFavorite selectedPark={item}/> : <button onClick={() => loginWithRedirect()}>Add</button>}
          </div>
          <div className= "content">
            <p>{item.description}</p>
          </div>
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