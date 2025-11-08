import React, {useEffect, useState, useContext} from 'react';
import './search.css';
import { Search as SearchIcon } from 'lucide-react';
import { CircleX } from 'lucide-react';
import { BadgeCheck } from 'lucide-react';
import ApiContext from '../../context/ApiContext.js';
import { useTranslation } from 'react-i18next';


const Search = ({onClose}) => {
  const [users, setUsers] = useState([])
  const { getSearchUsers } = useContext(ApiContext);

  useEffect(() => {
    getSearchUsers().then(setUsers);
  }, [getSearchUsers]);


  const { t } = useTranslation();

  return (
    <div
      className='searchContainer'
      onClick={onClose}
    >
      <div className='search' onClick={(e) => e.stopPropagation()}>

        <div className='searchRequest'>
          <h2>{t('searchModal.title')}</h2>
          <div className='searchInput'>
            <SearchIcon className='searchIcon' />
            <input type='text' name='search' placeholder={t('searchModal.placeholder')}  />
            <CircleX className='closeIcon' size={5}/>
          </div>
        </div>

        <div>
          <p>{t('searchModal.recently')}</p>
        </div>

        <div className='searchResults'>
          {/*<p className='noResults'>{t('searchModal.noRecent')}</p>*/}
          <div>
            {users.map((user, i) => (
              <div className='users-search' key={i}>
                <div className='users-info-search'>
                  <div key={i.id} className='users-img-search'>
                    <img src={user.download_url} alt='profile image' className='img-search-users' width={40}/>
                  </div>

                  <div className='users-text-search'>

                    <div className='searchUsersName'>
                      {user.author} <BadgeCheck className='badgeCheck' size={14}/>
                    </div>

                    <div key={i.id} className='searchUsersSub '> {user.author} • {t('searchModal.followers', { count: '125K' })}</div>
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