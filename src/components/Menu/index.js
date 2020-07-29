import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './style.css';
import Button from '../Button';

export default function Menu() {
  return (
    <nav className="menu">
      <Link to="/">
        <img className="logo" src={Logo} alt="Aluraflix" />
      </Link>

      <Button as={Link} to="/videos/novo">Novo video</Button>
    </nav>
  );
}
