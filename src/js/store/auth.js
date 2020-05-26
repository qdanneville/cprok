// {
//     auth {
//         token:null,
//         user:null,
//         isLoading: false
//     }
// }

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