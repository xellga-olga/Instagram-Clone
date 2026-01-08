import React, {useContext, useEffect, useState} from 'react';
import './messages.css'
import {MessageCircleHeart, Search as SearchIcon} from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { SquarePen } from 'lucide-react';
import ApiContext from "../../context/ApiContext.js";
import SendMessage from "./SendMessage/SendMessage.jsx";

import { useTranslation } from 'react-i18next';

import {auth} from "../../firebase storage/firebase.js";




const Messages = () => {

  const [usersPhotos, setUsersPhotos] = useState([]);
  const [usersName, setUsersName] = useState([]);

  const [sendMessage, setSendMessage] = useState(false);

  const { t } = useTranslation();

  const api = useContext(ApiContext);

  useEffect(() => {
    (async () => {
      const { usersPhotos, usersName } = await api.getMessages();
      setUsersPhotos(usersPhotos);
      setUsersName(usersName);
    })();
  }, [api]);

  const username = auth.currentUser?.displayName;


  return (
    <>
    <div className="messagesContainer">
      <div className='right-side-messages'>

        <div className='header-mes'>
          <div className='nickName-mes'>
            <p>{username || 'Loading...'}</p>
            <ChevronDown size={16} className='iconDownMes'/>
          </div>
          <div className='iconMes'>
            <SquarePen size={26}   onClick={(e) => {e.preventDefault();
              setSendMessage(true);
            }}/>
          </div>
        </div>

        <div className='searchInputMes'>
          <SearchIcon size={16} className='searchIconMes'/>
          <input type='text' name='search'  placeholder={t('direct.placeholder')}/>
        </div>

        <div className='messages-info'>
          <div className='messages-info-header'>
            <p>{t('direct.title')}</p>
            <button>{t('direct.requests')}</button>
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
                  <p>· 5 {t('direct.time')}</p>
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
        <p className='mes-title'>{t('direct.yourMessages')}</p>
        <p className='mes-desc'>{t('direct.desc')}</p>
        <button
          className='send-mes-btn'
          onClick={(e) => {
            e.preventDefault();
            setSendMessage(true);
          }}>
          {t('direct.button')}
        </button>
      </div>

    </div>

      {sendMessage && (
        <SendMessage onClose={() => setSendMessage(false)}/>
      )}
    </>
  );
};

export default Messages;