
import React, { useState } from 'react'
import axios from 'axios';
import { apis } from '../../caminho_api.mjs';

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
export default Resolver()