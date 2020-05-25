export const setStorageUser = (user) => {
    return window.localStorage.setItem('user', JSON.stringify(user))
}

export const setStorageToken = (token) => {
    return window.localStorage.setItem('token', JSON.stringify(token))
}

// const user = {
//     username:'jean',
//     password:'paul',
// }

// JSON.stringify(user)

// --> const user = {
//     'username':'jean',
//     'password':'paul',
//     }

export const getStorageUser = () => {
    return JSON.parse(window.localStorage.getItem('user'))
}

export const clearUser = () => {
    window.localStorage.removeItem('user');
}

// Si je suis un autre fichier

// import {setUser} from 'local-storage';
// import {getUser} from 'local-storage';
// import {clearUser} from 'local-storage';