import { Component } from "react/cjs/react.development";
import axios from "axios";
import { apis } from "../../caminho_api.mjs";
import '../Planilhas/Planilhas.css';
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';;
function pesquisa_de_pagamentos(){
    var dados = {}
    var data_query = new Date()
    const Axios = axios.create({
        baseURL:apis
    })
    Axios.post("pagamentos_mes.php", {ano: data_query.getFullYear().toString(), mes:(data_query.getMonth()+1).toString()})
    .then(res => {
        if(res.data == '1' || res.data =='2'){
            dados = { janeiro:0, 
                fevereiro:0, 
                marco:0, 
                abril:0, 
                maio:0, 
                junho:0, 
                julho:0, 
                agosto:0, 
                setembro:0, 
                outubro:0, 
                novembro:0, 
                dezembro:0
            }
        }
        else{
            var d = new Date();
            var janeiro_mes = 0;
            var fevereiro_mes = 0;
            var marco_mes = 0;
            var abril_mes = 0;
            var maio_mes = 0;
            var junho_mes = 0;
            var julho_mes = 0;
            var agosto_mes = 0;
            var setembro_mes = 0;
            var outubro_mes = 0;
            var novembro_mes = 0;
            var dezembro_mes = 0;
            var d = new Date();
            var valormes = 0;
            for(var i=0; i< res.data[0].length; i++){
                var newd = new Date((res.data[0])[i]);
                if(newd.getFullYear() == ""){
                    
                }
                else{
                    if(newd.getFullYear() == d.getFullYear()){
                        if(newd.getMonth() == d.getMonth()){
                            valormes = valormes+parseFloat((res.data[1])[i]);
                        }
                        if(newd.getMonth() == 0){
                            janeiro_mes = janeiro_mes+parseFloat((res.data[1])[i]);
                        }
                        if(newd.getMonth() == 1){
                            fevereiro_mes = fevereiro_mes+parseFloat((res.data[1])[i]);
                        }
                        if(newd.getMonth() == 2){
                            marco_mes = marco_mes+parseFloat((res.data[1])[i]);
                        }
                        if(newd.getMonth() == 3){
                            abril_mes = abril_mes+parseFloat((res.data[1])[i]);
                        }
                        if(newd.getMonth() == 4){
                            maio_mes = maio_mes+parseFloat((res.data[1])[i]);
                        }
                        if(newd.getMonth() == 5){
                            junho_mes = junho_mes+parseFloat((res.data[1])[i]);
                        }
                        if(newd.getMonth() == 6){
                            julho_mes = julho_mes+parseFloat((res.data[1])[i]);
                        }
                        if(newd.getMonth() == 7){
                            agosto_mes = agosto_mes+parseFloat((res.data[1])[i]);
                        }
                        if(newd.getMonth() == 8){
                            setembro_mes = setembro_mes+parseFloat((res.data[1])[i]);
                        }
                        if(newd.getMonth() == 9){
                            outubro_mes = outubro_mes+parseFloat((res.data[1])[i]);
                        }
                        if(newd.getMonth() == 10){
                            novembro_mes = novembro_mes+parseFloat((res.data[1])[i]);
                        }
                        if(newd.getMonth() == 11){
                            dezembro_mes = dezembro_mes+parseFloat((res.data[1])[i]);
                        }
                    }
                }
                
            }
            dados = { janeiro: janeiro_mes, 
                fevereiro: fevereiro_mes, 
                marco: marco_mes, 
                abril: abril_mes, 
                maio: maio_mes, 
                junho: junho_mes, 
                julho: julho_mes, 
                agosto: agosto_mes, 
                setembro: setembro_mes, 
                outubro: outubro_mes, 
                novembro: novembro_mes, 
                dezembro: dezembro_mes
            }
        }
    })
    .catch(error => {
        dados= { janeiro: 0, 
            fevereiro: 0, 
            marco: 0, 
            abril: 0, 
            maio: 0, 
            junho: 0, 
            julho: 0, 
            agosto: 0, 
            setembro: 0, 
            outubro: 0, 
            novembro: 0, 
            dezembro: 0}
    })
    
    return dados 
}
const pagamentos_por_mes = {
    
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro',  'Novembro', 'Dezembro'],
    datasets: [{
        label: 'Pagamentos recebidos por mês R$',
        data: [pesquisa_de_pagamentos().janeiro, pesquisa_de_pagamentos().fevereiro, 
            pesquisa_de_pagamentos().marco, pesquisa_de_pagamentos().abril, pesquisa_de_pagamentos().maio, 
            pesquisa_de_pagamentos().junho, pesquisa_de_pagamentos().julho, 
            pesquisa_de_pagamentos().agosto, pesquisa_de_pagamentos().setembro, 
            pesquisa_de_pagamentos().outubro, pesquisa_de_pagamentos().novembro, 
            pesquisa_de_pagamentos().dezembro],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
}
export default class Planilhas extends Component{
    render(){
        
        return(
            <div>
                <div className="graphbox">
                    <div className="box">
                        <canvas id="myChart2" ></canvas>  
                    </div>
                    <div className="box">
                        <Bar data={pagamentos_por_mes} 
                            options= {{
                                scales: {
                                    y: {
                                        beginAtZero: true
                                    }
                                }}
                            }/>
                    </div>
                </div>
                <div className="graphbox2">
                    <div className="box">
                        <canvas id="myChart3" ></canvas>  
                    </div>
                    <div className="box">
                        <canvas id="myChart4" ></canvas>
                    </div>
                    <div className="box">
                        <canvas id="myChart5" ></canvas>
                    </div>
                </div>
            </div>
        )
    }
}