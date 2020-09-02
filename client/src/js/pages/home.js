import React, { useState, useEffect } from 'react'

const Home = (props) => {

    useEffect(() => {
        console.log('Home ready');
    }, [])


    return (
        <h1>Home</h1>
    )
}

export default Home;