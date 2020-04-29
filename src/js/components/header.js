import React from 'react'

import { Link } from 'react-router-dom';

const Header = (props) => {

    return (
        <header className="">
            <nav className="common-container py-3">
                <ul className="flex justify-between">
                    <li>
                        <Link className="font-black f1 text-blue-dark" to="/">CPROK.</Link>
                    </li>
                    {
                        props.user ?
                            (
                                <li className="flex flex-col align-start">
                                    <div className="flex justify-center items-center">
                                        <i className="w-13 h-13 br-50 bg-yellow shadow-1"></i>
                                        <div className="flex flex-col ml-2 text-blue-dark">
                                            <span className="font-bold f4">{props.user.firstname}</span>
                                            <span className="f4">{props.user.lastname}</span>
                                            <a className="underline f6 mt-1 cursor-pointer" onClick={props.signout}>Sign out</a>
                                        </div>
                                    </div>
                                </li>
                            ) :
                            (
                                <li>
                                    <button className="btn"><Link to="/login">Sign in</Link></button>
                                </li>
                            )
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header