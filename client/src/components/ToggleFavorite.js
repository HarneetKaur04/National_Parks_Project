import React, { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react';

// Input: props => 
// selectedPark: selected individual park info
// isFavorite: initial favorite state of park from park summary component
const ToggleFavorite = ({ selectedPark, isFavorite }) => {
    // List of all parks marked as favorite by the logged in user.
    const [isFav, setFav] = useState(isFavorite)

    // Stores the callback function required to login by redirecting to /authorize. 
    const { loginWithRedirect, user } = useAuth0();

    const handleClick = async () => {
        // console.log(user.sub, "check user Details")
        if (!isFav) {
            await fetch(`/api/favorites`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ "park": selectedPark.parkCode, "user": user.sub })
            }
            )
                .then(response => response.json())
                .then(data => {
                    setFav(true)                 
                })
        } else {
            await fetch(`/api/favorites/${user.sub}/${selectedPark.parkCode}`, {
                method: "DELETE",
            })
                .then(response => response.json())
                .then(data => {
                    setFav(false)
                })
        }
    }
    useEffect(() => {
        setFav(isFavorite)
    }, [isFavorite])
    // console.log(fav, "info after request")
    return (
        <div>
            <button data-testId="buttonFav" onClick={() => handleClick()}>{user ? (!isFav ? <i className="fa-regular fa-heart"></i> : <i className="fa-solid fa-heart"></i>) : <i className="fa-regular fa-heart">onClick={() => loginWithRedirect()}</i>}
            </button>
        </div>
    )
}

export default ToggleFavorite;