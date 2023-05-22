import Axios from "./Axios";
function Tema(){
    Axios.post('api/dadosuser', )
    .then(res =>{
        if(res.data.data === '1'){

        }
        if(res.data.data === "Usuário não autenticado"){
        }
        else{
            if((res.data.data[5])[0] === 'temapadrao'){
                let html = document.querySelector('html');
                html.className = "tema-padrao";
            }
            if((res.data.data[5])[0] === 'temaazul'){
                let html = document.querySelector('html');
                html.className = "tema-azul";
            }
            if((res.data.data[5])[0] === 'temalaranja'){
                let html = document.querySelector('html');
                html.className = "tema-laranja";
            }
            if((res.data.data[5])[0] === 'temaroxo'){

                let html = document.querySelector('html');
                html.className = "tema-roxo";
            }
            if((res.data.data[5])[0] === 'temaverde'){

                let html = document.querySelector('html');
                html.className = "tema-verde";
            }
        } 
    })
    .catch(error => {
    })
}
export default Tema;