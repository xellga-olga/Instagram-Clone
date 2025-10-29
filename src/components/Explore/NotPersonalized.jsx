import React, {useEffect, useState, useContext} from 'react';
import {useNavigate} from "react-router-dom";
import ApiContext from "../../ApiContext.js";

const NotPersonalized = () => {
  const [explore, setExplore] = useState([])

  const navigate = useNavigate();

  const { getExploreNotPersonalized } = useContext(ApiContext);


  useEffect(() => {
    getExploreNotPersonalized().then(setExplore);
  }, [getExploreNotPersonalized]);

  const handleClickPersonalized = () => {
    navigate('/explore');
  }

  return (
    <div className='exploreContainer'>
      <div className='explore'>
        <p tabIndex="0" onClick={handleClickPersonalized}>For you</p>
        <p tabIndex="0">Not personalized</p>
      </div>
      <div className='exploreContent'>
        {explore.map((item) => (
          <img key={item.id} alt='exploreImage' className='exploreImage' src={item.download_url}/>
        ))}
      </div>
    </div>
  );
};

export default NotPersonalized;