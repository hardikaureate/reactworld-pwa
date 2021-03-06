import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getToken } from './Common'

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <div>
            <Route
                {...rest}
                render={(props) => getToken()
                    ? <Component {...props} />
                    : <Redirect to={{ pathname: '/loginform', state: { from: props.location } }} />
                }
            />
        </div>
    )
}

export default PrivateRoute
