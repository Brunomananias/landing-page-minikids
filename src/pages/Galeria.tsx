import React, { useEffect, useState } from "react";
import { fotos } from "../data/fotos";
import "../styles/Galeria.css";
import { Typography } from "@mui/material";

const categorias = ["Todas", "Eventos", "Brincadeiras", "Pinturas", "Esculturas"];
const subcategoriasEventos = ["Todas", "Páscoa 2025"];

const Galeria: React.FC = () => {
  const [filtro, setFiltro] = useState("Todas");
  const [subFiltro, setSubFiltro] = useState("Todas");
  const [imagemSelecionada, setImagemSelecionada] = useState<string | null>(null);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const imagensPorPagina = 20;

  useEffect(() => {
    const fecharModalComScroll = () => {
      if (imagemSelecionada) {
        setImagemSelecionada(null);
      }
    };

    if (imagemSelecionada) {
      window.addEventListener("wheel", fecharModalComScroll);
    }

    return () => {
      window.removeEventListener("wheel", fecharModalComScroll);
    };
  }, [imagemSelecionada]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fotosFiltradas = fotos.filter((foto) => {
    if (filtro === "Todas") return true;
    if (filtro !== "Eventos") return foto.categoria === filtro;
    if (subFiltro === "Todas") return foto.categoria === "Eventos";
    return foto.categoria === "Eventos" && foto.subcategoria === subFiltro;
  });

  const indexInicio = (paginaAtual - 1) * imagensPorPagina;
  const indexFim = indexInicio + imagensPorPagina;
  const fotosPaginadas = fotosFiltradas.slice(indexInicio, indexFim);
  const totalPaginas = Math.ceil(fotosFiltradas.length / imagensPorPagina);

  return (
    <div className="galeria-container" style={{ backgroundColor: "#F6E7D8" }}>
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

      <div className="filtros">
        {categorias.map((cat) => (
          <button
            key={cat}
            className={`filtro-btn ${filtro === cat ? "ativo" : ""}`}
            onClick={() => {
              setFiltro(cat);
              setSubFiltro("Todas");
              setPaginaAtual(1); // Resetar paginação
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtro === "Eventos" && (
        <div className="filtros">
          {subcategoriasEventos.map((sub) => (
            <button
              key={sub}
              className={`filtro-btn ${subFiltro === sub ? "ativo" : ""}`}
              onClick={() => {
                setSubFiltro(sub);
                setPaginaAtual(1); // Resetar paginação
              }}
            >
              {sub}
            </button>
          ))}
        </div>
      )}

      <div className="grade">
        {fotosPaginadas.map((foto) => (
          <div key={foto.id} className="foto-card">
            <img
              src={foto.url}
              alt={foto.categoria}
              className="foto-img"
              onClick={() => setImagemSelecionada(foto.url)}
              style={{ cursor: "pointer" }}
            />
            {foto.descricao && (
              <div className="descricao-overlay">{foto.descricao}</div>
            )}
          </div>
        ))}
      </div>

      {/* Paginação */}
      {totalPaginas > 1 && (
        <div className="paginacao">
          {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((numero) => (
            <button
              key={numero}
              className={`pagina-btn ${paginaAtual === numero ? "ativa" : ""}`}
              onClick={() => setPaginaAtual(numero)}
            >
              {numero}
            </button>
          ))}
        </div>
      )}

      {/* Modal da Imagem */}
      {imagemSelecionada && (
        <div className="modal-overlay" onClick={() => setImagemSelecionada(null)}>
          <div className="modal-conteudo" onClick={(e) => e.stopPropagation()}>
            <button className="modal-fechar" onClick={() => setImagemSelecionada(null)}>×</button>
            <img src={imagemSelecionada} alt="Visualização ampliada" className="modal-imagem" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Galeria;
