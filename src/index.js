import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Cadastro from './pages/Cadastro';
import Pesquisa from './pages/Pesquisa';
import Graficos from './pages/Graficos';
import Financeiro from './pages/Financeiro';
import reportWebVitals from './reportWebVitals';
import {Route, Routes, BrowserRouter} from 'react-router-dom' 

ReactDOM.render(
  <BrowserRouter>
      <Routes>
        <Route  exact path="/" element={<App/>}/>
        <Route  exact path="/cadastro" element={<Cadastro/>}/>
        <Route  exact path="/graficos" element={<Graficos/>}/>
        <Route  exact path="/financeiro" element={<Financeiro/>}/>
        <Route  path="/pesquisa/:nome" element={<Pesquisa/>}/>
      </Routes>
  </ BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
