import { Component } from "react/cjs/react.development";
import axios from "axios";
import { apis } from "../../caminho_api.mjs";
import '../Planilhas/Planilhas.css';
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';;
function pesquisa_de_pagamentos(){
    var dados = {}
    const Axios = axios.create({
        baseURL:apis
    })
    Axios.post("pagamentos.php")
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
            var janeiro = 0;
            var fevereiro = 0;
            var marco = 0;
            var abril = 0;
            var maio = 0;
            var junho = 0;
            var julho = 0;
            var agosto = 0;
            var setembro = 0;
            var outubro = 0;
            var novembro = 0;
            var dezembro = 0;
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
                            janeiro = janeiro+parseFloat((res.data[1])[i]);
                        }
                        if(newd.getMonth() == 1){
                            fevereiro = fevereiro+parseFloat((res.data[1])[i]);
                        }
                        if(newd.getMonth() == 2){
                            marco = marco+parseFloat((res.data[1])[i]);
                        }
                        if(newd.getMonth() == 3){
                            abril = abril+parseFloat((res.data[1])[i]);
                        }
                        if(newd.getMonth() == 4){
                            maio = maio+parseFloat((res.data[1])[i]);
                        }
                        if(newd.getMonth() == 5){
                            junho = junho+parseFloat((res.data[1])[i]);
                        }
                        if(newd.getMonth() == 6){
                            julho = julho+parseFloat((res.data[1])[i]);
                        }
                        if(newd.getMonth() == 7){
                            agosto = agosto+parseFloat((res.data[1])[i]);
                        }
                        if(newd.getMonth() == 8){
                            setembro = setembro+parseFloat((res.data[1])[i]);
                        }
                        if(newd.getMonth() == 9){
                            outubro = outubro+parseFloat((res.data[1])[i]);
                        }
                        if(newd.getMonth() == 10){
                            novembro = novembro+parseFloat((res.data[1])[i]);
                        }
                        if(newd.getMonth() == 11){
                            dezembro = dezembro+parseFloat((res.data[1])[i]);
                        }
                    }
                }
                
            }
            dados = { janeiro, 
                fevereiro, 
                marco, 
                abril, 
                maio, 
                junho, 
                julho, 
                agosto, 
                setembro, 
                outubro, 
                novembro, 
                dezembro
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