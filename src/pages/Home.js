
import React, {Component} from 'react';
import Barralateral from './Barralateral/Barralateral';
import BarradePesquisa from './BarradePesquisa/BarradePesquisa';
import Blocos from './Blocos/Blocos';
import ContasdoMes from './ContasdoMes/ContasdoMes';
import ClientesRecentes from './ClientesRecentes/ClientesRecentes';
import RankingPagamentos from './RankingPagamentos/RankingPagamentos';
import RankingVisitas from './RankingVisitas/RankingVisitas';
import Loading from './Loading/Loading';
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