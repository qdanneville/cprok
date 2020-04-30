import React, { useState, useEffect } from 'react';
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
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let storageUser = getStorageUser();

        if (storageUser)
            setUser(storageUser)

        setIsLoading(false)
    }, [])

    if (isLoading) return <span><i className="loader"></i></span>

    return (
        <Router>
            <Layout setUser={setUser} user={user}>
                <Switch>
                    <Route path="/login">
                        <Login setUser={setUser} />
                    </Route>
                    <PrivateRoute user={user} path="/skills/:id">
                        <SkillDetails />
                    </PrivateRoute>
                    <PrivateRoute user={user} path="/">
                        <Home user={user} />
                    </PrivateRoute>
                </Switch>
            </Layout>
        </Router>
    )
}

export default App