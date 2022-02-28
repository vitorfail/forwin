import React, {Component} from "react";
import axios from "axios";
import './ModalPagamentos.css'
import { apis } from "../../caminho_api.mjs";
import pdf from '../../icones/pdf.png'
import jsPDF from "jspdf"; 
export default class ModalPagamentos extends Component{
    constructor(props){
        super(props)
        this.state = {
            nome:'',


            pagamentos_mostrar: this.props.exibir,
            preferido: 'Nenhum',
            ranking_pag: "Sem pagamentos",
            resultado: [],
            novo_pag: 'novo-input',
            preencha: 'preencha',
            valor_novo_input: '',
            data_novo_input: '',
            tipo_novo_input: '',
            procedimento_novo_input:''
        }
        this.pesquisar_pagamentos = this.pesquisar_pagamentos.bind(this)
        this.modal_novo_pagamento = this.modal_novo_pagamento.bind(this)
        this.inserir_novoPagamento = this.inserir_novoPagamento.bind(this)
        this.mascara_valor = this.mascara_valor.bind(this)
        this.fecharmodal = this.fecharmodal.bind(this)
    }
    componentWillReceiveProps(props){
        this.pesquisar_pagamentos(props.id)
    }
    fecharmodal(){
        this.setState({ranking_pag: "Sem pagamentos"})
        this.setState({preferido: "Nenhum"})        
        this.setState({novo_pag:'novo-input'})
        this.setState({preencha: "preencha"})
        this.props.executar('modal-pag')
    }
    modal_novo_pagamento(){
        this.setState({novo_pag:'novo-input mostrar'})
    }
    pesquisar_pagamentos(ident){
        const Axios = axios.create({
            baseURL: apis
        })
        Axios.post('index.php?url=pagamentos/pesquisa', {id: ident} ,{headers: {
            "Authorization": "Bearer "+ localStorage.getItem('token_jwt')}})
        .then(res => {
            if(res.data.data === '1' || res.data.data === '2'){
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
                var list = []
                for(var i=0; i< (res.data.data[0]).length; i++){

                    if((res.data.data[3])[i] ==="debito"){
                        debito++;
                    }
                    if((res.data.data[3])[i] ==="credito"){
                        credito =credito+1 ;
                    }
                    if((res.data.data[3])[i] ==="credito-parcelado"){
                        credito_p++;
                    }
                    if((res.data.data[3])[i] ==="a-vista"){
                        avista++;
                    }
                    if((res.data.data[3])[i] ==="boleto"){
                        boleto++;
                    }
                    if((res.data.data[3])[i] ==="cheque"){
                        cheque++;
                    }
                    list = this.state.resultado.concat(<div className='pag-enc' >
                                                    <h3 className='pag-nome'>{(res.data.data[4])[i]}</h3>
                                                    <h3>{(res.data.data[1])[i]}</h3>
                                                    <h3>R$ {(res.data.data[2])[i]}</h3>
                                                    <img onClick={() => this.gerar_nota()} alt="Nota" src={pdf}/>
                                                </div>)
                    this.setState({resultado: list})
                }
                total.push(debito, credito, credito_p, avista, boleto, cheque);
                var maior = Math.max.apply(null, total);
                this.setState({preferido: tipo_de_pagamento[total.indexOf(maior)]})
                this.setState({ranking_pag: "º"+res.data.data[5]+" lugar"})
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
        if(this.state.data_novo_input === ''|| val===  '' ||this.state.tipo_novo_input === '' || name === '' || this.state.procedimento_novo_inpu === ''){
            this.setState({preencha: "preencha mostrar"})
        }
        else{
            const Axios = axios.create({
                baseURL:apis
            })
            Axios.post('index.php?url=adicionarpagamento/pesquisa', {id: i,  
                                                    data: this.state.data_novo_input,
                                                    valor: val,  
                                                    tipo: this.state.tipo_novo_input,
                                                    nome: name,
                                                    procedimento: this.state.procedimento_novo_input} ,{headers: {
                                                        "Authorization": "Bearer "+ localStorage.getItem('token_jwt')}})
            .then(res => {
                if(res.data.data === '1'){
                    this.setState({novo_pag: 'novo-input'})
                    this.pesquisar_pagamentos(i)
                }
                else{
    
                }
            })
        }
    }
    gerar_nota(){
        let cnpj_vendedor = "000.0000.00000"
        let cnpj_pagador = "000.0000.00000"
        let nome_vendedor = "TRIPLEX DE NILFIGARD"
        let nome_pagador = "JOÃO DA SILVA"

        let doc = new jsPDF()
        let d = new Date()
        let mes = (d.getMonth()+1).toString() 
        let mesf = (mes.length == 1) ? '0'+mes : mes;
        let data = d.getDate()+'/'+mesf+'/'+d.getFullYear()
        let hora = d.getHours()
        let minutos = d.getMinutes()
        let segundos = d.getSeconds()
        let horario = hora+':'+minutos+':'+segundos
        doc.setFont("Times-Bold")
        doc.setFontSize(30);
        doc.text(75, 20, "NOTA FISCAL");
        ///Barra superior//////////////////////////////////////
        doc.setLineWidth(1); 
        doc.line(0.5, 0.6, 220, 0.6);
        ///Barra superior-2//////////////////////////////////////
        doc.setLineWidth(1); 
        doc.line(0.5, 30, 220, 30);
        ///Barra direita//////////////////////////////////////
        doc.setLineWidth(1); 
        doc.line(209.3, 1, 209.3, 350);
        ///Barra inferior//////////////////////////////////////
        doc.setLineWidth(1); 
        doc.line(0.5, 296.3, 320, 296.3);
        ///Barra esquerda//////////////////////////////////////
        doc.setLineWidth(1); 
        doc.line(0.7, 0.1, 0.7, 350);
        ///Barra esquerda data//////////////////////////////////////
        doc.setLineWidth(0.5); 
        doc.line(160, 1, 160, 30);
        ///Data//////////////////////////////////////////////////
        doc.setFontSize(12);
        doc.text(170, 16, "Data de emissão");
        doc.setFont("Times-Bold", 'bold')
        doc.setFontSize(12);
        doc.text(170, 20, data);
        doc.setFontSize(12);
        doc.text(190, 20, horario);
        ///Vendedor///////////////////////////////////////////
        doc.setFontSize(14);
        doc.text(100, 35, "VENDEDOR");
        ///CNPJ Vendedor///////////////////////////////////////////
        doc.setFont("Times-Bold", 'normal')
        doc.setFontSize(12);
        doc.text(10, 40, "CPF/CNPJ:");
        doc.setFont("Times-Bold", 'bold')
        doc.setFontSize(12);
        doc.text(30, 40, cnpj_vendedor);
        ///Nome vendedor/////////////////////////////////////////
        doc.setFont("Times-Bold", 'normal')
        doc.setFontSize(12);
        doc.text(10, 46, "Nome/Razão social:");
        doc.setFont("Times-Bold", 'bold')
        doc.setFontSize(12);
        doc.text(45, 46, nome_vendedor);





        doc.save("notafiscal-"+data+".pdf")

    }
    render(){
        return(<div className={this.props.exibir}  >
                    <div className="modal">
                        <h2>Pagamentos de {this.props.nome}</h2>
                        <div className='pp'>
                            <h3>Tipo de Pagamento preferido:  </h3>
                            <h3 className='pref_p'>{this.state.preferido}</h3>
                        </div>
                        <div className='pp'>
                            <h3>Ranking de pagamento: </h3>
                            <h3 className='ranking_pagamento'>{this.state.ranking_pag} </h3>
                        </div>
                        <p className={this.state.preencha}>Lista de pagamentos</p>
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