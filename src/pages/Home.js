
import React, {Component} from 'react';
import Barralateral from '../components/Barralateral/Barralateral';
import BarradePesquisa from '../components/BarradePesquisa/BarradePesquisa';
import Blocos from '../components/Blocos/Blocos';
import ContasdoMes from '../components/ContasdoMes/ContasdoMes';
import ClientesRecentes from '../components/ClientesRecentes/ClientesRecentes';
import RankingPagamentos from '../components/RankingPagamentos/RankingPagamentos';
import RankingVisitas from '../components/RankingVisitas/RankingVisitas';
import Loading from '../components/Loading/Loading';
import './Home.css'
export default class Home extends Component{
    render(){
        return(
            <div>
                <Barralateral></Barralateral>
                <div className="barra">
                    <BarradePesquisa></BarradePesquisa>
                    <div className="conteudo">
                        <Blocos></Blocos>
                        <div className="conteudo-2">
                            <ClientesRecentes></ClientesRecentes>
                            <ContasdoMes></ContasdoMes>
                            <RankingPagamentos></RankingPagamentos>
                            <RankingVisitas></RankingVisitas>
                        </div>
                    </div>
                </div>
                <Loading></Loading>
            </div>
        )
    }
}