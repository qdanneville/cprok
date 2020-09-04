import React, { useState } from 'react'
import useHeaderTitle from '../hooks/useHeaderTitle';

const Calendar = (props) => {
    const [flag, setFlag] = useState(false);

    useHeaderTitle('My calendar page');

    console.log(flag);

    return (
        <>
            <h2>Calendar</h2>
            <button onClick={() => setFlag(true)} className="bg-red p4">change state</button>
        </>
    )
}

export default Calendar;