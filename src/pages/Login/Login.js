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

    function login_func(){
        const Axios = axios.create({
            baseURL:apis
        })
        Axios.post('http://localhost/public_html/mysql_con/index.php?url=auth/login', {user: usuario, password: senha})
        .then(res =>{
            if(res.data.data === 'Operação inválida' || res.data.data === 'Usuário não encontrado'){
                setmostrar('aviso mostrar');
            }
            else{
                console.log(res.data);
                localStorage.setItem('token_jwt', res.data.data);
                history('/');    
            }
        })
        .catch(error => {
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
                        <input nameName='usuario' onChange={(event) => setusuario(event.target.value)} placeholder='Usuario'/>
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