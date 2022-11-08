import React, {useState, useEffect} from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import ParkSummaryCards from '../components/ParkSummaryCards';
import ToggleFavorite from '../components/ToggleFavorite';

const MyParks = ({parksInfo}) => {
    const { user } = useAuth0();
    const [favParks, setFavParks] = useState([])

    
    
    const handleDisplay = async() => {
        console.log(user, "check if user present??")
        if (user == undefined) {
            return (
                <p><span>
                    <a href="">Log in to see your favorite!</a>
                </span></p>);
        } else {
        let userSub = user.sub
        await fetch(`http://localhost:5000/favorites/${userSub}`)
        .then(response => response.json() )
        .then(display => {
            setFavParks(display);
            console.log(favParks, "favParks");
        }
            )      
        
    }
}
let moreDataOfSamePark = parksInfo.filter(elem => favParks.park_code.includes(elem.parkCode))

useEffect(()=> {
    handleDisplay()
  },[])


  console.log(favParks, "check favParks***")

  return (
    <div>
        {/* {favParks? <ParkSummaryCards parksInfo={favParks} num ={1}/> : (<p><span>
                    <a href="">Log in to see your favorite!</a>
                </span></p>)} */}
        {favParks ? (favParks.map(item=> (
            <>
        <p>{item.park_code}</p>
        <ToggleFavorite selectedPark={item}/>
        </>
        ))): (<p><span>
                    <a href="">Log in to see your favorite!</a>
                </span></p>)}

    </div>
  )
}

export default MyParks