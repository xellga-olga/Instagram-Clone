import React from 'react';
import './messages.css'
import {CircleX, MessageCircleHeart, Search as SearchIcon} from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { SquarePen } from 'lucide-react';




const Messages = () => {
  return (
    <div className="messagesContainer">
      <div className='right-side-messages'>

        <div className='header-mes'>
          <div className='nickName-mes'>
            <p>olya__pla</p>
            <ChevronDown size={16} className='iconDownMes'/>
          </div>
          <div className='iconMes'>
            <SquarePen size={26} />
          </div>
        </div>

        <div className='searchInputMes'>
          <SearchIcon size={16} className='searchIconMes'/>
          <input type='text' name='search' placeholder='Search'/>
        </div>


      </div>


      {/*----------LEFT SIDE----------*/}
      <div className='left-side-messages'>
        <div className='messages-icon'>
          <MessageCircleHeart size={60}/>
        </div>
        <p className='mes-title'>Your Messages</p>
        <p className='mes-desc'>Send personal photos and messages to a friend or group</p>
        <button className='send-mes-btn'>Send message</button>
      </div>
    </div>
  );
};

export default Messages;