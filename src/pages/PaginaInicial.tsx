import CarouselComponent from "../components/Carousel";
import SobreEmpresa from "./sobreEmpresa";
import Servicos from "./servicos";
import Galeria from "./GaleriaHome";
import ContatoPage from "./ContatoPage";

const PaginaInicial: React.FC = () => {
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
