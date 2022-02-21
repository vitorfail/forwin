import React, {Component} from "react";
import axios from "axios";
import {apis} from "../../caminho_api.mjs";
import './ContasdoMes.css';
import {Link}from 'react-router-dom';
export default class ContasdoMes extends Component{
    constructor(){
        super()
        this.state= {
            lista_contas: []
            
        }
        this.mudar_mes = this.mudar_mes.bind(this);
        this.atualiza = this.atualiza.bind(this);
        this.atualizar_conta = this.atualizar_conta.bind(this);
    }
    componentDidMount() {
        window.addEventListener('load', this.atualiza);
        var data= new Date();
        var meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
        window.addEventListener('load', this.mudar_mes(meses[data.getMonth()]));
    }
    componentWillMount() {
        window.addEventListener('load', this.atualiza);
        var data= new Date();
        var meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
        window.addEventListener('load', this.mudar_mes(meses[data.getMonth()]));
    }
    atualiza(){
        var seletor = document.querySelector('.meses');
        var data= new Date();
        var meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
        seletor.value = meses[data.getMonth()];
    }
    mudar_mes(mes){
        const Axios = axios.create({
            baseURL: apis
        })
        var meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
        var data = new Date();
        var data_hoje = data.getFullYear() + '-'+ (data.getMonth()+1) + '-' + data.getDate();
        var ano = data.getFullYear();
        Axios.post('index.php?url=atualizacontas/pesquisa', {   
            mes_query:(1+ meses.indexOf(mes)), 
            dat: data_hoje,
            ano:String(ano),
            marcador: "Várias"}, {headers: {
                "Authorization": "Bearer "+ localStorage.getItem('token_jwt')}}
        ).then(res => {
            console.log(res.data)
            if(res.data.data.length === 7){
                console.log("passou aqui")
                this.setState({ lista_contas: <div className="titulos_contas"><h3>Nenhuma conta este mês</h3></div> })
            }
            else{
                console.log(res.data)
                var ir = [];
                this.setState({ lista_contas: ir })
                for(var n =0; n < res.data.data[0].length; n++){
                    if((res.data.data[4])[n] === 'Pago'){
                        let joined = this.state.lista_contas.concat(<div className="titulos_contas"> 
                                                                        <h3>{(res.data.data[1])[n]}</h3> 
                                                                        <h3>R$ {(res.data.data[2])[n]}</h3> 
                                                                        <h3 id={(res.data.data[0])[n]} className="pago">Pago</h3> 
                                                                        <input type="checkbox" defaultChecked='true' name="checkbox" onChange={(event) => this.atualizar_conta(event.currentTarget.id, event.target.checked)} id={(res.data.data[0])[n]} className="cm-toggle blue"/> 
                                                                    </div> );   
                        this.setState({ lista_contas: joined })
                    }
                    else{
                        if((res.data.data[6])[n] >0){
                            let joined = this.state.lista_contas.concat(<div className="titulos_contas"> 
                                                                            <h3>{(res.data.data[1])[n]}</h3> 
                                                                            <h3>R$ {(res.data.data[2])[n]}</h3> 
                                                                            <h3 id={(res.data.data[0])[n]} className="em_dia"> {(res.data.data[6])[n]} Dias</h3> 
                                                                            <input type="checkbox"  name="checkbox" onChange={(event) => this.atualizar_conta(event.currentTarget.id, event.target.checked)} id={(res.data.data[0])[n]} className="cm-toggle blue"/> 
                                                                        </div> );   
                            this.setState({ lista_contas: joined })
                        }
                        if((res.data.data[6])[n] <0){
                            let joined = this.state.lista_contas.concat(<div className="titulos_contas"> 
                                                                            <h3>{(res.data.data[1])[n]}</h3> <h3>R${(res.data.data[2])[n]}</h3> 
                                                                            <h3 id={(res.data.data[0])[n]}  className="vencido">Vencida</h3> 
                                                                            <input type="checkbox" name="checkbox" onChange={(event) => this.atualizar_conta(event.currentTarget.id, event.target.checked)} id={(res.data.data[0])[n]} className="cm-toggle blue"/>
                                                                        </div>);   
                            this.setState({ lista_contas: joined })
                        }
                        if((res.data.data[6])[n] === 0){
                            var joined = this.state.lista_contas.concat(<div className="titulos_contas"> 
                                                                            <h3>{(res.data.data[1])[n]}</h3> 
                                                                            <h3>R$ {(res.data.data[2])[n]}</h3> 
                                                                            <h3 id={(res.data.data[0])[n]} className="prazo_final">Hoje</h3> 
                                                                            <input type="checkbox" name="checkbox" onChange={(event) => this.atualizar_conta(event.currentTarget.id, event.target.checked)} id={(res.data.data[0])[n]} className="cm-toggle blue"/>
                                                                        </div>);   
                            this.setState({ lista_contas: joined })
                        }
                    }
                }
            }
        })
    }
    atualizar_conta(e, check){
        const Axios =axios.create({
            baseURL: apis
        })
        Axios.post('index.php?url=updateconta/pesquisa', {
            id: e,
            situacao: String(check)
        }, {headers: {
            "Authorization": "Bearer "+ localStorage.getItem('token_jwt')}}).then(res => {
            if(res.data.data === '1'){
                window.location.reload();
            }
            if(res.data.data === '2'){
                alert('Não foi possível atualizar essa conta. Verifique sua internet e tente novamente')
            }
            if(res.data.data === 'Usuário não autenticado'){
                alert('Esta usuário não está autenticado, faça login e tente novamente')
            }
        })
    }
    render(){
        return(
            <div className="notific">
                <div className="contas_do_mes">
                    <h2>Contas do mês</h2>
                    <select className="meses"  onChange={(event) => this.mudar_mes(event.target.value)}>
                        <option value='Janeiro'>Janeiro</option>
                        <option value='Fevereiro'>Fevereiro</option>
                        <option value='Março'>Março</option>
                        <option value='Abril'>Abril</option>
                        <option value='Maio'>Maio</option>
                        <option value='Junho'>Junho</option>
                        <option value='Julho'>Julho</option>
                        <option value='Agosto'>Agosto</option>
                        <option value='Setembro'>Setembro</option>
                        <option value='Outubro'>Outubro</option>
                        <option value='Novembro'>Novembro</option>
                        <option value='Dezembro'>Dezembro</option>
                    </select>
                    <Link className="ver_todas" to='/contas'>Ver Todas</Link>
                </div>
                <div className="t_contas">
                                        
                </div>
                <div className="lista_contas">
                    {this.state.lista_contas}
                </div>
            </div>
        )
    }
} 