import React, { useState, useEffect } from 'react'

const notificationOptions = {
    success: 'bg-green',
    warning: 'bg-salmon',
    error: 'bg-red',
    default: 'bg-white'
}

const Notification = (props) => {

    const [timeoutIsOn, setTimeoutIsOn] = useState(false);
    const { message, isVisible, options } = notification

    useEffect(() => {
        setTimeoutIsOn(true)

        if (!timeoutIsOn) {
            setTimeout(() => {
                setTimeoutIsOn(false)
                dispatch({
                    type: 'setNotification',
                    newNotification: {
                        message: '',
                        isVisible: false,
                        options: {}
                    }
                })
            }, 4000)
        }

    }, [message])

    if (!isVisible || message.length === 0) return (<></>)

    return (
        <div className={`notification absolute r-0 t-24 py-2 px-5 bw-2 bc-blue text-blue-dark shadow-1 br-4 br-left ${notificationOptions[`${options.type}`] ? notificationOptions[`${options.type}`] : notificationOptions['default']}`}>
            <span className="font-bold">{message}</span>
        </div>
    )
}

export default Notification