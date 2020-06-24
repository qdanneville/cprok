import React, { useEffect } from 'react';
import { fetchUser } from './store/auth'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import Home from './pages/home';
import Login from './pages/login';

import SkillDetails from './pages/skill-details'

import { AuthRoute } from './components/auth-route';
import Layout from './components/layout';


const App = () => {

    const dispatch = useDispatch();
    const appInitialized = useSelector(state => state.auth.appInitialized);

    useEffect(() => {
        dispatch(fetchUser());
        dispatch({ type: 'SET_TREE_NAME', payload: 'CPROK quizz.' })
    }, [])

    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/skills/:id" component={SkillDetails} />
                    <AuthRoute exact path="/" component={Home} />
                </Switch>
            </Layout>
        </Router>
    )
}

export default App