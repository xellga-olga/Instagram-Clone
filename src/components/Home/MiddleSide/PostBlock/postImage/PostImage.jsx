import React from 'react';

const PostImage = ({image}) => {
  return (
    <div className='postImg'>
      <img src={image} alt='postImg' className='image'/>
    </div>
  );
};

export default PostImage;