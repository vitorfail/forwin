import { useEffect, useState } from 'react';
import { Redirect, Route} from 'react-router-dom';
import StoreContext from '../Store/Context';
import Resolver from './Auth'

function RoutesPrivate({component: Component, ...rest}){
    const [v, setv] = useState(Resolver)

    return (
            <Route 
                {...rest} 
                render={( ) => v?
                     (<Component {...rest}/>) : 
                     (<Redirect to='/login'/>)}/>)
}
export default RoutesPrivate