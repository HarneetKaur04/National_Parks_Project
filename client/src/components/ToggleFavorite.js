import React, {useState, useEffect} from 'react'
import { useAuth0 } from '@auth0/auth0-react';

const ToggleFavorite = ({selectedPark}) => {
    // console.log(selectedPark.parkCode, "selected Park to Toggle")
    const [fav, setFav] = useState([])
    const [isSaved, setIsSaved] = useState()
    const { loginWithRedirect, user } = useAuth0();

    useEffect(() => {
    const displayFav = async() => {
        await fetch(`http://localhost:5000/favorites/${user.sub}`, {
    })
        .then(response => response.json() )
        .then(data => {
            setFav(data);
        })
    }
    displayFav()
}, []);
    const handleClick = async() => {
        // console.log(user.sub, "check user Details")
        if (!fav.find(item=> item.park_code == selectedPark.parkCode)){
            
            await fetch(`http://localhost:5000/favorites`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({"park": selectedPark.parkCode, "user": user.sub})
        }
        )
        .then(response => response.json())
        .then(data => {
            setFav([...fav , data])
            setIsSaved(true)
        })
    } else {
            await fetch(`http://localhost:5000/favorites/${user.sub}/${selectedPark.parkCode}`, {
        method: "DELETE",
        })
        .then(response => response.json())
        .then(data => {
            // console.log(fav.filter(item=> item.park_code != selectedPark.parkCode), "delete request")
            setFav([fav.filter(item=> item.park_code != selectedPark.parkCode)])
            setIsSaved(false)
        })
        }
   
        }
        
        // console.log(fav, "info after request")
  return (
    <div>
        <button data-testId="buttonFav" onClick={()=> handleClick()}>{user? (!fav.find(item=> item.park_code == selectedPark.parkCode)? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>): <i className="fa-regular fa-heart">onClick={() => loginWithRedirect()}</i>}
        </button>
       
        
    </div>
  )
}

export default ToggleFavorite;