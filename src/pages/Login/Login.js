import { useState} from 'react';
import axios from 'axios';
import {apis} from '../../caminho_api.mjs';
import './Login.css';
import './Login.scss';
import { useHistory} from 'react-router-dom';


function Login(){
    const [senha, setsenha] = useState(null);
    const [usuario, setusuario] = useState(null);
    const [ mostrar, setmostrar] = useState('aviso');
    const history = useHistory();
    const [ logando, setlogando] = useState('');
    const [darespaco, setdarespaco] = useState('');
    const settoken = (t) => {
        localStorage.setItem('token_jwt', t);
    }

    function login_func(){
        const Axios = axios.create({
            baseURL:apis
        })
        if(senha === null || usuario === null || senha === '' || usuario === ''){
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
                    setdarespaco('espaco');
                    setmostrar('aviso mostrar');
                }
                else{
                    settoken(res.data.data)
                    setlogando('logando');
                    setTimeout(() =>{ 
                                        history.push('/')
                                    }, 3000);
                }
            })
            .catch(error => {
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
                            <h3 className={mostrar}>Usuário ou senha incorretos</h3>
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