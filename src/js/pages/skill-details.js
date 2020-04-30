import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


import api from '../utils/api'

const SkillDetails = () => {
    let { id } = useParams();

    const [isLoading, setIsLoading] = useState(false)
    const [skill, setSkill] = useState({})
    const [module, setModule] = useState({})

    useEffect(() => {
        setIsLoading(true)

        api
            .get(`/skills/${id}`)
            .then(response => {
                let skill = response.data.data;

                api
                    .get(`/modules/${skill.module_id}`)
                    .then(response => {
                        let moduleData = response.data.data;

                        setSkill(skill);
                        setModule(moduleData);
                    })
                    .finally(() => setIsLoading(false))

            })
    }, [])

    return (
        <>
            {
                isLoading
                    ? <div className="block text-align-center"><i className="loader"></i></div>
                    : <article className="max-width-600-px mt-6">
                        <header className="text-blue-dark">
                            <div className="bg-white shadow-3 py-4 px-5 mb-8 br-6">
                                <span className="f2 font-bold">Module :</span>
                                <h1 className="f2 font-light">{module.name}</h1>
                            </div>
                            <span className="f3 font-bold">Compétence :</span>
                            <h1 className="f3 font-light">{skill.name}</h1>
                        </header>
                        <hr className="bl-w-0 bt-w-0 br-w-0 bb-w-1 bs-solid bc-grey-2" />
                        <main className="flex flex-col text-blue-dark mt-6">
                            <span className="f5 font-bold">Déscription de la compétence</span>
                            <p className="font-light f5">{skill.description}</p>
                        </main>
                    </article>
            }
        </>
    )
}

export default SkillDetails