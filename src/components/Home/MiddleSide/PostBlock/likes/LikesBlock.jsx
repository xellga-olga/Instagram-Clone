import React from 'react';

const LikesBlock = ({ like }) => {
  return (
    <div className='likesBlock'>
      <span className='likes'>
        {like > 0 ? like : 0} Likes
      </span>
    </div>
  );
};

export default LikesBlock;