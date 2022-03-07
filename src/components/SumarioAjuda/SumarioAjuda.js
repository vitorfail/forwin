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
            <h3 className='primeiro'>11. Página - Contas</h3>
            <h3 className='primeiro'>12. Página - Ranking pagamento</h3>
            <h3 className='primeiro'>13. Página - Ranking visitas</h3>
            <h3 className='primeiro'>1. Barra de Pesquisa</h3>
            <p>A barra de pesquisa é um item que contém 4 funções. <strong>Pesquisa de clientes</strong>, 
            <strong>Lançamentos de contas</strong>, <strong>troca de informações do usuário</strong> 
            e <strong>troca de temas do usuário</strong>. </p>
            <h3 className='primeiro'>1.1 Pesquisa por nome</h3>
            <p>Para pesquisa o nome de um cliente é necessário digitar o nome que procura dentro da caixa de texto e apertar em "enter" ou no símbolo da lupa. Se não escrever nada 
                dentro o sistema irá mostrar todos os clientes já cadastrados até hoje. Ao pesquisar você será encaminhado para a <strong>8. Página - Pesquisa</strong> </p>
            <h3 className='primeiro'>1.2 Adicionar conta</h3>
            <p>Ao clicar no botão aparece uma pequena janela contendo a informações necessárias para poder lançar a dívida.
                 E ao ser lançado ela passa a contar na DRE. Quando lançada, por padrão, ela fica em aberto, mas esse estado pode ser alterado 
                 facilmente na <strong>3. Página - Home</strong> na janela pequena a direita clicando no seletor em azul. É importante saber que a conta só sera lançado quando preencher 
                 o nome e um valor, além de uma data. O valor R$ 00,00 tabmém é aceito. É possivel lançar um conta futura ou até mesmo retroativa. ´
                 Para ver todas as contas mês a mês e ano a ano vá em <strong>11. Página - Contas</strong></p>
            <h3 className='primeiro'>1.3 Mudar nome</h3>
            <p>Para mudar o nome é preciso apartar na letra dentro de um cículo redondo localizada no canto superior direito da barra de pesquisa.
                 A letra dentro do círculo corresponde a primeiro letra do nome que é cadastrado. E esse nopme pode ser alterado clicando no mesmo. 
                Também é possível alterar informações como cnpj, endereço e email. <strong>Atenção</strong>: As informações que são colocadas nesses campos serão a mesmas que sairam na nota fiscal então preencha elas com cuidado. </p>
            <h3 className='primeiro'>1.4 Mudar tema</h3>
            <p>Ainda na janela onde se muda as informaçõs do usário também é possivel mudar o tema do sistema. 
                Essa função é puramente estética e não muda em nada nas funções do sistema. O progrmaa dispões de 4 temas. O azul, roxo, laranja e o padrão(vermelho) </p>
            <h3 className='primeiro'>2. Barra lateral</h3>
            <p>A barra lateral só pode ser vista quando se está o progrmaa no computado ou um tablete de tela grande.
                 Ela se localiza no lados esquerdo e por ela você pode navegar pelas páginas do sistema. Clicando no nome Forwin no canto superior esquerdo você é direcionado para a página 
                 <strong>3. Página - Home</strong> e clicando em sair você riecionado para a tela de login. Quando se está o programa no celular a barra não aparece ela é substituida um 
                 pequeno menu que pode ser acessado clicando em três linhas no canto superior esquerdo</p>

        </div>)
    }
}