
import React, { useState } from 'react'
import axios from 'axios';
import { apis } from '../../caminho_api.mjs';

async function Resolver() {
    try{
        const token = localStorage.getItem('token_jwt')
        if(token != null){
            const Axios = axios.create({
                baseURL:apis
            })
            return Axios.post('index.php?url=auth/checkAuth', {}, {headers: {"Authorization": "Bearer "+ token}})
        }
        else{
            return null
        }
    }
    catch{
        return null
    }  
}
export default Resolver()