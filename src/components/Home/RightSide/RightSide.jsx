import React, {useEffect, useState} from 'react';
import './rightSide.css'
import profile_image from "../../../assets/profile_image.jpg";
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const RightSide = () => {
  const { t, i18n } = useTranslation();
  const [users, setUsers] = useState([])


  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };


  useEffect(() => {
    fetch('https://picsum.photos/v2/list?page=6&limit=5')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, []);

  return (
    <div className='right-side'>
      <div className='user-profile'>
        <div className='user-block'>
          <div className='user'>
            <img src={profile_image} alt='profile image' className='profile_image_right-side'/>
          </div>

          <div className='user-name'>
            <Link to='/profile/olya__pla' className='user-nickname'>olya__pla</Link>
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
          <p>{t('rightSide.copyright')}</p>
          <div className="lang-switcher">
            <button onClick={() => changeLanguage('ru')}>RU</button>
            <button onClick={() => changeLanguage('en')}>EN</button>
          </div>
        </div>


      </div>
    </div>
  );
};

export default RightSide;