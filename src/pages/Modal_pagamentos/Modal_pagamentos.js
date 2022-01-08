import React, {Component} from "react";
import axios from "axios";
import '../Modal_pagamentos/Modal_pagamentos.css'
import { apis } from "../../caminho_api.mjs";
export default class Modal_pagamentos extends Component{
    constructor(props){
        super(props)
        this.state = {
            nome:'',


            pagamentos_mostrar: this.props.exibir,
            preferido: 'Nenhum',
            ranking_pag: "Sem pagamentos",
            resultado: [],
            novo_pag: 'novo-input',
            
            valor_novo_input: '',
            data_novo_input: '',
            tipo_novo_input: '',
            procedimento_novo_input:''
        }
        this.pesquisar_pagamentos = this.pesquisar_pagamentos.bind(this)
        this.modal_novo_pagamento = this.modal_novo_pagamento.bind(this)
        this.inserir_novoPagamento = this. inserir_novoPagamento.bind(this)
        this.mascara_valor = this.mascara_valor.bind(this)
        this.fecharmodal = this.fecharmodal.bind(this)
    }
    componentWillReceiveProps(props){
        this.pesquisar_pagamentos(props.id)
        console.log(props)
    }
    fecharmodal(){
        this.setState({ranking_pag: "Sem pagamentos"})
        this.setState({preferido: "Nenhum"})        
        this.setState({novo_pag:'novo-input'})
        this.props.executar('modal-pag')
    }
    modal_novo_pagamento(){
        this.setState({novo_pag:'novo-input mostrar'})
    }
    pesquisar_pagamentos(ident){
        const Axios = axios.create({
            baseURL: apis
        })
        Axios.post('pagamentos.php', {id: ident})
        .then(res => {
            if(res.data == '1' || res.data == '2'){
                this.setState({resultado: <h3 className="s-pag">Sem pagamentos encontrados</h3>})
                this.setState({preferido: "Nenhum"})
                this.state({ranking_pag: "Sem pagamentos"})
            }
            else{
                var debito = 0;
                var credito = 0;
                var credito_p = 0;
                var avista = 0;
                var boleto = 0;
                var cheque = 0;
                var tipo_de_pagamento = ['Debito', 'Credito', 'Credito parcelado', 'A vista' , 'Boleto', 'Cheque']
                var total = [];
                this.setState({resultado: []})
                var lista_de_pagamentos= [];
                var list = []
                for(var i=0; i< (res.data[0]).length; i++){

                    if((res.data[3])[i] =="debito"){
                        debito++;
                    }
                    if((res.data[3])[i] =="credito"){
                        credito =credito+1 ;
                    }
                    if((res.data[3])[i] =="credito-parcelado"){
                        credito_p++;
                    }
                    if((res.data[3])[i] =="a-vista"){
                        avista++;
                    }
                    if((res.data[3])[i] =="boleto"){
                        boleto++;
                    }
                    if((res.data[3])[i] =="cheque"){
                        cheque++;
                    }
                    list = this.state.resultado.concat(<div className='pag-enc' >
                                                    <h3 className='pag-nome'>{(res.data[4])[i]}</h3>
                                                    <h3>{(res.data[1])[i]}</h3>
                                                    <h3>R$ {(res.data[2])[i]}</h3>
                                                </div>)
                    this.setState({resultado: list})
                }
                total.push(debito, credito, credito_p, avista, boleto, cheque);
                var maior = Math.max.apply(null, total);
                this.setState({preferido: tipo_de_pagamento[total.indexOf(maior)]})
                this.setState({ranking_pag: "º"+res.data[5]+" lugar"})
            }
        })
        .catch( error => {
            this.setState({pag: <h3 className="s-pag" >Sem pagamentos encontrados. Recarrege a página</h3>})
        })
    }
    mascara_valor(e){
        e = e.replace(/\D/g, "")
        e = e.replace(/(\d)(\d{2})$/, "$1,$2")
        e = 'R$ ' + e.replace(/(?=(\d{3})+(\D))\B/g, ".")
        this.setState({valor_novo_input:e})
    }
    inserir_novoPagamento(i, name){
        var val = this.state.valor_novo_input
        val = val.replace("R$ ", "")
        val = val.replace(".", "")
        val = val.replace(",", ".")
        val = parseFloat(val)
        const Axios = axios.create({
            baseURL:apis
        })
        Axios.post('adicionar_pagamento.php', {id: i,  
                                                data: this.state.data_novo_input,
                                                valor: val,  
                                                tipo: this.state.tipo_novo_input,
                                                nome: name,
                                                procedimento: this.state.procedimento_novo_input})
        .then(res => {
            if(res.data == '1'){
                this.setState({novo_pag: 'novo-input'})
                this.pesquisar_pagamentos(i)
            }
            else{

            }
        })
    }
    render(){
        return(<div className={this.props.exibir}  >
                    <div className="modal">
                        <h2>Pagamentos {this.props.id}</h2>
                        <div className='pp'>
                            <h3>Tipo de Pagamento preferido:  </h3>
                            <h3 className='pref_p'>{this.state.preferido}</h3>
                        </div>
                        <div className='pp'>
                            <h3>Ranking de pagamento: </h3>
                            <h3 className='ranking_pagamento'>{this.state.ranking_pag} </h3>
                        </div>
                        <p className="preencha">Lista de pagamentos</p>
                        <div className="pag-conteiner">
                            <div className="pag-titulo">
                                <h3>Procedimento</h3>
                                <h3>Data</h3>
                                <h3>Valor</h3>
                            </div>
                            <div className="pag-list">
                               {this.state.resultado}
                            </div>
                        </div>
                        <div className={this.state.novo_pag}>
                            <input className="submit" type='text' value={this.state.valor_novo_input}  onChange={(event) => this.mascara_valor(event.target.value)} placeholder="Valor"/>
                            <input className="submit-data" onChange={(event) => this.setState({data_novo_input:event.target.value})} type="date"/>
                            <input className='pro'  onChange={(event) => this.setState({procedimento_novo_input:event.target.value})}placeholder="Nome do procedimento"/>
                            <select id="tipo" onChange={(event) => this.setState({tipo_novo_input:event.target.value})} className="from_pag">
                                <option value="debito">Débito</option>
                                <option value="credito">Crédito</option>
                                <option value="credito-parcelado">Crédito Parcelado</option>
                                <option value="a-vista">A Vista</option>
                                <option value="boleto">Boleto</option>
                                <option value="cheque">Cheque</option>
                            </select>
                            <button className="" onClick={(event) => this.inserir_novoPagamento(this.props.id, this.props.nome)}>Inserir</button>
                        </div>
                        <div className="botoes">
                            <div className="botao-sim">
                                <button className="add" name="sim" value="Sim" onClick={this.modal_novo_pagamento}>Novo pagamento</button>
                            </div>
                            <div className="botao-nao">
                                <button className="nao" name="nao" value="Não" onClick={(event) =>this.fecharmodal()}>Fechar</button>
                            </div>
                        </div>
                    </div>
                </div>)
    }
}