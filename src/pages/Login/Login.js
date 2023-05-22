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
    const settoken = (t) => {
        localStorage.setItem('token_jwt', t);
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
            Axios.post('api/auth/login', {user: usuario, password: senha})
            .then(res =>{
                if(res.data.data === 'Operação inválida' || res.data.data === "Usuário não encontrado"){
                    setdarespaco('espaco')
                    setlogando('');
                    setmostrar('aviso')
                    setTimeout(() =>  setmostrar('aviso mostrar'), 30);        
                }
                else{
                    settoken(res.data.data)
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
                                <div className={'dot '+logando}></div>
                                <div className={'dot '+logando}></div>
                                <div className={'dot '+logando}></div>
                                <div className={'dot '+logando}></div>
                                <div className={'dot '+logando}></div>
                                <div className={'dot '+logando}></div>
                                <div className={'dot '+logando}></div>
                                <div className={'dot '+logando}></div>
                                <div className={'dot '+logando}></div>
                                <div className={'dot '+logando}></div>
                                <div className={'dot '+logando}></div>
                                <div className={'dot '+logando}></div>
                            </div>
                            <h3 className={mostrar}>{conteudoError}</h3>
                            <input name= 'usuario' className={logando} onKeyPress={entrar} onChange={(event) => setusuario(event.target.value)} placeholder='Usuario'/>
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