import { combineReducers } from "redux";

// state = {
//     header: {
//         title: 'lol';
//     }
// }

const title = (state = "default title", action) => {
    switch (action.type) {
        case "SET_TITLE":
            return action.payload;
        case "RESET_TITLE":
            return "default title";
        default:
            return state
    }
}

const header = combineReducers({
    title
});

export default header;