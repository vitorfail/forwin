import React, {Component} from "react";
import axios from "axios";
import { apis } from "../../caminho_api.mjs";
import '../Resultado_pesquisa/Resultado_pesquisa.css'
import Zap from "../../icones/whats_branco.png";
import Modal_pagamentos from "../Modal_pagamentos/Modal_pagamentos.js";
import Modal_editar from "../Modal_editar/Modal_editar.js";
import Modal_excluir from "../Modal_excluir/Modal_excluir.js";
export default class Resultado_pesquisa extends Component{
    constructor(props){
        super(props)
        this.state = {
            restultado: [],
            numero: 0,
            pagamentos_mostrar: "modal-pag",
            editar_mostrar: "modal-editar",
            excluir_mostrar: "modal-excluir",
            cadastro: '0',
            nome: ''

        }
        this.resultado = this.resultado.bind(this);
        this.abrir_pagamentos = this.abrir_pagamentos.bind(this)
        this.abrir_editar = this.abrir_editar.bind(this)
        this.abrir_excluir = this.abrir_excluir.bind(this)
    }
    abrir_pagamentos(id, name){
        this.setState({pagamentos_mostrar: "modal-pag mostrar"})
        this.setState({cadastro: id})
        this.setState({nome: name})
    }
    show_pag(visivel){
        this.setState({ pagamentos_mostrar: visivel })
    }
    show_editar(visivel){
        this.setState({ editar_mostrar: visivel })
    }
    abrir_editar(id){
        this.setState({cadastro: id})
        this.setState({editar_mostrar: "modal-editar mostrar"})
    }
    abrir_excluir(id){
        this.setState({cadastro: id})
        this.setState({excluir_mostrar: "modal-excluir mostrar"})
    }
    show_excluir(visivel){
        this.setState({excluir_mostrar: visivel})
    }
    falar_whats(telefone){

    }
    resultado(){
        const Axios = axios.create({
            baseURL: apis
        })
        Axios.post("pesquisa.php", {nome: this.props.nomepesquisa})
        .then(res => {
            if(res.data == '1' || res.data == '2'){
                this.setState({numero: 0})
            }
            else{
                this.setState({numero: res.data[0].length})
                var ir  = []
                this.setState({resultado: ir})
                for(var i=0; i< res.data[0].length ; i++){
                    var ident = (res.data[0])[i]
                    if((res.data[2])[i].length> 31){
                        this.setState({resultado: this.state.resultado.concat(<div className='enc'> 
                                                                    <h3 className='n'>{(res.data[1])[i]}</h3>
                                                                    <div className='email_caixa'> 
                                                                        <h3 id='e'>{(res.data[2])[i].substr(0, 29)}</h3> 
                                                                        <h3  id='e'>{(res.data[2])[i].substr(29, (res.data[2])[i].length-29)} </h3> 
                                                                    </div> 
                                                                    <h3 className='tel'>{(res.data[3])[i]}</h3> 
                                                                    <h3 className='sex'>{(res.data[4])[i]}</h3> 
                                                                    <div className='quadro_botoes'> 
                                                                        <button className='pag' id={ident} name={(res.data[1])[i]} onClick={(event) => this.abrir_pagamentos(event.target.id, event.target.name)}>Pagamentos</button> 
                                                                        <button id={(res.data[0])[i]} onClick={(event) => this.abrir_editar(event.target.id)} className='editar'>Editar</button> 
                                                                        <button id={(res.data[0])[i]} className='excluir' onClick={(event) => this.abrir_excluir(event.target.id)}>Excluir</button> 
                                                                        <button className='falar' onClick={(event) => this.falar_whats((res.data[3])[i])}>Falar<img className='zap' src={Zap}/></button>
                                                                    </div></div>)})
                    }
                    else{
                        this.setState({resultado: this.state.resultado.concat(<div className='enc'> 
                                                                    <h3 className='n'>{(res.data[1])[i]}</h3> 
                                                                    <h3 id='e'>{(res.data[2])[i]}</h3> 
                                                                    <h3 className='tel'>{(res.data[3])[i]}</h3> 
                                                                    <h3 className='sex'>{(res.data[4])[i]}</h3> 
                                                                    <div className='quadro_botoes'>
                                                                        <button className='pag' id={ident} name={(res.data[1])[i]} onClick={(event) => this.abrir_pagamentos(event.target.id, event.target.name)}>Pagamentos</button> 
                                                                        <button id={(res.data[0])[i]} onClick={(event) => this.abrir_editar(event.target.id)} className='editar'>Editar</button> 
                                                                        <button id={(res.data[0])[i]} className='excluir' onClick={(event) => this.abrir_excluir(event.target.id)}>Excluir</button> 
                                                                        <button className='falar' onClick={(event) => this.falar_whats((res.data[0])[i])}>Falar<img class='zap' src={Zap}/></button>
                                                                    </div>
                                                                </div>)
                        })
                        
                    }

                }
            }
        })
        .catch(error =>{

        })
    }  
    componentWillMount(){
        this.resultado();
    }
    render(){
        return(
            <div className="clientes_achados">
                <div className="titulo_pesquisa">
                    <h1 id="list">{this.state.numero} Clientes Encontrados</h1>
                </div>
                <div className="encontrados">
                    {this.state.resultado}
                </div>
                <Modal_pagamentos id={this.state.cadastro} nome={this.state.nome} exibir={this.state.pagamentos_mostrar} executar={this.show_pag.bind(this)}></Modal_pagamentos>
                <Modal_editar id={this.state.cadastro} exibir={this.state.editar_mostrar} executar={this.show_editar.bind(this)} ></Modal_editar>
                <Modal_excluir executar={this.show_excluir.bind(this)} id={this.state.cadastro} exibir={this.state.excluir_mostrar}></Modal_excluir>
            </div>
            
        )
    }
}