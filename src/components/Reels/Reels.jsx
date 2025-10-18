import React, { useState, useEffect } from 'react';
import './reels.css';
import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react';

const Reels = () => {
  const [videos, setVideos] = useState([]);
  const [avatars, setAvatars] = useState([]);
  const [counts, setCounts] = useState([]);

  useEffect(() => {
    fetch('https://coverr.co/api/videos?page=0&page_size=20')
      .then(data => data.json())
      .then(video => setVideos(video.hits || []));

    fetch('https://picsum.photos/v2/list?page=6&limit=20')
      .then(data => data.json())
      .then(avatar => setAvatars(avatar.map(img => img.download_url)));
  }, []);

    fetch('https://picsum.photos/v2/list?page=6&limit=20')
      .then(data => data.json())
      .then(count => setCounts(count));

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