import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Home from './pages/home';
import Login from './pages/login';
import Layout from './components/layout';
import PrivateRoute from './components/private-route';
import { clearUser } from './utils/local-storage';

//Style
import "../less/style.less";

const App = () => {

    const [user, setUser] = useState(null);

    const signout = () => {
        setUser(null);
        clearUser();
    }

    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/login">
                        <Layout>
                            <Login setUser={setUser} />
                        </Layout>
                    </Route>
                    <PrivateRoute user={user} path="/">
                        <Layout signout={signout} user={user}>
                            <Home />
                        </Layout>
                    </PrivateRoute>
                </Switch>
            </div>
        </Router>
    )
}

export default App;