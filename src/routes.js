import React from "react";
import Cadastro from './pages/Cadastro';
import Pesquisa from './pages/Pesquisa';
import Graficos from './pages/Graficos';
import Financeiro from './pages/Financeiro';
import Pagamentos from'./pages/Pagamentos';
import Login from './pages/Login/Login';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes} from "react-router-dom";



const Rout = () => (
  <BrowserRouter>
      <Routes>
        <Route  exact path="/" element={<Home/>}/>
        <Route  exact path="/cadastro" element={<Cadastro/>}/>
        <Route  exact path="/graficos" element={<Graficos/>}/>
        <Route  exact path="/financeiro" element={<Financeiro/>}/>
        <Route  exact path="/pagamentos" element={<Pagamentos/>}/>
        <Route  exact path="/login" element={<Login/>}/>
        <Route  path="/pesquisa/:nome" element={<Pesquisa/>}/>
      </Routes>
  </ BrowserRouter>
);

export default Rout;