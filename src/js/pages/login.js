import React, { useState } from 'react'
import api, { addAuth } from '../utils/api'
import { setStorageUser } from '../utils/local-storage'

const Login = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        setMessage(null);
        setIsLoading(true);

        const body = {
            username,
            password,
        }

        api
            .post('/users/authenticate', body)
            .then(response => {
                addAuth(response.data.data.token)
                setStorageUser(response.data.data.user)
                setMessage(response.data.message)
            })
            .catch(error => {
                return setMessage(error.response.data.message);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    return (
        <div className="">
            {
                isLoading
                    ? <span>is loading</span>
                    : <form onSubmit={handleSubmit}>
                        <div className="">
                            <label>Username</label>
                            <input onChange={(event) => setUsername(event.target.value)} type="text" required />
                        </div>
                        <div className="">
                            <label>Password</label>
                            <input onChange={(event) => setPassword(event.target.value)} type="password" required />
                        </div>
                        <br />
                        <button type="submit">Se connecter</button>
                        <br />
                        {message && <span>{message}</span>}
                    </form>
            }
        </div>
    )
}

export default Login;