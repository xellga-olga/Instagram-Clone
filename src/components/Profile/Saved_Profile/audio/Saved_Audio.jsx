import React from 'react';
import './Saved_Audio.css'

const Saved_Audio = () => {
  return (
    <div className="saved_audio_wrapper">
      <div className='btn_saved_back'>
        <button className="btn_saved_back" onClick={() => { window.location.reload() }}>

        </button>
      </div>
    </div>
  );
};

export default Saved_Audio;