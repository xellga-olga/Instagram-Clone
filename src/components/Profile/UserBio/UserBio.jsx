import React, {useEffect, useState} from 'react';
import './userbio.css'
import profile_image from "../../../assets/profile_image.jpg";
import { Settings } from 'lucide-react';

import { useTranslation } from 'react-i18next';

const UserBio = () => {
  const { t } = useTranslation();

  const [randomNumbers, setRandomNumbers] = useState(0);

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
            <button>{t('userBio.editProfile')}</button>
            <button>{t('userBio.viewArchive')}</button>
          </div>

          <div className="btnSettingsUserBio">
            <Settings/>
          </div>
        </div>

        <div className='bottomLine'>
          <ul>
            <li><strong>{randomNumbers > 0 ? randomNumbers : 0}</strong> {t('userBio.publications')}</li>
            <li><strong>{randomNumbers > 0 ? randomNumbers : 0}</strong> {t('userBio.subscribers')}</li>
            <li><strong>{randomNumbers > 0 ? randomNumbers : 0}</strong> {t('userBio.subscriptions')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserBio;