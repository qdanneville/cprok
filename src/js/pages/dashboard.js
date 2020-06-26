import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import api from '../utils/api'

import Arcade from '../../assets/svg/playing-cards.svg'
import Empty from '../../assets/svg/empty.svg'
import Session from './result'

const Dashboard = (props) => {

    const dispatch = useDispatch();
    const session = useSelector(state => state.session.session)
    const user = useSelector(state => state.auth.user)
    const [sessions, setSessions] = useState(null);
    const [sessionQuestions, setSessionQuestions] = useState(null);
    const [currentSession, setCurrentSession] = useState(null);
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

    const fetchSessionQuestions = (sessionId) => {
        api
            .get(`/questions/game/${sessionId}`)
            .then(response => {
                setCurrentSession(sessionId)
                setSessionQuestions(response.data.data);
            })
    }

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
                        {!Array.isArray(sessions) && <span className="f4 font-bold mb-4 text-align-center bloc flex justify-center items-center"><Empty className="w-10 fill-dark stroke-white mr-4"/>Aucune session jouée pour l'instant</span>}
                        {
                            Array.isArray(sessions) && sessions.map(session => {

                                let date = new Date(session.played_at);

                                return (
                                    <div className="my-2" key={session.id}>
                                        <li className="bg-white shadow-2 flex justify-center items-center">
                                            <span className="bt-w-0 bb-w-0 br-w-2 bl-w-0 bc-grey bs-solid py-2 px-2 flex-grow-1 text-align-center">Id :<strong className="font-bold">{session.id}</strong></span>
                                            <span className="bt-w-0 bb-w-0 br-w-2 bl-w-0 bc-grey bs-solid py-2 px-2 flex-grow-1 text-align-center">Score :<strong className="font-bold">{session.score}</strong></span>
                                            <span className="py-2 px-2 flex-grow-1 bt-w-0 bb-w-0 br-w-2 bl-w-0 bc-grey bs-solid text-align-center">Nombre de questions répondus : <strong className="font-bold">{session.steps+1}</strong></span>
                                            <span className="py-2 px-2 flex-grow-1 text-align-center bt-w-0 bb-w-0 br-w-2 bl-w-0 bc-grey bs-solid">Joué le : <strong className="font-bold">{date.toLocaleDateString('fr-FR')}</strong></span>
                                            <span onClick={() => fetchSessionQuestions(session.id)} className="py-2 px-2 flex-grow-1 text-align-center cursor-pointer"><Arcade className="w-6 fill-dark" /></span>
                                        </li>

                                        {sessionQuestions && currentSession === session.id &&
                                            <div className="bg-dark px-2 py-4 text-white">
                                                <span className="f4 uppercase font-bold mb-4">Questions :</span>
                                                <hr className="bw-1 bc-dark w-33-per bs-solid br-10"></hr>
                                                <ul className="flex flex-col">
                                                    {sessionQuestions.map((question, i) => <span key={question.id} className="my-1">{`${i+1} - ${question.label}`}</span>)}
                                                </ul>
                                            </div>
                                        }
                                    </div>
                                )
                            })
                        }
                    </ul>)
            }

        </section>
    )
}

export default Dashboard;