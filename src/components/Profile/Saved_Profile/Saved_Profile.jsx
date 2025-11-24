import React from 'react';
import './saved_profile.css'

const Saved_Profile = () => {
  return (
    <div className="saved-profile">
      <div className="saved_profile__header">
        <h5 className="saved_profile__title">Список сохраненного виден только вам</h5>
        <button className='new_collection'>+ New сollection</button>
      </div>
      <div className="saved_profile__body">

      </div>
    </div>
  );
};

export default Saved_Profile;