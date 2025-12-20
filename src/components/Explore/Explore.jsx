import React, {useEffect, useState, useContext} from 'react';
import './explore.css'
import {useNavigate} from "react-router-dom";
import ApiContext from '../../context/ApiContext.js';
import { useTranslation } from 'react-i18next';

const Explore = () => {
  const { t } = useTranslation();
  const [explore, setExplore] = useState([])

  const { getExplorePersonalized } = useContext(ApiContext);

  useEffect(() => {
    getExplorePersonalized().then(setExplore);
  }, [getExplorePersonalized]);

  const navigate = useNavigate();

  const handleClickNotPersonalized = () => {
    navigate('/explore/not_personalized');
  }

  return (
    <div className='exploreContainer'>
      <div className='explore' >
        <p  tabIndex="0">{t('discover.forYou')}</p>
        <p  tabIndex="0" onClick={handleClickNotPersonalized}>{t('discover.notPersonalized')}</p>
      </div>
      <div className='exploreContent'>
        {explore.map((item) => (
          <img
            key={item.id}
            alt="exploreImage"
            className="exploreImage"
            src={item.urls.regular}
          />
        ))}
      </div>
    </div>
  );
};

export default Explore;