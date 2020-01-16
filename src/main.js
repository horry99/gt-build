import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from '@/App'
import router from '@/router/index'
import http from '@/utils/request'
import '@/assets/scss/aui'
import '@/permission'
Vue.use(ElementUI)

Vue.prototype.$http = http

Vue.config.productionTip = false
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
