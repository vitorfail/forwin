import {Component} from 'react';
import axios from 'axios';
import {apis}from '../../caminho_api.mjs';
import Excluir from "../.././icones/exclamacao.png";
import './ModalExcluir.css';
export default class ModalExcluir extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
        this.excluir_cadastro = this.excluir_cadastro.bind(this);    
    }
    excluir_cadastro(){
        const Axios = axios.create({
            baseURL:apis
        })
        Axios.post('index.php?url=deletarcliente/pesquisa', {id: this.props.id},{headers: {
            "Authorization": "Bearer "+ localStorage.getItem('token_jwt')}})
        .then(res => {
            if(res.data.data === '1'){
                this.props.executar("modal-excluir")
            }
            else{
                alert("Não foi possível excluir esse cliente. Verifique sua internet e tente novamente")
            }
        })
        .catch( error => {
            alert("Não foi possível excluir esse cliente. Verifique sua internet e tente novamente")
        })
    }
    render(){
        return(
            <div className={this.props.exibir}>
                <div className="modal">
                    <img src={Excluir} width="50px" height="50px" alt="Excluir"/>
                    <h3>Tem certeza que quer excluir esse cliente? Ele será excluido permanentemente do banco de dados</h3>
                    <div className="botoes">
                        <div className="botao-sim">
                            <button id='confirmar-exclusao' onClick={(event) => this.excluir_cadastro()} className="sim" name="sim" value="Sim">Sim</button>
                        </div>
                        <div class="botao-nao">
                            <button className="nao" name="nao" value="Não" onClick={(event) => this.props.executar("modal-excluir")}>Não</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}