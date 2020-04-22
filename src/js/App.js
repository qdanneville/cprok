import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Home from './pages/home';
import Login from './pages/login';
import Layout from './components/layout';

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/login">
                        <Layout>
                            <Login />
                        </Layout>
                    </Route>
                    <Route path="/">
                        <Layout>
                            <Home />
                        </Layout>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;