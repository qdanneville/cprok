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

export const initSession = (mode, userId, categoryId, nbQuestions) => {
    return dispatch => {
        dispatch({ type: "INIT_SESSION" })
        dispatch({ type: "SET_CURRENT_MODE", payload: mode })
        dispatch({ type: "FETCH_QUESTIONS", payload: mode })

        api
            .post(`/games/create/?user=${userId}&mode=${mode}&category_id=2&nb_questions=2`)
            .then(response => {
                const questions = response.data.data.questions;
                const sessionId = response.data.data.session.id;
                const current_question = Array.isArray(questions) ? questions[0] : questions;

                if (questions) {
                    dispatch({ type: "SET_QUESTIONS", payload: questions })
                    dispatch({ type: "SET_SESSION_ID", payload: sessionId })
                    dispatch(startSession(current_question.id))
                }
            })
    }
}

export const startSession = (questionId) => {
    return dispatch => {
        dispatch({ type: "STARTING_SESSION" })
        dispatch(fetchQuestion(questionId))
    }
}

export const fetchSession = (sessionId) => {
    return dispatch => {
        dispatch({ type: "FETCH_CURRENT_SESSION" })

        api
            .get(`/games/${sessionId}`)
            .then(response => {

                let session = response.data.data;

                dispatch({ type: "SET_QUESTIONS", payload: session.current_question })
                dispatch({ type: "SET_SESSION_ID", payload: sessionId })
                dispatch(startSession(session.current_question))
            })
    }
}

export const fetchQuestion = (questionId) => {
    return dispatch => {
        dispatch({ type: "FETCH_CURRENT_QUESTION" })

        api
            .get(`/questions/${questionId}`)
            .then(response => {
                const question = response.data.data;
                api
                    .get(`/questions/${questionId}/answers`)
                    .then(response => {
                        const answers = response.data.data;
                        dispatch({ type: "SET_CURRENT_QUESTION", payload: { question, answers } })
                    })
            })
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


const current_question = (state = null, action) => {
    switch (action.type) {
        case "FETCH_CURRENT_QUESTION":
            return { ...state, isLoading: true }
        case "SET_CURRENT_QUESTION":
            return { ...state, question: action.payload, isLoading: false }
        default:
            return state
    }
}


const sessionInitialState = {
    id: null,
    steps: 0,
    score: 0,
    mode: null
}


const session = (state = sessionInitialState, action) => {
    switch (action.type) {
        case "SET_SESSION_ID":
            return { ...state, id: action.payload }
        case "NEXT_SESSION_STEP":
            return { ...state, steps: state.steps + 1 }
        case "SET_SESSION_SCORE":
            return { ...state, score: state.score + action.payload }
        case "UPDATE_SCORE":
            return state = state + action.payload
        case "SET_CURRENT_MODE":
            return { ...state, mode: action.payload }

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
    session,
    questions,
    current_question,
    isLoading,
});

export default quizzReducer;