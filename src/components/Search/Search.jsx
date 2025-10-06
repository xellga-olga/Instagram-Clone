import React from 'react';
import './search.css';
import { Search as SearchIcon } from 'lucide-react';
import { CircleX } from 'lucide-react';



const Search = ({onClose}) => {
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
            <CircleX className='closeIcon' size={15}/>
          </div>
        </div>

        <div>
          <p>Recently</p>
        </div>

        <div className='searchResults'>
          No recent requests.
        </div>
      </div>
    </div>
  );
};

export default Search;