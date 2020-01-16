import axios from 'axios'
import qs from 'qs'
import { getToken, removeToken } from './auth'


/** 
 * 提示函数 
 * 禁止点击蒙层、显示一秒后关闭
 */
const tip = (msg, type) => {
    this.$message({
        message: msg,
        type: type
    });
}

/** 
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
    router.replace({
        path: '/login',
        query: {
            redirect: router.currentRoute.fullPath
        }
    });
}


/** 
 * 请求失败后的错误统一处理 
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status) => {
    switch (status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。                
        case 401:
            toLogin()
            break;

        // 403 token过期
        // 跳转登录页面                
        case 403:
            tip('登录过期，请重新登录', 'warning')
            removeToken()
            toLogin()
            break;

        // 404请求不存在
        case 404:
            tip('网络请求不存在', 'warning')
            break;
        // 其他错误，直接抛出错误提示
        default:
            tip(error.response.data.message, 'error')
    }
}

const http = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    timeout: 180 * 1000
})

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
http.get = (url, params) => {
    return new Promise((resolve, reject) => {
        axios.get(
            url,
            {
                params: params
            }
        ).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err)
        })
    })
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
http.post = (url, params) => {
    return new Promise((resolve, reject) => {
        axios.post(
            url, qs.stringify(params)
        ).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err)
        })
    })
}

/**
 * json请求
 * @param url
 * @param params
 */
http.postJson = (url, params, onProgress, config) => {
    return new Promise((resolve, reject) => {
        axios.post(
            url,
            params,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                onProgress,
                ...(config || {})
            }
        ).then(res => {
            resolve(res)
        }).catch(err => {
            console.error(err)
            reject(err)
        })
    })
}


//请求拦截器
http.interceptors.request.use(config => {
    config.headers['Accept-Language'] = 'zh-CN'
    config.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
    // 每次发送请求之前判断是否存在token        
    // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
    if (getToken()) {
        config.headers['token'] = getToken()
    }
    return config
}, error => {
    return Promise.reject(error)
})

// 响应拦截器
http.interceptors.response.use(response =>
    response.status === 200 ? Promise.resolve(response) : Promise.reject(response),
    error => {
        // 服务器状态码不是2开头的的情况
        // 这里可以跟你们的后台开发人员协商好统一的错误状态码    
        // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
        // 下面列举几个常见的操作，其他需求可自行扩展
        if (error) {
            errorHandle(error.response.status)
            return Promise.reject(error.response);
        } else {
            // 处理断网的情况
            // eg:请求超时或断网时，更新state的network状态
            // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
            // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
            if (!window.navigator.onLine) {
                // store.commit('changeNetwork', false);
            } else {
                return Promise.reject(error);
            }
        }
    })


export default http