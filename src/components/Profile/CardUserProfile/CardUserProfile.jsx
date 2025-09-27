import React, {useEffect, useState} from 'react';
import './cardUserProfile.css'

const CardUserProfile = () => {
  const [imageUrl, setImageUrl] = useState([]);

  useEffect(() => {
    fetch('https://picsum.photos/v2/list?page=2&limit=12')
      .then(res => res.json())
      .then(image => setImageUrl(image));
  }, []);

  return (
    <div className='cardUserGrid'>
      {imageUrl.map((url, index) => (
        <div key={index} className='cardUserProfile'>
          <img src={url.download_url} alt='card' className="cardImage"/>
        </div>
      ))}
    </div>
  );
};

export default CardUserProfile;