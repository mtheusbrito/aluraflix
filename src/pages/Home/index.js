import React from 'react';
import categorias from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Menu from '../../components/Menu';

const Home = () => (
  <div style={{ background: '#141414' }}>
    <Menu />
    <BannerMain
      videoTitle={categorias[0].videos[0].titulo}
      url={categorias[0].videos[0].url}
      videoDescription={categorias[0].videos[0].videoDescription}
    />
    {categorias.map((categoria) => (

      <Carousel ignoreVideoByUrl={categorias[0].videos[0].url} category={categoria} />
    ))}
  </div>
);
export default Home;
