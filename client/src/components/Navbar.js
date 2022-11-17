import React from 'react';
import AuthNav from './auth-nav';
import {  Link } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import Loading from "./loading";

const Navbar= () =>{

  const { isLoading } = useAuth0();
  const { user } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }
  
  return (
    <div className="top">
      <div className="topLeft">
      <Link className="link" to="/home">
              <img className="topImgLeft" src='/logo.jpg'/>
        </Link>
      </div>
         <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/home">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/allparks">
              NATIONAL PARKS
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/activities">
              ACTIVITIES
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/myparks">
              MY PARKS
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>

   
      
      <div className="topRight">
        {!user ? null : (<><Link className="link" to="/me">
            <img
              className="topImgRight"
              src="https://static6.depositphotos.com/1010340/585/v/600/depositphotos_5859083-stock-illustration-panda-cartoon.jpg"
              alt="happy panda facing front"
            />
          </Link>
          <span>Hello {user.name}</span></>) }
     
      <div className="nav-container mb-3">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand logo" >
          <AuthNav />
        </div>
        </div>
      </nav>
    </div>
    </div>
    </div> 
    
  );
}
export default Navbar;