
import React, { useState } from 'react'
import axios from 'axios';
import { apis } from '../../caminho_api.mjs';

function Resolver(){
    const token = localStorage.getItem('token_jwt')
    const [v, setv] = useState(false)
    var valid = null
    async function parseJwt(token) {
        try{
            if(token != null){
                const Axios = axios.create({
                    baseURL:apis
                })
                Axios.post('index.php?url=auth/checkAuth', {}, {headers: {"Authorization": "Bearer "+ token}})
                .then(res => {
                    valid = res.data.data
                })

            }
            else{
                valid = null
            }
        }
        catch{
            valid = null
        }  
    }
    parseJwt(token)
    return valid
}
export default Resolver()