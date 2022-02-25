
import React, {Component} from 'react';
import Barralateral from './Barralateral/Barralateral';
import BarradePesquisa from './BarradePesquisa/BarradePesquisa';
import Blocos from './Blocos/Blocos'
import Loading from './Loading/Loading';
import Visitas from './Visitas/Visitas'
export default class VisitaRanking extends Component{
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
                            <Visitas></Visitas>
                        </div>
                    </div>
                </div>
                <Loading></Loading>
            </div>
        )
    }
}