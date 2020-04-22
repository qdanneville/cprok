import React, { useEffect } from 'react';
import api from '../utils/api'

const Home = () => {

    useEffect(() => {
        api
            .get('/skills/')
            .then(response => {
                console.log(response);
            })
    }, [])

    return (
        <>
            <h1>Arbre de compétence</h1>
            <div>
                <h1>map through skills</h1>
            </div>
        </>
    )
}

export default Home