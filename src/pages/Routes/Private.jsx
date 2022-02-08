import React, {useContext} from 'react';
import { Navigate, Outlet} from 'react-router-dom';
import StoreContext from '../Store/Context';
import axios from 'axios';
import { apis } from '../../caminho_api.mjs';

const RoutesPrivate = () => {
    const {token} = useContext(StoreContext);
    async function query(){
        let valid = false
        const Axios = axios.create({
            baseURL:apis
        })
        Axios.post('index.php?url=auth/checkAuth', {}, {headers: {"Authorization": "Bearer "+ token}})
        .then(res =>{

        })
        .catch(er =>{

        })

        return valid
    }
    console.log(query())
    return query()? <Outlet/> : <Navigate to='/login'/>
}
export default RoutesPrivate;