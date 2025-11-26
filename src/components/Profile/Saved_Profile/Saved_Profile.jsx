import React from 'react';
import './saved_profile.css'
import Publ from '../../../assets/save_img_publ.jpg';
import Audio from '../../../assets/save_img_audio.jpg';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";


const Saved_Profile = () => {
  const {t} = useTranslation();

  return (
    <div className="saved-profile">
      <div className="saved_profile__header">
        <h5 className="saved_profile__title">{t('saved_profile.text_h5')}</h5>
        <button className='new_collection'>+ {t('saved_profile.text_btn')}</button>
      </div>


      <div className="saved_profile__content">
        <div className="saved_profile__body">
          <div className="saved_all">
            <Link to="/saved/all" className="saved_collection">
              <img src={Publ} alt={t('saved_profile.text_body_publication"')}/>
              <div className="savedOverlay">
                <h5>{t('saved_profile.text_body_publication')}</h5>
              </div>
            </Link>
          </div>

          <div className="saved_audio">
            <Link to="/saved/audio" className="saved_collection">
              <img src={Audio} alt={t('saved_profile.text_body_audio')}/>
              <div className="savedOverlay">
                <h5>{t('saved_profile.text_body_audio')}</h5>
              </div>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Saved_Profile;