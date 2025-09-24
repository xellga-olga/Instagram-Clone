import React from 'react';

const PostAbout = ({author, description}) => {
  return (
    <div className='postAbout'>
      <span className='postAboutName'>
        {author}
      </span>
      <div className='postDesc'>
        <span>{description}</span>
      </div>
    </div>);
};

export default PostAbout;