import React, {Component} from "react";
import { Link } from "react-router-dom";
import Axios from '../../Axios.js';
import '../Blocos/Blocos.css';
import Exit from "../../Exit.js";
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
        this.query_numero()
        this.query_aniversariantes();
        this.query_receita();
        this.data();
        this.hora();
    } 
    query_numero(){
        Axios.post('index.php?url=quantidadeclientes/pesquisa', {user: '1'}).then(res =>{
            if(res.data.data === 'Usuário não autenticado'){
                this.setState({numero_clientes: "Sem clientes"})
            }
            else{
                if(res.data.data === 0 || res.data.data === "0"){
                    this.setState({numero_clientes: "Sem clientes"})
                }
                else{
                    this.setState({numero_clientes: res.data.data})
                }
            }
        }).catch(error =>{
            this.setState({numero_clientes: "Sem clientes"})
        })
    }
    query_aniversariantes(){
        Axios.post('index.php?url=aniversariantes/pesquisa', {user: '1'}
        ).then(res => {
            if(res.data.data === 'Usuário não autenticado'){
                Exit()
            }
            if(res.data.data === 'Error'){
                this.setState({aniversariantes: '0'})    
            }
            if(res.data.data === '0'){
                this.setState({aniversariantes: 'Sem clientes'})    
            }
            else{
                var num = res.data.data;
                this.setState({aniversariantes: num})
            }
        })
        .catch(error =>{
            this.setState({aniversariantes: '0'})    
        })
    }
    query_receita(){
        Axios.post('index.php?url=pagamentosmes/pesquisa', { mes:'12', ano:'2021'}
        ).then(res =>{
            this.setState({valor_do_mes: 'R$ '+res.data.toFixed(2)})
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
        if (minutos.length === 1){
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
                    <Link className='link' to='/pesquisa/todos'></Link>
                    <div className="box" >
                        <h1 id='numero-clientes'>{this.state.numero_clientes}</h1>
                        <h3>Clientes</h3>
                    </div>
                    <div className="icone clientes">
                    </div>
                </div>
                <div className="card">
                    <Link className='link' to='/aniversariantes'></Link>
                    <div className="box">
                        <h1 id="aniver">{this.state.aniversariantes}</h1>
                        <h3>Aniversariantes</h3>
                    </div>
                    <div className="icone aniver">
                    </div>
                </div>
                <div className="card"  >
                    <Link className='link' to='/pagamentos'></Link>
                    <div className="box">
                        <h1 className='valormes'>{this.state.valor_do_mes}</h1>
                        <h3>Pagamentos no mês</h3>
                    </div>
                    <div className="icone pagamentos">
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