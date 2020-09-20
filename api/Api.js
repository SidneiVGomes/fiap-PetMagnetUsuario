import axios from 'axios';

const api = axios.create({
    // baseURL: 'https://petmagnet-api.herokuapp.com/API/'
    baseURL: 'http://192.168.15.9:8080/API/'
});

export default api;