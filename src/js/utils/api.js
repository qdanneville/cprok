// ----------------------------------------------------------------------
// -------------------------- UTILS -------------------------------------
// -------------------------GET DATA ------------------------------------
// ----------------------------------------------------------------------

import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:3000/api"
})

export const addAuth = token => {
    instance.defaults.headers.common["Authorization"] = "Bearer " + token;
};

export default instance;