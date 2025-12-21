import React, {useEffect, useState} from 'react';
import './userbio.css'
import defaultAvatar from '../../../firebase storage/avatars/default-avatar.jpg'
import profile_image from "../../../assets/profile_image.jpg";
import {Settings} from 'lucide-react';

import {useTranslation} from 'react-i18next';
import {Link} from "react-router-dom";

import {signOut} from "firebase/auth";
import { auth } from "../../../firebase storage/firebase.js";

const UserBio = () => {
  const {t} = useTranslation();

  const [randomNumbers, setRandomNumbers] = useState(0);

  const [avatarURL, setAvatarURL] = useState(auth.currentUser?.photoURL || defaultAvatar);

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);



  useEffect(() => {
    fetch('https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new')
      .then(res => res.json())
      .then(data => setRandomNumbers(data))
  }, [])

  const handleSignOut = () => {
    console.log('Sign out clicked');
    signOut(auth)
      .then(() => console.log('User signed out'))
      .catch(err => console.error('Sign out error:', err));
  };

  const openSettings = () => {
    console.log('Open settings clicked');
    setIsSettingsOpen(true);
  };

  const closeSettings = () => {
    console.log('Close settings clicked');
    setIsSettingsOpen(false);
  };

  const username = auth.currentUser?.displayName;

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const previewURL = URL.createObjectURL(file);
    setAvatarURL(previewURL);
  };

  const deleteAvatar = () => {
    setAvatarURL(defaultAvatar);
  }

  return (
    <>
      <div className='userBio'>

        <div>
          <div className="avatarUpload">
            <img
              src={avatarURL}
              alt="profile image"
              className="imageUserBio"
            />
            <button
              type="button"
              onClick={() => document.getElementById('avatarInput').click()}
              className="changeAvatarBtn"
            >
              Изменить фото
            </button>
            <button
              className='deleteAvatarBtn'
              onClick={deleteAvatar}
              type='button'
            >
              Удалить фото
            </button>
            <input
              type="file"
              accept="image/*"
              id="avatarInput"
              style={{ display: 'none' }}
              onChange={handleAvatarUpload}
            />
          </div>
        </div>

        <div className="userBioInfo">
          <div className="topLine">
            <span className="userBioNickname">{username || 'Loading...'}</span>

            <div className="btnProfileUserBio">
              <button>{t('userBio.editProfile')}</button>
              <button>{t('userBio.viewArchive')}</button>
            </div>

            <button className="btnSettingsUserBio">
              <Settings onClick={() => setIsSettingsOpen(true)}/>
            </button>
          </div>

          <div className='bottomLine'>
            <ul>
              <li><strong>{randomNumbers > 0 ? randomNumbers : 0}</strong> {t('userBio.publications')}</li>
              <li><strong>{randomNumbers > 0 ? randomNumbers : 0}</strong> {t('userBio.subscribers')}</li>
              <li><strong>{randomNumbers > 0 ? randomNumbers : 0}</strong> {t('userBio.subscriptions')}</li>
            </ul>
          </div>
        </div>

      </div>
      {isSettingsOpen && (
        <div className='modalSettingsOverlay' onClick={() => setIsSettingsOpen(false)}>
          <div className='modalSettingsContent' onClick={(e) => e.stopPropagation()}>
            {/*<button>*/}
            {/*  Приложения и сайты*/}
            {/*</button>*/}
            {/*<button>*/}
            {/*  Профессиональный аккаунт*/}
            {/*</button>*/}
            {/*<button>*/}
            {/*  Уведомления*/}
            {/*</button>*/}
            {/*<button>*/}
            {/*  Родительский контроль*/}
            {/*</button>*/}

            <Link to="accounts/manage_access/" className="modalLink">
              Приложения и сайты
            </Link>

            <Link to="accounts/professional_account_settings/" className="modalLink">
              Профессиональный аккаунт
            </Link>

            <Link to="emails/settings/" className="modalLink">
              Уведомления
            </Link>

            <Link to="familycenter/settings/" className="modalLink">
              Родительский контроль
            </Link>

            <button className='logout' onClick={handleSignOut}>
              Выход
            </button>

            <button onClick={closeSettings}>
              Отмена
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default UserBio;