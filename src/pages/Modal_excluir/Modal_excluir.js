import {Component} from 'react';
import axios from 'axios';
import {apis}from '../../caminho_api.mjs';
import Excluir from "../.././icones/exclamacao.png";
import '../Modal_excluir/Modal_excluir.css';
export default class Modal_excluir extends Component{
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
        console.log('passou aqui')
        Axios.post('deletar_cliente.php', {id: this.props.id})
        .then(res => {
            if(res.data == '1'){
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
                    <img src={Excluir} width="50px" height="50px"/>
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