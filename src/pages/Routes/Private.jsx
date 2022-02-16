import React, {useCallback, useContext, useEffect, useState} from 'react';
import { Redirect, Route} from 'react-router-dom';
import StoreContext from '../Store/Context';
import Resolver from './Auth'

const RoutesPrivate = ({component: Component, ...rest}) => {

    console.log(Resolver)
    return (<Route 
                {...rest} 
                render={( ) => Resolver?
                     <Component {...rest}/> : 
                     <Redirect to='/login'/>}/>)
}
export default RoutesPrivate