import axios from 'axios';
import config from '../../../config';

console.log(config.API_BASE_URL);

const instance = axios.create({
    baseURL: config.API_BASE_URL
})

export const addAuth = token => {
    // instance.defaults.headers.common["Authorization"] = "Bearer " + token;
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default instance;