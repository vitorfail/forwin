import React, {Component} from "react";
import { apis } from "../../caminho_api.mjs";
import axios from "axios";
import rank from '../../icones/rank.png';
import './RankingPagamentos.css';
export default class RankingPagamentos extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            rank: []
        }
        this.ranking_1 = this.ranking_1.bind(this);
    }
    componentDidMount(){
        window.addEventListener('load', this.ranking_1)
    }
    componentWillMount(){
        this.ranking_1()
    }
    ranking_1(){
        const Axios = axios.create({
            baseURL: apis
        })
        Axios.post('index.php?url=rankings/pesquisa', { passe: 'pagamento'}, {headers: {"Authorization": "Bearer "+ localStorage.getItem('token_jwt')}})
        .then(res => {
            if(res.data.data === '1' || res.data.data === '2'){
                let lista = this.state.rank.concat(<div className="cad">
                                                        <h3 className="n">Sem clientes</h3>
                                                    </div>);
                this.setState({rank: lista});
            }
            else{
                var lista = this.state.rank.concat(<div className="cad">
                                                        <h3 className="n">{(res.data.data[0])[0]}</h3> 
                                                        <h3 className="t">R$ {(res.data.data[1])[0]}</h3>
                                                    </div>);
                this.setState({rank: lista});
                var lista1 = this.state.rank.concat(<div className="cad">
                                                        <h3 className="n">{(res.data.data[0])[1]}</h3>
                                                        <h3 className="t">R$ {(res.data.data[1])[1]}</h3>
                                                    </div>);
                this.setState({rank: lista1});
                var lista2 = this.state.rank.concat(<div className="cad">
                                                        <h3 className="n">{(res.data.data[0])[2]}</h3>
                                                        <h3 className="t">R$ {(res.data.data[1])[2]}</h3>
                                                    </div>);
                this.setState({rank: lista2});
                var lista3 = this.state.rank.concat(<div className="cad">
                                                        <h3 className="n">{(res.data.data[0])[3]}</h3>
                                                        <h3 className="t">R$ {(res.data.data[1])[3]}</h3>
                                                    </div>);
                this.setState({rank: lista3});
                var lista4 = this.state.rank.concat(<div className="cad">
                                                        <h3 className="n">{(res.data.data[0])[4]}</h3> 
                                                        <h3 className="t">R$ {(res.data.data[1])[4]}</h3>
                                                    </div>);
                this.setState({rank: lista4});
            }
        })
        .catch( error =>{
            var lista = this.state.rank.concat(<div className="cad">
                                                    <h3 className="n">Sem clientes</h3>
                                                </div>);
            this.setState({rank: lista});
        })
    }
    render(){
        return(
            <div className="ranking r1">
                <div className="clientes-recentes">
                    <h2>Ranking de pagamento</h2>
                    <img src={rank} alt="Ranking"/>
                    <button className="ver_todos">Ver todos</button>
                </div>
                <div className="titulos_tabela">
                    <h3>Nomes</h3>
                    <h3>Valor</h3>
                </div>
                <div id='ranking_pagamentos'>
                    {this.state.rank}
                </div>
            </div>
        )
    }
}