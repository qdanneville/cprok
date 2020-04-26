import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {

    const { user } = props

    return (
        <header className="bg-teal-5 py-6">
            <nav>
                <ul className="flex justify-between px-6 ">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        {
                            user ?
                                <div className="flex align-items justify-center">
                                    <i className="w-10 h-10"></i>
                                    <div className="flex flex-col">
                                        <span className="font-bold">{user.firstname}</span>
                                        <span className="font-normal">{user.lastname}</span>
                                        <button onClick={props.signout} className="font-normal">Sign out</button>
                                    </div>
                                </div>
                                :
                                <Link to="/login">Login</Link>
                        }
                    </li>

                </ul>
            </nav>
        </header>
    )
}

export default Header;