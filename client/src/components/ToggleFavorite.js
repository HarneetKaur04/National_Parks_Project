import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
// import {Link} from 'react-router-dom'

const ToggleFavorite = () => {
    const { user } = useAuth0();
    

    const handleDisplay = () => {
        if (user === undefined) {
            return (
                <p><span>
                    <a href="">Log in to see your favorite!</a>
                </span></p>);
        } else {
        let userSub = user.sub
        console.log(userSub, "frontend***")
        fetch(`http://localhost:5000/favorites/${userSub}`)
    }
}


  return (
    <div>
        {handleDisplay()}

    </div>
  )
}

export default ToggleFavorite;