import React from 'react';
import {
  Box,
  Button,
  Divider,
  TextField,
  Typography,
  Link,
} from '@mui/material';
import inst_logo from '../../assets/inst_logo.png';

const SignUpForm = () => {
  return (
    <Box
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

      <Box sx={{ mb: 2 }}>
        <img src={inst_logo} alt="Instagram logo" style={{ height: 60 }} />
      </Box>

      <Typography variant="body1" sx={{ fontSize: 16, fontWeight: 500, textAlign: 'center' }}>
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

      <Divider sx={{ width: '100%', my: 1 }}>OR</Divider>


      <TextField
        fullWidth
        variant="outlined"
        size="small"
        label="Mobile number or email"
      />
      <TextField
        fullWidth
        variant="outlined"
        size="small"
        label="Full name"
      />
      <TextField
        fullWidth
        variant="outlined"
        size="small"
        label="Username"
      />
      <TextField
        fullWidth
        variant="outlined"
        size="small"
        label="Password"
        type="password"
      />


      <Button
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

      <Typography variant="caption" sx={{ fontSize: 11, textAlign: 'center', color: 'text.secondary', mt: 2 }}>
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
          <Link href="#" underline="none" sx={{ fontWeight: 'bold', color: '#0095f6' }}>
            Log in
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignUpForm;