import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../utils/api'

import CircleArrow from '../../assets/svg/circle-arrow.svg'

let modulesColors = [
    'yellow',
    'green',
    'salmon'
]

const Home = (props) => {

    const [modules, setModules] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)

        api
            .get('/modules/skills/')
            .then(response => {
                setModules(response.data.data);
            })
            .finally(() => setIsLoading(false))
    }, [])

    console.log('modules :', modules);

    return (
        <section>
            <h1 className="f1 font-light text-blue-dark block text-align-center mb-10">Arbre de compétence</h1>
            {
                isLoading
                    ? <div className="block text-align-center"><i className="loader"></i></div>
                    : (
                        <ul className="flex justify-between flex-col-xs">
                            {
                                modules.map((module, index) => {
                                    return (
                                        <li key={module.id} className={`module mx-4 ${modulesColors[index]} mx-2-md`}>
                                            <div className="bg-white shadow-3 br-6 overflow-hidden relative z-index-2">
                                                <header className={` py-3 px-3 bg-${modulesColors[index]}`}>
                                                    <h2 className="font-normal f4 text-blue-dark m-0">{module.name}</h2>
                                                </header>
                                                <main className="py-4 px-3 flex justify-between">
                                                    <span className="font-bold f4 text-blue-dark">{`${module.skills.length} compétences`}</span>
                                                    <Link to="/"><CircleArrow /></Link>
                                                </main>
                                            </div>
                                            <ul className="relative z-index-2">
                                                {
                                                    module.skills.map(skill => {
                                                        return (
                                                            <li key={skill.id} className="bg-white shadow-3 br-6 overflow-hidden my-6 py-3 px-3 mx-6 mx-0-md">
                                                                <header className={`bg-white`}>
                                                                    <h3 className="font-bold f5 text-blue-dark m-0">{skill.name}</h3>
                                                                </header>
                                                                <hr className="bl-w-0 bt-w-0 br-w-0 bb-w-1 bs-solid bc-grey" />
                                                                <main className="flex justify-between text-blue-dark">
                                                                    <div>
                                                                        <span className="f6 font-bold">Niveau : 1</span>
                                                                        <span className="block f6 font-normal">Imiter</span>
                                                                    </div>
                                                                </main>
                                                                <footer className="flex justify-end">
                                                                    <Link to="/"><CircleArrow /></Link>
                                                                </footer>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    )
            }
        </section>
    )
}

export default Home;