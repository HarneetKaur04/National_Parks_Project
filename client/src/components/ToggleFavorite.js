import React, { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react';

// Input: props => selectedPark: selected individual park info
const ToggleFavorite = ({ selectedPark }) => {
    // List of all parks marked as favorite by the logged in user.
    const [favParks, setFavParks] = useState([])

    // Stores the callback function required to login by redirecting to /authorize. 
    const { loginWithRedirect, user } = useAuth0();

    useEffect(() => {
        const displayFav = async () => {
            await fetch(`/api/favorites/${user.sub}`, {
            })
                .then(response => response.json())
                .then(data => {
                    setFavParks(data);
                })
        }
        displayFav()
    }, []);

    const handleClick = async () => {
        // console.log(user.sub, "check user Details")
        if (!favParks.find(item => item.park_code === selectedPark.parkCode)) {

            await fetch(`/api/favorites`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ "park": selectedPark.parkCode, "user": user.sub })
            }
            )
                .then(response => response.json())
                .then(data => {
                    setFavParks([...favParks, data])
                })
        } else {
            await fetch(`/api/favorites/${user.sub}/${selectedPark.parkCode}`, {
                method: "DELETE",
            })
                .then(response => response.json())
                .then(data => {
                    // console.log(fav.filter(item=> item.park_code != selectedPark.parkCode), "delete request")
                    setFavParks([favParks.filter(item => item.park_code !== selectedPark.parkCode)])
                })
        }
    }

    // console.log(fav, "info after request")
    return (
        <div>
            <button data-testId="buttonFav" onClick={() => handleClick()}>{user ? (!favParks.find(item => item.park_code === selectedPark.parkCode) ? <i className="fa-regular fa-heart"></i> : <i className="fa-solid fa-heart"></i>) : <i className="fa-regular fa-heart">onClick={() => loginWithRedirect()}</i>}
            </button>
        </div>
    )
}

export default ToggleFavorite;