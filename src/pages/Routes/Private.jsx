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

function Resolver(){
    const [value, setvalue ]= useState()
    Query().then(res => {
        setvalue(res.data.data)
    })
    return value
}

function RoutesPrivate(){
    const [valid, setvalid] = useState(false)

    console.log(Resolver())
    return valid? <Outlet/> : <Navigate to='/login'/>
}
export default RoutesPrivate;