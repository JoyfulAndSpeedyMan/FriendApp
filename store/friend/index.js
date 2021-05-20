import vm from '@/main.js'
const friend = {
	namespaced: true,
	state: {
		friends: {}
	},
	mutations: {
		setFriends(state, friends) {
			state.friends = friends
		}
	},
	actions: {
		loadFriends({ commit, state }) {
			vm.$u.api.friend.getAllFriends()
				.then(res=>{
					commit('setFriends',res.data)
				})
		}
	}

}
export default friend;
