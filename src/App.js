import React from 'react';

import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
// import Carousel from './components/Carousel';
import Menu from './components/Menu';

class App extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <BannerMain
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription={
            dadosIniciais.categorias[0].videos[0].videoDescription
          }
        />

      </div>
    );
  }
}

export default App;
