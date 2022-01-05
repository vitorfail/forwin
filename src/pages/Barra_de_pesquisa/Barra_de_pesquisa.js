import lista from '../../icones/list.png';
import lupa from '../../icones/pesquisa.png';
import React, {Component, useState} from "react";
import Inserir_nome from '../Inserir_nome/Inserir_nome';
import '../Barra_de_pesquisa/Barra_de_pesquisa.css';
import '../Barra_de_pesquisa/Popup-conta.css';
import { apis } from '../../caminho_api.mjs';
import axios from 'axios';
import Conta  from '../../icones/divida.png'
import { Link } from 'react-router-dom';
function Barra_de_pesquisa(){
    const [abrirConta, setConta] = useState('modal-conta');
    const [abrirNome, setNome] = useState('');
    const [nomepesquisa,setnomepesquisa]= useState('');
    const [Nome_conta, setNome_conta] = useState('');
    const [Data, setData] = useState('');
    const [Valor, setValor] = useState('');
    const [Tipo, setTipo] = useState('');

    const troca = () => {
        const Axios = axios.create({
            baseURL:apis
        })
        Axios.post('inserir_contas.php', {val: parseFloat((Valor.replace('R$', '')).replace('.', '').replace(',', '.')), vencimento: Data, conta:Nome_conta, tipo: Tipo})
        .then( res => {
            if(res.data === '2'){
                alert("Não foi possível inserir essa conta. Cheque sua conexão com a internet e tent novamente")
            }
        })
        .catch(error => {
            alert('Não foi possível inserir essa conta. Cheque sua conexão com a internet e tent novamente')
        })
    }
    const mask = (e) =>{
        e = e.replace(/\D/g, "")
        e = e.replace(/(\d)(\d{2})$/, "$1,$2")
        e = 'R$ ' + e.replace(/(?=(\d{3})+(\D))\B/g, ".")
        setValor(e)
    }
    const url = 'eai';
    return(
        <div className="cabecalho">
            <div className="barra_de_pesquisa">
                <div className="pesquisa">
                    <img  className='list' src={lista} alt=""/>
                    <input type="text" onChange={(event) => setnomepesquisa(event.target.value)} name="c-pesquisa" placeholder="Pesquise...."/>
                    <Link to={"/pesquisa/"+nomepesquisa} className='p'><img src={lupa} alt=""/></Link>
                </div>
                <div className="user">
                    <a  className="btn" onClick={() => setConta('modal-conta mostrar')} >Adicionar Conta</a>
                    <div className="usuario" >
                        <h1 className='nome_de_usuario'>B</h1>
                    </div>
                </div>
            </div>
            <Inserir_nome trigger = {abrirNome} setTrigger={setNome}>
            </Inserir_nome>
            <div className={abrirConta}>
                <div className="modal">
                    <img src={Conta} width="50px" height="50px"/>
                    <h2>Divida</h2>
                    <p className="preencha">Preencha todos os dados</p>
                    <div className="entrada">
                        <h3>Tipo de Conta</h3>
                        <input type="tex" className = "contas" onChange={(event) => setNome_conta(event.target.value)} placeholder="Água, luz, energia.."/>
                        <h3>Vencimento</h3>
                        <input type="date" onChange={(event) => setData(event.target.value)} className = "data"/>
                        <h3>Valor</h3>
                        <input type="tex" value={Valor} onChange={(event) => mask(event.target.value)} placeholder="00,00" className = "valor"/>
                        <h3>Tipo</h3>
                        <select className='tipo' onChange={(event) => setTipo(event.target.value)}>
                            <option value='imposto'>Impostos</option>
                            <option value='custo'>Custo das mercadorias/serviços</option>
                            <option value='despesas-operacionais'>Despesas operacionais</option>
                            <option value='despesas-venda'>Despesas com venda</option>
                            <option value='depesas-financeiras'>Despesas financeiras</option>
                            <option value='despesas-administracao'>Despesas de administração</option>
                        </select>
                    </div>
                    <div className="botoes">
                        <div className="botao-sim">
                            <button className="sim" name="sim" value="Sim" onClick={troca} >Salvar</button>
                        </div>
                        <div className="botao-nao">
                            <button className="nao" name="nao" value="Não" onClick={() => setConta('modal-conta')}>Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Barra_de_pesquisa;