import {$authHost, $authHostR, $host} from "./index";
import axios from "axios";

export const getCompanies = async () => {
    const response = await $authHost.get('api/v1/companies')
    return response
}

export const getCompaniesRequests = async () => {
    const response = await $authHost.get('api/v1/companies/requests')
    return response
}

export const postCompaniesRequests = async (id,isApproved) => {
    const response = await $authHost.post('api/v1/companies/requests/'+id+'?approve='+isApproved,{})
    return response
}

export const putCompanies = async (id, act,company_code,company_name,company_address,company_phone,company_website,company_desc) => {
    const response = await $authHost.put('api/v1/companies/'+id, {
        name: company_code,
        legal_name: company_name,
        address: company_address,
        phone: company_phone,
        website: company_website,
        description: company_desc,
        notes: "",
        is_active: act
    })
    return response
}

export const getCompaniesFiles = async (id) => {
    const response = await $authHostR.get('api/v1/media/download/'+id)
    return response
}

export const putCompaniesFiles = async () => {
    const response = await $authHostR.post('api/v1/media/upload', {name:
    'test doc2', aclWatchers: ['manager', 'moderator']})
    return response
}

export const putCompaniesFiles1 = async (url,fname,file) => {
    const response = await axios.post(url, {file_name:fname, file: file})
    return response
}
