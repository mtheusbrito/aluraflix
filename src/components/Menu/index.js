import React from 'react';
import Logo from '../../assets/img/logo.png';
import './style.css';
import Button from '../Button';

export default function Menu () {
  return (
    <nav className="menu">
      <a href="/">
        <img className="logo" src={Logo} alt="Aluraflix" />
      </a>

      <Button as="a" href="/">Novo video</Button>
    </nav>
  )
}
