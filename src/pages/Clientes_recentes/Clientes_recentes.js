import React, {Component} from "react";
import axios from "axios";
import {apis} from "../../caminho_api.mjs";
import '../Clientes_recentes/Clientes_recentes.css';
export default class Clientes_recentes extends Component{
    constructor(){
        super()
        this.state = {
            lista: []
        }
        this.atualiza_clientes = this.atualiza_clientes.bind(this);
    }
    componentDidMount(){
        window.addEventListener('load', this.atualiza_clientes)
    }
    atualiza_clientes(){
        const Axios = axios.create({
            baseURL: apis
        })
        Axios.get('atualiza.php').then(res =>{
            if(res.data == 2 || res.data == 0){
                var ir = [];
                this.setState({ lista: ir })
               var l = this.state.lista.concat(<div className="cad"><h3 className="t">Sem clientes cadastrados</h3></div>)
                this.setState({lista: l})
            }
            else{
                var ir = [];
                this.setState({ lista: ir })
                for(var i=0; i< res.data[0].length ; i++){
                    var list1 = this.state.lista.concat(<div className="cad">
                                                            <h3 className="n">{(res.data[0])[i]}</h3> 
                                                            <h3 className="t">{(res.data[1])[i]}</h3> 
                                                            <h3 className="s">{(res.data[2])[i]}</h3>
                                                        </div>);
                    this.setState({lista: list1})
                }
            }
        })
    }
    componentWillMount(){
        this.atualiza_clientes()
    }
    render(){
        return(
            <div  className="dados-recentes">
                <div className="clientes-recentes">
                    <h2>Clientes recentes</h2>
                    <button className="ver_todos">Ver todos</button>
                </div>
                <div className="titulos_tabela">
                    <h3>Nomes</h3>
                    <h3>Telefones</h3>
                    <h3>Sexo</h3>
                </div>
                <div className="cadastros_recentes">
                    {this.state.lista}
                </div>
            </div>
        )
    }
} 