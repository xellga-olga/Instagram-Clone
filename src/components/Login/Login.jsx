import React from 'react';
import LoginImg from "./LoginImg.jsx";
import LoginForm from "./LoginForm.jsx";
import './login.css';
import Grid from '@mui/material/Grid';

const Login = () => {
  return (
    <div className="loginPage">
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ height: '100%' }}
      >
        {/* Left side - image */}
        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <LoginImg />
        </Grid>

        {/* Right side - form */}
        <Grid item xs={12} md={4} display="flex" justifyContent="center">
          <LoginForm />
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;