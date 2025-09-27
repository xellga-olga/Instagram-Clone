import React, {useEffect, useState} from 'react';
import './userbio.css'
import profile_image from "../../../assets/profile_image.jpg";
import { Settings } from 'lucide-react';

const UserBio = () => {
  const [randomNumbers, setRandomNumbers] = useState([]);

  useEffect(() => {
    fetch('https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new')
    .then(res => res.json())
      .then(data => setRandomNumbers(data))
  },[])

  return (
    <div className='userBio'>
      <div>
        <img src={profile_image} alt='profile image' className='imageUserBio'/>
      </div>

      <div className="userBioInfo">
        <div className="topLine">
          <span className="userBioNickname">olya__pla</span>

          <div className="btnProfileUserBio">
            <button>Edit profile</button>
            <button>View the archive</button>
          </div>

          <div className="btnSettingsUserBio">
            <Settings/>
          </div>
        </div>

        <div className='bottomLine'>
          <ul>
            <li><strong>{randomNumbers > 0 ? randomNumbers : 0}</strong> publications</li>
            <li><strong>{randomNumbers > 0 ? randomNumbers : 0}</strong> subscribers</li>
            <li><strong>{randomNumbers > 0 ? randomNumbers : 0}</strong> subscriptions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserBio;