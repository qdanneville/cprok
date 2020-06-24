import React, { useState } from 'react'
import Header from '../components/header'
import Notification from './notification'

import '../../less/style.less'

const Layout = (props) => {
    return (
        <div className="app-wrapper">
            {/* <Notification /> */}
            <Header />
            <main className="common-container">
                {props.children}
            </main>
        </div>
    )
}

export default Layout