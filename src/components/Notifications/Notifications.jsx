import React, {useContext, useEffect, useState} from 'react';
import './Notifications.css';
import ApiContext from "../../context/ApiContext.js";

// const usersNotifications = [
//   {
//     id: 1,
//     user: 'lipatova565, lizaparashchuk и ещё 2',
//     action: 'поставили «Нравится» вашей истории.',
//     time: '4 ч.',
//     avatar: 'https://i.pravatar.cc/40?img=11'
//   },
//   {
//     id: 2,
//     user: 'mari_mari_7_7, yelyzavetka_97 и ещё 22',
//     action: 'поставили «Нравится» вашей истории.',
//     time: '7 ч.',
//     avatar: 'https://i.pravatar.cc/40?img=11'
//   }
// ];

const Notifications = ({ onClose }) => {
  const {getNotifications} = useContext(ApiContext)

  const [users, setUsers] = useState([])

  const todayUsers = users.slice(0, 5);
  const yesterdayUsers = users.slice(5);

  useEffect(() => {
    getNotifications()
      .then((res) => setUsers(res))
  }, [])

  const handleOverlayClick = () => {
    onClose();
  };

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="notificationsContainer" onClick={handleOverlayClick}>
      <div className="notifications" onClick={handleContentClick}>

        <div className="notificationsHeader">
          <h2>Уведомления</h2>
          <button className="notificationsFilterBtn">Фильтровать</button>
        </div>

        <div className="notificationsBody">
          <div className="notificationsContentToday">
            <p className="notificationsToday">Сегодня</p>

            <div className="notificationsList">
              {todayUsers.map((user, i) => (
                <div key={i} className="notificationItem">
                  <div className="notificationAvatarWrapper">
                    <img
                      src={user.avatar}
                      alt={user.usernickname}
                      className="notificationAvatar"
                    />
                  </div>
                  <div className="notificationTextWrapper">
                    <p className="notificationText">
                      <span className="notificationUser">{user.usernickname}</span> понравилась ваша публикация.
                    </p>
                    <span className="notificationTime">сегодня</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

          <div className='notificationsContentYesterday'>
            <p className="notificationsYesterday">Вчера</p>

            <div className="notificationsList">
              {yesterdayUsers.map((user, i) => (
                <div key={i} className="notificationItem">
                  <div className="notificationAvatarWrapper">
                    <img
                      src={user.avatar}
                      alt={user.usernickname}
                      className="notificationAvatar"
                    />
                  </div>
                  <div className="notificationTextWrapper">
                    <p className="notificationText">
                      <span className="notificationUser">{user.usernickname}</span> понравилась ваша публикация.
                    </p>
                    <span className="notificationTime">вчера</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Notifications;