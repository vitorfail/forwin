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
    return(props.trigger)? (
        <div className='nameclatura'>
            <div className='modal'>
                <div className='caixa'>
                    <h1 className='nickname'>{nome}</h1>
                    <input className='mudar-nome' type='text'/>
                    <div className='escolha-tema'>
                        <input type='radio' name='tema' checked={true} id='tema-padrao' value='tema-padrao' onClick='troca_de_tema(this.value)'/><h2 className='padrao'>11</h2><p>Tema padrao</p>
                        <input type='radio' name='tema' checked={false} id='tema-azul' value='tema-azul' onClick='troca_de_tema(this.value)'/><h2 className='azul'>11</h2><p>Tema azul</p>
                        <input type='radio' name='tema' checked={false} id='tema-roxo' value='tema-roxo' onClick='troca_de_tema(this.value)'/><h2 className='roxo'>11</h2><p>Tema roxo</p>
                        <input type='radio' name='tema' checked={false} id='tema-laranja'value='tema-laranja' onClick='troca_de_tema(this.value)'/><h2 className='laranja'>11</h2><p>Tema laranja</p>
                    </div>
                    <div className='menu_nome'>
                        <button className='mudar'>Mudar</button>
                        <button className='fechar_nome' onClick={() => props.setTrigger(false)}>Fechar</button>
                    </div>
                </div>
            </div>
        </div>
    ):""
}
export default Inserir_nome;