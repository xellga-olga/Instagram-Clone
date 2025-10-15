import React, { useState, useEffect } from 'react';
import './reels.css';
import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react';

const Reels = () => {
  const [videos, setVideos] = useState([]);
  const [avatars, setAvatars] = useState([]);

  useEffect(() => {
    fetch('https://coverr.co/api/videos?page=0&page_size=20')
      .then(data => data.json())
      .then(video => setVideos(video.hits || []));

    fetch('https://picsum.photos/v2/list?page=6&limit=20')
      .then(data => data.json())
      .then(avatar => setAvatars(avatar.map(img => img.download_url)));
  }, []);

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
              <Heart className="reelIcon" />
              <MessageCircle className="reelIcon" />
              <Send className="reelIcon" />
              <Bookmark className="reelIcon" />
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