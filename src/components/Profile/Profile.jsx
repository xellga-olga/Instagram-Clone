import React from 'react';
import './profile.css'
import UserBio from "./UserBio/UserBio.jsx";
import CardUserProfile from "./CardUserProfile/CardUserProfile.jsx";
import StoryHighlights from "./StoryHighlights/StoryHighlights.jsx";
import Tablist from "./Tablist/Tablist.jsx";

const Profile = () => {
  return (
      <div className="userBioProfile">
        <UserBio />
        <div className='userContent'>
          <StoryHighlights />
          <Tablist/>
          <CardUserProfile className="userPageCard" />
        </div>
      </div>
  );
};

export default Profile;