import React, {useState} from 'react';
import {Box, Button, Divider, Link, TextField, Typography,} from '@mui/material';
import inst_logo from '../../../assets/inst_logo.png';
import {auth} from "../../../firebase.js";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Link as RouterLink } from "react-router-dom";

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  function register(e) {
    e.preventDefault();
    if (confirmPassword !== password) {
      setError('Passwords do not match');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        return updateProfile(user, { displayName: username || fullName });
      })
      .then(() => {
        setError('');
        setEmail('');
        setPassword('');
        setUsername('');
        setFullName('');
        setConfirmPassword('');
      })
      .catch((error) => {
        console.log(error, 'Error email');
        setError(error.message || 'Failed to create account');
      });
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
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        fullWidth
        variant="outlined"
        size="small"
        label="Full name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <TextField
        fullWidth
        variant="outlined"
        size="small"
        label="User name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        fullWidth
        variant="outlined"
        size="small"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        fullWidth
        variant="outlined"
        size="small"
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />


      <Button
        type="submit"
        fullWidth
        variant="contained"
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
        Sign up
      </Button>

      {error ? <p style={{color:'red'}}>{error}</p> : ''}

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