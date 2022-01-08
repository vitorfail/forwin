import React from 'react';
import {Route, BrowserRouter } from 'react-router-dom';
import Index from './pages';


const Routes = () =>{
    return(
        <BrowserRouter>
            <Route component = {Index} path= './pages' />
        </BrowserRouter>
    )
}
export default Routes;