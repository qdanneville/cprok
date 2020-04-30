import React, { useState, useEffect, Component } from 'react'

const notificationOptions = {
    success: 'bg-green',
    warning: 'bg-salmon',
    error: 'bg-red',
    default: 'bg-white'
}

const Notification = ({ notification }) => {

    const { message, options, isVisible } = notification;

    if (!isVisible || message.length === 0) return (<></>)

    return (
        <div className={`notification absolute r-0 t-24 py-2 px-5 bw-2 bc-blue text-blue-dark shadow-1 br-4 br-left ${notificationOptions[`${options.type}`] ? notificationOptions[`${options.type}`] : notificationOptions['default']}`}>
            <span className="font-bold">{message}</span>
        </div>
    )
}

export default Notification