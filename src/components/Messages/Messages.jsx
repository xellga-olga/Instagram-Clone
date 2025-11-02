import React, {useContext, useEffect, useState} from 'react';
import './messages.css'
import {MessageCircleHeart, Search as SearchIcon} from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { SquarePen } from 'lucide-react';
import ApiContext from "../../context/ApiContext.js";
import SendMessage from "./SendMessage/SendMessage.jsx";




const Messages = () => {

  const [usersPhotos, setUsersPhotos] = useState([]);
  const [usersName, setUsersName] = useState([]);

  const [sendMessage, setSendMessage] = useState(false);


  const api = useContext(ApiContext);

  useEffect(() => {
    (async () => {
      const { usersPhotos, usersName } = await api.getMessages();
      setUsersPhotos(usersPhotos);
      setUsersName(usersName);
    })();
  }, [api]);


  return (
    <>
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

        <div className='messages-info'>
          <div className='messages-info-header'>
            <p>Messages</p>
            <button>Requests</button>
          </div>
        </div>

        <div className='users-mes'>
          {usersName.map((user, index) => (
            <div className='messages-users' key={index}>
              <img src={usersPhotos[index]?.download_url} alt='user_avatar' className='messages-users-avatar'/>
              <div className='messages-users-info'>
                <p className='messages-users-name'>{user.author}</p>

                <div className='mes-info'>
                  <p>
                    Hello,Ann!How are you?
                  </p>
                  <p>· 5 min</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>


      {/*----------LEFT SIDE----------*/}
      <div className='left-side-messages'>
        <div className='messages-icon'>
          <MessageCircleHeart size={60}/>
        </div>
        <p className='mes-title'>Your Messages</p>
        <p className='mes-desc'>Send personal photos and messages to a friend or group</p>
        <button
          className='send-mes-btn'
          onClick={(e) => {e.preventDefault();
            setSendMessage(true);
          }}>
          Send message
        </button>
      </div>

    </div>

      {sendMessage && (
        <SendMessage onClose={() => setSendMessage(false)} />
      )}
    </>
  );
};

export default Messages;