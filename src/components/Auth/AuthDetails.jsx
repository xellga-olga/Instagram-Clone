import React, {useEffect, useState} from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import {auth} from "../../firebase.js";
import {useNavigate} from "react-router-dom";


const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null)
  const navigate = useNavigate();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      setAuthUser(user);
      if (user) {
        navigate('/home', { replace: true });
      } else {
        navigate('/login', { replace: true });
      }
    });
    return () => {
      listen();
    }
  },[])

  function userSignOut() {
    signOut(auth)
    .then(() => console.log('User signed out'))
    .catch(err => console.error(err));
  }

  return (
    <div>
      {authUser ? (
        <div>
          <p>
            {`Signed in as ${authUser.email}`}
          </p>
          <button onClick={userSignOut}>
            Sign Out
          </button>
        </div>
      ) : <p>Signed Out</p>}
    </div>
  );
};

export default AuthDetails;