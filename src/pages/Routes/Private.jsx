import { useEffect, useState } from 'react';
import { Redirect, Route} from 'react-router-dom';
import StoreContext from '../Store/Context';
import Resolver from './Auth'

const RoutesPrivate = ({component: Component, ...rest}) => {
    const [v, setv] = useState(false)
    useEffect(() => {
        Resolver.then(res => {
            if(res === null){
                setv(null)
            }
            else{
                console.log(res.data.data)
                setv(true)
            }
        })
        return () => {
            setv(false)
        }
    },[])
    return (
            <Route 
                {...rest} 
                render={( ) => v?
                     (<Component {...rest}/>) : 
                     (<Redirect to='/login'/>)}/>)
}
export default RoutesPrivate