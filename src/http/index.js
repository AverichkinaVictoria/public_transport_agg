import axios from 'axios';

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL_AUTH
})

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL_AUTH
})

const $authHostR = axios.create({
    baseURL: process.env.REACT_APP_API_URL_AUTH
})

const $authHostE = axios.create({
    baseURL: process.env.REACT_APP_API_URL_AUTH
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)
$authHostR.interceptors.request.use(authInterceptor)
$authHostE.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost,
    $authHostR,
    $authHostE
}