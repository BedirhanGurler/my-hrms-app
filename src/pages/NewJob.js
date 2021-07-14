import React, { Component } from 'react'
import './NewJob.css';
import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from 'yup';
export class NewJob extends Component {

    constructor(props) {
        super(props)

        this.state = {
            jobTitle: "",
            companyName: "",
            cityName: "",
            minSalary: "",
            maxSalary: "",
            jobDescription: "",
            jobStatus: "",
            aboutCompany: "",
            technonlogies: "",
            thingsToKnow: "",
            extraFeatures: ""
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post("http://localhost:8080/api/jobinformations/addjobinformation", this.state)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }
    render() {
        const {
            jobTitle,
            companyName,
            cityName,
            minSalary,
            maxSalary,
            jobDescription,
            jobStatus,
            aboutCompany,
            technologies,
            thingsToKnow,
            extraFeatures
        } = this.state
        return (
            <div className="newjob container mb-5">
                <h2 className="text-center">Yeni İlan Ver!</h2>
                <div className="alert alert-warning text-dark text-center">Hiç Bir Alanı Boş Bırakamazsınız!</div>
                <hr className="my-4" />
                <Formik
                    initialValues={{
                        jobTitle: "",
                        companyName: "",
                        cityName: "",
                        minSalary: "",
                        maxSalary: "",
                        jobDescription: "",
                        jobStatus: "",
                        aboutCompany: "",
                        technologies: "",
                        thingsToKnow: "",
                        extraFeatures: ""
                    }}
                    validationSchema={Yup.object({
                        jobTitle: Yup.string().required("Bu Alan Boş Bırakılamaz!"),
                        companyName: Yup.string().required("Bu Alan Boş Bırakılamaz!"),
                        cityName: Yup.string().required("Bu Alan Boş Bırakılamaz!"),
                        minSalary: Yup.string().required("Bu Alan Boş Bırakılamaz!"),
                        maxSalary: Yup.string().required("Bu Alan Boş Bırakılamaz!"),
                        jobDescription: Yup.string().required("Bu Alan Boş Bırakılamaz!"),
                        aboutCompany: Yup.string().required("Bu Alan Boş Bırakılamaz!"),
                        technologies: Yup.string().required("Bu Alan Boş Bırakılamaz!"),
                        thingsToKnow: Yup.string().required("Bu Alan Boş Bırakılamaz!"),
                        extraFeatures: Yup.string().required("Bu Alan Boş Bırakılamaz!")
                    })}
                >
                    {
                        ({ values, errors, touched, dirty, isSubmittimg }) => (
                            <form onSubmit={this.submitHandler}>
                                <div className="form-group ">
                                    <label Htmlfor="jobTitle">İş Başlığı</label>
                                    <input name="jobTitle" type="text" className="form-control" id="jobTitle" placeholder="İş Başlığı" value={jobTitle} onChange={this.changeHandler}></input>
                                    {errors.jobTitle && touched.jobTitle &&(
                                        <div className="alert alert-danger text-center">{errors.jobTitle}</div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label Htmlfor="companyName">Şirket Adı</label>
                                    <input name="companyName" type="text" className="form-control" id="companyName" placeholder="Şirket Adı" value={companyName} onChange={this.changeHandler}></input>
                                </div>
                                <div className="form-group">
                                    <label Htmlfor="cityName">Şehir İsmi</label>
                                    <input name="cityName" type="text" className="form-control" id="cityName" placeholder="Şehir İsmi" value={cityName} onChange={this.changeHandler}></input>
                                </div>
                                <div className="form-group">
                                    <label Htmlfor="jobStatus">Çalışma şekli</label>
                                    <input name="jobStatus" type="text" className="form-control" id="jobStatus" placeholder="Örn: Tam Zamanlı" value={jobStatus} onChange={this.changeHandler}></input>
                                </div>
                                <div className="form-group">
                                    <label Htmlfor="minSalary">Minimum Maaş</label>
                                    <input name="minSalary" type="text" className="form-control" id="minSalary" placeholder="Min" value={minSalary} onChange={this.changeHandler}></input>
                                </div>
                                <div className="form-group">
                                    <label Htmlfor="maxSalary">Maksimim Maaş</label>
                                    <input name="maxSalary" type="text" className="form-control" id="maxSalary" placeholder="Max" value={maxSalary} onChange={this.changeHandler}></input>
                                </div>
                                <div className="form-group">
                                    <label Htmlfor="aboutCompany">Şirket Hakkında</label>
                                    <textarea name="aboutCompany" class="form-control" id="aboutCompany" rows="3" value={aboutCompany} onChange={this.changeHandler}></textarea>
                                </div>
                                <div className="form-group">
                                    <label Htmlfor="jobDescription">İş Açıklaması</label>
                                    <textarea name="jobDescription" class="form-control" id="jobDescription" rows="3" value={jobDescription} onChange={this.changeHandler}></textarea>
                                </div>
                                <div className="form-group">
                                    <label Htmlfor="technologies">Teknolojiler</label>
                                    <textarea name="technologies" class="form-control" id="technologies" rows="3" value={technologies} onChange={this.changeHandler}></textarea>
                                </div>
                                <div className="form-group">
                                    <label Htmlfor="technologies">Bilinmesi Gerekenler</label>
                                    <textarea name="thingsToKnow" class="form-control" id="thingsToKnow" rows="3" value={thingsToKnow} onChange={this.changeHandler}></textarea>
                                </div>
                                <div className="form-group">
                                    <label Htmlfor="extraFeatures">Ekstra Özellikler</label>
                                    <input name="extraFeatures" type="text" className="form-control" id="extraFeatures" placeholder="Ekstra Özellikler" value={extraFeatures} onChange={this.changeHandler}></input>
                                </div>

                                <button type="submit" className="btn btn-outline-success">Yayınla</button>
                            </form>

                        )
                    }

                </Formik>
            </div>
        )
    }
}

export default NewJob
