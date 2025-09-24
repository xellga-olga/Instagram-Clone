import React from 'react';
import './leftSide.css'
import inst_logo from '../../../assets/inst_logo.png'
import {AtSign, Compass, Film, Heart, House, Menu, MessageCircle, Search, SquarePlus} from 'lucide-react';
import profile_image from '../../../assets/profile_image.jpg'

const LeftSide = () => {
  return (
    <div className='left-side'>
      <div className='logoPart'>
        <img className='logo' src={inst_logo} alt='logo' />
      </div>

      <div className='navlinkPart'>
        <div className='navlink'>
          <House size={25}/>
          <div className='navHome'>Home</div>
        </div>
        <div className='navlink'>
          <Search size={25}/>
          <div className='navHome'>Search</div>
        </div>
        <div className='navlink'>
          <Compass size={25}/>
          <div className='navHome'>Explore</div>
        </div>
        <div className='navlink'>
          <Film size={25}/>
          <div className='navHome'>Reels</div>
        </div>
        <div className='navlink'>
          <MessageCircle size={25}/>
          <div className='navHome'>Messages</div>
        </div>
        <div className='navlink'>
          <Heart size={25}/>
          <div className='navHome'>Notifications</div>
        </div>
        <div className='navlink'>
          <SquarePlus size={25}/>
          <div className='navHome'>Create</div>
        </div>
        <div className='navlink'>
          <img src={profile_image} alt='profile image' className='profile_image' />
          <div className='navHome'>Profile</div>
        </div>

        <div className='navlink'>
          <AtSign size={25}/>
          <div className='navHome'>Threads</div>
        </div>
        <div className='navlink'>
          <Menu size={25}/>
          <div className='navHome'>More</div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;