
import React, {Component} from 'react';
import Barralateral from '../components/Barralateral/Barralateral';
import BarradePesquisa from '../components/BarradePesquisa/BarradePesquisa';
import Blocos from '../components/Blocos/Blocos';
import ContasdoMes from '../components/ContasdoMes/ContasdoMes';
import ClientesRecentes from '../components/ClientesRecentes/ClientesRecentes';
import RankingPagamentos from '../components/RankingPagamentos/RankingPagamentos';
import RankingVisitas from '../components/RankingVisitas/RankingVisitas';
import Loading from '../components/Loading/Loading';
import Coockie from '../components/Coockie/Coockie';
import Axios from '../Axios';
import './Home.css'


export default class Home extends Component{
    constructor(){
        super()
        this.state = {
            politicasprivacidade:false,
            politicas:true,
            isLoading: true,
            numero_clientes:  'Sem clientes',
            aniversariantes: '0',
            valor_do_mes: 'R$ 0,00',
            lista: '2'
        }
        this.pesquisar_politicas = this.pesquisar_politicas.bind(this)
    }
    componentDidMount(){
       this.pesquisar_politicas()
    }
    pesquisar_politicas(){
        Axios.post('api/home')
        .then(res => {
            if(res.data === '2'){
                
            }
            else{
                this.setState({numero_clientes:res.data.qtd})
                this.setState({aniversariantes:res.data.aniver})
                this.setState({valor_do_mes:res.dat.pagamentosmes})
                if(res.data.politicasprivacidade === true){
                    this.setState({politicas: true})
                }
                if(res.data.politicasprivacidade === false){
                    this.setState({politicas: false})
                }
                this.setState({isLoading: false})
            }
        })
    }
    render(){
        return(this.state.isLoading ? <Loading></Loading>: <div>
                <Barralateral></Barralateral>
                <div className="barra">
                    <BarradePesquisa></BarradePesquisa>
                    <div className="conteudo">
                        <Blocos numero_clientes={this.state.numero_clientes} aniversariantes={this.state.aniversariantes} valor_do_mes={this.state.valor_do_mes}></Blocos>
                        <div className="conteudo-2">
                            <ClientesRecentes lista={this.state.lista} ></ClientesRecentes>
                            <ContasdoMes></ContasdoMes>
                            <RankingPagamentos></RankingPagamentos>
                            <RankingVisitas></RankingVisitas>
                        </div>
                    </div>
                </div>
                <Coockie politicas={this.state.politicas}></Coockie>
            </div>
        )
    }
}