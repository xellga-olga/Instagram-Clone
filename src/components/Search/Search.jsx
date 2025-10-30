import React, {useEffect, useState, useContext} from 'react';
import './search.css';
import { Search as SearchIcon } from 'lucide-react';
import { CircleX } from 'lucide-react';
import { BadgeCheck } from 'lucide-react';
import ApiContext from '../../context/ApiContext.js';




const Search = ({onClose}) => {
  const [users, setUsers] = useState([])
  const { getSearchUsers } = useContext(ApiContext);

  useEffect(() => {
    getSearchUsers().then(setUsers);
  }, [getSearchUsers]);

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