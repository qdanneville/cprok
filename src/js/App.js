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

    const [appName, setAppName] = useState('Default app name')

    const handleChangeHeaderTitle = (title) => {
        setAppName(title)
    }

    return (
        <Router>
            <Header title={appName} onChangeHeaderTitle={handleChangeHeaderTitle} />
            <div>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/login">
                        <Login />
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