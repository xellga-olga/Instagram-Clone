import React, {useEffect, useState} from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from "../../firebase storage/firebase.js";
import {useNavigate, useLocation} from "react-router-dom";


const AuthDetails = () => {
  // const [authUser, setAuthUser] = useState(null)
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // редирект только если пользователь аноним и не на публичных страницах
      const publicPaths = ['/login', '/signup', '/welcome'];
      if (!user && !publicPaths.includes(location.pathname)) {
        navigate('/login', { replace: true });
      }
    });

    return unsubscribe;
  }, [navigate, location.pathname]);

  return null;

  // return (
  //   // <div>
  //   //   {authUser ? (
  //   //     <div>
  //   //       <p>
  //   //         {`Signed in as ${authUser.email}`}
  //   //       </p>
  //   //       <button onClick={userSignOut}>
  //   //         Sign Out
  //   //       </button>
  //   //     </div>
  //   //   ) : <p>Signed Out</p>}
  //   // </div>
  //
  // );
};

export default AuthDetails;