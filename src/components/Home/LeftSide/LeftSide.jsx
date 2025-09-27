import React from 'react';
import './leftSide.css'
import inst_logo from '../../../assets/inst_logo.png'
import {AtSign, Compass, Film, Heart, House, Menu, MessageCircle, Search, SquarePlus} from 'lucide-react';
import profile_image from '../../../assets/profile_image.jpg'
import {NavLink} from "react-router-dom";

const LeftSide = () => {
  return (
    <div className='left-side'>
      <div  className='logoPart'>
        <img className='logo' src={inst_logo} alt='logo' />
      </div>

      <div className='navlinkPart'>
        <NavLink to='/' className='navlink'>
          <House size={25}/>
          <div className='navHome'>Home</div>
        </NavLink>
        <NavLink to='/search' className='navlink'>
          <Search size={25}/>
          <div className='navHome'>Search</div>
        </NavLink>
        <NavLink to='/explore' className='navlink'>
          <Compass size={25}/>
          <div className='navHome'>Explore</div>
        </NavLink>
        <NavLink to='/reels' className='navlink'>
          <Film size={25}/>
          <div className='navHome'>Reels</div>
        </NavLink>
        <NavLink to='/messages' className='navlink'>
          <MessageCircle size={25}/>
          <div className='navHome'>Messages</div>
        </NavLink>
        <NavLink to='/notifications' className='navlink'>
          <Heart size={25}/>
          <div className='navHome'>Notifications</div>
        </NavLink>
        <NavLink to='/create' className='navlink'>
          <SquarePlus size={25}/>
          <div className='navHome'>Create</div>
        </NavLink>
        <NavLink to='/profile' className='navlink'>
          <img src={profile_image} alt='profile image' className='profile_image' />
          <div className='navHome'>Profile</div>
        </NavLink>

        <NavLink to='threads' className='navlink'>
          <AtSign size={25}/>
          <div className='navHome'>Threads</div>
        </NavLink>
        <NavLink to='/more' className='navlink'>
          <Menu size={25}/>
          <div className='navHome'>More</div>
        </NavLink>
      </div>
    </div>
  );
};

export default LeftSide;