import React, {useEffect, useState} from 'react';
import '../middleSide.css'

const StoryBlock = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://picsum.photos/v2/list?page=4&limit=20')
      .then(res => res.json())
      .then(data => setUsers(data))
  })

  return (
      <div className='storyBlock'>
        <div className='storyParticular'>
          <div className='imageCircle'>
            {users.map((item, index) => (
              <div key={index} className="images">
                <div key={index.id}>
                  <img src={item.download_url} alt='usersimages' className='usersImages'/>
                </div>
                <div key={index.id} className='profileName'>{item.author}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default StoryBlock;