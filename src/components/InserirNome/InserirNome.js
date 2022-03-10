import React,{useState} from "react";
import Axios from "../../Axios";
import './InserirNome.css';
import Exit from '../../Exit'

function InserirNome(props){
    const [nome_, setnome] = useState(props.data[1]);
    const [cnpj_, setcnpj] = useState(props.data[2]);
    const [endereco_, setendereco] = useState(props.data[3]);
    const [municipio_, setmunicipio] = useState(props.data[4]);
    const [uf_, setuf] = useState(props.data[5]);
    const [tema_, settema] = useState(props.data[5]);


    function troca_de_tema(tema){
        console.log(nome_)
        if(tema === 'temapadrao'){
            let html = document.querySelector('html');
            html.className = "tema-padrao";
        }
        if(tema === 'temaazul'){
            let html = document.querySelector('html');
            html.className = "tema-azul";
        }
        if(tema === 'temalaranja'){
            let html = document.querySelector('html');
            html.className = "tema-laranja";
        }
        if(tema === 'temaroxo'){
            let html = document.querySelector('html');
            html.className = "tema-roxo";
        }
    }
    function update(){
        Axios.post('index.php?url=atualizarusuario/pesquisa', { nome:nome_[0],  
            cnpj:cnpj_, endereco:endereco_, municipio:municipio_, uf:uf_, tema:tema_})
        .then(res => {
            if(res.data.data === '1'){
                props.executar("nameclatura")
            }
            if(res.data.data === '2'){
                alert("Não foi possível atualizar os dados do usuário. Verifique sua internet e tente denovo.")
                props.executar("nameclatura")
            }
            if(res.data.data === 'Usuário não autenticado'){
                Exit()
            }
        })
        .catch( erro => {
            alert("Não foi possível atualizar os dados do usuário. Verifique sua internet e tente denovo.")
            props.executar("nameclatura")
        })
    }
    return(
        <div className={props.mostrar}>
            <div className='modal'>
                <div className='caixa'>
                    <h1 className='nickname'>{props.data[0]}</h1>
                    <h3>Nome</h3>
                    <input className='mudar-nome' value={nome_} onChange={(event) => setnome(event.target.value)} type='text'/>
                    <h3>CNPJ</h3>
                    <input className='mudar-nome' value={cnpj_} onChange={(event) => setcnpj(event.target.value)} type='text'/>
                    <h3>Endereço</h3>
                    <input className='mudar-nome' value={endereco_} onChange={(event) => setendereco(event.target.value)} type='text'/>
                    <h3>Município</h3>
                    <input className='mudar-nome' value={municipio_} onChange={(event) => setmunicipio(event.target.value)} type='text'/>
                    <h3>UF</h3>
                    <input className='mudar-nome' value={uf_} onChange={(event) => setuf(event.target.value)} type='text'/>
                    <div className='escolha-tema' value={tema_} onChange={(event) => settema(event.target.value)}>
                        <input type='radio' name='tema'  id='tema-padrao' value='temapadrao' onClick={(event) => troca_de_tema(event.target.value)}/><h2 className='padrao'>11</h2><p>Tema padrao</p>
                        <input type='radio' name='tema' id='tema-azul' value='temaazul' onClick={(event) => troca_de_tema(event.target.value)}/><h2 className='azul'>11</h2><p>Tema azul</p>
                        <input type='radio' name='tema' id='tema-roxo' value='temaroxo' onClick={(event) => troca_de_tema(event.target.value)}/><h2 className='roxo'>11</h2><p>Tema roxo</p>
                        <input type='radio' name='tema' id='tema-laranja'value='temalaranja' onClick={(event) => troca_de_tema(event.target.value)}/><h2 className='laranja'>11</h2><p>Tema laranja</p>
                    </div>
                    <div className='menu_nome'>
                        <button className='mudar' onClick={() => update()}>Mudar</button>
                        <button className='fechar_nome' onClick={() => props.executar("nameclatura")}>Fechar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default InserirNome;