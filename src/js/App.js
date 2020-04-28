import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Home from './pages/home'
import Login from './pages/login'
import Header from './components/header'

const App = () => {

    const [user, setUser] = useState(null);

    return (
        <Router>
            <Header user={user} />
            <div>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/login">
                        <Login setUser={setUser} />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App

// function App() {
    //Code goes here
// }