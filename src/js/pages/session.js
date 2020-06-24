import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Session = (props) => {

    const dispatch = useDispatch();
    const currentQuestion = useSelector(state => state.session.current_question)

    if (!currentQuestion || currentQuestion.isLoading) return <i className="loader"></i>

    const question = currentQuestion.question.question
    const answers = currentQuestion.question.answers

    return (
        <section>
            <div className="">
                <header className="bg-white br-10 shadow-3 p-10">
                    <span className="">{question.label}</span>
                </header>
                <div className="">
                    {
                        Array.isArray(answers) ? answers.map(answer => {
                            return (<span>
                                {answer.label}
                            </span>)
                        }) : <span>{answers}</span>
                    }
                </div>
            </div>
        </section>
    )
}

export default Session;