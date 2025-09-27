import React from 'react';
import './profile.css'
import UserBio from "./UserBio/UserBio.jsx";

const Profile = () => {
  return (
      <div className="userBioProfile">
        <UserBio />
      </div>
  );
};

export default Profile;