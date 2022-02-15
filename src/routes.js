import React from "react";
import Cadastro from './pages/Cadastro';
import Pesquisa from './pages/Pesquisa';
import Graficos from './pages/Graficos';
import Financeiro from './pages/Financeiro';
import Pagamentos from'./pages/Pagamentos';
import Login from './pages/Login/Login';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import StoreProvider from './pages/Store/Provider';
import RoutesPrivate from "./pages/Routes/Private";
import { Switch } from "react-router-dom";


const Rout = () => (
  <BrowserRouter>
    <StoreProvider>
      <Switch>
        <Route  exact path="/login" component={Login}/>
        <Route  exact path="/" component={Home}/>
        <RoutesPrivate  exact path="/cadastro" component={Cadastro}/>
        <Route  exact path="/graficos" component={Graficos}/>
        <Route  exact path="/financeiro" component={Financeiro}/>
        <Route  exact path="/pagamentos" component={Pagamentos}/>
        <Route  path="/pesquisa/:nome" component={Pesquisa}/>
      </Switch>
    </StoreProvider>
  </ BrowserRouter>
);

export default Rout;