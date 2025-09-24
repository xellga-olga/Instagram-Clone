import React from 'react';
import {Bookmark, Heart, MessageCircle, Send} from "lucide-react";

const IconsBlock = () => {
  return (
    <div className='iconsBlock'>
      <div className='iconLeft'>
        <Heart size={25}/>
        <MessageCircle size={25}/>
        <Send size={25}/>
      </div>
      <div className='iconRight'>
        <Bookmark size={25}/>
      </div>
    </div>

  );
};

export default IconsBlock;