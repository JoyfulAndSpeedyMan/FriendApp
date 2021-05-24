import Vue from 'vue'
import Vuex from 'vuex'
import friend from './friend/index.js'
import chat from './chat/chat.js'
import ws from './ws/index.js'
import user from './user/user.js'
Vue.use(Vuex); //vue的插件机制


//Vuex.Store 构造器选项
const store = new Vuex.Store({
	state: {
		// 不需要登录的路径
		excludeLoginPaths: ['pages/user/login/index', 'pages/user/login/code'],
		// 当前是否在路由跳转中
		isLoginNaving: false
	},
	mutations: {
		loginNav(state) {
			state.isLoginNaving = true;
		},
		endNav(state) {
			state.isLoginNaving = false;
		}
	},
	actions: {
		init({
			dispatch
		}) {
			this.dispatch('friend/init')
			this.dispatch('chat/init')
			this.dispatch('user/init')
		}
	},
	modules: {
		friend,
		ws,
		chat,
		user
	},

})
export default store
