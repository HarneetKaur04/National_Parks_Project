import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import Loading from "../components/loading";
import ToggleFavorite from '../components/ToggleFavorite';


  

const MyParks = () => {
    const { isLoading } = useAuth0();
    const { user } = useAuth0();
    console.log(user,  "checkinguser***")
        if (isLoading) {
        return <Loading />;
  }

  return (
    <div>


<ToggleFavorite/>




    </div>
  )
}

export default MyParks