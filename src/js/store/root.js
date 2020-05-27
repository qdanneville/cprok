import { combineReducers } from "redux";

import auth from "./auth";
import tree from "./tree";

const createRootReducer = combineReducers({
    tree,
    auth
});

// {
//     tree: {
//         name:null
//     }
// }

export default createRootReducer;