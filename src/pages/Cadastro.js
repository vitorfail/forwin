
import React, {Component} from 'react';
import Barralateral from './Barralateral/Barralateral';
import Barra_de_Pesquisa from './Barra_de_pesquisa/Barra_de_pesquisa';
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
                    <Barra_de_Pesquisa></Barra_de_Pesquisa>
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