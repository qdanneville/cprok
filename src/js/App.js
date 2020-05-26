import React from 'react'
import { useDispatch } from 'react-redux'

import Header from './components/header'

const App = () => {

    const dispatch = useDispatch();

    return (
        <>
            <Header />
            <button onClick={() => dispatch({ type: 'SET_TREE_NAME', payload: 'CPROK.' })}> set CPROK</button>
            <button onClick={() => dispatch({ type: 'SET_TREE_NAME', payload: 'Lol default name.' })}> set Lol default name</button>
        </>
    )
}

export default App;