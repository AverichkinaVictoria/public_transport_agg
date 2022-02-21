import {$authHost, $host} from "./index";

export const registration = async (firstName, middleName, lastName, email, transportCompany, password) => {
    const response = await $host.post('/api/v1/auth/register', {firstName, middleName, lastName, email, transportCompany, password})
    return response
}

export const login = async (email, password) => {
    const response = await $host.post('/api/v1/auth/login', {email, password})
    return response
}

export const check = async () => {
    const response = await $authHost.post('/api/v1/auth/check')
    return response
}

export const sendReset = async (email) => {
    const response = await $host.post('/api/v1/auth/send_reset', email)
    return response
}

export const passwordReset = async (passwordNew) => {
    const response = await $host.post('/api/v1/auth/reset', passwordNew)
    return response
}

