import { combineReducers } from "redux";
import api from '../utils/api'
import store from "./store";

// App init 
//     -> useEffect -> je vais récupérer les livres (getBooks)
//     -> je dis à mon store, ok, je commence à récupérer les livres : dispatch({ type: 'FETCH_BOOKS' });
//     -> ......... FETCH_BOOKS (3 hours later...)
//     -> une fois que l'API répond : je dis à mon store, ok, c'est bon, populate moi le store avec les données reçus : dispatch({ type: 'SET_BOOKS', payload: books });
//     -> Quand on modifie le store, les composants se re-render pour traiter les données du nouveau store

//Function que j'exporte

export const getBooks = (filter) => {
    return dispatch => {
        dispatch({ type: 'FETCH_BOOKS' });

        return api
            .get(`/books/${filter ? filter : ''}`)
            .then(response => {
                const books = response.data;

                if (books) {
                    dispatch({ type: 'SET_BOOKS', payload: books });
                }
            })
            .catch(error => {
                throw error;
            })
    }
}

// Quand l'api a répondu : je dis à mon store de se populate avec les données
// dispatch({ type: 'SET_BOOKS', payload: books });

// bookStore = {
//     collection: [
//         ...data
//     ],
//     isLoading: true,
//     selectedBook: null
// }

const collection = (state = null, action) => {
    switch (action.type) {
        case "SET_BOOKS":
            return action.payload;
        case "CLEAR_BOOKS":
            return null
        default:
            return state
    }
}

// Départ du state

// bookStore = {
//     collection: null,
//     isLoading: false,
//     selectedBook: null
// }

// Je dis à mon app, ok récupère moi les livres
// dispatch({ type: 'FETCH_BOOKS' });

// bookStore = {
//     collection: null,
//     isLoading: true,
//     selectedBook: null
// }

const isLoading = (state = false, action) => {
    switch (action.type) {
        case "FETCH_BOOKS":
            return true;
        case "SET_BOOKS":
            return false;
        default:
            return state
    }
}

// let book = {
//     id: '1',
//     name: 'La horde du contrevent',
//     author: {
//         name: 'Alain'
//     },
//     resume: "C'est un super livre, nanani",
//     created_at: '123:123123123'
// }

// function lol() {
//     DISPATCH({ type: 'SELECT_BOOK', payload: book })
//     DISPATCH({ type: 'SELECT_BOOK', payload: book })
// }


const selectedBook = (state = null, action) => {
    switch (action.type) {
        case "SELECT_BOOK":
            return action.payload;
        case "CLEAR_BOOK":
            return null;
        default:
            return state
    }
}

const books = combineReducers({
    collection,
    isLoading,
    selectedBook
});

export default books;