import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: 350,
        mx: "auto",
        mt: 30,
        textAlign: "center",
      }}
    >
      <Typography variant="h5" sx={{ mb: 5 }}>
        Welcome 🎉
      </Typography>

      <Typography sx={{ mb: 5 }}>
        Ваш аккаунт успешно создан!
      </Typography>

      <Button
        variant="contained"
        onClick={() => navigate("/home")}
      >
        Перейти в приложение
      </Button>
    </Box>
  );
}
export default Welcome;