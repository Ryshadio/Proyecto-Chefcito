import axios from 'axios'

const baseApi = axios.create({
    baseURL: "http://localhost:3000/",
    headers: { 'Content-Type': 'application/json' },
    crossDomain: true,
    
})

export default baseApi