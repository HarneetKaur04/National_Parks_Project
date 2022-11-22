import "./App.css";
import React, { useState, useEffect } from 'react'
import NavBar from "./components/Navbar";
import Profile from "./components/Auth0/profile";
import { useAuth0 } from '@auth0/auth0-react';
import Home from "./pages/Home";
import AllParks from "./pages/AllParks";
import Activities from "./pages/Activities";
import MyParks from "./pages/MyParks";
import SingleParkDetails from "./components/SingleParkDetails"
import SingleActivity from "./components/singleActivity";
import ContactUs from "./pages/ContactUs";
import { Route, Routes, Link } from 'react-router-dom';
import Footer from "./components/Footer";


function App() {
  // Contains a list of data related to all national parks in USA.
  // Populated by handleAllParksData().
  const [allParksData, setAllParksData] = useState([])

  // Contains different activities available across all national
  // parks in USA. Populated by handleAllActivitiesData().
  const [allActivitiesData, setAllActivitiesData] = useState([])

  // Stores the current auth state.
  const { user } = useAuth0();

  const handleAllParksData = async () => {
    await fetch("/api/parks")
      .then((response) => response.json())
      .then((parksData) => {
        setAllParksData(parksData.data);
      });
  };

  const handleAllActivitiesData = async () => {
    await fetch("/api/activities")
      .then((response) => response.json())
      .then((activitiesData) => {
        setAllActivitiesData(activitiesData.data);
      });
  }

  useEffect(() => {
    handleAllActivitiesData()
    handleAllParksData()
  }, []);

  // console.log(allActivitiesData, "allActivitiesData****")

  return (
    <>
      <Routes>
        <Route
          path="*"
          element={
            <div className="App">
              <NavBar />
              <Routes>
                <Route path="/me" element={<Profile user={user} />} />
                <Route path='/' element={<Home parksInfo={allParksData} activitiesInfo={allActivitiesData} />} />
                <Route path='/allparks' element={<AllParks parksInfo={allParksData} />} />
                <Route path='/activities' element={<Activities activitiesInfo={allActivitiesData} parksInfo={allParksData} />} />
                <Route path='/activities/:activityType' element={<SingleActivity activitiesInfo={allActivitiesData} parksInfo={allParksData} />} />
                <Route path='/allparks/:parkCode' element={<SingleParkDetails />} />
                <Route path='/myparks' element={<MyParks parksInfo={allParksData} />} />
                <Route path='/contact' element={<ContactUs />} />
              </Routes>
              <Footer />
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
