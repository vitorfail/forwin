import React, {Component} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import {apis} from '../../caminho_api.mjs';
import Clientes from '../../icones/students.png';
import Aniversariantes from '../../icones/instituicao2.png';
import Pagamentos_do_mes from '../../icones/pagamento2.png';
import '../Blocos/Blocos.css';
export default class Blocos extends Component{
    constructor(){
        super()
        this.state = {
            numero_clientes: 'Sem clientes',
            aniversariantes: '0',
            valor_do_mes: 'R$ 0,00',
            dia: 'dia, mês, Ano',
            hora: '00:00'
        }
        this.query_numero = this.query_numero.bind(this);
        this.query_aniversariantes = this.query_aniversariantes.bind(this);
        this.query_receita = this.query_receita.bind(this);
        this.data = this.data.bind(this);
        this.hora = this.hora.bind(this);
    }
    componentDidMount() {
        window.addEventListener('load', this.query_numero);
        window.addEventListener('load',  this.query_aniversariantes);
        window.addEventListener('load', this.query_receita);
        window.addEventListener('load', this.data);
        window.addEventListener('load', this.hora);
    } 
    componentWillMount() {
        this.query_numero()
        this.query_aniversariantes();
        this.query_receita();
    }   
    query_numero(){
        const Axios = axios.create({
            baseURL: apis
        })
        Axios.post('quantidade_clientes.php').then(res =>{
            this.setState({numero_clientes: res.data})
            
        }).catch(error =>{
            alert(error.data)
        })
    }
    query_aniversariantes(){
        const Axios = axios.create({
            baseURL: apis
        })
        Axios.post('aniversariantes.php').then(res => {
            if(res.data === 'Nenhum' || res.data === '1'){
                this.setState({aniversariantes: '0'})    
            }
            else{
                var num = res.data;
                this.setState({aniversariantes: num[0].length})
            }
        })
    }
    query_receita(){
        const Axios = axios.create({
            baseURL: apis
        })
        Axios.post('pagamentos_mes.php', { mes:'12', ano:'2021'}).then(res =>{
            if(res.data === '1'|| res.data === '2'){
                this.setState({valor_do_mes: 'R$ 0,00'})
            }
            else{
                var valor_total = (res.data)[1]
                var receita = 0;

                for(var i =0; i< (res.data)[1].length; i++){
                    receita = receita + parseFloat(((res.data)[1])[i]);
                }
                this.setState({valor_do_mes: 'R$ '+receita.toFixed(2)})
            }
        })
    }
    data(){
        var data = new Date();
        var meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
        var dia_atual = data.getDate() +", "+ meses[data.getMonth()] + ', '+data.getFullYear();
        return dia_atual;
    }
    hora(){
        var data = new Date();
        var hora = String(data.getHours());
        var minutos = String(data.getMinutes()); 
        if (hora.length === 1){
            hora = '0'+ hora;
        }
        if (minutos.length == 1){
            minutos = '0'+ minutos;
        }
        var hora_atual = hora+ ':'+ minutos;
        return hora_atual;
    }
    render(){
        const hora = this.hora();
        const data = this.data();
        return(
            <div className="cards">
                <div className="card" >
                    <div className="box" >
                        <h1 id='numero-clientes'>{this.state.numero_clientes}</h1>
                        <h3>Clientes</h3>
                    </div>
                    <div className="icone">
                        <img src={Clientes} alt=""/>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <h1 id="aniver">{this.state.aniversariantes}</h1>
                        <h3>Aniversariantes</h3>
                    </div>
                    <div className="icone">
                        <img src={Aniversariantes} alt=""/>
                    </div>
                </div>
                <div className="card"  >
                    <Link className='link' to='pagamentos'></Link>
                    <div className="box">
                        <h1 className='valormes'>{this.state.valor_do_mes}</h1>
                        <h3>Pagamentos no mês</h3>
                    </div>
                    <div className="icone">
                        <img src={Pagamentos_do_mes} alt=""/>
                    </div>
                </div>
                <div className="card-hora">
                    <div className="box">
                        <h1 className='hora'>{hora}</h1>
                        <h3 className='dia'>{data}</h3>
                    </div>
                </div>
            </div>
        )
    }
}