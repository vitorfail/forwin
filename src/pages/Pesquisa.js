import React from 'react';
import Barralateral from './Barralateral/Barralateral';
import BarradePesquisa from './BarradePesquisa/BarradePesquisa';
import Resultado_pesquisa from './Resultado_pesquisa/Resultado_pesquisa';
import Loading from './Loading/Loading';
import Blocos from './Blocos/Blocos';
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
                        <Resultado_pesquisa nomepesquisa={nome}></Resultado_pesquisa>
                    </div>
                </div>
            </div>
            <Loading></Loading>
        </div>
    )
}
export default Pesquisa;