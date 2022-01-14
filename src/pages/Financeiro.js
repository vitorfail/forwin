
import React, {Component} from 'react';
import Barralateral from './Barralateral/Barralateral';
import Barra_de_Pesquisa from './Barra_de_pesquisa/Barra_de_pesquisa';
import Blocos from './Blocos/Blocos'
import DRE from './DRE/DRE';
import Loading from './Loading/Loading';
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
                    <Barra_de_Pesquisa></Barra_de_Pesquisa>
                    <div className="conteudo">
                        <Blocos></Blocos>
                        <div className="conteudo-2">
                            <DRE></DRE>
                        </div>
                    </div>
                </div>
                <Loading></Loading>
            </div>
        )
    }
}