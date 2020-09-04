import React from 'react'
import useHeaderTitle from '../hooks/useHeaderTitle';

const Browse = (props) => {

    useHeaderTitle('My browsing page youhou');

    return (
        <h2>Browse</h2>
    )
}

export default Browse;