
import React, {Component} from 'react';
import Barralateral from '../components/Barralateral/Barralateral';
import BarradePesquisa from '../components/BarradePesquisa/BarradePesquisa';
import Blocos from '../components/Blocos/Blocos'
import DRE from '../components/DRE/DRE';
import Loading from '../components/Loading/Loading';
import Coockie from '../components/Coockie/Coockie';
export default class Financeiro extends Component{
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
                            <DRE></DRE>
                        </div>
                    </div>
                </div>
                <Loading></Loading>
                <Coockie></Coockie>
            </div>
        )
    }
}