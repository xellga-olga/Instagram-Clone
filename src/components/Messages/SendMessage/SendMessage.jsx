import React, {useContext, useEffect, useState} from 'react';
import './SendMessage.css';
import { X } from 'lucide-react';

import image from '../../../assets/profile_image.jpg'
import ApiContext from "../../../context/ApiContext.js";

const SendMessage = ({ onClose }) => {
  const [usersPhotos, setUsersPhotos] = useState([]);
  const [usersName, setUsersName] = useState([]);

  const api = useContext(ApiContext);

  useEffect(() => {
    (async () => {
      const { usersPhotos, usersName } = await api.getMessages();
      setUsersPhotos(usersPhotos);
      setUsersName(usersName);
    })();
  }, [api]);

  return (
    <div className="sendMessageOverlay" onClick={onClose}>
      <div
        className="sendMessageContainer"
        onClick={(e) => e.stopPropagation()}
      >
        <div className='sendMessageHeader'>
          <h2>New message</h2>
          <button className="sendMessageClose" onClick={onClose}><X size={25}/></button>
        </div>

        <div className='sendMessageInput'>
          <h2>Whom:</h2>
          <input type='text' placeholder='Search...'/>
        </div>

        <div className='recommendMessage'>
          <h2>Recommend</h2>
        </div>

        <div className='sendMessageBody'>
          {usersName.map((user, index) => (
            <div className='sendMessageBodyInfo' key={index}>
              <img src={usersPhotos[index]?.download_url} alt=''/>
              <div className='sendMessageBodyNames'>
                <p className='sendMessage-name'>{user.author}</p>
                <p className='sendMessage-nickname'>{user.author}</p>
              </div>
              <label className="selectWrapper">
                <input type="checkbox" className="selectCircle"/>
                <span className="selectVisual"></span>
              </label>
            </div>
          ))}
        </div>

        <button className='chat'>Chat</button>
      </div>
    </div>
  );
};

export default SendMessage;