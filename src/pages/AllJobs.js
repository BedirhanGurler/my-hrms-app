import React, { useEffect, useState } from 'react'
import './AllJobs.css'
import JobServie from '../services/jobService';
import { Link } from 'react-router-dom';

export default function AllJobs() {

    const [jobAdverts, setjobAdverts] = useState([]);
    useEffect(()=>{
        let jobService = new JobServie();
        jobService.getAllJobs().then((result)=>setjobAdverts(result.data.data));
    },[])

    return (
        <div className="alljobs">
            <div className="container">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">İş Başlığı</th>
                            <th scope="col">Şirket Adı</th>
                            <th scope="col">Şehir</th>
                            <th scope="col">Maaş Aralığı</th>
                            <th scope="col">İş Açıklaması</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {jobAdverts.map(((jobAdvert)=>
                            <tr key={jobAdvert.id}>
                                <td scope="row">{jobAdvert.jobTitle}</td>
                                <td scope="row">{jobAdvert.companyName}</td>
                                <td scope="row">{jobAdvert.cityName}</td>
                                <td scope="row">{jobAdvert.minSalary} - {jobAdvert.maxSalary} / ay</td>
                                <td scope="row">{jobAdvert.jobDescription}</td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
