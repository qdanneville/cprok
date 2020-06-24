import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import api from '../utils/api'

import CircleArrow from '../../assets/svg/circle-arrow.svg'

const Home = (props) => {
    const [modules, setModules] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    return (
        <section>
            <h1>Quizz game</h1>
        </section>
    )
}

export default Home;