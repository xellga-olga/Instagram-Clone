import React, {useState} from "react";
import {Box, Button, Divider, Link, TextField, Typography,} from "@mui/material";
import inst_logo from "../../../assets/inst_logo.png";
import {signInWithEmailAndPassword} from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {auth, db} from "../../../firebase storage/firebase.js";
import {Link as RouterLink, useNavigate} from "react-router-dom";

import { collection, getDocs, query, where, limit, setDoc, doc, serverTimestamp } from "firebase/firestore";

import { sendPasswordResetEmail } from "firebase/auth";


const LoginForm = () => {
  // const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {

      if (auth.currentUser) await auth.signOut();

      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('email', '==', user.email), limit(1));
      const snap = await getDocs(q);

      if (snap.empty) {
        await auth.signOut();
        setError('Пользователь с таким email не зарегистрирован');
        return;
      }
      //
      // UID из Firestore
      const existingDoc = snap.docs[0];
      const existingData = existingDoc.data();
      const existingUid = existingDoc.id;
      const usernameFromDb = existingData.username || user.displayName || '';

      // Обновить Firestore
      await setDoc(doc(db, 'users', existingUid), {
        ...existingData,
        email: user.email,
        createdAt: serverTimestamp(),
      });


      setLogin('');
      setPassword('');

      navigate('/home');
    } catch (err) {
      console.error('Google login error:', err);
      setError('Ошибка входа через Google');
    }
  };



  async function handleLogin(e) {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setError('');

    const loginValue = login.trim().toLowerCase();
    const passwordValue = password.trim();

    if (!loginValue || !passwordValue) {
      setError('Введите логин и пароль');
      setLoading(false);
      return;
    }

    try {
      let emailToLogin = loginValue;
      // Only look up in Firestore if login is not an email
      if (!loginValue.includes('@')) {
        const foundEmail = await findEmailByLogin(loginValue);
        if (!foundEmail) throw new Error('USER_NOT_FOUND');
        emailToLogin = foundEmail;
      }

      await signInWithEmailAndPassword(auth, emailToLogin, passwordValue);
      navigate('/home');
    } catch (err) {
      console.log('Login error:', err);
      setError(err.message === 'USER_NOT_FOUND' ? 'Пользователь не найден' : 'Неверный логин или пароль');
    } finally {
      setLoading(false);
    }
  }


  async function findEmailByLogin(loginInput) {
    if (loginInput.includes('@')) return loginInput;

    try {
      // username
      let q = query(
        collection(db, 'users'),
        where('username', '==', loginInput),
        limit(1)
      );
      let snap = await getDocs(q);
      if (!snap.empty) {
        console.log("Found user by username:", loginInput);
        return snap.docs[0].data().email;
      }
    } catch (err) {
      console.log("Error finding user by username:", err);
    }

    try {
      // phone
      let q = query(
        collection(db, 'users'),
        limit(1000)
      );
      let snap = await getDocs(q);
      if (!snap.empty) {
        for (let doc of snap.docs) {
          let userData = doc.data();
          let phoneNormalized = userData.phone ? userData.phone.replace(/\D/g, '') : '';
          console.log("Comparing phone:", phoneNormalized, "with loginInput:", loginInput);
          if (phoneNormalized === loginInput) {
            console.log("Found user by phone:", loginInput);
            return userData.email;
          }
        }
      }
    } catch (err) {
      console.log("Error finding user by phone:", err);
    }

    return null;
  }

  async function handleForgotPassword() {
    if (!login.trim()) {
      setError('Введите email');
      return;
    }

    setError('');
    setLoading(true);

   let loginValue = login.trim().toLowerCase();
   let emailToReset = loginValue;

   try {
     if (!loginValue.includes('@')) {
       const foundEmail = await findEmailByLogin(loginValue);
       if (!foundEmail) {
         setError('Пользователь не найден')
       } else {
         emailToReset = foundEmail;
       }
     }

     await sendPasswordResetEmail(auth, emailToReset);
     alert('Письмо для сброса пароля отправлено')
   } catch (e) {
     setError('Ошибка при отправке письма')
   } finally {
     setLoading(false);
   }
  }





  return (
    <Box component="form" onSubmit={handleLogin}
         sx={{
           width: 350,
           p: 3,
           border: "1px solid #dbdbdb",
           borderRadius: 2,
           display: "flex",
           flexDirection: "column",
           alignItems: "center",
           bgcolor: "background.paper",
         }}
    >
      {/* Logo */}
      <Box sx={{mb: 3}}>
        <img src={inst_logo} alt="logo" style={{height: 50}}/>
      </Box>

      {/* Input fields */}
      <TextField
        fullWidth
        variant="outlined"
        size="small"
        label="Email, username or phone"
        sx={{mb: 2}}
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />
      <TextField
        fullWidth
        variant="outlined"
        size="small"
        label="Password"
        type="password"
        sx={{mb: 2}}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* Login button */}
      <Button
        type="submit"
        disabled={loading}
        fullWidth
        variant="contained"
        sx={{
          backgroundColor: "#0095f6",
          textTransform: "none",
          fontWeight: "bold",
          "&:hover": {backgroundColor: "#007ac1"},
          mb: 2,
        }}
      >
        Log In
      </Button>

      {error ? <p style={{color: 'red'}}>{error}</p> : ''}

      <Divider sx={{width: "100%", mb: 2}}>OR</Divider>

      {/* Login with Facebook */}
      <Button
        fullWidth
        variant="text"
        sx={{
          textTransform: "none",
          fontWeight: "bold",
          color: "#385185",
          mb: 2,
        }}
      >
        Log in with Facebook
      </Button>

      {/* Login with GOOGLE */}
      <Button
        fullWidth
        variant="text"
        sx={{
          textTransform: "none",
          fontWeight: "bold",
          color: "#6e47d1",
          mb: 2
        }}
        onClick={handleGoogleLogin}
      >
        Log in with Google
      </Button>

      {/* Forgot password link */}
      <Link
        // href="#"
        component='button'
        underline="none"
        sx={{fontSize: 12, color: "#00376b", mb: 2}}
        onClick={handleForgotPassword}
      >
        Forgot password?
      </Link>

      {/* Sign up section */}
      <Box sx={{ mt: 3, textAlign: "center" }}>
        <Typography variant="body2">
          Don’t have an account?{" "}
          <Link component={RouterLink} to="/signup" underline="none" sx={{ color: "#0095f6", fontWeight: "bold" }}>
            Sign up
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginForm;