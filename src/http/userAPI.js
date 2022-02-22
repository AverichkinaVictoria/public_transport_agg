import {$authHost, $host} from "./index";
import axios from "axios";

export const registration = async (user_email, user_password) => {
    const response = await $host.post('api/v1/auth/register', {
        email: user_email.toString(),
        password: user_password.toString()
    })
    return response
}

export const login = async (user_email, user_password) => {
    // const response = await $host.post('/api/v1/auth/login', {email, password})
    const response = await $host.post('api/v1/auth/login',{
        email: user_email.toString(),
        password: user_password.toString()
    })
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

