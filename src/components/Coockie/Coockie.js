import React from "react"
import './Coockie.css'
import { Link } from "react-router-dom";
import Biscoito from '../.././icones/coockie.png'

function Coockie(){
    
    return(<div className="coockie">
                <div className="politica">
                    <img src={Biscoito} alt="Coockies" />
                    <p>Esse site usa cookies</p>
                </div>
                <div className="texto" >
                    <p>Ao clicar em "Aceitar", concorda com o armazenamento dos dados de seus clientes
                    para a ofertas dos nossos serviços</p>
                </div>
                <div className="opcoes" >
                    <div className="link" >
                        <Link className="l" to='/politicas'>Políticas de Privacidade</Link>
                    </div>
                    <div className="botoes">
                        <button className="recusar" >Recusar</button>
                        <button className="aceitar">Aceitar</button>
                    </div>
                </div>
            </div>)
}
export default Coockie;
