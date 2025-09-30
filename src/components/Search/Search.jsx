import React from 'react';
import './search.css'

const Search = ({onClose}) => {
  return (
    <div
      className='searchContainer'
      onClick={onClose}
    >
      <div className='search' onClick={(e) => e.stopPropagation()}>

        <div>
          <h2>Search request</h2>
          <input type='text' name='search' placeholder='Search'/>
        </div>

        <div>
          <p>Recently</p>
        </div>

        <div>
          No recent requests.
        </div>
      </div>
    </div>
  );
};

export default Search;