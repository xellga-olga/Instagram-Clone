import React from 'react';
import './profile.css'
import UserBio from "./UserBio/UserBio.jsx";
import StoryHighlights from "./StoryHighlights/StoryHighlights.jsx";
import Tablist from "./Tablist/Tablist.jsx";
import {Outlet} from "react-router-dom";

const Profile = () => {
  return (
    <div className="userBioProfile">
      <UserBio/>
      <div className='userContent'>
        <StoryHighlights/>
        <Tablist/>
        <Outlet/>
      </div>
    </div>
  );
};

export default Profile;