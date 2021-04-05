import Vue from 'vue'
import App from './App'
import uView from "uview-ui";

Vue.use(uView);

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
import interceptor from 'common/http.interceptor.js'
Vue.use(interceptor,app)

app.$u.api={}
import userApi from 'common/api/user.api.js'
Vue.use(userApi,app)

app.$mount()
