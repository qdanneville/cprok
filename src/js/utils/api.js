import axios from 'axios';

const instance = axios.create({
    baseURL: "http://146.59.155.142:3000/api/"
})

export const addAuth = token => {
    // instance.defaults.headers.common["Authorization"] = "Bearer " + token;
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default instance;