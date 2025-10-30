import './App.css'
import Login from "./components/Login/Login.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Profile from "./components/Profile/Profile.jsx";
import LeftSide from "./components/Home/LeftSide/LeftSide.jsx";
import React, {useState} from "react";
import Explore from "./components/Explore/Explore.jsx";
import Search from "./components/Search/Search.jsx";
import NotPersonalized from "./components/Explore/NotPersonalized.jsx";
import Reels from "./components/Reels/Reels.jsx";

import ApiContext from "./context/ApiContext.js";
import createApi from "./context/api.js";
import Messages from "./components/Messages/Messages.jsx";


function App() {
  const [searchOpen, setSearchOpen] = useState(false);

  const api = createApi();



  return (
    <ApiContext.Provider value={api}>
      <div className="App">
        <div className='left-side-home'>
          <LeftSide setSearchOpen={setSearchOpen}/>
        </div>

        <div className='middle-side-home'>
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>

            <Route path='/' element={<Home/>}/>
            <Route path='/profile/:username' element={<Profile/>}/>
            <Route path='/explore' element={<Explore/>}/>
            <Route path='/explore/not_personalized' element={<NotPersonalized/>}/>
            <Route path='/reels' element={<Reels/>}/>
            <Route path='/direct' element={<Messages />}/>
          </Routes>

          {searchOpen && (
            <Search onClose={() => setSearchOpen(false)}/>
          )}

        </div>
      </div>
    </ApiContext.Provider>

  )
}

export default App
