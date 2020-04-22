import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

import api, { addAuth } from '../utils/api';
import { setUser } from '../utils/local-storage'


const Login = (props) => {
    let history = useHistory();

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [errors, setErrors] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        setErrors(null);

        api
            .post('/users/authenticate',
                { username, password })
            .then(response => {
                setUser(response.data.data.user);
                console.log(response.data.data.token);
                addAuth(response.data.data.token);
                history.replace({ pathname: "/" });
            })
            .catch(error => {
                return setErrors('Username or password missmatch');
            })

    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="">
                    <label>Username</label>
                    <input onChange={(e) => setUsername(e.target.value)} type="text" name="username" required />
                </div>
                <div className="">
                    <label>Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" required />
                </div>
                <div className="">
                    <span>{errors}</span>
                </div>
                <button type="submit">login</button>
            </form>
        </>
    )
}

export default Login