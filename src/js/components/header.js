import React from 'react'
import {useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom'
import { clearUser } from '../utils/local-storage'

import { Link } from 'react-router-dom';

const user = null

const Header = (props) => {
    const history = useHistory();
    const treeName = useSelector(state => state.tree.name);

    const signout = () => {
        clearUser();
        dispatch({
            type: 'setUser',
            newUser: null
        })
        dispatch({
            type: 'setNotification',
            newNotification: {
                message: 'User correclty sign out',
                isVisible: true,
                options: {
                    type: 'success'
                }
            }
        })
        history.replace({ pathname: "/login" })
    }

    return (
        <header className="">
            <nav className="common-container py-3">
                <ul className="flex justify-between">
                    <li>
                        <Link className="font-black f1 text-blue-dark" to="/">{treeName}</Link>
                    </li>
                    {
                        user ?
                            (
                                <li className="flex flex-col align-start">
                                    <div className="flex justify-center items-center">
                                        <i className="w-13 h-13 br-50 bg-yellow shadow-1"></i>
                                        <div className="flex flex-col ml-2 text-blue-dark">
                                            <span className="font-bold f4">{user.firstname}</span>
                                            <span className="f4">{user.lastname}</span>
                                            <a className="underline f6 mt-1 cursor-pointer" onClick={signout}>Sign out</a>
                                        </div>
                                    </div>
                                </li>
                            ) :
                            (
                                <li>
                                    <Link className="btn" to="/login">Sign in</Link>
                                </li>
                            )
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header