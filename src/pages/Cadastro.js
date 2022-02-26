
import React, {Component} from 'react';
import Barralateral from '../components/Barralateral/Barralateral';
import BarradePesquisa from '../components/BarradePesquisa/BarradePesquisa';
import CadastroCliente from '../components/CadastroCliente/CadastroCliente';
import Loading from '../components/Loading/Loading';
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
                            <CadastroCliente></CadastroCliente>
                        </div>
                    </div>
                </div>
                <Loading></Loading>
            </div>
        )
    }
}