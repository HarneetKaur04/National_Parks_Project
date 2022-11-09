import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import Loading from './loading';
import ParkSummaryCards from './ParkSummaryCards';
import ToggleFavorite from './ToggleFavorite';
// import { useLocation } from "react-router-dom";


 


const SingleActivity = ({activitiesInfo}) => {

    let {activityType}  = useParams();
    console.log(activityType, "checkID")

    let chosenActivityParks = activitiesInfo.filter(item => item.name === activityType)

    console.log(chosenActivityParks)


  return (
    <>
    {chosenActivityParks.length >= 1 ? (
        <>
        <h2>Enjoy {activityType} here:</h2>
        <div className='container1' >

      {chosenActivityParks[0].parks.map((item, index) => 
        <div className='container' key={index} >
            <div className= "card2">
                <h3>{item.fullName}</h3>
                <p>State: {item.states}</p>
                <Link to={`/allparks/${item.parkCode}`}>Explore</Link>
                <ToggleFavorite selectedPark={item}/>
            </div>    
        </div>
      )}
     </div>
     </>
    ) : <Loading/>}
    
    
  </>
  )
}


export default SingleActivity;