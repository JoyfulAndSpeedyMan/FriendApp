import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
import store from './store'
import '@/common/api/index.js'

Vue.prototype.$store = store

Vue.use(uView);

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App,
	store
})
import interceptor from 'common/http.interceptor.js'
Vue.use(interceptor,app)

app.$u.api = {}
import userApi from 'common/api/user.api.js'
import postApi from 'common/api/post.api.js'
import postCommentApi from 'common/api/post-comment.api.js'
import friendApi from 'common/api/friend.api.js'
Vue.use(userApi, app)
Vue.use(postApi, app)
Vue.use(postCommentApi, app)
Vue.use(friendApi, app)

app.$mount()

export default app;