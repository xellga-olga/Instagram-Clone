import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';

const LikesBlock = ({ like }) => {
  const { t } = useTranslation();

  return (
    <div className='likesBlock'>
      <span className='likes'>
        {like > 0 ? like : 0} {t('likesBlock.likes')}
      </span>
    </div>
  );
};

export default LikesBlock;