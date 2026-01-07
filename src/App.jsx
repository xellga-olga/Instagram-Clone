import './App.css'
import Login from "./components/Auth/Login/Login.jsx";
import SignUp from "./components/Auth/SignUp/SignUp.jsx";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
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
import Create from "./components/Create/Create.jsx";
import Notifications from "./components/Notifications/Notifications.jsx";
import Tagged_Profile from "./components/Profile/Tagged_Profile/Tagged_Profile.jsx";
import CardUserProfile from "./components/Profile/CardUserProfile/CardUserProfile.jsx";
import Saved_Profile from "./components/Profile/Saved_Profile/Saved_Profile.jsx";
import Reels_Profile from "./components/Profile/Reels_Profile/Reels_Profile.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Saved_Audio from "./components/Profile/Saved_Profile/audio/Saved_Audio.jsx";
import AuthDetails from "./components/Auth/AuthDetails.jsx";
import Welcome from "./components/Auth/SignUp/Welcome.jsx";
import MainLayout from "./MainLayout.jsx";


function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const api = createApi();
  const location = useLocation();


  const mainRoutesPrefixes = [
    '/home',
    '/profile',
    '/explore',
    '/reels',
    '/direct',
    '/saved',
  ];

  const isMainRoute = mainRoutesPrefixes.some(prefix => location.pathname.startsWith(prefix));

  return (
    <ApiContext.Provider value={api}>
      <AuthDetails />

      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/welcome" element={<Welcome />} />

        <Route path="/" element={<Navigate to="/home" replace />} />


        <Route element={
          <MainLayout
            setSearchOpen={setSearchOpen}
            setCreateOpen={setCreateOpen}
            setNotificationsOpen={setNotificationsOpen}
          />
        }>
          <Route path="/home" element={<Home />} />

          <Route path="/profile/:username" element={<Profile />}>
            <Route index element={<CardUserProfile />} />
            <Route path="tagged" element={<Tagged_Profile />} />
            <Route path="saved" element={<Saved_Profile />} />
            <Route path="reels" element={<Reels_Profile />} />
          </Route>

          <Route path="/explore" element={<Explore />} />
          <Route
            path="/explore/not_personalized"
            element={<NotPersonalized />}
          />

          <Route path="/reels" element={<Reels />} />
          <Route path="/direct" element={<Messages />} />
          <Route path="/saved/audio" element={<Saved_Audio />} />
        </Route>
      </Routes>

      {searchOpen && <Search onClose={() => setSearchOpen(false)} />}
      {createOpen && <Create onClose={() => setCreateOpen(false)} />}
      {notificationsOpen && (
        <Notifications onClose={() => setNotificationsOpen(false)} />
      )}

    </ApiContext.Provider>
  )
}

export default App
