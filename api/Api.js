import axios from 'axios';

const api = axios.create({
    baseURL: 'https://petmagnet-api.herokuapp.com/API/'
});

export default api;