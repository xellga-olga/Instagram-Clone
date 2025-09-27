import React, {useEffect, useState} from 'react';
import './rightSide.css'
import profile_image from "../../../assets/profile_image.jpg";
import {Link} from 'react-router-dom';

const RightSide = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://picsum.photos/v2/list?page=6&limit=5')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, []);

  return (
    <div className='right-side'>
      <div className='user-profile'>
        <div className='user-block'>
          <div className='user'>
            <img src={profile_image} alt='profile image' className='profile_image_right-side'/>
          </div>

          <div className='user-name'>
            <Link to='/profile/olya__pla' className='user-nickname'>olya__pla</Link>
          </div>

        </div>
        <button className='switch-btn'>
          Switch
        </button>
      </div>
      <div className='users-recommendation'>
        <p>
          Recommendations for you
        </p>
        <button className='recommendation-btn'>See All</button>
      </div>

      <div className='recommendation-users-profile'>
        <div>
          {users.map((user, i) => (
            <div className='users' key={i}>
              <div className='users-info'>
                <div key={i.id} className='users-img'>
                  <img src={user.download_url} alt='profile image' className='img-rec-users'/>
                </div>
                <div className='users-text'>
                  <div key={i.id} className='usersName'>{user.author}</div>
                  <p>Recommendations for you</p>
                </div>
              </div>
              <button className='follow-btn'>Follow</button>
            </div>
          ))}
        </div>

        <div className='copyright'>
          <p>© 2025 Instagram Clone from Olya Pla</p>
        </div>


      </div>
    </div>
  );
};

export default RightSide;