import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import api, { addAuth } from '../utils/api'
import { setStorageUser } from '../utils/local-storage'

const Login = (props) => {
    let history = useHistory();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        setError(null);
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
                props.setUser(response.data.data.user)
                history.replace({ pathname: "/", state: { fromLogin: true } });
            })
            .catch(error => {
                return setError(error.response.data.message);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    return (
        <div className="flex flex-col justify-center">
            {
                isLoading
                    ? <i className="loader"></i>
                    : <form onSubmit={handleSubmit} className={error ? "form-error bc-blue bw-2 bs-solid py-8 px-6 br-6 shadow-3 bg-white" : "bc-blue bw-2 bs-solid py-8 px-6 br-6 shadow-3 bg-white"}>
                        {error && <span className="font-bold text-white f6 block bc-red bg-red py-2 px-2 br-4 text-align-center mb-2">{error}</span>}
                        <div className="flex flex-col">
                            <label className="font-normal f4 mb-1">Username</label>
                            <input className="f4 placeholder:text-grey bs-solid bw-1 bc-grey-2 br-4 py-1" onChange={(event) => setUsername(event.target.value)} type="text" placeholder="username" required />
                        </div>
                        <div className="flex flex-col mt-2">
                            <label className="font-normal f4 mt-2 mb-1">Password</label>
                            <input className="f4 placeholder:text-grey bs-solid bw-1 bc-grey-2 br-4 py-1" onChange={(event) => setPassword(event.target.value)} type="password" placeholder="*****" required />
                        </div>
                        <br />
                        <button className="btn w-full" type="submit">Se connecter</button>
                        <br />
                    </form>
            }
        </div>
    )
}

export default Login;