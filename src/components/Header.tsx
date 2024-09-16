import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuAbierto, setIsMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setIsMenuAbierto(!isMenuAbierto);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">TPN°1</Link>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </button>
      <nav className={`nav-links ${isMenuAbierto ? 'open' : ''}`}>
        <Link to="/" onClick={toggleMenu}>Inicio</Link>
        <Link to="/tecnologias" onClick={toggleMenu}>Tecnologías</Link>
        <Link to="/proyectos" onClick={toggleMenu}>Proyectos</Link>
        <Link to="/aprendizaje" onClick={toggleMenu}>Aprendizaje</Link>
        <Link to="/contacto" onClick={toggleMenu}>Contacto</Link>
      </nav>
    </header>
  );
};

export default Header;
