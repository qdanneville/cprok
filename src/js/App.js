import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from './store/auth'

import Header from './components/header'
import Home from './pages/home'
import Login from './pages/login'

const App = () => {

    const dispatch = useDispatch();
    const appInitialized = useSelector(state => state.auth.appInitialized);

    useEffect(() => {
        dispatch(fetchUser());
    }, [])

    if (!appInitialized) return (<span>Loading</span>)

    return (
        <>
            <Header />
            <Home />
            <Login />
            <button onClick={() => dispatch({ type: 'SET_TREE_NAME', payload: 'CPROK.' })}> set CPROK</button>
            <button onClick={() => dispatch({ type: 'CLEAR_TREE_NAME' })}> Reset tree name</button>
        </>
    )
}

export default App;