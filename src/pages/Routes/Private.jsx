import React, {useCallback, useContext, useEffect, useState} from 'react';
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
    const [valid, setvalid] = useState()

    useEffect(() => {
        try{
            const Resolver = async() =>{
                const resolve = await Query()
                if(resolve.data === 'Operação inválida' || resolve.data === false){
                    setvalid(false)
                }
                if(resolve.data === true){
                    setvalid(true)
                }
            }
            Resolver()
        }
        catch{

        }
    }, [])
    return valid? <Outlet/> : <Navigate to='/login'/>
}
export default RoutesPrivate;