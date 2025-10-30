import React, { useState, useEffect, useContext } from 'react';
import './reels.css';
import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react';
import ApiContext from '../../context/ApiContext.js';

const Reels = () => {
  const [videos, setVideos] = useState([]);
  const [avatars, setAvatars] = useState([]);


  const { getReels, getAvatars } = useContext(ApiContext);

  useEffect(() => {
    (async () => {
      const videosData = await getReels();
      const avatarsData = await getAvatars();
      setVideos(videosData);
      setAvatars(avatarsData);
    })();
  }, [getReels, getAvatars]);

  return (
    <div className="reelsContainer">
      <div className="reels">
        {videos.map((video, i) => (
          <div className="reel" key={video.id}>
            <video
              className="reelsVideo"
              src={`https://cdn.coverr.co/videos/${video.base_filename}/1080p.mp4`}
              poster={video.poster}
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="reelSidebar">
              <div className="reelSidebar__likes">
                <Heart className="reelIcon" />
                <p>4843</p>
              </div>
              <div className="reelSidebar__comments">
                <MessageCircle className="reelIcon" />
                <p>122</p>
              </div>
              <Send className="reelIcon" />
              <Bookmark className="reelIcon" />
              <button className=''>...</button>
              <img
                src={avatars[i]}
                alt="user avatar"
                className="reelAvatar"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reels;