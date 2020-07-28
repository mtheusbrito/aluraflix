import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CadastroVideo from './pages/Cadastro';


//desafio
const Pagina404 =() => (<div>Página 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact component={Home} path="/" />
      <Route component={CadastroVideo} path="/cadastro/video" />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
