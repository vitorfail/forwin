import React,{Component} from "react";
import axios from "axios";
import '../Modal_editar/Modal_editar.css'
import {apis} from '../../caminho_api.mjs'
export default class Modal_editar extends Component{
    constructor(props){
        super(props)
        this.state = {
            preencha: 'preencha',


            nome:"",
            data:'',
            cpf:'',
            estado_civil:'',
            genero:'',
            uf:'',
            endereco:'',
            cidade:'',
            telefone:'',
            email:'',
            notific:''
        }
    }
    pesquisar_cadastro(ident){
        const Axios = axios.create({
            baseURL: apis
        })
        Axios.post('pesquisa-info.php', {id: ident})
        .then(res => {
            this.setState({nome: res.data[1]})
        })
        .catch(error => {
            alert("Não foi possível pesquisar o cadastro desse cliente. Por favor tente denovo mais tarde")
        })
    }
    componentWillReceiveProps(props){
        this.pesquisar_cadastro(props.id)
    }
    render(){
        return(
            <div className={this.props.exibir}>
                <div className="modal">
                    <p className={this.state.preencha}>Informações</p>
                    <div className="info-cliente">
                        <div className= "bloco">
                            <h3>Nome</h3>
                            <input type="tex" value={this.state.nome} onChange={(event) => this.setState({nome: event.target.value})} className= "info-nome" placeholder=""/>
                        </div>
                        <div className= "bloco">
                            <h3>Data de Nascimento</h3>
                            <input type="date" value={this.state.data} onChange={(event) => this.setState({data: event.target.value})}class = "info-data"/>
                        </div>
                        <div className= "bloco">
                            <h3>CPF</h3>
                            <input type="tex" value={this.state.cpf} placeholder="000.000.000-00" onChange={(event) => this.setState({cpf: event.target.value})} className= "info-cpf"/>
                        </div>
                        <div className= "bloco">
                            <h3>Estado Civil</h3>
                            <select value={this.state.estado_civil} onChange={(event) => this.setState({estado_civil: event.target.value})} className="info-estado-civil">
                                <option value="solteiro">Solteiro(a)</option>
                                <option value="casado">Casado(a)</option>
                                <option value="viuvo">Viúvo(a)</option>
                                <option value="divorciado">Divorciado(a)</option>
                            </select>
                        </div>
                        <div className= "bloco">
                            <h3>Gênero</h3>
                            <select value={this.state.genero} onChange={(event) => this.setState({genero: event.target.value})} className="info-sex">    
                                <option value="m">Masculino</option>
                                <option value="f">Feminino</option>
                                <option value="o">Outros</option>
                            </select>
                        </div>
                        <div className= "bloco">
                            <h3>UF</h3>
                            <select value={this.state.uf} onChange={(event) => this.setState({uf: event.target.value})} className="info-uf">
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
                            <input type="tex" value={this.state.endereco} onChange={(event) => this.setState({endereco: event.target.value})} placeholder="" className= "info-end"/>
                        </div>
                        <div className= "bloco">
                            <h3>Cidade</h3>
                            <input type="tex" value={this.state.cidade} onChange={(event) => this.setState({cidade: event.target.value})} placeholder="" className= "info-cidade"/>
                        </div>
                        <div className= "bloco">
                            <h3>Telefone</h3>
                            <input type="tex" placeholder="" value={this.state.telefone} onChange={(event) => this.setState({telefone: event.target.value})} className= "info-tel"/>
                        </div>
                        <div className= "bloco">
                            <h3>Email</h3>
                            <input type="tex" placeholder="" value={this.state.email} onChange={(event) => this.setState({email: event.target.value})} className= "info-email"/>
                        </div>
                        <div className= "bloco">
                            <h3>Notificações</h3>
                            <textarea type="tex" placeholder="" value={this.state.notific} onChange={(event) => this.setState({notific: event.target.value})} className = "info-not"></textarea>
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