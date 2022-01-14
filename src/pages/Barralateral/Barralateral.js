import Planilha from '../../icones/planilha.png';
import Instituicao from '../../icones/instituicao.png';
import DRE from '../../icones/reading-book _1_.png';
import Config from '../../icones/settings.png';
import Saida from '../../icones/logout.png';
import React, {Component} from "react";
import '../Barralateral/Barralateral.css'
import {Link} from 'react-router-dom';
export default class Barralateral extends Component{
    render(){
        return(
            <div className="barralateral">
                <div className="nome_titulo">
                    <Link  className='link' to='/'>Forwin</Link>
                </div>
                <ul>
                    <Link className="link" to='/graficos'><img src={Planilha}/>&nbsp;<span>Planilha</span></Link>
                    <Link  className="link" to='/cadastro' ><img src={Instituicao} />&nbsp;<span>Cadastro</span></Link>
                    <Link className='link' to='/financeiro' ><img src={DRE}/>&nbsp;<span>DRE</span></Link>
                    <Link className='link' to='/cadastro' ><img src={Config}/>&nbsp;<span>Ajuda</span></Link>
                    <Link className='link' to='/cadastro' ><img src={Saida}/>&nbsp;<span>Sair</span></Link>
                </ul>
            </div>
        )
    }
}
