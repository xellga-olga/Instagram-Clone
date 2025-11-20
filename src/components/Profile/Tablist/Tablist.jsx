import React from 'react';
import './tablist.css'
import {Bookmark, Grid3x2, SquarePlay, SquareUser} from 'lucide-react';
import {Link} from "react-router-dom";


const Tablist = () => {
  return (
    <div className="tablist">
      <Link to='/profile/olya__pla' className='tablistIcon' tabIndex="0">
        <Grid3x2/>
      </Link>
      <Link to='/profile/olya__pla/reels' className='tablistIcon' tabIndex="0">
        <SquarePlay/>
      </Link>
      <Link to='/profile/olya__pla/saved' className='tablistIcon' tabIndex="0">
        <Bookmark />
      </Link>
      <Link to='/profile/olya__pla/tagged' className='tablistIcon' tabIndex="0">
        <SquareUser />
      </Link>
    </div>
  );
};

export default Tablist;