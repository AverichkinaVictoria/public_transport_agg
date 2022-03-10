import {$authHost, $host} from "./index";
import axios from "axios";

// export const getCompanies = async () => {
//     const {response} = await $authHost.post('/api/v1/companies')
//     return response
// }

export const getRoutes = async () => {
    // const response = await axios.get('http://192.168.10.137:5000/api/v1/companies/1')
    const response = await axios.post('http://192.168.10.137:5000/schedule', {
        departure_city: "string",
        arrival_city: "string",
        start_date: "2021-02-21T16:54:58.428Z",
        end_date: "2023-02-21T16:54:58.428Z"
    })
    return response
}