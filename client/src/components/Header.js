import React, { useState } from 'react'
import USAMap from "react-usa-map";
import { Link } from 'react-router-dom'

const Header = () => {

  const [stateSelected, setStateSelected] = useState(null)

  const mapHandler = (event) => {
    setStateSelected(event.target.dataset.name)
  };

  return (
    <div className="header">
      <img
        className="headerImg"
        src="https://store-images.s-microsoft.com/image/apps.21435.14012602786650760.c983ead2-6f07-48e2-8383-1e3f9958d48e.a552b600-c88f-4488-8523-35a8c79ec837"
        alt="mountains"
      />
      <div className="headerTitles">
        <div className="headerTitleLg">The Great Outdoors</div>
        <div className="headerTitleSml">EXPLORE ~ AWAKEN ~ DISCOVER</div>
        <span className='headerStateSelect'>{!stateSelected ? <p>Select a State</p> : (<><p>You Selected:</p><Link to="/allparks" state={{ data: stateSelected }}>{stateSelected}</Link></>)}</span>
        <div className="map" data-testid="content-input3">
          <USAMap onClick={mapHandler} />
        </div>
      </div>
    </div>
  )
}

export default Header