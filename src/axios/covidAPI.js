import axios from "axios";
import axiosClient from "./axiosClient";

const covidAPI = {
    getAll: (params)=>
    {
        const url = '/';
        return axiosClient.get(url, {params})
    },

    getByID: (id)=>
    {
        const url = `/${id}`;
        return axiosClient.get(url)
    }
}



export default covidAPI