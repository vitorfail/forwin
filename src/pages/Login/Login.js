import { useState} from 'react';
import axios from 'axios';
import {apis} from '../../caminho_api.mjs';
import '../Login/Login.css';
import { useHistory} from 'react-router-dom';


function Login(){
    const [senha, setsenha] = useState(null);
    const [usuario, setusuario] = useState(null);
    const [ mostrar, setmostrar] = useState('aviso');
    const history = useHistory();
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
            setmostrar('aviso')
            Axios.post('index.php?url=auth/login', {user: usuario, password: senha})
            .then(res =>{
                if(res.data.data === 'Operação inválida' || res.data.data === "Usuário não encontrado"){
                    setmostrar('aviso mostrar');
                }
                else{
                    console.log(res.data)
                    settoken(res.data.data)
                    setTimeout(() => history.push('/'), 3000);
                }
            })
            .catch(error => {
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
        <div className='back'>
            <div className='form'>
                <div className='entrada'>
                    <div className= 'input'>
                        <div className='title'>
                            <h1>Login</h1>
                        </div>
                        <h3 className={mostrar}>Usuário ou senha incorretos</h3>
                        <input className='usuario'  onKeyPress={entrar} onChange={(event) => setusuario(event.target.value)} placeholder='Usuario'/>
                        <input type='password' name='senha' onKeyPress={entrar} onChange={(event) => setsenha(event.target.value)} placeholder='Senha'/>
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