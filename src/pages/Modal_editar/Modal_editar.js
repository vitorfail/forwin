import React,{Component} from "react";
import axios from "axios";
import '../Modal_editar/Modal_editar.css'

export default class Modal_editar extends Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render(){
        return(
            <div className={this.props.exibir}>
                <div className="modal">
                    <p className="preencha">Informações</p>
                    <div className="info-cliente">
                        <div className= "bloco">
                            <h3>Nome</h3>
                            <input type="tex" className= "info-nome" placeholder=""/>
                        </div>
                        <div className= "bloco">
                            <h3>Data de Nascimento</h3>
                            <input type="date" class = "info-data"/>
                        </div>
                        <div className= "bloco">
                            <h3>CPF</h3>
                            <input type="tex" placeholder="" className= "info-cpf"/>
                        </div>
                        <div className= "bloco">
                            <h3>Estado Civil</h3>
                            <select className="info-estado-civil">
                                <option value="solteiro">Solteiro(a)</option>
                                <option value="casado">Casado(a)</option>
                                <option value="viuvo">Viúvo(a)</option>
                                <option value="divorciado">Divorciado(a)</option>
                            </select>
                        </div>
                        <div className= "bloco">
                            <h3>Gênero</h3>
                            <select className="info-sex">    
                                <option value="m">Masculino</option>
                                <option value="f">Feminino</option>
                                <option value="o">Outros</option>
                            </select>
                        </div>
                        <div className= "bloco">
                            <h3>UF</h3>
                            <select className="info-uf">
                                <option value="ac">AC</option>
                                <option value="al">AL</option>
                                <option value="am">AM</option>
                                <option value="ap">AP</option>
                                <option value="ba">BA</option>
                                <option value="ce">CE</option>
                                <option value="df">DF</option>
                                <option value="es">ES</option>
                                <option value="go">GO</option>
                                <option value="ma">MA</option>
                                <option value="mg">MG</option>
                                <option value="ms">MS</option>
                                <option value="mt">MT</option>
                                <option value="pa">PA</option>
                                <option value="pb">PB</option>
                                <option value="pe">PE</option>
                                <option value="pi">PI</option>
                                <option value="pr">PR</option>
                                <option value="rj">RJ</option>
                                <option value="rn">RN</option>
                                <option value="ro">RO</option>
                                <option value="rr">RR</option>
                                <option value="rs">RS</option>
                                <option value="sc">SC</option>
                                <option value="se">SE</option>
                                <option value="sp">SP</option>
                                <option value="to">TO</option>
                            </select>
                        </div>
                        <div className= "bloco">
                            <h3>Endereço</h3>
                            <input type="tex" placeholder="" className= "info-end"/>
                        </div>
                        <div className= "bloco">
                            <h3>Cidade</h3>
                            <input type="tex" placeholder="" className= "info-cidade"/>
                        </div>
                        <div className= "bloco">
                            <h3>telefone</h3>
                            <input type="tex" placeholder="" className= "info-tel"/>
                        </div>
                        <div className= "bloco">
                            <h3>Email</h3>
                            <input type="tex" placeholder="" className= "info-email"/>
                        </div>
                        <div className= "bloco">
                            <h3>Notificações</h3>
                            <textarea type="tex" placeholder="" className = "info-not"></textarea>
                        </div>
                    </div>
                    <div className="botoes">
                        <div className="botao-salvar">
                            <button className="add-info" name="sim" value="Sim" onclick='inserir_registo()'>Salvar</button>
                        </div>
                        <div className="botao-fechar">
                            <button className="nao" name="nao" onClick={(event) => this.props.executar("modal-editar")} value="Não" >Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}