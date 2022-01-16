import './App.css';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import './pages/Home.css'
import React from 'react';
class App extends React.Component{
  constructor(){  
    super();  
    this.state = {  
      showModalPopup: false  
    }  
  }
  isShowPopup = (status) => {  
    this.setState({ showModalPopup: status });  
  };
  render(){
    return (
      <Home></Home>
    )
  }
}

export default App;
