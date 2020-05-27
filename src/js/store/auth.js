// {
//     auth {
//         token:null,
//         user:null,
//         isLoading: false
//     }
// }

import { combineReducers } from "redux";
import api, { addAuth } from '../utils/api'
import { setStorageToken } from '../utils/local-storage'

export const doLogin = (username, password) => {
    // On lance le fetch user - DOING LOGIN
    //Call d'api ->  DOING LOGIN
    // Reponse ok -> user 
    // user -> SET_AUTH_USER 
    // token -> SET_AUTH_TOKEN
    // LOGIN FINI
    // LOGIN FAILED

    return dispatch => {
        dispatch({ type: "DOING_LOGIN" })

        return api
            .post('/users/authenticate', { username, password })
            .then(response => {
                let result = response.data.data;

                if (result && result.token) {
                    addAuth(result.token);
                    setStorageToken(result.token);
                    dispatch({ type: "SET_AUTH_TOKEN", payload: result.token })
                }
                if (result && result.user) dispatch({ type: "SET_AUTH_USER", payload: result.user })
            })
            .catch(error => {
                dispatch({ type: "LOGIN_FAILED" })

                if (error.response.data.message) throw error.response.data.message

                throw new Error({ message: "Login failed, retry" });
            })
    }
}

const token = (state = null, action) => {
    switch (action.type) {
        case "SET_AUTH_TOKEN":
            return action.payload;
        case "CLEAR_AUTH_TOKEN":
            return null;
        default:
            return state;
    }
}

const user = (state = null, action) => {
    switch (action.type) {
        case "SET_AUTH_USER":
            return action.payload;
        case "CLEAR_AUTH_USER":
            return null;
        default:
            return state;
    }
}

const isLoading = (state = null, action) => {
    switch (action.type) {
        case "DOING_LOGIN":
            return true;
        case "FETCH_STORAGE":
            return true;
        case "LOGIN_FAILED":
        case "SET_AUTH_USER":
        case "SET_AUTH_TOKEN":
        case "SET_STORAGE":
            return false;
        default:
            return state;
    }
};


const authReducer = combineReducers({
    token,
    user,
    isLoading,
});

export default authReducer;