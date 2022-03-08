import React from "react";
import './InserirNome.css';
import { useState, useEffect } from "react";
import Axios from "../../Axios";
import Exit from "../../Exit";
function InserirNome(props){
    const [nome, setnome] = useState('');
    const [cnpj, setcnpj] = useState('');
    const [endereco, setendereco] = useState('');
    const [municipio, setmunicipio] = useState('');
    const [uf, setuf] = useState('');

    useEffect(() =>
        pegar_nome()
    )
    function troca_de_tema(tema){
        var html = document.querySelector('html');
        html.className = tema;
    }
    function pegar_nome(){
        Axios.post("index.php?url=dadosuser/pesquisa")
        .then(res =>{
                if(res.data.data === '1'){

                }
                if(res.data.data === "Usuário não autenticado"){
                    Exit()
                }
                else{
                    setnome(res.data.data[1])
                    setcnpj(res.data.data[0])
                    setendereco(res.data.data[2])
                    setmunicipio(res.data.data[3])
                    setuf(res.data.data[4])
                } 
            }
        )
    }
    return(
        <div className={props.mostrar}>
            <div className='modal'>
                <div className='caixa'>
                    <h1 className='nickname'>{nome}</h1>
                    <h3>Nome</h3>
                    <input className='mudar-nome' value={nome} type='text'/>
                    <h3>CNPJ</h3>
                    <input className='mudar-nome' value={cnpj} type='text'/>
                    <h3>Endereço</h3>
                    <input className='mudar-nome' value={endereco} type='text'/>
                    <h3>Município</h3>
                    <input className='mudar-nome' value={municipio} type='text'/>
                    <h3>UF</h3>
                    <input className='mudar-nome' value={uf} type='text'/>
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