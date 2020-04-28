import React from 'react'

import { Link } from 'react-router-dom';

const Header = (props) => {

    console.log('header props :', props);

    return (
        <header>
            <h1>{props.title}</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
            <button onClick={() => props.onChangeHeaderTitle('New header title')}>Change header title</button>
        </header>
    )
}

export default Header