
import React, {Component} from 'react';
import Barralateral from '../components/Barralateral/Barralateral';
import BarradePesquisa from '../components/BarradePesquisa/BarradePesquisa';
import CadastroCliente from '../components/CadastroCliente/CadastroCliente';
import Loading from '../components/Loading/Loading';
import Coockie from '../components/Coockie/Coockie';
export default class Cadastro extends Component{
    constructor(){
        super()
        this.state = {
        }
    }
    render(){
        return(
            <div>
                <Barralateral></Barralateral>
                <div className="barra">
                    <BarradePesquisa></BarradePesquisa>
                    <div className="conteudo">
                        <div className="conteudo-2">
                            <CadastroCliente></CadastroCliente>
                        </div>
                    </div>
                </div>
                <Loading></Loading>
                <Coockie></Coockie>
            </div>
        )
    }
}