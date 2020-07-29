import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NovoVideo from './pages/Videos/Novo';
import NovaCategoria from './pages/Categorias/Novo';

// desafio
const Pagina404 = () => (<div>Página 404</div>);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact component={Home} path="/" />
      <Route component={NovoVideo} path="/videos/novo" />
      <Route component={NovaCategoria} path="/categorias/novo" />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
