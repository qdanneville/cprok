import React, { useState } from 'react'

import '../../less/style.less'

const Layout = (props) => {
    return (
        <div className="app-wrapper">
            <main className="common-container">
                {props.children}
            </main>
        </div>
    )
}

export default Layout