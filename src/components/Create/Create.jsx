import React, {useRef} from 'react';
import './Create.css'
import { ImagePlus } from 'lucide-react';


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

  return (
    <div className="createOverlay" onClick={onClose}>
      <div
        className='createContainer'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='createHeader'>
          <h2 className="createTitle">Create publication</h2>
        </div>
        <div className='createBody'>
          <ImagePlus className="createImage" />
          <p>Drag photos and videos here</p>
          <input
            type='file'
            style={{ display: 'none' }}
            accept="image/*,video/*"
            ref={fileInput}
            onChange={handleFileChange}
          />
          <button className="createButton" onClick={handleClick}>
            Select on computer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Create;