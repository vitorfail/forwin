import React, {useCallback, useContext, useEffect, useState} from 'react';
import { Redirect, Route} from 'react-router-dom';
import StoreContext from '../Store/Context';
import axios from 'axios';
import { apis } from '../../caminho_api.mjs';

const RoutesPrivate = ({component: Component, ...rest}) => {
    
    const [valid, setvalid] = useState(false)
    async function Resolver(){
        const token = localStorage.getItem('token_jwt')
        const Axios = axios.create({
                baseURL:apis
        })
        const resolve = await Axios.post('index.php?url=auth/checkAuth', {}, {headers: {"Authorization": "Bearer "+ token}})
        if(resolve.data.data === "Operação inválida" || resolve.data.data === false){
            return false
        }
        if(resolve.data.data === true){
            
            return true
        }
        else{
            return false
        }
    }
    return (<Route 
                {...rest} 
                render={( ) => Resolver()?
                     <Component {...rest}/> : 
                     <Redirect to='/login'/>}/>)
}
export default RoutesPrivate