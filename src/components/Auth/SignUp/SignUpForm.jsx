import React, {useState} from 'react';
import {Box, Button, CircularProgress, Divider, Link, TextField, Typography} from '@mui/material';
import inst_logo from '../../../assets/inst_logo.png';
import {auth} from "../../../firebase.js";
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {Link as RouterLink, useNavigate} from "react-router-dom";

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();


  const usernameRules = 'Допустимо: (a–z), (0–9), (.), (_). Без пробелов. Max 10 символов.';

  function validateUsername(u) {

    for (let i = 1; i < u.length; i++) {
      const c = u[i];
      if (!(
        (c >= 'a' && c <= 'z') ||
        (c >= '1' && c <= '9') ||
        c === '.' ||
        c === '_'
      )) {
        return {valid: false, message: 'Можно использовать только буквы (a-z), цифры, точки и подчёркивания.'};
      }
    }
    return {valid: true, message: ''};
  }

  function validateEmail(e) {
    if (!e) return false;
    if (e.indexOf('@') === -1) return false;
    if (e.indexOf('.') === -1) return false;
    if (e.includes(' ')) return false;
    return true;
  }

  function register(e) {
    e.preventDefault();
    setError('');
    setPasswordError('');
    setUsernameError('');

    if (!validateEmail(email.trim())) {
      setError('Введите корректный e-mail.');
      return;
    }

    if (password.length < 6) {
      setPasswordError('Пароль должен содержать минимум 6 символов.');
      return;
    }

    if (password !== confirmPassword) {
      setPasswordError('Пароли не совпадают');
      return;
    }

    const usernameCheck = validateUsername(username);
    if (!usernameCheck.valid) {
      setUsernameError(usernameCheck.message);
      return;
    }

    setLoading(true);

    createUserWithEmailAndPassword(auth, email.trim().toLowerCase(), password)
      .then((userCredential) => {
        const user = userCredential.user;
        return updateProfile(user, {displayName: username});
      })
      .then(() => {
        setError('');
        setEmail('');
        setPassword('');
        setUsername('');
        setConfirmPassword('');

        navigate('/welcome');
      })
      .catch((err) => {
        let message = '';
        if (err.code === 'auth/email-already-in-use') {
          message = 'Этот email уже используется.';
        } else if (err.code === 'auth/invalid-email') {
          message = 'Неверный формат email.';
        } else if (err.code === 'auth/weak-password') {
          message = 'Пароль слишком слабый. Минимум 6 символов.';
        } else {
          message = 'Ошибка при создании аккаунта. Попробуйте ещё раз.';
        }

        setError(message);
        if (message.toLowerCase().includes('пароль') || err.code === 'auth/weak-password') {
          setPasswordError(message);
        }
      })
      .finally(() => setLoading(false));
  }

  return (
    <Box component="form" onSubmit={register}
         sx={{
           width: 350,
           p: 4,
           border: '1px solid #dbdbdb',
           borderRadius: 2,
           bgcolor: 'background.paper',
           display: 'flex',
           flexDirection: 'column',
           alignItems: 'center',
           gap: 1.5,
         }}
    >

      <Box sx={{mb: 2}}>
        <img src={inst_logo} alt="Instagram logo" style={{height: 60}}/>
      </Box>

      <Typography variant="body1" sx={{fontSize: 16, fontWeight: 500, textAlign: 'center'}}>
        Sign up to see photos and videos from your friends.
      </Typography>


      <Button
        fullWidth
        variant="text"
        sx={{
          textTransform: 'none',
          fontWeight: 'bold',
          color: '#385185',
          mb: 1,
        }}
      >
        Log in with Facebook
      </Button>

      <Divider sx={{width: '100%', my: 1}}>OR</Divider>


      <TextField
        fullWidth
        variant="outlined"
        size="small"
        label="Mobile number or email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setError('');
        }}
        autoFocus
      />

      <TextField
        fullWidth
        variant="outlined"
        size="small"
        label="User name"
        value={username}
        error={Boolean(usernameError)}
        helperText={usernameError || usernameRules}
        onChange={(e) => {
          let v = e.target.value.replace(/\s+/g, '');
          if (v.length > 30) v = v.slice(0, 30);
          setUsername(v);

          let errorMsg = '';
          for (let i = 0; i < v.length; i++) {
            const c = v[i];
            if (!(
              (c >= 'A' && c <= 'Z') ||
              (c >= 'a' && c <= 'z') ||
              (c >= '0' && c <= '9') ||
              c === '.' ||
              c === '_'
            )) {
              errorMsg = 'Можно использовать только буквы (A-Z), цифры, точки и подчёркивания.';
              break;
            }
          }
          if (!errorMsg && v.length > 30) {
            errorMsg = 'Имя пользователя должно быть не более 30 символов.';
          }
          setUsernameError(errorMsg);
        }}
      />
      <TextField
        fullWidth
        variant="outlined"
        size="small"
        label="Password"
        type="password"
        value={password}
        error={Boolean(passwordError)}
        helperText={passwordError}
        onChange={(e) => {
          const v = e.target.value;
          setPassword(v);
          setError('');
          if (v.length > 0 && v.length < 6) {
            setPasswordError('Пароль должен содержать минимум 6 символов.');
          } else {
            setPasswordError('');
          }
        }}
      />
      <TextField
        fullWidth
        variant="outlined"
        size="small"
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        error={Boolean(passwordError)}
        helperText={passwordError}
        onChange={(e) => {
          const v = e.target.value;
          setConfirmPassword(v);
          setError('');
          if (v !== password) {
            setPasswordError('Пароли не совпадают');
          } else if (password && password.length < 6) {
            setPasswordError('Пароль должен содержать минимум 6 символов.');
          } else {
            setPasswordError('');
          }
        }}
      />


      <Button
        type="submit"
        fullWidth
        variant="contained"
        disabled={
          loading ||
          Boolean(error) ||
          Boolean(usernameError) ||
          !email ||
          !password ||
          password.length < 6 ||
          password !== confirmPassword
        }
        sx={{
          backgroundColor: '#0095f6',
          textTransform: 'none',
          fontWeight: 'bold',
          color: 'white',
          mt: 1,
          '&:hover': {
            backgroundColor: '#007ac1',
          },
        }}
      >
        {loading ? (
          <>
            <CircularProgress size={18} sx={{mr: 1, color: 'white'}}/>
            Signing up...
          </>
        ) : (
          'Sign up'
        )}
      </Button>

      {error ? <p style={{color: 'red'}}>{error}</p> : ''}

      <Typography variant="caption" sx={{fontSize: 11, textAlign: 'center', color: 'text.secondary', mt: 2}}>
        By signing up, you agree to our Terms, Privacy Policy and Cookies Policy.
      </Typography>

      <Box
        sx={{
          mt: 3,
          pt: 2,
          borderTop: '1px solid #dbdbdb',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <Typography variant="body2">
          Have an account?{' '}
          <Link to='/login' component={RouterLink} underline="none" sx={{fontWeight: 'bold', color: '#0095f6'}}>
            Log in
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignUpForm;
