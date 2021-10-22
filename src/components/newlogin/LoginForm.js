import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { setUserSession } from './Common'

const LoginForm = (props) => {
    const username = useFormInput('')
    const password = useFormInput('')
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleLogin = () => {
        setError(null)
        setLoading(true)
        axios.post('https://localhost:4000/users/signin', { username: username.value, password: password.value })
            .then(response => {
                setLoading(false)
                setUserSession(response.data.token, response.data.user)
                props.history.push('/logindashboard')
            }).catch(error => {
                setLoading(false)
                if (error.response.status === 401) setError(error.response.data.message)
                else setError('Something went wrong. Please try again later.')
            })
    }

    return (
        <div>
            Login <br /><br />
            <div>
                Username<br />
                <input type="text" {...username} autoComplete="username" />
            </div>
            <div style={{ marginTop: 10 }}>
                Password<br />
                <input type="password" {...password} autoComplete="password" />
            </div>
            {error &&
                <>
                    <small style={{ color: 'red' }}>{error}</small><br />
                </>}
            <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
        </div>
    )
}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue)
    
    const handleChange = e => {
        setValue(e.target.value)
    }
    return {
        value,
        onchange: handleChange
    }
}

export default LoginForm
