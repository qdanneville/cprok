import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Calendar from '../calendar';
import DashboardHome from './home';
import Browse from '../browse';
import Nav from '../nav';

const Dashboard = (props) => {

    return (
        <section className="flex h-100-vh">
            <Router>
                <nav className="bg-green p-6">
                    <span>Left nav</span>
                    <ul className="flex flex-col ">
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
                <main className="bg-blue p-6 flex-grow-1">
                    <Nav fromDashboard={true} />
                    <section className="bg-salmon p-10">
                        <Switch>
                            <Route path="/dashboard/browse/">
                                <Browse />
                            </Route>
                            <Route path="/dashboard/calendar/">
                                <Calendar />
                            </Route>
                            <Route path="/dashboard/">
                                <DashboardHome />
                            </Route>
                        </Switch>
                    </section>
                </main>
            </Router>
        </section>
    )
}

export default Dashboard
