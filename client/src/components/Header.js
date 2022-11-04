import React, { Component, useState } from 'react'
import USAMap from "react-usa-map";
import ParkSummaryCards from './ParkSummaryCards';
import { Link } from 'react-router-dom'

const Header = ({parksInfo}) => {

  const [stateSelected, setStateSelected] = useState(null)

  const mapHandler = (event) => {
    setStateSelected(event.target.dataset.name)
  };


  return (
    <div className="header">
    <img
      className="headerImg"
      src="https://img5.goodfon.com/wallpaper/nbig/1/da/ray-bilcliff-by-ray-bilcliff-beautiful-dawn-evening-landscap.jpg"
      alt="mountains"
    />
     <div className="headerTitles">
      <div className="headerTitleLg">The Great Outdoors</div>
      <div className="headerTitleSml">EXPLORE ~ AWAKEN ~ DISCOVER</div>
      
      <div className="map">
        
        <USAMap  onClick={mapHandler} />
        <span className='headerStateSelect'>{!stateSelected? "Select a State" : (<p>You Selected:<p><Link to="/allparks" state={{ data: stateSelected }}>{stateSelected}</Link></p></p>)}</span>

      </div>
    </div>
  </div>
  )
}

export default Header