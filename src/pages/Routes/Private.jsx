import React, {useCallback, useContext, useEffect, useState} from 'react';
import { Redirect, Route} from 'react-router-dom';
import StoreContext from '../Store/Context';
import Validation from './Auth'

const RoutesPrivate = ({component: Component, ...rest}) => {
    
    const [valid, setvalid] = useState(true)
    console.log(Validation)
    return (<Route 
                {...rest} 
                render={( ) => valid?
                     <Component {...rest}/> : 
                     <Redirect to='/login'/>}/>)
}
export default RoutesPrivate