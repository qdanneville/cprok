import React from 'react';
import Header from './header'
import Footer from './footer'
import Notifications from './notifications'

const Layout = (props) => {

    console.log('Layout props :', props);

    return (
        <div className="layout">
            <Notifications message="lol" />
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;