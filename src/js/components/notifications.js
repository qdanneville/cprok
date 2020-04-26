import React from 'react';

const Notifications = ({ notification }) => {

    return (
        <>
            {
                notification.message
                &&
                <div className={notification.type === "success" ? "notification success" : "notification error"}>
                    {notification.message}
                </div>
            }
        </>
    )
}

export default Notifications;