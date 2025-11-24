import React from 'react';
import './tagged_profile.css'
import {SquareUser} from "lucide-react";
import {useTranslation} from "react-i18next";

const Tagged_Profile = () => {

  const {t} = useTranslation();

  return (
    <div className="tagged-page">
      <div className="tagged-empty">
        <div className='tagged-icon'>
          <SquareUser size={60}/>
        </div>
        <h2>{t('tagged.text_h2')}</h2>
        <p>{t('tagged.text_p')}.</p>
      </div>
    </div>
  );
};

export default Tagged_Profile;