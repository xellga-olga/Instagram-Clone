import React from 'react';
import './middleSide.css'
import inst_logo from '../../../assets/inst_logo.png'
import StoryBlock from "./StoryBlock/StoryBlock.jsx";
import PostBlock from "./PostBlock/PostBlock.jsx";

const MiddleSide = () => {

  return (
    <div className="middle-side">
      <div className='mobileTopBar'>
        <div className='instaLogo'>
          <img className='instaLogoMobile' alt='instaLogoMobile' src={inst_logo}/>
        </div>
      </div>

      <StoryBlock />
      <PostBlock />
    </div>
  );
};

export default MiddleSide;