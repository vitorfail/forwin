
import React, {Component} from 'react';
import Barralateral from '../components/Barralateral/Barralateral';
import BarradePesquisa from '../components/BarradePesquisa/BarradePesquisa';
import Planilhas from '../components/Planilhas/Planilhas';
import Loading from '../components/Loading/Loading';
import Blocos from '../components/Blocos/Blocos'
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