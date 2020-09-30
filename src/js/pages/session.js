import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import ThumbUp from '../../assets/svg/thumb-up.svg'
import ThumbDown from '../../assets/svg/thumb-down.svg'

import { nextSessionStep } from '../store/session'

const modeLabel = [
    'Libre',
    'Thème',
    'One shot'
]


const Session = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const currentQuestion = useSelector(state => state.session.current_question)
    const session = useSelector(state => state.session.session)
    const questions = useSelector(state => state.session.questions.collection)

    const [didAnswer, setDidAnswer] = useState(false);
    const [currentAnswer, setCurrentAnswer] = useState(null);
    const [success, setSuccess] = useState(false);

    if (!currentQuestion || currentQuestion.isLoading) return <div className="w-full my-auto text-align-center"><i className="loader"></i></div>

    const question = currentQuestion.question.question
    const answers = currentQuestion.question.answers

    const checkAnswer = (answer) => {

        if (didAnswer) return;

        setDidAnswer(true);

        setCurrentAnswer(answer.id);

        if (answer.is_correct) {
            setSuccess(true);
        }

    }

    const nextQuestion = () => {
        if (questions[session.steps + 1]) {
            setDidAnswer(false);
            setCurrentAnswer(null);
            setSuccess(false);
            dispatch(nextSessionStep(session, questions[session.steps + 1], success))
        }
        else history.push('/result')
    }

    return (
        <section className="w-full mt-10">
            <div className="">
                <header className="bg-white br-10 shadow-1flex flex-col overflow-hidden text-dark">
                    <ul className="flex justify-between items-center py-5 bl-w-0 bt-w-0 bb-w-4 br-w-0 bc-dark bs-solid">
                        <li className="flex flex-col justify-center items-center bl-w-0 bt-w-0 bb-w-0 br-w-2 bc-dark bs-solid flex-grow-1">
                            <span className="f4 text-dark font-normal">Mode : <strong className="font-bold">{modeLabel[session.mode - 1]}</strong></span>
                        </li>
                        <li className="flex flex-col justify-center items-center flex-grow-1 bl-w-0 bt-w-0 bb-w-0 br-w-2 bc-dark bs-solid">
                            <span className="">Steps : <strong className="font-bold">{session.steps}</strong></span>
                        </li>
                        <li className="flex flex-col justify-center items-center flex-grow-1">
                            <span className="">Score : <strong className="font-bold">{session.score}</strong></span>
                        </li>
                    </ul>
                    <div className="bg-yellow px-5 py-10 flex items-center">
                        <span className="f1 font-black text-dark ml-5">{question.label}</span>
                    </div>
                </header>
                <div className={`flex flex-wrap my-6 ${didAnswer ? 'did-answer' : ''}`}>
                    {
                        Array.isArray(answers) ? answers.map((answer, i) => {
                            return (
                                <div
                                    onClick={() => checkAnswer(answer)}
                                    className={
                                        `answer p-5 bg-white bs-solid bw-2 bc-dark br-10 flex-grow-1 mr-5 my-2 text-align-center 
                                        text-dark f4 font-bold cursor-pointer shadow-1 hover:bg-dark hover:text-white transition hover:scale-11 relative
                                        ${currentAnswer === answer.id ? 'active' : null}
                                        `
                                    }
                                    key={answer.id}>
                                    <span className="absolute t-2 l-3">
                                        {i + 1}
                                    </span>
                                    <span>
                                        {answer.label}
                                    </span>
                                </div>)
                        }) : <span>{answers}</span>
                    }
                </div>
                {didAnswer &&
                    <div className="flex justify-center items-center mt-10">
                        {didAnswer && success && <div className="flex flex-col items-center justify-center">
                            <i className="fill-green w-10 block mb-2"><ThumbUp /></i>
                            <span className="mx-2 f1 font-black text-green"> Bravo !</span>
                            <span onClick={nextQuestion} className="underline font-bold f3 cursor-pointer mt-4 text-dark">Question suivante</span>
                        </div>}
                        {didAnswer && !success && <div className="flex flex-col items-center justify-center">
                            <i className="fill-red w-10 block mb-2"><ThumbDown /></i>
                            <span className="mx-2 f1 font-black text-red"> Dommage !</span>
                            <span onClick={nextQuestion} className="underline font-bold f3 cursor-pointer mt-4 text-dark">Question suivante</span>
                        </div>}
                    </div>
                }
            </div>
        </section>
    )
}

export default Session;