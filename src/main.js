import Vue from 'vue'
import App from '@/App'
import router from '@/router/index'
import http from '@/utils/request'
import '@/scss/aui'


Vue.prototype.$http = http

Vue.config.productionTip = false
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
