let prefix='/user/friend'
const install = (Vue, vm) => {
	let getAllFriends = ()=>vm.$u.get(`${prefix}`)
	let findUserByPhone = (phone)=>vm.$u.get(`${prefix}/findByPhone?phone=${phone}`)
	
	let getFriendVerConfig = (friendId)=>vm.$u.get(`${prefix}/preAdd?friendId=${friendId}`)
	let addFriend = (friendId,content)=>vm.$u.put(`${prefix}/request`,{friendId,content})
	let acceptFriend = (friendId)=>vm.$u.put(`${prefix}/request/accept}`,{friendId})
	
	let getFriendRequst = ()=>vm.$u.get(`${prefix}/request`)
	
	let deleteFriend = (friendId)=>vm.$u.delete(`${prefix}`,{friendId})
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	vm.$u.api.friend = {
		getAllFriends,
		findUserByPhone,
		getFriendVerConfig,
		addFriend,
		acceptFriend,
		getFriendRequst,
		deleteFriend
	};
}

export default {
	install
}