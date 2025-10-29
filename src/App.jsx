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

import ApiContext from "./ApiContext.js";


function App() {
  const [searchOpen, setSearchOpen] = useState(false);

  const api = {
    getReels: async () => {
      const res = await fetch('https://coverr.co/api/videos?page=0&page_size=20');
      const data = await res.json();
      return data.hits || [];
    },
    getAvatars: async () => {
      const res = await fetch('https://picsum.photos/v2/list?page=6&limit=20');
      const data = await res.json();
      return data.map(img => img.download_url);
    },
    getSearchUsers: async () => {
      const res = await fetch('https://picsum.photos/v2/list?page=6&limit=15');
      return res.json();
    },
    getExplorePersonalized: async () => {
      const key = import.meta.env.VITE_UNSPLASH_KEY;
      const res = await fetch(`https://api.unsplash.com/photos/random?count=30&client_id=${key}`);
      return res.json();
    },
    getExploreNotPersonalized: async () => {
      const res = await fetch('https://picsum.photos/v2/list?page=2&limit=30');
      return res.json();
    }
  };

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
