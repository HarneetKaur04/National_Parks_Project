import React, { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import ParkSummaryCards from '../components/ParkSummaryCards';

// Input: props => parksInfo stores all parksInfo fetched fron National Parks API
const MyParks = ({ parksInfo }) => {
    // Stores the callback function required to login by redirecting to /authorize. 
    const { loginWithRedirect, user } = useAuth0();

    // Stores a list of all parks marked as favorite by the currently logged in user.
    const [favParks, setFavParks] = useState([])

    // Set to true if there is a currently logged in user.
    const [userValid, setUserValid] = useState(false)


    const handleDisplay = async () => {
        if (user === undefined) {
            console.log("invalid user")
        } else {
            setUserValid(true)
            let userSub = user.sub
            await fetch(`/api/favorites/${userSub}`)
                .then(response => response.json())
                .then(display => {
                    setFavParks(display);
                    console.log(favParks, "favParks");
                })
        }
    }

    // Stores a list of all the park codes marked as favorite by the user.
    let favParkCodes = favParks.map(item => item.park_code)

    let favParksInfo = parksInfo.filter(elem => favParkCodes.includes(elem.parkCode))

    useEffect(() => {
        handleDisplay()
    }, [])


    return (
        <div>
            {userValid ? <ParkSummaryCards parksInfo={favParksInfo} selectionIndex={1} title={"My Favorites"} /> : (<p><span>
                <button className="button_login" onClick={() => loginWithRedirect()}>Please login to save your favorites!</button>
            </span></p>)}
        </div>
    )
}

export default MyParks