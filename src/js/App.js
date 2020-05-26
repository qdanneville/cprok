import React from 'react'
import { useDispatch } from 'react-redux'

import Header from './components/header'
import Home from './pages/home'

const App = () => {

    const dispatch = useDispatch();

    return (
        <>
            <Header />
            <Home />
            {/* <button onClick={() => dispatch({ type: 'SET_TREE_NAME', payload: 'CPROK.' })}> set CPROK</button>
            <button onClick={() => dispatch({ type: 'CLEAR_TREE_NAME' })}> Reset tree name</button> */}
        </>
    )
}

export default App;