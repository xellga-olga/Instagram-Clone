import React, {useState} from "react";
import {
  Box,
  Button,
  Divider,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import inst_logo from "../../../assets/inst_logo.png";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../../firebase.js";
import {Link as RouterLink, useNavigate} from "react-router-dom";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase.js";


const LoginForm = () => {
  // const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function findEmailByUsername(username) {
    const usersSnapshot = await getDocs(collection(db, "users"));

    for (let doc of usersSnapshot.docs) {
      const data = doc.data();
      if (data.username === username) {
        return data.email;
      }
    }

    return null;
  }

  async function handleLogin(e) {
    e.preventDefault();
    if (loading) return;

    setError('');
    setLoading(true);

    let loginValue = login.trim().toLowerCase();
    let emailToLogin = loginValue;

    try {
      //если нет @ — значит это username
      if (!loginValue.includes('@')) {
        const foundEmail = await findEmailByUsername(loginValue);

        if (!foundEmail) {
          setError('Пользователь не найден');
          setLoading(false);
          return;
        }

        emailToLogin = foundEmail;
      }

      await signInWithEmailAndPassword(auth, emailToLogin, password);

      setLogin('');
      setPassword('');
      navigate('/home');

    } catch (err) {
      setError('Неверный логин или пароль');
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
      <Box sx={{ mb: 3 }}>
        <img src={inst_logo} alt="logo" style={{ height: 50 }} />
      </Box>

      {/* Input fields */}
      <TextField
        fullWidth
        variant="outlined"
        size="small"
        label="Username or email"
        sx={{ mb: 2 }}
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />
      <TextField
        fullWidth
        variant="outlined"
        size="small"
        label="Password"
        type="password"
        sx={{ mb: 2 }}
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
          "&:hover": { backgroundColor: "#007ac1" },
          mb: 2,
        }}
      >
        Log In
      </Button>

      {error ? <p style={{color:'red'}}>{error}</p> : ''}

      <Divider sx={{ width: "100%", mb: 2 }}>OR</Divider>

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

      {/* Forgot password link */}
      <Link
        href="#"
        underline="none"
        sx={{ fontSize: 12, color: "#00376b", mb: 2 }}
      >
        Forgot password?
      </Link>

      {/* Sign up section */}
      <Box
        sx={{
          mt: 3,
          p: 2,
          border: "1px solid #dbdbdb",
          borderRadius: 2,
          textAlign: "center",
          width: "100%",
        }}
      >
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