import vm from '@/main.js'
const friend = {
	namespaced: true,
	state: {
		friends: {},
		friendRequests:[]
	},
	mutations: {
		setFriends(state, friends) {
			state.friends = friends;
		},
		setFriendRequests(state,friendRequests){
			state.friendRequests = friendRequests;
		}
	},
	actions: {
		loadFriends({ commit, state }) {
			vm.$u.api.friend.getAllFriends()
				.then(res=>{
					commit('setFriends',res.data)
				})
		},
		loadFriendRequests({ commit, state }){
			vm.$u.api.friend.getFriendRequst()
				.then(res=>{
					commit('setFriendRequests',res.data)
				})
		},
		init({dispatch}){
			dispatch('loadFriends')
			dispatch('loadFriendRequests')
		}
	}

}
export default friend;
