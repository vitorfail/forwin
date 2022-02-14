import React, {useCallback, useContext, useEffect, useState} from 'react';
import { Navigate, Outlet} from 'react-router-dom';
import StoreContext from '../Store/Context';
import axios from 'axios';
import { apis } from '../../caminho_api.mjs';

const Resolver = async() =>{
    const token = localStorage.getItem('token_jwt')
    const Axios = axios.create({
            baseURL:apis
    })
    const resolve = await Axios.post('index.php?url=auth/checkAuth', {}, {headers: {"Authorization": "Bearer "+ token}})

    return resolve.data.data
}



export default function RoutesPrivate({Resolver}){
    const [valid, setvalid] = useState(false)

    return valid? <Outlet/> : <Navigate to='/login'/>
}