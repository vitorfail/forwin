import {Component} from 'react';
import axios from 'axios';
import './Login.css'

export default class Login extends Component{
    render(){
        return(
            <div className='back'>
                <div className='card'>
                    <div className='entrada'>
                        <div className='input'>
                            <div className='title'>
                                <h1>Login</h1>
                            </div>
                            <input nameName='usuario' placeholder='Usuario'/>
                            <input type='password' name='senha' placeholder='Senha'/>
                            <button name='entrar'>Entrar</button>
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