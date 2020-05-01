import React from 'react'
import { StateProvider } from './index'

const App = ({ children }) => {

    const initialState = {
        user: null,
        theme: { primary: 'green' },
        notification: {
            message: '',
            isVisible: false,
            options: {}
        }
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'changeTheme':
                return {
                    ...state,
                    theme: action.newTheme
                };

            case 'setUser':
                return {
                    ...state,
                    user: action.newUser
                };

            case 'setNotification':
                return {
                    ...state,
                    notification: action.newNotification
                };

            case 'clearUSer':
                return {
                    ...state,
                    user: null
                };

            default:
                return state;
        }
    };

    return (
        <StateProvider initialState={initialState} reducer={reducer}>
            {children}
        </StateProvider>
    );
}

export default App