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
    return resolve
}


function RoutesPrivate(){
    const [valid, setvalid] = useState(false)

    useEffect(() => {
        async function Resolver() {
            let ummont = false
            Query().then(res => {
                if(!ummont){
                    setvalid(res.data.data)
                }
            })
        }
    
        Resolver()
      }, [])
    return valid? <Outlet/> : <Navigate to='/login'/>
}
export default RoutesPrivate;