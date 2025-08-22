import CarouselComponent from "../components/Carousel";
import SobreEmpresa from "./sobreEmpresa";
import Servicos from "./servicos";
import Galeria from "./GaleriaHome";
import ContatoPage from "./ContatoPage";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const PaginaInicial: React.FC = () => {

  const location = useLocation();
  
   useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const sectionId = location.state.scrollTo;
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // pequeno delay pra garantir render
      }
    }
  }, [location]);

  return (
    <>
      <div style={{ width: "100vw", margin: 0, padding: 0 }}>
        <CarouselComponent />
        <SobreEmpresa />
        <Servicos />
        <Galeria />
        <ContatoPage/>
      </div>
    </>
  );
};


export default PaginaInicial;
