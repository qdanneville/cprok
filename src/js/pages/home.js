import React, { useState } from 'react'
import api from '../utils/api'

const Home = (props) => {

    const [padawans, setPadawans] = useState(['Alexandre', 'Thibault', 'Clémence', 'Elena', 'Jega', 'Julien', 'Lilian', 'Rim', 'Shelley'])

    api
        .get('/skills/')
        .then(response => console.log(response))

    return (
        <select>
            {padawans.map(padawan => <option key={padawan}>{padawan}</option>)}
            {/* {
                padawans.map(padawan => {
                    return (<li key={padawan}>{padawan}</li>)
                })
            } */}
        </select>
    )
}

export default Home;