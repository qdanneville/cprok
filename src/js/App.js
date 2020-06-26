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
import Session from './pages/session';
import Result from './pages/result';

import { AuthRoute } from './components/auth-route';
import Layout from './components/layout';
import Dashboard from './pages/dashboard';


const App = () => {

    const dispatch = useDispatch();
    const appInitialized = useSelector(state => state.auth.appInitialized);

    useEffect(() => {
        dispatch(fetchUser());
        dispatch({ type: 'SET_TREE_NAME', payload: 'CPROK quizz.' })
    }, [])

    if (!appInitialized) return <div className="w-full my-auto text-align-center"><i className="loader"></i></div>

    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path="/login" component={Login} />
                    <AuthRoute exact path="/" component={Home} />
                    <AuthRoute path="/quizz/" component={Session} />
                    <AuthRoute path="/result/" component={Result} />
                    <AuthRoute path="/dashboard/" component={Dashboard} />
                </Switch>
            </Layout>
        </Router>
    )
}

export default App