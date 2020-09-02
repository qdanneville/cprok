import React from 'react'
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {

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