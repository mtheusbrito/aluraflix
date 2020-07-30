import React from 'react';
import { Link } from 'react-router-dom';
import Template from '../../../components/Template';

const NovoVideo = () => (
  <Template>
    <h1>Novo video</h1>

    <Link to="/categorias/novo"> Categorias</Link>

  </Template>
);

export default NovoVideo;
