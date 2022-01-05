
import React, {Component} from 'react';
import Barralateral from './Barralateral/Barralateral';
import Barra_de_Pesquisa from './Barra_de_pesquisa/Barra_de_pesquisa';
import Blocos from './Blocos/Blocos';
import Contas_do_mes from './Contas_do_mes/Contas_do_mes';
import Clientes_recentes from './Clientes_recentes/Clientes_recentes';
import Ranking_pagamentos from './Ranking_pagamento/Ranking_pagamento';
import Ranking_visitas from './Ranking_visitas/Ranking_visitas';
import Loading from './Loading/Loading';
export default class Home extends Component{
    constructor(){
        super()
        this.state = {
            showModalPopup: false  
        }
    }
    isShowPopup = (status) => {  
        this.setState({ showModalPopup: status });  
    }; 
    render(){
        return(
            <div>
                <Barralateral></Barralateral>
                <div className="barra">
                    <Barra_de_Pesquisa></Barra_de_Pesquisa>
                    <div className="conteudo">
                        <Blocos></Blocos>
                        <div className="conteudo-2">
                            <Clientes_recentes></Clientes_recentes>
                            <Contas_do_mes></Contas_do_mes>
                            <Ranking_pagamentos></Ranking_pagamentos>
                            <Ranking_visitas></Ranking_visitas>
                        </div>
                    </div>
                </div>
                <Loading></Loading>
            </div>
        )
    }
}