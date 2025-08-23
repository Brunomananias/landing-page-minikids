import React, { useEffect } from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import { motion } from "framer-motion";

const servicos = [
  {
    nome: "🎈 Esculturas de Balão",
    imagem: "images/servicos/escultura001.jpg",
    descricao:
      "Balões ganham vida nas mãos dos nossos animadores! Criamos animais, espadas, flores, chapéus e muito mais — tudo feito na hora para encantar os pequenos.",
  },
  {
    nome: "🎯 Brincadeiras",
    imagem: "images/servicos/brincadeira002.jpg",
    descricao:
      "Corrida do saco, torta na cara, dança da cadeira, caça ao tesouro e outras gincanas clássicas e modernas. Atividades que incentivam o trabalho em equipe, o movimento e, claro, a alegria de brincar!",
  },
  {
    nome: "🎨 Pinturas Faciais",
    imagem: "images/servicos/pintura001.jpg",
    descricao:
      "Transformamos os rostinhos das crianças em super-heróis, princesas, animais e criaturas mágicas! Tudo com tintas atóxicas, seguras e cores vibrantes que encantam.",
  },
  {
    nome: "🧩 Oficinas",
    imagem: "images/servicos/oficina001.jpg",
    descricao:
      "Atividades criativas que desenvolvem a imaginação e a coordenação motora. As crianças colocam a mão na massa com oficinas de massinha, slime, arte com papel, entre outras!",
  },
  {
    nome: "🎉 Eventos Personalizados",
    imagem: "images/servicos/evento001.jpg",
    descricao:
      "Levamos a alegria e o cuidado da nossa equipe para eventos escolares, empresariais ou temáticos. Criamos experiências completas com recreação, decoração e muita animação!",
  },
];

const ServicosPage: React.FC = () => {
  
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ py: 10, px: { xs: 3, md: 8 }, backgroundColor: "#F6E7D8" }}>
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
        Nossos Serviços
      </Typography>

      <Grid container spacing={5}>
        {servicos.map((servico, index) => (
          <Grid item xs={12} sm={6} md={4} key={servico.nome}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  borderRadius: 4,
                  height: 400, // altura fixa
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={servico.imagem}
                  alt={servico.nome}
                  style={{ objectFit: "cover" }}
                />
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ color: "#FF6F61", fontWeight: "bold" }}
                  >
                    {servico.nome}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#555", lineHeight: 1.6 }}>
                    {servico.descricao}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicosPage;
