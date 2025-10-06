import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

const NotPersonalized = () => {
  const [explore, setExplore] = useState([])

  const navigate = useNavigate();


  useEffect(() => {
    fetch('https://picsum.photos/v2/list?page=2&limit=30')
      .then(res => res.json())
      .then(data => setExplore(data))
  },[])

  const handleClickPersonolized = () => {
    navigate('/explore');
  }

  return (
    <div className='exploreContainer'>
      <div className='explore'>
        <p tabIndex="0" onClick={handleClickPersonolized}>For you</p>
        <p tabIndex="0" >Not personalized</p>
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