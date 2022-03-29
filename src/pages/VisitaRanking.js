
import React, {Component} from 'react';
import Barralateral from '../components/Barralateral/Barralateral';
import BarradePesquisa from '../components/BarradePesquisa/BarradePesquisa';
import Blocos from '../components/Blocos/Blocos'
import Loading from '../components/Loading/Loading';
import RVisitas from '../components/RVisitas/RVisitas';
import Coockie from '../components/Coockie/Coockie';
import Axios from '../Axios.js';
import Tema from '.././Tema'

export default class VisitaRanking extends Component{
    constructor(){
        super()
        this.state = {
            politicas:true,
            isLoading: true
        }
        this.pesquisar_politicas = this.pesquisar_politicas.bind(this)
    }
    componentDidMount(){
        Tema()
       this.pesquisar_politicas()
       this.setState({isLoading: false})
    }
    pesquisar_politicas(){
        Axios.post('index.php?url=politicasprivacidade/pesquisa')
        .then(res => {
            if(res.data.data === '2'){
                
            }
            else{
                if(res.data.data === true){
                    this.setState({politicas: true})
                }
                if(res.data.data === false){
                    this.setState({politicas: false})
                }
            }
        })
    }
    render(){
        return(this.state.isLoading? <Loading></Loading>: <div>
                <Barralateral></Barralateral>
                <div className="barra">
                    <BarradePesquisa></BarradePesquisa>
                    <div className="conteudo">
                        <Blocos></Blocos>
                        <div className="conteudo-2">
                            <RVisitas></RVisitas>
                        </div>
                    </div>
                </div>
                <Coockie politicas={this.state.politicas}></Coockie>
            </div>
        )
    }
}