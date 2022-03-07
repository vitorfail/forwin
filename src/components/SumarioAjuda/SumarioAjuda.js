import React, {Component} from 'react'
import './SumarioAjuda.css'

export default class SumarioAjuda extends Component{

    render(){
        return(<div className='sumario'>
            <h1 className='titulo'>Ajuda</h1>
            <h1>Sumário</h1>
            <h2 className='primeiro'>1. Barra de Pesquisa</h2>
            <h2 className='segundo'>1.1 Pesquisa por nome</h2>
            <h2 className='segundo'>1.2 Adicionar conta</h2>
            <h2 className='segundo'>1.3 Mudar nome</h2>
            <h2 className='segundo'>1.4 Mudar tema</h2>
            <h2 className='primeiro'>2. Barra lateral</h2>
            <h2 className='primeiro'>3. Página - Home</h2>
            <h2 className='primeiro'>4. Página - Planilhas</h2>
            <h2 className='primeiro'>5. Página - Cadastro</h2>
            <h2 className='primeiro'>6. Página - DRE</h2>
            <h2 className='primeiro'>7. Página - Ajuda</h2>
            <h2 className='primeiro'>8. Página - Pesquisa</h2>
            <h2 className='primeiro'>9. Página - Aniversariantes</h2>
            <h2 className='primeiro'>10. Página - Pagamentos do mês</h2>
            <h2 className='primeiro'>11. Página - Ranking pagamento</h2>
            <h2 className='primeiro'>12. Página - Ranking visitas</h2>
        </div>)
    }
}