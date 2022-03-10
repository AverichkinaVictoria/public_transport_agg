import {$authHost, $authHostR, $host} from "./index";
import axios from "axios";
import jwt_decode from 'jwt-decode'

export const registration = async (user_email, user_password) => {
    const {data} = await $host.post('api/v1/auth/register', {
        email: user_email.toString(),
        password: user_password.toString(),
        type: 'manager'
    })
    // console.log("DATA")
    // console.log(data)
    // localStorage.setItem('token', data.token.accessToken)
    // localStorage.setItem('refreshToken', data.token.refreshToken)
    // localStorage.setItem('expiresAt', data.token.expiresAt)
    return data
}

export const login = async (user_email, user_password) => {
    const {data} = await $host.post('api/v1/auth/login',{
        email: user_email.toString(),
        password: user_password.toString()
    })
    localStorage.setItem('token', data.token.accessToken)
    localStorage.setItem('refreshToken', data.token.refreshToken)
    localStorage.setItem('expiresAt', data.token.expiresAt)
    return data
}

export const check = async () => {
    const response = await $authHostR.post('api/v1/auth/check', {
        accessToken: localStorage.getItem('token'),
        refreshToken: localStorage.getItem('refreshToken'),
        expiresAt: localStorage.getItem('expiresAt')
    })
    return response
}

export const getCurrentUser = async () => {
    const data = await $authHostR.get('api/v1/users/current')
    localStorage.setItem('id', data.data.id)
    return data
}






export const sendReset = async (email) => {
    const response = await $host.post('api/v1/auth/send_reset', {email: email.toString()})
    return response
}


export const passwordReset = async (email, passwordNew) => {
    const response = await $host.post('api/v1/auth/reset', {
        email: email.toString(),
        token: localStorage.getItem('token'),
        password: passwordNew.toString()
    })
    return response
}



