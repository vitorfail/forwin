import React, {Component} from "react";
import axios from "axios";
import '../Modal_pagamentos/Modal_pagamentos.css'

export default class Modal_pagamentos extends Component{
    constructor(props){
        super(props)
        this.state = {
            pagamentos_mostrar: this.props.exibir
        }
    }

    render(){
        return(<div className={this.props.exibir}  >
                    <div className="modal">
                        <h2>Pagamentos</h2>
                        <div className='pp'>
                            <h3>Tipo de Pagamento preferido:  </h3>
                            <h3 className='pref_p'>Nenhum</h3>
                        </div>
                        <div className='pp'>
                            <h3>Ranking de pagamento:  </h3>
                            <h3 className='ranking_pagamento'>0</h3>
                        </div>
                        <p className="preencha">Lista de pagamentos</p>
                        <div className="pag-conteiner">
                            <div className="pag-titulo">
                                <h3>Procedimento</h3>
                                <h3>Data</h3>
                                <h3>Valor</h3>
                            </div>
                            <div className="pag-list">
                                <h3 className="s-pag" >Sem pagamentos encontrados</h3>
                            </div>
                        </div>
                        <div className="novo-input">
                            <input className="submit" type='text' placeholder="Valor"/>
                            <input className="submit-data" type="date"/>
                            <input className='pro' placeholder="Nome do procedimento"/>
                            <select id="tipo" className="from_pag">
                                <option value="debito">Débito</option>
                                <option value="credito">Crédito</option>
                                <option value="credito-parcelado">Crédito Parcelado</option>
                                <option value="a-vista">A Vista</option>
                                <option value="boleto">Boleto</option>
                                <option value="cheque">Cheque</option>
                            </select>
                            <button className="" onClick='pagamentos_efetuados()'>Inserir</button>
                        </div>
                        <div className="botoes">
                            <div className="botao-sim">
                                <button className="add" name="sim" value="Sim" onClick='inserir_pagamento()'>Novo pagamento</button>
                            </div>
                            <div className="botao-nao">
                                <button className="nao" name="nao" value="Não" onClick={(event) =>this.props.executar('modal-pag')}>Fechar</button>
                            </div>
                        </div>
                    </div>
                </div>)
    }
}