import React, {useState} from 'react'
import ParkSummaryCards from '../components/ParkSummaryCards'
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';
import ToggleFavorite from '../components/ToggleFavorite'

const AllParks = ({parksInfo}) => {

  const location = useLocation();
  const stateSelectedFromMap = location.state?.data
  const { loginWithRedirect, user } = useAuth0();
  // console.log(stateSelectedFromMap, "stateSelectedFromMap*****")

  const [open, setOpen] = useState(false);
  const [selectedState, setSelectedState] = useState(stateSelectedFromMap)
  const [search, setsearch] = useState(false)
  const [filteredData,setFilteredData] = useState(parksInfo);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleSearch = async(event) => {
    setsearch(true)
    setSelectedState(false)
    let value = event.target.value;
    console.log(value, "event")
    let result = [];
    console.log(value);
    result= parksInfo.filter((data) => {
    return data.fullName.toLowerCase().startsWith(value.toLowerCase())
    });
    console.log(result, "????");
    setFilteredData(result);
      }
    console.log(filteredData, "filteredData")

  // store all states in a variable. Some states shows multiple so filter only where only one state shows up
  let allStates = parksInfo.map(item => item.states).filter(item => item.length == 2)

  // use set to find all unique states
  let uniqueStates = [...new Set(allStates)]
  console.log(uniqueStates, "uniqueStates")

const handleSelectedState = (state) => {
  console.log(state, "checking state")
  setSelectedState(state)
  setOpen(!open);
}


console.log(selectedState, "check******")
  return (
    <div>
      <div className="dropdown">
      <button className="filter_button" onClick={handleOpen}>Filter Using States</button>
      {open ? (
        <ul className="menu">
          {uniqueStates.map(state => 
          <li className="menu-item" onClick={() => handleSelectedState(state)}>{state}</li>    
          )} 
        </ul>): null}
      </div>
      <br/>
      <div className="search">
          <input type="text" className="searchTerm" placeholder="Which park are you looking for?" onChange={(handleSearch)}/>
          <button type="submit" className="searchButton">
          <i className="fa-solid fa-magnifying-glass"></i>
          </button>
      </div>

      {selectedState? <ParkSummaryCards singleStateParksInfo={selectedState} parksInfo={parksInfo} num={1} title={`${selectedState} National Parks`} />: search ?  (<div className='container1' >
      <br/>
      {filteredData.map((item, index) => 
        <div className='container' key={index} >
        <div className= "card">
          <div className= "image">
            <img src ={item.images[0].url} onError={({ currentTarget }) => {
            currentTarget.src="./logo.jpg";
              }} alt={item.images[0].altText}/>
            <h3>{item.fullName}</h3>
            {user? <ToggleFavorite selectedPark={item}/> : <button onClick={() => loginWithRedirect()}><i className="fa-regular fa-heart"></i></button>}
          </div>
          <div className= "content">
            {item.description}
            </div>
          <div className= "content" style={{margin: 0}}>
            <Link to={`/allparks/${item.parkCode}`}>Explore</Link>
          </div>
        </div>    
      </div>)}
      </div>
      ): <ParkSummaryCards parksInfo={parksInfo} num={1} title={"All National Parks"} />}

    </div>
  )
}

export default AllParks;
