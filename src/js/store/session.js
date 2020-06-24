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

export const initSession = (mode) => {
    return dispatch => {
        dispatch({ type: "INIT_SESSION" })
        dispatch({ type: "SET_CURRENT_MODE", payload: mode })
    }
}

const questionsInitialState = {
    collection: null,
    isLoading: false
}

const questions = (state = questionsInitialState, action) => {
    switch (action.type) {
        case "FETCH_QUESTIONS":
            return { ...state, isLoading: true }
        case "SET_QUESTIONS":
            return { ...state, collection: action.payload, isLoading: false }
        default:
            return state
    }
}

const current_quetionInitialState = {
    question: null,
    isLoading: false
}

const current_quetion = (state = current_quetionInitialState, action) => {
    switch (action.type) {
        case "FETCH_CURRENT_QUESTION":
            return { ...state, isLoading: true }
        case "SET_CURRENT_QUESTION":
            return { ...state, question: action.payload, isLoading: false }
        default:
            return state
    }
}


const current_mode = (state = null, action) => {
    switch (action.type) {
        case "SET_CURRENT_MODE":
            return action.payload
        default:
            return state
    }
}


const step = (state = 0, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const score = (state = 0, action) => {
    switch (action.type) {
        case "UPDATE_SCORE":
            return state = state + action.payload
        default:
            return state
    }
}

const isLoading = (state = false, action) => {
    switch (action.type) {
        case "INIT_SESSION":
            return true;
        case "SESSION_INITIALIZED":
            return false;
        default:
            return state
    }
}

const quizzReducer = combineReducers({
    questions,
    current_quetion,
    current_mode,
    step,
    isLoading,
    score
});

export default quizzReducer;