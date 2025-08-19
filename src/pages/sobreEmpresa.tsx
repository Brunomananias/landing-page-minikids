import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SobreEmpresa: React.FC = () => {

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        py: 10,
        px: { xs: 3, md: 8 },
        backgroundColor: "#F6E7D8",
      }}
    >
      {/* Linha decorativa */}
      <Box sx={{ display: "flex", justifyContent: "center", marginY: 1 }}>
        <svg
          width="300"
          height="40"
          viewBox="0 0 300 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 20 Q50 0 100 20 T200 20 T300 20"
            stroke="#FFD700"
            strokeWidth="4"
            fill="transparent"
          />
        </svg>
      </Box>

      {/* Título */}
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
        Quem somos
      </Typography>

      {/* Conteúdo principal */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 6,
          mt: 4,
        }}
      >
        {/* Texto à esquerda */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ flex: 1 }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: "bold", mb: 2 }}
          >
            Ana e Raquel, unindo recreação, educação e inovação para proporcionar experiências inesquecíveis para crianças.
          </Typography>

          <Typography variant="body1" sx={{ fontSize: 18, lineHeight: 1.7, mb: 2 }}>
            Ana, atriz e recreadora, e Raquel, pedagoga e empresária, juntaram suas paixões para criar um espaço onde o brincar é valorizado como parte essencial do desenvolvimento infantil.
          </Typography>

          <Typography variant="body1" sx={{ fontSize: 18, lineHeight: 1.7, mb: 2 }}>
            Nosso objetivo é oferecer momentos de alegria, aprendizado e socialização por meio de atividades lúdicas, criativas e educativas. Acreditamos que cada brincadeira é uma oportunidade de estimular a imaginação, fortalecer vínculos e desenvolver habilidades importantes para a vida.
          </Typography>

          <Typography variant="body1" sx={{ fontSize: 18, lineHeight: 1.7, mb: 2 }}>
            Atuamos com responsabilidade, carinho e dedicação, sempre buscando adaptar as experiências às necessidades de cada evento e à faixa etária das crianças. Seja em festas, escolas ou encontros especiais, criamos memórias que ficam para sempre.
          </Typography>

          <Typography variant="body1" sx={{ fontSize: 18, lineHeight: 1.7 }}>
            Mais do que recreação, oferecemos um verdadeiro universo de descobertas, onde a diversão se mistura com o cuidado e a educação, garantindo experiências únicas e inesquecíveis.
          </Typography>
        </motion.div>

        {/* Imagens à direita */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src="images/quemsomos/ana.png"
            alt="Ana"
            sx={{
              width: "100%",
              maxWidth: 300,
            }}
          />
          <Box
            component="img"
            src="images/quemsomos/raquel.png"
            alt="Raquel"
            sx={{
              width: "100%",
              maxWidth: 300,
            }}
          />            
        </motion.div>
      </Box>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              fontFamily: "'Baloo 2', cursive",
              textTransform: "none",
              mt: 6,
              boxShadow: "0 4px 12px rgba(247, 157, 23, 0.6)",
              bgcolor: "#FFD700",
              "&:hover": {
                bgcolor: "#FFC107",
                boxShadow: "0 6px 15px rgba(255, 193, 7, 0.8)",
              },
            }}
            title="Ver mais"
            onClick={() => navigate("/quem-somos")} // aqui vai a rota da GaleriaPage
          >
            Ver mais
          </Button>
    </Box>
  );
};

export default SobreEmpresa;
