import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';

export default function Navbar() {
    const [isAuthenticated, setisAuthenticated] = useState(false)
    const history = useHistory();
    function handleSignOut(params) {
        setisAuthenticated(false)
        history.push("/")
    }
    function handleSignIn(params) {
        setisAuthenticated(true)
    }
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <NavLink className="navbar-brand" to="/">HRMS Projesi</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            {isAuthenticated ? <SignedIn signOut={handleSignOut}></SignedIn> : <SignedOut signIn={handleSignIn}></SignedOut>}
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}

