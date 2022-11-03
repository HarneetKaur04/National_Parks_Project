import React, { Component, useState } from 'react'
import USAMap from "react-usa-map";

const Header = () => {

  const mapHandler = (event) => {
    console.log(event.target.dataset.name); 
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
        <USAMap onClick={mapHandler}/>
      </div>
    </div>
  </div>
  )
}

export default Header