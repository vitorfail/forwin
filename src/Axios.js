import axios from "axios";

const Axios = axios.create({
  baseURL: 'https://forwin.000webhostapp.com/mysql_con/'
});

Axios.interceptors.request.use(async config => {
  if (localStorage.getItem('token_jwt')) {
    config.headers.Authorization = 'Bearer '+localStorage.getItem('token_jwt');
  }
  return config;
});

export default Axios;

