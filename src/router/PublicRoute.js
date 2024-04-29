import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';


export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    // console.log(isAuthenticated)

    return (
        <Route {...rest}
            component={(props) => {

                if (props?.location?.pathname == "/login") {
                    if (isAuthenticated) {
                        return <Redirect to="/dashboard" />
                    } else {
                        return <Component {...props} />
                    }

                } else {
                    return <Component {...props} />
                }


            }}

        />
    )
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
