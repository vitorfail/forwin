import {Component} from 'react';
import axios from 'axios';
import {apis} from '../../caminho_api.mjs';
import '../Login/Login.css';

export default class Login extends Component{
    constructor(){
        super()
        this.state = {
            senha: '',
            usuario: ''
        }
        this.login = this.login.bind(this); 
    }
    login(){
        alert('Passou aqui')
        const Axios = axios.create({
            baseURL:apis
        })
        Axios.post('http://localhost/public_html/mysql_con/index.php?url=auth/login', {user: this.state.usuario, password: this.state.senha})
        .then(res =>{
            console.log(res.data);
        })
        .catch({

        })
    }
    render(){
        return(
            <div className='back'>
                <div className='form'>
                    <div className='entrada'>
                        <div className='input'>
                            <div className='title'>
                                <h1>Login</h1>
                            </div>
                            <input nameName='usuario' onChange={(event) => this.setState({usuario: event.target.value})} placeholder='Usuario'/>
                            <input type='password' name='senha' onChange={(event) => this.setState({senha: event.target.value})} placeholder='Senha'/>
                            <button name='entrar' onClick={(event) =>this.login() } >Passar</button>
                        </div>
                    </div>
                <div className='direitos'>
                    <p>@Todos os direitos reservados a Vitor Manoel</p>
                    </div>
                </div>
            </div>
        )
    }
}