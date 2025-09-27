import './App.css'
import Login from "./components/Login/Login.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Profile from "./components/Profile/Profile.jsx";
import LeftSide from "./components/Home/LeftSide/LeftSide.jsx";
import React from "react";

function App() {
  return (
    <div className="App">
      <div className='left-side-home'>
        <LeftSide/>
      </div>

      <div className='middle-side-home'>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>

          <Route path='/' element={<Home/>}/>
          <Route path='/profile/:username' element={<Profile/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
