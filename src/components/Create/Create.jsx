import React from 'react';
import './Create.css'
import { ImagePlus } from 'lucide-react';


const Create = ({ onClose }) => {

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
          <button className="createButton">
            Select on computer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Create;