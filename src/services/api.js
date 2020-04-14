import axios from 'axios';

const api = axios.create({
    baseURL: 'https://app-product-api.herokuapp.com/api'
});

export default api;