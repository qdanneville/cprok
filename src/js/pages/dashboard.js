import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import api from '../utils/api'

import Arcade from '../../assets/svg/arcade.svg'

const Dashboard = (props) => {

    const dispatch = useDispatch();
    const session = useSelector(state => state.session.session)
    const user = useSelector(state => state.auth.user)
    const [sessions, setSessions] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        setIsLoading(true);

        api
            .get(`/games/player/${user.player_id}`)
            .then(response => {
                setSessions(response.data.data);
                setIsLoading(false);
            })
    }, [])

    return (
        <section className="w-full mt-10 flex flex-col text-dark">
            <header className="mt-20 text-align-center mb-20">
                <h1 className="big font-black mb-4">Quizz Dashboard</h1>
                <hr className="bw-1 bc-dark w-33-per bs-solid br-10"></hr>
                <Link className="btn" to="/">Retourner à l'accueil</Link>
                <hr className="bw-1 bc-dark w-33-per bs-solid br-10"></hr>
            </header>
            {
                isLoading || !sessions
                    ? <div className="w-full my-auto text-align-center"><i className="loader"></i></div>
                    :
                    (<ul className="flex flex-col">
                        {
                            sessions.map(session => (
                                <li key={session.id} className="bg-white shadow-2 br-10 my-2 flex justify-center items-center">
                                    <span className="bt-w-0 bb-w-0 br-w-2 bl-w-0 bc-grey bs-solid py-2 px-2 flex-grow-1">Id :<strong className="font-bold">{session.id}</strong></span>
                                    <span className="bt-w-0 bb-w-0 br-w-2 bl-w-0 bc-grey bs-solid py-2 px-2 flex-grow-1">Score :<strong className="font-bold">{session.score}</strong></span>
                                    <span className="py-2 px-2 flex-grow-1">Nombre de questions répondus : <strong className="font-bold">{session.steps}</strong></span>
                                </li>
                            ))
                        }
                    </ul>)
            }

        </section>
    )
}

export default Dashboard;