import React from "react";
import './InserirNome.css';
function InserirNome(props){
    

    function troca_de_tema(tema){
        var html = document.querySelector('html');
        html.className = tema;
    }

    return(
        <div className={props.mostrar}>
            <div className='modal'>
                <div className='caixa'>
                    <h1 className='nickname'>{props.data[0]}</h1>
                    <h3>Nome</h3>
                    <input className='mudar-nome' value={props.data[1]} type='text'/>
                    <h3>CNPJ</h3>
                    <input className='mudar-nome' value={props.data[2]} type='text'/>
                    <h3>Endereço</h3>
                    <input className='mudar-nome' value={props.data[3]} type='text'/>
                    <h3>Município</h3>
                    <input className='mudar-nome' value={props.data[4]} type='text'/>
                    <h3>UF</h3>
                    <input className='mudar-nome' value={props.data[5]} type='text'/>
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