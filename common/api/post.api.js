let prefix='/post'
const install = (Vue, vm) => {

	let getAllPost= (page,size)=>vm.$u.get(`${prefix}?page=${page}&size=${size}`)
	let thumb = postId => vm.$u.put(`${prefix}/thumb`,{postId})
	let unthumb = postId => vm.$u.delete(`${prefix}/thumb`,{postId})
	let forward = postId => vm.$u.put(`${prefix}/forward`,{postId})
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	vm.$u.api.post = {
		getAllPost,
		thumb,
		unthumb,
		forward
	};
}

export default {
	install
}