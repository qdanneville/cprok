import React, { useState, useEffect } from 'react';
import Header from './header'
import Footer from './footer'
import Notifications from './notifications'

import {
    useHistory,
    useLocation
} from "react-router-dom";

const Layout = (props) => {
    const location = useHistory();

    const [notification, setNotification] = useState({});
    const { user } = props;

    useEffect(() => {
        if (location.action === 'REPLACE' && location.location.pathname === "/login")
            return setNotification({ message: 'You must be logged in to see this page :)', type: "error" })
        if (location.location.state.fromLogin)
            return setNotification({ message: 'User correctly authenticated :)', type: "success" })
    }, [])

    return (
        <div className="app-wrapper">
            <Notifications notification={notification} />
            <Header signout={props.signout} user={user} />
            <main>
                {React.cloneElement(props.children, { setNotification: (notification) => setNotification(notification) })}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;