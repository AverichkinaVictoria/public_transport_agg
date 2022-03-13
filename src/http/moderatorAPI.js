import {$authHost, $authHostE, $authHostR, $host} from "./index";
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
    const response = await $authHost.post('api/v1/companies/requests/'+id+'?approve='+isApproved)
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

export const putCompaniesFiles = async (name_file) => {
    const response = await $authHostR.post('api/v1/media/upload', {name:
        name_file, aclWatchers: ['manager', 'moderator']})
    return response
}

export const putCompaniesFiles1 = async (url,fname,file) => {
    const response = await axios.post(url, {file_name:fname, file: file})
    return response
}

export const getHelpDesk = async () => {
    const response = await $authHostR.get('api/v1/helpdesk/reports')
    return response
}

export const getUsersList = async () => {
    const response = await $authHostE.get('api/v1/User')
    return response
}

export const getCurrentUserProfile = async (user_email) => {
    const response = await $authHostE.get('api/v1/User/GetByEmail?email='+user_email.toString())
    localStorage.setItem('user', response.data)
    return response
}

export const deleteUser = async (user_id) => {
    const response = await $authHostE.delete('api/v1/User/RemoveById?id='+user_id)
    return response
}

export const deleteFeedback = async (feedback_id) => {
    const response = await $authHostE.delete('api/v1/Comment/RemoveById?id='+feedback_id)
    return response
}

export const getAllFeedbacks = async () => {
    const response = await $authHostE.get('api/v1/Comment/GetAll')
    return response
}

export const postFeedbacks = async () => {
    const response = await $authHostE.post('api/v1/Comment/AddComment',{
        id: 0,
        firstName: "Nina",
        lastName: "Nikolaeva",
        middleName: "Vasilevna",
        email: "test1@mail.ru",
        phone: "+79836578274",
        companyName: "RZD1",
        vehicle: "№1849383",
        departure: "Voronezh",
        arrival: "Moscow",
        rating: 4,
        feedback: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    })
    return response
}

export const putCurrentUserProfile = async (user_id,user_firstName,user_lastName,user_middleName,user_email,user_phone,user_companyId,user_companyName,user_type,img_url) => {
    const response = await $authHostE.put('api/v1/User/UpdateUserById?id='+user_id, {

        id: user_id,
        firstName: user_firstName.toString(),
        lastName: user_lastName.toString(),
        middleName: user_middleName.toString(),
        email: user_email.toString(),
        phone: user_phone.toString(),
        login: user_email.toString(),
        moderatorToken: "",
        companyId: user_companyId,
        companyName: user_companyName,
        userType: user_type,
        imageUrl: img_url
    })
    return response
}

export const addUser= async (user_id,user_firstName,user_lastName,user_middleName,user_email,user_phone,img_url, user_type, user_companyId,user_companyName) => {
    const response = await $authHostE.post('api/v1/User/AddUser',
        {
            id: user_id,
            firstName: user_firstName.toString(),
            lastName: user_lastName.toString(),
            middleName: user_middleName.toString(),
            email: user_email.toString(),
            phone: user_phone.toString(),
            login: user_email.toString(),
            moderatorToken: "",
            companyId: user_companyId,
            companyName: user_companyName,
            userType: user_type,
            imageUrl: img_url
            // id: 0,
            // firstName: 'Nina3',
            // lastName: 'Abramova3',
            // middleName: 'Nikolaevna3',
            // email: 'nn3@mail.ru',
            // phone: '+79939284938',
            // login: 'nn3@mail.ru',
            // moderatorToken: "",
            // companyId: 0,
            // companyName: "RZD3",
            // userType: "passenger",
            // imageUrl: ""
        })
    return response
}
