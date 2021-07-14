import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class HomePage extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="jumbotron mt-5">
                        <h1 className="display-4">İş mi Arıyorsunuz ? Ya da Personel ?</h1>
                        <p className="lead">HRMS Projesi Sayesinde Kendi İsteğinize Uygun İş ve Personelleri Bulabilirsiniz.</p>
                        <hr className="my-4"></hr>
                        <p>Hala Kayıt Olmadıysanız Kayıt Ol Butonuna Tıklayarak Sisteme Erişim Sağlayabilirsiniz.</p>
                        <p className="lead d-flex justify-content-center">
                            <Link className="btn btn-success w-25">Kayıt Ol</Link>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage
