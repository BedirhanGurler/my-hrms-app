import React from 'react'
import { Link } from 'react-router-dom'

export default function SignedIn({signOut}) {
    return (
        <div>
            <div class="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Bedirhan Gürler
                </button>
                <div class="dropdown-menu bg-dark" aria-labelledby="dropdownMenu2">
                    <Link className="nav-link" >Profilim</Link>
                    <Link className="nav-link" to="/addjob">İlan Ver</Link>
                    <Link className="nav-link" to="/alljobs">İş İlanları</Link>
                    <Link className="nav-link" onClick={signOut}>Çıkış Yap</Link>
                </div>
            </div>
        </div>
    )
}

