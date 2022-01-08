import React, {Component} from 'react';
import axios from 'axios';
import MD5 from 'md5';
import {apis} from '../caminho_api.mjs';
;export default class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            user:'',
            password: ''
        }
        this.teste = this.teste.bind(this);
    }
    teste(){
        const login = {
            user: this.state.user,
            password: MD5(this.state.password)
        }
        const Axios = axios.create({
            baseURL: apis,
        });
        Axios.post('quantidade_clientes.php', login)
        .then(res => {
            alert(res.data);
         }).catch(error => {
            console.log(error);
         });;
    }

    render(){
        return(
            <div className='back'>
                <div className='card'>
                    <div className='entrada'>
                        <div  className='input'>
                            <div className='title'>
                                <h1>Login</h1>
                            </div>
                            <input name='usuario' onChange={(event) =>{this.setState({user: event.target.value})}} placeholder='Usuario'/>
                            <input type='password' name='senha' placeholder='Senha'/>
                            <button name='entrar' onClick={this.teste} >Entrar</button>
                        </div>
                    </div>
                <div className='direitos'>
                    <p>@Todos os direitosa reservados a Vitor Manoel</p>
                    </div>
                </div>
            </div>

        )
    }
}