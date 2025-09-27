import React from 'react';
import './profile.css'
import UserBio from "./UserBio/UserBio.jsx";
import CardUserProfile from "./CardUserProfile/CardUserProfile.jsx";
import StoryHighlights from "./StoryHighlights/StoryHighlights.jsx";

const Profile = () => {
  return (
      <div className="userBioProfile">
        <UserBio />
        <StoryHighlights />
        <div className='userContent'>
          <CardUserProfile className="userPageCard" />
        </div>
      </div>
  );
};

export default Profile;