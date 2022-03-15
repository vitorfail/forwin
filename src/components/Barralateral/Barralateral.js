import Planilha from '../../icones/planilha.png';
import Instituicao from '../../icones/instituicao.png';
import DRE from '../../icones/reading-book _1_.png';
import Config from '../../icones/settings.png';
import Saida from '../../icones/logout.png';
import React from "react";
import '../Barralateral/Barralateral.css'
import {Link, useHistory} from 'react-router-dom';
export default function Barralateral(){
    const history = useHistory();
    function logout(){
        localStorage.removeItem('token_jwt');
        history.push("/login")
    }
    return(
        <div className="barralateral">
            <div className="nome_titulo">
                <Link  className='link' to='/'>Forwin</Link>
            </div>
            <ul>
                <Link className="link" to='/graficos'><img src={Planilha} alt='Planilha'/>&nbsp;<span>Planilha</span></Link>
                <Link  className="link" to='/cadastro' ><img src={Instituicao} alt='Instituição'/>&nbsp;<span>Cadastro</span></Link>
                <Link className='link' to='/financeiro' ><img src={DRE} alt='DRE'/>&nbsp;<span>DRE</span></Link>
                <Link className='link' to='/ajuda' ><img src={Config} alt='Config'/>&nbsp;<span>Ajuda</span></Link>
                <div className='link' onClick={() => logout()} ><img src={Saida} alt='Saida'/>&nbsp;<span>Sair</span></div>
            </ul>
        </div>
    )
}
