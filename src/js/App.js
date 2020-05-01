import React, { useState, useEffect } from 'react';
import { useStateValue } from './store/'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Home from './pages/home';
import Login from './pages/login';

import SkillDetails from './pages/skill-details'

import PrivateRoute from './components/private-route';
import Layout from './components/layout';

import { getStorageUser, clearUser } from './utils/local-storage'

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    const [{ }, dispatch] = useStateValue();

    useEffect(() => {
        let storageUser = getStorageUser();

        if (storageUser)
            dispatch({
                type: 'setUser',
                newUser: storageUser
            })

        setIsLoading(false)
    }, [])

    if (isLoading) return <span><i className="loader"></i></span>

    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/skills/:id">
                        <SkillDetails />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </Layout>
        </Router>
    )
}

export default App