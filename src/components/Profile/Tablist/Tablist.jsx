import React from 'react';
import './tablist.css'
import {Bookmark, Grid3x2, SquarePlay, SquareUser} from 'lucide-react';


const Tablist = () => {
  return (
    <div className="tablist">
      <a className='tablistIcon' tabIndex="0">
        <Grid3x2/>
      </a>
      <a className='tablistIcon' tabIndex="0">
        <SquarePlay/>
      </a>
      <a className='tablistIcon' tabIndex="0">
        <Bookmark />
      </a>
      <a className='tablistIcon' tabIndex="0">
        <SquareUser />
      </a>
    </div>
  );
};

export default Tablist;