import React from "react";
import Cadastro from './pages/Cadastro';
import Pesquisa from './pages/Pesquisa';
import Graficos from './pages/Graficos';
import Financeiro from './pages/Financeiro';
import Pagamentos from'./pages/Pagamentos';
import Contas from './pages/Contas';
import Login from './pages/Login/Login';
import Home from './pages/Home';
import VisitaRanking from './pages/VisitaRanking';
import PagRanking from './pages/PagRanking'
import { BrowserRouter, Route, Switch} from "react-router-dom";
import StoreProvider from './components/Store/Provider';
import RoutesPrivate from "./components/Routes/Private";

const Rout = () => (
  <BrowserRouter>
    <StoreProvider>
      <Switch>
        <Route  exact path="/login" component={Login}/>
        <RoutesPrivate  exact path="/" component={Home}/>
        <RoutesPrivate  exact path="/cadastro" component={Cadastro}/>
        <RoutesPrivate  exact path="/graficos" component={Graficos}/>
        <RoutesPrivate  exact path="/financeiro" component={Financeiro}/>
        <RoutesPrivate  exact path="/pagamentos" component={Pagamentos}/>
        <RoutesPrivate  exact path="/contas" component={Contas}/>
        <RoutesPrivate  exact path="/rankingsv" component={VisitaRanking}/>
        <RoutesPrivate  exact path="/rankingsp" component={PagRanking}/>
        <RoutesPrivate  path="/pesquisa/:nome" component={Pesquisa}/>
      </Switch>
    </StoreProvider>
  </ BrowserRouter>
);

export default Rout;