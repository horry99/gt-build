import Cookies from 'js-cookie'

const TokenKey = 'Admin-token'

export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(token) {
    return Cookies.set(TokenKey, token, { expires: 0.3333333 }) // 8小时  1是1天
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}