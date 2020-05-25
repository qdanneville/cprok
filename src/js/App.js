import React, { useEffect } from 'react';
import { fetchUser } from './store/auth'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import configureStore from './store/store'

import Home from './pages/home';
import Login from './pages/login';

import SkillDetails from './pages/skill-details'

import PrivateRoute from './components/private-route';
import Layout from './components/layout';


const App = () => {

    const dispatch = useDispatch();
    const appInitialized = useSelector(state => state.auth.appInitialized);

    useEffect(() => {
        // dispatch(fetchUser());
        dispatch({ type: 'SET_TREE_NAME', payload: 'CPROK.' })
    }, [])

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