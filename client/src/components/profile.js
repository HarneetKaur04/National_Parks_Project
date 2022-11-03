import React from 'react';

const Profile = (props) => {
  let user = props.user;
  console.log(user);
 

  return (
    <div>
      <div className="user_img">
      <img src="https://static6.depositphotos.com/1010340/585/v/600/depositphotos_5859083-stock-illustration-panda-cartoon.jpg"
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        <div className="user_details">
          <h2>First Name: {user.given_name}</h2>
        </div>
        <div className="user_details">
          <h2>Last Name: {user.family_name}</h2>
        </div>
        <div className="user_details">
          <h2>Email: {user.email}</h2>
        </div>
      </div>
      
    </div>
  );
};

export default Profile;