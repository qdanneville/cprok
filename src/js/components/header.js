import React from 'react'

import { Link } from 'react-router-dom';

const Header = (props) => {

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    {
                        props.user ?
                            (
                                <li>
                                    <span>{props.user.firstname}</span>
                                    <br />
                                    <button>Logout</button>
                                </li>
                            ) :
                            (
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                            )
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header