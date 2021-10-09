import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <>
            <div id="main" class="alt">


                <section id="one">
                    <div class="inner">
                        <div className="errorpage">
                            <div className="error">
                                <h1>4<span>0</span>4</h1>
                            </div>
                            <h2 className="nfhomeLink">We are sorry, page not found!</h2>
                            <button><Link to="/">Back to Home</Link></button>
                        </div>

                    </div>
                </section>
            </div>
        </>
    )
}

export default NotFound
