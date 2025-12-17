import React from 'react';
import './leftSide.css'
import inst_logo from '../../../assets/inst_logo.png'
import {AtSign, Compass, Film, Heart, House, Menu, MessageCircle, Search, SquarePlus} from 'lucide-react';
import profile_image from '../../../assets/profile_image.jpg'
import {NavLink} from "react-router-dom";
import { useTranslation } from 'react-i18next';

import { auth } from '../../../firebase';

const LeftSide = ({setSearchOpen, setCreateOpen, setNotificationsOpen}) => {
  const { t, i18n } = useTranslation();

  const username = auth.currentUser?.displayName;

  return (
    <div className='left-side'>
      <div  className='logoPart'>
        <img className='logo' src={inst_logo} alt='logo' />
      </div>

      <div className='navlinkPart'>
        <NavLink to='/home' className='navlink'>
          <House size={25}/>
          <div className='navHome'>{t('home')}</div>
        </NavLink>

        <NavLink to='#'
                 className='navlink'
                 onClick={(e) =>
                 {e.preventDefault();
                   setSearchOpen(true);
                 }}
        >
          <Search size={25}/>
          <div className='navHome'>{t('search')}</div>
        </NavLink>

        <NavLink to='/explore' className='navlink'>
          <Compass size={25}/>
          <div className='navHome'>{t('explore')}</div>
        </NavLink>

        <NavLink to='/reels' className='navlink'>
          <Film size={25}/>
          <div className='navHome'>{t('reels')}</div>
        </NavLink>

        <NavLink to='/direct' className='navlink'>
          <MessageCircle size={25}/>
          <div className='navHome'>{t('messages')}</div>
        </NavLink>

        <NavLink to='#' className='navlink' onClick={(e) => {
          e.preventDefault();
          setNotificationsOpen(true);
        }}>
          <Heart size={25}/>
          <div className='navHome'>{t('notifications')}</div>
        </NavLink>

        <NavLink to='#' className='navlink'
                 onClick={(e) =>
                 {e.preventDefault();
                   setCreateOpen(true);
                 }}
        >
          <SquarePlus size={25}/>
          <div className='navHome'>{t('create')}</div>
        </NavLink>

        <NavLink to={`/profile/${username}`} className='navlink'>
          <img src={profile_image} alt='profile image' className='profile_image' />
          <div className='navHome'>{t('profile')}</div>
        </NavLink>

        <a href='https://www.threads.com/'
           target='_blank'
           className='navlink'
        >
          <AtSign size={25}/>
          <div className='navHome'>{t('threads')}</div>
        </a>

        <NavLink to='/more' className='navlink'>
          <Menu size={25}/>
          <div className='navHome'>{t('more')}</div>
        </NavLink>
      </div>
    </div>
  );
};

export default LeftSide;