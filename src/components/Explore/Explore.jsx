import React, {useEffect, useState, useContext} from 'react';
import './explore.css'
import {useNavigate} from "react-router-dom";
import ApiContext from '../../context/ApiContext.js';


const Explore = () => {
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
        <p  tabIndex="0">For you</p>
        <p  tabIndex="0" onClick={handleClickNotPersonalized}>Not personalized</p>
      </div>
      <div className='exploreContent'>
        {explore.map((item, index) => (
          <img key={index.id} alt='exploreImage' className='exploreImage' src={item.urls.regular}/>
        ))}
      </div>
    </div>
  );
};

export default Explore;