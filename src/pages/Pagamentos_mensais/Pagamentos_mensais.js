import {Component} from 'react';
import axios from 'axios';
import {apis} from '../../caminho_api.mjs';
export default class Pagamentos_mensais extends Component{
    constructor(){
        super()
        this.state = {
            mes:'',
            ano:'',
            resultado:0
        }
        this.pesquisa_pagamentos = this.pesquisa_pagamentos.bind(this)
        this.trocar1 = this.trocar1.bind(this)
        this.trocar2 = this.trocar2.bind(this)
    }
    componentWillMount(){
        var data = new Date()
        var mes_ = 0
        var ano_ = data.getFullYear().toString()
        this.setState({ano: ano_})
        this.setState({mes: mes_})
        if(data.getMonth() < 10){
            mes_ = "0"+ data.getMonth().toString()
        }
        else{
            mes_= data.getMonth().toString()
        }
        this.pesquisa_pagamentos(mes_, ano_)
    }
    pesquisa_pagamentos(mes_, ano_){
        const Axios = axios.create({
            baseURL: apis
        })
        Axios.post('pagamentos_mes', {mes: mes_, anos:ano_})
        .then( res => {
            if(res.data == '1'){

            }
            else{
                for(var i =0 ;res.data[0].length; i++){
                    var list = this.state.resultado.concat(<div className='enc p'> <h3 className='n'>{(res.data[2])[i]}</h3> <h3 className='v'>R$ {(res.data[1])[i]}</h3> <h3 className='n'>{(res.data[0])[i]}</h3> </div>)
                    this.setState({resultado: list})
                }
            }
        })
        .catch( error  => {

        })
    }
    trocar1(m){
        this.setState({mes: m})
        this.pesquisa_pagamentos(m, this.state.ano)
    }
    trocar2(a){
        this.setState({ano: a})
        this.pesquisa_pagamentos(this.state.mes, a)
    }
    render(){
        return(
            <div className="clientes_achados">
                <div className="titulo_pesquisa">
                    <h1 id="list">Pagamentos de</h1>
                    <select className='meses' onChange={(event) => this.trocar1(event.target.value)}>
                        <option value='01'>Janeiro</option>
                        <option value='02'>Fevereiro</option>
                        <option value='03'>Março</option>
                        <option value='04'>Abril</option>
                        <option value='05'>Maio</option>
                        <option value='06'>Junho</option>
                        <option value='07'>Julho</option>
                        <option value='08'>Agosto</option>
                        <option value='09'>Setembro</option>
                        <option value='10'>Outubro</option>
                        <option value='11'>Novembro</option>
                        <option value='12'>Dezembro</option>
                    </select>
                    <select className='ano' onChange={(event) => this.trocar2(event.target.value)}>
                        <option value='2030'>2030</option>
                        <option value='2029'>2029</option>
                        <option value='2028'>2028</option>
                        <option value='2027'>2027</option>
                        <option value='2026'>2026</option>
                        <option value='2025'>2025</option>
                        <option value='2024'>2024</option>
                        <option value='2023'>2023</option>
                        <option value='2022'>2022</option>
                        <option value='2021'>2021</option>
                        <option value='2020'>2020</option>
                        <option value='2019'>2019</option>
                        <option value='2018'>2018</option>
                        <option value='2017'>2017</option>
                        <option value='2016'>2016</option>
                        <option value='2015'>2015</option>
                        <option value='2014'>2014</option>
                        <option value='2013'>2013</option>
                        <option value='2012'>2012</option>
                        <option value='2011'>2011</option>
                        <option value='2010'>2010</option>
                        <option value='2009'>2009</option>
                        <option value='2008'>2008</option>
                        <option value='2007'>2007</option>
                        <option value='2006'>2006</option>
                        <option value='2005'>2005</option>
                        <option value='2004'>2004</option>
                        <option value='2003'>2003</option>
                        <option value='2002'>2002</option>
                        <option value='2001'>2001</option>
                        <option value='2000'>2000</option>
                        <option value='1999'>1999</option>
                        <option value='1998'>1998</option>
                        <option value='1997'>1997</option>
                        <option value='1996'>1996</option>
                        <option value='1995'>1995</option>
                        <option value='1994'>1994</option>
                        <option value='1993'>1993</option>
                        <option value='1991'>1991</option>
                        <option value='1990'>1990</option>
                        <option value='1989'>1989</option>
                        <option value='1988'>1988</option>
                    </select>
                </div>
                <div className="encontrados">
                    {this.state.resultado}
                </div>
            </div>
        )
    }
}