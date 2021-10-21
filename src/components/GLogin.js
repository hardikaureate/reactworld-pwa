import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const clientId = "1026222453802-j26s4g6kp69puc4frlmfhjlrni4i3d26.apps.googleusercontent.com";

const GLogin = () => {
    const [loading, setLoading] = useState('Loading...');
    const [user, setUser] = useState(null);

    const handleLoginSuccess = (response) => {
        console.log("Login Success ", response);
        setUser(response.profileObj);
        setLoading();
    }

    const handleLoginFailure = error => {
        console.log("Login Failure ", error);
        setLoading();
    }

    const handleLogoutSuccess = (response) => {
        console.log("Logout Success ", response);
        setUser(null);
    }

    const handleLogoutFailure = error => {
        console.log("Logout Failure ", error);
    }

    const handleRequest = () => {
        setLoading("Loading...");
    }

    const handleAutoLoadFinished = () => {
        setLoading();
    }

    return (
        <>
            <div id="main" class="alt">
                <section id="one">
                    <div class="inner googleuserTitle">
                        <h3>Login with Google using React - <a href="https://www.cluemediator.com/" target="_blank" rel="noopener noreferrer">Clue Mediator</a></h3>
                        {user ?
                            <div>
                                <div className="name">Welcome {user.name}!</div>
                                <GoogleLogout
                                    clientId={clientId}
                                    onLogoutSuccess={handleLogoutSuccess}
                                    onFailure={handleLogoutFailure}
                                />
                                <pre>{JSON.stringify(user, null, 2)}</pre>
                                <div class="row">
                                    <div class="col-12 col-12-small">
                                        <div class="table-wrapper googleuserinfo">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Email</th>
                                                        <th>Avatar</th>
                                                        <th>Google ID</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>{user.name}</td>
                                                        <td>{user.email}</td>
                                                        <td><img src={user.imageUrl} alt={user.imageUrl} height="50px" width="50px" /></td>
                                                        <td>{user.googleId}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div> :
                            <GoogleLogin
                                clientId={clientId}
                                buttonText={loading}
                                onSuccess={handleLoginSuccess}
                                onFailure={handleLoginFailure}
                                onRequest={handleRequest}
                                onAutoLoadFinished={handleAutoLoadFinished}
                                isSignedIn={true}
                            />}
                    </div>
                </section>
            </div>
        </>
    );
}

export default GLogin
