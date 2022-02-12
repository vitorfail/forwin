import { useState} from 'react';
import axios from 'axios';
import {apis} from '../../caminho_api.mjs';
import '../Login/Login.css';
import { useNavigate} from 'react-router-dom';


function Login(){
    const [senha, setsenha] = useState('');
    const [usuario, setusuario] = useState('');
    const [ mostrar, setmostrar] = useState('aviso');
    const history = useNavigate();
    const setToken = (t) => {
        localStorage.setItem('token_jwt', t);
    }

    function login_func(){
        const Axios = axios.create({
            baseURL:apis
        })
        Axios.post('index.php?url=auth/login', {user: usuario, password: senha})
        .then(res =>{
            console.log(res.data)
            if(res.data.data === 'Operação inválida' || res.data.data === 'Usuário não encontrado'){
                console.log(res.data)
                setmostrar('aviso mostrar');
            }
            else{
                console.log(res.data);
                setToken(res.data.data);
                history('/');    
            }
        })
        .catch(error => {
            console.log(error)
            setmostrar('aviso mostrar')
        })
    }
    return(
        <div className='back'>
            <div className='form'>
                <div className='entrada'>
                    <div className='input'>
                        <div className='title'>
                            <h1>Login</h1>
                        </div>
                        <h3 className={mostrar}>Usuário ou senha incorretos</h3>
                        <input className='usuario' onChange={(event) => setusuario(event.target.value)} placeholder='Usuario'/>
                        <input type='password' name='senha' onChange={(event) => setsenha(event.target.value)} placeholder='Senha'/>
                        <button name='entrar' onClick={(event) =>login_func() } >Entrar</button>
                    </div>
                </div>
            <div className='direitos'>
                <p>@Todos os direitos reservados a Vitor Manoel</p>
                </div>
            </div>
        </div>
    )
}
export default Login;