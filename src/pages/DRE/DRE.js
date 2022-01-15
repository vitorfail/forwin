import React, {Component} from "react";
import axios from "axios";
import {apis} from '../../caminho_api.mjs';
import '../DRE/DRE.css';
export default class DRE extends Component{
    constructor(){
        super()
        this.state = {
            ////////Data selecionada//////
            ano:'',
            mes:'',
            //////Receita/////
            receita:0,
            //////Entrada///////
            imposto_dre:0,
            custo_dre:0,
            despesas_operacionais_dre:0,
            despesas_venda_dre:0,
            depesas_financeiras_dre:0,
            despesas_administracao_dre:0,
            //////Saida//////
            receita_liquida_dre:0,
            lucro_bruto_dre:0,
            receita_financeira_dre:0,
            /////Resultado/////
            resultado_dre:0

        }
        this.pesquisa_financeira = this.pesquisa_financeira.bind(this)
        this.trocar1 = this.trocar1.bind(this)
        this.trocar2 = this.trocar2.bind(this)

    }
    componentWillMount(){
        var data = new Date();
        var mes =''
        var ano = data.getFullYear().toString()
        if(data.getMonth()< 10){
            mes = '0'+ (data.getMonth() + 1).toString()
        }
        else{
            mes = (data.getMonth() + 1).toString()
        }
        this.pesquisa_financeira(mes, ano)
    }
    pesquisa_financeira(m, a){
        const Axios = axios.create({
            baseURL: apis
        })
        Axios.post('pagamentos_mes.php', {mes:m, ano:a})
        .then(res => {
            if(res.data == '1'){

            }
            else{
                var pag =0
                for(var i=0; i< res.data[0].length;i++ ){
                    pag = pag + parseFloat((res.data[1])[i]);
                }
                this.setState({receita: pag})
            }
        })
        Axios.post("contas_dre.php", {mes:m, ano:a})
        .then(res =>{
            if(res.data == '1'){
                
            }
            else{
                var imposto = 0;
                var custo = 0;
                var despesas_operacionais = 0;
                var despesas_venda = 0;
                var depesas_financeiras = 0;
                var despesas_administracao = 0;
                for(var i =0; i< res.data[0].length; i++){
                    if((res.data[1])[i] == 'imposto'){
                        imposto = imposto + parseFloat((res.data[0])[i])
                    }
                    if((res.data[1])[i] == 'custo'){
                        custo = custo + parseFloat((res.data[0])[i])
                    } 
                    if((res.data[1])[i] == 'despesas-operacionais'){
                        despesas_operacionais = despesas_operacionais + parseFloat((res.data[0])[i])
                    } 
                    if((res.data[1])[i] == 'despesas-venda'){
                        despesas_venda = despesas_venda + parseFloat((res.data[0])[i])
                    } 
                    if((res.data[1])[i] == 'depesas-financeiras'){
                        depesas_financeiras = depesas_financeiras + parseFloat((res.data[0])[i])
                    } 
                    if((res.data[1])[i] == 'despesas-administracao'){
                        despesas_administracao = despesas_administracao + parseFloat((res.data[0])[i])
                    }     
                }
                this.setState({imposto_dre: imposto})
                this.setState({custo_dre: custo})
                this.setState({despesas_operacionais_dre: despesas_operacionais})
                this.setState({despesas_venda_dre: despesas_venda})
                this.setState({depesas_financeiras_dre: depesas_financeiras})
                this.setState({despesas_administracao_dre: despesas_administracao})

                var receita = this.state.receita

                this.setState({receita_liquida_dre: receita - imposto})
                this.setState({lucro_bruto_dre: receita - (imposto+custo)})
                this.setState({receita_financeira: receita -(imposto+custo+despesas_operacionais+despesas_venda+depesas_financeiras)})
                this.setState({resultado_dre: receita -(imposto+custo+despesas_operacionais+despesas_venda+depesas_financeiras+despesas_administracao)})
            }
        })
    }
    trocar1(m){
        var meses = ['Janeiro', 'Fevereiro','Março' , 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro','Dezembro']
        this.setState({mes: (meses.indexOf(m) + 1).toString()})
        this.pesquisa_financeira(this.state.mes, this.state.ano)
    }
    trocar2(a){
        this.setState({ano:a})
        this.pesquisa_financeira(this.state.mes, a)
    }
    render(){
        return(
            <div class="dre">
                <div class="titulo_pesquisa">
                    <h1 id="list"class="tooltip-multiline" data-tooltip="Clique para selecionar o mês e o ano" >D.R.E</h1>
                    <select id='meses' onChange={(event) => this.trocar1(event.target.value)} class="tooltip-multiline" data-tooltip="Clique para selecionar o mês">
                        <option value='Janeiro'>JANEIRO</option>
                        <option value='Fevereiro'>FEVEREIRO</option>
                        <option value='Março'>MARÇO</option>
                        <option value='Abril'>ABRIL</option>
                        <option value='Maio'>MAIO</option>
                        <option value='Junho'>JUNHO</option>
                        <option value='Julho'>JULHO</option>
                        <option value='Agosto'>AGOSTO</option>
                        <option value='Setembro'>SETEMBRO</option>
                        <option value='Outubro'>OUTUBRO</option>
                        <option value='Novembro'>NOVEMBRO</option>
                        <option value='Dezembro'>DEZEMBRO</option>
                    </select>
                    <select id='anos' onChange={(event) => this.trocar2(event.target.value)} class='meses' class="tooltip-multiline" data-tooltip="Clique para selecionar o ano" >
                        
                        <option value='2028'>2028</option>
                        <option value='2027'>2027</option>
                        <option value='2026'>2026</option>
                        <option value='2025'>2021</option>
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
                        <option value='1992'>1992</option>
                        <option value='1991'>1991</option>
                        <option value='1990'>1990</option>
                        <option value='1989'>1989</option>
                        <option value='1988'>1988</option>
                    </select>
                    <div class="valor_rs">
                        <h1>VALOR EM R$</h1>
                    </div>
                </div>
                <div class='titulo_dre'>
                    <h1 class="entrada_rs">Receita bruta</h1>
                    <h1 class="entrada_rs2 r">R$ {this.state.receita}</h1>
                </div>
                <div class='titulo_dre2'>
                    <h1 class="saida_rs i">Impostos sobre serviço / mercadoria</h1>
                    <h1 class="saida_rs2 imp">R$ {this.state.imposto_dre}</h1>
                </div>
                <div class='titulo_dre'>
                    <h1 class="entrada_rs">Receita líquida</h1>
                    <h1 class="entrada_rs2 rl">R$ 00,00</h1>
                </div>
                <div class='titulo_dre2'>
                    <h1 class="saida_rs">Custo das mercadorias / Serviços</h1>
                    <h1 class="saida_rs2 c">R$ {this.state.custo_dre}</h1>
                </div>
                <div class='titulo_dre'>
                    <h1 class="entrada_rs">Lucro bruto</h1>
                    <h1 class="entrada_rs2 lb">R$ 00,00</h1>
                </div>
                <div class='titulo_dre2'>
                    <h1 class="saida_rs">Despesas operaionais</h1>
                    <h1 class="saida_rs2 do">R$ {this.state.despesas_operacionais_dre}</h1>
                </div>
                <div class='titulo_dre2'>
                    <h1 class="saida_rs">Despesas com vendas</h1>
                    <h1 class="saida_rs2 dv">R$ {this.state.despesas_venda_dre}</h1>
                </div>
                <div class='titulo_dre2'>
                    <h1 class="saida_rs">Despesas financeiras</h1>
                    <h1 class="saida_rs2 df">R$ {this.state.depesas_financeiras_dre}</h1>
                </div>
                <div class='titulo_dre'>
                    <h1 class="entrada_rs">Receita financeira</h1>
                    <h1 class="entrada_rs2 rf">R$ 00,00</h1>
                </div>
                <div class='titulo_dre2'>
                    <h1 class="saida_rs">Despesas de administração</h1>
                    <h1 class="saida_rs2 da">R$ {this.state.despesas_administracao_dre}</h1>
                </div>
                <div class='resultado_positivo_dre'>
                    <h1 class="resultado_rs">Lucro líquido</h1>
                    <h1 class="resultado_rs2 ll">R$ {this.state.resultado_dre}</h1>
                </div>
            </div>
        )
    }
}