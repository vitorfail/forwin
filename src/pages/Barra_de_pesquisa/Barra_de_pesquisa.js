import lista from '../../icones/list.png';
import lupa from '../../icones/pesquisa.png';
import React, {useState} from "react";
import Inserir_Nome from '../Inserir_Nome/Inserir_Nome';
import '../Barra_de_pesquisa/Barra_de_pesquisa.css';
import '../Barra_de_pesquisa/Popup-conta.css';
import { apis } from '../../caminho_api.mjs';
import axios from 'axios';
import Conta  from '../../icones/divida.png'
import { useNavigate } from 'react-router-dom';

function Barra_de_pesquisa(){
    const [abrirConta, setConta] = useState('modal-conta');
    const [abrirNome, setNome] = useState('nameclatura');
    const [nomepesquisa,setnomepesquisa]= useState('');
    const [Nome_conta, setNome_conta] = useState('');
    const [Data, setData] = useState('');
    const [Valor, setValor] = useState('');
    const [Tipo, setTipo] = useState('');

    const troca = () => {
        const Axios = axios.create({
            baseURL:apis
        })
        Axios.post('index.php?url=inserircontas/pesquisa', {val: parseFloat((Valor.replace('R$', '')).replace('.', '').replace(',', '.')), 
        vencimento: Data, 
        conta:Nome_conta, tipo: Tipo} ,{headers: {
            "Authorization": "Bearer "+ localStorage.getItem('token_jwt')}})
        .then( res => {
            if(res.data.data === '1'){
                setConta('modal-conta')
            }
            if(res.data.data === '2'){
                alert("Não foi possível inserir essa conta. Cheque sua conexão com a internet e tent novamente")
            }
        })
        .catch(error => {
            alert('Não foi possível inserir essa conta. Cheque sua conexão com a internet e tent novamente')
        })
    }
    function show(visivel){
        setNome(visivel);
    }
    const mask = (e) =>{
        e = e.replace(/\D/g, "")
        e = e.replace(/(\d)(\d{2})$/, "$1,$2")
        e = 'R$ ' + e.replace(/(?=(\d{3})+(\D))\B/g, ".")
        setValor(e)
    }
    const history = useNavigate();
    const pesquisa = () =>{
        if(nomepesquisa === ''){
            history('/pesquisa/todos');
        }
        else{
            history('/pesquisa/'+nomepesquisa);
        }
    }
    return(
        <div className="cabecalho">
            <div className="barra_de_pesquisa">
                <div className="pesquisa">
                    <img  className='list' src={lista} alt="Lista"/>
                    <input type="text" onChange={(event) => setnomepesquisa(event.target.value)} name="c-pesquisa" placeholder="Pesquise...."/>
                    <a href="/#" onClick={(event) => pesquisa()} className='p'><img src={lupa} alt=""/></a>
                </div>
                <div className="user">
                    <a  className="btn" href="/#"  onClick={() => setConta('modal-conta mostrar')} >Adicionar Conta</a>
                    <div className="usuario" onClick={() => setNome('nameclatura mostrar')}>
                        <h1 className='nome_de_usuario'>B</h1>
                    </div>
                </div>
            </div>
            <Inserir_Nome mostrar = {abrirNome} executar={show.bind(this)}>
            </Inserir_Nome>
            <div className={abrirConta}>
                <div className="modal">
                    <img src={Conta} width="50px" height="50px" alt='Conta'/>
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
                            <button className="sim" name="sim" value="Sim" onClick={(event) => troca} >Salvar</button>
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