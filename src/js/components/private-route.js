import React from 'react'
import { useStateValue } from '../store/'
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {

    const [{user}] = useStateValue();

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { form: location }
                            }}
                        />
                    )
            }
        />
    );
}

export default PrivateRoute