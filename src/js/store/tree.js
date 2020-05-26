// {
//     name:null,
//     skills: [],
//     modules : [],
//     isLoading: false
// }

import { combineReducers } from "redux";

const name = (state = null, action) => {
    switch (action.type) {
        case "SET_TREE_NAME":
            return action.payload
        default:
            return state
    }
}

const treeReducer = combineReducers({
    name,
});

export default treeReducer;