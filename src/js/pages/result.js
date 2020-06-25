import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

import Arcade from '../../assets/svg/arcade.svg'

const Session = (props) => {

    const dispatch = useDispatch();
    const session = useSelector(state => state.session.session)

    return (
        <section className="w-full mt-10 flex flex-col text-dark">
            <header className="mt-20 text-align-center">
                <h1 className="big font-black mb-4">Résultats</h1>
                <p className="f2 font-normal">Session score : <strong className="font-bold">{session.score}</strong></p>
                <p className="f2 font-normal">Nombre de questions répondus : <strong className="font-bold">{session.steps}</strong></p>
                <i className="fill-white stroke-dark w-20 block mb-2 my-auto mb-10 mt-10"><Arcade /></i>
                <hr className="bw-1 bc-dark w-33-per bs-solid br-10"></hr>
                <Link className="btn" to="/">Retourner à l'accueil</Link>
                <Link className="btn ml-4" to="/dashboard/">Aller sur votre dashboard</Link>
                <hr className="bw-1 bc-dark w-33-per bs-solid br-10"></hr>
            </header>
        </section>
    )
}

export default Session;