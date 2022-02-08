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


const Rout = () => (
  <BrowserRouter>
    <StoreProvider>
      <Routes>
        <Route  exact path="/login" element={<Login/>}/>
        <Route  exact path="/" element={<Home/>}/>
        <Route  exact path="/cadastro" element={<RoutesPrivate/>}>
          <Route  exact path="/cadastro" element={<Cadastro/>}/>
        </Route>
        <Route  exact path="/graficos" element={<Graficos/>}/>
        <Route  exact path="/financeiro" element={<Financeiro/>}/>
        <Route  exact path="/pagamentos" element={<Pagamentos/>}/>
        <Route  path="/pesquisa/:nome" element={<Pesquisa/>}/>
      </Routes>
    </StoreProvider>
  </ BrowserRouter>
);

export default Rout;