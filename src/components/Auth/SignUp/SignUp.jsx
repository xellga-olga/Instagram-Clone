import React from 'react';
import SignUpForm from './SignUpForm.jsx';
import './signup.css';
import Grid from '@mui/material/Grid';

const SignUp = () => {
  return (
    <div className="signupPage" style={{ minHeight: '100vh' }}>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ height: '100%' }}
      >
        <Grid item xs={12} md={4} display="flex" justifyContent="center">
          <SignUpForm />
        </Grid>
      </Grid>
    </div>
  );
};

export default SignUp;