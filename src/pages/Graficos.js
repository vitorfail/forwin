
import React, {Component} from 'react';
import Barralateral from '../components/Barralateral/Barralateral';
import BarradePesquisa from '../components/BarradePesquisa/BarradePesquisa';
import Planilhas from '../components/Planilhas/Planilhas';
import Loading from '../components/Loading/Loading';
import Blocos from '../components/Blocos/Blocos'
import Coockie from '../components/Coockie/Coockie';
import Axios from '../Axios';


export default class Graficos extends Component{
    constructor(){
        super()
        this.state = {
            politicas:true,
            isLoading: true,
            numero_clientes:  'Sem clientes',
            aniversariantes: '0',
            valor_do_mes: 'R$ 0,00',
        }
        this.pesquisar_politicas = this.pesquisar_politicas.bind(this)
    }
    componentDidMount(){
        
       this.pesquisar_politicas()
    }
    pesquisar_politicas(){
        Axios.post('api/politicasprivacidade')
        .then(res => {
            if(res.data.data === '2'){
                
            }
            else{
                this.setState({numero_clientes:res.data.qtd})
                this.setState({aniversariantes:res.data.aniver})
                this.setState({valor_do_mes:res.dat.pagamentosmes})
                if(res.data.politicasprivacidade === true){
                    this.setState({politicas: true})
                }
                if(res.data.politicasprivacidade === false){
                    this.setState({politicas: false})
                }
                this.setState({isLoading: false})
            }
        })
    }
    render(){
        return(this.state.isLoading? <Loading></Loading>: <div>
                <Barralateral focus={'label1'}></Barralateral>
                <div className="barra">
                    <BarradePesquisa></BarradePesquisa>
                    <div className="conteudo">
                        <Blocos numero_clientes={this.state.numero_clientes} aniversariantes={this.state.aniversariantes} valor_do_mes={this.state.valor_do_mes}></Blocos>
                        <div className="conteudo-2">
                            <Planilhas></Planilhas>
                        </div>
                    </div>
                </div>
                <Coockie politicas={this.state.politicas}></Coockie>
            </div>
        )
    }
}