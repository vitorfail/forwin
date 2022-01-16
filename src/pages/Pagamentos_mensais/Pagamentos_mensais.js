import {Component} from 'react';
import axios from 'axios';
import {apis} from '../../caminho_api.mjs';
export default class Pagamentos_mensais extends Component{
    
    render(){
        return(
            <div class="clientes_achados">
                <div class="titulo_pesquisa">
                    <h1 id="list">Pagamentos de</h1>
                    <select class='meses' onchange="mes_atual(this.value)">
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
                    <select class='ano' onchange="mes_atual(this.value)">
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
                <div class="encontrados">

                </div>
            </div>
        )
    }
}