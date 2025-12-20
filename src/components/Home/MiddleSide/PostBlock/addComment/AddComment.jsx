import React from 'react';
import { useTranslation } from 'react-i18next';

const AddComment = () => {
  const { t } = useTranslation();
  return (
    <div className='addComment'>
      <input id="username" name="username" placeholder={t('addComment.placeholder')} type='text'/>
    </div>
  );
};

export default AddComment;