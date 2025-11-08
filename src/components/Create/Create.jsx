import React, {useRef} from 'react';
import './Create.css'
import { ImagePlus } from 'lucide-react';
import { useTranslation } from 'react-i18next';


const Create = ({ onClose }) => {
  const fileInput = useRef(null);

  const handleClick = () => {
    fileInput.current.click();
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('file:', file);
    }
  }

  const { t } = useTranslation();

  return (
    <div className="createOverlay" onClick={onClose}>
      <div
        className='createContainer'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='createHeader'>
          <h2 className="createTitle">{t('createModal.title')}</h2>        </div>
        <div className='createBody'>
          <ImagePlus className="createImage"/>
          <p>{t('createModal.dragText')}</p>
          <input
            type='file'
            style={{display: 'none'}}
            accept="image/*,video/*"
            ref={fileInput}
            onChange={handleFileChange}
          />
          <button className="createButton" onClick={handleClick}>
            {t('createModal.button')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Create;