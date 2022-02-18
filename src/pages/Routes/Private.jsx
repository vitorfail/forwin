import { useState } from 'react';
import { Redirect, Route} from 'react-router-dom';
import StoreContext from '../Store/Context';

function Resolver() {
    try{
        const token = localStorage.getItem('token_jwt')
        if(token != null){
            return true
        }
        else{
            return null
        }
    }
    catch{
        return null
    }  
}
function RoutesPrivate({component: Component, ...rest}){
    const [v, setv] = useState(Resolver())
    return (
            <Route 
                {...rest} 
                render={( ) => v?
                     (<Component {...rest}/>) : 
                     (<Redirect to='/login'/>)}/>)
}
export default RoutesPrivate