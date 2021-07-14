import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SignedOut({ signIn }) {
    return (
        <div>
            <ul className="navbar-nav ml-auto">
                <li class="nav-item ">
                    <NavLink className="nav-link bg-primary mr-2 active" onClick={signIn} to="/">Giriş Yap</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link bg-success active mr-2" to="/signup">Kayıt Ol</NavLink>
                </li>
            </ul>
        </div>
    )
}

