import React, {useEffect, useState} from 'react';
import './search.css';
import { Search as SearchIcon } from 'lucide-react';
import { CircleX } from 'lucide-react';
import { BadgeCheck } from 'lucide-react';




const Search = ({onClose}) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://picsum.photos/v2/list?page=6&limit=15')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, []);

  return (
    <div
      className='searchContainer'
      onClick={onClose}
    >
      <div className='search' onClick={(e) => e.stopPropagation()}>

        <div className='searchRequest'>
          <h2>Search request</h2>
          <div className='searchInput'>
            <SearchIcon className='searchIcon' />
            <input type='text' name='search' placeholder='Search' />
            <CircleX className='closeIcon' size={5}/>
          </div>
        </div>

        <div>
          <p>Recently</p>
        </div>

        <div className='searchResults'>
          {/*<p className='noResults'>No recent requests.</p>*/}
          <div>
            {users.map((user, i) => (
              <div className='users-search' key={i}>
                <div className='users-info-search'>
                  <div key={i.id} className='users-img-search'>
                    <img src={user.download_url} alt='profile image' className='img-search-users' width={40}/>
                  </div>
                  <div className='users-text-search'>
                    <div key={i.id} className='searchUsersName'>{user.author} <BadgeCheck className='badgeCheck' size={14}/></div>
                    <div key={i.id} className='searchUsersSub '>{user.author} • Followers: 125K </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;