import React from 'react';
import './SendMessage.css';
import { X } from 'lucide-react';

import image from '../../../assets/profile_image.jpg'

const SendMessage = ({ onClose }) => {
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

        <div className='sendMessageBody'>
          <div className='sendMessageBodyInfo'>
            <img src={image} alt=''/>
            <div className='sendMessageBodyNames'>
              <p className='sendMessage-name'>Name Nick</p>
              <p className='sendMessage-nickname'>ghjkp</p>
            </div>
          </div>
          <div className='sendMessageBodyInfo'>
            <img src={image} alt=''/>
            <div className='sendMessageBodyNames'>
              <p className='sendMessage-name'>Name Nick</p>
              <p className='sendMessage-nickname'>ghjkp</p>
            </div>
          </div>
          <div className='sendMessageBodyInfo'>
            <img src={image} alt=''/>
            <div className='sendMessageBodyNames'>
              <p className='sendMessage-name'>Name Nick</p>
              <p className='sendMessage-nickname'>ghjkp</p>
            </div>
          </div>
          <div className='sendMessageBodyInfo'>
            <img src={image} alt=''/>
            <div className='sendMessageBodyNames'>
              <p className='sendMessage-name'>Name Nick</p>
              <p className='sendMessage-nickname'>ghjkp</p>
            </div>
          </div>
          <div className='sendMessageBodyInfo'>
            <img src={image} alt=''/>
            <div className='sendMessageBodyNames'>
              <p className='sendMessage-name'>Name Nick</p>
              <p className='sendMessage-nickname'>ghjkp</p>
            </div>
          </div>
        </div>

        <button className='chat'>Chat</button>
      </div>
    </div>
  );
};

export default SendMessage;