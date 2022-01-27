import {Component, useState} from 'react';
import axios from 'axios';
import {apis} from '../../caminho_api.mjs';
import '../Login/Login.css';
import { useNavigate} from 'react-router-dom';


function Login(){
    const [senha, setsenha] = useState('');
    const [usuario, setusuario] = useState('');
    const history = useNavigate();

    function login_func(){
        const Axios = axios.create({
            baseURL:apis
        })
        Axios.post('http://localhost/public_html/mysql_con/index.php?url=auth/login', {user: usuario, password: senha})
        .then(res =>{
            console.log(res.data);
            localStorage.setItem('token_jwt', res.data.data);
            history('/');
        })
        .catch({

        })
    }
    function teste(){
        const Axios = axios.create({
            baseURL:apis
        })
        Axios.post('index.php?url=idades/pesquisa', {user: '1', password: '1'},{headers: {
            "Authorization": "Bearer "+ localStorage.getItem('token_jwt')}}
            )
        .then(res =>{
            console.log(res.data);
        })
        .catch(error => {
            console.log("Não foi possivel: "+ error)
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
                        <input nameName='usuario' onChange={(event) => setusuario(event.target.value)} placeholder='Usuario'/>
                        <input type='password' name='senha' onChange={(event) => setsenha(event.target.value)} placeholder='Senha'/>
                        <button name='entrar' onClick={(event) =>login_func() } >Passar</button>
                        <button name='entrar' onClick={(event) =>teste() } >Teste</button>

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