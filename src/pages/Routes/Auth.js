import React, { useState } from 'react'
import axios from 'axios';
import { apis } from '../../caminho_api.mjs';

const Validation = () =>{
    const [valid, setvalid] = useState(false)
    async function Resolver(){
        const token = localStorage.getItem('token_jwt')
        const Axios = axios.create({
                baseURL:apis
        })
        const resolve = await Axios.post('index.php?url=auth/checkAuth', {}, {headers: {"Authorization": "Bearer "+ token}})
        if(resolve.data.data === "Operação inválida" || resolve.data.data === false){
            setvalid(false)
        }
        if(resolve.data.data === true){
            
            setvalid(true)
        }
        else{
            setvalid(false)
        }
    }
    Resolver()
    return valid
}

export default Validation