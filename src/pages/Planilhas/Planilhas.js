import { Component } from "react/cjs/react.development";
import axios from "axios";
import { apis } from "../../caminho_api.mjs";
import '../Planilhas/Planilhas.css';
import { Bar, PolarArea, Doughnut } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import { useEffect, useState } from "react";



export default class Planilhas extends Component{
    constructor(){
        super()
        this.state ={
            janeiro: 0,
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
            dezembro: 0,

            label1: 'Nenhum',
            label2: 'Nenhum',
            label3: 'Nenhum',
            label4: 'Nenhum',
            label5: 'Nenhum',
            label1: 'Nenhum',
            variacao1: 1,
            variacao2: 1,
            variacao3: 1,
            variacao4: 1,
            variacao5: 1,

            viuva:0,
            casada:0,
            solteira:0,
            divorciada:0,

        }
        this.pesquisa_de_pagamentos = this.pesquisa_de_pagamentos.bind(this)
        this.pesquisa_idades = this.pesquisa_idades.bind(this)
        this.pesquisa_estado_civil = this.pesquisa_estado_civil.bind(this)
    }
    componentWillMount(){
        this.pesquisa_de_pagamentos()
        this.pesquisa_idades()
        this.pesquisa_estado_civil()
    }
    pesquisa_idades(){
        const Axios = axios.create({
            baseURL:apis
        })
        Axios.get('idades.php')
        .then(res =>{
           if(res.data == '1'){

           }
           else{
                var idade = res.data;
                var min = Math.min.apply(Math, idade)
                var max = Math.max.apply(Math, idade)
                var fre = Math.round((max-min)/ 5);
                var count1= 0;
                var count2= 0;
                var count3= 0;
                var count4= 0;
                var count5= 0;
                for(var i=0; i<idade.length; i++){
                    if(idade[i] <= (min +fre)){
                        count1++;
                    }
                    if(idade[i] <= (min+ (2*fre)) && idade[i] > (min +fre)){
                        count2++;
                    }
                    if(idade[i] <= (min+ (3*fre)) && idade[i] > (min+ (2*fre))){
                        count3++;
                    }
                    if(idade[i] <= (min+ (4*fre)) && idade[i] > (min+ (3*fre))){
                        count4++;
                    }                        
                    if(idade[i] <= (min+ (5*fre)) && idade[i] > (min+ (4*fre))){
                        count5++;
                    }
                }
                this.setState({label1: min.toString()+"--"+ (min +fre).toString() +'Anos'})
                this.setState({label2: (min + fre).toString()+"--"+(min + (2*fre)).toString() +'Anos'})
                this.setState({label3: (min + (2*fre)).toString()+"--"+(min + (3*fre)).toString() +'Anos'})
                this.setState({label4: (min + (3*fre)).toString()+"--"+(min + (4*fre)).toString() +'Anos'})
                this.setState({label5: (min + (4*fre)).toString()+"--"+(min + (5*fre)).toString() +'Anos'})
                this.setState({variacao1: count1})
                this.setState({variacao2: count2})
                this.setState({variacao3: count3})
                this.setState({variacao4: count4})
                this.setState({variacao5: count5})
           }
        })
        .catch(error => {
            alert("Não foi passivel")
        })
    }
    pesquisa_de_pagamentos(){
        var data_query = new Date()
        const Axios = axios.create({
            baseURL:apis
        })
        Axios.post("pagamentos_mes.php", {ano: data_query.getFullYear().toString(), mes: 'Todos'})
        .then(res => {
            if(res.data == '1' || res.data =='2'){
                this.setState({janeiro: 0});
                this.setState({fevereiro: 0});
                this.setState({marco: 0});
                this.setState({abril: 0});
                this.setState({maio: 0});
                this.setState({junho: 0});
                this.setState({julho: 0});
                this.setState({agosto: 0});
                this.setState({setembro: 0});
                this.setState({outubro: 0});
                this.setState({novembro: 0});
                this.setState({dezembro: 0});
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
                this.setState({janeiro: janeiro_mes});
                this.setState({fevereiro: fevereiro_mes});
                this.setState({marco: marco_mes});
                this.setState({abril: abril_mes});
                this.setState({maio: maio_mes});
                this.setState({junho: junho_mes});
                this.setState({julho: julho_mes});
                this.setState({agosto: agosto_mes});
                this.setState({setembro: setembro_mes});
                this.setState({outubro: outubro_mes});
                this.setState({novembro: novembro_mes});
                this.setState({dezembro: dezembro_mes});
            }
        })
        .catch(error => {
            this.setState({janeiro: 0});
            this.setState({fevereiro: 0});
            this.setState({marco: 0});
            this.setState({abril: 0});
            this.setState({maio: 0});
            this.setState({junho: 0});
            this.setState({julho: 0});
            this.setState({agosto: 0});
            this.setState({setembro: 0});
            this.setState({outubro: 0});
            this.setState({novembro: 0});
            this.setState({dezembro: 0});
        })
    }
    pesquisa_estado_civil(){
        const Axios = axios.create({
            baseURL:apis
        })
        Axios.get("estado_civil.php")
        .then(res => {
            if(res.data == '1'){
                this.setState({viuva:0})
                this.setState({casada:0})
                this.setState({solteira:0})
                this.setState({divorciada:0}) 

            }
            else{
                var solteiro =0
                var casado = 0
                var viuva =0
                var divorciado=0
                for(var i=0; i< res.data.length; i++){
                    if(res.data[i] == 'solteiro'){
                        solteiro = solteiro +1
                    }
                    if(res.data[i] == 'casado'){
                        casado = casado +1
                    }
                    if(res.data[i] == 'viuva' || res.data[i] == 'viuvo'){
                        viuva = viuva +1
                    }
                    if(res.data[i] == 'divorciado'){
                        divorciado = divorciado +1
                    }
                }
                this.setState({viuva:viuva})
                this.setState({casada:casado})
                this.setState({solteira:solteiro})
                this.setState({divorciada:divorciado}) 
            }
        })
    }
    render(){
        return(
            <div>
                <div className="graphbox">
                    <div className="box">
                        <PolarArea data={{labels: [
                                this.state.label1,
                                this.state.label2,
                                this.state.label3,
                                this.state.label4,
                                this.state.label5
                            ],datasets: [{
                                    label: 'Relação das idades ',
                                    data: [this.state.variacao1, 
                                        this.state.variacao2, 
                                        this.state.variacao3, 
                                        this.state.variacao4, 
                                        this.state.variacao5],
                                    backgroundColor: [
                                    'rgb(255, 99, 132)',
                                    'rgb(75, 192, 192)',
                                    'rgb(255, 205, 86)',
                                    'rgb(201, 203, 207)',
                                    'rgb(54, 162, 235)'
                                    ]}]
                                }}/>   
                    </div>
                    <div className="box">
                        <Bar data={{ labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro',  'Novembro', 'Dezembro'],
                                        datasets: [{
                                            label: 'Pagamentos recebidos por mês R$',
                                            data: [this.state.janeiro, this.state.fevereiro, 
                                                this.state.marco, this.state.abril, this.state.maio, 
                                                this.state.junho, this.state.julho, 
                                                this.state.agosto, this.state.setembro, 
                                                this.state.outubro, this.state.novembro, 
                                                this.state.dezembro],
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
                                    }]}} 
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
                        <Doughnut data={{
                            labels: ["Viuvo(a)", "Casado(a)", "Solteiro(a)", "Divorciado(a)"],
                            datasets: [{
                                label: "Estado civil",
                                data: [this.state.viuva, this.state.casada, this.state.solteira, this.state.divorciade],
                                backgroundColor: [ 'rgb(255, 99, 132)',
                                'rgb(54, 162, 235)',
                                'rgb(255, 205, 86)',
                                'rgb(255, 55, 86)']
                            }],
                            hoverOffset: 4
                        }}
                        />
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