import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Dashboard from './components/dashboard/index'
import Home from './pages/home'
import Books from './pages/books'
import { AuthRoute } from './components/auth-route'


import '../less/style.less';

const App = () => {

    const lol = useSelector(state => state);

    console.log(lol);

    return (
        <section>
            <Router>
                <Switch>
                    <AuthRoute component={Dashboard} path="/dashboard/" />
                    <Route path="/browse/" component={Books} />
                    <Route path="/" component={Home} />
                </Switch>
            </Router>
        </section>
    )
}

export default App