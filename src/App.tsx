import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/homepage';
import QuemSomosPage from './pages/QuemSomosPage';
import ServicosPage from './pages/ServicosPage';
import TortaNaCara from './pages/servicos/TortaNaCara';
import Galeria from './pages/Galeria';
const Contato: React.FC = () => <div>Contato Page</div>;

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quem-somos" element={<QuemSomosPage />} />
        <Route path="/nossos-servicos" element={<ServicosPage />} />
         <Route path="/galeria" element={ <Galeria/>} />
         <Route path="/servicos/torta-na-cara" element={<TortaNaCara />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
};

export default App;
