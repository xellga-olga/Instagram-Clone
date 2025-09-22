import React from "react";
import {
  Box,
  Button,
  Divider,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import inst_logo from "../../assets/inst_logo.png";

const LoginForm = () => {
  return (
    <Box
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
        label="Phone number, username, or email"
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        variant="outlined"
        size="small"
        label="Password"
        type="password"
        sx={{ mb: 2 }}
      />

      {/* Login button */}
      <Button
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

      {/* Divider */}
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
          <Link href="#" underline="none" sx={{ color: "#0095f6", fontWeight: "bold" }}>
            Sign up
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginForm;2