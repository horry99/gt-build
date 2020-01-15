import Cookies from 'js-cookies'

const TokenKey = 'Admin-token'


export function setToken(token) {
    return Cookies.set(TokenKey, token, { expires: 0.333333 })  // 8小时  1是1天
}
export function getToken() {
    return Cookies.get(TokenKey)
}
export function removeToken() {
    return Cookies.remove(TokenKey)
}