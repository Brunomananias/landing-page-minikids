import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const servicos = [
  { imagem: "images/galeria/1.png", texto: "Pinturas Faciais" },
  { imagem: "images/galeria/2.png", texto: "Eventos" },
  { imagem: "images/galeria/3.png", texto: "Oficinas" },
];

const GaleriaHome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{ py: 8, px: { xs: 3, md: 8 }, backgroundColor: "#F6E7D8" }}
    >
      {/* Separador */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <motion.svg
          width="300"
          height="40"
          viewBox="0 0 300 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ originX: 0 }}
        >
          <path
            d="M0 20 Q50 0 100 20 T200 20 T300 20"
            stroke="#FFD700"
            strokeWidth="4"
            fill="transparent"
          />
        </motion.svg>
      </Box>

      {/* Título */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontFamily: "'Baloo 2', cursive",
            fontWeight: "bold",
            color: "#FF6F61",
            mb: 6,
          }}
        >
          Galeria de Fotos
        </Typography>
      </motion.div>

      {/* Grid de imagens */}
      <Grid container spacing={6} justifyContent="center">
        {servicos.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              style={{ textAlign: "center" }}
            >
              <Box
                component="img"
                src={item.imagem}
                alt={item.texto}
                sx={{
                  width: "100%",
                  maxWidth: 300,
                  height: 300,
                  objectFit: "cover",
                  borderRadius: "50%",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                  margin: "0 auto 16px",
                  transition: "transform 0.3s ease",
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "'Baloo 2', cursive",
                  fontWeight: "bold",
                  color: "#FF6F61",
                }}
              >
                {item.texto}
              </Typography>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Botões */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 3,
            mt: 6,
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/galeria")}
            sx={{
              fontFamily: "'Baloo 2', cursive",
              textTransform: "none",
              boxShadow: "0 4px 12px rgba(247, 157, 23, 0.6)",
              bgcolor: "#FFD700",
              "&:hover": {
                bgcolor: "#FFC107",
                boxShadow: "0 6px 15px rgba(255, 193, 7, 0.8)",
              },
            }}
          >
            Ver mais
          </Button>

          <Button
            variant="contained"
            size="large"
            sx={{
              fontFamily: "'Baloo 2', cursive",
              textTransform: "none",
              bgcolor: "#25D366",
              color: "#fff",
              boxShadow: "0 4px 12px rgba(37,211,102,0.6)",
              "&:hover": {
                bgcolor: "#1ebe5d",
                boxShadow: "0 6px 15px rgba(30,190,93,0.8)",
              },
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
            startIcon={<WhatsAppIcon />}
            onClick={() => window.open("https://wa.me/5599999999999", "_blank")}
          >
            Solicitar orçamento
          </Button>
        </Box>
      </motion.div>
    </Box>
  );
};

export default GaleriaHome;
