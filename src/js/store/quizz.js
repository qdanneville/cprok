// {
//     name:null,
//     skills: [],
//     modules : {
//          collection:[],
//          isLoading:false
//     },
//     isLoading: false
// }

import { combineReducers } from "redux";
import api from '../utils/api'

const name = (state = null, action) => {
    switch (action.type) {
        case "SET_TREE_NAME":
            return action.payload
        case "CLEAR_TREE_NAME":
            return null
        default:
            return state
    }
}

const modulesInitialState = {
    collection: null,
    isLoading: false
}

export const fetchMods = () => {
    return dispatch => {
        dispatch({ type: 'FETCH_MODS' });

        api
            .get('/mods/')
            .then(response => {
                let result = response.data.data
                dispatch({ type: 'SET_MODS', payload: result });
            })
    }
}

const mods = (state = modulesInitialState, action) => {
    switch (action.type) {
        case "FETCH_MODS":
            return { ...state, isLoading: true }
        case "SET_MODS":
            return { ...state, collection: action.payload, isLoading: false }
        case "CLEAR_MODS":
            return modulesInitialState
        default:
            return state
    }
}

const quizzReducer = combineReducers({
    mods,
    name,
});

export default quizzReducer;