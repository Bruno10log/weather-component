import axios from 'axios';

const proxyurl = "https://cors-anywhere.herokuapp.com/";

const api = axios.create({
    baseURL: proxyurl + 'https://www.metaweather.com/api/'
});

export default api;