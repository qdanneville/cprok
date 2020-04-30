import React, { useState } from 'react'
import Header from '../components/header'
import Notification from './notification'

import { clearUser } from '../utils/local-storage'

import '../../less/style.less'

const NotificationInitialState = {
    message: '',
    isVisible: false,
    options: {},
};

const Layout = (props) => {
    const [notification, setNotification] = useState(NotificationInitialState)

    const handleNotification = (notificationProps) => {

        setNotification(notificationProps)

        setTimeout(() => {
            setNotification(NotificationInitialState)
        }, 4000)
    }

    const signout = () => {
        props.setUser(null);
        clearUser();
        handleNotification({
            message: 'User correctly sign out',
            isVisible: true,
            options: {
                type: 'success'
            },
        })
    }

    return (
        <div className="app-wrapper bg-grey">
            <Notification notification={notification} />
            <Header user={props.user} signout={signout} />
            <main className="common-container">
                {props.children}
            </main>
        </div>
    )
}

export default Layout