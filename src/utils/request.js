import axios from 'axios'
import { getToken } from './auth'
const http = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    timeout: 180 * 1000
})


http.interceptors.request.use(config => {
    config.headers['Accept-Language'] = 'zh-CN'
    // config.headers['token'] = getToken()
    return config
}, error => {
    return Promise.reject(error)
})

http.interceptors.response.use(response => {
    return response
}, error => {
    console.error(error)
    return Promise.reject(error)
})


export default http