import React, {Component} from "react";
import Axios from "../../Axios.js";
import './ClientesRecentes.css';
import {Link} from 'react-router-dom'
export default class ClientesRecentes extends Component{
    constructor(){
        super()
        this.state = {
            lista: []
        }
        this.atualiza_clientes = this.atualiza_clientes.bind(this);
    }
    atualiza_clientes(){
        Axios.post('index.php?url=atualiza/pesquisa', {name: '0', id:'1'}
        ).then(res =>{
            if(res.data.data === 2 || res.data.data === 0){
                let ir = [];
                this.setState({ lista: ir })
               var l = this.state.lista.concat(<div className="cad"><h3 className="t">Sem clientes cadastrados</h3></div>)
                this.setState({lista: l})
            }
            else{
                let ir = [];
                this.setState({ lista: ir })
                for(var i=0; i< res.data.data[0].length ; i++){
                    var list1 = this.state.lista.concat(<div key={(res.data.data[0])[i]+(res.data.data[2])[i]+i} className="cad">
                                                            <h3 className="n">{(res.data.data[0])[i]}</h3> 
                                                            <h3 className="t">{(res.data.data[1])[i]}</h3> 
                                                            <h3 className="s">{(res.data.data[2])[i]}</h3>
                                                        </div>);
                    this.setState({lista: list1})
                }
            }
        })
    }
    componentDidMount(){
        this.atualiza_clientes()
    }
    render(){
        return(
            <div  className="dados-recentes">
                <div className="clientes-recentes">
                    <h2>Clientes recentes</h2>
                    <Link to='/pesquisa/todos' className="ver_todos">Ver todos</Link>
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