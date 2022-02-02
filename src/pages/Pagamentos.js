
import React, {Component} from 'react';
import Barralateral from './Barralateral/Barralateral';
import BarradePesquisa from './BarradePesquisa/BarradePesquisa';
import Blocos from './Blocos/Blocos'
import PagamentosMensais from './PagamentosMensais/PagamentosMensais';
import Loading from './Loading/Loading';
export default class Pagamentos extends Component{
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
                            <PagamentosMensais></PagamentosMensais>
                        </div>
                    </div>
                </div>
                <Loading></Loading>
            </div>
        )
    }
}