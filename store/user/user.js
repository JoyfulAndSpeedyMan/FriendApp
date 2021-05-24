import userApi from '@/common/api/user-axios.api.js'
const user = {
	namespaced: true,
	state: {
		userInfo: {}
	},
	getters: {
		getRequestFid(state){
			return i=> state.friendRequests[i].fId;
		}
	},
	mutations: {
		setUserInfo(state,userInfo) {
			state.userInfo = userInfo;
		}
	},
	actions: {
		init({commit,dispatch}){
			dispatch('loadUserInfo')
		},
		loadUserInfo({commit,dispatch}){
			userApi.getBaseInfo()
				.then(res=>{
					if(res.code=='00000'){
						commit('setUserInfo',res.data)
					}
				})
		}

	}

}
export default user;
