import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const servicos = [
  {
    nome: "Pintura Facial",
    imagem: "images/servicos/pintura002.jpg",
    descricao:
      "Transformamos rostinhos em super-heróis, princesas, animais e criaturas mágicas com tintas seguras e coloridas.",
  },
  {
    nome: "Esculturas de Balão",
    imagem: "images/servicos/escultura001.jpg",
    descricao:
      "Nossos animadores transformam balões em animais, flores, chapéus e personagens divertidos, encantando as crianças com formas coloridas e criativas feitas na hora!",
  },

  {
    nome: "Oficinas",
    imagem: "images/servicos/oficina003.jpg",
    descricao:
      "Atividades criativas e educativas para crianças! Nas nossas oficinas, elas podem explorar artes, brincadeiras manuais, construção de brinquedos e outras experiências que estimulam a imaginação, coordenação e diversão em grupo.",
  },
];

const ServicosOferecidos: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: 8, px: { xs: 3, md: 8 }, backgroundColor: "#F6E7D8" }}>
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
        Serviços Oferecidos
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {servicos.map((servico, index) => (
          <Grid
            container
            spacing={4}
            alignItems="center"
            key={index}
            direction={index % 2 === 0 ? "row" : "row-reverse"}
          >
            <Grid item xs={12} md={6}>
              <motion.img
                src={servico.imagem}
                alt={servico.nome}
                style={{
                  width: "90%",
                  height: 250,
                  borderRadius: 12,
                  objectFit: "cover",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
                }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Typography
                  variant="h4"
                  sx={{ color: "#FF6F61", fontWeight: "bold", mb: 2 }}
                >
                  {servico.nome}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "1.15rem", lineHeight: 1.7 }}
                >
                  {servico.descricao}
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        ))}
      </Box>

      {/* Botões */}
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
          onClick={() => navigate("/nossos-servicos")}
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
          onClick={() => window.open("https://wa.me/5531984019545", "_blank")}
        >
          Solicitar orçamento
        </Button>
      </Box>
    </Box>
  );
};

export default ServicosOferecidos;
