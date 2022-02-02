
import React, {Component} from 'react';
import Barralateral from './Barralateral/Barralateral';
import BarradePesquisa from './BarradePesquisa/BarradePesquisa';
import Planilhas from './Planilhas/Planilhas';
import Loading from './Loading/Loading';
import Blocos from './Blocos/Blocos'
export default class Graficos extends Component{
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
                            <Planilhas></Planilhas>
                        </div>
                    </div>
                </div>
                <Loading></Loading>
            </div>
        )
    }
}