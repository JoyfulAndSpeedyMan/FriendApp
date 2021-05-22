let prefix = '/user/friend'
export default {
	getFriendInfo(friendId){
		return global.$http.request({
			url: `${prefix}/friendInfo?friendId=`+friendId,
			method: 'get'
		});
	},
	getAllFriends() {
		return global.$http.request({
			url: prefix,
			method: 'get'
		});
	},
	getFriendRequst() {
		return global.$http.request({
			url: `${prefix}/request`,
			method: 'get'
		});
	},
	acceptFriendRequst(friendId) {
		return global.$http.request({
			url: `${prefix}/accept`,
			method: 'put',
			data:{
				friendId
			}
		});
	},
	rejectFriendRequst(friendId) {
		return global.$http.request({
			url: `${prefix}/reject`,
			method: 'put',
			data:{
				friendId
			}
		});
	}

}
