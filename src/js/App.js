import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Home from './pages/home'
import Login from './pages/login'
import PrivateRoute from './components/private-route';

import Layout from './components/layout';

const App = () => {
    const [user, setUser] = useState(null);

    return (
        <Router>
            <Layout setUser={setUser} user={user}>
                <Switch>
                    <Route path="/login">
                        <Login setUser={setUser} />
                    </Route>
                    <PrivateRoute user={user} path="/">
                        <Home />
                    </PrivateRoute>
                </Switch>
            </Layout>
        </Router>
    )
}

export default App

// function App() {
    //Code goes here
// }