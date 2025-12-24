import React, {useContext, useEffect, useState} from 'react';
import './rightSide.css'
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {auth} from "../../../firebase storage/firebase.js";
import defaultAvatar from "../../../firebase storage/avatars/default-avatar.jpg";
import {UserAvatarContext} from "../../../context/UserAvatarContext.jsx";


const RightSide = () => {
  const { t, i18n } = useTranslation();
  const [users, setUsers] = useState([])
  const [isLangOpen, setIsLangOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleLangDropdown = () => {
    setIsLangOpen((prev) => !prev);
  };

  useEffect(() => {
    fetch('https://picsum.photos/v2/list?page=6&limit=5')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, []);

  const username = auth.currentUser?.displayName;

  const {avatar} = useContext(UserAvatarContext);

  return (
    <div className='right-side'>
      <div className='user-profile'>
        <div className='user-block'>
          <div className='user'>
            <img src={avatar || defaultAvatar} alt='default-avatar' className='profile_image_right-side'/>
          </div>

          <div className='user-name'>
            <Link to={`/profile/${username}`}  className='user-nickname'>{username || 'Loading...'}</Link>
          </div>

        </div>
        <button className='switch-btn'>
          {t('rightSide.switch')}
        </button>
      </div>
      <div className='users-recommendation'>
        <p>
          {t('rightSide.recommendations')}
        </p>
        <button className='recommendation-btn'>{t('rightSide.seeAll')}</button>
      </div>

      <div className='recommendation-users-profile'>
        <div>
          {users.map((user, i) => (
            <div className='users' key={i}>
              <div className='users-info'>
                <div key={i.id} className='users-img'>
                  <img src={user.download_url} alt='profile image' className='img-rec-users'/>
                </div>
                <div className='users-text'>
                  <div key={i.id} className='usersName'>{user.author}</div>
                  <p>{t('rightSide.recommendations')}</p>
                </div>
              </div>
              <button className='follow-btn'>{t('rightSide.follow')}</button>
            </div>
          ))}
        </div>

        <div className='copyright'>
          <div className="footer-links">
            <button type="button" className="footer-link">
              {t('rightSide.info')}
            </button>
            <span className="footer-separator">·</span>
            <button type="button" className="footer-link">
              {t('rightSide.help')}
            </button>
            <span className="footer-separator">·</span>
            <button type="button" className="footer-link">
              {t('rightSide.privacy')}
            </button>
            <span className="footer-separator">·</span>
            <button type="button" className="footer-link">
              {t('rightSide.terms')}
            </button>
          </div>

          <div className="lang-switcher">
            <select
              className="lang-select"
              value={i18n.language}
              onChange={(e) => changeLanguage(e.target.value)}
            >
              <option value="ru">Русский</option>
              <option value="en">English</option>
            </select>
          </div>

          <p>{t('rightSide.copyright')}</p>
        </div>


      </div>
    </div>
  );
};

export default RightSide;