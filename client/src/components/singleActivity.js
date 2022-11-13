import React from 'react'
import {Link, useParams} from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';
import Loading from './loading';
import ToggleFavorite from './ToggleFavorite';

const SingleActivity = ({activitiesInfo}) => {

  const { loginWithRedirect, user } = useAuth0();

    let {activityType}  = useParams();
    console.log(activityType, "checkID")

    let chosenActivityParks = activitiesInfo.filter(item => item.name === activityType)

    console.log(chosenActivityParks)


  return (
    <>
    {chosenActivityParks.length >= 1 ? (
        <>
        <h2 className='heading'><hr/>Enjoy <span className='activity_heading'>{activityType}</span> in these National Parks <hr/> </h2>
        <div className='container1' >

      {chosenActivityParks[0].parks.map((item, index) => 
        <div className='container' key={index} >
            <div className= "card2">
                <h3>{item.fullName}</h3>
                <p>State: {item.states}</p><br/>
                <Link to={`/allparks/${item.parkCode}`}>Explore</Link><br/>
                {user? (<><br/><ToggleFavorite selectedPark={item}/></>): <button onClick={() => loginWithRedirect()}>Add</button>}
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