import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const routes = [
    {
        path: '/',
        // redirect: '/home',
        name: 'home',
        component: () => import('@/views/pages/home'),
        // children: [
        //     {
        //         path: '/home',
        //         name: 'home',
        //         meta: { title: '首页', affix: true },
        //         component: () => import('@/views/pages/home')
        //     }
        // ]
    },
    {
        path: '/404',
        component: () => import('@/views/pages/404'),
        name: '404',
        meta: { title: '404未找到' },
        beforeEnter(to, from, next) {
            // 拦截处理特殊业务场景
            // 如果, 重定向路由包含__双下划线, 为临时添加路由
            if (/__.*/.test(to.redirectedFrom)) {
                return next(to.redirectedFrom.replace(/__.*/, ''))
            }
            next()
        }
    },
    {
        path: '*',
        component: () => import('@/views/pages/404')
    },
]
const router = new Router({
    mode: 'history',
    routes: routes
})
export default router