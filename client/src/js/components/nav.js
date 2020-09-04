import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Nav = (props) => {

    const title = useSelector(state => state.header.title);

    return (
        <nav>
            <h2>{title}</h2>
            <ul className="flex items-center align-center justify-between px-4 bg-red">
                {
                    !props.fromDashboard &&
                    <li className="bg-yellow">
                        <Link to="/">JEAN LIBRARY LOGO</Link>
                    </li>
                }
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/browse/">browse</Link>
                </li>
                <li>
                    <Link to="/dashboard/">Dashboard</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav