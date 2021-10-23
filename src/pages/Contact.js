import React from 'react'
import Contactform from '../components/Contactform'
import RegisterForm from '../components/RegisterForm'

const Contact = () => {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0)
    }
    return (
        <div>
            <Contactform />
            <RegisterForm />
        </div>
    )
}

export default Contact
