import React from "react";
import './InserirNome.css';
import { useState } from "react";
function InserirNome(props){
    const [nome, setNome] = useState('');

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
export default InserirNome;