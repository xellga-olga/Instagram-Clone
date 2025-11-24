import React, {useContext, useEffect, useState} from 'react';
import {Eye, Heart, MessageCircle} from "lucide-react";
import ApiContext from "../../../context/ApiContext.js";
import './reels_profile.css'

const Reels_Profile = () => {
  const [reelsUrl, setReelsUrl] = useState([]);
  const { getReelsProfile } = useContext(ApiContext)

  useEffect(() => {
    getReelsProfile()
      .then((res) => { setReelsUrl(res.res); })
      .catch((err) => console.error('getReelsProfile error', err));
  }, []);

  return (
    <div className='reelsGrid'>
      {reelsUrl.map((url, index) => (
        <div key={index} className='reelsProfile'>
          <img src={url.download_url} alt='card' className="reelsImage"/>
          <div className="reelsOverlay">
            <div className="reelsOverlayItem">
              <Heart size={18}/>
              <span>55</span>
            </div>
            <div className="reelsOverlayItem">
              <MessageCircle size={18}/>
              <span>12</span>
            </div>
          </div>

          <div className='reelsOverlayStatic'>
            <div className='staticItem'>
              <Eye size={16}/>
              <span className='staticNumber'>3547</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reels_Profile;