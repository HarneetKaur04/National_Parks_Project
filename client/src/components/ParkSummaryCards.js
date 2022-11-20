import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';
import ToggleFavorite from './ToggleFavorite'

const ParkSummaryCards = ({ parksInfo, num, title, seeMore, singleStateParksInfo }) => {

  // Stores the callback function required to login by redirecting to /authorize. 
  const { loginWithRedirect, user } = useAuth0();

  function checkDataToDisplay() {
    if (singleStateParksInfo) {
      return parksInfo.filter((item) => item.states === singleStateParksInfo)
    } else {
      return parksInfo.filter((item, index) => index % num === 0)
    }
  }

  let parksToDisplay = checkDataToDisplay()

  return (
    <>
      <div className='heading'>
        <h2>{title}</h2>
        <Link to="/allparks">{seeMore}</Link>
      </div>
      <div className='container1' >
        {parksToDisplay.map((item, index) =>
          <div className='container' key={index} >
            <div className="card">
              <div className="image">
                <img src={item.images[0].url} onError={({ currentTarget }) => {
                  currentTarget.src = "./logo.jpg";
                }} alt={item.images[0].altText} />
                <h3>{item.fullName}</h3>
                {user ? <ToggleFavorite selectedPark={item} /> : <button onClick={() => loginWithRedirect()}><i className="fa-regular fa-heart"></i></button>}

              </div>
              <div className="content">
                {item.description}
              </div>
              <div className="content" style={{ margin: 0 }}>
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