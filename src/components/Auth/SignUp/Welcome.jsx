import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {useTranslation} from "react-i18next";
import { PartyPopper } from 'lucide-react';

const Welcome = () => {
  const navigate = useNavigate();
  const {t} = useTranslation();

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
        {t("welcome.title")} <PartyPopper />
      </Typography>

      <Typography sx={{ mb: 5 }}>
        {t("welcome.subtitle")}
      </Typography>

      <Button
        variant="contained"
        onClick={() => navigate("/home")}
      >
        {t("welcome.button")}

      </Button>
    </Box>
  );
}
export default Welcome;