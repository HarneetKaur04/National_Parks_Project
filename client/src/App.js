import "./App.css";
// import ReactPlayer from 'react-player'
import React, {useState, useEffect} from 'react'
import NavBar from "./components/Navbar";
import Profile from "./components/profile";
import { useAuth0 } from '@auth0/auth0-react';
import Home from "./pages/Home";
import AllParks from "./pages/AllParks";
import SingleParkDetails from "./components/SingleParkDetails"

import { Route, Routes, Link } from 'react-router-dom';

function App() {
  const [allParksData, setAllParksData] = useState([])

  const { user } = useAuth0();

  useEffect(() => {
    const allParksData = async () => {
      fetch("http://localhost:5000/parks")
        .then((response) => response.json())
        .then((parksData) => {
            setAllParksData(parksData.data);
            });
          }
          allParksData()
    }, []);

  return (
    <div className="App">
      <NavBar />
      
      <Routes>
      {/* <Route path="/" element={<Students user={user}/>} /> */}
      <Route path="/me" element={<Profile user={user}/>} />
      <Route path='/' element={<Home parksInfo={allParksData}/>}/>
      <Route path='/allparks' element={<AllParks parksInfo={allParksData} />}/>
      <Route path='/allparks/:parkCode' element={<SingleParkDetails/>}/>
          {/* // <Route path='/post' element={<Single/>}/>
          // <Route path='/write' element={<Write/>}/>
          <Route path='/favorite' element={<Favorite/>}/> */}
      </Routes>
      
    </div>
  );
}

export default App;
