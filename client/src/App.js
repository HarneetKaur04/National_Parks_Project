import "./App.css";
import React, {useState, useEffect} from 'react'
import NavBar from "./components/Navbar";
import Profile from "./components/profile";
import { useAuth0 } from '@auth0/auth0-react';
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import AllParks from "./pages/AllParks";
import Activities from "./pages/Activities";
import MyParks from "./pages/MyParks";
import SingleParkDetails from "./components/SingleParkDetails"
import SingleActivity from "./components/singleActivity";
import ContactUs from "./pages/ContactUs";
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  const [allParksData, setAllParksData] = useState([])
  const [allActivitiesData, setAllActivitiesData] = useState([])

  const { user } = useAuth0();
 
    const handleAllParksData = async () => {
      fetch("/parks")
        .then((response) => response.json())
        .then((parksData) => {
            setAllParksData(parksData.data);
            });
          };
          
    const handleAllActivitiesData = async () => {
            fetch("/activities")
              .then((response) => response.json())
              .then((activitiesData) => {
                setAllActivitiesData(activitiesData.data);
                  });
              }
              
              useEffect(() => {
                handleAllActivitiesData()
                handleAllParksData()
              }, []);

      console.log(allActivitiesData, "allActivitiesData****")

  return (
    <>
    <Routes>
        <Route path="/" element={<Landing />} />
        <Route
            path="*"
            element={
              <>
      <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/me" element={<Profile user={user}/>} />
        <Route path='/home' element={<Home parksInfo={allParksData} activitiesInfo={allActivitiesData}/>}/>
        <Route path='/allparks' element={<AllParks parksInfo={allParksData} />}/>
        <Route path='/activities' element={<Activities activitiesInfo={allActivitiesData} parksInfo={allParksData}/>}/>
        <Route path='/activities/:activityType' element={<SingleActivity activitiesInfo={allActivitiesData} parksInfo={allParksData}/>}/>
        <Route path='/allparks/:parkCode' element={<SingleParkDetails/>}/>
        <Route path='/myparks' element={<MyParks parksInfo={allParksData}/>}/>
        <Route path='/contact' element={<ContactUs />}/>
      </Routes>
    </div>
    </>
            }
            />
    </Routes>
    </>
  );
}

export default App;
