import { useEffect, useState } from 'react';
import { Redirect, Route} from 'react-router-dom';
import StoreContext from '../Store/Context';
import Resolver from './Auth'

function RoutesPrivate({component: Component, ...rest}){
    const [v, setv] = useState(false)
    useEffect(() => {
        let umont = true
        Resolver.then(res => {
            if(res === null){
                if(umont){
                    setv(null)
                }
            }
            else{
                if(umont){
                    setv(true)
                }
            }
        });
        return () => {
            umont =false
        };
    },[])
    return (
            <Route 
                {...rest} 
                render={( ) => v?
                     (<Component {...rest}/>) : 
                     (<Redirect to='/login'/>)}/>)
}
export default RoutesPrivate