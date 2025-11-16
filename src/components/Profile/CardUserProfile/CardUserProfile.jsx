import React, {useEffect, useState} from 'react';
import './cardUserProfile.css'
import { Heart, MessageCircle } from 'lucide-react';

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
          <img src={url.download_url} alt='card' className="cardImage" />
          <div className="cardOverlay">
            <div className="cardOverlayItem">
              <Heart size={18} />
              <span>123</span>
            </div>
            <div className="cardOverlayItem">
              <MessageCircle size={18} />
              <span>45</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardUserProfile;