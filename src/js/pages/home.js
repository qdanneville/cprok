import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMods } from '../store/quizz'
import { initSession } from '../store/session'

import Boat from '../../assets/svg/rowing.svg'
import Rugby from '../../assets/svg/rugby.svg'
import Karate from '../../assets/svg/karate.svg'
import Arcade from '../../assets/svg/arcade.svg'

import Html from '../../assets/svg/html.svg'
import Css from '../../assets/svg/css.svg'
import Js from '../../assets/svg/js.svg'

const modsIllustration = [
    <Boat />,
    <Rugby />,
    <Karate />
]

const categories = [
    'html',
    'css',
    'js'
]

const categoriesIllustration = [
    <Html />,
    <Css />,
    <Js />
]

const Home = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const mods = useSelector(state => state.quizz.mods);
    const user = useSelector(state => state.auth.user);
    const [showThemes, setShowThemes] = useState(false)

    let { collection: modsCollection, isLoading: modsAreLoading } = mods;

    useEffect(() => {
        dispatch(fetchMods())
    }, [])

    const start_game = (mode, theme) => {

        console.log(theme);

        history.push("/quizz");
        dispatch(initSession(mode, user.player_id, theme+1))

    }

    const chooseTheme = (mode) => {
        setShowThemes(true);
    }

    return (
        <section className="w-full text-dark">
            <header className="mt-20 text-align-center">
                <h1 className="big font-black mb-4">The web quizz</h1>
                <p className="f2 font-normal mb-10 mt-2">Bonjour à toi, oh grand.e aventurier.e !</p>
                <p className="lh-4 f4 w-half my-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <i className="fill-white stroke-dark w-20 block mb-2 my-auto mb-10 mt-10"><Arcade /></i>
                <hr className="bw-1 bc-dark w-33-per bs-solid br-10"></hr>
            </header>

            {modsCollection &&
                <div className="mt-20 br-10 pt-5 pb-15 px-10">
                    {!showThemes && (<>
                        <p className="f1 font-light mb-13 font-light"> 1 - Choisie un mode de jeu pour commencer le quizz.</p>
                        <ul className="flex justify-between item-center">
                            {
                                modsCollection.map((item, i) => {
                                    return (
                                        <li className="mx-6 flex-grow-1 w-33-per text-align-center flex justify-center flex-col items-center text-white" key={item.id}>
                                            <div onClick={() => item.id === 1 ? start_game(item.id) : chooseTheme(item.id)} className="bg-dark py-4 px-4 br-10 w-full flex justify-center flex-col items-center py-10 cursor-pointer shadow-1 hover:bg-white hover:text-dark transition hover:scale-11">
                                                <i className="fill-white stroke-dark w-20 block mb-2">{modsIllustration[i]}</i>
                                                <span className="font-bold f4 uppercase">{item.label}</span>
                                                <hr className="bw-1 bc-white w-half bs-solid br-10 my-5"></hr>
                                                <span className="font-normal f4">{item.description}</span>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </>)}
                    {showThemes && (<>
                        <p className="f1 font-light mb-13 font-light"> 1 - Choisie un thème tech de jeu pour commencer le quizz.</p>
                        <ul className="flex justify-between item-center">
                            {
                                categories.map((item, i) => {
                                    return (
                                        <li className="mx-6 flex-grow-1 w-33-per text-align-center flex justify-center flex-col items-center text-white" key={i}>
                                            <div onClick={() => start_game(2, i)} className="bg-dark py-4 px-4 br-10 w-full flex justify-center flex-col items-center py-10 cursor-pointer shadow-1 hover:bg-white hover:text-dark transition hover:scale-11">
                                                <i className="fill-white stroke-dark w-20 block mb-2">{categoriesIllustration[i]}</i>
                                                <span className="font-bold f4 uppercase">{item}</span>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </>)}
                </div>
            }
        </section>
    )
}

export default Home;