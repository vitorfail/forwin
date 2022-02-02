
import React, {Component} from 'react';
import Barralateral from './Barralateral/Barralateral';
import BarradePesquisa from './BarradePesquisa/BarradePesquisa';
import Blocos from './Blocos/Blocos'
import Pagamentos_mensais from './Pagamentos_mensais/Pagamentos_mensais';
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
                            <Pagamentos_mensais></Pagamentos_mensais>
                        </div>
                    </div>
                </div>
                <Loading></Loading>
            </div>
        )
    }
}