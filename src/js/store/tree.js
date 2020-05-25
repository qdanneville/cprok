/*
{
    tree: {
        tree: {
            name:'Default tree name'
        }
        skills: []
        modules: []
        isLoading: false
    }
}
*/

import { combineReducers } from "redux";

const initialState = {
    name: 'Default tree name'
}


const tree = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TREE_NAME':
            return {...state, name : action.payload}
        case 'SET_SKILLS':
            return action.payload
        case 'SET_MODULES':
            return action.payload
        default:
            return state
    }
}

const isLoading = (state = null, action) => {
    switch (action.type) {
        case 'FETCH_SKILLS':
        case 'FETCH_MODULES':
            return true
        case 'SET_SKILLS':
        case 'SET_MODULES':
            return false
        default:
            return state
    }
}

const treeReducer = combineReducers({
    tree,
    isLoading,
});

export default treeReducer;