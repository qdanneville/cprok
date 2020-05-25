/*
{
    auth: {
        token: null, //Stores login token
        user: null, //User infos from API
        isLoading: false
    }
}
*/

import { getStorageUser } from '../utils/local-storage'
import api, { addAuth } from '../utils/api'
import { setStorageUser, setStorageToken } from '../utils/local-storage'
import { combineReducers } from "redux";

export const fetchUser = () => {
    let token = getStorageUser();
    console.log(token);

    return dispatch => {
        dispatch({
            type: "FETCH_STORAGE",
            payload: null
        });
    }
}

export const doLogin = (username, password) => {

    return dispatch => {
        dispatch({
            type: "DOING_LOGIN",
            payload: null
        });

        return api
            .post('/users/authenticate', { username, password })
            .then(response => {

                let result = response.data.data

                if (result && result.token && result.user) {

                    dispatch({
                        type: "SET_AUTH_TOKEN",
                        payload: result.token
                    });

                    addAuth(result.token)
                    setStorageToken(result.token)

                    dispatch({
                        type: "SET_AUTH_USER",
                        payload: result.user
                    });

                    setStorageUser(result.user)
                }
            })
            .catch(error => {
                dispatch({
                    type: "LOGIN_FAILED"
                });

                if (error.response.data.message)
                    throw error.response.data.message;

                throw new Error({ message: "Login failed, retry" });
            })
    }
}


const token = (state = null, action) => {
    switch (action.type) {
        case "SET_AUTH_TOKEN":
            return action.payload; //TODO : store token in localStoage or equivalent
        default:
            return state;
    }
};

const user = (state = null, action) => {
    switch (action.type) {
        case "SET_AUTH_USER":
            return action.payload;
        default:
            return state;
    }
};

const isLoading = (state = null, action) => {
    switch (action.type) {
        case "DOING_LOGIN":
            return true;
        case "FETCH_STORAGE":
            return true;
        case "LOGIN_FAILED":
        case "SET_AUTH_USER":
        case "SET_STORAGE":
            return false;
        default:
            return state;
    }
};

const appInitialized = (state = null, action) => {
    switch (action.type) {
        case "FETCH_STORAGE":
            return true;
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
    appInitialized
});

export default authReducer;