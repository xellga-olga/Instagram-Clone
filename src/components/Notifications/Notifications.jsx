import React from 'react';
import './Notifications.css';

const Notifications = ({ onClose }) => {
  const handleOverlayClick = () => {
    onClose();
  };

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="notifications-overlay" onClick={handleOverlayClick}>
      <div className="notifications-content" onClick={handleContentClick}>
        <h2>Notifications</h2>
        <p>Здесь будут уведомления</p>
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};

export default Notifications;