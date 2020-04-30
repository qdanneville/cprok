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
        getModules();
    }, [])

    const getModules = () => {

        setIsLoading(true)

        api
            .get(`/modules/skills/?user=${props.user.user_id}`)
            .then(response => {
                setModules(response.data.data);
            })
            .finally(() => setIsLoading(false))
    }


    const updateUserLevel = (skill, level) => {

        api
            .put(`/levels/update/?user=${props.user.user_id}&skill=${skill}&level=${level}`)
            .then(response => getModules())
            .catch(error => {
                //TODO handle update level ERROR
            })
    }

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
                                                                    <div className="flex flex-col justify-between w-full mb-2 mt-1">
                                                                        <div className="text-align-center br-6 bg-grey py-4 px-6">
                                                                            <span className="f6 font-bold">Niveau : {skill.level.id || 1}</span>
                                                                            <span className="block f5 font-normal capitalize mt-1">{skill.level.name || 'Imiter'}</span>
                                                                        </div>
                                                                        <div className="f4 text-align-center mt-2">
                                                                            <span className="f6 font-bold mb-2 block">Changer son niveau</span>
                                                                            <ul className="flex justify-center">
                                                                                <li><button className="mx-2 br-4 cursor-pointer" onClick={() => updateUserLevel(skill.id, 1)}>1</button></li>
                                                                                <li><button className="mx-2 br-4 cursor-pointer" onClick={() => updateUserLevel(skill.id, 2)}>2</button></li>
                                                                                <li><button className="mx-2 br-4 cursor-pointer" onClick={() => updateUserLevel(skill.id, 3)}>3</button></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </main>
                                                                <hr className="bl-w-0 bt-w-0 br-w-0 bb-w-1 bs-solid bc-grey" />
                                                                <footer className="flex justify-end">
                                                                    <Link to={`/skills/${skill.id}`}>
                                                                        <CircleArrow />
                                                                    </Link>
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