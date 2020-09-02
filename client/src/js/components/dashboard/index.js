import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Calendar from '../calendar';
import DashboardHome from './home';
import Browse from '../browse';

const Dashboard = (props) => {
    return (
        <section>
            <h1>Dashboard</h1>
            <Router>
                <h1>main connected nav</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/dashboard/">Home</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/browse/">Browse</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/calendar/">Calendar</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/dashboard/browse/" component={Browse} />
                    <Route path="/dashboard/calendar/" component={Calendar} />
                    <Route path="/dashboard/" component={DashboardHome} />
                </Switch>
            </Router>
        </section>
    )
}

export default Dashboard
