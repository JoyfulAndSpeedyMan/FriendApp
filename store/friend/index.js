import api from '@/common/api/friend-axios.api.js'
import commonApi from '@/common/api/common.api.js'
import userApi from '@/common/api/user-axios.api.js'
const friend = {
	namespaced: true,
	state: {
		friends: {},
		friendRequests: []
	},
	getters: {
		getRequestFid(state){
			return i=> state.friendRequests[i].fId;
		}
	},
	mutations: {
		setFriends(state, friends) {
			state.friends = friends;
		},
		putFriend(state, {index ,user}){
			console.log('putFriend')
			console.log('user')
			console.log(user)
			// let o = {
			// 	"_id": "---",
			// 	"createTime": user.createTime,
			// 	"fId": user.id,
			// 	"fPhone": user.phone,
			// 	"fNickname": user.nickname,
			// 	"friendName": user.friendName || user.nickname || user.phone,
			// 	"fAvatar": user.avatar
			// };

			console.log(index)
			console.log('before friends[index)]]')
			console.log(state.friends[index])
			state.friends[index].push(user);
			console.log('after friends')
			console.log(state.friends)
		},
		removeFriendRequests(state,_id){
			let fs = state.friendRequests
			state.friendRequests = fs.filter(f=> {
						if(f._id == _id){
							return false;
						}
						return true;
					});
		},
		setFriendRequests(state, friendRequests) {
			state.friendRequests = friendRequests;
		}
	},
	actions: {
		init({dispatch}) {
			dispatch('loadFriends')
			dispatch('loadFriendRequests')
		},
		loadFriends({commit,state}) {
			api.getAllFriends()
				.then(res => {
					let fs = res.data;
					commit('setFriends', fs)
				})
		},
		putFriendAction({commit,state}, {user, index }){
			console.log('user')
			console.log(user)
			console.log('index')
			console.log(index)
			console.log('user[index]')
			console.log(user[index])
			return commonApi.groupName(user[index])
					.then(pinyin => {
						console.log('putFriendAction pinyin')
						console.log(pinyin)
						console.log(commit)
						commit('putFriend',{ user , index: pinyin.data});
					})
					
		},
		putFriendByIdAction({commit,state,dispatch}, userId) {
			console.log('putFriend')
			let user;
			return api.getFriendInfo(userId)
					.then(res => {
						if (res.code == '00000') {
							user = res.data;
							console.log('getBaseInfo2')
							console.log('res.data')
							console.log(res.data)
							console.log('putFriendByIdAction getBaseInfo2 user')
							console.log(user)
							return res.data
						}
					})
					.then(user => {
						console.log('putFriendByIdAction user')
						console.log(user)
						return dispatch('putFriendAction',{ user , index: 'friendName' });
					});
			console.log('putFriend end')
		},
		
		loadFriendRequests({
			commit,
			state
		}) {
			api.getFriendRequst()
				.then(res => {
					commit('setFriendRequests', res.data)
				})
		},

	}

}
export default friend;
