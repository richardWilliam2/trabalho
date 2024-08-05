// src/components/Menu.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/produto">Produto</Link>
          <ul className="submenu">
            <li><Link to="/consulta-produto">Consulta de Produtos</Link></li>
          </ul>
        </li>
        <li>
          <Link to="/estoque">Estoque</Link>
          <ul className="submenu">
            <li><Link to="/consulta-estoque">Consulta de Estoque</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
