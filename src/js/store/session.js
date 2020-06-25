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
            .post(`/games/create/?user=${userId}&mode=${mode}&category_id=2`)
            .then(response => {
                const questions = response.data.data.questions;
                const session = response.data.data.session;
                const current_question = Array.isArray(questions) ? questions[0] : questions;

                if (questions) {
                    dispatch({ type: "SET_QUESTIONS", payload: questions })
                    dispatch({ type: "SET_SESSION_ID", payload: session.id })
                    dispatch({ type: "SET_SESSION_MODE", payload: session.mode })
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

export const nextSessionStep = (session, currentQuestionId, success) => {
    return dispatch => {

        const { steps, score, id } = session

        api
            .put(`/games/update/?id=${id}&steps=${steps + 1}&score=${success ? score + 1 : score}&current_question=${currentQuestionId.id || currentQuestionId.questions_id}`)
            .then(response => {
                return dispatch(fetchSession(id))
            })

    }
}

export const fetchSession = (sessionId) => {
    return dispatch => {
        dispatch({ type: "FETCH_CURRENT_SESSION" })

        api
            .get(`/games/${sessionId}`)
            .then(response => {

                let session = response.data.data.session;
                let questions = response.data.data.questions;

                // dispatch({ type: "SET_QUESTIONS", payload: session.current_question })
                dispatch({ type: "SET_SESSION_ID", payload: sessionId })
                dispatch({ type: "SET_SESSION_MODE", payload: session.mode })
                dispatch({ type: "SET_SESSION_SCORE", payload: session.score })
                dispatch({ type: "SET_SESSION_STEPS", payload: session.steps })
                dispatch({ type: "SET_QUESTIONS", payload: questions })
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
        case "INIT_SESSION":
            return null
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
        case "SET_SESSION_STEPS":
            return { ...state, steps: action.payload }
        case "SET_SESSION_SCORE":
            return { ...state, score: action.payload }
        case "SET_SESSION_MODE":
            return { ...state, mode: action.payload }
        case "UPDATE_SCORE":
            return state = state + action.payload
        case "SET_CURRENT_MODE":
            return { ...state, mode: action.payload }
        case "INIT_SESSION":
            return sessionInitialState
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