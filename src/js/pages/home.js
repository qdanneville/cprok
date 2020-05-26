import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {fetchModules} from '../store/tree'

import api from '../utils/api'

const Home = () => {
    const dispatch = useDispatch()
    const moduleIsLoading = useSelector(state => state.tree.modules.isLoading)
    const modulesCollection = useSelector(state => state.tree.modules.collection)

    useEffect(() => {
        dispatch(fetchModules())
    }, [])

    if (moduleIsLoading) return <span>Modules are loading</span>

    return (
        <section>
            <h1>Home</h1>
            {
                modulesCollection && modulesCollection.map(item => <span key={item.id}>{item.name}</span>)
            }
            <button onClick={() => dispatch({ type: 'CLEAR_MODULES' })}> Clear modules </button>
        </section>
    )
}

export default Home