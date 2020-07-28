import React from 'react';
import Logo from '../../assets/img/logo.png';
import './style.css';
import Button from '../Button';
import { Link } from 'react-router-dom'; 
export default function Menu () {
  return (
    <nav className="menu">
    <Link  to="/">
        <img className="logo" src={Logo} alt="Aluraflix" />
      </Link>

      <Button as={Link} to="/cadastro/video">Novo video</Button>
    </nav>
  )
}
