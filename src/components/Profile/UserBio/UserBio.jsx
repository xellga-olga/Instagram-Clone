import React, {useContext, useEffect, useState} from 'react';
import './userbio.css'
import defaultAvatar from '../../../firebase storage/avatars/default-avatar.jpg'
// import profile_image from "../../../assets/profile_image.jpg";
import {Settings} from 'lucide-react';

import {useTranslation} from 'react-i18next';
import {Link} from "react-router-dom";

import {signOut} from "firebase/auth";
import { auth } from "../../../firebase storage/firebase.js";
import {UserAvatarContext} from "../../../context/UserAvatarContext.jsx";

import Cropper from 'react-easy-crop'

import { getCroppedImg } from './cropUtils';

const UserBio = () => {
  const {t} = useTranslation();

  const [randomNumbers, setRandomNumbers] = useState(0);

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const { avatar, setAvatar } = useContext(UserAvatarContext);


  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [isCropOpen, setIsCropOpen] = useState(false);
  const [tempImage, setTempImage] = useState(null);

  // При выборе изображения открываем окно обрезки, а не сохраняем сразу
  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (!file) {
      console.log('Файл не выбран');
      return;
    }

    const previewURL = URL.createObjectURL(file);
    console.log('Загружено изображение для обрезки:', previewURL);
    setTempImage(previewURL);
    setIsCropOpen(true);
  };


  const onCropComplete = (_, croppedPixels) => {
    console.log('Координаты обрезки:', croppedPixels);
    setCroppedAreaPixels(croppedPixels);
  };

  // Создаём финальный аватар с помощью HTML canvas
  // canvas рисует только выбранную область и преобразует её в изображение
  const saveCroppedAvatar = async () => {
    if (!tempImage) {
      console.log('Нет изображения для обрезки');
      return;
    }
    if (!croppedAreaPixels) {
      console.log('Нет данных обрезки');
      return;
    }
    try {
      console.log('Начинаем обрезку изображения...');
      const croppedImage = await getCroppedImg(
        tempImage,
        croppedAreaPixels
      );
      console.log('Обрезанное изображение получено:', croppedImage);
      setAvatar(croppedImage); // финальный аватар после обрезки
      setIsCropOpen(false);
      setTempImage(null);
      setCrop({ x: 0, y: 0 });
      setZoom(1);
      setCroppedAreaPixels(null);
    } catch (e) {
      console.error("Ошибка обрезки", e);
    }
  };

  useEffect(() => {
    fetch('https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new')
      .then(res => res.json())
      .then(data => setRandomNumbers(data))
      .catch(err => console.error('Ошибка при получении случайного числа:', err));
  }, [])

  const handleSignOut = () => {
    console.log('Sign out clicked');
    signOut(auth)
      .then(() => console.log('User signed out'))
      .catch(err => console.error('Sign out error:', err));
  };

  const openSettings = () => {
    console.log('Open settings clicked');
    setIsSettingsOpen(true);
  };

  const closeSettings = () => {
    console.log('Close settings clicked');
    setIsSettingsOpen(false);
  };

  const username = auth.currentUser?.displayName;

  const deleteAvatar = () => {
    setAvatar(defaultAvatar);
  }



  return (
    <>
      <div className='userBio'>
        <div className="avatarUpload">
          <img
            src={avatar || defaultAvatar}
            alt="avatar"
            className="imageUserBio"
          />
          <button
            type="button"
            onClick={() => document.getElementById('avatarInput').click()}
            className="changeAvatarBtn"
          >
            Изменить фото
          </button>
          <button
            className="deleteAvatarBtn"
            onClick={deleteAvatar}
            type="button"
          >
            Удалить фото
          </button>
          <input
            type="file"
            accept="image/*"
            id="avatarInput"
            style={{ display: 'none' }}
            onChange={handleAvatarUpload}
          />
        </div>

        {isCropOpen && (
          <div className="modalCrop">
            <div className="modalCropContent">
              {/* Cropper внутри использует canvas для обрезки изображения */}
             <div className='cropperWrapper'>
               <Cropper
                 image={tempImage}
                 crop={crop}
                 zoom={zoom}
                 aspect={1}
                 onCropChange={setCrop}
                 onZoomChange={setZoom}
                 onCropComplete={onCropComplete}
               />
             </div>
              <button onClick={saveCroppedAvatar}>Сохранить</button>
              <button onClick={() => {
                console.log('Отмена обрезки');
                setIsCropOpen(false);
                setTempImage(null);
                setCrop({ x: 0, y: 0 });
                setZoom(1);
                setCroppedAreaPixels(null);
              }}>Отмена</button>
            </div>
          </div>
        )}

        <div className="userBioInfo">
          <div className="topLine">
            <span className="userBioNickname">{username || 'Loading...'}</span>

            <div className="btnProfileUserBio">
              <button>{t('userBio.editProfile')}</button>
              <button>{t('userBio.viewArchive')}</button>
            </div>

            <button className="btnSettingsUserBio">
              <Settings onClick={() => setIsSettingsOpen(true)}/>
            </button>
          </div>

          <div className='bottomLine'>
            <ul>
              <li><strong>{randomNumbers > 0 ? randomNumbers : 0}</strong> {t('userBio.publications')}</li>
              <li><strong>{randomNumbers > 0 ? randomNumbers : 0}</strong> {t('userBio.subscribers')}</li>
              <li><strong>{randomNumbers > 0 ? randomNumbers : 0}</strong> {t('userBio.subscriptions')}</li>
            </ul>
          </div>
        </div>

      </div>
      {isSettingsOpen && (
        <div className='modalSettingsOverlay' onClick={() => setIsSettingsOpen(false)}>
          <div className='modalSettingsContent' onClick={(e) => e.stopPropagation()}>
            <Link to="accounts/manage_access/" className="modalLink">
              Приложения и сайты
            </Link>

            <Link to="accounts/professional_account_settings/" className="modalLink">
              Профессиональный аккаунт
            </Link>

            <Link to="emails/settings/" className="modalLink">
              Уведомления
            </Link>

            <Link to="familycenter/settings/" className="modalLink">
              Родительский контроль
            </Link>

            <button className='logout' onClick={handleSignOut}>
              Выход
            </button>

            <button onClick={closeSettings}>
              Отмена
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default UserBio;