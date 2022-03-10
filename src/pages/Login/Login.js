import { useState} from 'react';
import Axios from '../../Axios.js';
import './Login.css';
import './Login.scss';
import { useHistory} from 'react-router-dom';


function Login(){
    const [senha, setsenha] = useState(null);
    const [usuario, setusuario] = useState(null);
    const [ mostrar, setmostrar] = useState('aviso');
    const [conteudoError, setconteudoError] = useState('Usuário ou senha incorretos')
    const history = useHistory();
    const [ logando, setlogando] = useState('');
    const [darespaco, setdarespaco] = useState('');
    const [ tema, settema] = useState('temapadrao')
    const settoken = (t) => {
        localStorage.setItem('token_jwt', t);
    }

    function puxar_nome(){
        Axios.post('index.php?url=dadosuser/pesquisa', )
        .then(res =>{
            if(res.data.data === '1'){

            }
            if(res.data.data === "Usuário não autenticado"){
            }
            else{
                settema(res.data.data[5])
                if(tema === 'temapadrao'){
                    let html = document.querySelector('html');
                    html.className = "tema-padrao";
                }
                if(tema === 'temaazul'){
                    let html = document.querySelector('html');
                    html.className = "tema-azul";
                }
                if(tema === 'temalaranja'){
                    let html = document.querySelector('html');
                    html.className = "tema-laranja";
                }
                if(tema === 'temaroxo'){
                    let html = document.querySelector('html');
                    html.className = "tema-roxo";
                }
            } 
        })
        .catch(error => {
        })
    }
    function login_func(){
        if(senha === null || usuario === null || senha === '' || usuario === ''){
            setconteudoError('Preencha a senha e o usuário')
            setdarespaco('espaco')
            setlogando('');
            setmostrar('aviso')
            setTimeout(() =>  setmostrar('aviso mostrar'), 4);
        }
        else{
            setdarespaco('')
            setlogando('logando');
            setmostrar('aviso')
            Axios.post('index.php?url=auth/login', {user: usuario, password: senha})
            .then(res =>{
                if(res.data.data === 'Operação inválida' || res.data.data === "Usuário não encontrado"){
                    setdarespaco('espaco')
                    setlogando('');
                    setmostrar('aviso')
                    setTimeout(() =>  setmostrar('aviso mostrar'), 30);        
                }
                else{
                    settoken(res.data.data)
                    puxar_nome()
                    setTimeout(() =>{ 
                                        history.push('/')
                                    }, 3000);
                }
            })
            .catch(error => {
                setconteudoError('Verifique sua internet e tente novamente')
                setdarespaco('espaco')
                setlogando('');
                setmostrar('aviso')
                setTimeout(() =>  setmostrar('aviso mostrar'), 30);    
            })    
        }
    }
    function entrar(event){
        if(event.key === "Enter" || event.key === 13){
            login_func()
        }
    }
    return(
        <div>
            <div className='back'>
                <div className='form'>
                    <div className='entrada'>
                        <div className= 'input'>
                            <div className='title'>
                                <h1 className={logando}>Login</h1>
                            </div>
                            <div className={'loader '+darespaco} >
                                <di className={'dot '+logando}></di>
                                <di className={'dot '+logando}></di>
                                <di className={'dot '+logando}></di>
                                <di className={'dot '+logando}></di>
                                <di className={'dot '+logando}></di>
                                <di className={'dot '+logando}></di>
                                <di className={'dot '+logando}></di>
                                <di className={'dot '+logando}></di>
                                <di className={'dot '+logando}></di>
                                <di className={'dot '+logando}></di>
                                <di className={'dot '+logando}></di>
                                <di className={'dot '+logando}></di>
                            </div>
                            <h3 className={mostrar}>{conteudoError}</h3>
                            <input className={logando} onKeyPress={entrar} onChange={(event) => setusuario(event.target.value)} placeholder='Usuario'/>
                            <input type='password' className={logando} name='senha' onKeyPress={entrar} onChange={(event) => setsenha(event.target.value)} placeholder='Senha'/>
                            <button name='entrar' onClick={(event) =>login_func() } >Entrar</button>
                        </div>
                    </div>
                <div className='direitos'>
                    <p>@Todos os direitos reservados a Vitor Manoel</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;