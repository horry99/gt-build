import router from '@/router/index'
import { getToken } from '@/utils/auth'

// 判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {// 判断是否需要登录权限
        if (getToken()) {
            if (to.path === '/login') {
                // if is logged in, redirect to the home page
                next({ path: '/' })
            } else {
                next()
            }
        } else {
            // other pages that do not have permission to access are redirected to the login page.
            next('/login')
        }
    } else {
        next()
    }
})