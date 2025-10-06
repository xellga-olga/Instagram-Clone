import React, {useEffect, useState} from 'react';
import './explore.css'
import {useNavigate} from "react-router-dom";

const Explore = () => {
  const [explore, setExplore] = useState([])

  const key = import.meta.env.VITE_UNSPLASH_KEY

  useEffect(() => {
    fetch(`https://api.unsplash.com/photos/random?count=30&client_id=${key}`)
    .then(res => res.json())
    .then(data => setExplore(data))
  },[])

  const navigate = useNavigate();

  const handleClickNotPersonolized = () => {
    navigate('/explore/not_personolized');
  }

  return (
    <div className='exploreContainer'>
      <div className='explore' >
        <p  tabIndex="0">For you</p>
        <p  tabIndex="0" onClick={handleClickNotPersonolized}>Not personalized</p>
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