import React, {useContext, useState} from 'react';
import { Navigate, Outlet} from 'react-router-dom';
import StoreContext from '../Store/Context';
import axios from 'axios';
import { apis } from '../../caminho_api.mjs';

async function Query(){
    const token = localStorage.getItem('token_jwt')
    const Axios = axios.create({
        baseURL:apis
    })
    const resolve = await Axios.post('index.php?url=auth/checkAuth', {}, {headers: {"Authorization": "Bearer "+ token}})
    return resolve.data
}

const RoutesPrivate = () => {
    const [valid, setvalid] = useState(false)
    async function Resolver(){
        const resolve = await Query();
        setvalid(resolve.data)

        var dados = resolve.data
        if (dados === "Operação inválida" || dados === false){
        }
        if(dados === true){
        }
        else{
        }
    }
    Resolver()
    return valid? <Outlet/> : <Navigate to='/login'/>
}
export default RoutesPrivate;