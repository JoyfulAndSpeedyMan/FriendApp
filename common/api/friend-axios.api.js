let prefix = '/user/friend'
export default {
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
	}

}
