import React, {Component} from "react";
import axios from "axios";
import {apis} from '../../caminho_api.mjs';
import '../DRE/DRE.css';
export default class DRE extends Component{
    constructor(){
        super()
        this.state = {

        }
    }
    pesquisa_financeira(m, a){
        const Axios = axios.create({
            baseURL: apis
        })
        Axios.post('pagamentos.php', {mes:m, ano:a})
    }
    render(){
        return(
            <div class="dre">
                <div class="titulo_pesquisa">
                    <h1 id="list"class="tooltip-multiline" data-tooltip="Clique para selecionar o mês e o ano" >D.R.E</h1>
                    <select id='meses' onchange='mes_atual()'class="tooltip-multiline" data-tooltip="Clique para selecionar o mês">
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
                    <select id='anos'onchange='mes_atual()' class='meses' class="tooltip-multiline" data-tooltip="Clique para selecionar o ano" >
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
                    <h1 class="entrada_rs2 r">R$ 00,00</h1>
                </div>
                <div class='titulo_dre2'>
                    <h1 class="saida_rs i">Impostos sobre serviço / mercadoria</h1>
                    <h1 class="saida_rs2 imp">R$ 00,00</h1>
                </div>
                <div class='titulo_dre'>
                    <h1 class="entrada_rs">Receita líquida</h1>
                    <h1 class="entrada_rs2 rl">R$ 00,00</h1>
                </div>
                <div class='titulo_dre2'>
                    <h1 class="saida_rs">Custo das mercadorias / Serviços</h1>
                    <h1 class="saida_rs2 c">R$ 00,00</h1>
                </div>
                <div class='titulo_dre'>
                    <h1 class="entrada_rs">Lucro bruto</h1>
                    <h1 class="entrada_rs2 lb">R$ 00,00</h1>
                </div>
                <div class='titulo_dre2'>
                    <h1 class="saida_rs">Despesas operaionais</h1>
                    <h1 class="saida_rs2 do">R$ 00,00</h1>
                </div>
                <div class='titulo_dre2'>
                    <h1 class="saida_rs">Despesas com vendas</h1>
                    <h1 class="saida_rs2 dv">R$ 00,00</h1>
                </div>
                <div class='titulo_dre2'>
                    <h1 class="saida_rs">Despesas financeiras</h1>
                    <h1 class="saida_rs2 df">R$ 00,00</h1>
                </div>
                <div class='titulo_dre'>
                    <h1 class="entrada_rs">Receita financeira</h1>
                    <h1 class="entrada_rs2 rf">R$ 00,00</h1>
                </div>
                <div class='titulo_dre2'>
                    <h1 class="saida_rs">Despesas de administração</h1>
                    <h1 class="saida_rs2 da">R$ 00,00</h1>
                </div>
                <div class='resultado_positivo_dre'>
                    <h1 class="resultado_rs">Lucro líquido</h1>
                    <h1 class="resultado_rs2 ll">R$ 00,00</h1>
                </div>
            </div>
        )
    }
}