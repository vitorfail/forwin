import React, { useState, useEffect } from 'react';
import Barralateral from '../components/Barralateral/Barralateral';
import BarradePesquisa from '../components/BarradePesquisa/BarradePesquisa';
import ResultadoAniver from '../components/ResultadoAniver/ResultadoAniver';
import Blocos from '../components/Blocos/Blocos';
import Loading from '../components/Loading/Loading';
import Coockie from '../components/Coockie/Coockie';
import Axios from '../Axios';
import Tema from '.././Tema'
function Aniversariantes(){ 
    const [poli, setpoliticas] = useState(true);
    const [isLoading, setisLoading] = useState(true);
    useEffect(() => {
        Tema();
        pesquisar_politicas();
    }, [])
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
                setisLoading(false)
            }
        })
    }
    return(isLoading ? <Loading></Loading>: <div>
            <Barralateral ></Barralateral>
            <div className="barra">
                <BarradePesquisa></BarradePesquisa>
                <div className="conteudo">
                    <Blocos></Blocos>
                    <div className="conteudo-2">
                        <ResultadoAniver></ResultadoAniver>
                    </div>
                </div>
            </div>
            <Coockie politicas={poli}></Coockie>
        </div>
    )
}
export default Aniversariantes;