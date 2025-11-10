import React from 'react';
import { useTranslation } from 'react-i18next';

const ViewAllComments = ({comments}) => {
  const { t } = useTranslation();
  return (
    <div className='comment'>
      {t('viewAllComments.text', { count: comments })}
    </div>
  );
};

export default ViewAllComments;