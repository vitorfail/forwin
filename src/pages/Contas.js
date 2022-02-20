
import React, {Component} from 'react';
import Barralateral from './Barralateral/Barralateral';
import BarradePesquisa from './BarradePesquisa/BarradePesquisa';
import Blocos from './Blocos/Blocos'
import ContasTotais from './ContasTotais/ContasTotais';
import Loading from './Loading/Loading';
export default class Contas extends Component{
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
                        <Blocos></Blocos>
                        <div className="conteudo-2">
                            <ContasTotais></ContasTotais>
                        </div>
                    </div>
                </div>
                <Loading></Loading>
            </div>
        )
    }
}