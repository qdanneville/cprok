import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Header from '../components/header'
import { getStorageUser, clearUser } from '../utils/local-storage'


import '../../less/style.less'

const Layout = (props) => {

    let history = useHistory();

    useEffect(() => {
        let storageUser = getStorageUser();
        if (storageUser) {
            props.setUser(storageUser)
            history.replace(history.location.state.form);
        }
    }, [])

    const signout = () => {
        props.setUser(null);
        clearUser();
    }

    return (
        <div className="app-wrapper bg-grey">
            <Header user={props.user} signout={signout} />
            <main className="common-container">
                {props.children}
            </main>
        </div>
    )
}

export default Layout