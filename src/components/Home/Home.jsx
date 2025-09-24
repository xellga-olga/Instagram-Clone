import React from 'react';

import LeftSide from "./LeftSide/LeftSide.jsx";
import MiddleSide from "./MiddleSide/MiddleSide.jsx";
import RightSide from "./RightSide/RightSide.jsx";

const Home = () => {
  return (
    <div className='App'>
      {/*Left side*/}
      <div className='left-side-home'>
        <LeftSide />
      </div>

      {/*Middle side*/}
      <div className='middle-side-home'>
        <MiddleSide />
      </div>

      {/*Right side*/}
      <div className='right-side-home'>
        <RightSide />
      </div>
    </div>
  );
};

export default Home;