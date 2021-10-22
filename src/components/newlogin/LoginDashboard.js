import React from 'react'
import { getUser, removeUserSession } from './Common'

const LoginDashboard = (props) => {
    const user = getUser()

    const handleLogout = () => {
        removeUserSession()
        props.history.push('/loginform')
    }

    return (
        <div>
            Welcome !!!<br /><br />
            {/* Welcome {user.name}!!!<br /><br /> */}
            <input type="button" onClick={handleLogout} value="Logout" />
        </div>
    )
}

export default LoginDashboard
