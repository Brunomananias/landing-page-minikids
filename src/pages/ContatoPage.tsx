import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

const ContatoPage: React.FC = () => {
  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 3, md: 8 },
        backgroundColor: "#F6E7D8",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Separador decorativo */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <svg width="300" height="40" viewBox="0 0 300 40" fill="none">
          <path
            d="M0 20 Q50 0 100 20 T200 20 T300 20"
            stroke="#FFD700"
            strokeWidth="4"
            fill="transparent"
          />
        </svg>
      </Box>

      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          fontFamily: "'Baloo 2', cursive",
          fontWeight: "bold",
          color: "#FF6F61",
          mb: 4,
        }}
      >
        Contato
      </Typography>

      <Typography align="center" sx={{ mb: 6, maxWidth: 600, fontSize: "1.1rem" }}>
        Tem dúvidas ou quer agendar uma recreação? Escolha a forma que prefere entrar em contato!
      </Typography>

      <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: 800 }}>
        {/* WhatsApp */}
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: 3,
              backgroundColor: "#fff",
              borderRadius: 3,
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            }}
          >
            <WhatsAppIcon sx={{ fontSize: 50, color: "#25D366", mb: 2 }} />
            <Typography variant="h6" sx={{ mb: 2 }}>WhatsApp</Typography>
            <Button
              variant="contained"
              sx={{
                background: "#25D366",
                color: "#fff",
                "&:hover": { background: "#1ebe5d" },
                textTransform: "none",
              }}
              href="https://wa.me/5531984019545"
              target="_blank"
            >
              Enviar mensagem
            </Button>
          </Box>
        </Grid>

        {/* Instagram */}
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: 3,
              backgroundColor: "#fff",
              borderRadius: 3,
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            }}
          >
            <InstagramIcon sx={{ fontSize: 50, color: "#C13584", mb: 2 }} />
            <Typography variant="h6" sx={{ mb: 2 }}>Instagram</Typography>
            <Button
              variant="contained"
              sx={{
                background: "#C13584",
                color: "#fff",
                "&:hover": { background: "#e1306c" },
                textTransform: "none",
              }}
              href="https://www.instagram.com/minikidsrecrear"
              target="_blank"
            >
              Visitar perfil
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContatoPage;
