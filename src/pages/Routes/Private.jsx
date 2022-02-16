import { useState } from 'react';
import { Redirect, Route} from 'react-router-dom';
import StoreContext from '../Store/Context';
import Resolver from './Auth'

const L = () =>{
    Resolver.then(res => {
        if(res === null){
            return null
        }
        else{
            console.log(res.data.data)
            return res.data.data
        }
    })
}


const RoutesPrivate = ({component: Component, ...rest}) => {

    return (<Route 
                {...rest} 
                render={( ) => L()?
                     <Component {...rest}/> : 
                     <Redirect to='/login'/>}/>)
}
export default RoutesPrivate