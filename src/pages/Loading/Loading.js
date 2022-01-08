import React, {Component} from 'react';
import '../Loading/Loading.css';
export default class Loading extends Component{
    constructor(){
        super()
        this.state= {
            fade: ''
        }
        this.carregar = this.carregar.bind(this);
    }
    componentDidMount(){
        window.addEventListener('load', this.carregar)
    }
    carregar(){
        this.setState({fade: 'fade'});
    }
    render(){
        return(
            <div className="spinner-box" id='fade'>
                <div className="configure-border-1">  
                    <div className="configure-core"></div>
                </div>  
                <div className="configure-border-2">
                    <div className="configure-core"></div>
                </div> 
            </div>
        )
    }
}