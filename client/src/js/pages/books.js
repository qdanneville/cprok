import React, { useState, useEffect } from 'react'
import Nav from '../components/nav';
import Browse from '../components/browse'

const Home = (props) => {

    useEffect(() => {
        console.log('Home ready');
    }, [])


    return (
        <section>
            <Nav />
            <Browse />
        </section>
    )
}

export default Home;