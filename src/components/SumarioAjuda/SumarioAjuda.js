import React, {Component} from 'react'
import './SumarioAjuda.css'

export default class SumarioAjuda extends Component{

    render(){
        return(<div className='sumario'>
            <h3 className='titulo'>Ajuda</h3>
            <h3>Sumário</h3>
            <h3 className='primeiro'>1. Barra de Pesquisa</h3>
            <h3 className='segundo'>1.1 Pesquisa por nome</h3>
            <h3 className='segundo'>1.2 Adicionar conta</h3>
            <h3 className='segundo'>1.3 Mudar nome</h3>
            <h3 className='segundo'>1.4 Mudar tema</h3>
            <h3 className='primeiro'>2. Barra lateral</h3>
            <h3 className='primeiro'>3. Página - Home</h3>
            <h3 className='primeiro'>4. Página - Planilhas</h3>
            <h3 className='primeiro'>5. Página - Cadastro</h3>
            <h3 className='primeiro'>6. Página - DRE</h3>
            <h3 className='primeiro'>7. Página - Ajuda</h3>
            <h3 className='primeiro'>8. Página - Pesquisa</h3>
            <h3 className='primeiro'>9. Página - Aniversariantes</h3>
            <h3 className='primeiro'>10. Página - Pagamentos do mês</h3>
            <h3 className='primeiro'>11. Página - Ranking pagamento</h3>
            <h3 className='primeiro'>12. Página - Ranking visitas</h3>
            <h3 className='primeiro'>1. Barra de Pesquisa</h3>
            <p>A barra de pesquisa é um item que contém 4 funções. Pesquisa de clientes, Lançamentos de contas, troca de informações do usuário e troca de temas do usuário. </p>
            <h3 className='segundo'>1.1 Pesquisa por nome</h3>
            <p>Para pesquisa o nome de um cliente é necessário digitar o nome que procura dentro da caixa de texto e apertar em enter ou na lupa. Se não escrever nada 
                dentro o sistema irá mestrar todos os clientes já cadastrados. Ao pesquisar você ser encaminhado para a <string>8. Página - Pesquisa</string> </p>
            <h3 className='segundo'>1.2 Adicionar conta</h3>
            <p>Para pesquisa o nome de um cliente é necessário digitar o nome que procura dentro da caixa de texto e apertar em enter ou na lupa. Se não escrever nada 
                dentro o sistema irá mestrar todos os clientes já cadastrados. Ao pesquisar você ser encaminhado para a <string>8. Página - Pesquisa</string> </p>

        </div>)
    }
}