import React, { useEffect } from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Profile from '../profile';
import History from '../history';
import Mybooks from '../mybooks';

const DashboardHome = (props) => {
    return (
        <section>
            <h1>nav home dashboard</h1>
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/dashboard/mybooks/">My books</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/history/">History</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/profile/">Profile</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/dashboard/mybooks/" component={Mybooks} />
                    <Route path="/dashboard/history/" component={History} />
                    <Route path="/dashboard/profile/" component={Profile} />
                </Switch>
            </Router>
        </section>
    )
}

export default DashboardHome
