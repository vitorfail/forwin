
import React, {Component} from 'react';
import Barralateral from './Barralateral/Barralateral';
import Barra_de_Pesquisa from './Barra_de_pesquisa/Barra_de_pesquisa';
import Planilhas from './Planilhas/Planilhas';
import Loading from './Loading/Loading';
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
                    <Barra_de_Pesquisa></Barra_de_Pesquisa>
                    <div className="conteudo">
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