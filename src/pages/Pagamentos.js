
import React, {Component} from 'react';
import Barralateral from '../components/Barralateral/Barralateral';
import BarradePesquisa from '../components/BarradePesquisa/BarradePesquisa';
import Blocos from '../components/Blocos/Blocos'
import PagamentosMensais from '../components/PagamentosMensais/PagamentosMensais';
import Loading from '../components/Loading/Loading';
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