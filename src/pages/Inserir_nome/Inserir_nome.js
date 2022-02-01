import React, {Component, useEffect} from "react";
import axios from "axios";
import {apis} from '../../caminho_api.mjs';

import '../Inserir_nome/Inserir_nome.css';
import { useState } from "react/cjs/react.development";
function Inserir_nome(props){
    const [tema_padrao, setTema_padrao] = useState(false);
    const [tema_azul, setTema_azul] = useState(false);
    const [tema_roxo, setTema_roxo] = useState(false);
    const [tema_laranja, setTema_laranja] = useState(false);
    const [nome, setNome] = useState('');

    function mudar_conta(){
        const Axios = axios.create({
            baseURL:apis
        })
    }
    function troca_de_tema(tema){
        var html = document.querySelector('html');
        html.className = tema;
    }
    return(
        <div className={props.mostrar}>
            <div className='modal'>
                <div className='caixa'>
                    <h1 className='nickname'>{nome}</h1>
                    <input className='mudar-nome' type='text'/>
                    <div className='escolha-tema'>
                        <input type='radio' name='tema'  id='tema-padrao' value='tema-padrao' onClick={(event) => troca_de_tema(event.target.value)}/><h2 className='padrao'>11</h2><p>Tema padrao</p>
                        <input type='radio' name='tema' id='tema-azul' value='tema-azul' onClick={(event) => troca_de_tema(event.target.value)}/><h2 className='azul'>11</h2><p>Tema azul</p>
                        <input type='radio' name='tema' id='tema-roxo' value='tema-roxo' onClick={(event) => troca_de_tema(event.target.value)}/><h2 className='roxo'>11</h2><p>Tema roxo</p>
                        <input type='radio' name='tema' id='tema-laranja'value='tema-laranja' onClick={(event) => troca_de_tema(event.target.value)}/><h2 className='laranja'>11</h2><p>Tema laranja</p>
                    </div>
                    <div className='menu_nome'>
                        <button className='mudar'>Mudar</button>
                        <button className='fechar_nome' onClick={() => props.executar("nameclatura")}>Fechar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Inserir_nome;