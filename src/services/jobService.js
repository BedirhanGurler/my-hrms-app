import axios from "axios";
export default class JobService{
    getAllJobs(){
        return axios.get("http://localhost:8080/api/jobinformations/getall")
    }
}