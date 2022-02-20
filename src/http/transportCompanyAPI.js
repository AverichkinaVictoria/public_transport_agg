import {$authHost, $host} from "./index";

export const getCompanies = async () => {
    const {response} = await $authHost.post('/api/v1/companies')
    return response
}