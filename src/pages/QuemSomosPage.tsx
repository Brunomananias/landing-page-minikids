import React, { useEffect } from "react";
import { Box, Typography, Grid, Card } from "@mui/material";
import { motion } from "framer-motion";

const QuemSomosPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const equipe = [
    { nome: "Ana", cargo: "CEO da Minikids e Recreadora", imagem: "images/quemsomos/recreador003.png" },
    { nome: "Karielli", cargo: "Recreadora", imagem: "images/quemsomos/recreador001.png" },
    { nome: "Ricardo", cargo: "Recreador", imagem: "images/quemsomos/recreador002.png" },
  ];

  return (
    <Box sx={{ p: { xs: 3, md: 8 }, backgroundColor: "#F6E7D8", minHeight: "100vh" }}>
      {/* Título */}
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontFamily: "'Baloo 2', cursive", fontWeight: "bold", color: "#FF6F61", mb: 6 }}
      >
        Quem Somos
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 4,
          mb: 6,
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box
            sx={{
              width: 300,
              height: 300,
              borderRadius: "50%",
              overflow: "hidden",
              boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src="/images/quemsomos/equipe001.jpg"
              alt="Equipe brincando"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        </motion.div>

        <Typography variant="body1" sx={{ fontSize: "1.15rem", lineHeight: 1.7 }}>
          Somos uma equipe apaixonada por criar momentos mágicos e inesquecíveis para crianças!
          Ana, atriz e recreadora, e Raquel, pedagoga e empresária, uniram suas paixões para criar
          um espaço onde brincar é valorizado, promovendo experiências educativas, lúdicas e
          memoráveis. Com anos de experiência em festas infantis, levamos alegria, brincadeiras e
          muito amor a cada evento.
        </Typography>
      </Box>

      {/* Missão, Visão, Valores */}
      <Grid container spacing={3} mb={6}>
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3, backgroundColor: "#FFEBB7", textAlign: "center", borderRadius: 3 }}>
            <Typography variant="h6" sx={{ mb: 1 }}>🎯 Missão</Typography>
            <Typography variant="body2">
              Proporcionar experiências únicas e educativas por meio da brincadeira.
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3, backgroundColor: "#B2F2BB", textAlign: "center", borderRadius: 3 }}>
            <Typography variant="h6" sx={{ mb: 1 }}>🔭 Visão</Typography>
            <Typography variant="body2">
              Ser referência em recreação infantil na nossa cidade e região.
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3, backgroundColor: "#D0EBFF", textAlign: "center", borderRadius: 3 }}>
            <Typography variant="h6" sx={{ mb: 1 }}>💖 Valores</Typography>
            <Typography variant="body2">
              Respeito, alegria, criatividade e responsabilidade.
            </Typography>
          </Card>
        </Grid>
      </Grid>

      {/* Equipe */}
      <Box>
        <Typography variant="h4" align="center" gutterBottom sx={{ mb: 4 }}>
          Nossa Equipe
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {equipe.map((membro, index) => (
            <Grid item key={membro.nome}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <Box
                    sx={{
                      width: 140,
                      height: 140,
                      borderRadius: "50%",
                      overflow: "hidden",
                      marginBottom: 1,
                      mx: "auto",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    }}
                  >
                    <img
                      src={membro.imagem}
                      alt={membro.nome}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>{membro.nome}</Typography>
                  <Typography variant="body2" sx={{ color: "#555" }}>{membro.cargo}</Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default QuemSomosPage;
