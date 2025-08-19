import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const TortaNaCara: React.FC = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Torta na Cara
      </Typography>
      <img
        src="/servicos/torta.jpg"
        alt="Torta na Cara"
        style={{ width: "100%", maxWidth: 500, borderRadius: 10 }}
      />
      <Typography variant="body1" sx={{ mt: 2 }}>
        A famosa brincadeira “Torta na Cara” garante muitas risadas entre crianças e adultos!
        Usamos ingredientes seguros e fazemos tudo com muito cuidado e diversão!
      </Typography>

      <Button component={Link} to="/" variant="contained" sx={{ mt: 4 }}>
        Voltar para serviços
      </Button>
    </Box>
  );
};

export default TortaNaCara;
