import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Dashboard from './components/dashboard/index'
import Home from './pages/home'
import Browse from './components/browse'
import { AuthRoute } from './components/auth-route'


import '../less/style.less';

const App = () => {

    return (
        <section>
            <Router>
                <nav>
                    <ul>
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
                <Switch>
                    <AuthRoute component={Dashboard} path="/dashboard/" />
                    <Route path="/browse/" component={Browse} />
                    <Route path="/" component={Home} />
                </Switch>
            </Router>
        </section>
    )
}

export default App