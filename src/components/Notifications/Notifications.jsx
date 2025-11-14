import React, {useContext, useEffect, useState} from 'react';
import './Notifications.css';
import ApiContext from "../../context/ApiContext.js";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
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

  const [filteredNotifications, setFilteredNotifications] = useState(false);

  const toggleFilter = () => setFilteredNotifications(prev => !prev)

  return (
    <div className="notificationsContainer" onClick={handleOverlayClick}>
      <div className="notifications" onClick={handleContentClick}>

        <div className="notificationsHeader">
          <h2>{t('notificationsModal.title')}</h2>
          <button
            onClick={toggleFilter}
            className="notificationsFilterBtn"
          >{t('notificationsModal.filter')}</button>
          {
            filteredNotifications && (
              <div className="notificationsFilterMenu">
                <div className="filterMenu">
                  <h3>Категории</h3>
                  <label className="filterItem"><input type='checkbox'/>Метки и упоминания</label>

                  <label className="filterItem"><input type='checkbox'/>Подписки</label>

                  <label className="filterItem"><input type='checkbox'/>Комментарии</label>

                </div>
                <div className="filterMenu">
                  <h3>Типы аккаунтов</h3>
                  <label className="filterItem"><input type='checkbox'/>Подтвержденные</label>

                  <label className="filterItem"><input type='checkbox'/>Вы подписаны на них</label>
                </div>
                <button className="filterMenuBtn">
                  Применить
                </button>
              </div>
            )
          }
        </div>

        <div className="notificationsBody">
          <div className="notificationsContentToday">
            <p className="notificationsToday">{t('notificationsModal.today')}</p>

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
                      <span className="notificationUser">{user.usernickname}</span> {t('notificationsModal.likedYourPost')}
                    </p>
                    <span className="notificationTime">{t('notificationsModal.time.today')}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

          <div className='notificationsContentYesterday'>
            <p className="notificationsYesterday">{t('notificationsModal.yesterday')}</p>

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
                      <span className="notificationUser">{user.usernickname}</span> {t('notificationsModal.likedYourPost')}
                    </p>
                    <span className="notificationTime">{t('notificationsModal.time.yesterday')}</span>
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