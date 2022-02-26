import React from 'react';
import Barralateral from '../components/Barralateral/Barralateral';
import BarradePesquisa from '../components/BarradePesquisa/BarradePesquisa';
import ResultadoPesquisa from '../components/ResultadoPesquisa/ResultadoPesquisa';
import Loading from '../components/Loading/Loading';
import Blocos from '../components/Blocos/Blocos';
import { useParams } from 'react-router-dom';
function Pesquisa(props){ 
    const {nome} = useParams();
    return(
        <div>
            <Barralateral></Barralateral>
            <div className="barra">
                <BarradePesquisa></BarradePesquisa>
                <div className="conteudo">
                    <Blocos></Blocos>
                    <div className="conteudo-2">
                        <ResultadoPesquisa nomepesquisa={nome}></ResultadoPesquisa>
                    </div>
                </div>
            </div>
            <Loading></Loading>
        </div>
    )
}
export default Pesquisa;