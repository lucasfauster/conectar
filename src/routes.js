import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./pages/Landing/index";
import Pedidos from "./pages/Pedidos/index";
import CadastroLoja from "./pages/CadastroLoja/index";
import CadastroDist from "./pages/CadastroDist/index";
import Area from "./pages/Area/index";
import Radar from "./pages/Radar/index";
import Produtos from "./pages/Produtos/index";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/pedidos" component={Pedidos} />
      <Route path="/cadastroloja" component={CadastroLoja} />
      <Route path="/cadastrodist" component={CadastroDist} />
      <Route path="/area" component={Area} />
      <Route path="/radar" component={Radar} />
      <Route path="/produtos" component={Produtos} />
    </BrowserRouter>
  );
};

export default Routes;
