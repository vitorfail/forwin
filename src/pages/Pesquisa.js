import React from 'react';
import Barralateral from './Barralateral/Barralateral';
import Barra_de_Pesquisa from './Barra_de_pesquisa/Barra_de_pesquisa';
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
                <Barra_de_Pesquisa></Barra_de_Pesquisa>
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