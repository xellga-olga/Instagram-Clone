import React, {useContext, useEffect, useState} from 'react';
import './cardUserProfile.css'
import { Heart, MessageCircle } from 'lucide-react';
import ApiContext from "../../../context/ApiContext.js";

const CardUserProfile = () => {
  const [imageUrl, setImageUrl] = useState([]);

  const { getCardUserProfile } = useContext(ApiContext)

  useEffect(() => {
   getCardUserProfile()
     .then((res) => {setImageUrl(res.res)})
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