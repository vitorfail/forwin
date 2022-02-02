
import React, {Component} from 'react';
import Barralateral from './Barralateral/Barralateral';
import BarradePesquisa from './BarradePesquisa/BarradePesquisa';
import Cadastro_cliente from './Cadastro_cliente/Cadastro_cliente';
import Loading from './Loading/Loading';
export default class Cadastro extends Component{
    constructor(){
        super()
        this.state = {
            showModalPopup: false  
        }
    }
    isShowPopup = (status) => {  
        this.setState({ showModalPopup: status });  
    }; 
    render(){
        return(
            <div>
                <Barralateral></Barralateral>
                <div className="barra">
                    <BarradePesquisa></BarradePesquisa>
                    <div className="conteudo">
                        <div className="conteudo-2">
                            <Cadastro_cliente></Cadastro_cliente>
                        </div>
                    </div>
                </div>
                <Loading></Loading>
            </div>
        )
    }
}