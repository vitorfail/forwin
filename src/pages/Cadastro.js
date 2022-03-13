
import React, {Component} from 'react';
import Barralateral from '../components/Barralateral/Barralateral';
import BarradePesquisa from '../components/BarradePesquisa/BarradePesquisa';
import CadastroCliente from '../components/CadastroCliente/CadastroCliente';
import Loading from '../components/Loading/Loading';
import Axios from '../Axios';
import Coockie from '../components/Coockie/Coockie';
import Tema from '.././Tema'
export default class Cadastro extends Component{
    constructor(){
        super()
        this.state = {
            politicas:true
        }
        this.pesquisar_politicas = this.pesquisar_politicas.bind(this)
    }
    componentDidMount(){
        Tema()
       this.pesquisar_politicas()
    }
    pesquisar_politicas(){
        Axios.post('index.php?url=politicasprivacidade/pesquisa')
        .then(res => {
            if(res.data.data === '2'){
                
            }
            else{
                if(res.data.data === true){
                    this.setState({politicas: true})
                }
                if(res.data.data === false){
                    this.setState({politicas: false})
                }
            }
        })
    }
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
                <Coockie politicas={this.state.politicas}></Coockie>
            </div>
        )
    }
}