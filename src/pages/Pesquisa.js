import React, { useState, useEffect } from 'react';
import Barralateral from '../components/Barralateral/Barralateral';
import BarradePesquisa from '../components/BarradePesquisa/BarradePesquisa';
import ResultadoPesquisa from '../components/ResultadoPesquisa/ResultadoPesquisa';
import Loading from '../components/Loading/Loading';
import Blocos from '../components/Blocos/Blocos';
import { useParams } from 'react-router-dom';
import Coockie from '../components/Coockie/Coockie';
import Axios from '../Axios';
function Pesquisa(props){ 
    const {nome} = useParams();
    const [poli, setpoliticas] = useState(false);
    useEffect(() => 
        pesquisar_politicas()
    )
    function pesquisar_politicas(){
        Axios.post('index.php?url=politicasprivacidade/pesquisa')
        .then(res => {
            if(res.data.data === '2'){
                
            }
            else{
                if(res.data.data === true){
                    setpoliticas(true)
                }
                if(res.data.data === false){
                    setpoliticas(false)
                }
            }
        })
    }
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
            <Coockie politicas={poli}></Coockie>
        </div>
    )
}
export default Pesquisa;