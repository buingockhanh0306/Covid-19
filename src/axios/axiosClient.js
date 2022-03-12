import axios from 'axios'
import queryString from 'query-string'

const axiosClient = axios.create(
    {
        baseURL: 'https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST?fbclid=IwAR1UCKt-lM0mITqxyalzx-XdQ3cFYX51Il_7kU0X79sS5LDZwdIp7FFPAxg&utm_source=j2team&utm_medium=url_shortener',
        headers: {
            'content-type': 'application.json'
        },
        paramsSerializer: params => queryString.stringify(params),
    }
)


axiosClient.interceptors.request.use(async (config)=>{
    return config;
})

axiosClient.interceptors.request.use(reponse =>{
    if(reponse && reponse.data){
        return reponse.data
    }
    return reponse
}, (error)=>{
    throw error;
});

export default axiosClient;