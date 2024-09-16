import React from 'react';
import {
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Principal from './pages/Principal';
import Tecnologias from './pages/Tecnologias';
import Proyectos from './pages/Proyectos';
import Aprendizaje from './pages/Aprendizaje';
import Contacto from './pages/Contacto';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/tecnologias" element={<Tecnologias />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/aprendizaje" element={<Aprendizaje />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;